  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

The setting for the date format also affects the formatting of time stamps in [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry").

Note

The class CL\_ABAP\_DATFM contains helper methods for dealing with date formats.

Example

Output of a date and time stamps with different date formats.

cl\_demo\_output=>display(
  |{ sy-datlo           COUNTRY = 'DE ' }\\n{
     sy-datlo           COUNTRY = 'US ' }\\n{
     utclong\_current( ) COUNTRY = 'DE ' }\\n{
     utclong\_current( ) COUNTRY = 'US ' }| ).

Executable Examples

-   [String Templates, Date Formats](javascript:call_link\('abenstring_template_date_abexa.htm'\))

-   [String Templates, Time Stamp Templates](javascript:call_link\('abenstring_template_utc_abexa.htm'\))