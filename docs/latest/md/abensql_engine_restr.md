---
title: "ABAP SQL Engine, Restrictions"
description: |
  The following language elements of ABAP SQL can be processed on the database but not yet by the ABAP SQL engine: -   Currently reads that use one of the following cannot be processed by the ABAP SQL Engine: -   Use of subqueries(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abens
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_restr.htm"
abapFile: "abensql_engine_restr.htm"
keywords: ["select", "update", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abensql", "engine", "restr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - ABAP SQL Engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Restrictions%2C%20ABENSQL_ENGINE_RESTR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL Engine, Restrictions

The following language elements of ABAP SQL can be processed on the database but not yet by the ABAP SQL engine:

-   Currently reads that use one of the following cannot be processed by the ABAP SQL Engine:
    -   Use of [subqueries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") except those used as [common table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") in the statement [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm).
    -   The statement [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) if access to database tables is involved. The ABAP SQL engine can process the statement WITH if only internal tables are accessed with [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) within the complete statement.
    -   Use of the ABAP SQL language element [GROUPING SETS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgrouping_sets_clause.htm).
    -   Use of the ABAP SQL [set operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_set_operators_glosry.htm "Glossary Entry") [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm).
    -   Access to a table or view for which a [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm) is defined.
    -   Use of a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") specified explicitly using the addition [CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_connection.htm). Specifying a [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_connection_glosry.htm "Glossary Entry") can be processed by the ABAP SQL engine,
    -   Use of the class [CL\_OSQL\_REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_osql_replace.htm) during a unit test.
    -   Access to a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_functions.htm) or a [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm).
-   Currently, the following elements of a [main query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmainquery_glosry.htm "Glossary Entry") cannot be processed by the ABAP SQL engine:
    -   [JOIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm) expressions if access to database tables is involved. The ABAP SQL engine can process joins where only internal tables are accessed with [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm).
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) except a standalone COUNT( \* ) in the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm) list.
    -   [SQL Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except those listed under [ABAP SQL Engine, Supported SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_expr.htm)
    -   [Hierarchy data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_data.htm): [CDS Hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchies.htm) and [Hierarchy functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_function_glosry.htm "Glossary Entry") [SELECT FROM HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_generator.htm) and [SELECT FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_navigators.htm).
    -   Additions [DISTINCT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm) and [FOR UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm).
    -   The [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm) clause and with it the [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) clause.
    -   The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) if the [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") is not specified in a WHERE condition.
-   Currently, the following elements of [SQL conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) in the WHERE clause cannot be processed by the ABAP SQL Engine:
    -   [SQL Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except those listed under [ABAP SQL Engine, Supported SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_expr.htm).
    -   Comparisons between different types except the following cases: Both operands have numeric types except DF16\_DEC or DF34\_DEC; both operands are character-like; both operands have the type RAW with the same length.