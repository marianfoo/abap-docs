  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Date%2C%20Time%2C%20Time%20Stamp%2C%20and%20Time%20Zones%2C%20ABENDATE_TIME_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Date, Time, Time Stamp, and Time Zones

Dates, times, and time stamps specify times with varying levels of precision.

-   A date or calendar date is a time specification for a calendar that is exact to a day, week, or month. AS ABAP always implicitly references the Gregorian calendar that is valid virtually worldwide. Output can be converted to [country-specific calendars](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm). Dates are generally interpreted as local dates that are valid in the current time zone.
-   A time is a time of day specification that is exact to a second or minute with respect to a day. AS ABAP always saves times in 24-hour format. The output can have a [country-specific format](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm). Time specifications are generally interpreted as local times that are valid in the current time zone.
-   A [time stamp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps.htm) specifies a combined date and time that is exact to fractions of seconds or seconds with respect to a reference time. AS ABAP always implicitly references the [UTC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_glosry.htm "Glossary Entry") reference time. The time stamp can be transformed to a local date and local time using statements and functions for which the required time zone is specified.

The relationship between the local date and local time on the one hand, and global [UTC time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") on the other, is established by a set of time zone rules, which are stored in database tables. These rules also respect daylight saving time.

-   [Rules for Time Zones](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_zone_rules.htm)
-   [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_user_time_zones.htm)

Continue
[Rules for Time Zones](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_zone_rules.htm)
[System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_user_time_zones.htm)