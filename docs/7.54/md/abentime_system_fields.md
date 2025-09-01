  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) → 

System Fields for Date and Time

The following table shows the [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](javascript:call_link\('abenuser_date_glosry.htm'\) "Glossary Entry")

X

sy-datum

d

\-

[System date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry")

X

sy-dayst

c

1

Flag for summer time in the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry"). During summer time, "X", otherwise " ".

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry"). "1" for Monday, ..., "5" for Friday.

\-

sy-timlo

t

\-

[User time](javascript:call_link\('abenuser_time_glosry.htm'\) "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") reference time in seconds, ignoring summer time.

\-

sy-uzeit

t

\-

[System Time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") is sent, and when the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is set. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](javascript:call_link\('abapget_time.htm'\)).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](javascript:call_link\('abensystem_user_time_zones.htm'\)). The local values of sy-datlo and sy-timlo that make reference to the user time zone are determined from the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and the [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") is the same as the [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry"), the corresponding system fields for system date and user date and/or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](javascript:call_link\('abapget_time.htm'\))