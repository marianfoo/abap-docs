  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Performance%20Notes%2C%20ABENITAB_PERFO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Performance Notes

-   [Table Sharing](#@@ITOC@@ABENITAB_PERFO_1)
-   [Initial Memory Requirement](#@@ITOC@@ABENITAB_PERFO_2)
-   [Index Administration](#@@ITOC@@ABENITAB_PERFO_3)
-   [Block Processing of Table Lines](#@@ITOC@@ABENITAB_PERFO_4)
-   [Selective Data Transport](#@@ITOC@@ABENITAB_PERFO_5)
-   [Using Secondary Keys](#@@ITOC@@ABENITAB_PERFO_6)
-   [Deleting Table Lines](#@@ITOC@@ABENITAB_PERFO_7)
-   [Free Key Specified for Sorted Tables and Hashed Tables](#@@ITOC@@ABENITAB_PERFO_8)
-   [Sorting](#@@ITOC@@ABENITAB_PERFO_9)

Table Sharing   

When assignments are made between internal tables of the same type whose line type does not contain any table types, only the internal administration functions are passed to the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") for performance reasons. [Table sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_sharing_glosry.htm "Glossary Entry") is revoked only when write access to one of the tables involved is initiated. The actual copy process then takes place.

Initial Memory Requirement   

Internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") whose area in the memory is extended block by block. The size of the first block in the memory is called [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") and can be affected in the declaration of an internal table using the additions [INITIAL SIZE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm) and the obsolete [OCCURS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_occurs.htm).

It is usually up to the system to determine the size of the first block. INITIAL SIZE is not used or specified with the value 0. In this case, a suitable block size is chosen the first time lines are added to an internal table.

Specifying a concrete value greater than 0 after INITIAL SIZE is only practical if it is known in advance how many entries are to be made in the table, and the first block is therefore to be created with the most suitable dimensions. This can be particularly important for internal tables that are components of other internal tables, and which only contain a few lines (no more than around 5).

To avoid excessive memory demands, the system ignores values that produce memory demands greater than the constant block size.

Index Administration   

In an [index table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_table_glosry.htm "Glossary Entry"), the logical order of the table entries is not generally consistent with the physical order of the entries in the main memory. In this case, the logical order is no longer administrated by a physical index, but by a logical index. The same basically applies to the [secondary table indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") used to manage [secondary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") [sorted keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry").

Use of the logical index produces additional memory requirements, and index maintenance places a high demand on resources (time and memory) when inserting or deleting table lines. The resource requirements increase proportionally with the number of remaining lines after the insertion or deletion position. For very large internal tables, this can result in considerable demands on performance at runtime.

The logical index is only created when it is needed, that is, when a line is inserted in front of another line, if the order of the table lines is changed, or a line other than the last line is deleted. A logical index is not required if an internal table is filled using only [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm), and if only its last line or lines is/are deleted using [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm).

Hint

In contrast to filling a table with [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab.htm), appending lines with [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm) does not require any resources for index maintenance. It is therefore preferable to use APPEND instead of INSERT to create a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry"). This is possible if the order of the entries is not important, or if entries can be appended in the correct order.

Block Processing of Table Lines   

If entire line areas of a table can be processed at once, this should not be done line-by-line, but using block operations. Block operations are possible using the FROM and TO additions of the statements [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab.htm), [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm) and [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm). Block operations are also more efficient than single record operations when reading from or modifying database tables with [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements with the additions FROM*|*APPENDING*|*TO TABLE.

Selective Data Transport   

If, when reading table lines using [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) or [LOOP AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm), a work area is used or table lines can be changed using [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) instead of direct access, the TRANSPORTING addition can be used to prevent unnecessary assignments of table components to the work area. This can lead to a noticeable improvement in performance, particularly if table-like components are excluded from processing.

Using Secondary Keys   

The [use of secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_secondary_usage.htm) should be planned and executed carefully and sparingly. The time gained when accessing individual lines should not be lost again by the increased memory and time requirements for managing the secondary keys. Secondary keys are generally recommended for internal tables that are filled once and rarely changed during program execution.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.

Deleting Table Lines   

When lines are deleted from an internal table, administration costs are incurred for all table keys and table indexes. The primary key and all unique secondary keys are updated directly, but non-unique secondary keys are updated only if the line to be deleted is included in the updated part of an associated index ([lazy update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

It should be noted that, particularly for standard tables, the mean runtime of the statement [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) always depends linearly on the number of table lines, even when secondary keys are specified using [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_key.htm) or [USING KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_key.htm). This is because a linear search is required to update the primary index, even though the line to be deleted can itself be found quickly.

Deleting lines in internal tables using [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) does not usually release any memory in the internal table. Statements such as [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_dataobject.htm) must be used to release memory in internal tables.

Free Key Specified for Sorted Tables and Hashed Tables   

When using the [READ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) statement with a specified free key of the form [WITH KEY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm), the search is optimized in all cases where this is possible, that is:

-   In [sorted tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry"), if any initial section of the [table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_key_glosry.htm "Glossary Entry") or the complete table key is covered by the specified key.
-   In [hashed tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry"), if the complete table key is covered.

If part of a free key meets these conditions, this partial key is first used to search for an entry. In sorted tables, this is done using a binary search with a logarithmic consumption of resources, and in hashed tables using a hash algorithm, that is, with constant resource consumption. If an entry is found, the system checks whether the rest of the key conditions are also met. This means that over-specific keys in particular are optimized.

Hint

See also [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm).

Sorting   

For textual sorting of an internal table in accordance with the current [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry"), it can be more efficient to use the statement [CONVERT TEXT INTO SORTABLE CODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm) instead of [SORT AS TEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) in the following cases:

-   If an internal table is sorted by locale and then searched binarily using the statement READ TABLE or using a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm).
-   An internal table must be sorted more than once.
-   Indexes for database tables should be structured in accordance with a locale.

Continue
[itab - Optimizing the WHERE Condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm)