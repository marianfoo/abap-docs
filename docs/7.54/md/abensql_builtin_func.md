  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_func

Syntax

... [sql\_func( ... sql\_exp ... )](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) ...

Effect

Calling a [predefined function](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) in ABAP SQL. The result is the return value of the function with the associated dictionary type. As a rule, the arguments of the built-in functions cover one or more SQL expressions.

Notes

-   Specifying a predefined function always means specifying an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)). Predefined functions can only be called for operand positions for which SQL expressions are possible.

-   [Certain built-in functions](javascript:call_link\('abenbuffer_expressions.htm'\)) can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). If any other functions are used, [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") is bypassed.
    

Example

Uses the built-in functions [CONCAT](javascript:call_link\('abensql_string_func.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abensql_string_func.htm'\)), and [LOWER](javascript:call_link\('abensql_string_func.htm'\)) in a [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

SELECT FROM   spfli
       FIELDS CONCAT( CONCAT( LOWER( carrid ), '\_' ),
                              LOWER( CAST( connid AS CHAR ) ) ) AS key,
              CONCAT\_WITH\_SPACE( CONCAT( cityfrom,
                                 ',' ), cityto, 1 ) AS cities
       WHERE carrid = '...'
       INTO TABLE @DATA(result).

Executable Examples

-   [SQL expressions, arithmetic calculations](javascript:call_link\('abensql_expr_arith_abexa.htm'\))

-   [String functions](javascript:call_link\('abensql_string_func_abexa.htm'\))

-   [SQL Expressions, Coalesce Function](javascript:call_link\('abensql_expr_coalesce_abexa.htm'\))

Continue
[ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\))