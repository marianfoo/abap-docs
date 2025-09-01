  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) →  [SELECT, FROM hierarchy\_aggregate\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20hierarchy_ancestors_aggregate%2C%20ABENSELECT_HIERARCHY_ANCS_AGG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

SELECT, hierarchy\_ancestors\_aggregate

Syntax

... HIERARCHY\_ANCESTORS\_AGGREGATE(
      SOURCE [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) *\[*AS tabalias*\]*
     *\[*START WHERE [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))*\]*
      MEASURES agg\_func1 AS alias1*\[*,
               agg\_func2 AS alias2*\[*,
               ...*\]**\]*
     *\[*WHERE [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))*\]* ...

Additions:

[1\. ... START WHERE sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE sql\_cond](#!ABAP_ADDITION_2@2@)

Effect

Specifies the [hierarchy aggregate navigator](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") HIERARCHY\_ANCESTORS\_AGGREGATE as the data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). It accesses the [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) specified after SOURCE and evaluates it. After the SQL hierarchy, AS can be used to specify an alias name for it that is valid within the parentheses and must be used in positions in which the SQL hierarchy is addressed.

The hierarchy navigator HIERARCHY\_ANCESTORS\_AGGREGATE aggregates the values of all [ancestor nodes](javascript:call_link\('abenancestor_node_glosry.htm'\) "Glossary Entry") located between [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") determined using WHERE and [start nodes](javascript:call_link\('abenstart_node_glosry.htm'\) "Glossary Entry") determined using START WHERE, including the values of the hierarchy nodes and start nodes themselves. A tabular result set is created consisting of all hierarchy nodes that

-   meet the WHERE condition and
-   have an ancestor node, including the hierarchy node itself, that meets the START WHERE condition as a start node.
-   Here, a separate row is created for each possible path to every start node that occurs under the ancestor nodes. If no WHERE condition is specified, this is done for all the hierarchy nodes. If no START WHERE condition is specified, the start node is the [ancestor node](javascript:call_link\('abenancestor_node_glosry.htm'\) "Glossary Entry") implicitly with the lowest [hierarchy level](javascript:call_link\('abenhierarchy_level_glosry.htm'\) "Glossary Entry").

For each node of the result, the aggregate functions specified after MEASURES are applied to the hierarchy nodes of that path that consists of the node and its ancestor nodes, including the start node. The aggregation is based on the start node, which is significant for the aggregate function STRING\_AGG. The result of each aggregate function is stored in the current node as the content of a separate column.

A comma-separated list of [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") agg\_func1, agg\_func2, ... must be specified after MEASURES. At least one aggregate function must be specified. Each aggregate function must be assigned an alias name alias1, alias2, ... The arguments of the aggregate functions can be individual columns [col](javascript:call_link\('abenabap_sql_columns.htm'\)) of the SQL hierarchy hierarchy, including their [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)). The [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ can be used to prefix the columns with the name of the SQL hierarchy. The following aggregate functions can be used:

[MIN( col )](javascript:call_link\('abensql_agg_func.htm'\)),
[MAX( col )](javascript:call_link\('abensql_agg_func.htm'\)),
[SUM( col )](javascript:call_link\('abensql_agg_func.htm'\)),
[PRODUCT( col )](javascript:call_link\('abensql_agg_func.htm'\)),
[COUNT( *\[*DISTINCT*\]* col )](javascript:call_link\('abensql_agg_func.htm'\)),
[COUNT( \* )](javascript:call_link\('abensql_agg_func.htm'\)), [COUNT(\*)](javascript:call_link\('abensql_agg_func.htm'\)),
[STRING\_AGG( col*\[*, sep*\]* )](javascript:call_link\('abensql_agg_func.htm'\))

The addition DISTINCT is only possible for COUNT. The aggregate function PRODUCT can be used in this hierarchy navigator only. The addition ORDER BY is not possible in the function STRING\_AGG.

The aggregate functions work as described in the [general description](javascript:call_link\('abensql_agg_func.htm'\)), except that only columns col are allowed as arguments and that the result of the function COUNT is INT8 instead of INT4. For each aggregate function, a column with the alias name defined by AS is added to the tabular result of the hierarchy navigator. This column contains the result of the aggregate function in every row. These columns are not [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)). If \* or ...~\* is specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), they are read like a column of the SQL hierarchy specified as a source and are part of a structure or internal table created using an inline declaration @DATA*|*@FINAL(...) in the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)).

Hints

-   If the START WHERE condition selects multiple start nodes, a separate row is inserted in the result set for each start node for which a path exists to one of the hierarchy nodes selected by the WHERE condition. Child nodes with multiple parent nodes can also point to different paths to a start node and hence to multiple rows for a hierarchy node.
-   Additional hierarchy columns such as START\_RANK and START\_ID as for the [hierarchy node navigators](javascript:call_link\('abenhierarchy_node_navi_glosry.htm'\) "Glossary Entry") are not yet available, which means that the different paths in the result set cannot be distinguished from the content of hierarchy columns. It is currently advisable, therefore, to use the START WHERE condition to select exactly one start node only.
-   The fact that the start node determined by START WHERE is respected in the aggregation may be unexpected behavior and should be respected when formulating the condition. This can be done, for example, by setting a condition for the hierarchy column that determines the parent node and is not set on the key of the node.
-   If the hierarchy navigator HIERARCHY\_ANCESTORS\_AGGREGATE is used, the syntax check is performed in [strict mode from ABAP release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Executable Example

See [Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenhier_ancs_agg_abexa.htm'\))

Addition 1   

... START WHERE sql\_cond

Effect

The START WHERE condition selects the start nodes for the paths to be aggregated for the hierarchy nodes selected by the WHERE condition. Columns of the SQL hierarchy, including the additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)), can be used in the condition [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)).

If a selected start node is an ancestor node of a node selected by WHERE, the latter is added to the result set.

Hints

-   If multiple start nodes are ancestor nodes of a node selected by WHERE, the latter is also added to the result set multiple times.
-   If a selected start node is not an ancestor node of a node selected by WHERE, the node is ignored.

Addition 2   

... WHERE sql\_cond

Effect

The WHERE condition selects those nodes of the SQL hierarchy specified after SOURCE that can be added to the result set of the hierarchy navigator. Columns of the SQL hierarchy, including the additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)), can be used in the condition [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)).

Hint

Meeting the WHERE condition is by itself not sufficient to add nodes to the result set. An ancestor node must also meet the START WHERE in this case.

Continue
![Example](exa.gif "Example") [SELECT, Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenhier_ancs_agg_abexa.htm'\))