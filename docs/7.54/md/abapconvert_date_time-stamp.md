---
title: "CONVERT INTO TIME STAMP"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time_stamp_shortref.htm) Syntax CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO TIME STAMP time_stamp TIME ZONE tz. Effect This statement converts a date specified in dat, a time specifi
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm"
abapFile: "abapconvert_date_time-stamp.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abapconvert", "date", "time", "stamp"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) → 

CONVERT INTO TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time_stamp_shortref.htm)

Syntax

CONVERT DATE dat
        *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
        INTO TIME STAMP time\_stamp TIME ZONE tz.

Effect

This statement converts a date specified in dat, a time specified in tim, and a summer time marker specified in dst of the time zone specified in tz into a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) and assigns the result to the variable time\_stamp. The conversion is made in accordance with the [rules for time zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm).

dat, tim, dst, and tz are [functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   dat expects a data object of the type d containing a valid date. Operands of other types are converted to d. If dat contains an [invalid value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchar_date_time_fields_validity.htm), time\_stamp is not changed and sy-subrc is set to 12. The days from October 5, 1582 through October 14, 1582 missing due to the switch from the Julian to the Gregorian calendar are not considered invalid values here. The provide the same results as the conversion of the available days from October 15, 1582 through October 24, 1582.
    
-   tim expects a data object of the type t containing a valid time. Operands of other types are converted to t. If the addition TIME is not specified, the system implicitly uses the initial time "000000" for tim. In tim, only the values 00 to 23 for the hours, and 00 to 59 for the minutes are valid. If tim contains an [invalid value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchar_date_time_fields_validity.htm), time\_stamp is not changed and sy-subrc is set to 12.
    
-   dst can be specified as a data object of the type c with length 1 containing the value "X" or " ". This controls the behavior of the statement with respect to summer time.
    

-   If dst has the value "X", the value of tim is applied as the specified time in daylight saving time.

-   If dst has the value “ ", the value of tim is applied as the specified time in winter time.

-   If dst has neither the value "X" nor " ", time\_stamp is not changed and sy-subrc is set to 12.

If the time zone specified in tz does not have a summer time rule (for example when "UTC" is specified), the addition DAYLIGHT SAVING TIME is ignored. If the addition DAYLIGHT SAVING TIME is not specified, the value of dst is set to "X" implicitly if the data in tim and dat is in summer time and is set to " " for data in winter time. In the extra hour that is caused by switching from summer time to winter time, tim and dat are interpreted as a time in summer time and dst is set to the value "X". If the value in dst does not match the data in tim and dat (that is, if the value "X" is specified in winter time and the value " " in summer time, time\_stamp is not changed and sy-subrc is set to 12.

-   tz expects a character-like data object containing a [time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_glosry.htm "Glossary Entry") from the database table TTZZ.
    

-   If tz is initial, no time shift is calculated when converting to the time stamp. In this case, sy-subrc is set to 4.

-   If the specified time zone is not found in the database table TTZZ, time\_stamp remains unchanged and sy-subrc is set to 8.

-   If the [rule set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, a non-handleable exception is raised.

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. If time\_stamp has the data type TIMESTAMPL for the long form, the seconds fractions in the decimal places are initialized when the assignment is made.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of type TIMESTAMP is declared.
    

If dat and tim contain valid values but produce an invalid time stamp when combined with a valid time zone in tz, time\_stamp is not modified and sy-subrc is set to 12.

System Fields

sy-subrc

Meaning

0

Local time of specified time zone was converted to time stamp and assigned to the target field

4

The specified time was converted to a time stamp without time shift and assigned to the target field.

8

The specified time could not be converted, because the specified time zone is not in the database table TTZZ

12

The specified time could not be converted, because dat, tim, or dst contain invalid or inconsistent values.

Notes

-   Current user-specific local times and the corresponding local time zones are stored in the system fields [sy-datlo](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_system_fields.htm), [sy-timlo](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_system_fields.htm), and [sy-zonlo](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_system_fields.htm).
    
-   Specifying daylight saving time and winter time after DAYLIGHT SAVING TIME enables different UTC time stamps to be created from matching local time stamps within the extra hour when switching from daylight saving time to winter time.
    
-   When the switch is made from winter to daylight saving time, an hour is lost. For example, in the "CET" time zone in the year 2009, on March 29, the hour between 02:00 and 03:00 does not exist. If an attempt is made to convert a time during this missing hour, the statement is always terminated with the value 12 for sy-subrc because this time or this local time stamp does not exist.
    
-   Usually, an invalid time stamp can be created from a valid date and time only by combining the first valid date 00010101 with time zones east of UTC or the last valid date 99991231 with time zones west of UTC.
    
-   An initial time zone tz matches UTC only if the tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm) are filled correctly for the time zone UTC.
    

Example

The following example for CONVERT INTO TIME STAMP for time stamps in packed numbers functions in exactly the same way as the example for [CONVERT INTO UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_utclong.htm) for time stamps in time stamp fields.

DATA(dat) = CONV d( '20191103' ).
DATA(tim) = CONV t( '013000' ).
CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME 'X'
        INTO TIME STAMP DATA(time\_stamp) TIME ZONE 'EST'.
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME ' '
        INTO TIME STAMP time\_stamp TIME ZONE 'EST'.
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat TIME tim
        INTO TIME STAMP time\_stamp TIME ZONE 'EST'.
cl\_demo\_output=>write\_data( time\_stamp ).
cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB