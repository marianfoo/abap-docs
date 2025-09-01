  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20SQL%20Functions%2C%20ABENABAP_SQL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - SQL Functions

The following built-in [SQL functions](javascript:call_link\('abensql_functions.htm'\)) can either be specified as standalone functions in ABAP SQL or as operands of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), in all places where SQL expressions are possible.

-   [Numeric functions](javascript:call_link\('abensql_arith_func.htm'\))
-   [String functions](javascript:call_link\('abensql_string_func.htm'\))
-   [Coalesce function](javascript:call_link\('abensql_coalesce.htm'\))
-   [UUID function](javascript:call_link\('abensql_uuid.htm'\))

Hint

[Certain SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)) can be calculated by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry"). If any other SQL expressions are used, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[sql\_func - Numeric Functions](javascript:call_link\('abensql_arith_func.htm'\))
[sql\_func - String Functions](javascript:call_link\('abensql_string_func.htm'\))
[sql\_func - Coalesce Function](javascript:call_link\('abensql_coalesce.htm'\))
[sql\_func - UUID Function](javascript:call_link\('abensql_uuid.htm'\))