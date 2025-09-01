---
title: "Syntax"
description: |
  ... HIERARCHY_DESCENDANTS_AGGREGATE( SOURCE hierarchy(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) AS tabalias JOIN data_source(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) AS tabalias ON sq
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_desc_agg.htm"
abapFile: "abenselect_hierarchy_desc_agg.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abenselect", "hierarchy", "desc", "agg"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_navigators.htm) →  [SELECT, FROM hierarchy\_aggregate\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm) → 

SELECT, FROM HIERARCHY\_DESCENDANTS\_AGGREGATE

Syntax

... HIERARCHY\_DESCENDANTS\_AGGREGATE(
      SOURCE [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) *\[*AS tabalias*\]*
     *\[*JOIN [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) *\[*AS tabalias*\]* ON [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm)*\]*
      MEASURES agg\_func1 AS alias1*\[*,
               agg\_func2 AS alias2*\[*,
               ...*\]**\]*
     *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm)*\]*
     *\[*WITH SUBTOTAL*\]*
     *\[*WITH BALANCE*\]*
     *\[*WITH NOT MATCHED*\]*
     *\[*WITH TOTAL*\]* ) ...

Additions:

[1\. ... JOIN data\_source *\[*AS tabalias*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE sql\_cond](#!ABAP_ADDITION_2@2@)
[3\. ... WITH SUBTOTAL](#!ABAP_ADDITION_3@3@)
[4\. ... WITH BALANCE](#!ABAP_ADDITION_4@4@)
[5\. ... WITH NOT MATCHED](#!ABAP_ADDITION_5@5@)
[6\. ... WITH TOTAL](#!ABAP_ADDITION_6@6@)

Effect

Specifies the [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") HIERARCHY\_DESCENDANTS\_AGGREGATE as a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry"). It accesses the [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) specified after SOURCE and evaluates it. After the SQL hierarchy, AS can be used to specify an alias name for it. This name is valid within parentheses and must be used in positions in which the SQL hierarchy is addressed.

The hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE returns a tabular result consisting of the [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the SQL hierarchy [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) specified after SOURCE. These nodes meet the optional WHERE condition. If no WHERE condition is specified, these are all the hierarchy nodes. For each node of the result, the aggregate functions specified after MEASURES are applied to the row set consisting of the node and all its [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry"). The result of each aggregate function is saved in the current node as the content of a separate column.

A comma-separated list of [aggregate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_function_glosry.htm "Glossary Entry") agg\_func1, agg\_func2, ... must be specified after MEASURES. At least one aggregate function must be specified. Each aggregate function must be assigned an alias name alias1, alias2, ... The arguments of the aggregate functions can be individual columns [col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) of the SQL hierarchy hierarchy including its [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm) or a data source data\_source specified after JOIN. The [column selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ can (or must) be used to prefix the columns with the name of the SQL hierarchy or data source. The following aggregate functions are possible:

-   If JOIN is not specified, the arguments col can be columns of the SQL hierarchy and the following aggregate functions can be used:

[MIN( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[MAX( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[SUM( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[COUNT( *\[*DISTINCT*\]* col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[COUNT( \* )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm), [COUNT(\*)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm)

The addition DISTINCT is only possible for COUNT.

-   If JOIN is specified, the arguments col can be columns of the SQL hierarchy and the data source after data\_source and the following aggregate functions can be used:

[MIN( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[MAX( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[SUM( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[COUNT( *\[*DISTINCT*\]* col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm)

The addition DISTINCT is only possible for COUNT and for columns of the SQL hierarchy.

The aggregate functions work as specified in the [general description](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm), except that only columns col are allowed as arguments and that the result of the function COUNT is INT8 instead of INT4. For each aggregate function, a column with the alias name defined by AS is added to the tabular result of the hierarchy navigator. This column contains the result of the aggregate function in every row. These columns are not [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm). If \* or ...~\* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), they are read like a column of the SQL hierarchy specified as a source and are part of a structure or internal table created using an inline declaration @DATA(...) in the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

Alongside the [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm) of the SQL hierarchy specified after SOURCE, the result set contains a further hierarchy column HIERARCHY\_AGGREGATE\_TYPE with the type INT1. In the rows of the result set created by the optional WITH additions, this column contains an indicator for the addition in question. In other cases it contains the numeric value 0.

Example

Calls the hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE in the program DEMO\_HIERARCHY\_AGGREGATE, where the [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") DEMO\_CDS\_PARENT\_CHILD\_AGG is specified as a source. The WHERE condition evaluates the [hierarchy column](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm) HIERARCHY\_LEVEL and only nodes with a maximum hierarchy level of 2 are added to the result set. The aggregate functions, however, respect all descendant nodes regardless of their hierarchy level. When executed, this program demonstrates how this hierarchy navigator works.

DATA(level) = 2.
SELECT agg~\*
       FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
              SOURCE demo\_cds\_parent\_child\_agg( p\_id = 'A' )
              MEASURES MIN( num ) AS min,
                       MAX( num ) AS max,
                       SUM( num ) AS sum,
                       COUNT( \* ) AS cnt
              WHERE hierarchy\_level <= @level ) AS agg
       INTO TABLE @DATA(cds\_hierarchy\_desc\_aggregate).

Addition 1

... JOIN data\_source *\[*AS tabalias*\]*

Effect

The optional addition JOIN can be used to join an additional data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) with the SQL hierarchy specified after SOURCE. The same applies to data\_source as to every data source of a query, except that path expressions [sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) are not possible. After the data source, AS can be used to specify an alias name for it. This name is valid within parentheses and must be used in positions in which the hierarchy is addressed.

The result set of the SQL hierarchy is joined with the result set of the data source data\_source in accordance with [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm) rules. Here, the rules for conditions [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm) in expressions apply to the ON condition. Columns of the data source can be used as arguments of the aggregate functions after MEASURES for which their data type is suitable. They are not, however, additional columns that are part of the tabular result of the hierarchy navigator.

For every node of the original SQL hierarchy that meets the WHERE condition, the aggregate functions specified after MEASURES are applied to every [descendant node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry") in the result set of the join (as specified by the [parent-child relationship](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpcr_glosry.htm "Glossary Entry")).

Hints

-   The addition JOIN does not modify the number of rows in the result set of the hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE. If, however, the result set of the join contains more descendant nodes for a node than in the original SQL hierarchy, all these nodes are respected by the aggregate functions. Any starting nodes in a calculation that occur more than once are also all respected.

-   If there are [access conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") in [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") for a data source specified by JOIN and these are not switched off using [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm), these conditions are applied before the join is made.

Executable Example

[Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhier_desc_agg_abexa.htm)

Addition 2

... WHERE sql\_cond

Effect

The WHERE condition selects those nodes of the SQL hierarchy specified after SOURCE that are added to the result set of the hierarchy navigator. Columns of the SQL hierarchy, including the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm), can be used in the condition [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm).

Hints

-   The WHERE condition does not restrict the descendant nodes of the selected nodes. It is used only to select those nodes for which the aggregate function is calculated.

-   The columns of a data source joined using JOIN cannot be used after WHERE.
    

Addition 3

... WITH SUBTOTAL

Addition 4

... WITH BALANCE

Addition 5

... WITH NOT MATCHED

Addition 6

... WITH TOTAL

Effect

Each of the optional WITH additions (which can be specified in any order) adds exactly one row to the tabular result of the hierarchy aggregate navigator HIERARCHY\_DESCENDANTS\_AGGREGATE. In the new row, all columns (including the [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm)) contain the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"), with the exception of columns created using the addition MEASURES and the hierarchy column HIERARCHY\_AGGREGATE\_TYPE. The special hierarchy column HIERARCHY\_AGGREGATE\_TYPE uses the following values to indicate which WITH addition added the row:

WITH Addition

HIERARCHY\_AGGREGATE\_TYPE

SUBTOTAL

1

BALANCE

2

NOT MATCHED

3

TOTAL

4

In the rows not created by WITH, the hierarchy column HIERARCHY\_AGGREGATE\_TYPE contains the numeric value 0. The columns created by the addition MEASURES contain the results of their aggregate functions for the hierarchy nodes created as follows by the WITH addition:

-   WITH SUBTOTAL

The aggregate functions evaluate all hierarchy nodes that meet the WHERE condition of the hierarchy navigator.

-   WITH BALANCE

The aggregate functions evaluate all hierarchy nodes that do not meet the WHERE condition of the hierarchy navigator.

-   WITH NOT MATCHED

This addition can only be specified in combination with the JOIN addition. The aggregate functions evaluate all rows of the data source data\_source specified after JOIN for which the ON condition of the join is not met.

-   WITH TOTAL

The aggregate functions evaluate all hierarchy nodes plus the rows of a data source data\_source specified after JOIN that do not meet the ON condition.

Hint

If one of the WITH additions is used, the syntax check is made in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

Executable Example

[Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhier_desc_agg_with_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhier_desc_agg_abexa.htm)
![Example](exa.gif "Example") [SELECT, Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhier_desc_agg_with_abexa.htm)