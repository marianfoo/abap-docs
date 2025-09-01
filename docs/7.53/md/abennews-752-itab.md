  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

Internal Tables in Release 7.52

[1\. Virtual sorting of internal tables](#!ABAP_MODIFICATION_1@1@)

Modification 1

Virtual Sorting of Internal Tables

The new method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES enables virtual sorting of a set of internal tables with the same number of rows. The internal tables are treated internally like a single combined table containing all the columns of the involved internal tables. The result is an array of row numbers of the virtually sorted combined table. See the related [executable examples](javascript:call_link\('abenvirtual_sort_abexas.htm'\)).