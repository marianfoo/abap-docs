  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

Runtime Analysis in Release 4.6C

In Release 4.6C, the runtime analysis transaction was enhanced to include the following functions:

[1\. Bar Color on the Evaluation Overview Screen](#!ABAP_MODIFICATION_1@1@)
[2\. Object-Centered Hit Lists](#!ABAP_MODIFICATION_2@2@)
[3\. Measurement Restrictions](#!ABAP_MODIFICATION_3@3@)
[4\. Sets of Statistics](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Bar Color on the Evaluation Overview Screen
When ABAP statements or system statements are analyzed, the system shows a green bar to indicate that 50 percent of the total execution time was required for the execution of the relevant statements. A red bar indicates that more than 50 percent of the total execution time was used. When database operations are analyzed, a red bar indicates that 25 percent of the total execution time has been used.

Modification 2   

Object-Centered Hit Lists
For ABAP programs that work with classes and instances, the appropriate hit lists are now created. It is also possible filter the display of methods and events belonging to this class or instance.

Modification 3   

Measurement Restrictions
From now on, the system uses the variant of a measurement restriction that was created or edited most recently. The default variant is set to None in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). In all other systems, it is set to Full.

Modification 4   

Sets of Statistics

Sets of statistics are no longer produced when performance data is aggregated.