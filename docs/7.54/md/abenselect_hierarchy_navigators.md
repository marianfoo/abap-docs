  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT - FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT - FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) → 

SELECT - FROM hierarchy\_navigator

Syntax

... [hierarchy\_node\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\))
  *|* [hierarchy\_agg\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)) ...

Effect

Specifies a [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in a ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

A hierarchy navigator accesses a [hierarchy](javascript:call_link\('abenhierarchy_glosry.htm'\) "Glossary Entry") and evaluates it. There are different kinds of hierarchy navigators:

-   [Hierarchy node navigators](javascript:call_link\('abenhierarchy_node_navi_glosry.htm'\) "Glossary Entry") [hierarchy\_node\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) select certain hierarchy nodes and their properties.

-   [Hierarchy aggregate navigators](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") [hierarchy\_agg\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) select certain hierarchy nodes and apply additional [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") to them.

The tabular result contains the hierarchy nodes selected by the [hierarchy navigator](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry"). The columns of the tabular result include the additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the hierarchy specified after SOURCE, plus further hierarchy columns specific to the hierarchy navigators where applicable.

The same applies to the additional hierarchy columns as when accessing a hierarchy [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)):

-   If \* or ...~\* is specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), they are not read and are not part of a structure or internal table created using an inline declaration @DATA(...) in the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)).

-   They can, however, be specified explicitly in the SELECT list and, like any column in the results set, can be used for columns [colname](javascript:call_link\('abenopen_sql_columns.htm'\)) specified in the other clauses of the query.

A hierarchy navigator publishes all associations of the hierarchy used implicitly and leaves its target data source unchanged.

Notes

-   Hierarchy navigators do not create any hierarchies:

-   They cannot be specified as a source in hierarchy navigators.

-   They cannot be published as a [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry").

-   On [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the results sets of the hierarchy navigators are based on the use of the identically named hierarchy navigation functions. More information can be found in the [documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.03/en-US).

Continue
[SELECT - FROM hierarchy\_node\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\))
[SELECT - FROM hierarchy\_aggregate\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\))