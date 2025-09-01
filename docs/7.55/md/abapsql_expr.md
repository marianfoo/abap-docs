  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - SQL Expressions sql\_exp

Syntax

... [sql\_elem](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm)
  *|* [sql\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_builtin_func.htm)
  *|* [sql\_arith](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_arith.htm)
  *|* [sql\_cast](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm)
  *|* [sql\_string](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string.htm)
  *|* [sql\_case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_case.htm)
  *|* [sql\_agg](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm)
  *|* [sql\_win](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm)...

Effect

SQL expressions are expressions that generally can be specified in the following positions of ABAP SQL statements:

-   As [columns specified](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm)

-   As arguments of certain [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) and in the [HAVING clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm)

-   As operands of [SQL conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm):

-   On the left side of an [SQL condition for statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm)

-   On the left and right side of an [SQL condition for expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm)

-   As a grouping criterion after [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm)

-   As a window criterion after [PARTITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm)

Some expressions, such as CAST expressions, can also be specified at other positions and built-in functions can be specified on the right side of SQL conditions for statements. This is documented for the respective positions.

SQL expressions are passed to the database system, executed there, and the result is passed to the AS ABAP if requested.

In general, the operands of SQL expressions can also be SQL expressions whose result must have a suitable data type. There are restrictions to individual operand positions, which are described for these.

The following SQL expressions exist:

-   [Elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm)

-   [Calls of built-in SQL functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_functions.htm)

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_arith.htm)

-   [Cast expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm)

-   [String expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string.htm)

-   [Case distinctions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_case.htm)

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm)

-   [Window expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm)

Every expression can be enclosed in [parentheses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_exp_parentheses.htm). The result of an expression is used in the ABAP SQL statement in accordance with the operand position, with the data type in nested expressions based on the outermost expression.

Hints

-   No alias names defined using [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) can be used as operands of SQL expressions. This also means that none of the expressions used in a SELECT list can be specified as operands using their alias names.

-   SQL expressions cannot currently be used together with the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm). An exception to this rule are individual columns and an individually specified aggregate expression COUNT( \* ).

-   [Certain SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuffer_expressions.htm) can be calculated in the [table buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If the remaining SQL expressions are used, [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed.

-   When SQL expressions are used other than for individually specified columns or individually specified aggregate expressions, the syntax check is performed in a [strict mode as of Release 7.40, SP05](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check. If other SQL expressions are specified along with [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) or the addition [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm), the syntax check is performed in [strict mode as of Release 7.40, SP08](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm). Using [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) as operands of SQL expressions results in the [strict mode as of Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

Example

Syntax example for specifying SQL expressions in different operand positions in a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement

SELECT FROM sflight
       FIELDS CONCAT( carrid, connid )   AS key,
              MAX( seatsmax - seatsocc ) AS max\_free,
              MIN( seatsmax - seatsocc ) AS min\_free
        GROUP BY carrid, connid
        HAVING SUM( seatsmax - seatsocc ) > 100
        ORDER BY key
        INTO TABLE @DATA(itab).

Continue
[sql\_exp - sql\_elem](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm)
[sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_builtin_func.htm)
[sql\_exp - sql\_arith](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_arith.htm)
[sql\_exp - sql\_cast](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm)
[sql\_exp - sql\_string](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string.htm)
[sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_case.htm)
[sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm)
[sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm)
[sql\_exp - ( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_exp_parentheses.htm)