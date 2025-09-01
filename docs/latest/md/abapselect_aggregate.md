  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_agg%2C%20ABAPSELECT_AGGREGATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_agg

[Short Reference](javascript:call_link\('abenaggregate_shortref.htm'\))

Syntax

... [agg\_func](javascript:call_link\('abensql_agg_func.htm'\)) ...

Effect

[Aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") in ABAP SQL. An aggregate expression consists of an [aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") [agg\_func](javascript:call_link\('abensql_agg_func.htm'\)) that aggregates the values of multiple rows of the result set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") into a single value. It can be used in the following operand positions:

-   As an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) for
    
    -   a column [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) of the result set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"),
    -   an operand on the left side of [relational expressions](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) of the condition [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) of the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
    
    Here, an aggregate expression can be specified directly or as an operand of an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for another aggregate expression.
    
-   As an operand on the right side of [relational expressions](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) of the condition [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) of the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). Here, no SQL expressions can be used except for directly specified aggregate expressions.

All [aggregate functions](javascript:call_link\('abensql_agg_func.htm'\)) can be used as an aggregate expression except for PRODUCT. An aggregate function used as an aggregate expression can have one of the following arguments:

-   An SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) except aggregate expressions and window expressions for the aggregate functions MAX, MIN, SUM, STRING\_AGG, and COUNT.
-   A column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") for the aggregate functions AVG and GROUPING.

The aggregate functions take the values of the column or the results of the SQL expression of multiple rows of the query result set and determine a single value. Either all rows of the result set or the rows of the current group created using [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) are evaluated. If the value of an aggregate expression is too large for the [target area](javascript:call_link\('abapinto_clause.htm'\)), an exception is raised.

Hints

-   All aggregate expressions except a standalone COUNT( \* ) in the SELECT list cannot be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)). The ABAP SQL statement bypasses the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If SQL expressions other than directly specified columns are specified as arguments of aggregate expressions, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

Returns the flight date, the number of passengers, and the average and maximum luggage weight of all Lufthansa flights with the flight number 0400.

SELECT FROM sbook
       FIELDS fldate,
              COUNT( \* ) AS count,
              AVG( luggweight AS DEC( 16,4 ) ) AS avg,
              MAX( luggweight ) AS max
       WHERE carrid = 'LH' AND
             connid = '0400'
       GROUP BY fldate
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Examples

-   [SQL Expressions, Use in Aggregate Expressions](javascript:call_link\('abensql_expr_in_aggregates_abexa.htm'\))
-   [SQL Expressions, Aggregate Expressions in SQL Expressions](javascript:call_link\('abensql_expr_aggr_in_expr_abexa.htm'\))

Continue
[sql\_agg - agg\_func](javascript:call_link\('abensql_agg_func.htm'\))
[sql\_agg - Examples of Aggregate Expressions](javascript:call_link\('abensql_agg_expr_abexas.htm'\))