  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps.htm) →  [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong.htm) →  [Time Stamp Functions (ts\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ts_func - utclong_diff, ABENUTCLONG_DIFF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

ts\_func - utclong\_diff

Syntax

... utclong\_diff( high = time\_stamp2
                  low  = time\_stamp1 ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) calculates the time difference between the values of two time stamp fields time\_stamp2 and time\_stamp1. The return value has the type decfloat34 and contains the exact difference in seconds rounded to seven decimal places. If the time stamp in time\_stamp2 is later than the time stamp in time\_stamp1, the result is positive. If the values are identical, the result is 0, otherwise it is negative.

Time stamp fields of the type [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm) containing valid time stamps must be passed to the arguments high and low. time\_stamp2 and time\_stamp1 are [time-stamp-like expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_like_expr_pos_glosry.htm "Glossary Entry"). An initial time stamp is handled like the smallest possible value of a time stamp.

Hints

-   The system class [CL\_ABAP\_UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_system_class.htm) contains a method DIFF with multiple output parameters for days, hours, minutes, and seconds across which the time difference is spread instead of just one return parameter.
-   If the function utclong\_diff is used as an operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") decfloat34 is produced.
-   If the function utclong\_diff is used as the [right side of an assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_return_values.htm) or other operand positions in which the return value is converted, the decimal places are converted in accordance with the general conversion rules for [source field type decfloat34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_decfloat.htm), if necessary, and are not cut off. If the decimal places are to be cut off, the built-in function [trunc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_functions.htm) can be applied to the return value.

Example

Calculation of the time interval in microseconds of consecutive time stamps from an internal table.

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY.
time\_stamps = VALUE #( FOR i = 1 UNTIL i > 11
                         ( utclong\_current( ) ) ).
cl\_demo\_output=>write( time\_stamps ).
TYPES diffs TYPE TABLE OF decfloat34 WITH EMPTY KEY.
cl\_demo\_output=>display(
  VALUE diffs( FOR \_ts IN time\_stamps FROM 2 INDEX INTO i
               ( utclong\_diff(
                  high = \_ts
                  low  = time\_stamps\[ i - 1 \] ) \* 1000000 ) ) ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

-   Cause: A time stamp specified for high or low is invalid.
    Runtime error: INVALID\_UTCLONG

Uncatchable Exceptions

-   Cause: An argument without a time stamp type is passed to high or low.
    Runtime error: TCHK\_TYPE\_LOAD