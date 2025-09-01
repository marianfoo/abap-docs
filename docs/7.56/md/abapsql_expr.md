  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) → 

ABAP SQL - SQL Expressions sql\_exp

Syntax

... [sql\_elem](javascript:call_link\('abensql_elem.htm'\))
  *|* [sql\_func](javascript:call_link\('abensql_builtin_func.htm'\))
  *|* [sql\_arith](javascript:call_link\('abensql_arith.htm'\))
  *|* [sql\_cast](javascript:call_link\('abensql_cast.htm'\))
  *|* [sql\_string](javascript:call_link\('abensql_string.htm'\))
  *|* [sql\_case](javascript:call_link\('abensql_case.htm'\))
  *|* [sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\))
  *|* [sql\_win](javascript:call_link\('abapselect_over.htm'\))...

Effect

SQL expressions are expressions that generally can be specified in the following positions of ABAP SQL statements:

-   As [columns specified](javascript:call_link\('abapselect_clause_col_spec.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\))
-   As arguments of certain [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) and in the [HAVING clause](javascript:call_link\('abaphaving_clause.htm'\))
-   As operands of [SQL conditions](javascript:call_link\('abenasql_cond.htm'\)):
    -   On the left side of an [SQL condition for statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\))
    -   On the left and right side of an [SQL condition for expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))
-   As a grouping criterion after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))
-   As a window criterion after [PARTITION](javascript:call_link\('abapselect_over.htm'\))

Some expressions, such as CAST expressions, can also be specified at other positions and built-in functions can be specified on the right side of SQL conditions for statements. This is documented for the respective positions.

SQL expressions are passed to the database system, executed there, and the result is passed to the AS ABAP if requested.

In general, the operands of SQL expressions can also be SQL expressions whose result must have a suitable data type. There are restrictions to individual operand positions, which are described for these.

The following SQL expressions exist:

-   [Elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\))
-   [Calls of built-in SQL functions](javascript:call_link\('abenabap_sql_functions.htm'\))
-   [Arithmetic expressions](javascript:call_link\('abensql_arith.htm'\))
-   [Cast expressions](javascript:call_link\('abensql_cast.htm'\))
-   [String expressions](javascript:call_link\('abensql_string.htm'\))
-   [Case distinctions](javascript:call_link\('abensql_case.htm'\))
-   [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\))
-   [Window expressions](javascript:call_link\('abapselect_over.htm'\))

Every expression can be enclosed in [parentheses](javascript:call_link\('abensql_exp_parentheses.htm'\)). The result of an expression is used in the ABAP SQL statement in accordance with the operand position, with the data type in nested expressions based on the outermost expression.

Hints

-   No alias names defined using [AS](javascript:call_link\('abapselect_list.htm'\)) can be used as operands of SQL expressions. This also means that none of the expressions used in a SELECT list can be specified as operands using their alias names.
-   SQL expressions cannot currently be used together with the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)). An exception to this rule are individual columns and an individually specified aggregate expression COUNT( \* ).
-   [Certain SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\)) can be calculated in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). If the remaining SQL expressions are used, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed.
-   When SQL expressions are used other than for individually specified columns or individually specified aggregate expressions, the syntax check is performed in a [strict mode as of Release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check. If other SQL expressions are specified along with [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) or the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), the syntax check is performed in [strict mode as of Release 7.40, SP08](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\)). Using [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) as operands of SQL expressions results in the [strict mode as of Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Example

Syntax example for specifying SQL expressions in different operand positions in a [SELECT](javascript:call_link\('abapselect.htm'\)) statement

SELECT FROM sflight
       FIELDS CONCAT( carrid, connid )   AS key,
              MAX( seatsmax - seatsocc ) AS max\_free,
              MIN( seatsmax - seatsocc ) AS min\_free
        GROUP BY carrid, connid
        HAVING SUM( seatsmax - seatsocc ) > 100
        ORDER BY key
        INTO TABLE @DATA(itab).

Continue
[sql\_exp - sql\_elem](javascript:call_link\('abensql_elem.htm'\))
[sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\))
[sql\_exp - sql\_arith](javascript:call_link\('abensql_arith.htm'\))
[sql\_exp - sql\_cast](javascript:call_link\('abensql_cast.htm'\))
[sql\_exp - sql\_string](javascript:call_link\('abensql_string.htm'\))
[sql\_exp - sql\_case](javascript:call_link\('abensql_case.htm'\))
[sql\_exp - sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\))
[sql\_exp - sql\_win](javascript:call_link\('abapselect_over.htm'\))
[sql\_exp - ( )](javascript:call_link\('abensql_exp_parentheses.htm'\))