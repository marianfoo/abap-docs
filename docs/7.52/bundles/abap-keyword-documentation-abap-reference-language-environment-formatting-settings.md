# ABAP - Keyword Documentation / ABAP - Reference / Language Environment / Formatting Settings

Included pages: 7


### abencountry.htm

---
title: "Formatting Settings"
description: |
  Formats The formatting settings of the language environment(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) determine the following for formatted output: -   the number format (decimal and thousand separators) -   The date format (separators and order) -   The time for
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm"
abapFile: "abencountry.htm"
keywords: ["insert", "do", "if", "try", "method", "class", "data", "types", "abencountry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) → 

Formatting Settings

Formats

The formatting settings of the [language environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) determine the following for formatted output:

-   the number format (decimal and thousand separators)

-   The date format (separators and order)

-   The time format (24 hour or 12 hour format)

Definition

The formatting settings are set as follows:

-   At the start of an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") they are determined by the related default settings in the fixed values in the [user master record](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_master_record_glosry.htm "Glossary Entry") of the current user.

-   Using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm), this default setting for the current internal session can be overwritten using [country-specific formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm).

Effect

The formatting settings affect the following ABAP language elements:

-   Assignments with the statement [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm)

-   Output in lists with the statement [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm)

-   Specifies the parameter [ENVIRONMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) for the formatting options [NUMBER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm), [DATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm), [TIME](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm), and [TIMESTAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) in [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm).

The formatting setting set in the user master record also affect the preparation of numbers, dates, and times specified on the screens of dynpros.

Handling Invalid Values

Preparing the content of data object of the types d or t normally takes place independently from their content. [Invalid values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) are also compiled as date or time entries. For time output in the 12 hour format, the separators are inserted at the respective points for invalid values and the output of the AM/am or PM/pm abbreviation is undefined for the following exception.

Dynpros do not support any invalid values in the time fields with the 24 hour format with the exception of the value "24:00:00". This value is saved here as "240000" when passed to an ABAP field of type t. To support this value in time fields in 12 hour format too, it is formatted as "24:00:00 PM/pm".

Note

The class CL\_ABAP\_TIMEFM contains a helper method for dealing with time formats.

Continue
[Country-Specific Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm)
[SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm)


### abencountry_formats.htm

---
title: "Country-Specific Formats"
description: |
  The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting. -   Number Formats(https://help.sap.com/d
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm"
abapFile: "abencountry_formats.htm"
keywords: ["do", "if", "try", "data", "abencountry", "formats"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_formats.htm)

-   [Date Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_formats.htm)

-   [Time Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_formats.htm)

The settings for a specific country can either be

-   set using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm) for an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") or

-   used in [character string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) by means of formatting option [COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) for the formatting of an [embedded expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm).

Note

The country names that correspond to the country codes in table T005X can be found in table T005T.

Continue
[Number Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_formats.htm)
[Date Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_formats.htm)
[Time Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_formats.htm)


### abennumber_formats.htm

---
title: "Number Formats"
description: |
  The format of numbers is specified by the column XDEZP of the database table T005X. The options in the table below are available for displaying decimal separators and thousands separators: XDEZP Decimal Separator Thousands Separator ' ' ',' '.' X '.' ',' Y ',' ' ' Example Produces a number with diff
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_formats.htm"
abapFile: "abennumber_formats.htm"
keywords: ["do", "if", "try", "data", "abennumber", "formats"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm) → 

Number Formats

The format of numbers is specified by the column XDEZP of the database table T005X. The options in the table below are available for displaying decimal separators and thousands separators:

XDEZP

Decimal Separator

Thousands Separator

" "

","

"."

X

"."

","

Y

","

" "

Example

Produces a number with differing decimal and thousand separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{ pack COUNTRY = 'US ' }| ).

Executable Example

To see the display of a number in all possible formats, see the respective [example with character string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_number_abexa.htm).


### abendate_formats.htm

---
title: "Date Formats"
description: |
  The date format is specified by column DATFM in the database table T005X, where 'mm', 'dd', and 'yyyy' stand for day, month, and year. The following country-specific formats are available: DATFM Date Format '1' dd.mm.yyyy '2' mm/dd/yyyy '3' mm-dd-yyyy '4' yyyy.mm.dd '5' yyyy/mm/dd '6' yyyy-mm-dd '7'
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_formats.htm"
abapFile: "abendate_formats.htm"
keywords: ["do", "if", "try", "data", "abendate", "formats"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm) → 

Date Formats

The date format is specified by column DATFM in the database table T005X, where "mm", "dd", and "yyyy" stand for day, month, and year. The following country-specific formats are available:

DATFM

Date Format

"1"

dd.mm.yyyy

"2"

mm/dd/yyyy

"3"

mm-dd-yyyy

"4"

yyyy.mm.dd

"5"

yyyy/mm/dd

"6"

yyyy-mm-dd

"7"

ggyy.mm.dd, Japanese date

"8"

ggyy/mm/dd, Japanese date

"9"

ggyy-mm-dd, Japanese date

"A"

yyyy/mm/dd, Islamic date 1

"B"

yyyy/mm/dd, Islamic date 2

"C"

yyyy/mm/dd, Iranian date

-   In the Japanese formats for values "7", "8", and "9", the first two characters "gg" of a four-digit year are prepared as a Japanese Unicode character for the current Japanese Emperor. The last two characters "yy" signify the year of his reign.

-   In the Islamic formats for values "A" and "B", the date is prepared according to the Islamic moon calendar, which calculates time starting from 16th July 622, which is the date on which Mohammed left Mecca (Hijra). Since this calculation can be different in different Islamic countries, two formats are offered, each of which can be set individually. The respective settings are in database table TISLCAL, and can be changed using program I18N\_MAINTAIN\_TISLCAL.

-   The Iranian format for value "C" is based on an Islamic sun calendar, which calculates in sun years starting from the Hijra.

Example

Produces a date with different date formats.

cl\_demo\_output=>display(
  |{ sy-datlo COUNTRY = 'DE ' }\\n{ sy-datlo COUNTRY = 'US ' }| ).

Example

To see the display of the current date in all possible formats, see the associated executable [example with character string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_date_abexa.htm).


### abentime_formats.htm

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


### abencountry_formats.htm

---
title: "Country-Specific Formats"
description: |
  The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting. -   Number Formats(https://help.sap.com/d
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm"
abapFile: "abencountry_formats.htm"
keywords: ["do", "if", "try", "data", "abencountry", "formats"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_formats.htm)

-   [Date Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_formats.htm)

-   [Time Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_formats.htm)

The settings for a specific country can either be

-   set using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm) for an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") or

-   used in [character string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) by means of formatting option [COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) for the formatting of an [embedded expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm).

Note

The country names that correspond to the country codes in table T005X can be found in table T005T.

Continue
[Number Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_formats.htm)
[Date Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_formats.htm)
[Time Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_formats.htm)


### abapset_country.htm

---
title: "SET COUNTRY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country_shortref.htm) Syntax SET COUNTRY cntry. Effect This statement sets the formatting settings(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the language environment for all fo
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm"
abapFile: "abapset_country.htm"
keywords: ["select", "do", "if", "try", "data", "abapset", "country"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) → 

SET COUNTRY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country_shortref.htm)

Syntax

SET COUNTRY cntry.

Effect

This statement sets the [formatting settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the language environment for all following statements of the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry").

cntry expects a character-like data object that either contains a value from the column LAND of the database table T005X or is initial.

-   If cntry contains a value from the table T005X, the number format, date format, and time format are set to a [country-specific format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm) in accordance with the entries in columns XDEZP, DATFM, and TIMEFM.
    
-   If cntry is initial (contains a blank in the first place), the formatting is set in accordance with the fixed values in the [user master record](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_master_record_glosry.htm "Glossary Entry").
    

If the content of cntry cannot be found in the table T005X and does not have a blank in the first place, sy-subrc is set to 4 and the following settings are made:

-   The decimal separator is a decimal point and the thousands separator is a comma.
    
-   Date in the form "mm/dd/yyyy"
    
-   Time in 24-hour format
    

System Fields

sy-subrc

Meaning

0

The specified country key was found in the database table T005X or a blank was specified.

4

The specified country key was not found in database table T005X.

Notes

-   As long as the statement SET COUNTRY is not executed in an internal session, the formatting corresponds to the fixed values in the [user master record](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_master_record_glosry.htm "Glossary Entry").
    
-   If certain formatting settings are only required for one or a few formattings, the formatting option [country](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) can be used for [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) instead of SET COUNTRY.
    
-   Do not confuse the statement SET COUNTRY with the obsolete addition [COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale_obsolete.htm) of the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale.htm), used for setting the [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry"). In particular, it does not have a corresponding GET COUNTRY statement.
    

Example

Sets the formatting settings of the language environment and the way they modify the addition [ENVIRONMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) in [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm).

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @DATA(country).
SET COUNTRY country.
cl\_demo\_output=>display(
  |{  sy-datlo DATE = ENVIRONMENT }\\n{
      sy-timlo TIME = ENVIRONMENT }| ).

Executable Examples

-   [String Templates, Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_user_abexa.htm)

-   [WRITE, Cutoff Behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_cutoff_abexa.htm)
