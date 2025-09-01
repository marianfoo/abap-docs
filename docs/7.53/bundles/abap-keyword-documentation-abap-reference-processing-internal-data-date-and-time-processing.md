# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Date and Time Processing

Included pages: 7


### abentime_zone_rules.htm

---
title: "Rules for Time Zones"
description: |
  The conversion of the UTC reference time to the local date and the local time zone is based on a set of rules stored in AS ABAP system tables. The names of all associated tables start with TTZ. The following database tables , whose content can be edited using transaction STZBD, are relevant for time
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_rules.htm"
abapFile: "abentime_zone_rules.htm"
keywords: ["do", "while", "if", "data", "abentime", "zone", "rules"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) →  [Date, Time, Time Stamp, and Time Zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_oview.htm) → 

Rules for Time Zones

The conversion of the UTC reference time to the local date and the local time zone is based on a set of rules stored in AS ABAP system tables. The names of all associated tables start with TTZ. The following database tables , whose content can be edited using transaction STZBD, are relevant for time zones:

-   The database table TTZZ contains a list of possible time zones in the column TZONE. The entries in the columns ZONERULE and DSTRULE refer to the rules for the time difference of the time zone to the UTC reference time in table TTZR and to the rules for summer time in the tables TTZD, TTZDF, and TTZDV.

-   The column ZONERULE of the database table TTZR contains a list of possible rules for the time difference between time zones and the UTC reference time. The columns UTCDIFF and UTCSIGN contain the time differences to UTC and their signs, while ignoring summer time.

-   The database table TTZD contains a list of all possible summer time rules in column DSTRULE. The column DSTDIFF contains the time difference between summer time and winter time.

-   The database table TTZDF contains a list of fixed summer time rules in column DSTRULE. The column YEARACT contains year numbers for every year for which the rule applies. The columns DATEFROM, TIMEFROM, DATETO, and TIMETO contain the date and time for the beginning and end of summer time.

-   The database table TTZDV contains a list of variable summer time rules in column DSTRULE. The column YEARFROM contains a year number for every rule, saying in which year the rule applies. The columns MONTHFROM, WEEKDFROM, WEEKDCFROM, TIMEFROM, MONTHTO, WEEKDTO, WEEKDCTO, and TIMETO contain the month, week, day, and time for the beginning and end of summer time.

A correct set of rules must contain all rules specified in TTZZ for the time difference between time zones and the UTC reference time in TTZR and all rules specified for summer time in TTZD. If the time difference between summer time and winter time in TTZD is not equal to 0, the respective summer time rule must be included in at least one of the tables TTZDF or TTZDV. While TTZDF contains fixed dates for the switch, the date in TTZDV is variable, because a day in a particular week of a month is specified. The system always checks TTZDF first for the summer time rule and then TTZDV.

Notes for Summer Time

If a time zone specifies a summer time rule with a summer time difference not equal to 0, note the following:

-   If during summer time a new year starts (in the southern hemisphere), then the year specified in the database tables TTZDF or TTZDV identifies the beginning of the summer time, while the end is in the following year.

-   The time specified for the beginning of summer time in the tables TTZDF and TTZDV identifies the time when the clock is put forward by the summer time difference when the winter time ends. The first second of summer time is the time you get when you add the summer time difference to the specified time.

-   When summer time begins, a time interval of the length of the summer time difference is created, for which you can formulate a date and time, but which does not exist as a local time and which cannot be assigned to an UTC reference time. A local time of this type is handled in the statement [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm) as an invalid time.

-   The time specified in the database tables TTZDF or TTZDV for the end of summer time identifies the time when the clock is put back by the summer time difference when summer time ends. The first second of the winter time is the time you get when you subtract the summer time difference from the specified time.

-   When summer time ends, a time interval of the length of the summer time difference is created, which is passed twice as a local time (the double hour). If a date and time is formulated for this interval, the statement [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm) handles it as a time from summer time, by default.


### abensystem_user_time_zones.htm

---
title: "System Time Zone and User Time Zone"
description: |
  Two time zones(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_glosry.htm 'Glossary Entry') are preconfigured in AS ABAP, the system time zone(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm 'Glossary Entry') and the user time
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_user_time_zones.htm"
abapFile: "abensystem_user_time_zones.htm"
keywords: ["select", "do", "while", "if", "case", "try", "data", "abensystem", "user", "time", "zones"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) →  [Date, Time, Time Stamp, and Time Zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_oview.htm) → 

System Time Zone and User Time Zone

Two [time zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_glosry.htm "Glossary Entry") are preconfigured in AS ABAP, the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") and the [user time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_zone_glosry.htm "Glossary Entry").

-   The system time zone is the client-specific time zone of the [system time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_date_glosry.htm "Glossary Entry") and cannot be changed while the system is running. It is contained in the column TZONESYS in the client-specific database table TTZCU.

-   The user time zone is a client-specific time zone that can be defined for the [user time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_glosry.htm "Glossary Entry") and [user date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_date_glosry.htm "Glossary Entry") of each individual user in the [user master record](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). It is contained in the system field sy-zonlo.

Both time zones are displayed in transaction SU01 on the Fixed Values tab, however only the user time zone can be changed here. This requires a new logon to take effect. If no user time zone is defined in the user master record, or the specified time zone is invalid or inactive, the default value from the column TZONEDEF in the database table TTZCU is used. If it is invalid or inactive, the system field sy-zonlo is filled with blanks.

Note

The current client's system time zone can be read using function module GET\_SYSTEM\_TIMEZONE.

Example

Determines the date and time in the system time zone from a time stamp.

GET TIME STAMP FIELD DATA(ts).
SELECT SINGLE tzonesys
       FROM ttzcu
       INTO @DATA(tzone).
CONVERT TIME STAMP ts TIME ZONE tzone
        INTO DATE DATA(date) TIME DATA(time).

System Time and System Date

The system time and the system date are the local time and local date in AS ABAP in the system time zone. They are produced by regular synchronizations between the clock of the [ABAP runtime server](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") and the clock of the database server. During the synchronization process, the ABAP runtime environment clock is set to the database server clock. Since this happens on all [AS Instances](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_server_glosry.htm "Glossary Entry") in [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), the ABAP runtime environment clock is synchronized with the clocks on all other AS Instances and with the database system clock, and therefore shows the system time and system date of the entire AS ABAP.

The [character-like system fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_system_fields.htm) sy-uzeit and sy-datum are provided with the system time and system date at certain times.

Note

From a technical perspective, the ABAP runtime environment clock is synchronized with the database server clock on request. If a time is required (for example, to populate [system fields for date and time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_system_fields.htm)), the system checks whether the last synchronization was performed during the specified interval. If this is not the case, synchronization is performed.

Example

Creates a time stamp from the system date and system time.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
CONVERT DATE sy-datum TIME sy-uzeit
        INTO TIME STAMP DATA(ts) TIME ZONE tz.

User Time and User Date

The user time and the user date are the local time and local date of the current user, calculated from the system time and the user time zone. The [character-like system fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_system_fields.htm) sy-timlo and sy-datlo are provided with the user time and user date at certain times. If sy-zonlo is initial, sy-timlo and sy-datlo are given the same values as sy-uzeit and sy-datum, the system time and system date.

Note

To get the local time and local date from a [UTC time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") created using [GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm), the content of the system field sy-zonlo can be passed to the statement [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm). An initial value for the time zone is set in CONVERT TIME STAMP, but set implicitly to "UTC" and not to the system time zone.

Example

Determines a local date and a local time from a time stamp.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time).


### abentime_stamps.htm

---
title: "Time Stamp"
description: |
  This section describes how non-time-zone-specific time stamps(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm 'Glossary Entry') are represented and the statements used to access them. -   Time Stamps - Overview(https://help.sap.com/doc/abapdocu_753_index_htm/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamps.htm"
abapFile: "abentime_stamps.htm"
keywords: ["do", "if", "try", "class", "data", "abentime", "stamps"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) → 

Time Stamp

This section describes how non-time-zone-specific [time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented and the statements used to access them.

-   [Time Stamps - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm)

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm)

-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm)

-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm)

-   [System Class for Time Stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_tstmp.htm)

Continue
[Time Stamps - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm)
[GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm)
[CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm)
[CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm)
[System Class for Time Stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_tstmp.htm)
![Example](exa.gif "Example") [Converting Time Stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconvert_time_stamp_abexa.htm)


### abentime_stamp_oview.htm

---
title: "Time Stamps - Overview"
description: |
  -   Representation of Time Stamps(#abentime-stamp-oview-1--------access-to-time-stamps---@ITOC@@ABENTIME_STAMP_OVIEW_2) -   Notes on Handling Time Stamps(#abentime-stamp-oview-3--------examples---@ITOC@@ABENTIME_STAMP_OVIEW_4) Representation of Time Stamps Time stamps(https://help.sap.com/doc/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm"
abapFile: "abentime_stamp_oview.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abentime", "stamp", "oview"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamps.htm) → 

Time Stamps - Overview

-   [Representation of Time Stamps](#abentime-stamp-oview-1--------access-to-time-stamps---@ITOC@@ABENTIME_STAMP_OVIEW_2)

-   [Notes on Handling Time Stamps](#abentime-stamp-oview-3--------examples---@ITOC@@ABENTIME_STAMP_OVIEW_4)

Representation of Time Stamps

[Time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented using packed numbers of the type [p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm). There is a short form and a long form.

-   In the short form, a time stamp is represented precisely to the second using a packed number with length 8, and the ABAP Dictionary type TIMESTAMP. The digits of the packed number show the time stamp in the format "yyyymmddhhmmss", where "yyyy" is the year, "mm" is the month, "dd" is the day, "hh" is the hour, "mm" are the minutes, and "ss" are the seconds.

-   In the long form, a time stamp is represented precisely to 100 ns using a packed number with length 11 and seven decimal places, and the ABAP Dictionary type TIMESTAMPL The digits of the packed number show the time stamp in the format "yyyymmddhhmmss.sssssss", where, in addition to the short form, the seven decimal places "sssssss" are the fractions of a second. The maximum time resolution depends on the operating system of the [host computer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS Instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_server_glosry.htm "Glossary Entry") and can be less.

In its integer part, a valid time stamp must contain valid dates and times:

-   When specifying the date, only the values 01 to 9999 for the year, 01 to 12 for the month, and 01 to 31 for the day are valid.

-   When specifying the time, only the values 00 to 23 for the hours, and 00 to 59 for the minutes and seconds are valid.

A time valid in the Gregorian calendar must be represented. [Leap seconds](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleap_second_glosry.htm "Glossary Entry") are not supported.

Note

The method NORMALIZE of class CL\_ABAP\_TSTMP can be used to convert invalid values in time stamps to valid values.

Access to Time Stamps

Only a few statements recognize that packed numbers of the types TIMESTAMP and TIMESTAMPL are time stamps. All other statements interpret the content of these data types numerically and, with the exception of direct comparisons, are not suitable for handling time stamps. The following statements can be used to handle time stamps:

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm) creates a current time stamp.

-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm) converts a time stamp to a local date and a local time.

-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm) converts a local date and a local time to a time stamp.

The following settings for formatting output also handle time stamps in a specific way:

-   Use of the options [TIMESTAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) and [TIMEZONE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm)

-   Use of the addition [TIME ZONE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) of the statement WRITE *\[*TO*\]*.

-   The domains XSDDATETIME\_Z and XSDDATETIME\_LONG\_Z support the serialization and deserialization of ABAP time stamps in [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_schema.htm).

The system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_tstmp.htm) provides methods for adding, subtracting, converting, and comparing time stamps.

Note

Special [time stamp functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_functions.htm) can be used in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_timestamp_func.htm) and the [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_timestamp_func.htm) of the [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") for editing time stamps saved in database tables.

Notes on Handling Time Stamps

Time stamps are only interpreted as such when they are accessed by the statements, methods, and functions listed above. When being assigned or converted, they behave like packed numbers of the type p, which means they are not suitable for direct calculations. Comparisons produce a meaningful result only when two time stamps are compared with each other. In programs for which the program attribute [Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is not set, note the rules applying to the data type p. In particular, direct comparisons of time stamps in the long form with the short form produce a meaningful result only when the program attribute fixed point arithmetic is set. Otherwise, you must use system class CL\_ABAP\_TSTMP for comparisons as well.

A time stamp in its short form is the integer part of a time stamp in its long form. When assigning time stamps in the long form to time stamps in the short form, unwanted rounding effects occur. For this reason, always use the method MOVE of the system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_tstmp.htm).

When time stamps are used in operand positions where they are not supposed to be used, no warnings are given by the syntax check or by the extended program check (not even in [lossless assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_assignment_glosry.htm "Glossary Entry")).

Examples

Example

Direct comparison of time stamps of the same data type.

GET TIME STAMP FIELD DATA(ts2).
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD DATA(ts1).
ASSERT ts2 < ts1.

Example

Converts a time stamp to a date and a time field, and determines the summer time marker.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>display( |{ date }\\n{
                            time }\\n{
                            dst } | ).

Example

Type-friendly formatting of a time stamp in a string template.

GET TIME STAMP FIELD DATA(ts).
cl\_demo\_output=>display( |{ ts TIMESTAMP = ISO } | ).

Example

Serializes a time stamp using a special domain.

DATA ts TYPE xsddatetime\_z.
GET TIME STAMP FIELD ts.
CALL TRANSFORMATION id SOURCE ts = ts
                       RESULT XML DATA(xml).
cl\_demo\_output=>display\_xml( xml ).

Example

Calculates the difference between two time stamps with the class CL\_ABAP\_TSTMP.

DATA: ts1 TYPE timestampl,
      ts2 TYPE timestampl.
GET TIME STAMP FIELD ts2.
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD ts1.
DATA(seconds) = cl\_abap\_tstmp=>subtract(
    EXPORTING
      tstmp1 = ts1
      tstmp2 = ts2 ).
cl\_demo\_output=>display( seconds ).

Example

Direct calculation with time stamps. If, for example, ts1 has the value 20161004130733, adding 3600 s in ts2 produces the value 20161004140733. Since the time stamps are interpreted as numbers of type p in the calculation, the result is 10000, which would generally be unexpected.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>add( tstmp = ts1
                                secs  = 3600 ).
cl\_demo\_output=>display( ts2 - ts1 ).

Example

Incorrect calculation with time stamps. The assumption here is that time stamps are interpreted as a number of seconds in calculations. This is not the case here. The result does not meet expectations and is generally not a valid time stamp. For example, if 20161004131906 is calculated, this produces the invalid value 20161004315506.

GET TIME STAMP FIELD DATA(ts).
ts = ts + 86400 \* 2 + 3600 \* 3.
cl\_demo\_output=>display( ts ).


### abentime_stamps.htm

---
title: "Time Stamp"
description: |
  This section describes how non-time-zone-specific time stamps(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm 'Glossary Entry') are represented and the statements used to access them. -   Time Stamps - Overview(https://help.sap.com/doc/abapdocu_753_index_htm/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamps.htm"
abapFile: "abentime_stamps.htm"
keywords: ["do", "if", "try", "class", "data", "abentime", "stamps"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) → 

Time Stamp

This section describes how non-time-zone-specific [time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented and the statements used to access them.

-   [Time Stamps - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm)

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm)

-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm)

-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm)

-   [System Class for Time Stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_tstmp.htm)

Continue
[Time Stamps - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm)
[GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm)
[CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm)
[CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm)
[System Class for Time Stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_tstmp.htm)
![Example](exa.gif "Example") [Converting Time Stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconvert_time_stamp_abexa.htm)


### abentime_system_fields.htm

---
title: "System Fields for Date and Time"
description: |
  The following table shows the system fields(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm 'Glossary Entry') that contain information about date and time. System Field Type Length Content GET TIME sy-datlo d - User date(https://help.sap.com/doc/abapdocu_7
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_system_fields.htm"
abapFile: "abentime_system_fields.htm"
keywords: ["update", "do", "if", "try", "data", "abentime", "system", "fields"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) → 

System Fields for Date and Time

The following table shows the [system fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_date_glosry.htm "Glossary Entry")

X

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_date_glosry.htm "Glossary Entry")

X

sy-dayst

c

1

Flag for summer time in the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). During summer time, "X", otherwise " ".

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). "1" for Monday, ..., "5" for Friday.

\-

sy-timlo

t

\-

[User time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_glosry.htm "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry") and [UTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, ignoring summer time.

\-

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_zone_glosry.htm "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") is sent, and when the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is set. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time.htm).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_user_time_zones.htm). The local values of sy-datlo and sy-timlo that make reference to the user time zone are determined from the [system time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_date_glosry.htm "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") is the same as the [user time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), the corresponding system fields for system date and user date and/or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time.htm)


### abentime_system_fields.htm

---
title: "System Fields for Date and Time"
description: |
  The following table shows the system fields(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm 'Glossary Entry') that contain information about date and time. System Field Type Length Content GET TIME sy-datlo d - User date(https://help.sap.com/doc/abapdocu_7
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_system_fields.htm"
abapFile: "abentime_system_fields.htm"
keywords: ["update", "do", "if", "try", "data", "abentime", "system", "fields"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) → 

System Fields for Date and Time

The following table shows the [system fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_date_glosry.htm "Glossary Entry")

X

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_date_glosry.htm "Glossary Entry")

X

sy-dayst

c

1

Flag for summer time in the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). During summer time, "X", otherwise " ".

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). "1" for Monday, ..., "5" for Friday.

\-

sy-timlo

t

\-

[User time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_glosry.htm "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry") and [UTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, ignoring summer time.

\-

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_zone_glosry.htm "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") is sent, and when the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is set. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time.htm).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_user_time_zones.htm). The local values of sy-datlo and sy-timlo that make reference to the user time zone are determined from the [system time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_date_glosry.htm "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") is the same as the [user time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), the corresponding system fields for system date and user date and/or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time.htm)
