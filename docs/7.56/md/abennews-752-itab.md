  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Internal Tables in Release 7.52

Modification

Virtual Sorting of Internal Tables

The new method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES enables virtual sorting of a set of internal tables with the same number of rows. The internal tables are treated internally like a single combined table containing all the columns of the involved internal tables. The result is an array of row numbers of the virtually sorted combined table. See the related [executable examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvirtual_sort_abexas.htm).