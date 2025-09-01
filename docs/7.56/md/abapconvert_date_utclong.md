---
title: "CONVERT INTO UTCLONG"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong_shortref.htm) Syntax CONVERT DATE dat TIME tim FRACTIONAL SECONDS fs DAYLIGHT SAVING TIME dst TIME ZONE tz INTO UTCLONG time_stamp. Effect This statement converts a date specified in dat
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_date_utclong.htm"
abapFile: "abapconvert_date_utclong.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "abapconvert", "date", "utclong"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps.htm) →  [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutclong.htm) →  [Conversion Statements for Time Stamp Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentimestamp_conversions.htm) → 

CONVERT INTO UTCLONG

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong_shortref.htm)

Syntax

CONVERT DATE dat
        TIME tim *\[*FRACTIONAL SECONDS fs*\]*
        *\[*DAYLIGHT SAVING TIME dst*\]*
        TIME ZONE tz
        INTO UTCLONG time\_stamp.

Effect

This statement converts a date specified in dat, a time specified in tim, optionally with fractions of seconds specified in fs, and a daylight saving time marker specified in dst for the time zone specified in tz into a [time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamp_glosry.htm "Glossary Entry") and assigns the result to a [time stamp field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp. The conversion is performed in accordance with the [rules for time zones](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_zone_rules.htm).

dat, tim, fs, dst, and tz are [functional operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   An operand of the type d, which contains a valid date, must be specified for dat. If dat contains an [invalid value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_validity.htm), a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE is raised. The days from October 5, 1582 through October 14, 1582 that are missing due to the switch from the Julian to the Gregorian calendar are considered invalid values here.
-   An operand of the type t, which contains a valid time must be specified for tim. In tim, only the values 00 to 23 are valid for the hours, and 00 to 59 for the minutes and seconds, as well as the value 240000. If tim contains an [invalid value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_validity.htm), a catchable exception of the class CX\_SY\_CONVERSION\_NO\_TIME is raised. The value 240000 causes the date in dat to be increased by one day and the time to be set to 000000.
-   An operand of the type decfloat34, which contains fractions of seconds with up to seven decimal places, can be specified for fs. The value of fs must be in the range of 0.0000000 to 0.9999999, otherwise a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised. If the addition FRACTIONAL SECONDS is not specified, the value 0 is used implicitly.
-   An operand of the type c with length 1 that contains the value "X" or " " can be specified for dst to control the behavior of the statement with respect to daylight saving time.
    
    -   If dst has the value "X", the value of tim is interpreted as the specified time in daylight savings time.
    -   If dst has the value " ", the value of tim is interpreted as the specified time in standard time.
    -   If dst has neither the value "X" nor " ", a catchable exception of the class CX\_PARAMETER\_INVALID\_RANGE is raised.
    
    If the time zone specified in tz does not have a daylight saving time rule (for example, when "UTC" is specified), the addition DAYLIGHT SAVING TIME is ignored. If the addition DAYLIGHT SAVING TIME is not specified, the value of dst is set to "X" implicitly, if the specifications in tim and dat are in daylight saving time and to " " for specifications in standard time. In the double hour that is caused by switching from daylight saving time to standard time, tim and dat are interpreted as a time specification in daylight saving time and dst is set to the value "X". If the value in dst does not match the specifications in tim and dat, that is, if the value "X" is specified in standard time and the value " " in daylight saving time, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.
    
-   A character-like operand that contains a [time zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_zone_glosry.htm "Glossary Entry") from the DDIC database table TTZZ must be specified for tz.
    -   If tz is initial, no time shift is calculated when converting to the time stamp.
    -   If the specified time zone is not found in the DDIC database table TTZZ, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.
    -   If the [rule set](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, an uncatchable exception is raised.

The following can be specified for time\_stamp:

-   An existing variable of the data type [utclong](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_types_date_time.htm).
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm), where a variable of type [utclong](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_types_date_time.htm) is declared.

If the following combinations of values are specified for DATE and TIME

-   "00000000" as dat and "000000" as tim
-   "00010101" as dat and "000000" as tim
-   "99991231" as dat and "235959" as tim

no time shift is calculated when the time stamp is created.

If dat and tim contain valid values but produce an invalid time stamp when combined with a valid time zone in tz, an exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.

Hints

-   Current user-specific local times and the associated local time zones are stored in the system fields [sy-datlo](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_system_fields.htm), [sy-timlo](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_system_fields.htm), and [sy-zonlo](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_system_fields.htm).
-   Specifying daylight saving time and standard time after DAYLIGHT SAVING TIME enables different UTC time stamps to be created from identical local time stamps within the double hour when switching from daylight saving time to standard time.
-   When switching from standard to daylight saving time, one hour is usually omitted. For example, in the "CET" time zone in the year 2009, on March 29, the hour between 02:00 and 03:00 does not exist. Any attempt to convert a time during this missing hour raises an exception.
-   Usually, an invalid time stamp can be created from a valid date and time only by combining the first valid date 00010101 with time zones east of UTC or the last valid date 99991231 with time zones west of UTC.
-   An initial time zone tz corresponds to UTC only if the tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_zone_rules.htm) are filled correctly for the time zone UTC.
-   The statement CONVERT INTO UTCLONG does not set the return value sy-subrc.

Example

For the time zone "EST", the settings apply that are described in the example for [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong.htm) in the rule set for time stamps. By specifying the daylight savings time and standard time, two different UTC time stamps 2019-11-03T05:30:00.0000000Z and 2019-11-03T06:30:00.0000000Z are created from one specified local time. Without the addition DAYLIGHT SAVING TIME, the UTC time stamp 2019-11-03T05:30:00.0000000Z is created.

DATA(dat) = CONV d( '20191103' ).
DATA(tim) = CONV t( '013000' ).
CONVERT DATE dat
        TIME tim
        DAYLIGHT SAVING TIME 'X'
        TIME ZONE 'EST'
        INTO UTCLONG DATA(time\_stamp).
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat
        TIME tim
        DAYLIGHT SAVING TIME ' '
        TIME ZONE 'EST'
        INTO UTCLONG time\_stamp.
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat
        TIME tim
        TIME ZONE 'EST'
        INTO UTCLONG time\_stamp.
cl\_demo\_output=>write\_data( time\_stamp ).
cl\_demo\_output=>display( ).

Example

The example demonstrates the special handling of the invalid time 240000.

CONVERT DATE CONV d( '20191104' )
        TIME CONV t( '240000' )
        DAYLIGHT SAVING TIME ' '
        TIME ZONE 'UTC'
        INTO UTCLONG DATA(time\_stamp1).
CONVERT DATE CONV d( '20191105' )
        TIME CONV t( '000000' )
        DAYLIGHT SAVING TIME ' '
        TIME ZONE 'UTC'
        INTO UTCLONG DATA(time\_stamp2).
ASSERT time\_stamp1 = time\_stamp2.

Executable Example

[Convert Time Stamp to Time Stamp Field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconvert_utc_abexa.htm).

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_DATE

-   Cause: An invalid date was specified for DATE.
    Runtime error: CONVT\_INVALID\_DATE

CX\_SY\_CONVERSION\_NO\_TIME

-   Cause: An invalid time was specified for TIME.
    Runtime error: CONVT\_INVALID\_TIME

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

-   Cause: An invalid value was specified for FRACTIONAL SECONDS.
    Runtime error: CONVT\_INVALID\_FRAC\_SEC
-   Cause: The value for DAYLIGHT SAVING TIME does not fit the values for DATE and TIME.
    Runtime error: INVALID\_POINT\_IN\_TIME
-   Cause: An invalid time stamp would be generated.
    Runtime error: INVALID\_POINT\_IN\_TIME
-   Cause: Invalid time zone in tz.
    Runtime error: INVALID\_TIME\_ZONE

CX\_PARAMETER\_INVALID\_RANGE

-   Cause: An invalid value was specified for DAYLIGHT SAVING TIME.
    Runtime error: PARAMETER\_INVALID\_RANGE

Uncatchable Exceptions

-   Cause: Incomplete set of rules for the specified time zone.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB
-   Cause: An operand with an incorrect type is being used.
    Runtime error: TCHK\_TYPE\_LOAD