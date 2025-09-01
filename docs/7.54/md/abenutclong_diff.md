  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm) →  [Time Stamp Field with Time Stamp Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm) →  [Time Stamp Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_functions.htm) → 

utclong\_diff - Time Stamp Function

Syntax

... utclong\_diff( high = time\_stamp2
                  low  = time\_stamp1 ) ...

Effect

This function calculates the time difference between the values of two time stamp fields time\_stamp2 and time\_stamp1. The return value has the type decfloat34 and contains the precise difference in seconds rounded to seven decimal places. If the time stamp in time\_stamp2 is later than the time stamp in time\_stamp1, the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

Time stamp fields of the type [utclong](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm) containing valid time stamps must be passed to the arguments high and low. time\_stamp2 and time\_stamp1 are [time-stamp-like expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_like_expr_pos_glosry.htm "Glossary Entry"). An initial time stamp is handled like the lowest possible value of a time stamp.

Notes

-   The system class [CL\_ABAP\_UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_system_class.htm) contains a method DIFF with multiple output parameters for days, hours, minutes, and seconds (across which the time difference is spread) instead of just one return parameter.

-   If the function utclong\_diff is used as an operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the [calculation type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_type_glosry.htm "Glossary Entry") decfloat34 is produced.

-   If the function utclong\_diff is used as the [right side of an assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_return_values.htm) or other operand positions in which the return value is converted, the decimal places are converted in accordance with the general conversion rules for [source field type decfloat34](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_decfloat.htm), if necessary, and are not cut off. If the decimal places are to be cut off, the built-in function [trunc](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_functions.htm) can be applied to the return value.

Example

Calculates the time interval in microseconds between successive time stamps from an internal table.

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

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

-   Cause: A time stamp specified for high or low is invalid.
    Runtime error: INVALID\_UTCLONG
    

Non-Handleable Exceptions

-   Cause: An argument without a time stamp type is passed to high or low.
    Runtime error: TCHK\_TYPE\_LOAD