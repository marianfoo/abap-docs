---
title: "Syntax"
description: |
  ... AVG(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( col(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) AS dtype(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm) )  MAX(
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm"
abapFile: "abensql_win_func.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abensql", "win", "func"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm) → 

sql\_exp - win\_func

Syntax

... [AVG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) *\[*[AS dtype](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm)*\]* )
  *|* [MAX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* [MIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* [SUM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* [COUNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* [COUNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)( \* )
  *|* [COUNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)(\*)
  *|* ROW\_NUMBER( )
  *|* RANK( )
  *|* DENSE\_RANK( )
  *|* LEAD*|*LAG( [sql\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)*\[*, diff*\[*, [sql\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)*\]**\]* ) ...

Variants:

[1\. ... AVG( ... ) *|* ... *|* COUNT(\*)](#!ABAP_VARIANT_1@1@)
[2\. ... ROW\_NUMBER( )](#!ABAP_VARIANT_2@2@)
[3\. ... RANK( )](#!ABAP_VARIANT_3@3@)
[4\. ... DENSE\_RANK( )](#!ABAP_VARIANT_4@4@)
[5\. ... LEAD*|*LAG( sql\_exp1*\[*, diff*\[*, sql\_exp2*\]**\]* )](#!ABAP_VARIANT_5@5@)

Effect

[Window function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_function_glosry.htm "Glossary Entry") in a [window expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm). Window functions are:

-   [Aggregate functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_function_glosry.htm "Glossary Entry") AVG( ... ), ..., COUNT(\*) that can also be used in [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm).
    
-   [Ranking functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranking_function_glosry.htm "Glossary Entry") ROW\_NUMBER( ), RANK( ), and DENSE\_RANK( ) that can only be used in [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).
    
-   [Value functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_function_glosry.htm "Glossary Entry") LEAD( ... ), LAG( ... ) that can be used only in [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).
    

Variant 1

... AVG( ... ) *|* ... *|* COUNT(\*)

Effect

Specifies one of the aggregate functions [MAX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm), [MIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm), [SUM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm), [COUNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm), or [COUNT(\*)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm) as a window function. The aggregate functions evaluate the rows of the current window or of the frame defined by an addition ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm). The aggregate functions are applied as in the [general description](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm), with the following differences:

-   The addition DISTINCT is not allowed in a window expression.
    
-   The result of the function COUNT has the data type INT8 and not INT4.
    

The same applies to the arguments of aggregate functions as in the [general description](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm), with the difference that the argument of an aggregate function in a window expression can itself, as a window function, be an aggregate function. This is the precise case when a grouping is made using the [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause in the current query. The windows on the combined results set are then defined and the aggregate expressions permitted as specified columns of the current [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) can be used either as standalone expressions or as part of an SQL expression (as an argument of window functions of the window expressions in question). A window function then determines its result from the aggregated values of the rows of the current window.

Note

The addition DISTINCT cannot be specified, which means that COUNT( sql\_exp ) can only be used to count rows that do not contain a null value and cannot be used to count rows with different results of sql\_exp.

Executable Example

[Window Expressions with Grouping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_group_abexa.htm)

Variant 2

... ROW\_NUMBER( )

Effect

Specifies the ranking function ROW\_NUMBER as a window function. This ranking function grants each row a row number of the data type INT8 and does not have an argument. The rows of each window are numbered starting with 1. This numbering takes place in the order in which the rows of a window are processed. The order is either undefined or can be defined by specifying the addition ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).

Note

If ORDER BY is not specified after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm), ROW\_NUMBER still grants a unique row number, but these numbers are not ordered.

Executable Examples

[Examples of Window Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_abexas.htm)

Variant 3

... RANK( )

Effect

Specifies the ranking function RANK as a window function. This ranking function grants each row a rank of the data type INT8 and does not have an argument. It can only be specified together with ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).

The rank of a row is the position of this row in the ranking defined by the addition ORDER BY after OVER and is defined as follows:

-   All rows that occur more than once (with respect to the sort criterion) have the same rank. This rank is the lowest row number in this group, as determined by the function ROW\_NUMBER.
    
-   The first group of each window starts with the value 1.
    

Note

If a window does not contain any multiple rows (with respect to the sort criterion), RANK produces the same result as ROW\_NUMBER. If any other cases, a ranking determined by RANK is not gap-free. DENSE\_RANK can be used to remove gaps.

Executable Example

[Window Expressions with Sort](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_order_by_abexa.htm)

Variant 4

... DENSE\_RANK( )

Effect

Specifies the ranking function DENSE\_RANK as a window function. This ranking function grants each row a rank of the data type INT8 and does not have an argument. It can only be specified together with ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).

DENSE\_RANK works in largely the same way as RANK, but counts without any gaps, starting from the first group, and does not determine the rank using the lowest row number of groups of identical values (with respect to the sort criterion).

Note

If a window does not contain any multiple rows (with respect to the sort criterion), DENSE\_RANK produces the same result as RANK.

Executable Example

[Window Expressions with Sort](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_order_by_abexa.htm)

Variant 5

... LEAD*|*LAG( sql\_exp1*\[*, diff*\[*, sql\_exp2*\]**\]*

Effect

Specifies the value functions LEAD or LAG as a window function. They can only be specified together with ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).

The result of the functions is the value of the SQL expression [sql\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) for the row of the current window or for the row of the box defined by an addition ORDER BY after [OVER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm). This row is itself defined by the addition diff. diff can be specified as a [literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql_host_literals.htm) or a [host constant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) with the ABAP type b, s, i, int8, whose value is a positive number other than 0.

-   For the function LEAD, diff determines the row positioned the distance in question after the current row.
    
-   For the function LAG, diff determines the row positioned the distance in question in front of the current row.
    

If diff is not specified, the value 1 is used. In the case of LEAD, this is the row that follows directly and in the case of LAG, the directly preceding row. If the row determined by diff is not in the current window, the result is the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") by default. If the optional SQL expression [sql\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) is specified, it is evaluated and returned as the current row in cases where the row does not exist.

The result of the functions LEAD and LAG has the following data type:

-   If [sql\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) is not specified, the data type is determined by [sql\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm).
    
-   If [sql\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) is specified, the results of sql\_exp1 and sql\_exp2 must match in a way that a common result type can be determined: The data types must either be the same or the data type of one expression must represent the value of the other expression. The result has the dictionary type of the expression with the largest value range.
    

Notes

-   The window functions LEAD or LAG are suited to calculations such as, for example, determining the difference between values in the current row and values of the preceding or following rows.
    
-   If the window functions LEAD or LAG are used, the syntax check is applied in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_754.htm).
    

Example

SELECT statement with the window functions LEAD and LAG as operands of an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith.htm). The addition [PARTITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm) is not specified, which means there is only one window containing all rows of the results set. Both LEAD and LAG have only one argument each, which means that the difference between the values of the column NUM1 is calculated using the directly following or preceding row, and any nonexistent rows produce null values. These values are defined using a [null indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_indicator_glosry.htm "Glossary Entry"). The program DEMO\_SELECT\_OVER\_LEAD\_LAG\_DIFF uses this SELECT statement and, when executed, the program displays the result.

SELECT num1 AS number,
       num1 - LEAD( num1 ) OVER( ORDER BY id ) AS diff\_lead,
       num1 - LAG(  num1 ) OVER( ORDER BY id ) AS diff\_lag
       FROM demo\_expressions
       ORDER BY id
       INTO TABLE @DATA(lead\_lag\_diffs)
                  INDICATORS NULL STRUCTURE null\_ind.

Executable Example

[Window Functions LEAD and LAG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_lead_lag_abexa.htm)