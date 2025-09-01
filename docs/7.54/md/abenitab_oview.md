---
title: "Internal Tables - Overview"
description: |
  Internal tables provide a means of taking variable data from a fixed structure and storing it in working memory in ABAP. An internal table is a data object that contain any rows with any data type whose total is not defined statically. The data type of an internal table is a table type. As well as t
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_oview.htm"
abapFile: "abenitab_oview.htm"
keywords: ["select", "do", "try", "data", "internal-table", "abenitab", "oview"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) → 

Internal Tables - Overview

Internal tables provide a means of taking variable data from a fixed structure and storing it in working memory in ABAP. An internal table is a data object that contain any rows with any data type whose total is not defined statically. The data type of an internal table is a table type. As well as the row type, the table type also defines the [table category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_category_glosry.htm "Glossary Entry") and the [table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry").

Internal tables offer dynamic arrays and removes the task of program-driven dynamic memory management from the programmer (see [Memory Consumption of Deep Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption.htm)). A particularly important use for internal tables is for storing and formatting data from a database table within a program. In conjunction with [structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_objects_structure.htm), they are also the best way of defining complicated data structures in an ABAP program.

-   [Internal Tables - Data Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_data_type.htm)

-   [Internal Tables - Table Category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_kind.htm)

-   [Internal Tables - Table Key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key.htm)

-   [Internal Tables - Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_access.htm)

-   [Row-Based Administration Costs of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_memory.htm)

Notes

-   For information about the maximum size of an internal table, see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption_2.htm).

-   For information about obsolete headers of internal tables, see [Internal Tables with Header](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_header_line.htm).

Continue
[Data Type of an Internal Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_data_type.htm)
[Selection of Table Category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_kind.htm)
[Table Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key.htm)
[Access to Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_access.htm)
[Row-Based Administration Costs of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_memory.htm)