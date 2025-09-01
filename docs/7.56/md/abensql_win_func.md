---
title: "Syntax"
description: |
  ... AVG(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( col(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) AS dtype(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_avg_as.htm) )  MEDIA
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_win_func.htm"
abapFile: "abensql_win_func.htm"
keywords: ["select", "update", "do", "if", "case", "try", "data", "types", "abensql", "win", "func"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) → 

sql\_win - win\_func

Syntax

... [AVG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [col](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) *\[*[AS dtype](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_avg_as.htm)*\]* )
  *|* [MEDIAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [MAX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [MIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [SUM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [STDDEV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [VAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [CORR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm),[sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [CORR\_SPEARMAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm),[sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) )
  *|* [COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)( \* )
  *|* [COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm)(\*)
  *|* ROW\_NUMBER( )
  *|* RANK( )
  *|* DENSE\_RANK( )
  *|* NTILE( n )
  *|* LEAD*|*LAG( [sql\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)*\[*, diff*\[*, [sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)*\]**\]* )
  *|* FIRST\_VALUE*|*LAST\_VALUE( [col](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) ) ...

Variants:

[1\. ... AVG( ... ) *|* ... *|* COUNT(\*)](#!ABAP_VARIANT_1@1@)
[2\. ... ROW\_NUMBER( )](#!ABAP_VARIANT_2@2@)
[3\. ... RANK( )](#!ABAP_VARIANT_3@3@)
[4\. ... DENSE\_RANK( )](#!ABAP_VARIANT_4@4@)
[5\. ... NTILE( n )](#!ABAP_VARIANT_5@5@)
[6\. ... LEAD*|*LAG( sql\_exp1*\[*, diff*\[*, sql\_exp2*\]**\]* )](#!ABAP_VARIANT_6@6@)
[7\. ... FIRST\_VALUE*|*LAST\_VALUE( col )](#!ABAP_VARIANT_7@7@)

Effect

[Window function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwindow_function_glosry.htm "Glossary Entry") in a [window expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm). Window functions are:

-   [Aggregate functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaggregate_function_glosry.htm "Glossary Entry") AVG( ... ), ..., COUNT(\*) that can also be used in [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm).
-   [Ranking functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranking_function_glosry.htm "Glossary Entry") ROW\_NUMBER( ), RANK( ), DENSE\_RANK( ), and NTILE (n) that can only be used in [window expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).
-   [Value functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_function_glosry.htm "Glossary Entry") LEAD( ... ), LAG( ... ), FIRST\_VALUE ( ... ), LAST\_VALUE ( ... ) that can be used only in [window expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).

Variant 1   

... AVG( ... ) *|* ... *|* COUNT(\*)

Effect

Specifies one of the aggregate functions [AVG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [MEDIAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [MAX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [MIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [STDDEV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [VAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [CORR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [CORR\_SPEARMAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [SUM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), [COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), or [COUNT(\*)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm) as a window function. The aggregate functions evaluate the rows of the current window or of the frame defined by an addition ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm). The aggregate functions are applied as in the [general description](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), with the following differences:

-   The addition DISTINCT is not allowed in a window expression.
-   The result of the function COUNT has the data type INT8 and not INT4.
-   When used in window expressions, STDDEV and VAR can have only data type FLTP as argument.

The same applies to the arguments of aggregate functions as in the [general description](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm), with the difference that the argument of an aggregate function in a window expression can itself, as a window function, be an aggregate function. This is the precise case when a grouping is made using the [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) clause in the current query. The windows on the combined result set are then defined and the aggregate expressions allowed as specified columns of the current [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) can be used either as standalone expressions or as part of an SQL expression as an argument of window functions of the window expressions there. A window function then determines its result from the aggregated values of the rows of the current window.

Hint

The addition DISTINCT cannot be specified, which means that COUNT( sql\_exp ) can only be used to count rows that do not contain a null value, but not rows with different results of sql\_exp.

Executable Example

[Window Expressions with Grouping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_group_abexa.htm)

Variant 2   

... ROW\_NUMBER( )

Effect

Specifies the ranking function ROW\_NUMBER as a window function. This ranking function assigns each row a row number of the data type INT8 and does not have an argument. The rows of each window are numbered starting with 1. This numbering takes place in the order in which the rows of a window are processed. The order is either undefined or can be defined by specifying the addition ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).

Hint

If ORDER BY is not specified after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm), ROW\_NUMBER still assigns a unique row number, but these numbers are not sorted.

Executable Examples

[Examples of Window Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_abexas.htm)

Variant 3   

... RANK( )

Effect

Specifies the ranking function RANK as a window function. This ranking function assigns each row a rank of the data type INT8 and does not have an argument. It can only be specified together with ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).

The rank of a row is the position of this row in the ranking defined by the addition ORDER BY after OVER and is defined as follows:

-   All rows that occur more than once with respect to the sort criterion have the same rank. This rank is the lowest row number in this group, as determined by the function ROW\_NUMBER.
-   The first group of each window starts with the value 1.

Hint

If a window does not contain any multiple rows with respect to the sort criterion, RANK produces the same result as ROW\_NUMBER. If any other cases, a ranking determined by RANK is not gap-free. DENSE\_RANK can be used to remove gaps.

Executable Example

[Window Expressions with Sort](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_order_by_abexa.htm)

Variant 4   

... DENSE\_RANK( )

Effect

Specifies the ranking function DENSE\_RANK as a window function. This ranking function assigns each row a rank of the data type INT8 and does not have an argument. It can only be specified together with ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).

DENSE\_RANK works in largely the same way as RANK, but counts without any gaps, starting from the first group, and does not determine the rank using the lowest row number of groups of identical values with respect to the sort criterion.

Hint

If a window does not contain any multiple rows with respect to the sort criterion, DENSE\_RANK produces the same result as RANK.

Executable Example

[Window Expressions with Sort](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_order_by_abexa.htm)

Variant 5   

... NTILE( n ) OVER( *\[*PARTITION BY [sql\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)*\]*
               ORDER BY [col](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) *\[*ASCENDING*|*DESCENDING*\]*) ...

Effect

Specifies the ranking function NTILE as a window function. This window function divides the rows of a window into n buckets. The goal is to fill all buckets with the same number of rows by following the rule specified after ORDER BY.

If the number of rows of the window m cannot be distributed equally between the number of buckets n, the remainder r is distributed in such a way that the first (m [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_operators.htm) n) buckets each contain one element more. The buckets are numbered starting with the start value 1 and the result of the NTILE function is the number of the bucket a particular row belongs to.

n must be [host variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm), a [host expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm), or a [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) of type b, s,i, or int8 which represents a positive integer. The [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm)\-clause including ORDER BY is mandatory.

If n is negative, for literals and host constants, a syntax error occurs. If n is a variable or an expression, instead of a syntax error, a database error and its respective exception CX\_SY\_OPEN\_SQL\_DB can occur. The result of the NTILE function is always of type INT8.

Hint

Since the maximum number of rows in a bucket can vary by 1, rows with the same value can also be in different buckets.

Example

Sorting of all employees listed in table DEMO\_EMPLOYEES by their salary and distributes them into five salary groups. Group 1 has one entry more, as the number of employees (11) cannot be distributed into five groups of equal size.

SELECT name,
       salary,
       NTILE( 5 ) OVER( ORDER BY salary ) AS ntile
       FROM demo\_employees
       INTO TABLE @DATA(result).

Executable Example

[Window Function NTILE.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_ntile_abexa.htm)

Variant 6   

... LEAD*|*LAG( sql\_exp1*\[*, diff*\[*, sql\_exp2*\]**\]*

Effect

Specifies the value functions LEAD or LAG as a window function. They can only be specified together with ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).

The result of the functions is the value of the SQL expression [sql\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) for the row of the current window defined by the addition diff or the box defined by the addition ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm). For diff, a [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) or a [host constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm) with the ABAP type b, s, i, int8 can be specified, whose value is a positive number other than 0.

-   For the function LEAD, diff determines the row positioned the corresponding distance after the current row.
-   For the function LAG, diff determines the row positioned the corresponding distance in front of the current row.

If diff is not specified, the value 1 is used implicitly. In the case of LEAD, this is the row that follows directly and in the case of LAG, the directly preceding row. If the row determined by diff is not in the current window, the result is the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry") by default. If the optional SQL expression [sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) is specified, it is evaluated and returned for the current row in cases where the row does not exist.

The result of the functions LEAD and LAG has the following data type:

-   If [sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) is not specified, the data type is determined by [sql\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm).
-   If [sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) is specified, the results of sql\_exp1 and sql\_exp2 must match in a way that a common result type can be determined: The data types must either be the same or the data type of an expression must represent the value of the other expression. The result has the dictionary type of the expression with the largest value range.

Hints

-   The window functions LEAD or LAG are suitable for calculations, such as determining the difference between values in the current row and values of the preceding or following rows.
-   If the window functions LEAD or LAG are used, the syntax check is performed in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_754.htm).

Example

SELECT statement with the window functions LEAD and LAG as operands of an [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_arith.htm). The addition [PARTITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) is not specified, which means there is only one window with all rows of the result set. Both LEAD and LAG have only one argument each, which means that the difference between the values of the column NUM1 is calculated using the directly following or preceding row, and any nonexistent rows produce null values. The latter are defined using a [null indicator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_indicator_glosry.htm "Glossary Entry"). The program DEMO\_SELECT\_OVER\_LEAD\_LAG\_DIFF uses this SELECT statement and, when executed, the program displays the result.

SELECT num1 AS number,
       num1 - LEAD( num1 ) OVER( ORDER BY id ) AS diff\_lead,
       num1 - LAG(  num1 ) OVER( ORDER BY id ) AS diff\_lag
       FROM demo\_expressions
       ORDER BY id
       INTO TABLE @DATA(lead\_lag\_diffs)
                  INDICATORS NULL STRUCTURE null\_ind.

Executable Example

[Window Functions LEAD and LAG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_lead_lag_abexa.htm)

Variant 7   

... FIRST\_VALUE*|*LAST\_VALUE( [col](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) )

Effect

Specifies the value functions FIRST\_VALUE and LAST\_VALUE as a window function. The FIRST\_VALUE function returns the first value of a sorted set of values, the LAST\_VALUE function returns the last value of a sorted set of values.

If the value is null or if the expression is empty, null is returned (see example, row H).

OVER and ORDER BY are mandatory. PARTITION BY is optional. If a window is divided into partitions, the FIRST\_VALUE/ LAST\_VALUE function returns a result for each partition (see example). If there's no PARTITON BY clause, the functions work on the entire window.

With the LAST\_VALUE function, framing is an important aspect to consider. The default frame is [ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm), so the LAST\_VALUE function always returns the value from the current row. To find the last value for a partition or a window, the correct frame has to be specified explicitly: [ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm).

Example

The program DEMO\_SELECT\_FIRST\_LAST divides the rows from the DEMO\_UPDATE table into three partitions, depending on their value in COL1. Within the partitions, the rows are ordered by their value in COL3.

The column FIRST\_VALUE returns the first value of COL2 for each partition.

The column LAST\_VALUE does not return the last value. As described above, the default frame is from the first row to the current row. If COL3 contains duplicate values, the rows are considered equal and the last value from the group of equals is returned. To get the last value of COL2 of the partition, the frame size has to be specified explicitly, as demonstrated in LAST\_VALUE\_CORRECT.

In this example, COL3 has multiple duplicate values. The key field - here the field ID - is used to sort rows with the same value.

SELECT
      id,
      col1,
      col2,
      col3,
      FIRST\_VALUE( col2 ) OVER( PARTITION BY col1 ORDER BY col3 )
                  AS first\_value,
      LAST\_VALUE( col2 ) OVER( PARTITION BY col1 ORDER BY col3 )
                  AS last\_value,
      LAST\_VALUE( col2 ) OVER( PARTITION BY col1 ORDER BY col3
                  ROWS BETWEEN UNBOUNDED PRECEDING
                  AND UNBOUNDED FOLLOWING )
                  AS last\_value\_correct
      FROM demo\_update
      INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

![Figure](bdoc_first_last_value.png)