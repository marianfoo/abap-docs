  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_win%2C%20ABAPSELECT_OVER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_win

Syntax

... [win\_func](javascript:call_link\('abensql_win_func.htm'\)) OVER( *\[*PARTITION BY [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)), [sql\_exp2](javascript:call_link\('abapsql_expr.htm'\)) ...*\]*
                   *\[*ORDER BY [col1](javascript:call_link\('abenabap_sql_columns.htm'\)) *\[*ASCENDING*|*DESCENDING*\]*,
                             [col2](javascript:call_link\('abenabap_sql_columns.htm'\)) *\[*ASCENDING*|*DESCENDING*\]*
                         *\[*ROWS BETWEEN *{*UNBOUNDED PRECEDING*}*
                                      *|**{*CURRENT ROW*}*
                                      *|**{*n PRECEDING*}*
                                      *|**{*n FOLLOWING*}*
                               AND     *{*UNBOUNDED FOLLOWING*}*
                                      *|**{*CURRENT ROW*}*
                                      *|**{*n PRECEDING*}*
                                      *|**{*n FOLLOWING*}**\]**\]* ) ...

Additions:

[1\. ... ORDER BY col1 *\[*ASCENDING*|*DESCENDING*\]*, col2 *\[*ASCENDING*|*DESCENDING*\]*, ...](#!ABAP_ADDITION_1@1@)
[2\. ... ROWS BETWEEN ...](#!ABAP_ADDITION_2@2@)

Effect

[Window expression](javascript:call_link\('abenwindow_expression_glosry.htm'\) "Glossary Entry") in ABAP SQL. A window expression uses a [window function](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") to determine an individual value from the rows of a [window](javascript:call_link\('abenwindow_glosry.htm'\) "Glossary Entry") of the result set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). A window expression can be specified as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or as an argument of any SQL expressions for defining a column [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) of the result set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of a query. [Aggregate](javascript:call_link\('abapselect_aggregate.htm'\)) expressions can also be nested if there is interest in both the aggregation and windowing in the same query. In each row of the result set, the result of the calculation is placed in the column defined in this way.

A window expression consists of a window function [win\_func](javascript:call_link\('abensql_win_func.htm'\)) followed by the addition OVER( ... ) in whose parentheses the [window](javascript:call_link\('abenwindow_glosry.htm'\) "Glossary Entry") on the result set is defined for whose rows the window function is evaluated:

-   PARTITION BY [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)), [sql\_exp2](javascript:call_link\('abapsql_expr.htm'\)) ...
    
    The optional addition PARTITION BY defines the windows using a comma-separated list of SQL expressions sql\_exp1, sql\_exp2, ... A window is constructed by the rows of the result set for which all SQL expressions have the same result. All [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and window expressions can be used. The window function is calculated for the rows of the respective current window. If PARTITION BY is not specified, a single window is constructed that comprises all rows of the result set.
    
-   ORDER BY
    
    The optional addition ORDER BY introduces both an order and a frame within the current window, which further restricts the rows for which the window function is calculated. It is also a prerequisite for certain [ranking functions](javascript:call_link\('abenranking_function_glosry.htm'\) "Glossary Entry").
    

If a window expression is used in the SELECT list of a SELECT statement with [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause, the windows are defined in the merged result list and aggregate expressions can be used as arguments of the window functions. Each column that is specified in any position in the window expression must also be specified in the GROUP BY clause.

Hints

-   A window expression works in a similar way to an [aggregate expression](javascript:call_link\('abapselect_aggregate.htm'\)), whereby the addition PARTITION BY assumes the role of the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause. Unlike aggregate expressions, however, there is no aggregation of the rows defined using PARTITION BY. Instead, these are retained and are all assigned the value calculated using the window expression.
-   The window functions of a window expression work with the rows of a virtual table, which is defined by the specifications after OVER. Using the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) of the SELECT statement has no effect on the result of a window expression. However, the rows of the result set can themselves be sorted according to the results of window expressions by using their alias name.
-   A window expression can only be specified in the result set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of a query. It cannot be used like an [aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") in the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) or [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.
-   By using window expressions in other SQL expressions, calculations can be performed, which combine values of the current row with the results of window expressions, for example, the percentage of a column in the current window, or the distance to the minimum or maximum value of the current window.
-   Window expressions are not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports the use of window expressions. This requires the constant WINDOWING of this class to be passed to the method in an internal table.

Executable Examples

-   [Window Expressions](javascript:call_link\('abensql_expr_over_abexa.htm'\))
-   [Window Expressions without Partition](javascript:call_link\('abensql_expr_over_all_abexa.htm'\))

Addition 1   

... ORDER BY col1 *\[*ASCENDING*|*DESCENDING*\]*, col2 *\[*ASCENDING*|*DESCENDING*\]*, ...

Effect

The optional addition ORDER BY, which can be specified independently of PARTITION BY, defines an order in the current window and an evaluation framework for the window function. ORDER BY is followed by a comma-separated list of columns of the data sources of the current query. These columns are used to sort the rows of the window. A column can only be specified directly using the column name [col1](javascript:call_link\('abenabap_sql_columns.htm'\)), [col2 ...](javascript:call_link\('abenabap_sql_columns.htm'\)) Alias names defined using [AS](javascript:call_link\('abapselect_list.htm'\)) cannot be specified. The additions ASCENDING and DESCENDING determine whether the rows are sorted in ascending or descending order by the column in question. The default is ASCENDING.

Specifying the order using ORDER BY causes the following:

-   The rows of the window are processed by the window function in the order defined by the sort order. The order of the processing of rows that appear more than once regarding the sort criterion is not defined. If the addition ORDER BY is not specified, this applies to all rows of the window.
-   The rows processed by the window function are additionally restricted by a frame. Only the rows of the window that are in front of the current row in the sorting, or that have the same values in the columns of the sort criterion are respected.

While the restricted frame mainly affects the results of [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") specified as a [window function](javascript:call_link\('abensql_win_func.htm'\)), the processing sequence primarily affects the [ranking functions](javascript:call_link\('abenranking_function_glosry.htm'\) "Glossary Entry"). The addition ORDER BY must be specified for the ranking functions RANK and DENSE\_RANK.

Hint

The definition of the window, the processing sequence, and the frame by ORDER BY following OVER is totally independent of the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause of the SELECT statement.

Executable Example

[Window Expressions with Sort](javascript:call_link\('abensql_expr_over_order_by_abexa.htm'\))

Addition 2   

... ROWS BETWEEN ...

Effect

The window frame specification is an optional addition within the OVER( ... ORDER BY ... ) clause. It allows the definition of a subset of rows inside a window, which is also referred to as a frame. Frames are determined with respect to the current row, which enables the frame to move within a window.

A frame is defined by a starting frame boundary and an ending frame boundary. There are three options for the starting and ending frame boundaries:

-   *{*UNBOUNDED PRECEDING*}* or *{*UNBOUNDED FOLLOWING*}*
    -   UNBOUNDED PRECEDING as starting frame boundary specifies that the frame starts at the first row of the window.
    -   UNBOUNDED FOLLOWING as ending frame boundary specifies that the frame ends at the last row of the partition.
-   CURRENT ROW can be used as both starting and ending frame boundary. It specifies that the window starts or ends at the current row, including the current row in the frame.
-   *{*n PRECEDING*}* or *{*n FOLLOWING*}*
    -   n PRECEDING can be used as both starting and ending frame boundary. It specifies that the frame starts or ends n rows above the current row.
    -   n FOLLOWING can be used as both starting and ending frame boundary. It specifies that the frame starts or ends n rows beneath the current row.
    -   n must be 0, a positive [integer literal](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry"), or a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) that can be resolved into a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") of type b, s,i, or int8.

ORDER BY is mandatory.

Hints

-   The ending frame boundary cannot be smaller than the starting frame boundary.
-   If no window frame is used, the default window frame is BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. That is to say that the window function computes all rows up to the current row. As a result, the function returns cumulative values.

Example

The example demonstrates how different [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") are applied to frames inside a window.

-   count sorts the rows by column ID and counts the number of rows from the first row of the window to the current row. The result is the same as that returned by the [ROW\_NUMBER( )](javascript:call_link\('abensql_win_func.htm'\)) function.
-   count\_reverse sorts the rows by column ID and counts the number of rows from the current row to the last row of the window. The result is reverse numbering.
-   average sorts the rows by column ID and calculates the rolling averages of a subset of rows from column COL1. The subset consists of the current row plus one preceding and one following row. With this function, it is possible, for example, to calculate the 3-day-average temperature for every day from a list of temperature data.
-   accumulate sorts the rows by column ID and accumulates the values from the first row of the window up to the current row, thus computing the running total of column COL1.

SELECT id, col1, col2,
       COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING
                                    AND CURRENT ROW )
                                    AS count,
       COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN CURRENT ROW
                                    AND UNBOUNDED FOLLOWING )
                                    AS count\_reverse,
       AVG( col1 ) OVER( ORDER BY id ROWS BETWEEN 1 PRECEDING
                                     AND 1 FOLLOWING )
                                     AS average,
       SUM( col1 ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING
                                     AND CURRENT ROW )
                                     AS accumulate
       FROM demo\_update
       INTO TABLE @FINAL(result).

Executable Example

[Window Frame Specification](javascript:call_link\('abensql_expr_over_win_frame_abexa.htm'\))

Continue
[sql\_win - win\_func](javascript:call_link\('abensql_win_func.htm'\))
[sql\_win - Examples of Window Expressions](javascript:call_link\('abensql_expr_over_abexas.htm'\))