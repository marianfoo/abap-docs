---
title: "System Time Zone and User Time Zone"
description: |
  Two time zones(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_zone_glosry.htm 'Glossary Entry') are preconfigured in AS ABAP, the system time zone(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_zone_glosry.htm 'Glossary Entry') and the user time
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_user_time_zones.htm"
abapFile: "abensystem_user_time_zones.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "abensystem", "user", "time", "zones"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_processing.htm) →  [Date, Time, Time Stamp, and Time Zones](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Time%20Zone%20and%20User%20Time%20Zone%2C%20ABENSYSTEM_USER_TIME_ZONES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

System Time Zone and User Time Zone

Two [time zones](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_zone_glosry.htm "Glossary Entry") are preconfigured in AS ABAP, the [system time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") and the [user time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_time_zone_glosry.htm "Glossary Entry").

-   The system time zone is the client-specific time zone of the [system time](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_date_glosry.htm "Glossary Entry") and cannot be changed while the system is running. It is contained in the column TZONESYS in the client-specific database table TTZCU.
-   The user time zone is a client-specific time zone that can be defined for the [user time](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_time_glosry.htm "Glossary Entry") and [user date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_date_glosry.htm "Glossary Entry") of each individual user in the [user master record](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). It is contained in the system field sy-zonlo.

Both time zones are displayed in transaction SU01 on the Defaults tab, however only the user time zone can be changed here and is only effective as of a new logon. If no user time zone is defined in the user master record, or the specified time zone is invalid or inactive, the default value from the column TZONEDEF in the database table TTZCU is used. If it is invalid or inactive, the system field sy-zonlo is filled with blanks.

Hints

-   The current client's system time zone can be read using the function module GET\_SYSTEM\_TIMEZONE.
-   The implementations of the methods of class CL\_DEMO\_DATE\_TIME return the values summarized in the current topic.

Example

Determination of the date and time in the system time zone from a time stamp.

FINAL(tz) = cl\_demo\_date\_time=>get\_system\_time\_zone( ).
CONVERT UTCLONG utclong\_current( )
        INTO DATE FINAL(date)
             TIME FINAL(time)
        TIME ZONE tz.
cl\_demo\_output=>display( |{ date }, { time } ({ tz })| ).

System Time and System Date   

The system time and the system date are the local time and local date of an AS ABAP in the system time zone. They are produced by regular synchronizations of the clock of the [ABAP runtime server](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") and the clock of the database server. During synchronization, the ABAP runtime framework clock is set to the database server clock. Since this happens on all [AS instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry") of an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry"), the ABAP runtime framework clock of an AS instance is synchronized with the clocks of all other AS instances and with the database system clock, and therefore shows the system time and system date of the entire AS ABAP.

The [character-like system fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_system_fields.htm) sy-uzeit and sy-datum are provided with the system time and system date at certain times.

Hint

From a technical perspective, the ABAP runtime framework clock is synchronized with that of the database server on request. If a time is required, for example, to fill [system fields for date and time](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_system_fields.htm), the system checks whether the last synchronization was performed during the specified interval. If this is not the case, synchronization is performed.

Example

Creation of a time stamp from the system date and system time.

CONVERT DATE cl\_demo\_date\_time=>get\_system\_date( )
        TIME cl\_demo\_date\_time=>get\_system\_time( )
        INTO UTCLONG FINAL(ts)
        TIME ZONE cl\_demo\_date\_time=>get\_system\_time\_zone( ).
cl\_demo\_output=>display( |{ ts TIMESTAMP = ISO }| ).

User Time and User Date   

The user time and the user date are the local time and local date of the current user, which are calculated from the system time and the user time zone. The [character-like system fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_system_fields.htm) sy-timlo and sy-datlo are provided with the user time and user date at certain times. If sy-zonlo is initial, sy-timlo and sy-datlo are given the same values as sy-uzeit and sy-datum, the system time and system date.

Hint

To determine the local time and local date from a [UTC time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") created using [GET TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_time-stamp.htm), the content of the system field sy-zonlo can be passed to the statement [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_time-stamp.htm). An initial value for the time zone is implicitly set to UTC and not to the system time zone in CONVERT TIME STAMP.

Example

Determination of a local date and a local time from a time stamp.

FINAL(tz) = cl\_demo\_date\_time=>get\_user\_time\_zone( ).
CONVERT UTCLONG utclong\_current( )
        INTO DATE FINAL(date)
             TIME FINAL(time)
        TIME ZONE tz.
cl\_demo\_output=>display( |{ date }, { time } ({ tz })| ).