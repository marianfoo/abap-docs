---
title: "SELECT - FROM HIERARCHY"
description: |
  Syntax ... HIERARCHY( FROM HIERARCHY SOURCE cds_view CHILD TO PARENT ASSOCIATION _assoc START WHERE sql_cond(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_expr_logexp.htm) SIBLINGS ORDER BY field1 ASCENDINGDESCENDING, field2 ASCENDINGDESCENDING
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm"
abapFile: "abenselect_hierarchy_definition.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "data", "types", "internal-table", "abenselect", "hierarchy", "definition"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) →  [SELECT - FROM table\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_table_function.htm) →  [SELECT - FROM hierarchy\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_functions.htm) → 

SELECT - FROM HIERARCHY

Syntax

... HIERARCHY( FROM HIERARCHY SOURCE cds\_view
                     CHILD TO PARENT ASSOCIATION \_assoc
                       START WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_expr_logexp.htm)
                       *\[*SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]**\[*,
                                          field2 *\[*ASCENDING*|*DESCENDING*\]*, ...*\]**\]*
                       *\[*DEPTH depth*\]*
                       *\[*MULTIPLE PARENTS *{*NOT ALLOWED*}**{*LEAVES ONLY*}**|*ALLOWED*\]*
                       *\[*ORPHANS ERROR*|*IGNORE*|*ROOT*\]*
                       *\[*CYCLES ERROR*|*BREAKUP*\]*
                       *\[*GENERATE SPANTREE*\]* ) ...

Extras:

[1\. ... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*, ...](#!ABAP_ADDITION_1@1@)
[2\. ... DEPTH depth](#!ABAP_ADDITION_2@2@)
[3\. ... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED](#!ABAP_ADDITION_3@3@)
[4\. ... ORPHANS ERROR*|*IGNORE*|*ROOT](#!ABAP_ADDITION_4@4@)
[5\. ... CYCLES ERROR*|*BREAKUP](#!ABAP_ADDITION_5@5@)
[6\. ... GENERATE SPANTREE](#!ABAP_ADDITION_6@6@)

Effect

Specifies the [hierarchy function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhierarchy_function_glosry.htm "Glossary Entry") HIERARCHY as a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"). The tabular result of HIERARCHY contains a [hierarchy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhierarchy_glosry.htm "Glossary Entry") of rows in [parent-child relationships](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcr_glosry.htm "Glossary Entry") (PCR). The parent-child relationship is defined in the [association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") \_assoc of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") cds\_view (specified after FROM HIERARCHY SOURCE) specified after CHILD TO PARENT ASSOCIATION. The results set when ABAP SQL accesses the table function HIERARCHY comprises the components of the CDS view cds\_view and additional columns.

The additional columns are defined by the abstract CDS entity [DDDDL\_HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm) and contain row-specific information about the hierarchy. If \* or ...~\* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm), only the components of the CDS view cds\_view are read and not the additional columns. In this case, they are also ignored by any structure or internal table created in the [INTO clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) by an inline declaration @DATA(...). The additional components must be specified explicitly in the SELECT list before they can be read. Regardless of this, they can be used for specified columns [colname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) in the other clauses of the query, like any other column in the results set.

cds\_view can be specified as a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") that [publishes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) the association \_assoc in its SELECT list. This association defines the parent-child relationship between rows of the results set of the CDS view. The following conditions apply here:

-   The association must be a self-association. The target data source must be the same as the source data source (namely the CDS view cds\_view).

-   Only equality comparisons with the operator \= and joined using AND can occur in the ON condition of the association.

-   In each comparison in the ON condition, one field of the source data source cds\_view must be compared with a field (prefixed with \_assoc) of the target data source.

-   The source data source cds\_view cannot contain any fields that have the same name as fields in the abstract CDS entity [DDDDL\_HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm). If the data source of the view does contain a field like this, [AS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm) or a [name list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_name_list.htm) must be used to define an alternative element name.

If these prerequisites are not met, the view and association cannot be used in the HIERARCHY function.

START WHERE must be followed by a logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_expr_logexp.htm) that contains conditions for rows in the results set of the view cds\_view. The selected rows comprise the root node set of the hierarchy. They are used as the first predecessors of the parent-child relationship defined using the association \_assoc. The selected rows are inserted into the result of the hierarchy function and, starting from each of these rows, all following rows of the results set of the view that match a predecessor row (as specified by the ON condition of the association) are selected and inserted recursively. The additional fields from the abstract CDS entity [DDDDL\_HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm) contain information about the position of the row in the hierarchy.

Notes

-   The order of the additions is relevant.
    

Example

Accesses a tree-like hierarchy defined by the association \_tree in a CDS view DEMO\_CDS\_SIMPLE\_TREE\_SOURCE. The CDS view uses the [global temporary table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") DEMO\_SIMPLE\_TREE as a data source. This source is filled with suitable data. The hierarchy function returns all child nodes (and their child nodes) in the source row with the value 5 in the column ID. The results set contains all columns of the view DEMO\_CDS\_SIMPLE\_TREE\_SOURCE but does not contain any of the additional columns from the abstract CDS entity. [DDDDL\_HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm).

INSERT demo\_simple\_tree FROM TABLE @( VALUE #(
        ( id = 1  parent\_id = 0 name = 'AA'          )
        ( id = 2  parent\_id = 1 name = 'AA-AA'       )
        ( id = 3  parent\_id = 2 name = 'AA-AA-AA'    )
        ( id = 4  parent\_id = 2 name = 'AA-AA-BB'    )
        ( id = 5  parent\_id = 1 name = 'AA-BB'       )
        ( id = 6  parent\_id = 5 name = 'AA-BB-AA'    )
        ( id = 7  parent\_id = 6 name = 'AA-BB-AA-AA' )
        ( id = 8  parent\_id = 6 name = 'AA-BB-AA-BB' )
        ( id = 9  parent\_id = 5 name = 'AA-BB-BB'    )
        ( id = 10 parent\_id = 9 name = 'AA-BB-BB-AA' )
        ( id = 11 parent\_id = 1 name = 'AA-CC'       )
        ( id = 12 parent\_id = 0 name = 'BB'          )
        ( id = 13 parent\_id = 0 name = 'CC'          ) ) ).
SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 5 )
       FIELDS \*
       INTO TABLE @DATA(result).
DELETE FROM demo\_simple\_tree.

Addition 1

... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*, ...

Effect

The addition SIBLINGS ORDER BY sorts sibling nodes in the result of the hierarchy function. Siblings are rows in the hierarchy that have the same parents. If this addition is not used, the order of siblings in the result of the hierarchy function is undefined.

Fields field1, field2, ... of the CDS view cds\_view can be specified in a comma-separated list after the addition SIBLINGS ORDER BY to specify the order of the siblings.

The addition ASCENDING or DESCENDING can be specified for each field to specify an ascending or descending order (ascending is the default).

The fields specified after ORDER BY cannot be of the [type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, or RAWSTRING.

Notes

-   If specified, an additional general [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) clause of the current query is applied to the results set sorted by SIBLINGS ORDER BY.

-   The additional columns of the abstract entity [DDDDL\_HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm) cannot be specified here. They can, however, be specified in the general [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) clause of the current query.

Example

Ascending and descending sort of siblings in the program DEMO\_HIERARCHY\_SIBLINGS\_ORDER. When executed, this program demonstrates how these additions work.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       SIBLINGS ORDER BY id ASCENDING )
       FIELDS id,
              parent,
              name
       INTO TABLE @DATA(result\_asc).
SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       SIBLINGS ORDER BY id DESCENDING )
       FIELDS id,
              parent,
              name
       INTO TABLE @DATA(result\_desc).

Addition 2

... DEPTH depth

Effect

The addition depth can be used to limit the maximum number of parent-child relationships. depth expects a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) with a prefixed escape character @, a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm), or a literal of type i. Only the types b, s, or i can be specified for depth.

The value in depth has the following meaning:

-   If depth is greater than 0, the number of child nodes (and their child nodes) is read that is specified in depth, starting from a source row.

-   If depth is 0, only the source rows are read.

-   If depth is less than 0, no rows are read and sy-subrc is set to 4.

Example

Limits the number of parent-child relationships in the program DEMO\_HIERARCHY\_DEPTH. When executed, this program demonstrates how this addition works. It also shows the [hierarchy level](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") from the additional column HIERARCHY\_LEVEL.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       DEPTH 1 )
       FIELDS name,
              hierarchy\_level
       INTO TABLE @DATA(result\_1).

Addition 3

... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED

Effect

The addition MULTIPLE PARENTS can be used to define whether a child node in the results set of the hierarchy function can have multiple parents:

-   NOT ALLOWED

A child node can have one predecessor row only (default).

-   LEAVES ONLY

Only leaf nodes (rows without their own child nodes) can have multiple predecessor rows.

-   ALLOWED

All rows can have multiple predecessor rows.

Example

Accesses the table function HIERARCHY in the program DEMO\_HIERARCHY\_MULTI\_PARENTS. Only leaf nodes can have multiple parents here.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A'
                       MULTIPLE PARENTS LEAVES ONLY )
       FIELDS id,
              parent,
              hierarchy\_level
       INTO TABLE @DATA(leaves\_only).

When executed, this program demonstrates how the MULTIPLE PARENTS addition works.

-   The first SELECT statement does not specify the addition and NOT ALLOWED is applied implicitly. The row with the ID D has three parents and hence an exception is raised.

-   The next SELECT statement specifies the addition MULTIPLE PARENTS LEAVES ONLY. The row with the ID D is a leaf node, which means the function can be accessed.

-   A child node for the row with the ID D is inserted in front of the next SELECT statement in the database table DEMO\_PARENT\_CHLD. If used, the addition MULTIPLE PARENTS LEAVES ONLY now also raises an exception.

-   The next SELECT statement specifies the addition MULTIPLE PARENTS ALLOWED and it is possible to access the table again.
    

Addition 4

... ORPHANS ERROR*|*IGNORE*|*ROOT

Effect

The addition ORPHANS defines the way orphan nodes are handled. An orphan is a row in the results set of the view cds\_view that does not have any parents and is not part of the root node set of the hierarchy. The following categories of orphan nodes exist:

-   Rows that have parents as a part of a parent-child relationship but the parents are not part of the current hierarchy (known as real orphans).

-   Rows that cannot be reached from the root node set using parent-node relationships.

-   Rows in a cycle (see below) and that cannot be reached from the root node set using parent-node relationships (known as island orphans).

The additions work as follows:

-   IGNORE

Orphan nodes are not part of the results set of the hierarchy function.

-   ERROR

Any orphans detected raise an exception.

-   ROOT

Orphans are included in the results set as follows:

-   Real orphan nodes are included in the root node set and flagged as orphan nodes in the additional column HIERARCHY\_IS\_ORPHAN.

-   Any child nodes of real orphans are handled like child nodes of parents from the root node set, but are also flagged as orphan nodes in the additional column HIERARCHY\_IS\_ORPHAN.

-   A parent row in the root node set is generated in front of the rows of an island orphan. In this parent row, all columns of the CDS view cds\_view contain the null value.

Example

Accesses the table function HIERARCHY in the program DEMO\_HIERARCHY\_ORPHANS.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A'
                       MULTIPLE PARENTS ALLOWED
                       ORPHANS ROOT
                       CYCLES BREAKUP )
       FIELDS CASE WHEN id IS NULL THEN '\_\_'
                   ELSE id
                   END AS id,
              CASE WHEN parent IS NULL THEN '\_\_'
                   ELSE parent
                   END AS parent,
              hierarchy\_is\_orphan,
              hierarchy\_is\_cycle,
              hierarchy\_rank,
              hierarchy\_parent\_rank,
              hierarchy\_level
       INTO TABLE @DATA(root).

When executed, this program demonstrates how the ORPHANS addition works.

-   The first SELECT statement specifies the addition ORPHANS IGNORE. All orphan nodes are ignored and only the single-row root node set is read.

-   The next SELECT statement specifies the addition ORPHANS ERROR. An exception is raised because the results set of the hierarchy function contains orphan nodes.

-   The next SELECT statement specifies the addition ORPHANS ROOT and all orphan nodes in the results set of the hierarchy function are read:

-   The row with the value B in the column ID is a real orphan node. It contains a blank in the column PARENT\_ID, but rows with a blank in the column ID are not part of the root node set. The addition ROOT includes the row itself in the root node set (the additional column HIERARCHY\_PARENT\_RANK has the value 0) and the row is flagged as an orphan node in the additional column HIERARCHY\_IS\_ORPHAN.

-   The row with the value C in the column ID contains the value B in the column PARENT\_ID. The predecessor row is an orphan node included in the root node set, which means that this row is also flagged as an orphan node.

-   The row with the value X in the column ID also contains the value X in the column PARENT\_ID. This means that this row starts a cycle with itself as the predecessor row. It is not part of the root node set, however, which means it is an island orphan. A predecessor row is inserted in the root node set in which the columns of the CDS view DEMO\_CDS\_PARENT\_CHILD\_SOURCE contain null values.

-   The rows with the values U, V, and W in the column ID also comprise an island orphan. None of these rows is part of the root node set. A predecessor row is again inserted in which the columns of the CDS view contain null values.
    

Addition 5

... CYCLES ERROR*|*BREAKUP

Effect

If BREAKUP is specified, MULTIPLE PARENTS ALLOWED must also be specified.

Addition 6

... GENERATE SPANTREE

Effect

...

Continue
[DDDDL\_HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm)