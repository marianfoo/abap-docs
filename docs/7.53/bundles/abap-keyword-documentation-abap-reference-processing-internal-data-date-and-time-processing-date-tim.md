# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Date and Time Processing / Date, Time, Time Stamp, and Time Zones

Included pages: 3


### abendate_time_oview.htm

---
title: "Date, Time, Time Stamp, and Time Zones"
description: |
  Dates, times, and time stamps specify times with varying levels of precision. -   A date (or calendar date) is a time specified to a precise day, week, or month with respect to a calendar. AS ABAP always references implicitly the Gregorian calendar valid across most of the world. Output can be conve
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_oview.htm"
abapFile: "abendate_time_oview.htm"
keywords: ["do", "if", "try", "data", "abendate", "time", "oview"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) → 

Date, Time, Time Stamp, and Time Zones

Dates, times, and time stamps specify times with varying levels of precision.

-   A date (or calendar date) is a time specified to a precise day, week, or month with respect to a calendar. AS ABAP always references implicitly the Gregorian calendar valid across most of the world. Output can be converted to [country-specific calendars](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm). Dates are generally interpreted as local dates that are valid in the current time zone.

-   A time is specified to a precise second or minute with respect to a day. AS ABAP always saves times in 24-hour format. The output can have a [country-specific format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm). Times are generally interpreted as local times that are valid in the current time zone.

-   A time stamp specifies a combined date and time to a precise number of fractions of seconds, seconds, or minutes, and with respect to a reference time. AS ABAP always references implicitly the [UTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutc_glosry.htm "Glossary Entry") reference time. The time stamp can be transformed to a local date and local time, using statement and functions where the required time zone is specified.

The relationship between the local date and local time on the one hand, and global [UTC time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") on the other, is governed by a set of time zone rules. These rules are stored in database tables. These rules also respect summer time.

-   [Rules for Time Zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_rules.htm)

-   [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_user_time_zones.htm)

Continue
[Rules for Time Zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_rules.htm)
[System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_user_time_zones.htm)


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
