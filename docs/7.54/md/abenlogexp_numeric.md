  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands_dobj.htm) → 

rel\_exp - Comparison Type of Numeric Data Objects

The following tables show the [comparison types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_type_glosry.htm "Glossary Entry") for comparisons between numeric data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm) to this type. The [comparison rules for the comparison types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_type.htm) determine how the comparison is performed.

-   [Comparisons with Numeric Data Types](#@@ITOC@@ABENLOGEXP_NUMERIC_1)

-   [Comparisons with Character-Like Data Types](#@@ITOC@@ABENLOGEXP_NUMERIC_2)

-   [Comparisons with Byte-Like Data Types](#@@ITOC@@ABENLOGEXP_NUMERIC_3)

-   [Comparisons with Date Types/Time Types/Time Stamp Types](#@@ITOC@@ABENLOGEXP_NUMERIC_4)

Note

If a [decimal floating point number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecfloat_glosry.htm "Glossary Entry") is involved in a comparison, the comparison is always made with the type decfloat34.

Comparisons with Numeric Data Types

\-

decfloat16, decfloat34

f

p

int8

i

s

b

decfloat16, decfloat34

decfloat34

decfloat34

decfloat34

decfloat34

decfloat34

decfloat34

decfloat34

f

decfloat34

f

f

f

f

f

f

p

decfloat34

f

p

p

p

p

p

int8

decfloat34

f

p

int8

int8

int8

int8

i

decfloat34

f

p

int8

i

i

i

s

decfloat34

f

p

int8

i

s

s

b

decfloat34

f

p

int8

i

s

b

Value Ranges and Length Adjustments

-   When two operands with data type p are compared, numbers with more than 31 places are edited internally to ensure that there is no overflow.

-   When two operands with data type p but with different lengths are compared, the shorter operand is [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_p.htm) to the length of the longer operand.

-   When two operands with data type p but with different numbers of decimal places are compared, the operand with fewer decimal places is [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_p.htm) to a number with the same number of decimal places as the other operand.

-   When an operand with type p is compared with an operand with type int8, i, s, or b, the comparison type p has 31 places and the number of decimal places of the operand of type p.

-   If the value of an operand of type int8 does not match the value range of a comparison type p, the exception is caught internally and the comparison delivers the correct result.

Example

The result of this example comes as a surprise at first, but is caused by the fact that the value 0.15 cannot be represented exactly as a binary floating point number.

cl\_demo\_output=>display(
  COND #(
    WHEN CONV f( '0.15' ) = CONV decfloat34( '0.15' )
      THEN \`OK\`
      ELSE \`Surprise, surprise ...\` ) ).

Comparisons with Character-Like Data Types

\-

decfloat16, decfloat34

f

p

int8

i, s, b

string, c, n

decfloat34

f

p

int8

i

Value Ranges and Length Adjustments

-   When the types string and c are compared with packed numbers of the type p, the comparison type p has 31 places together with the number of decimal places of the operand of type p. This can raise exceptions if overflows occur.

-   When the type n is compared with packed numbers of the type p, the numeric text can contain up to 31 digits, excluding leading zeros and regardless of how many decimal places are in the operand with type p.

-   When the types string, c, and n are compared with integers of the types int8, i, s, and b, the number value in the character-like operand does not need to fit the value range of the comparison type i. If the number value is not in the value range, the comparison produces the correct result and no exception is raised.

Example

Both comparisons are true. The comparison type of the first comparison is character-like and different strings do not match. The comparison type of the second comparison, on the other hand, is numeric due to the numeric literal \-1. The string 1- contains a number in commercial notation, which is converted to an integer number with the value \-1.

IF '-1' <> '1-'.
  cl\_demo\_output=>write( |'-1' <> '1-'| ).
ENDIF.
IF -1 = '1-'.
  cl\_demo\_output=>write( |-1 = '1-'| ).
ENDIF.
cl\_demo\_output=>display( ).

Comparisons with Byte-Like Data Types

\-

decfloat16, decfloat34

f

p

int8

i, s, b

xstring, x

decfloat34

f

p

int8

i

Length Adjustments

The comparison type p has 31 places and the number of decimal places in the operand of type p.

Note

In [conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyte_source_fields.htm) of byte-like data types to any numeric type except int8, all bytes are ignored except for the final four. In the case of int8, the final 8 bytes are respected.

Example

The comparison is true for all valid integer numbers of the type i. In the comparison, the byte string created from a number is converted to the original number.

DATA(num) = -2147483648.
cl\_demo\_input=>request( CHANGING field = num ).
DATA(hex) = CONV xstring( num ).
IF hex = num.
  cl\_demo\_output=>display( hex ).
ENDIF.

Comparisons with Date Types/Time Types/Time Stamp Types

\-

decfloat16, decfloat34

f

p

int8

i, s, b

d, t

decfloat34

f

p

int8

i

utclong

\-

\-

\-

\-

\-

Example

A valid time specified in sy-timlo is converted to the number of seconds since midnight in the comparisons. This number is compared with the number of seconds that corresponds to noon.

cl\_demo\_output=>display(
  COND #( WHEN sy-timlo <  43200 THEN 'AM'
          WHEN sy-timlo => 43200 THEN 'PM' ) ).