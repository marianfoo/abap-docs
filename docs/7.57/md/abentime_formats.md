  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Time Formats, ABENTIME_FORMATS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Time Formats

The time format is determined by column TIMEFM in the data base table T005X, where hh, mm, and ss stand for hour, minute, and second. One 24-hour format and several 12-hour formats are available:

TIMEFM

Time Format

blank

24-hour format (default setting) hh:mm:ss

1

12-hour format (1 to 12) hh:mm:ss AM and hh:mm:ss PM

2

12-hour format (1 to 12) hh:mm:ss am and hh:mm:ss pm

3

12-hour format (0 to 11) hh:mm:ss AM and hh:mm:ss PM

4

12-hour format (0 to 11) hh:mm:ss am and hh:mm:ss pm

-   The 24-hour format follows the ISO-8601 standard.
-   The 12-hour formats are specific to certain English-speaking countries such as Australia, Canada, New Zealand, and the USA. AM/am stands for Ante meridiem (before noon) and PM/pm stands for Post meridiem (after noon).
-   The formats for the values 1 and 2 or 3 and 4 differ only in the capitalization of AM/PM and am/pm.
-   For the 12-hour formats of values 1 and 2, midnight and noon are formatted as 12:00:00.
-   For the 12-hour formats of values 3 and 2, midnight and noon are formatted as 00:00:00.

The setting for the time format also affects the formatting of time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm "Glossary Entry").

Hints

-   All time formats are suitable for the representation of times. Only the 24-hour format is suitable for the representation of a duration, that is, the interval between two points in time. It does not make sense to use AM/am and PM/pm for a duration.
-   The class CL\_ABAP\_TIMEFM contains a helper method for handling time formats.
-   The values for TIMEFM are defined by the fixed values of domain XUTIMEFM.

Example

Output of a time and time stamps with different time formats (if they exist in the database table T005X).

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @FINAL(country).
cl\_demo\_output=>display(
  |{ sy-timlo           COUNTRY = 'DE '   }\\n{
     sy-timlo           COUNTRY = country }\\n{
     utclong\_current( ) COUNTRY = 'DE '   }\\n{
     utclong\_current( ) COUNTRY = country }| ).

Executable Examples

-   [String Templates, Time Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_time_abexa.htm)
-   [String Templates, Time Stamp Templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_utc_abexa.htm)