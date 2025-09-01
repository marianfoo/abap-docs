---
title: "Syntax"
description: |
  ... utclong_current( ) ... Effect This built-in function(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) creates a UTC time stamp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutc_timestamp_glosry.htm 'Glossary Entry') from the system tim
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong_current.htm"
abapFile: "abenutclong_current.htm"
keywords: ["do", "if", "try", "data", "types", "abenutclong", "current"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps.htm) →  [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong.htm) →  [Time Stamp Functions (ts\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ts_func - utclong_current, ABENUTCLONG_CURRENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

ts\_func - utclong\_current

Syntax

... utclong\_current( ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) creates a [UTC time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") from the [system time](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_date_glosry.htm "Glossary Entry") of an AS ABAP in accordance with [POSIX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenposix_timestamp_glosry.htm "Glossary Entry"). The return value has the data type [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm).

Hint

The precision of the decimal places of the created time stamp depends on the hardware (processor) of the [host computer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"). Resolutions in the one-digit or two-digit microsecond range are realistic.

Example

Creation of a table of time stamps. Unlike the example [GET TIME STAMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_time-stamp.htm), the time stamps do not need to be formatted differently in the output to be recognizable as such.

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY.
time\_stamps = VALUE #( FOR i = 1 UNTIL i > 100
                         ( utclong\_current( ) ) ).
cl\_demo\_output=>display( time\_stamps ).