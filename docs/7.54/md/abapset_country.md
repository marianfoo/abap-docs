---
title: "SET COUNTRY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_country_shortref.htm) Syntax SET COUNTRY cntry. Effect This statement sets the formatting settings(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry.htm) of the language environment for all fo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_country.htm"
abapFile: "abapset_country.htm"
keywords: ["select", "do", "if", "try", "data", "abapset", "country"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry.htm) → 

SET COUNTRY

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_country_shortref.htm)

Syntax

SET COUNTRY cntry.

Effect

This statement sets the [formatting settings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry.htm) of the language environment for all following statements of the current [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry").

cntry expects a character-like data object that either contains a value from the column LAND of the database table T005X or is initial.

-   If cntry contains a value from the table T005X, the number format, date format, time format, and time stamp format are set to a [country-specific format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry_formats.htm) in accordance with the entries in columns XDEZP, DATFM, and TIMEFM.
    
-   If cntry is initial (contains a blank in the first place), the formatting is set in accordance with the fixed values in the [user master record](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_master_record_glosry.htm "Glossary Entry").
    

If the content of cntry cannot be found in the table T005X and does not have a blank in the first place, sy-subrc is set to 4 and the following settings are made:

-   The decimal separator is a decimal point and the thousands separator is a comma.
    
-   Date in the form "mm/dd/yyyy"
    
-   Time in 24-hour format
    
-   Time stamp according to the settings for date, time, and decimal separator
    

System Fields

sy-subrc

Meaning

0

The specified country key was found in the database table T005X or a space was specified.

4

The specified country key was not found in database table T005X.

Notes

-   As long as the statement SET COUNTRY is not executed in an internal session, the formatting corresponds to the fixed values in the [user master record](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_master_record_glosry.htm "Glossary Entry").
    
-   If certain formatting settings are only required for one or a few formattings, the formatting option [country](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string_format_options.htm) can be used for [embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) instead of SET COUNTRY.
    
-   Do not confuse the statement SET COUNTRY with the obsolete addition [COUNTRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale_obsolete.htm) of the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale.htm), used for setting the [text environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_environment_glosry.htm "Glossary Entry"). In particular, it does not have a corresponding GET COUNTRY statement.
    

Example

Sets the formatting settings of the language environment and the way they modify the addition [ENVIRONMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string_format_options.htm) in [embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm).

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @DATA(country).
SET COUNTRY country.
cl\_demo\_output=>display(
  |{  sy-datlo           DATE      = ENVIRONMENT }\\n{
      sy-timlo           TIME      = ENVIRONMENT }\\n{
      utclong\_current( ) TIMESTAMP = ENVIRONMENT }| ).

Executable Examples

-   [String Templates, Formatting Settings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_user_abexa.htm)

-   [WRITE, Cutoff Behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwrite_cutoff_abexa.htm)