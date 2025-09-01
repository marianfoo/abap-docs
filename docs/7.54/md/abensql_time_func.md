  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) →  [ABAP SQL - Special Functions](javascript:call_link\('abenopen_sql_special_functions.htm'\)) →  [ABAP SQL - Date Functions and Time Functions](javascript:call_link\('abenopen_sql_date_time_functions.htm'\)) → 

sql\_exp - Time Functions

Syntax

... TIMS\_IS\_VALID( time ) ...

Variants:

[1\. ... TIMS\_IS\_VALID( time )](#!ABAP_VARIANT_1@1@)

Effect

These SQL functions perform operations with arguments of the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)). The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis. [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) of matching data types can be specified as actual parameters. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except TIMS\_IS\_VALID returns a null value.

Variant 1

... TIMS\_IS\_VALID( time )

Effect

The function TIMS\_IS\_VALID determines whether time (if specified) contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)). The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid time produces the value 1 and all other input values (including the null value) produce the value 0.

Note

When used, this function requires the [strict mode from Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\)).

Example

Applies the time function to a time column of the database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_TIME\_FUNCTIONS executes this access to the table and represents the result.

DATA(time1) = sy-timlo.
...
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id      = 'X'
  tims1 = time1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS tims1 AS time1,
              tims\_is\_valid( tims1 ) AS valid1
       INTO @DATA(result).