---
title: "Syntax"
description: |
  ... win_func(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm) OVER( PARTITION sql_exp1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm), sql_exp2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) ...
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm"
abapFile: "abapselect_over.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "internal-table", "abapselect", "over"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_win

Syntax

... [win\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm) OVER( *\[*PARTITION [sql\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) ...*\]*
                   *\[*ORDER BY [col1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) *\[*ASCENDING*|*DESCENDING*\]*,
                             [col2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) *\[*ASCENDING*|*DESCENDING*\]*, ...*\]* ) ...

Addition:

[... ORDER BY col1 *\[*ASCENDING*|*DESCENDING*\]*, col2 *\[*ASCENDING*|*DESCENDING*\]*, ...](#!ABAP_ONE_ADD@1@)

Effect

[Window expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_expression_glosry.htm "Glossary Entry") in ABAP SQL. A window expression uses a [window function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_function_glosry.htm "Glossary Entry") to determine an individual value from the rows of a [window](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_glosry.htm "Glossary Entry") of the results set of a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"). A window expression can be specified as an [SQL expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) or as an argument of any SQL expressions, except for [aggregate](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and window expressions for defining a column [col\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause_col_spec.htm) of the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of a query. In each row of the result set, the result of the calculation is placed in the column defined in this way.

A window expression consists of a window function [win\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm) followed by the addition OVER( ... ) in whose parentheses the [window](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_glosry.htm "Glossary Entry") on the results set is defined for whose rows the window function is evaluated:

-   PARTITION [sql\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) ...

The optional addition PARTITION defines the windows using a comma-separated list of SQL expressions sql\_exp1, sql\_exp2, ... . A window is formed by the rows of the result set for which all SQL expressions have the same result. All [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and window expressions can be used. The window function is calculated for the rows of the respective current window. If PARTITION is not specified, a single window is formed, which comprises all rows of the result set.

-   ORDER BY

The optional addition ORDER BY introduces both an order and a frame within the current window, which further restricts the rows for which the window function is calculated. It is also a prerequisite for certain [ranking functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranking_function_glosry.htm "Glossary Entry").

If a window expression is used in the SELECT list of a SELECT statement with [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause, the windows are defined in the consolidated result list and aggregate expressions can be used as arguments of the window features. Each column that is specified in any position in the window expression must also be specified in the GROUP BY clause.

Notes

-   A window expression works in a similar way to an [aggregate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm), whereby the addition PARTITION assumes the role of the [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause. In contrast with the aggregate expressions, however, there is no aggregation of the rows defined via PARTITION, rather these are retained and are all assigned the value calculated via the window expression.

-   The window features of a window expression work, as it were, with the rows of a virtual table, which is defined by the specifications after OVER. Using the addition [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) of the SELECT statement does not influence the result of a window expression. However, the rows of the result set can be sorted according to the results of window expressions through using their alias name.

-   A window expression can only be specified in the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of a query. It cannot be used like an [aggregate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") in the [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) or [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) clause.

-   By using window expressions in other SQL expressions, calculations can be performed, which combine values of the current row with the results of window expressions, for example, the percentage of a column in the current window, or the distance to the minimum or maximum value of the current window.

-   Window expressions are not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports the use of window expressions. This requires the constant WINDOWING of this class to be passed to the method in an internal table.

Executable Examples

-   [Window Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_abexa.htm)

-   [Window expressions without partition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_all_abexa.htm)
    

Addition

... ORDER BY col1 *\[*ASCENDING*|*DESCENDING*\]*, col2 *\[*ASCENDING*|*DESCENDING*\]*, ...

Effect

The optional addition ORDER BY, which can be specified independently of PARTITION, defines an order in the current window and an evaluation framework for the window function. ORDER BY is followed by a comma-separated list of columns of the data sources of the current query. These columns are used to sort the rows of the window. A column can only be specified directly using the column name [col1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm), [col2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) Alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) cannot be specified. The additions ASCENDING and DESCENDING determine whether the rows are sorted in ascending or descending order by the column in question. The default is ASCENDING.

Specifying the order using ORDER BY causes the following:

-   The rows of the window are processed by the window function in the order defined by the sort sequence. The order of the processing of rows that appear more than once regarding the sort criterion is not defined. If the addition ORDER BY is not specified, this applies to all rows of the window.

-   The rows processed by the window function are additionally restricted by a frame. Only the rows of the window that are in front of the current row in the sorting, or that have the same values in the columns of the sort criterion are taken into account.

While the restricted frame mainly affects the results of [aggregate functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_function_glosry.htm "Glossary Entry") specified as a [window function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm), the processing sequence primarily affects the [ranking functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranking_function_glosry.htm "Glossary Entry"). The addition ORDER BY must be specified for the ranking functions RANK and DENSE\_RANK.

Note

The definition of the window, processing sequence, and the frame by ORDER BY following OVER is totally independent of the addition [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) clause of the SELECT statement.

Executable Example

[Window Expressions with Sort](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_order_by_abexa.htm)

Continue
[sql\_exp - win\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm)
[ABAP SQL - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_over_abexas.htm)