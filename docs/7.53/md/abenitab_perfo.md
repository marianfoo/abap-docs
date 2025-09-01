  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) → 

Internal Tables: Performance Notes

-   [Table sharing](#@@ITOC@@ABENITAB_PERFO_1)

-   [Initial Allocated Memory Area](#@@ITOC@@ABENITAB_PERFO_2)

-   [Index Administration](#@@ITOC@@ABENITAB_PERFO_3)

-   [Block Processing of Table Rows](#@@ITOC@@ABENITAB_PERFO_4)

-   [Selective Data Transport](#@@ITOC@@ABENITAB_PERFO_5)

-   [Using Secondary Keys](#@@ITOC@@ABENITAB_PERFO_6)

-   [Deleting Table Rows](#@@ITOC@@ABENITAB_PERFO_7)

-   [Free Key Specification for Sorted Tables and Hashed Tables](#@@ITOC@@ABENITAB_PERFO_8)

-   [Sorting](#@@ITOC@@ABENITAB_PERFO_9)

Table sharing

When assignments are made between internal tables of the same type whose row type does not contain any table types (for performance reasons), only the internal administration functions are passed to the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry"). [Table sharing](javascript:call_link\('abentable_sharing_glosry.htm'\) "Glossary Entry") is revoked only when change access to one of the tables involved is initiated. At this point, the actual copy process takes place.

Initial Allocated Memory Area

Internal tables are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") whose area in the memory is increased block by block. The size of the first block in the memory can be controlled in the declaration of an internal table using the additions [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) and the obsolete [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)). If the first block is no longer enough, further blocks are created using an internal duplication strategy until a maximum size is reached. All additional blocks are then created with a constant size of between 8 and 16 KB.

In general, the system can be left to determine the size of the first block (by not specifying INITIAL SIZE, or by entering the value 0). In this case, when the first rows are entered in an internal table, a suitable block size is chosen.

Entering a concrete value greater than 0 after INITIAL SIZE is only practical if it is known in advance how many entries are to be made in the table, and the first block is therefore to be created with the most suitable dimensions. This can be particularly important for internal tables that are components of other internal tables, and which only contain a few rows (no more than around 5).

To avoid excessive memory demands, the system ignores values that produce memory demands greater than the constant block size.

Index Administration

In an [index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry"), the logical order of the table entries is not generally consistent with the physical order of the entries in the main memory. In this case, the logical order is no longer administrated by a physical index, but by a logical index instead. The same is basically true for the [secondary table indexes](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") used to manage [secondary](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry").

Use of the logical index produces additional memory requirements, and index maintenance places a high demand on resources (time and memory) when inserting or deleting table rows. The resource requirements rise in proportion to the number of remaining rows after the insertion or deletion position. For very large internal tables, this can result in considerable demands on performance at runtime.

The logical index is not created until the moment at which it is required, in other words, when a row is inserted before another row, if the order of the table rows is changed, or a row other than the last row is deleted. A logical index is not required if an internal table is filled using only [APPEND](javascript:call_link\('abapappend.htm'\)), and if only its last row(s) is/are deleted using [DELETE](javascript:call_link\('abapdelete_itab.htm'\)).

Note

In contrast to filling a table with [INSERT](javascript:call_link\('abapinsert_itab.htm'\)), appending rows with [APPEND](javascript:call_link\('abapappend.htm'\)) does not require any resources for index maintenance. It is therefore preferable to use APPEND instead of INSERT to create a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). This is possible if the order of the entries is not important, or if entries can be appended in the correct order.

Block Processing of Table Rows

If whole row areas of a table can be processed at once, this should not be done in rows, but using block operations instead. Block operations are possible using the FROM and TO additions of the statements [INSERT](javascript:call_link\('abapinsert_itab.htm'\)), [APPEND](javascript:call_link\('abapappend.htm'\)) and [DELETE](javascript:call_link\('abapdelete_itab.htm'\)). Block operations are also more efficient than single record operations when reading from or modifying database tables with [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements with the additions FROM*|*APPENDING*|*TO TABLE.

Selective Data Transport

If, when reading table rows using [READ TABLE](javascript:call_link\('abapread_table.htm'\)) or [LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)), a work area is used or table rows can be changed using [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) instead of by direct access, the TRANSPORTING addition can be used to prevent unnecessary assignments of table components to the work area. This can lead to a noticeable acceleration in performance, particularly if table-like components are excluded from processing.

Using Secondary Keys

The [use of secondary table keys](javascript:call_link\('abenitab_key_secondary_usage.htm'\)) should be planned and executed with care. The time gained when accessing individual rows should not be lost again by the increased storage and time requirements for managing the secondary keys. Secondary keys are generally recommended for internal tables that are filled once and rarely changed during program execution.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.

Deleting Table Rows

When you delete rows from an internal table, overhead is produced for all table keys and table indexes. The primary key and all unique secondary keys are updated directly, but non-unique secondary keys are updated only if the row being deleted is included in the updated part of an associated index ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")).

Also note that, for standard tables, the mean runtime of the statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) always has a linear dependency on the number of table rows, even when secondary keys are specified using [WITH TABLE KEY](javascript:call_link\('abapdelete_itab_key.htm'\)) or [USING KEY](javascript:call_link\('abapdelete_itab_key.htm'\)). This is because a linear search is required to update the primary index, even though the row being deleted can itself be found quickly.

Deleting rows in internal tables using [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) does not usually free any memory in the internal table. Statements such as [CLEAR](javascript:call_link\('abapclear.htm'\)) or [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) must be used to free memory in internal tables.

Free Key Specification for Sorted Tables and Hashed Tables

When using the [READ](javascript:call_link\('abapread_table.htm'\)) statement with a free key specification of the form [WITH KEY ...](javascript:call_link\('abapread_table_free.htm'\)), the search is optimized in all cases where this is possible:

-   In [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), if any initial section of the [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") or the complete table key is covered by the specified key.

-   In [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), if the complete table key is covered.

If part of a free key meets these conditions, this partial key is first used to search for an entry. In sorted tables, this is performed using a binary search with a logarithmic consumption of resources, and in hashed tables by using a hash algorithm (that is, with constant resource consumption). If an entry is found, the system checks whether the rest of the key conditions are also met. This means that over-specific key specifications in particular are optimized.

Note

See also [Optimization of the WHERE Condition](javascript:call_link\('abenitab_where_optimization.htm'\)).

Sorting

For textual sorting of an internal table in accordance with the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"), it is more beneficial for performance to use the statement [CONVERT TEXT INTO SORTABLE CODE](javascript:call_link\('abapconvert_text.htm'\)) instead of [SORT AS TEXT](javascript:call_link\('abapsort_itab.htm'\)) in the following cases:

-   If an internal table is sorted by locale and then subjected to a binary search using the statement READ TABLE or using a [table expression](javascript:call_link\('abentable_expressions.htm'\)).

-   An internal table must be sorted more than once.

-   Indices for database tables are to be structured in accordance with a locale.

This translation does not reflect the current version of the documentation.
Continue
[Optimization of the WHERE Condition](javascript:call_link\('abenitab_where_optimization.htm'\))