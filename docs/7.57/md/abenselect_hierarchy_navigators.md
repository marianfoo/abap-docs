  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM hierarchy_navigator, ABENSELECT_HIERARCHY_NAVIGATORS, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, FROM hierarchy\_navigator

Syntax

... [hierarchy\_node\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\))
  *|* [hierarchy\_agg\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)) ...

Effect

Specifies a [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

A hierarchy navigator accesses a [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") and evaluates it. There are different kinds of hierarchy navigators:

-   [Hierarchy node navigators](javascript:call_link\('abenhierarchy_node_navi_glosry.htm'\) "Glossary Entry") [hierarchy\_node\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) select certain hierarchy nodes and their properties.
-   [Hierarchy aggregate navigators](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") [hierarchy\_agg\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) select certain hierarchy nodes and apply additional [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") to them.

The tabular result contains the hierarchy nodes selected by the [hierarchy navigator](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry"). The columns of the tabular result include the additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified after SOURCE, as well as any other hierarchy columns that are specific to the hierarchy navigators where applicable.

The same applies to the additional hierarchy columns as when accessing a SQL hierarchy [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)):

-   If \* or ...~\* is specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), they are not read and are not part of a structure or internal table created using an inline declaration @DATA*|*@FINAL(...) in the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)).
-   They can, however, be listed explicitly in the SELECT list and, like any column in the result set, can be used for columns [colname](javascript:call_link\('abenabap_sql_columns.htm'\)) specified in the other clauses of the query.

A hierarchy navigator exposes all associations of the SQL hierarchy used implicitly and leaves its [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") unchanged.

Hints

-   Hierarchy navigators do not create any SQL hierarchies:
    -   They cannot be specified as a source in hierarchy navigators.
    -   They cannot be exposed as a [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry").
-   On [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the result sets of the hierarchy navigators are based on the use of the identically named hierarchy navigation functions. For more information, see the SAP HANA documentation.
-   Since hierarchies generated from the START WHERE condition are buffered on the database, it is advisable to use hierarchy navigators to evaluate a SQL hierarchy. For example, finding the descendant nodes of a node with the [hierarchy node navigator](javascript:call_link\('abenhierarchy_node_navi_glosry.htm'\) "Glossary Entry") [HIERARCHY\_DESCENDANTS](abenselect_hierarchy_node_navis.htm#!ABAP_VARIANT_1@1@) is more efficient than generating a new SQL hierarchy with this node as a root node. Furthermore, the hierarchy navigators add hierarchy columns that are not readily available otherwise.

Continue
[SELECT, FROM hierarchy\_node\_navigator](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\))
[SELECT, FROM hierarchy\_aggregate\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\))