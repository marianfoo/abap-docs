---
title: "Formatting Settings"
description: |
  Formats The formatting settings of the language environment(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) determine -   the number format (decimal and thousands separators) -   The date format (separators and order) -   The time format (24 hour or 12 hour format) -
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm"
abapFile: "abencountry.htm"
keywords: ["insert", "do", "if", "try", "method", "class", "data", "types", "abencountry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Formatting Settings, ABENCOUNTRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

Formatting Settings

Formats   

The formatting settings of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) determine

-   the number format (decimal and thousands separators)
-   The date format (separators and order)
-   The time format (24 hour or 12 hour format)
-   The time stamp format (composed of date format and time format)

for formatted output.

Definition   

The formatting settings are set as follows:

-   At the start of an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), they are determined by the corresponding Defaults in the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry") of the current user.
-   Using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm), this default setting for the current internal session can be overwritten using [country-specific formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm).

Effect   

The formatting settings affect the following ABAP language elements:

-   Assignments with the statement [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm)
-   Output in lists with the statement [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm)
-   Specifies the parameter [ENVIRONMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm) for the formatting options [NUMBER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm), [DATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm), [TIME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm), and [TIMESTAMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm).

The formatting settings defined in the user master record also affect the formatting of numbers, dates, times, and time stamps specified on the screens of dynpros.

Handling Invalid Values   

The content of data object of the types d or t is normally formatted independently from their content. [Invalid values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm) are also interpreted as date or time specifications. For time output in the 12 hour format, the separators are inserted at the respective points for invalid values and the output of the AM/am or PM/pm abbreviation is undefined with the following exception.

Dynpros do not support any invalid values in the time fields with the 24 hour format with the exception of the value "24:00:00". This value is stored here as "240000" when passed to an ABAP field of type t. To be able to support this value in time fields in 12 hour format too, it is formatted as 24:00:00 PM/pm.

Time stamp fields of the type utclong must contain valid values to be able to be represented as dynpro fields on dynpros and only valid values can be entered. Invalid values can be produced by castings.

Hints

-   The classes CL\_ABAP\_DATFM and CL\_ABAP\_TIMEFM contain helper methods for handling date and time formats.
-   The Defaults of the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry") for each user are stored in DDIC database table USR01.

Continue
[Country-Specific Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm)
[SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm)