  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - ABAP SQL Engine](javascript:call_link\('abenabap_sql_engine.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Restrictions%2C%20ABENSQL_ENGINE_RESTR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL Engine, Restrictions

The following language elements of ABAP SQL can be processed on the database but not yet by the ABAP SQL engine:

-   Currently reads that use one of the following cannot be processed by the ABAP SQL Engine:
    -   Use of [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") except those used as [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") in the statement [WITH](javascript:call_link\('abapwith.htm'\)).
    -   The statement [WITH](javascript:call_link\('abapwith.htm'\)) if access to database tables is involved. The ABAP SQL engine can process the statement WITH if only internal tables are accessed with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) within the complete statement.
    -   Use of the ABAP SQL language element [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)).
    -   Use of the ABAP SQL [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), and [EXCEPT](javascript:call_link\('abapunion.htm'\)).
    -   Access to a table or view for which a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) is defined.
    -   Use of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") specified explicitly using the addition [CONNECTION](javascript:call_link\('abapselect_connection.htm'\)). Specifying a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be processed by the ABAP SQL engine,
    -   Use of the class [CL\_OSQL\_REPLACE](javascript:call_link\('abencl_osql_replace.htm'\)) during a unit test.
    -   Access to a [CDS table function](javascript:call_link\('abencds_table_functions.htm'\)) or a [CDS scalar function](javascript:call_link\('abencds_scalar_functions.htm'\)).
-   Currently, the following elements of a [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") cannot be processed by the ABAP SQL engine:
    -   [JOIN](javascript:call_link\('abapselect_join.htm'\)) expressions if access to database tables is involved. The ABAP SQL engine can process joins where only internal tables are accessed with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).
    -   [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) except a standalone COUNT( \* ) in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list.
    -   [SQL Expressions](javascript:call_link\('abapsql_expr.htm'\)) except those listed under [ABAP SQL Engine, Supported SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\))
    -   [Hierarchy data](javascript:call_link\('abenselect_hierarchy_data.htm'\)): [CDS Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\)) and [Hierarchy functions](javascript:call_link\('abenhierarchy_function_glosry.htm'\) "Glossary Entry") [SELECT FROM HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) and [SELECT FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)).
    -   Additions [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) and [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)).
    -   The [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause and with it the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.
    -   The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) if the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") is not specified in a WHERE condition.
-   Currently, the following elements of [SQL conditions](javascript:call_link\('abenasql_cond.htm'\)) in the WHERE clause cannot be processed by the ABAP SQL Engine:
    -   [SQL Expressions](javascript:call_link\('abapsql_expr.htm'\)) except those listed under [ABAP SQL Engine, Supported SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)).
    -   Comparisons between different types except the following cases: Both operands have numeric types except DF16\_DEC or DF34\_DEC; both operands are character-like; both operands have the type RAW with the same length.