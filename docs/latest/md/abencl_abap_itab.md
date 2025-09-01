---
title: "Continue"
description: |
  itab - Examples of Virtual Sorts(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvirtual_sort_abexas.htm)
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_itab.htm"
abapFile: "abencl_abap_itab.htm"
keywords: ["update", "do", "if", "try", "method", "class", "data", "internal-table", "abencl", "abap", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - System Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20System%20Class%20CL_ABAP_ITAB_UTILITIES%2C%20ABENCL_ABAP_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - System Class CL\_ABAP\_ITAB\_UTILITIES

The class CL\_ABAP\_ITAB\_UTILITIES contains the following methods:

-   FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS can be used to update individual [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") or all secondary table keys of an internal table explicitly. Otherwise the update takes place as a [delayed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendelayed_update_glosry.htm "Glossary Entry") or [lazy update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlazy_update_glosry.htm "Glossary Entry").
-   READ\_BINARY\_SEARCH\_CHECK can be used with the addition [BINARY SEARCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm) to activate checks on the required sort for test purposes. If the required sort does not exist, the runtime error ITAB\_ILLEGAL\_ORDER occurs when the check is activated.
-   HAS\_COLLECT\_HASH\_ADMIN can be used to check whether the temporary hash administration of the statement [COLLECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcollect.htm) exists for a standard table.
-   INDEX\_HEALTH\_CHECK can be used to check the consistency of [primary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") and [secondary table indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").
-   VIRTUAL\_SORT can be used to perform virtual sorts on a set of internal tables with the same number of lines. The internal tables are handled internally like a single combined table containing all the columns of the involved internal tables. The result is an array of line numbers of the virtually sorted combined table. See the corresponding [executable examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvirtual_sort_abexas.htm).

Continue
[itab - Examples of Virtual Sorts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvirtual_sort_abexas.htm)