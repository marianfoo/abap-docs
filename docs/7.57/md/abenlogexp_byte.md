  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_dobj.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparison Type of Byte-Like Data Objects, ABENLOGEXP_BYTE, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Comparison Type of Byte-Like Data Objects

The following tables show the [comparison types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_type_glosry.htm "Glossary Entry") for comparisons between byte-like data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) to this type. The [comparison rules for the comparison types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_type.htm) determine how the comparison is performed.

-   [Comparisons with Numeric Data Types](#@@ITOC@@ABENLOGEXP_BYTE_1)
-   [Comparisons with Character-Like Data Types](#@@ITOC@@ABENLOGEXP_BYTE_2)
-   [Comparisons with Byte-Like Data Types](#@@ITOC@@ABENLOGEXP_BYTE_3)
-   [Comparisons with Date Types, Time Types, or Time Stamp Types](#@@ITOC@@ABENLOGEXP_BYTE_4)

Comparisons with Numeric Data Types   

\-

xstring, x

decfloat16, decfloat34

decfloat34

f

f

p

p

int8

int8

i, s, b

i

Length Adjustments

The comparison type p has 31 places and the number of decimal places for the operand of type p.

Hint

In [conversions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_source_fields.htm) of byte-like data types to any numeric type except int8, only the last four bytes are respected. In the case of int8, the last 8 bytes are respected.

Example

Since the decimal places are lost in the conversion between numeric and byte-like types, the comparison for inequality is true.

TYPES pack TYPE p DECIMALS 2.
DATA pack TYPE pack VALUE '1234.56'.
FINAL(hex) = CONV xstring( pack ).
IF hex <> pack.
  cl\_demo\_output=>display( |{ CONV pack( hex ) } <> { pack }| ).
ENDIF.

Comparisons with Character-Like Data Types   

\-

xstring

x

string

string

string

c

string

c

n

p

p

Length Adjustments

-   In comparisons of data type c with x or xstring, the shorter field is adjusted to the length of the longer field after conversions from x to c or xstring to string. Blanks are used as padding on the right.
-   Lengths are not adjusted in comparisons between the data type string on one side and x or xstring on the other.

Example

The comparison uses the appropriate [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm) to convert the hexadecimal content FF00 of hex to the string FF00, which is then compared with FFxx. The operands are not equal.

DATA hex   TYPE x LENGTH 2.
DATA text  TYPE c LENGTH 4.
hex  = 'FF00'.
text = 'FFxx'.
IF hex <> text.
  cl\_demo\_output=>display( |{ hex } <> { text } | ).
ENDIF.

Comparisons with Byte-Like Data Types   

\-

xstring

x

xstring

xstring

xstring

x

xstring

x

Length Adjustments

-   Operands of the data type xstring with different lengths never match. If the content of the operands matches the length of the shorter operand, the shorter operand is smaller than the longer one. Otherwise the surplus bytes in the longer field are truncated on the right, and then the content is compared.
-   In comparisons between two operands of the data type x, the shorter field is [converted](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm) to the longer field, with hexadecimal 0 used as padding on the right.

Example

Before the comparison, the appropriate [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_c.htm) are used to convert the content of FFxx from text to the hexadecimal value FF00 in the helper variable hex\_helper, and this value is compared with the content of hex.

DATA hex  TYPE x LENGTH 2.
DATA text TYPE c LENGTH 4.
hex  = 'FF00'.
text = 'FFxx'.
...
DATA hex\_helper TYPE x LENGTH 2.
hex\_helper = text.
IF hex = hex\_helper.
  cl\_demo\_output=>display( |{ hex } = { hex\_helper } | ).
ENDIF.

Comparisons with Date Types, Time Types, or Time Stamp Types   

\-

xstring, x

d, t

i

utclong

\-

Example

A hexadecimal number that is the result of the conversion of a valid date is equal to this date.

FINAL(hex) = CONV xstring( sy-datlo ).
ASSERT hex = sy-datlo.
cl\_demo\_output=>display( |{ sy-datlo } { hex }| ).