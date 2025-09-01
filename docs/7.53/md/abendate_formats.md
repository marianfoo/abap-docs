  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

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

Note

The class CL\_ABAP\_DATFM contains helper methods for dealing with date formats.

Example

Produces a date with different date formats.

cl\_demo\_output=>display(
  |{ sy-datlo COUNTRY = 'DE ' }\\n{ sy-datlo COUNTRY = 'US ' }| ).

Example

To see the display of the current date in all possible formats, see the associated executable [example with character string templates](javascript:call_link\('abenstring_template_date_abexa.htm'\)).