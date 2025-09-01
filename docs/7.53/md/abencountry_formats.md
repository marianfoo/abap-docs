  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](javascript:call_link\('abennumber_formats.htm'\))

-   [Date Formats](javascript:call_link\('abendate_formats.htm'\))

-   [Time Formats](javascript:call_link\('abentime_formats.htm'\))

The settings for a specific country can either be

-   set using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) for an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") or

-   used in [character string templates](javascript:call_link\('abenstring_templates.htm'\)) by means of formatting option [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting of an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)).

Note

The country names that correspond to the country codes in table T005X can be found in table T005T.

Continue
[Number Formats](javascript:call_link\('abennumber_formats.htm'\))
[Date Formats](javascript:call_link\('abendate_formats.htm'\))
[Time Formats](javascript:call_link\('abentime_formats.htm'\))