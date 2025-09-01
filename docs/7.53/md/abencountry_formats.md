  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumber_formats.htm)

-   [Date Formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_formats.htm)

-   [Time Formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_formats.htm)

The settings for a specific country can either be

-   set using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_country.htm) for an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") or

-   used in [character string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) by means of formatting option [COUNTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) for the formatting of an [embedded expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm).

Note

The country names that correspond to the country codes in table T005X can be found in table T005T.

Continue
[Number Formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumber_formats.htm)
[Date Formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_formats.htm)
[Time Formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_formats.htm)