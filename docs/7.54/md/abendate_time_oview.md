---
title: "Date, Time, Time Stamp, and Time Zones"
description: |
  Dates, times, and time stamps specify times with varying levels of precision. -   A date (or calendar date) is a time specified to a precise day, week, or month with respect to a calendar. AS ABAP always references implicitly the Gregorian calendar valid across most of the world. Output can be conve
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_oview.htm"
abapFile: "abendate_time_oview.htm"
keywords: ["do", "if", "try", "data", "abendate", "time", "oview"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) → 

Date, Time, Time Stamp, and Time Zones

Dates, times, and time stamps specify times with varying levels of precision.

-   A date (or calendar date) is a time specified to a precise day, week, or month with respect to a calendar. AS ABAP always references implicitly the Gregorian calendar valid across most of the world. Output can be converted to [country-specific calendars](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry_formats.htm). Dates are generally interpreted as local dates that are valid in the current time zone.

-   A time is specified to a precise second or minute with respect to a day. AS ABAP always saves times in 24-hour format. The output can have a [country-specific format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry_formats.htm). Times are generally interpreted as local times that are valid in the current time zone.

-   A [time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm) specifies a combined date and time to a precise number of fractions of seconds or seconds, and with respect to a reference time. AS ABAP always references implicitly the [UTC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutc_glosry.htm "Glossary Entry") reference time. The time stamp can be transformed to a local date and local time, using statement and functions where the required time zone is specified.

The relationship between the local date and local time on the one hand, and global [UTC time stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") on the other, is governed by a set of time zone rules. These rules are stored in database tables. These rules also respect summer time.

-   [Rules for Time Zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm)

-   [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_user_time_zones.htm)

Continue
[Rules for Time Zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm)
[System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_user_time_zones.htm)