---
title: "GET TIME STAMP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time_stamp_shortref.htm) Syntax GET TIME STAMP FIELD time_stamp. Effect This statement uses the system time(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm 'Glossar
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time-stamp.htm"
abapFile: "abapget_time-stamp.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abapget", "time", "stamp"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20TIME%20STAMP%2C%20ABAPGET_TIME-STAMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET TIME STAMP

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time_stamp_shortref.htm)

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement uses the [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") and [system date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_date_glosry.htm "Glossary Entry") of the AS ABAP to create a [UTC time stamp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") according to the [POSIX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") standard and assigns it to the variable time\_stamp of type p as a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm).

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from the ABAP Dictionary, in accordance with the ABAP type p with length 8 or p with length 11 and seven decimal places. Depending on the data type, the time stamp is created either in the [short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm) or in the [long form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm).
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm), where a variable of type TIMESTAMP is declared.

Hints

-   The precision of the decimal places of the generated time stamp depends on the hardware (processor) of the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry"). Resolutions in the one-digit or two-digit microsecond range are realistic.
-   A time stamp in its short form is the integer part of a time stamp in its long form. In order to create the respective short form from an existing long form time stamp, the value of the long form must be rounded down. This cannot be achieved by a simple assignment because the corresponding [p to p](abenconversion_type_p.htm#@@ITOC@@ABENCONVERSION_TYPE_P_1) conversion rule rounds commercially. Instead, an appropriate function such as [round](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendec_floating_point_functions.htm) or [trunc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_functions.htm) can be used. Note that the methods MOVE\_TO\_SHORT and MOVE of the system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_tstmp.htm) prevent invalid results but also round commercially. See the executable example [Rounding Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenround_time_stamp_abexa.htm).

Example

Creation of two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be formatted specially for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD FINAL(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT