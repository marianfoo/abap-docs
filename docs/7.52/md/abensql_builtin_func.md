  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_func

Syntax

... [sql\_func( ... )](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) ...

Effect

Calls a [built-in function](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) as an SQL expression in Open SQL. The result is the return value of the function with the associated dictionary type.

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

-   [SQL expressions, Coalesce function](javascript:call_link\('abensql_expr_coalesce_abexa.htm'\))