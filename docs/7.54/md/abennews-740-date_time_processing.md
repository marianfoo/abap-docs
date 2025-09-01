  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Date/Time Processing in Release 7.40, SP02

[1\. Weaker type check for time zones](#!ABAP_MODIFICATION_1@1@)

Modification 1

Weaker Type Check for Time Zones

A character-like data object is now sufficient in all operand positions where a [time zone](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry") could previously only be specified with exactly the type TZNZONE or as a text field of the length 6. This concerns the statements [CONVERT *\[*INTO*\]* TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)) and formatting of [string templates](javascript:call_link\('abapcompute_string_format_options.htm'\)) and [WRITE](javascript:call_link\('abapwrite_to_options.htm'\)).