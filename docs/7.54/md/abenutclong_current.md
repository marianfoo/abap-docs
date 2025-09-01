---
title: "Syntax"
description: |
  ... utclong_current( ) ... Effect This function takes the system time(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_time_glosry.htm 'Glossary Entry') and system date(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_date_glosry.htm 'Glossary Entry') i
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong_current.htm"
abapFile: "abenutclong_current.htm"
keywords: ["do", "if", "try", "data", "types", "abenutclong", "current"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm) →  [Time Stamp Field with Time Stamp Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm) →  [Time Stamp Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_functions.htm) → 

utclong\_current - Time Stamp Function

Syntax

... utclong\_current( ) ...

Effect

This function takes the [system time](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_time_glosry.htm "Glossary Entry") and [system date](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_date_glosry.htm "Glossary Entry") in AS ABAP and uses them to produce a [UTC time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") in accordance with [POSIX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenposix_timestamp_glosry.htm "Glossary Entry"). The return value has the data type [utclong](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm).

Note

The precision of the decimal places of the new time stamp depends on the hardware (processor) of the current [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") [host computer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry"). A resolution of a single-figure or two-figure number of microseconds is realistic.

Example

Creates a table of time stamps. Unlike the example [GET TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time-stamp.htm), the time stamps do not need to be formatted differently in the output to make them visible as time stamps.

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY.
time\_stamps = VALUE #( FOR i = 1 UNTIL i > 100
                         ( utclong\_current( ) ) ).
cl\_demo\_output=>display( time\_stamps ).