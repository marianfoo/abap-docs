# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / System Fields for Date and Time

Included pages: 2


### abentime_system_fields.htm

---
title: "System Fields for Date and Time"
description: |
  The following table shows the system fields(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm 'Glossary Entry') that contain information about date and time. System Field Type Length Content GET TIME sy-datlo d - User date(https://help.sap.com/doc/abapdocu_7
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_system_fields.htm"
abapFile: "abentime_system_fields.htm"
keywords: ["update", "do", "if", "try", "data", "abentime", "system", "fields"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) → 

System Fields for Date and Time

The following table shows the [system fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_date_glosry.htm "Glossary Entry")

X

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_date_glosry.htm "Glossary Entry")

X

sy-dayst

c

1

Flag for daylight saving time in the [system time zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). During daylight saving time, "X", otherwise " ".

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). "1" for Monday, ..., "5" for Friday.

\-

sy-timlo

t

\-

[User time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_time_glosry.htm "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_glosry.htm "Glossary Entry") and [UTC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, ignoring daylight saving time.

\-

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_glosry.htm "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_time_zone_glosry.htm "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") is sent, and when the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time.htm).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_user_time_zones.htm). The local values of sy-datlo and sy-timlo that are related to the user time zone are determined from the [system time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_date_glosry.htm "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") is the same as the [user time zone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), the corresponding system fields for system date and user date or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time.htm)


### abapget_time.htm

---
title: "GET TIME"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time_shortref.htm) Syntax GET TIME FIELD tim. Addition: ... FIELD tim(#!ABAP_ONE_ADD@1@) Effect Without the addition FIELD, the system fields for date and time(https://help.sap.com/doc/abapdocu_756_index
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time.htm"
abapFile: "abapget_time.htm"
keywords: ["update", "do", "if", "try", "data", "abapget", "time"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) →  [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_system_fields.htm) → 

GET TIME

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time_shortref.htm)

Syntax

GET TIME *\[*FIELD tim*\]*.

Addition:

[... FIELD tim](#!ABAP_ONE_ADD@1@)

Effect

Without the addition FIELD, the [system fields for date and time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_system_fields.htm), sy-datlo, sy-datum, sy-timlo, and sy-uzeit, are set to the current value. The content of the system fields sy-dayst, sy-fdayw, sy-tzone, and sy-zonlo is not updated.

Hint

Except for GET TIME, the system fields are updated after a program is started, a [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") is sent, and the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed.

Example

Approximate runtime measurement. The statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_run_time.htm) should be used instead.

GET TIME.
DATA(t1) = sy-timlo.
DO 5000000 TIMES.
ENDDO.
GET TIME.
DATA(t2) = sy-timlo.
cl\_demo\_output=>display( t2 - t1 ).

Addition   

... FIELD tim

Effect

The addition FIELD is used to pass the current [system time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_glosry.htm "Glossary Entry") in the format "hhmmss" to the variable tim instead of sy-uzeit and none of the system fields are updated. The return value of the statement has the data type t. The following can be specified for tim:

-   An existing variable of the data type t or a variable to which the type t can be converted.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm), where a variable of type t is declared.

Example

The example has the same function as the previous example.

GET TIME.
DO 5000000 TIMES.
ENDDO.
GET TIME FIELD DATA(time).
cl\_demo\_output=>display( time - sy-uzeit ).
