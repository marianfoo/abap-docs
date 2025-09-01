---
title: "Time Stamps"
description: |
  This section describes how non-time-zone-specific time stamps(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamp_glosry.htm 'Glossary Entry') are represented and the statements used to access them. There are two ways in which time stamps can be handled in ABAP: -   Time Sta
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm"
abapFile: "abentime_stamps.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentime", "stamps"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) → 

Time Stamps

This section describes how non-time-zone-specific [time stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented and the statements used to access them. There are two ways in which time stamps can be handled in ABAP:

-   [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm)

-   [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm)

Notes

-   In new programs, it is recommended to use time stamps in time stamp fields.

-   The [system class for time stamps in packed numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_tstmp.htm) contains methods for the conversion between the two representation types for time stamps. These are necessary if you are working in new programs with time stamp fields, but need to access existing repositories or interfaces.

-   There is not a time stamp for the missing days due to the switch from the Julian to the Gregorian calendar. The time stamp "1582-10-04T23:59:59.9999999" is followed by the time stamp "1582-10-15T00:00:00.0000000".

Continue
[Time Stamp Field with Time Stamp Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm)
[Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm)