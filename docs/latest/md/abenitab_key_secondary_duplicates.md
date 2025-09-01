---
title: "Single Record Operations"
description: |
  When individual lines are inserted where the insert position is determined using a table key, that is, in the case of -   the operations INSERT ... INTO TABLE ...(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_position.htm) or -   in lazy updates(https://help.sap
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_secondary_duplicates.htm"
abapFile: "abenitab_key_secondary_duplicates.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "data", "types", "internal-table", "abenitab", "key", "secondary", "duplicates"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendobj_itab.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Duplicate%20Non-Unique%20Keys%2C%20ABENITAB_KEY_SECONDARY_DUPLICATES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

itab - Duplicate Non-Unique Keys

Non-unique table keys can produce duplicate lines with respect to these keys. This section describes the order of these duplicates when inserting into tables with non-unique sorted table keys. This order is ignored with respect to non-unique primary keys in standard tables.

-   [Single Record Operations](#abenitab-key-secondary-duplicates-1-------block-operations---@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_2)
-   [Special Features](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_3)

Single Record Operations   

When individual lines are inserted where the insert position is determined using a table key, that is, in the case of

-   the operations [INSERT ... INTO TABLE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_position.htm) or
-   in [lazy updates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlazy_update_glosry.htm "Glossary Entry") of sorted secondary keys

the order of the duplicates with respect to the table key of the target table is determined in accordance with the insertion order of the individual lines. The duplicate line that was last inserted into the table is sorted before all other duplicates.

Block Operations   

For block operations such as an [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove.htm) of an internal table to another table or when inserting multiple lines using [INSERT LINES OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_linespec.htm), the order of duplicates with respect to a sorted key of the target table in the block is taken from the source table. If there are already one or more duplicates in the target table, the source block duplicates are inserted in their original order in front of the first duplicate in the target table.

Special Features   

Some operations have the characteristics of block operations but are executed internally as sequences of single record operations. In this case, the original order of duplicates with respect to a sorted key in the target table is not retained. This is the case for the following operations:

-   Filling an internal table using [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) from a table previously stored using [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) and all operations that are based internally on such an import, such as [posting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_update.htm) operations.
-   Passing and inheriting internal tables for [Remote Function Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination_para.htm).
-   The deserialization of an internal table from a table previously serialized to XML using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm).

Example

The result of the following insertion is

a a
b z
b y
b x
b b

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE SORTED TABLE OF line
            WITH NON-UNIQUE KEY col1.
DATA(itab) = VALUE itab(
( col1 = 'b' col2 = 'b' )
( col1 = 'a' col2 = 'a' ) ).
FINAL(jtab) = VALUE itab(
( col1 = 'b' col2 = 'x' )
( col1 = 'b' col2 = 'y' )
( col1 = 'b' col2 = 'z' ) ).
INSERT LINES OF jtab INTO TABLE itab.
cl\_demo\_output=>display( itab ).