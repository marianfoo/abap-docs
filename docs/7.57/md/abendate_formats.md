  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Date Formats, ABENDATE_FORMATS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Date Formats

The date format is determined by column DATFM in the database table T005X, where mm, dd, and yyyy stand for day, month, and year. The following country-specific formats are available:

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

-   In the Japanese formats for the values "7", "8", and "9", the first two characters gg of a four-digit year are formatted as a Japanese Unicode character for the current Japanese Emperor. The last two characters yy signify the year of his reign.
-   In the Islamic formats for the values A and B, the date is formatted according to the Islamic moon calendar, which calculates time since 16th July 622, which is the date on which Mohammed left Mecca (Hijra). Since this calculation can be different in different Islamic countries, two formats are offered, each of which can be set individually. The corresponding settings are in the database table TISLCAL, and can be changed using the program I18N\_MAINTAIN\_TISLCAL.
-   The Iranian format for value C is based on an Islamic sun calendar, which calculates the time in sun years since the Hijra.

The setting for the date format also affects the formatting of time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm "Glossary Entry").

Hints

-   The class CL\_ABAP\_DATFM contains helper methods for dealing with date formats.
-   The values for DATFM are defined by the fixed values of domain XUDATFM.

Example

Output of a date and time stamps with different date formats.

cl\_demo\_output=>display(
  |{ sy-datlo           COUNTRY = 'DE ' }\\n{
     sy-datlo           COUNTRY = 'US ' }\\n{
     utclong\_current( ) COUNTRY = 'DE ' }\\n{
     utclong\_current( ) COUNTRY = 'US ' }| ).

Executable Examples

-   [String Templates, Date Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_date_abexa.htm)
-   [String Templates, Time Stamp Templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_utc_abexa.htm)