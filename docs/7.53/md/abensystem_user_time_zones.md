  

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