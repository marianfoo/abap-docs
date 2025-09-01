---
title: "Syntax"
description: |
  ... HIERARCHY_ANCESTORS_AGGREGATE( SOURCE hierarchy(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) AS tabalias START WHERE sql_cond(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm) MEASURES agg_func1 AS
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_ancs_agg.htm"
abapFile: "abenselect_hierarchy_ancs_agg.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "data", "internal-table", "abenselect", "hierarchy", "ancs", "agg"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_navigators.htm) →  [SELECT, FROM hierarchy\_aggregate\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm) → 

SELECT, FROM HIERARCHY\_ANCESTORS\_AGGREGATE

Syntax

... HIERARCHY\_ANCESTORS\_AGGREGATE(
      SOURCE [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) *\[*AS tabalias*\]*
     *\[*START WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm)*\]*
      MEASURES agg\_func1 AS alias1*\[*,
               agg\_func2 AS alias2*\[*,
               ...*\]**\]*
     *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm)*\]* ...

Additions:

[1\. ... START WHERE sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE sql\_cond](#!ABAP_ADDITION_2@2@)

Effect

Specifies the [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") HIERARCHY\_ANCESTORS\_AGGREGATE as a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry"). It accesses the [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) specified after SOURCE and evaluates it. After the SQL hierarchy, AS can be used to specify an alias name for it. This name is valid within parentheses and must be used in positions in which the SQL hierarchy is addressed.

The hierarchy navigator HIERARCHY\_ANCESTORS\_AGGREGATE aggregates the values of all [ancestor nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenancestor_node_glosry.htm "Glossary Entry") located between [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") determined using WHERE and [starting nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstarting_node_glosry.htm "Glossary Entry") determined using START WHERE, including the values of the hierarchy nodes and starting nodes themselves. A tabular result set is created consisting of all hierarchy nodes that

-   meet the WHERE condition and

-   have an ancestor node (including the hierarchy node itself) that meets the START WHERE condition as a starting node.

-   Here, a separate row is created for each possible path to every starting node that occurs under the ancestor nodes. If no WHERE condition is specified, this is done for all the hierarchy nodes. If no START WHERE condition is specified, the starting node is, implicitly, the [ancestor node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenancestor_node_glosry.htm "Glossary Entry") with the lowest [hierarchy level](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_level_glosry.htm "Glossary Entry").

For each node of the result, the aggregate functions specified after MEASURES are applied to the hierarchy nodes of that path that consists of the node and its ancestor nodes (including the starting node). The aggregation is based on the starting node, which is significant for the aggregate function STRING\_AGG. The result of each aggregate function is saved in the current node as the content of a separate column.

A comma-separated list of [aggregate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_function_glosry.htm "Glossary Entry") agg\_func1, agg\_func2, ... must be specified after MEASURES. At least one aggregate function must be specified. Each aggregate function must be assigned an alias name alias1, alias2, ... The arguments of the aggregate functions can be individual columns [col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) of the SQL hierarchy hierarchy, including their [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm). The [column selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ can be used to prefix the columns with the name of the SQL hierarchy. The following aggregate functions can be used:

[MIN( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[MAX( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[SUM( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[PRODUCT( col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[COUNT( *\[*DISTINCT*\]* col )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[COUNT( \* )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm), [COUNT(\*)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm),
[STRING\_AGG( col*\[*, sep*\]* )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm)

The addition DISTINCT is only possible for COUNT. The aggregate function PRODUCT can be used in this hierarchy navigator only. The addition ORDER BY is not possible in the function STRING\_AGG.

The aggregate functions work as specified in the [general description](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm), except that only columns col are allowed as arguments and that the result of the function COUNT is INT8 instead of INT4. For each aggregate function, a column with the alias name defined by AS is added to the tabular result of the hierarchy navigator. This column contains the result of the aggregate function in every row. These columns are not [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm). If \* or ...~\* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), they are read like a column of the SQL hierarchy specified as a source and are part of a structure or internal table created using an inline declaration @DATA(...) in the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

Hints

-   If the START WHERE condition selects multiple starting nodes, a separate row is inserted in the result set for each starting node for which a path exists to one of the hierarchy nodes selected by the WHERE condition. Child nodes with multiple parent nodes can also point to different paths to a starting node and hence to multiple rows for a hierarchy node.

-   Additional hierarchy columns such as START\_RANK and START\_ID as for the [hierarchy node navigators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_navi_glosry.htm "Glossary Entry") are not yet available, which means that the different paths in the result set cannot be distinguished from the content of hierarchy columns. It is currently advisable, therefore, to use the START WHERE condition to select exactly one starting node only.

-   The fact that the starting node determined by START WHERE is respected in the aggregation can be unwanted behavior and should be covered by the condition. This can be done, for example, by setting a condition for the hierarchy column that determines the parent node and is not set on the key of the node.

-   If the hierarchy navigator HIERARCHY\_ANCESTORS\_AGGREGATE is used, the syntax check is made in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

Executable Example

See [Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhier_ancs_agg_abexa.htm)

Addition 1

... START WHERE sql\_cond

Effect

The START WHERE condition selects the starting nodes for the paths in question for the hierarchy nodes selected by the WHERE condition. Columns of the SQL hierarchy, including the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm), can be used in the condition [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm).

If a selected starting node is an ancestor node of a node selected by WHERE, the latter is added to the result set.

Hints

-   If multiple starting nodes are ancestor nodes of a node selected by WHERE, the latter is also added to the result set multiple times.

-   If a selected starting node is not an ancestor node of a node selected by WHERE, the node is ignored.
    

Addition 2

... WHERE sql\_cond

Effect

The WHERE condition selects those nodes of the SQL hierarchy specified after SOURCE that can be added to the result set of the hierarchy navigator. Columns of the SQL hierarchy, including the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm), can be used in the condition [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm).

Hint

Meeting the WHERE condition is by itself not enough to add nodes to the result set. An ancestor node must also meet the START WHERE in this case.

Continue
![Example](exa.gif "Example") [SELECT, Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhier_ancs_agg_abexa.htm)