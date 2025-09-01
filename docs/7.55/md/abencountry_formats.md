  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumber_formats.htm)

-   [Date Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_formats.htm)

-   [Time Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_formats.htm)

For a time stamp, the date format and time format affect the respective parts and the decimal separator follows the number format.

The settings for a specific country can either be

-   set for an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_country.htm) or

-   used in [string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm) by means of formatting option [COUNTRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string_format_options.htm) for the formatting of an [embedded expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates_expressions.htm).

Hints

-   The country names that correspond to the country codes in table T005X can be found in table T005T.

-   The Defaults of the [user master record](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_master_record_glosry.htm "Glossary Entry") for each user are stored in DDIC database table USR01. The country country-specific formatting settings for numbers, dates, and times are stored in columns DCPFM, DATFM, and TIMEFM. These columns refer to the same [DDIC domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendomain_glosry.htm "Glossary Entry") as those of table T005X.

Continue
[Number Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumber_formats.htm)
[Date Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_formats.htm)
[Time Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_formats.htm)