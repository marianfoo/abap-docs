  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Date/Time Processing in Release 7.40, SP02, ABENNEWS-740-DATE_TIME_PROCESSING, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Date/Time Processing in Release 7.40, SP02

Modification

Weaker Type Check for Time Zones

A character-like data object is now sufficient in all operand positions where a [time zone](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry") could previously only be specified with exactly the type TZNZONE or as a text field of the length 6. This concerns the statements [CONVERT *\[*INTO*\]* TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)) and formatting of [string templates](javascript:call_link\('abapcompute_string_format_options.htm'\)) and [WRITE](javascript:call_link\('abapwrite_to_options.htm'\)).