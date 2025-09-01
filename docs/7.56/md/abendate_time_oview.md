---
title: "Date, Time, Time Stamp, and Time Zones"
description: |
  Dates, times, and time stamps specify times with varying levels of precision. -   A date or calendar date is a time specification for a calendar that is exact to a day, week, or month. AS ABAP always implicitly references the Gregorian calendar that is valid virtually worldwide. Output can be conver
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_oview.htm"
abapFile: "abendate_time_oview.htm"
keywords: ["do", "if", "try", "data", "abendate", "time", "oview"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) → 

Date, Time, Time Stamp, and Time Zones

Dates, times, and time stamps specify times with varying levels of precision.

-   A date or calendar date is a time specification for a calendar that is exact to a day, week, or month. AS ABAP always implicitly references the Gregorian calendar that is valid virtually worldwide. Output can be converted to [country-specific calendars](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencountry_formats.htm). Dates are generally interpreted as local dates that are valid in the current time zone.
-   A time is a time of day specification that is exact to a second or minute with respect to a day. AS ABAP always saves times in 24-hour format. The output can have a [country-specific format](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencountry_formats.htm). Time specifications are generally interpreted as local times that are valid in the current time zone.
-   A [time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps.htm) specifies a combined date and time that is exact to fractions of seconds or seconds with respect to a reference time. AS ABAP always implicitly references the [UTC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_glosry.htm "Glossary Entry") reference time. The time stamp can be transformed to a local date and local time using statements and functions for which the required time zone is specified.

The relationship between the local date and local time on the one hand, and global [UTC time stamps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") on the other, is established by a set of time zone rules, which are stored in database tables. These rules also respect daylight saving time.

-   [Rules for Time Zones](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_zone_rules.htm)
-   [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_user_time_zones.htm)

Continue
[Rules for Time Zones](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_zone_rules.htm)
[System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_user_time_zones.htm)