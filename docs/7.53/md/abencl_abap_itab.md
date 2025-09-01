  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) → 

System Class for Internal Tables

The class CL\_ABAP\_ITAB\_UTILITIES contains the following methods:

-   FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS can be used to update individual [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") or all secondary table keys of an internal table explicitly. Otherwise the update takes place as a [delayed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendelayed_update_glosry.htm "Glossary Entry") or [lazy update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlazy_update_glosry.htm "Glossary Entry").

-   READ\_BINARY\_SEARCH\_CHECK can be used with the addition [BINARY SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_free.htm) to activate checks on the required sort for test purposes. If the required sort does not exist, the runtime error ITAB\_ILLEGAL\_ORDER is raised when the check is activated.

-   HAS\_COLLECT\_HASH\_ADMIN can be used to check whether the temporary hash management of the statement [COLLECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm) exists for a standard table.

-   INDEX\_HEALTH\_CHECK can be used to check the consistency of [primary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") and [secondary table indexes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   VIRTUAL\_SORT can be used to apply virtual sorts to a set of internal tables with the same number of rows. The internal tables are treated internally like a single combined table containing all the columns of the involved internal tables. The result is an array of row numbers of the virtually sorted combined table. See the related [executable examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvirtual_sort_abexas.htm).

Continue
[Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvirtual_sort_abexas.htm)