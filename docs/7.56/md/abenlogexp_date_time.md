  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands_dobj.htm) → 

rel\_exp - Comparison Type of Date Fields, Time Fields, and Time Stamp Fields

The following tables show the [comparison types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomparison_type_glosry.htm "Glossary Entry") for comparisons between date/time types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_elementary.htm) to this type. The [comparison rules for the comparison types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomparison_type.htm) determine how the comparison is performed. If no comparison type is specified for a combination, no comparison is possible.

-   [Comparisons with Numeric Data Types](#@@ITOC@@ABENLOGEXP_DATE_TIME_1)
-   [Comparisons with Character-Like Data Types](#@@ITOC@@ABENLOGEXP_DATE_TIME_2)
-   [Comparisons with Byte-Like Data Types](#@@ITOC@@ABENLOGEXP_DATE_TIME_3)
-   [Comparisons with Date Types, Time Types, or Time Stamp Types](#@@ITOC@@ABENLOGEXP_DATE_TIME_4)

Comparisons with Numeric Data Types

\-

d, t

utclong

decfloat16, decfloat34

decfloat34

\-

f

f

\-

p

p

\-

int8

int8

\-

i, s, b

i

\-

Example

The content of the system field sy-datlo is converted to the number of days since 01/01/0001 in the comparison and compared with the content of days.

DATA(days) = CONV decfloat34( sy-datlo ).
cl\_demo\_input=>request( CHANGING field = days ).
cl\_demo\_output=>display(
  COND #( WHEN days > sy-datlo THEN |{ days } > { sy-datlo }|
          WHEN days < sy-datlo THEN |{ days } < { sy-datlo }|
                               ELSE |{ days } = { sy-datlo }| ) ).

Comparisons with Character-Like Data Types

\-

d, t

utclong

string

string

utclong

c

c

utclong

n

n

\-

Length Adjustments

-   For comparisons between data types c, n, or string on the one hand and d on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks are truncated.
-   For comparisons between data types c or n on the one hand and t on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks or characters "0" are truncated.
-   Lengths are not adjusted for comparisons between the data type string and the data type t.

Example

Comparison of any text string with the content of the system field sy-datlo.

DATA(text) = CONV string( sy-datlo ).
cl\_demo\_input=>request( CHANGING field = text ).
cl\_demo\_output=>display(
  COND #( WHEN text > sy-datlo THEN |{ text } > { sy-datlo }|
          WHEN text < sy-datlo THEN |{ text } < { sy-datlo }|
                               ELSE |{ text } = { sy-datlo }| ) ).

Example

A time stamp formatted as a character string with the formatting option [TIMESTAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string_format_options.htm) can be converted to utclong and compared with a time stamp field. Instead of ISO, SPACE could also be specified.

DATA(ts) = utclong\_current( ).
DATA(text) = |{ ts TIMESTAMP = ISO }|.
ASSERT ts = text.

Comparisons with Byte-Like Data Types

\-

d, t

utclong

x, xstring

i

\-

Example

A hexadecimal number that is the result of the conversion of a valid time is equal to this time.

DATA(hex) = CONV xstring( sy-timlo ).
ASSERT hex = sy-timlo.
cl\_demo\_output=>display( |{ sy-timlo } { hex }| ).

Comparisons with Date Types, Time Types, or Time Stamp Types

\-

d

t

utclong

d

d

\-

\-

t

\-

t

\-

utclong

\-

\-

utclong

Example

The time generated through the addition of the value 86399 to the current time is compared with the current time. It is smaller than the current time.

IF CONV t( sy-timlo + 86399 ) < sy-timlo.
  cl\_demo\_output=>display( |CONV t( sy-timlo + 86399 ) < sy-timlo| ).
ENDIF.

Example

A later time stamp is always greater than an earlier time stamp.

DATA(ts) = utclong\_current( ).
WAIT UP TO 1 SECONDS.
ASSERT utclong\_current( ) > ts.