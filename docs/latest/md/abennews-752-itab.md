  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.52](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Tables in ABAP Release 7.52

Modification

Virtual Sorting of Internal Tables

The new method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES enables virtual sorting of a set of internal tables with the same number of rows. The internal tables are handled internally like a single combined table containing all the columns of the involved internal tables. The result is an array of row numbers of the virtually sorted combined table. See the related [executable examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvirtual_sort_abexas.htm).