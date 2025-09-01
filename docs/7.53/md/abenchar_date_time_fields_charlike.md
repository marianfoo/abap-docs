---
title: "Character-Like Access to Date Fields and Time Fields"
description: |
  Character-like access to character-like content of date fields and time fields is evaluated in a character-like manner. The character-like nature of date fields and time fields can be exploited, for example, to access detailed information. To avoid unexpected results from this type of access, the v
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_charlike.htm"
abapFile: "abenchar_date_time_fields_charlike.htm"
keywords: ["do", "if", "data", "abenchar", "date", "time", "fields", "charlike"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_processing.htm) →  [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_date_time.htm) →  [Access to Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_access.htm) → 

Character-Like Access to Date Fields and Time Fields

Character-like access to character-like content of date fields and time fields is evaluated in a character-like manner. The character-like nature of date fields and time fields can be exploited, for example, to access detailed information. To avoid unexpected results from this type of access, the [validity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_validity.htm) of the content of the date or time fields must be verified. Most [statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) and [functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) used in [string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) are not suitable for editing date fields and time fields because they generally produce invalid content.

Example

The following example demonstrates how [substring functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm) can be used to extract the components year, month, day, hour, minute, and second from date fields and time fields.

DATA: date TYPE d,
      time TYPE t.
DATA: year   TYPE i,
      month  TYPE i,
      day    TYPE i,
      hour   TYPE i,
      minute TYPE i,
      second TYPE i.
date = sy-datlo.
time = sy-timlo.
year   = substring( val = date off = 0 len = 4 ).
month  = substring( val = date off = 4 len = 2 ).
day    = substring( val = date off = 6 len = 2 ).
hour   = substring( val = time off = 0 len = 2 ).
minute = substring( val = time off = 2 len = 2 ).
second = substring( val = time off = 4 len = 2 ).