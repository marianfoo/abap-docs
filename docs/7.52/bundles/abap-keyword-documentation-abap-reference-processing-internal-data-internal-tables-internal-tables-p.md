# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Internal Tables / Internal Tables - Performance Notes

Included pages: 2


### abenitab_perfo.htm

---
title: "Internal Tables - Performance Notes"
description: |
  -   Table sharing(#abenitab-perfo-1--------initial-allocated-memory-area---@ITOC@@ABENITAB_PERFO_2) -   Index Administration(#abenitab-perfo-3--------block-processing-of-table-rows---@ITOC@@ABENITAB_PERFO_4) -   Selective Data Transport(#abenitab-perfo-5--------using-secondary-keys---@ITOC@@AB
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_perfo.htm"
abapFile: "abenitab_perfo.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "data", "types", "internal-table", "abenitab", "perfo"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) → 

Internal Tables - Performance Notes

-   [Table sharing](#abenitab-perfo-1--------initial-allocated-memory-area---@ITOC@@ABENITAB_PERFO_2)

-   [Index Administration](#abenitab-perfo-3--------block-processing-of-table-rows---@ITOC@@ABENITAB_PERFO_4)

-   [Selective Data Transport](#abenitab-perfo-5--------using-secondary-keys---@ITOC@@ABENITAB_PERFO_6)

-   [Deleting Table Rows](#abenitab-perfo-7--------free-key-specification-for-sorted-tables-and-hashed-tables---@ITOC@@ABENITAB_PERFO_8)

-   [Sorting](#@@ITOC@@ABENITAB_PERFO_9)

Table sharing

When assignments are made between internal tables of the same type whose row type does not contain any table types (for performance reasons), only the internal administration functions are passed to the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry"). [Table sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_sharing_glosry.htm "Glossary Entry") is revoked only when change access to one of the tables involved is initiated. At this point, the actual copy process takes place.

Initial Allocated Memory Area

Internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") whose area in the memory is increased block by block. The size of the first block in the memory can be controlled in the declaration of an internal table using the additions [INITIAL SIZE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm) and the obsolete [OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm). If the first block is no longer enough, further blocks are created using an internal duplication strategy until a maximum size is reached. All additional blocks are then created with a constant size of between 8 and 16 KB.

In general, the system can be left to determine the size of the first block (by not specifying INITIAL SIZE, or by entering the value 0). In this case, when the first rows are entered in an internal table, a suitable block size is chosen.

Entering a concrete value greater than 0 after INITIAL SIZE is only practical if it is known in advance how many entries are to be made in the table, and the first block is therefore to be created with the most suitable dimensions. This can be particularly important for internal tables that are components of other internal tables, and which only contain a few rows (no more than around 5).

To avoid excessive memory demands, the system ignores values that produce memory demands greater than the constant block size.

Index Administration

In an [index table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenindex_table_glosry.htm "Glossary Entry"), the logical order of the table entries is not generally consistent with the physical order of the entries in the main memory. In this case, the logical order is no longer administrated by a physical index, but by a logical index instead. The same is basically true for the [secondary table indexes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") used to manage [secondary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") [sorted keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry").

Use of the logical index produces additional memory requirements, and index maintenance places a high demand on resources (time and memory) when inserting or deleting table rows. The resource requirements rise in proportion to the number of remaining rows after the insertion or deletion position. For very large internal tables, this can result in considerable demands on performance at runtime.

The logical index is not created until the moment at which it is required, in other words, when a row is inserted before another row, if the order of the table rows is changed, or a row other than the last row is deleted. A logical index is not required if an internal table is filled using only [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm), and if only its last row(s) is/are deleted using [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm).

Note

In contrast to filling a table with [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm), appending rows with [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm) does not require any resources for index maintenance. It is therefore preferable to use APPEND instead of INSERT to create a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry"). This is possible if the order of the entries is not important, or if entries can be appended in the correct order.

Block Processing of Table Rows

If whole row areas of a table can be processed at once, this should not be done in rows, but using block operations instead. Block operations are possible using the FROM and TO additions of the statements [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm), [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm) and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm). Block operations are also more efficient than single record operations when reading from or modifying database tables with [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements with the additions FROM*|*APPENDING*|*TO TABLE.

Selective Data Transport

If, when reading table rows using [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) or [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), a work area is used or table rows can be changed using [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) instead of by direct access, the TRANSPORTING addition can be used to prevent unnecessary assignments of table components to the work area. This can lead to a noticeable acceleration in performance, particularly if table-like components are excluded from processing.

Using Secondary Keys

The [use of secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_usage.htm) should be planned and executed with care. The time gained when accessing individual rows should not be lost again by the increased memory and time requirements for managing the secondary keys. Secondary keys are generally recommended for internal tables that are filled once and rarely changed during program execution.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.

Deleting Table Rows

When rows are deleted from an internal table, overhead is produced for all table keys and table indexes. The primary key and all unique secondary keys are updated directly, but non-unique secondary keys are updated only if the row being deleted is included in the updated part of an associated index ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

Also note that, for standard tables, the mean runtime of the statement [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) always has a linear dependency on the number of table rows, even when secondary keys are specified using [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_key.htm) or [USING KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_key.htm). This is because a linear search is required to update the primary index, even though the row being deleted can itself be found quickly.

Deleting rows in internal tables using [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) does not usually free any memory in the internal table. Statements such as [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm) must be used to free memory in internal tables.

Free Key Specification for Sorted Tables and Hashed Tables

When using the [READ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) statement with a free key specification of the form [WITH KEY ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm), the search is optimized in all cases where this is possible:

-   In [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"), if any initial section of the [table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_key_glosry.htm "Glossary Entry") or the complete table key is covered by the key specification.

-   In [hashed tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry"), if the complete table key is covered.

If part of a free key meets these conditions, this partial key is first used to search for an entry. In sorted tables, this is performed using a binary search with a logarithmic consumption of resources, and in hashed tables by using a hash algorithm (that is, with constant resource consumption). If an entry is found, the system checks whether the rest of the key conditions are also met. This means that over-specific key specifications in particular are optimized.

Note

See also [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_where_optimization.htm).

Sorting

For textual sorting of an internal table in accordance with the current [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry"), it is more beneficial for performance to use the statement [CONVERT TEXT INTO SORTABLE CODE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_text.htm) instead of [SORT AS TEXT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) in the following cases:

-   If an internal table is sorted by locale and then subjected to a binary search using the statement READ TABLE or using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm).

-   An internal table must be sorted more than once.

-   Indices for database tables are to be structured in accordance with a locale.

This translation does not reflect the current version of the documentation.
Continue
[Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_where_optimization.htm)


### abenitab_where_optimization.htm

---
title: "Optimization of the WHERE Condition"
description: |
  The statements LOOP AT(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), DELETE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm), and MODIFY(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) can be spe
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_where_optimization.htm"
abapFile: "abenitab_where_optimization.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "catch", "data", "types", "internal-table", "abenitab", "where", "optimization"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Performance Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_perfo.htm) → 

Optimization of the WHERE Condition

The statements [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) can be specified together with a WHERE condition that selects specific rows of the internal table. Searches in a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") using the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") are always linear and cannot be optimized. Searches using a [sorted key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry"), however, can be optimized in certain circumstances. These keys are used when:

-   editing a [sorted table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry") using its primary key.

-   editing a [hashed table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry") using its primary key.

-   editing a table (any type) using a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") specified by USING KEY.

The optimization takes place because all [relational expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry") or a group of the relational expressions in the WHERE condition are mapped to a specified key. This specified key performs an appropriate optimized key read (binary search or hash algorithm as in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) or a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm)), to find one or more rows. The row or rows in question are then checked using those remaining relational expressions from the WHERE condition that were not mapped to the specified key.

Prerequisites for the optimization are, therefore, as follows:

-   The relational expressions of the WHERE condition can be transformed to a specified key.

-   The corresponding key read returns the same results as would the evaluation of this part of the logical expression. This is guaranteed only for compatible data types, since in the case of incompatible data types:

-   the content of the specified data objects is converted to the data type of the columns before the evaluation in the case of key reads.

-   The [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) for incompatible data types apply when evaluating a [comparison expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_expression_glosry.htm "Glossary Entry"). Here, all the data types involved play a part in determining which operand is converted into which comparison type.

If there are no relational expressions or too few to meet both of these prerequisites, no optimizations are possible and the behavior is as followed:

-   If the primary table key is used to read a sorted table or a hashed table, all rows of the internal table are checked (as in a standard table).

-   If the table is read using a secondary table key (if specified after USING KEY), a syntax error or warning is produced or an exception raised. Reads that use a secondary table key must always be optimized.

The following sections describe exactly when a read can be optimized.

-   [Prerequisites for the Optimization of Hash Keys](#abenitab-where-optimization-1--------prerequisites-for-the-optimization-of-sorted-keys---@ITOC@@ABENITAB_WHERE_OPTIMIZATION_2)

-   [Requirements Made on the Operands](#@@ITOC@@ABENITAB_WHERE_OPTIMIZATION_3)

Note

If the rows selected using WHERE are modified or deleted using [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) or [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) and not just read using [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), further update costs are incurred alongside the row search. When deleting rows from standard tables, it should be noted that searches using a secondary key can optimize the selection of rows to delete but do not optimize the update of the primary key also needed to delete the rows (which is usually done in a linear search).

Prerequisites for the Optimization of Hash Keys

In the case of [hash key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") reads, there must be precisely one relational expression joined using AND for each component of the key. This expression is either

-   a [comparison expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_expression_glosry.htm "Glossary Entry") with the relational operator \= (or EQ), whose operands meet the requirements above or

-   a [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") IS INITIAL without the addition NOT.

These relational expressions construct the part of the logical expression used for the key read. This part cannot contain duplicate key components. The remainder of the logical expression can contain any number of relational expressions joined using AND. Optimization may not be possible, however, if the Boolean operator NOT or an OR join is used. Key components may be used in the relational expressions not used for the key read.

Note

Relational expressions other than comparisons using \= (or EQ) or predicate expressions IS INITIAL are not involved in the key read. This applies particularly to the tabular relational operator [IN seltab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_select_option.htm), even if it can be traced back to optimizable comparisons.

Example

In the following example, the first two WHERE conditions can be optimized as key reads with the secondary table key key. This is because:

1.  The optimizable conditions for b, d, and e cover the entire key.
2.  The optimizable conditions b, d, and e cover the entire key and a is a condition on a non-key column that is not involved in the part of the WHERE condition required for the optimization.
3.  The optimizable conditions b, d, and e cover the entire key and the other two conditions on the key columns b and d are not optimizable and are hence not involved in the part of the WHERE condition required for the optimization.

The next six WHERE conditions cannot be optimized and produce syntax errors. This is because:

1.  The key component d is not specified.
2.  A key component is joined using OR instead of AND.
3.  Two non-optimizable relational operators are used.
4.  An operand of type i is used in the comparison b of type c, which does not meet the requirements made on the operands.
5.  The Boolean operator NOT is used in front of a key component.
6.  A further comparison is joined using OR.
7.  A further comparison is negated using NOT.

DATA: BEGIN OF line,
        a TYPE c LENGTH 3,
        b TYPE c LENGTH 3,
        c TYPE c LENGTH 3,
        d TYPE c LENGTH 3,
        e TYPE c LENGTH 3,
        f TYPE c LENGTH 3,
      END OF line.
DATA itab LIKE STANDARD TABLE OF line
               WITH UNIQUE HASHED KEY key COMPONENTS b e d.
DATA b\_tab LIKE RANGE OF line-b.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE a = '...' AND b = '...' AND d = '...' AND e IS INITIAL.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL AND
            b IN b\_tab AND d <> '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND e IS INITIAL.                     "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' OR d = '...' AND e IS INITIAL OR      "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d <> '...' AND e IS NOT INITIAL.  "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = 333 AND d = '...' AND e IS INITIAL.         "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...'  AND NOT d = '...' AND e IS INITIAL.  "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL OR      "syntax error
           a = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL AND    "syntax error
           NOT a = '...'.
ENDLOOP.

Prerequisites for the Optimization of Sorted Keys

In the case of reads using a [sorted key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry"), the same applies as to a hash key. The only difference is that only an initial section of the key consisting of at least one component needs to be covered rather than the entire key.

The internal table is read in partly sequential form. The starting point for the editing of the table is determined by a binary search using the subconditions that cover the table key in full or in part. From the starting point onwards, the table is only processed for as long as these subconditions are met.

Example

In the following example, the first five WHERE conditions can be optimized as key reads with the secondary table key key. This is because:

1.  b is an initial part of the key.
2.  b is an initial part of the key and a is an independent condition.
3.  b and e are an initial part of the key.
4.  b, e, and d are an initial part of the key and the order in the WHERE condition is ignored.
5.  b is an initial part of the key and in this case d is an independent condition, even though it is part of the key.

The next five WHERE conditions cannot be optimized and produce syntax errors. This is because:

1.  e is not an initial part of the key.
2.  An inequality comparison does not place.
3.  A comparison in a selection table is specified.
4.  The Boolean operator NOT is used.
5.  An additional OR relationship is used.

DATA: BEGIN OF line,
        a TYPE c LENGTH 3,
        b TYPE c LENGTH 3,
        c TYPE c LENGTH 3,
        d TYPE c LENGTH 3,
        e TYPE c LENGTH 3,
        f TYPE c LENGTH 3,
      END OF line.
DATA itab LIKE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS b e d.
DATA b\_tab LIKE RANGE OF line-b.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE a = '...' AND b IS INITIAL.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...' AND e = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...' AND d IS INITIAL AND e = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...' AND d <> '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE e = '...'.                    "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b <> '...'.                   "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b IN b\_tab .                   "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...'  AND NOT e = '...'. "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key                       "syntax error
             WHERE b = '...'  AND ( d = '...' OR e IS INITIAL ).
ENDLOOP.

Requirements Made on the Operands

The part of the logical expression that can be mapped to a key read must select the same rows as a statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) or a corresponding [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) that specifies the corresponding components as keys.

-   When comparing incompatible data objects, the WHERE condition is subject to the same [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) for incompatible data types. Here, the data types involved determine which operand is converted to which comparison type.

-   If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) of the statement READ or [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm) in a table expression are used, however, the content of the specified data objects is always converted to the data type of the columns before the comparison.

If this produces differing results, an optimization is not possible. Due to the complexity of the comparison rules (particularly for [elementary data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands.htm), it is not a good idea to construct a set of rules detailing exactly when the comparison type matches the data type of the left operand. Generally speaking,

-   only fully compatible operands are optimizable,

-   in some cases, elementary operands with different data types can be optimized, if the value ranges or lengths are suitable. For example, a comparison of a column with the type of a floating point number with an operand of type Integer or of a column of c with a similar operand, if its length is less than the length of the column.

For this reason, it is advisable to use only pairs of [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") operands in the WHERE condition. This guarantees that the differences in behavior of the WHERE condition and the specified key do not influence the result.

Example

The following example is largely similar to the example in the section WHERE log\_exp in [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm). In that case, the table is read using the primary key and no optimization. Here, however, the table is read using a secondary table key and a syntax check warning is produced and an exception raised (when the program is executed). The number of rows in the internal table determines whether the exception is raised.

DATA text\_short TYPE c LENGTH 2.
DATA text\_long  TYPE c LENGTH 4.
DATA itab LIKE TABLE OF text\_short
          WITH UNIQUE HASHED KEY key COMPONENTS table\_line.
itab = VALUE #( ( 'AA' )
                ( 'BB' )
                ( 'CC' )
                ( 'DD' )
                ( 'EE' )
                ( 'FF' )
                ( 'GG' )
                ( 'HH' )
                ( 'II' )
                ( 'JJ' )
                ( 'KK' )
                ( 'LL' )
                ( 'MM' ) ).
text\_short = 'AA'.
text\_long  = 'AAXX'.
LOOP AT itab INTO text\_short USING KEY key
             WHERE table\_line = text\_long.
ENDLOOP.
cl\_demo\_output=>write( |LOOP: { sy-subrc }| ).
"Statement
READ TABLE itab INTO text\_short WITH TABLE KEY key
                                COMPONENTS table\_line = text\_long.
cl\_demo\_output=>write( |READ: { sy-subrc }| ).
"Expression
TRY.
    text\_short = itab\[ KEY key COMPONENTS table\_line = text\_long \].
  catch CX\_SY\_ITAB\_LINE\_NOT\_FOUND.
    ...
ENDTRY.
cl\_demo\_output=>display( |Expression: { text\_short }| ).
