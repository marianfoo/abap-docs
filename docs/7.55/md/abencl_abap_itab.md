  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) → 

itab - System Class CL\_ABAP\_ITAB\_UTILITIES

The class CL\_ABAP\_ITAB\_UTILITIES contains the following methods:

-   FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS can be used to update individual [secondary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") or all secondary table keys of an internal table explicitly. Otherwise the update takes place as a [delayed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendelayed_update_glosry.htm "Glossary Entry") or [lazy update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlazy_update_glosry.htm "Glossary Entry").

-   READ\_BINARY\_SEARCH\_CHECK can be used with the addition [BINARY SEARCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm) to activate checks on the required sort for test purposes. If the required sort does not exist, the runtime error ITAB\_ILLEGAL\_ORDER occurs when the check is activated.

-   HAS\_COLLECT\_HASH\_ADMIN can be used to check whether the temporary hash administration of the statement [COLLECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcollect.htm) exists for a standard table.

-   INDEX\_HEALTH\_CHECK can be used to check the consistency of [primary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") and [secondary table indexes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   VIRTUAL\_SORT can be used to perform virtual sorts to a set of internal tables with the same number of lines. The internal tables are handled internally like a single combined table containing all the columns of the involved internal tables. The result is an array of line numbers of the virtually sorted combined table. See the corresponding [executable examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvirtual_sort_abexas.htm).

Continue
[itab - Examples of Virtual Sorts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvirtual_sort_abexas.htm)