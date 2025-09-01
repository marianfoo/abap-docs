# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Internal Tables (itab) / itab - Performance Notes

Included pages: 2


### abenitab_perfo.htm

  

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


### abenitab_where_optimization.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Performance Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_perfo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Optimizing%20the%20WHERE%20Condition%2C%20ABENITAB_WHERE_OPTIMIZATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Optimizing the WHERE Condition

Using the statements [LOOP AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) a WHERE condition can be specified to select specific lines of the internal table. While the search across a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") is always linear and cannot be optimized when using the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), the compiler tries to optimize the search when the statement is processed by using a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry"). This is the case, when

-   accessing a [sorted table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry") using its primary key,
-   accessing a [hashed table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry") using its primary key,
-   accessing a table of any table type using a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") specified by USING KEY.

For the optimization, the compiler tries to transform the [relational expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry") of the given WHERE condition into an equivalent WHERE condition that starts with comparisons between key fields and values combined by AND. These key/value pairs are then used as a key specification for an optimized key access (binary search or hash algorithm as in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) or a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm)), to find one or more lines. The found line or lines are then further checked using the remaining relational expressions from the WHERE condition that could not be extracted as key/value pairs.

Prerequisites for the optimization are therefore:

-   The relational expressions of the WHERE condition can be transformed to sufficient key/value pairs.
-   The corresponding key access returns the same results as the evaluation of respective part of the logical expression would. This is guaranteed only for compatible data types, since in the case of incompatible data types:
    -   The content of the specified data objects is converted to the data type of the columns before the evaluation in the case of key accesses.
    -   The [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) for incompatible data types apply when evaluating a [comparison expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_expression_glosry.htm "Glossary Entry"). Here, all the data types involved play a part in determining which operand is converted into which comparison type.

If there are no or insufficient relational expressions to meet both of these prerequisites, no optimization is possible and the behavior is as follows:

-   If a sorted table or a hashed table is accessed using the primary table key, all lines of the internal table are checked as in a standard table.
-   If the table is read using a secondary table key, that is, if said key is specified after USING KEY, a syntax error or syntax check warning, or an exception is raised. Access using a secondary table key must always be executed in an optimized way.

The following sections describe when an access can be optimized.

-   [Prerequisites for the Optimization of Hash Keys](#@@ITOC@@ABENITAB_WHERE_OPTIMIZATION_1)
-   [Prerequisites for the Optimization of Sorted Keys](#@@ITOC@@ABENITAB_WHERE_OPTIMIZATION_2)
-   [Prerequisites for the Operands](#@@ITOC@@ABENITAB_WHERE_OPTIMIZATION_3)

Hints

-   By specifying a key with USING KEY, it can be checked, whether an optimization is possible for a WHERE condition. The long texts of the syntax errors and warnings provide detailed information for dedicated situations.
-   If the lines selected using WHERE are modified or deleted using [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) or [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) and not just read using [LOOP AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm), further update costs are incurred in addition to the search for the lines. When deleting lines from standard tables, it should be noted that searches using a secondary key optimize the selection of lines to be deleted, but not the update required for the primary key, which is usually performed using a linear search.

Prerequisites for the Optimization of Hash Keys   

In the case of a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry") access, it must be possible to transform the WHERE condition fully or partly to a set of comparisons on equality combined by AND that cover all components of the key. The operands must meet the prerequisites described below.

The operands of these relational expressions are then used as the key/value pairs for the key access. The remainder of the logical expression can contain any number of relational expressions combined using AND. Key components may be used in the relational expressions not used for the key access but not for comparisons on equality.

Comparisons specified by the tabular comparison operator [IN range\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm) are ignored by the optimization. They are never part of the key access but are always applied to the lines found by the key access.

Example

In the following example:

-   The first WHERE condition can be optimized. It is already written in an optimized form, where the three key fields are compared for equality and combined by AND. A comparison for a further column is also appended by AND.
-   The second WHERE condition can be optimized. The compiler can transform it to the first WHERE condition by removing the double negation with NOT and by replacing IS INITIAL with a comparison for equality.
-   The third WHERE condition can be optimized. The compiler can transform the comparisons combined by OR into comparisons combined by AND using De Morgan's Laws. Also the double negation with NOT for IS INITIAL is identified and removed.
-   The fourth WHERE condition cannot be optimized because a comparison for a further column is appended by OR.
-   The fifth WHERE condition cannot be optimized because there is a duplicate comparison for equality for a key field.

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE HASHED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 3 AND b = 3 AND c = 0 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             WHERE d > 1 AND
                   NOT ( NOT ( a = 3 AND b = 3 ) ) AND
                   c IS INITIAL.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs3>)
             WHERE NOT ( NOT a = 3 OR NOT b = 3 ) AND
                   d > 1 AND
                   NOT c IS NOT INITIAL.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs4>)
\*             WHERE a = 3 AND b = 3 AND c = 0 OR d > 1.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs5>)
\*             WHERE a = 3 AND b = 3 AND c = 0 AND a = 1.
\*  ...
\*ENDLOOP.

Prerequisites for the Optimization of Sorted Keys   

In the case of a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") access, it must be possible to transform the WHERE condition fully or a partly to a set of comparisons with any [binary comparison operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm) or with [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm) combined by AND that cover an initial section of the key consisting of at least one component. The operands must meet the prerequisites described below.

The operands of these relational expressions are then used as the key/value pairs for the key access. The remainder of the logical expression can contain any number of relational expressions combined using AND. Key components may be used in the relational expressions not used for the key access but not for comparisons on equality. Nevertheless, the duplicate use of key fields in comparisons leads to a syntax warning.

The access to the internal table is partially sequential. For a forward loop, the starting point for processing is determined by a binary search with the extracted key/value pairs for relations \=, \>=, \>, and BETWEEN (first operand) that cover the table key completely or partially. From the starting point on, the table is only processed as long as subconditions for pairs with relations \=, <=, <, and BETWEEN (second operand) remain fulfilled. For a backward loop (see [STEP](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@)), the starting point is determined by pairs with relations \=, <=, <, and BETWEEN (second operand) and the processing is stopped when subconditions for pairs with \=, \>=, \>, and BETWEEN (first operand) are not fulfilled any more.

Comparisons specified by a tabular comparison operator [IN range\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm) appended with AND are ignored by the optimization. They are never part of the key access but always applied to the lines found by the key access.

Example

In the following example:

-   The first WHERE condition can be optimized. It is already written in an optimized form, where the three key fields are compared with different operators combined by AND. A comparison for a further column is also appended by AND.
-   The second WHERE condition can be optimized. It is already written in an optimized form, where the first two key fields are compared.
-   The third WHERE condition can be optimized. The first two key fields are extracted for the key access and the condition for the third key field is evaluated together with the additional condition on the resulting lines.
-   The fourth WHERE condition can be optimized. The compiler can use De Morgan's Laws to transform the condition to comparisons combined by AND.
-   The fifth WHERE condition can be optimized because it uses BETWEEN for the first key field.
-   The sixth WHERE condition cannot be optimized because the additional condition is combined by OR.
-   The seventh WHERE condition cannot be optimized because a key field is used two times with comparisons on equality.
-   The eighth WHERE condition can be optimized but produces a syntax warning, suppressed by a pragma here, because a field is used twice.

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 3 AND b >= 3 AND c < 0 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             WHERE a = 3 AND b < 3 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs3>)
             WHERE a = 3 AND b = 3 AND NOT c = 1 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs4>)
             WHERE NOT ( NOT a = 3 OR NOT b = 3 ).
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs5>)
             WHERE a BETWEEN 1 AND 3.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs6>)
\*             WHERE a = 3 AND b = 3 OR d > 1.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs7>)
\*             WHERE a = 3 AND b = 3 AND a = 1.
\*  ...
\*ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs8>)
             WHERE a = 3 AND b = 3 AND a > 1 ##ITAB\_DUP\_IN\_WHERE\[A\].
  ...
ENDLOOP.

Example

In this example, the partially sequential access to the internal table is as follows:

-   The first loop is a forward loop.
    -   The starting point is determined by key/value pairs of relations a =0, b >= 0, c > 2.
    -   The table is processed as long as subconditions for the pairs a = 0, b < 5 are fulfilled.
-   The second loop is a backward loop.
    -   The starting point is determined by the pairs a <= 1, b < 5.
    -   The table is processed as long as subconditions for the pairs a >= -1, b >= 0, c > 2 are fulfilled.
-   The third loop is a forward loop and the fourth loop is a backward loop. Since for both loops there is no relation for key field a:
    
    -   No starting point can be determined.
    -   No subconditions can be determined.
    
    An optimization is not possible
    

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 0 AND b >= 0 AND b < 5 AND c > 2.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             STEP -1
             WHERE a BETWEEN -1 AND 1 AND b >= 0 AND b < 5 AND c > 2.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs3>)
\*             WHERE b >= 0 AND b < 5 AND c > 2.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs4>)
\*             STEP -1
\*             WHERE b >= 0 AND b < 5 AND c > 2.
\*  ...
\*ENDLOOP.

Prerequisites for the Operands   

The part of the logical expression that can be mapped to a key access must select the same lines as a statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) or a corresponding [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) that specifies the corresponding components as keys.

-   In the WHERE condition, the [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) for incompatible data types apply when comparing incompatible data objects, where it depends on the data types involved which operand is converted to which comparison type.
-   If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm) of the statement READ or [KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) in a table expression are used, however, the content of the specified data objects is always converted to the data type of the columns before the comparison.

If this leads to different results, an optimization is not possible. Because of the complexity of the comparison rules, especially for [elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands.htm), it is not useful to set up a detailed set of rules when the comparison type exactly matches the data type of the left operand. Generally speaking,

-   only fully compatible operands are optimizable,
-   in some cases, elementary operands with different data types can be optimized, if the value ranges or lengths are suitable. For example, a comparison of a column with the type of a floating point number with an operand of type integer or of a column of c with a similar operand, if its length is less than the length of the column.

For this reason, it is advisable to use only pairs of [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") operands in the WHERE condition. This guarantees that the differences in behavior of the WHERE condition and the specified key do not affect the result.

Example

The following example is similar to the example in the section WHERE log\_exp in [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm).

-   There, the access is done via the primary table key. No optimization takes place, but there is no warning from the syntax check.
-   Here, the access is done via a secondary table key, resulting in a warning from the syntax check and a possible exception during program execution. Whether the exception is raised depends on the number of lines in the internal table.

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
  CATCH cx\_sy\_itab\_line\_not\_found.
    ...
ENDTRY.
cl\_demo\_output=>display( |Expression: { text\_short }| ).
