  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - SQL Functions](javascript:call_link\('abenabap_sql_functions.htm'\)) → 

sql\_func - UUID Function

Syntax

... UUID( ) ...

Effect

Calls the UUID function as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in ABAP SQL. The function UUID does not have any parameters and creates a new unique [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") of the type [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 16 for each row read from the result set.

Hint

When used, the function UUID applies the [strict syntax check mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Example

Creation of a UUID for each row read from the DDIC database table SCARR. These UUIDs are unique for each row and for each execution of the statement.

SELECT carrid, carrname, uuid( ) AS uuid
       FROM scarr
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).