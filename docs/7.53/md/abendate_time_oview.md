  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) → 

Date, Time, Time Stamp, and Time Zones

Dates, times, and time stamps specify times with varying levels of precision.

-   A date (or calendar date) is a time specified to a precise day, week, or month with respect to a calendar. AS ABAP always references implicitly the Gregorian calendar valid across most of the world. Output can be converted to [country-specific calendars](javascript:call_link\('abencountry_formats.htm'\)). Dates are generally interpreted as local dates that are valid in the current time zone.

-   A time is specified to a precise second or minute with respect to a day. AS ABAP always saves times in 24-hour format. The output can have a [country-specific format](javascript:call_link\('abencountry_formats.htm'\)). Times are generally interpreted as local times that are valid in the current time zone.

-   A time stamp specifies a combined date and time to a precise number of fractions of seconds, seconds, or minutes, and with respect to a reference time. AS ABAP always references implicitly the [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") reference time. The time stamp can be transformed to a local date and local time, using statement and functions where the required time zone is specified.

The relationship between the local date and local time on the one hand, and global [UTC time stamps](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") on the other, is governed by a set of time zone rules. These rules are stored in database tables. These rules also respect summer time.

-   [Rules for Time Zones](javascript:call_link\('abentime_zone_rules.htm'\))

-   [System Time Zone and User Time Zone](javascript:call_link\('abensystem_user_time_zones.htm'\))

Continue
[Rules for Time Zones](javascript:call_link\('abentime_zone_rules.htm'\))
[System Time Zone and User Time Zone](javascript:call_link\('abensystem_user_time_zones.htm'\))