  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Country-Specific%20Formats%2C%20ABENCOUNTRY_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumber_formats.htm)
-   [Date Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_formats.htm)
-   [Time Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_formats.htm)

For a time stamp, the date format and time format affect the respective parts and the decimal separator follows the number format.

The settings for a specific country can either be

-   set for an [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_country.htm) or
-   used in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) using the formatting option [COUNTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm) for the formatting of an [embedded expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm).

Hints

-   The country names that match the country codes in table T005X can be found in table T005T.
-   The Defaults of the [user master record](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_master_record_glosry.htm "Glossary Entry") for each user are stored in DDIC database table USR01. The country-specific formatting settings for numbers, dates, and times are stored in columns DCPFM, DATFM, and TIMEFM. These columns refer to the same [DDIC domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm "Glossary Entry") as those of table T005X.

Continue
[Number Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumber_formats.htm)
[Date Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_formats.htm)
[Time Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_formats.htm)