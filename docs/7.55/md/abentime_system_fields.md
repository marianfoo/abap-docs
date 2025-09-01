  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_time_processing.htm) → 

System Fields for Date and Time

The following table shows the [system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_date_glosry.htm "Glossary Entry")

X

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_date_glosry.htm "Glossary Entry")

X

sy-dayst

c

1

Flag for daylight saving time in the [system time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). During daylight saving time, "X", otherwise " ".

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). "1" for Monday, ..., "5" for Friday.

\-

sy-timlo

t

\-

[User time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_time_glosry.htm "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_glosry.htm "Glossary Entry") and [UTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, ignoring daylight saving time.

\-

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_glosry.htm "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_time_zone_glosry.htm "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") is sent, and when the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_time.htm).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_user_time_zones.htm). The local values of sy-datlo and sy-timlo that are related to the user time zone are determined from the [system time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_date_glosry.htm "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") is the same as the [user time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), the corresponding system fields for system date and user date or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_time.htm)