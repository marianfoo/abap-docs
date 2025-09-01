  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

CONVERT TIME STAMP

[Short Reference](javascript:call_link\('abapconvert_time_stamp_shortref.htm'\))

Syntax

CONVERT TIME STAMP time\_stamp TIME ZONE tz
        INTO *\[*DATE dat*\]*
             *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]*.

Effect

This statement interprets the content of a packed number time\_stamp as a [time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)), converts it to the local date and the local time in the time zone specified in tz, and assigns the result to the variables dat, tim, and dst. At least one of the additions DATE or TIME must be specified. The conversion is performed in accordance with the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)).

time\_stamp and tz are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

-   The operand time\_stamp must have the type TIMESTAMP or TIMESTAMPL from the ABAP Dictionary, in accordance with the ABAP type p with length 8 or p with length 11 and seven decimal places. Depending on the data type, the content is interpreted either as a time stamp in the [short form](javascript:call_link\('abentime_stamps_packed.htm'\)) or as a time stamp in the [long form](javascript:call_link\('abentime_stamps_packed.htm'\)). No other data types can be specified. If time\_stamp does not contain a valid time stamp, the content of dat and tim is not changed, and sy-subrc is set to 12.
-   The operand tz must be character-like and contain a [time zone](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry") from the DDIC database table TTZZ.
    -   If tz is initial, the UTC time stamp is not converted to a different time zone. The local date and time in the target fields match the UTC reference time. In this case, sy-subrc is set to 4.
    -   If the specified time zone is not found in the DDIC database table TTZZ, the content of dat and tim is not changed and sy-subrc is set to 8.
    -   If the [rule set](javascript:call_link\('abentime_zone_rules.htm'\)) for the specified time zone is incomplete, an uncatchable exception is raised.
-   The local date is assigned to dat as a return value of the data type d. The following can be specified for dat:
    -   An existing variable to which the return value can be [converted](javascript:call_link\('abenconversion_type_d.htm'\)).
    -   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of data type d is declared.
-   The local time is assigned to tim as a return value of data type t. If the time stamp in time\_stamp is in the [long form](javascript:call_link\('abentime_stamps_packed.htm'\)), the fractions of seconds in the decimal places are ignored. The following can be specified for tim:
    -   An existing variable to which the return value can be [converted](javascript:call_link\('abenconversion_type_t.htm'\)).
    -   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of data type t is declared.
-   If the time stamp in time\_stamp for the time zone specified in tz is in daylight saving time, dst is given the value "X". Otherwise it is given the value " ". The following can be specified for dst:
    -   An existing variable of the type c with length 1
    -   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of data type c with length 1 is declared.

When time stamps are converted for the days between 5.10.1582 and 14.10.1582 that do not actually exist due to the switch from the Julian calendar to the Gregorian calendar, this returns the same results as the conversion for the days from 15.10.1582 to 24.10.1582, which do exist.

If time\_stamp contains a valid value but produces an invalid date when combined with a valid time zone in tz, dat and tim are not modified and sy-subrc is set to 12.

System Fields

sy-subrc

Meaning

0

Time stamp was converted into the local time of the specified time zone and assigned to the target fields.

4

Time stamp was assigned to the target fields without conversion into a local time.

8

Time stamp could not be converted because the specified time zone is not in the DDIC database table TTZZ.

12

Time stamp could not be converted since time\_stamp contains an invalid value or produces an invalid date when combined with the time zone.

Hints

-   A current UTC time stamp can be created using the statement [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)).
-   The current user time zone can be found in the system field [sy-zonlo](javascript:call_link\('abentime_system_fields.htm'\)).
-   It is now possible to use the return value for the daylight saving time in dst to distinguish duplicate local time specifications that can occur when UTC time stamps are converted into local time during the double hour in the switch from daylight saving to standard time.
-   Usually, an invalid date can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
-   An initial packed number with the value 0 is not a valid time stamp and produces the value 12 in sy-subrc.
-   An initial time zone tz corresponds to UTC only if the tables of the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)) are filled correctly for the time zone UTC.

Example

The following example for CONVERT TIME STAMP for time stamps in packed numbers functions in exactly the same way as the example for [CONVERT UTCLONG](javascript:call_link\('abapconvert_utclong.htm'\)) for time stamps in time stamp fields.

CONVERT TIME STAMP CONV timestamp( '20191103' && '053000' )
        TIME ZONE 'EST'
        INTO DATE DATA(dat) TIME DATA(tim)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
CONVERT TIME STAMP CONV timestamp( '20191103' && '063000' )
        TIME ZONE 'EST'
        INTO DATE dat TIME tim
        DAYLIGHT SAVING TIME dst.
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB