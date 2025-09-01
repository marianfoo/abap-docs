  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT - FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) → 

SELECT - FROM hierarchy\_data

Syntax

... [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
  *|* [hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) ...

Effect

Specifies hierarchy data as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in a ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). Possible hierarchy data is:

-   A [hierarchy](javascript:call_link\('abenhierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))

-   A [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) that accesses a hierarchy.

Access to hierarchy data is not supported by all databases.

Notes

-   Hierarchy data sources are handled like any other data source. They can have alias names defined using [AS](javascript:call_link\('abapfrom_clause.htm'\)) and can be used in join expressions. There are no restrictions on which [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") they can be used in.

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports access to hierarchy data. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.

-   Accessing hierarchy data triggers the [strict mode from Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\)).

Example

Accesses the [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [HIERARCHY\_SIBLINGS](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) as the data source of a query. The hierarchy navigator uses a CDS hierarchy as a source.

DATA(id) = 5.
SELECT FROM HIERARCHY\_SIBLINGS(
              SOURCE demo\_cds\_simple\_tree( p\_id = 1 )
              START WHERE id = @id )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_sibling\_distance
       INTO TABLE @DATA(ancestors).

Continue
[SELECT - FROM hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
[SELECT - FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\))