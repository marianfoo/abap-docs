  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp02.htm) → 

Date/Time Processing in Release 7.40, SP02

[1\. Weaker type check for time zones](#!ABAP_MODIFICATION_1@1@)

Modification 1

Weaker Type Check for Time Zones

A character-like data object is now sufficient in all operand positions where a [time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_glosry.htm "Glossary Entry") could previously only be specified with exactly the type TZNZONE or as a text field of the length 6. This concerns the statements [CONVERT *\[*INTO*\]* TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm) and formatting of [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) and [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm).