---
title: "Table Sharing"
description: |
  When assignments are made between internal tables of the same type whose row type does not contain any table types (for performance reasons), only the internal administration functions are passed to the table body(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_body_glosry.htm
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_perfo.htm"
abapFile: "abenitab_perfo.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "data", "types", "internal-table", "abenitab", "perfo"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) → 

Internal Tables: Performance Notes

-   [Table Sharing](#abenitab-perfo-1--------initial-allocated-memory-area---@ITOC@@ABENITAB_PERFO_2)

-   [Index Administration](#abenitab-perfo-3--------block-processing-of-table-rows---@ITOC@@ABENITAB_PERFO_4)

-   [Selective Data Transport](#abenitab-perfo-5--------using-secondary-keys---@ITOC@@ABENITAB_PERFO_6)

-   [Deleting Table Rows](#abenitab-perfo-7--------free-key-specified-for-sorted-tables-and-hashed-tables---@ITOC@@ABENITAB_PERFO_8)

-   [Sorting](#@@ITOC@@ABENITAB_PERFO_9)

Table Sharing

When assignments are made between internal tables of the same type whose row type does not contain any table types (for performance reasons), only the internal administration functions are passed to the [table body](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_body_glosry.htm "Glossary Entry"). [Table sharing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_sharing_glosry.htm "Glossary Entry") is revoked only when change access to one of the tables involved is initiated. At this point, the actual copy process takes place.

Initial Allocated Memory Area

Internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") whose area in the memory is increased block by block. The size of the first block in the memory can be controlled in the declaration of an internal table using the additions [INITIAL SIZE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_itab.htm) and the obsolete [OCCURS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_occurs.htm). If the first block is no longer enough, further blocks are created using an internal duplication strategy until a maximum size is reached. All additional blocks are then created with a constant size of between 8 and 16 KB.

In general, the system can be left to determine the size of the first block (by not specifying INITIAL SIZE, or by entering the value 0). In this case, when the first rows are entered in an internal table, a suitable block size is chosen.

Entering a concrete value greater than 0 after INITIAL SIZE is only practical if it is known in advance how many entries are to be made in the table, and the first block is therefore to be created with the most suitable dimensions. This can be particularly important for internal tables that are components of other internal tables, and which only contain a few rows (no more than around 5).

To avoid excessive memory demands, the system ignores values that produce memory demands greater than the constant block size.

Index Administration

In an [index table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenindex_table_glosry.htm "Glossary Entry"), the logical order of the table entries is not generally consistent with the physical order of the entries in the main memory. In this case, the logical order is no longer administrated by a physical index, but by a logical index instead. The same is basically true for the [secondary table indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") used to manage [secondary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") [sorted keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry").

Use of the logical index produces additional memory requirements, and index maintenance places a high demand on resources (time and memory) when inserting or deleting table rows. The resource requirements rise in proportion to the number of remaining rows after the insertion or deletion position. For very large internal tables, this can result in considerable demands on performance at runtime.

The logical index is not created until the moment at which it is required, in other words, when a row is inserted before another row, if the order of the table rows is changed, or a row other than the last row is deleted. A logical index is not required if an internal table is filled using only [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm), and if only its last row(s) is/are deleted using [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm).

Note

In contrast to filling a table with [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm), appending rows with [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm) does not require any resources for index maintenance. It is therefore preferable to use APPEND instead of INSERT to create a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry"). This is possible if the order of the entries is not important, or if entries can be appended in the correct order.

Block Processing of Table Rows

If whole row areas of a table can be processed at once, this should not be done in rows, but using block operations instead. Block operations are possible using the FROM and TO additions of the statements [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm), [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm) and [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm). Block operations are also more efficient than single record operations when reading from or modifying database tables with [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements with the additions FROM*|*APPENDING*|*TO TABLE.

Selective Data Transport

If, when reading table rows using [READ TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) or [LOOP AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), a work area is used or table rows can be changed using [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) instead of by direct access, the TRANSPORTING addition can be used to prevent unnecessary assignments of table components to the work area. This can lead to a noticeable acceleration in performance, particularly if table-like components are excluded from processing.

Using Secondary Keys

The [use of secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_usage.htm) should be planned and executed with care. The time gained when accessing individual rows should not be lost again by the increased storage and time requirements for managing the secondary keys. Secondary keys are generally recommended for internal tables that are filled once and rarely changed during program execution.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.

Deleting Table Rows

When rows are deleted from an internal table, overhead is produced for all table keys and table indexes. The primary key and all unique secondary keys are updated directly, but non-unique secondary keys are updated only if the row being deleted is included in the updated part of an associated index ([lazy update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

Also note that, for standard tables, the mean runtime of the statement [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm) always has a linear dependency on the number of table rows, even when secondary keys are specified using [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_key.htm) or [USING KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_key.htm). This is because a linear search is required to update the primary index, even though the row being deleted can itself be found quickly.

Deleting rows in internal tables using [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm) does not usually free any memory in the internal table. Statements such as [CLEAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_dataobject.htm) must be used to free memory in internal tables.

Free Key Specified for Sorted Tables and Hashed Tables

When using the [READ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) statement with a specified free key of the form [WITH KEY ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_free.htm), the search is optimized in all cases where this is possible:

-   In [sorted tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry"), if any initial section of the [table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry") or the complete table key is covered by the specified key.

-   In [hashed tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry"), if the complete table key is covered.

If part of a free key meets these conditions, this partial key is first used to search for an entry. In sorted tables, this is performed using a binary search with a logarithmic consumption of resources, and in hashed tables by using a hash algorithm (that is, with constant resource consumption). If an entry is found, the system checks whether the rest of the key conditions are also met. This means that over-specific keys in particular are optimized.

Note

See also [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_where_optimization.htm).

Sorting

For textual sorting of an internal table in accordance with the current [text environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_environment_glosry.htm "Glossary Entry"), it is more beneficial for performance to use the statement [CONVERT TEXT INTO SORTABLE CODE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_text.htm) instead of [SORT AS TEXT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) in the following cases:

-   If an internal table is sorted by locale and then subjected to a binary search using the statement READ TABLE or using a [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm).

-   An internal table must be sorted more than once.

-   Indexes for database tables should be structured in accordance with a locale.

This translation does not reflect the current version of the documentation.
Continue
[Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_where_optimization.htm)