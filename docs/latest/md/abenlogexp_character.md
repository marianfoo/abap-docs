  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands_dobj.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20Type%20of%20Character-Like%20Data%20Objects%2C%20ABENLOGEXP_CHARACTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

rel\_exp - Comparison Type of Character-Like Data Objects

The following tables show the [comparison types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_type_glosry.htm "Glossary Entry") for comparisons between character-like data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) to this type. The [comparison rules for the comparison types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_type.htm) determine how the comparison is performed. If no comparison type is specified for a combination, no comparisons are possible.

-   [Comparisons with Numeric Data Types](#@@ITOC@@ABENLOGEXP_CHARACTER_1)
-   [Comparisons with Character-Like Data Types](#@@ITOC@@ABENLOGEXP_CHARACTER_2)
-   [Comparisons with Byte-Like Data Types](#@@ITOC@@ABENLOGEXP_CHARACTER_3)
-   [Comparisons with Date Types, Time Types, or Time Stamp Types](#@@ITOC@@ABENLOGEXP_CHARACTER_4)

Comparisons with Numeric Data Types   

\-

string, c, n

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

Value Ranges and Length Adjustments

-   When the types string and c are compared with packed numbers of the type p, the comparison type p has 31 places with the number of decimal places of the operand of type p, which can raise exceptions if overflows occur.
-   When the type n is compared with packed numbers of the type p, the numeric text can contain up to 31 digits, excluding leading zeros and regardless of how many decimal places are in the operand with type p.
-   When the types string, c, and n are compared with integers of the types int8, i, s, and b, the numeric value in the character-like operand does not have to fit the value range of the comparison type i. If the numeric value is not in the value range, the comparison returns the correct result and no exception is raised.

Example

Comparison of a numeric text with an integer. If numtext contains an invalid value, an uncatchable exception is raised with the runtime error CONVT\_NO\_NUMBER.

DATA numtext TYPE n LENGTH 3.
cl\_demo\_input=>add\_field( CHANGING field = numtext ).
DATA num TYPE int1.
cl\_demo\_input=>request( CHANGING field = num ).
cl\_demo\_output=>display(
  COND #( WHEN numtext < num THEN |{ numtext } < { num }|
          WHEN numtext > num THEN |{ numtext } > { num }|
                             ELSE |{ numtext } = { num }| ) ).

Comparisons with Character-Like Data Types   

\-

string

c

n

string

string

string

p

c

string

c

p

n

p

p

n

Length Adjustments

-   Operands with a different length of data type string never match. If the content of the operands match for the length of the shorter operand, the shorter operand is smaller than the longer one. Otherwise, the surplus places in the longer field are truncated on the right, and then the content is compared.
-   In comparisons between two operands of data type c with the same length, the entire length is compared, which means the trailing blanks are respected. In comparisons between two operands of data type c with different lengths, the shorter field is [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) to the longer field, with blanks used as padding on the right.
-   In comparisons between two operands of data type n, the shorter field is [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_n.htm) to the longer field, with the character 0 used as padding on the left.

Hint

In comparisons between text fields of the type c and text strings of the type string, any trailing blanks are ignored by conversions from c to string. This can lead to unexpected results. The conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) can be used here to force other comparison types (see the example there).

Example

In the following comparison, the comparison type is c and the comparison is performed in the current code page, in accordance with the binary representation. In most code pages, a is greater than Z. See also the example for [CONVERT TEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm).

IF 'a' > 'Z'.
  cl\_demo\_output=>display\_text( \`'a' > 'Z'\` ).
ELSE.
  cl\_demo\_output=>display\_text( \`'a' < 'Z'\` ).
ENDIF.

Example

The following comparison is false, which is probably unexpected. The value returned by [boolc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) has the type string and contains a blank, whereas the constant abap\_false has the type c. For the comparison, the value of abap\_false is converted to an empty string, since the blank it contains is ignored.

IF boolc( 1 = 2 ) = abap\_false.
  cl\_demo\_output=>display\_text( 'yes' ).
ELSE.
  cl\_demo\_output=>display\_text( 'no' ).
ENDIF.

The following comparison, however, is true, since the return value of [xsdbool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) has the same ABAP type as the constant abap\_false.

IF xsdbool( 1 = 2 ) = abap\_false.
  cl\_demo\_output=>display\_text( 'yes' ).
ELSE.
  cl\_demo\_output=>display\_text( 'no' ).
ENDIF.

Executable Example

[Comparing Text Strings of Different Length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_comparison_abexa.htm)

Comparisons with Byte-Like Data Types   

\-

string

c

n

xstring

string

string

p

x

string

c

p

Length Adjustments

-   In comparisons of data type c with x or xstring, the shorter field is adjusted to the length of the longer field after conversions from x to c or xstring to string. Blanks are used as padding on the right.
-   Lengths are not adjusted in comparisons between the data type string on one side and x or xstring on the other.

Example

The logical expression CONV xstring( 255 ) = 'FF' is true.

ASSERT CONV xstring( 255 ) = 'FF'.

Comparisons with Date Types, Time Types, or Time Stamp Types   

\-

string

c

n

d, t

string

c

n

utclong

utclong

utclong

\-

Length Adjustments

-   For comparisons between data types c, n, or string on the one hand and d on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks are truncated.
-   For comparisons between data types c or n on the one hand and t on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks or characters 0 are truncated.
-   Lengths are not adjusted for comparisons between the data type string and t.

Example

The example shows the length adjustment in a comparison of a time field with a character string. Both comparisons are true.

IF CONV t( '120000' ) = '12'.
  cl\_demo\_output=>write( |CONV t( '120000' ) = '12'| ).
ENDIF.
IF CONV t( '123000' ) <> '12'.
  cl\_demo\_output=>write( |CONV t( '123000' ) <> '12'| ).
ENDIF.
cl\_demo\_output=>display( ).

Example

The following comparison is always true. The initial text string literal is converted to the initial value of a time stamp field and this is smaller than any real time stamp.

ASSERT utclong\_current( ) > \`\`.

Continue
![Example](exa.gif "Example") [rel\_exp - Comparing Text Strings of Different Length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_comparison_abexa.htm)