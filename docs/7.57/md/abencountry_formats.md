  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Country-Specific Formats, ABENCOUNTRY_FORMATS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

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