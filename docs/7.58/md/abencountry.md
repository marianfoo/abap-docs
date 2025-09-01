  

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