  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_func%2C%20ABENSQL_BUILTIN_FUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_func

Syntax

... [sql\_func( ... sql\_exp ... )](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) ...

Effect

Calls a [built-in function](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) in ABAP SQL. The result is the return value of the function with the associated dictionary type. As a rule, the arguments of the built-in functions cover one or more SQL expressions.

Hints

-   Specifying a built-in function always means specifying an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)). Built-in functions can only be called in operand positions for which SQL expressions are possible.
-   [Certain SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)) can be calculated by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry"). If any other SQL expressions are used, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Example

Use of the built-in functions [CONCAT](javascript:call_link\('abensql_string_func.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abensql_string_func.htm'\)), and [LOWER](javascript:call_link\('abensql_string_func.htm'\)) in a [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

SELECT FROM   spfli
       FIELDS CONCAT( CONCAT( LOWER( carrid ), '\_' ),
                              LOWER( CAST( connid AS CHAR ) ) ) AS key,
              CONCAT\_WITH\_SPACE( CONCAT( cityfrom,
                                 ',' ), cityto, 1 ) AS cities
       WHERE carrid = '...'
       INTO TABLE @FINAL(result).

Executable Examples

-   [SQL expressions, arithmetic calculations](javascript:call_link\('abensql_expr_arith_abexa.htm'\))
-   [String functions](javascript:call_link\('abensql_string_func_abexa.htm'\))
-   [SQL Expressions, Coalesce Function](javascript:call_link\('abensql_expr_coalesce_abexa.htm'\))

Continue
[ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\))