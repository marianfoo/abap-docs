  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date, Time, Time Stamp, and Time Zones](javascript:call_link\('abendate_time_oview.htm'\)) → 

System Time Zone and User Time Zone

Two [time zones](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry") are preconfigured in AS ABAP, the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") and the [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry").

-   The system time zone is the client-specific time zone of the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and the [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") and cannot be changed while the system is running. It is contained in the column TZONESYS in the client-specific database table TTZCU.

-   The user time zone is a client-specific time zone that can be defined for the [user time](javascript:call_link\('abenuser_time_glosry.htm'\) "Glossary Entry") and [user date](javascript:call_link\('abenuser_date_glosry.htm'\) "Glossary Entry") of each individual user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). It is contained in the system field sy-zonlo. Both time zones are displayed in transaction SU01 on the Defaults tab, however only the user time zone can be changed here and is only effective as of a new logon. If no user time zone is defined in the user master record, or the specified time zone is invalid or inactive, the default value from the column TZONEDEF in the database table TTZCU is used. If it is invalid or inactive, the system field sy-zonlo is filled with blanks.

Hint

The current client's system time zone can be read using the function module GET\_SYSTEM\_TIMEZONE.

Example

Determination of the date and time in the system time zone from a time stamp.

DATA(ts) = utclong\_current( ).
SELECT SINGLE tzonesys
       FROM ttzcu
       INTO @DATA(tzone).
CONVERT UTCLONG ts
        INTO DATE DATA(date)
             TIME DATA(time)
        TIME ZONE tzone.

System Time and System Date

The system time and the system date are the local time and local date of an AS ABAP in the system time zone. They are produced by regular synchronizations of the clock of the [ABAP runtime server](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") and the clock of the database server. During synchronization, the ABAP runtime environment clock is set to the database server clock. Since this happens on all [AS instances](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"), the ABAP runtime environment clock of an AS instance is synchronized with the clocks of all other AS instances and with the database system clock, and therefore shows the system time and system date of the entire AS ABAP.

The [character-like system fields](javascript:call_link\('abentime_system_fields.htm'\)) sy-uzeit and sy-datum are provided with the system time and system date at certain times.

Hint

From a technical perspective, the ABAP runtime environment clock is synchronized with that of the database server on request. If a time is required, for example, to fill [system fields for date and time](javascript:call_link\('abentime_system_fields.htm'\))), the system checks whether the last synchronization was performed during the specified interval. If this is not the case, synchronization is performed.

Example

Creation of a time stamp from the system date and system time.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
CONVERT DATE sy-datum TIME sy-uzeit
        INTO TIME STAMP DATA(ts) TIME ZONE tz.

User Time and User Date

The user time and the user date are the local time and local date of the current user, which are calculated from the system time and the user time zone. The [character-like system fields](javascript:call_link\('abentime_system_fields.htm'\)) sy-timlo and sy-datlo are provided with the user time and user date at certain times. If sy-zonlo is initial, sy-timlo and sy-datlo are given the same values as sy-uzeit and sy-datum, the system time and system date.

Hint

To determine the local time and local date from a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") created using [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)), the content of the system field sy-zonlo can be passed to the statement [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)). An initial value for the time zone is set in CONVERT TIME STAMP, but set implicitly to "UTC" and not to the system time zone.

Example

Determination of a local date and a local time from a time stamp.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time).