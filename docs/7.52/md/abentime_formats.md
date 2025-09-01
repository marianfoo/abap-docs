---
title: "Time Formats"
description: |
  The time format is specified by column TIMEFM in the data base table T005X, where 'hh', 'mm', and 'ss' stand for hour, minute, and second. One 24-hour format and several 12-hour formats are available: TIMEFM Time Format ' ' 24-hour format (default setting) hh:mm:ss '1' 12-hour format (1 to 12) hh:mm
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_formats.htm"
abapFile: "abentime_formats.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abentime", "formats"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm) → 

Time Formats

The time format is specified by column TIMEFM in the data base table T005X, where "hh", "mm", and "ss" stand for hour, minute, and second. One 24-hour format and several 12-hour formats are available:

TIMEFM

Time Format

" "

24-hour format (default setting) hh:mm:ss

"1"

12-hour format (1 to 12) hh:mm:ss AM and hh:mm:ss PM

"2"

12-hour format (1 to 12) hh:mm:ss am and hh:mm:ss pm

"3"

12-hour format (0 to 11) hh:mm:ss AM and hh:mm:ss PM

"4"

12-hour format (0 to 11) hh:mm:ss am and hh:mm:ss pm

-   The 24-hour format follows the standard ISO-8601.

-   The 12-hour formats are specific for specific English-speaking countries such as Australia, Canada, New Zealand, and the USA. AM/am stands for "Ante meridiem" (before noon) and PM/pm stands for "Post meridiem" (after noon).

-   The formats for values "1" and "2" or "3" and "4" differ only in the capitalization of AM/PM and am/pm.

-   For the 12-hour formats of values "1" and "2", midnight and noon are displayed as 12:00:00.

-   For the 12-hour formats of values "3" and "2", midnight and noon are displayed as 00:00:00.

Notes

-   All time formats are suitable for the display of times. Only the 24-hour format is suitable for the display of a period of time, that is, the duration between two points in time. It does not make sense to display AM/am and PM/pm for a period of time.

-   The class CL\_ABAP\_TIMEFM contains a helper method for dealing with time formats.

Example

Produces a time with different time formats (if they exist in the database table T005X.

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @DATA(country).
cl\_demo\_output=>display(
  |{ sy-timlo COUNTRY = 'DE ' }\\n{ sy-timlo COUNTRY = country }| ).

Executable Example

[Character String Templates, Time Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_time_abexa.htm)