  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20FROM%20hierarchy_data%2C%20ABENSELECT_HIERARCHY_DATA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, FROM hierarchy\_data

Syntax

... [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
  *|* [hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) ...

Effect

Specifies hierarchy data as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). Possible hierarchy data is:

-   An [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
-   A [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) that accesses an SQL hierarchy.

Access to hierarchy data is not supported by all databases.

Hints

-   Hierarchy data as data sources are handled like any other data source. They can have alias names defined using [AS](javascript:call_link\('abapfrom_clause.htm'\)) and can be used in join expressions. There are no restrictions on which [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") they can be used in.
-   Hierarchy data cannot be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)). An ABAP SQL statement that accesses hierarchy data bypasses the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports access to hierarchy data. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.
-   Accessing hierarchy data enforces the [strict mode from ABAP release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Example

Access to the [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [HIERARCHY\_SIBLINGS](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) as the data source of a query. The hierarchy navigator uses a CDS hierarchy as a source.

FINAL(id) = 5.
SELECT FROM HIERARCHY\_SIBLINGS(
              SOURCE demo\_cds\_simple\_tree( p\_id = 1 )
              START WHERE id = @id )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_sibling\_distance
       INTO TABLE @FINAL(ancestors).

Continue
[SELECT, FROM hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
[SELECT, FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\))
![Example](exa.gif "Example") [ABAP SQL - Working with Hierarchies](javascript:call_link\('abensheet_abap_sql_hiera_abexa.htm'\))