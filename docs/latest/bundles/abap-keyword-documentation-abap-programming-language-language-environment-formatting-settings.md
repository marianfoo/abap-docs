# ABAP - Keyword Documentation / ABAP - Programming Language / Language Environment / Formatting Settings

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencountry.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry.htm)
- [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm)
- [abennumber_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumber_formats.htm)
- [abendate_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_formats.htm)
- [abentime_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_formats.htm)
- [abapset_country.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_country.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.914Z

---

### abencountry.htm

> **📖 Official SAP Documentation**: [abencountry.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Formatting%20Settings%2C%20ABENCOUNTRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Formatting Settings

Formats   

The formatting settings of the [language environment](javascript:call_link\('abenlanguage.htm'\)) determine

-   the number format (decimal and thousands separators)
-   The date format (separators and order)
-   The time format (24 hour or 12 hour format)
-   The time stamp format (composed of date format and time format)

for formatted output.

Definition   

The formatting settings are set as follows:

-   At the start of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), they are determined by the corresponding Defaults in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") of the current user.
-   Using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)), this default setting for the current internal session can be overwritten using [country-specific formats](javascript:call_link\('abencountry_formats.htm'\)).

Effect   

The formatting settings affect the following ABAP language elements:

-   Assignments with the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))
-   Output in lists with the statement [WRITE](javascript:call_link\('abapwrite-.htm'\))
-   Specifies the parameter [ENVIRONMENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting options [NUMBER](javascript:call_link\('abapcompute_string_format_options.htm'\)), [DATE](javascript:call_link\('abapcompute_string_format_options.htm'\)), [TIME](javascript:call_link\('abapcompute_string_format_options.htm'\)), and [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)).

The formatting settings defined in the user master record also affect the formatting of numbers, dates, times, and time stamps specified on the screens of dynpros.

Handling Invalid Values   

The content of data object of the types d or t is normally formatted independently from their content. [Invalid values](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) are also interpreted as date or time specifications. For time output in the 12 hour format, the separators are inserted at the respective points for invalid values and the output of the AM/am or PM/pm abbreviation is undefined with the following exception.

Dynpros do not support any invalid values in the time fields with the 24 hour format with the exception of the value 24:00:00. This value is stored here as 240000 when passed to an ABAP field of type t. To be able to support this value in time fields in 12 hour format too, it is formatted as 24:00:00 PM/pm.

Time stamp fields of the type utclong must contain valid values to be able to be represented as dynpro fields on dynpros and only valid values can be entered. Invalid values can be produced by castings.

Hints

-   The classes CL\_ABAP\_DATFM and CL\_ABAP\_TIMEFM contain helper methods for handling date and time formats.
-   The Defaults of the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") for each user are stored in DDIC database table USR01.

Continue
[Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\))
[SET COUNTRY](javascript:call_link\('abapset_country.htm'\))



**📖 Source**: [abencountry.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry.htm)

### abencountry_formats.htm

> **📖 Official SAP Documentation**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Country-Specific%20Formats%2C%20ABENCOUNTRY_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](javascript:call_link\('abennumber_formats.htm'\))
-   [Date Formats](javascript:call_link\('abendate_formats.htm'\))
-   [Time Formats](javascript:call_link\('abentime_formats.htm'\))

For a time stamp, the date format and time format affect the respective parts and the decimal separator follows the number format.

The settings for a specific country can either be

-   set for an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) or
-   used in [string templates](javascript:call_link\('abenstring_templates.htm'\)) using the formatting option [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting of an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)).

Hints

-   The country names that match the country codes in table T005X can be found in table T005T.
-   The Defaults of the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") for each user are stored in DDIC database table USR01. The country-specific formatting settings for numbers, dates, and times are stored in columns DCPFM, DATFM, and TIMEFM. These columns refer to the same [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") as those of table T005X.

Continue
[Number Formats](javascript:call_link\('abennumber_formats.htm'\))
[Date Formats](javascript:call_link\('abendate_formats.htm'\))
[Time Formats](javascript:call_link\('abentime_formats.htm'\))



**📖 Source**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm)

### abennumber_formats.htm

> **📖 Official SAP Documentation**: [abennumber_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumber_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Number%20Formats%2C%20ABENNUMBER_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Number Formats

The format of numbers is determined by the column XDEZP of the database table T005X. The decimal and thousands separators shown in the following table are available:

XDEZP

Decimal Separator

Thousands Separator

blank

","

"."

X

"."

","

Y

","

blank

The setting for the decimal separator also affects the formatting of time stamps in [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry").

Hint

The values for XDEZP are defined by the fixed values of domain XUDCPFM.

Example

Output of a number and time stamp with different separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
FINAL(utcl) =  utclong\_current( ).
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{
     pack COUNTRY = 'US ' }\\n{
     utcl COUNTRY = 'DE ' }\\n{
     utcl COUNTRY = 'US ' }| ).

Executable Example

For the representation of a number in all possible number formats, see the associated [example with string templates](javascript:call_link\('abenstring_template_number_abexa.htm'\)).



**📖 Source**: [abennumber_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumber_formats.htm)

### abendate_formats.htm

> **📖 Official SAP Documentation**: [abendate_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Date%20Formats%2C%20ABENDATE_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Date Formats

The date format is determined by column DATFM in the database table T005X, where mm, dd, and yyyy stand for day, month, and year. The following country-specific formats are available:

DATFM

Date Format

1

dd.mm.yyyy

2

mm/dd/yyyy

3

mm-dd-yyyy

4

yyyy.mm.dd

5

yyyy/mm/dd

6

yyyy-mm-dd

7

ggyy.mm.dd, Japanese date

8

ggyy/mm/dd, Japanese date

9

ggyy-mm-dd, Japanese date

A

yyyy/mm/dd, Islamic date 1

B

yyyy/mm/dd, Islamic date 2

C

yyyy/mm/dd, Iranian date

-   In the Japanese formats for the values 7, 8, and 9, the first two characters gg of a four-digit year are formatted as a Japanese Unicode character for the current Japanese Emperor. The last two characters yy signify the year of his reign.
-   In the Islamic formats for the values A and B, the date is formatted according to the Islamic moon calendar, which calculates time since 16th July 622, which is the date on which Mohammed left Mecca (Hijra). Since this calculation can be different in different Islamic countries, two formats are offered, each of which can be set individually. The corresponding settings are in the database table TISLCAL, and can be changed using the program I18N\_MAINTAIN\_TISLCAL.
-   The Iranian format for value C is based on an Islamic sun calendar, which calculates the time in sun years since the Hijra.

The setting for the date format also affects the formatting of time stamps in [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry").

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

-   [String Templates, Date Formats](javascript:call_link\('abenstring_template_date_abexa.htm'\))
-   [String Templates, Time Stamp Templates](javascript:call_link\('abenstring_template_utc_abexa.htm'\))



**📖 Source**: [abendate_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_formats.htm)

### abentime_formats.htm

> **📖 Official SAP Documentation**: [abentime_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Time%20Formats%2C%20ABENTIME_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

The setting for the time format also affects the formatting of time stamps in [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry").

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

-   [String Templates, Time Formats](javascript:call_link\('abenstring_template_time_abexa.htm'\))
-   [String Templates, Time Stamp Templates](javascript:call_link\('abenstring_template_utc_abexa.htm'\))



**📖 Source**: [abentime_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_formats.htm)

### abencountry_formats.htm

> **📖 Official SAP Documentation**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Country-Specific%20Formats%2C%20ABENCOUNTRY_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](javascript:call_link\('abennumber_formats.htm'\))
-   [Date Formats](javascript:call_link\('abendate_formats.htm'\))
-   [Time Formats](javascript:call_link\('abentime_formats.htm'\))

For a time stamp, the date format and time format affect the respective parts and the decimal separator follows the number format.

The settings for a specific country can either be

-   set for an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) or
-   used in [string templates](javascript:call_link\('abenstring_templates.htm'\)) using the formatting option [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting of an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)).

Hints

-   The country names that match the country codes in table T005X can be found in table T005T.
-   The Defaults of the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") for each user are stored in DDIC database table USR01. The country-specific formatting settings for numbers, dates, and times are stored in columns DCPFM, DATFM, and TIMEFM. These columns refer to the same [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") as those of table T005X.

Continue
[Number Formats](javascript:call_link\('abennumber_formats.htm'\))
[Date Formats](javascript:call_link\('abendate_formats.htm'\))
[Time Formats](javascript:call_link\('abentime_formats.htm'\))



**📖 Source**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm)

### abapset_country.htm

> **📖 Official SAP Documentation**: [abapset_country.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_country.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapset_country.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_country.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20COUNTRY%2C%20ABAPSET_COUNTRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET COUNTRY

[Short Reference](javascript:call_link\('abapset_country_shortref.htm'\))

Syntax

SET COUNTRY cntry.

Effect

This statement sets the [formatting settings](javascript:call_link\('abencountry.htm'\)) of the language environment for all subsequent statements of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

cntry expects a character-like data object that either contains a value from the column LAND of the database table T005X or is initial.

-   If cntry contains a value from the table T005X, the number format, date format, time format, and time stamp format are set to a [country-specific format](javascript:call_link\('abencountry_formats.htm'\)) in accordance with the entries in columns XDEZP, DATFM, and TIMEFM.
-   If cntry is initial, or, more specifically, it contains a blank in the first position, the formatting is set in accordance with the Defaults in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry").

If the content of cntry cannot be found in the database table T005X nor contains a blank in the first position, sy-subrc is set to 4 and the following settings are made:

-   The decimal separator is a decimal point and the thousands separator is a comma.
-   Date in the form mm/dd/yyyy
-   Time in 24-hour format
-   Time stamp according to the settings for date, time, and decimal separator

System Fields

sy-subrc

Meaning

0

The specified country key was found in the database table T005X or a space was specified.

4

The specified country key was not found in database table T005X.

Hints

-   As long as the statement SET COUNTRY is not executed in an internal session, the formatting is set according to the Defaults in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry").
-   If certain formatting settings are only required for one or a few formattings, the formatting option [country](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)) instead of SET COUNTRY.
-   The statement SET COUNTRY must not be confused with the obsolete addition [COUNTRY](javascript:call_link\('abapset_locale_obsolete.htm'\)) of the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)), used for setting the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). In particular, there is no corresponding GET COUNTRY statement.

Example

Setting of the formatting settings of the language environment and their effect on the addition [ENVIRONMENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)).

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @FINAL(country).
SET COUNTRY country.
cl\_demo\_output=>display(
  |{  sy-datlo           DATE      = ENVIRONMENT }\\n{
      sy-timlo           TIME      = ENVIRONMENT }\\n{
      utclong\_current( ) TIMESTAMP = ENVIRONMENT }| ).

Executable Examples

-   [String Templates, Formatting Settings](javascript:call_link\('abenstring_template_user_abexa.htm'\))
-   [WRITE, Truncation Behavior](javascript:call_link\('abenwrite_truncation_abexa.htm'\))
