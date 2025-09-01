  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) →  [rel\_exp - Comparison Type of Elementary Data Objects](javascript:call_link\('abenlogexp_rules_operands_dobj.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20Type%20of%20Date%20Fields%2C%20Time%20Fields%2C%20and%20Time%20Stamp%20Fields%2C%20ABENLOGEXP_DATE_TIME%2C%20758%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - Comparison Type of Date Fields, Time Fields, and Time Stamp Fields

The following tables show the [comparison types](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry") for comparisons between date/time types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](javascript:call_link\('abenconversion_elementary.htm'\)) to this type. The [comparison rules for the comparison types](javascript:call_link\('abencomparison_type.htm'\)) determine how the comparison is performed. If no comparison type is specified for a combination, no comparison is possible.

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

The content of the syst\_datum type data object date is converted to the number of days since 01/01/0001 in the comparison and compared with the content of days.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
DATA(days) = CONV decfloat34( date ).
cl\_demo\_input=>request( CHANGING field = days ).
cl\_demo\_output=>display(
  COND #( WHEN days > date THEN |{ days } > { date }|
          WHEN days < date THEN |{ days } < { date }|
                               ELSE |{ days } = { date }| ) ).

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
-   For comparisons between data types c or n on the one hand and t on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks or characters 0 are truncated.
-   Lengths are not adjusted for comparisons between the data type string and the data type t.

Example

Comparison of any text string with the syst\_datum type data object date.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
DATA(text) = CONV string( date ).
cl\_demo\_input=>request( CHANGING field = text ).
cl\_demo\_output=>display(
  COND #( WHEN text > date THEN |{ text } > { date }|
          WHEN text < date THEN |{ text } < { date }|
                               ELSE |{ text } = { date }| ) ).

Example

A time stamp formatted as a character string with the formatting option [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be converted to utclong and compared with a time stamp field. Instead of ISO, SPACE could also be specified.

FINAL(ts) = utclong\_current( ).
FINAL(text) = |{ ts TIMESTAMP = ISO }|.
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

FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
FINAL(hex) = CONV xstring( time ).
ASSERT hex = time.
cl\_demo\_output=>display( |{ time } { hex }| ).

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

FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
IF CONV t( time + 86399 ) < time.
  cl\_demo\_output=>display( |CONV t( time + 86399 ) < time| ).
ENDIF.

Example

A later time stamp is always greater than an earlier time stamp.

FINAL(ts) = utclong\_current( ).
WAIT UP TO 1 SECONDS.
ASSERT utclong\_current( ) > ts.