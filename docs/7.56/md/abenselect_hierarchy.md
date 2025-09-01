  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) → 

SELECT, FROM hierarchy

Syntax

... [cds\_hierarchy](javascript:call_link\('abenselect_cds_hierarchy.htm'\))
  *|* [HIERARCHY( ... )](javascript:call_link\('abenselect_hierarchy_generator.htm'\))
  *|* [cte\_hierarchy](javascript:call_link\('abenselect_cte_hierarchy.htm'\))

Effect

Specifies an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") as a data source in an ABAP SQL query.

-   The following can be maintained:
    -   A [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") [cds\_hierarchy](javascript:call_link\('abenselect_cds_hierarchy.htm'\))
    -   The [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\))
    -   A [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry") [cte\_hierarchy](javascript:call_link\('abenselect_cte_hierarchy.htm'\))
-   An SQL hierarchy can be specified in the following places:
    -   As a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
    -   As the source of a [hierarchy navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\))
    -   As the source of the hierarchy generator [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\))

An SQL hierarchy is a tabular set of rows that represent the [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry").

-   A CDS hierarchy and the hierarchy generator HIERARCHY create their result set from the data source defined for them based on a [parent-child relationship](javascript:call_link\('abenpcr_glosry.htm'\) "Glossary Entry") itself defined in a [hierarchy association](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry").
-   A [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry") represents the hierarchy that is specified as the only data source in the subquery of the CTE under the name of the CTE in the subsequent queries of the current [WITH](javascript:call_link\('abapwith.htm'\)) statement.

The columns of an SQL hierarchy are composed as follows:

-   Components of the data source used when the hierarchy is created by a CDS hierarchy or created by the hierarchy generator.
    -   In the case of CDS hierarchies and CTE hierarchies, these are exactly the components listed here.
    -   In the case of the hierarchy generator HIERARCHY, these are all components of the source of the SQL hierarchy.
-   Additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)). For each hierarchy node, the hierarchy columns contain its [hierarchy attributes](javascript:call_link\('abenhierarchy_attribute_glosry.htm'\) "Glossary Entry"), which describe certain hierarchy-specific properties.

When an SQL hierarchy is used as a data source in an ABAP SQL query, the additional hierarchy columns can be accessed as follows:

-   In the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list
    -   Hierarchy columns can be specified as regular columns using [colname](javascript:call_link\('abenabap_sql_columns.htm'\)) and then become part of the result set of the query.
    -   If \* or ...~\* is specified, hierarchy columns are not part of the result set of the query. Only the components of the source of the SQL hierarchy are respected. In this case, the hierarchy columns are also ignored by any structure or internal table created in the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) by an inline declaration @DATA(...).
-   In other clauses, hierarchy columns can be specified regardless of the SELECT list and are evaluated accordingly.

Hints

-   It is possible to evaluate the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) in a query, but this is not mandatory. In most cases, only the data content of an SQL hierarchy is of interest and not the technical properties of the hierarchy nodes.
-   On [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the result sets of CDS hierarchies and the hierarchy generator HIERARCHY are created using the SAP HANA hierarchy generator function HIERARCHY and similar. For more information, see [SAP HANA documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).
-   For a For a summarized overview see the cheat sheet [Working with Hierarchies](javascript:call_link\('abapsheet_abap_sql_hierarchies.htm'\)).

Examples

The following programs demonstrate the three ways of specifying SQL hierarchies as the data source of a SELECT statement while reading all possible [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)).

-   DEMO\_HIERARCHY\_TREE
-   DEMO\_HIERARCHY\_PARENT\_CHILD

Continue
[SELECT, FROM cds\_hierarchy](javascript:call_link\('abenselect_cds_hierarchy.htm'\))
[SELECT, FROM HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\))
[SELECT, FROM cte\_hierarchy](javascript:call_link\('abenselect_cte_hierarchy.htm'\))
[Hierarchy Columns](javascript:call_link\('abenddddl_hierarchy.htm'\))