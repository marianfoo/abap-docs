  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.6C](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-46c.htm) → 

Runtime Analysis in Release 4.6C

In Release 4.6C, the runtime analysis transaction was enhanced to include the following functions:

[1\. Bar color on the evaluation overview screen](#!ABAP_MODIFICATION_1@1@)

[2\. Object-centered hit-lists](#!ABAP_MODIFICATION_2@2@)

[3\. Measurement restrictions](#!ABAP_MODIFICATION_3@3@)

[4\. Sets of statistics](#!ABAP_MODIFICATION_4@4@)

Modification 1

Bar Color on the Evaluation Overview Screen
When ABAP statements or system statements are analyzed, the system shows
a green bar to indicate that 50 percent of the total execution time was required for the execution of the relevant statements. A red bar indicates that more than 50 percent of the total execution time was used. When database operations are analyzed, a red bar indicates that 25 percent of the total execution time has been used.

Modification 2

Object-Centered Hit Lists
For ABAP programs that work with classes and instances, the appropriate
hit lists are now created. It is also possible filter the display of methods and events belonging to this class or instance.

Modification 3

Measurement Restrictions
From now on, the system uses the variant of a measurement restriction
that was created or edited most recently. The default variant is set to None in [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). In all other systems, it is set to Full.

Modification 4

Sets of Statistics

Sets of statistics are no longer produced when performance data is
aggregated.