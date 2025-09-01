  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

Runtime Analysis in Release 4.6C

In Release 4.6C, SAP has enhanced the Runtime Analysis transaction to include the following functions:

[1\. The Color of the Bar on the Evaluation Overview Screen](#!ABAP_MODIFICATION_1@1@)

[2\. Object-Centered Hit Lists](#!ABAP_MODIFICATION_2@2@)

[3\. Measurement Restrictions](#!ABAP_MODIFICATION_3@3@)

[4\. Sets of Statistics](#!ABAP_MODIFICATION_4@4@)

Modification 1

The Bar Color on the Evaluation Overview Screen
When ABAP statements or system statements are being analyzed, the
system shows a green bar to indicate that 50 percent of the total execution time was required for the execution of the relevent statements. A red bar indicates that more than 50 percent of the total execution time was used. When database operations are being analyzed, a red bar indicates that 25 percent of the total execution time has been used.

Modification 2

Object-Centered Hit Lists
For ABAP programs that work with classes and instances, the
appropriate hit lists are now generated. If you want, you can also filter the display of methods and events belonging to this class or instance.

Modification 3

Measurement Restrictions
From now on, the system uses the variant of a measurement restriction
that was created or edited most recently. The default variant is set to None in the [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). In all other systems, it is set to Full.

Modification 4

Sets of Statistics
Sets of statistics are no longer displayed when performance data is
aggregated.