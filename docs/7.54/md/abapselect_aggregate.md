  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_agg

[Quick Reference](javascript:call_link\('abenaggregate_shortref.htm'\))

Syntax

... [agg\_func](javascript:call_link\('abensql_agg_func.htm'\)) ...

Effect

[Aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") in ABAP SQL. An aggregate expression consists of an [aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") [agg\_func](javascript:call_link\('abensql_agg_func.htm'\)) that aggregates the values of multiple rows of the results set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") into a single value. It can be used in the following operand positions:

-   As an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) for
    

-   a column [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) of the results set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"),

-   an operand on the left side of [relational expressions](javascript:call_link\('abenwhere_logexp.htm'\)) of the condition [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) of the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

Here, an aggregate expression can be specified directly or as an operand of an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) (except for another aggregate expression).

-   As an operand on the right side of [relational expressions](javascript:call_link\('abenwhere_logexp.htm'\)) of the condition [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) of the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). Here, no SQL expressions can be used except for directly specified aggregate expressions.
    

Any [aggregate functions](javascript:call_link\('abensql_agg_func.htm'\)) can be used as an aggregate expression except for PRODUCT. An aggregate function used as an aggregate expression can have one of the following arguments:

-   An SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) (except aggregate expressions and window expressions for the aggregate functions MAX, MIN, SUM, STRING\_AGG, and COUNT).
    
-   A column [col](javascript:call_link\('abenopen_sql_columns.htm'\)) of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") for the aggregate functions AVG and GROUPING.
    

The aggregate functions take the values of the column or take the results of the SQL expression from all rows of the results set, or from the rows of the current group of a query constructed using [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), to determine a single value. If the value of an aggregate expression is too large for the [target area](javascript:call_link\('abapinto_clause.htm'\)), an exception is raised.

Notes

-   [Table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") is bypassed when aggregate expressions are used.
    
-   If SQL expressions other than directly specified columns are specified as arguments of aggregate expressions, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.
    

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
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Examples

-   [SQL Expressions, Use in Aggregate Expressions](javascript:call_link\('abensql_expr_in_aggregates_abexa.htm'\))

-   [SQL Expressions, Aggregate Expressions in SQL Expressions](javascript:call_link\('abensql_expr_aggr_in_expr_abexa.htm'\)) #

Continue
[sql\_exp - agg\_func](javascript:call_link\('abensql_agg_func.htm'\))
[ABAP SQL - Examples of Aggregate Expressions](javascript:call_link\('abensql_agg_expr_abexas.htm'\))