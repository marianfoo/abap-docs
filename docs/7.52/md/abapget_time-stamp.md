---
title: "GET TIME STAMP"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time_stamp_shortref.htm) Syntax GET TIME STAMP FIELD time_stamp. Effect This statement creates a (https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenposix_timestamp_glosry.htm 'Glossary Entry')POSIX
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time-stamp.htm"
abapFile: "abapget_time-stamp.htm"
keywords: ["do", "if", "try", "data", "abapget", "time", "stamp"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

GET TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time_stamp_shortref.htm)

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement creates a [](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenposix_timestamp_glosry.htm "Glossary Entry")[POSIX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") UTC time stamp from the [system time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_time_glosry.htm "Glossary Entry") and [system date](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_date_glosry.htm "Glossary Entry") in AS ABAP and assigns it to the variable time\_stamp.

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. Depending on the data type, the time stamp is created either in the [short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm) or in the [long form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm).
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type TIMESTAMP is declared.
    

Note

The precision of the decimal places of the long form depends on the hardware (processor) of the [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"). The maximum resolution of 100 ns is not always reached. On some platforms, only a resolution of milliseconds can be reached.

Example

Creates two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be given a special format for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD DATA(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT