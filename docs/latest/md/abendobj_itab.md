---
title: "Internal Tables"
description: |
  Internal tables provide a means of taking variable data from a fixed structure and storing it in working memory in ABAP. An internal table is a data object that contains any lines with any data type whose total is not defined statically. The data type of an internal table is a table type. As well as
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendobj_itab.htm"
abapFile: "abendobj_itab.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abendobj", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%2C%20ABENDOBJ_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Tables

Internal tables provide a means of taking variable data from a fixed structure and storing it in working memory in ABAP. An internal table is a data object that contains any lines with any data type whose total is not defined statically. The data type of an internal table is a table type. As well as the line type, the table type also defines the [table category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_category_glosry.htm "Glossary Entry") and the [table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_key_glosry.htm "Glossary Entry").

Internal tables offer dynamic arrays and remove the task of program-driven dynamic memory management from the programmer (see [Memory Consumption of Deep Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm)). A particularly important application for internal tables is for storing and formatting data from a database table within a program. In conjunction with [structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects_structure.htm), they are also the best way of defining complicated data structures in an ABAP program.

-   [itab - Table Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_data_type.htm)
-   [itab - Selection of the Table Category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_cat.htm)
-   [itab - Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm)
-   [itab - Accessing Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_access.htm)
-   [itab - Initial Memory Requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_initial_mem_req.htm)
-   [itab - Line-Based Administration Costs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_memory.htm)

Hints

-   For information about the maximum size of an internal table, see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm).
-   For information about obsolete headers of internal tables, see [Internal Tables with Header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_header_line.htm).

Continue
[itab - Table Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_data_type.htm)
[itab - Selection of the Table Category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_cat.htm)
[itab - Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm)
[itab - Accessing Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_access.htm)
[itab - Initial Memory Requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_initial_mem_req.htm)
[itab - Line-Based Administration Costs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_memory.htm)