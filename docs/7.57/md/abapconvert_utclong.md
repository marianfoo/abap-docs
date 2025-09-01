  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps.htm) →  [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong.htm) →  [Conversion Statements for Time Stamp Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_conversions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONVERT UTCLONG, ABAPCONVERT_UTCLONG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

CONVERT UTCLONG

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_utclong_shortref.htm)

Syntax

CONVERT UTCLONG time\_stamp
        INTO *\[*DATE dat*\]*
             *\[*TIME tim *\[*FRACTIONAL SECONDS fs*\]**\]*
             *\[*DAYLIGHT SAVING TIME dst*\]*
             TIME ZONE tz.

Effect

This statement converts the [time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry") contained in a [time stamp field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp to the local date and local time of the time zone specified in tz and assigns the result to the variables dat, tim, and dst. At least one of the additions DATE, TIME, or DAYLIGHT SAVING TIME must be specified. The conversion is performed in accordance with the [rules for time zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm).

time\_stamp is a [time-stamp-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_like_expr_pos_glosry.htm "Glossary Entry") and tz is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   The operand time\_stamp must be of the type [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm), which contains a valid time stamp. If time\_stamp does not contain a valid time stamp, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.
-   The operand tz must be character-like and contain a [time zone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_glosry.htm "Glossary Entry") from the DDIC database table TTZZ.
    -   If tz is initial, the UTC time stamp is not converted to a different time zone. The local date and time in the target fields correspond to the UTC reference time.
    -   If the specified time zone is not found in the DDIC database table TTZZ, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised, unless the time stamp is initial.
    -   If the [rule set](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, an uncatchable exception is raised.
-   The local date is assigned to dat as a return value of the data type d. The following can be specified for dat:
    -   An existing variable of type d.
    -   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable of data type d is declared.
-   The local time without the fractions of seconds is assigned to tim as a return value of data type t. The following can be specified for tim:
    -   An existing variable of type t.
    -   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable of data type t is declared.
-   The fractions of seconds are assigned to fs as a return value of the data type decfloat34. The following can be specified for fs:
    -   An existing variable of the type decfloat34.
    -   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable of data type decfloat34 is declared.
-   If the time stamp in time\_stamp for the time zone specified in tz is in daylight saving time, dst is given the value X. Otherwise it is given the value blank. The following can be specified for dst:
    -   An existing variable of the type c with length 1
    -   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable of data type c with length 1 is declared.

Regardless of the time zone specified, an initial time stamp generates type-dependent [initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_glosry.htm "Glossary Entry") in all target fields. If the time stamp has the minimum value 0001-01-01T00:00:00.0000000 or is in the last possible second 9999-12-31T23:59:59.fffffff no time shift is calculated. A time stamp whose value is greater than or equal to the last second or is between 9999-12-31 23:59:59.0000000 and 9999-12-31 23:59:59.9999999 is handled like the maximum value 9999-12-31 23:59:59.9999999.

If time\_stamp contains a valid value but results in an invalid date in combination with a valid time zone in tz, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.

Hints

-   A current UTC time stamp can be created with the built-in function [utclong\_current](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong_current.htm).
-   The current user time zone can be found in the system field [sy-zonlo](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_system_fields.htm).
-   It is now possible to use the return value for the daylight saving time in dst to distinguish duplicate local time specifications that occur when UTC time stamps are converted into local time within the double hour in the switch between daylight saving and standard time.
-   Usually, an invalid date and the associated exception can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
-   An initial time zone tz only corresponds to UTC if the tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm) are filled correctly for the time zone UTC.
-   The statement CONVERT INTO UTCLONG does not set the return value sy-subrc.

Example

For the time zone EST in the DDIC database table TTZZ, a shift of -5 hours from the UTC reference time is entered in the DDIC database table TTZR. In the DDIC database table TTZDV, the end of daylight saving time is defined as the first Sunday in November at 02:00 using the key USA. In 2019, the first Sunday is November 03. With these settings in the rule set, the two conversions below both result in the same local time of 01:30:00. The first conversion shows that the time is still in daylight saving time.

CONVERT UTCLONG CONV utclong( '2019-11-03 05:30:00' )
        INTO DATE DATA(dat)
             TIME DATA(tim)
             DAYLIGHT SAVING TIME DATA(dst)
             TIME ZONE 'EST'.
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
CONVERT UTCLONG CONV utclong( '2019-11-03 06:30:00' )
        INTO DATE dat
             TIME tim
             DAYLIGHT SAVING TIME dst
             TIME ZONE 'EST'.
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
cl\_demo\_output=>display( ).

Executable Example

[Convert Time Stamp to Time Stamp Field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconvert_utc_abexa.htm).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

-   Cause: Invalid time zone in tz.
    Runtime error: INVALID\_TIME\_ZONE
-   Cause: An invalid date would be generated.
    Runtime error: LOCAL\_TIMESTAMP\_OUT\_OF\_RANGE
-   Cause: The specified time stamp is invalid.
    Runtime error: INVALID\_UTCLONG

Uncatchable Exceptions

-   Cause: Incomplete set of rules for the specified time zone.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB
-   Cause: An operand with an incorrect type is being used.
    Runtime error: TCHK\_TYPE\_LOAD