---
title: "System Class for Time Stamp Fields"
description: |
  The Class Library contains the following system class for handling time stamps in time stamp fields(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm 'Glossary Entry'): -   CL_ABAP_UTCLONG This class provides the following methods: -   DIFF for calculating
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_system_class.htm"
abapFile: "abentimestamp_system_class.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abentimestamp", "system"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps.htm) →  [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: System Class for Time Stamp Fields, ABENTIMESTAMP_SYSTEM_CLASS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

System Class for Time Stamp Fields

The Class Library contains the following system class for handling time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm "Glossary Entry"):

-   CL\_ABAP\_UTCLONG

This class provides the following methods:

-   DIFF for calculating time differences.
-   READ for reading a time stamp from a string.

The attributes MIN and MAX contain the minimum and maximum values of the [time stamp type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry") utclong.

Hint

An initial time stamp passed to the method DIFF is handled here like the smallest possible value of a time stamp.

Example

Comparison of the method DIFF with the built-in function [utclong\_diff](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong_diff.htm).

FINAL(ts\_low)  = utclong\_current( ).
FINAL(ts\_high) = utclong\_add( val     = ts\_low
                             seconds = 100000 ).
FINAL(diff) = utclong\_diff( high = ts\_high
                           low  = ts\_low ).
cl\_abap\_utclong=>diff( EXPORTING high     = ts\_high
                                 low      = ts\_low
                       IMPORTING days    = FINAL(days)
                                 hours   = FINAL(hours)
                                 minutes = FINAL(minutes)
                                 seconds = FINAL(seconds) ).
ASSERT diff = 100000.
ASSERT diff = 86400 \* days + 3600 \* hours + 60 \* minutes + seconds.

Executable Example

[Read Time Stamp from String](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_utclong_read_abexa.htm)

Continue
![Example](exa.gif "Example") [Read Time Stamp from String](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_utclong_read_abexa.htm)