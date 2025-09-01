  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_agg

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaggregate_shortref.htm)

Syntax

... [agg\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm) ...

Effect

[Aggregate expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") in ABAP SQL. An aggregate expression consists of an [aggregate function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaggregate_function_glosry.htm "Glossary Entry") [agg\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm) that aggregates the values of multiple rows of the result set of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry") into a single value. It can be used in the following operand positions:

-   As an [SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) for
    
    -   a column [col\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_clause_col_spec.htm) of the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry"),
    -   an operand on the left side of [relational expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm) of the condition [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) of the [HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry").
    
    Here, an aggregate expression can be specified directly or as an operand of an [SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) except for another aggregate expression.
    
-   As an operand on the right side of [relational expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm) of the condition [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) of the [HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry"). Here, no SQL expressions can be used except for directly specified aggregate expressions.

All [aggregate functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm) can be used as an aggregate expression except for PRODUCT. An aggregate function used as an aggregate expression can have one of the following arguments:

-   An SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) except aggregate expressions and window expressions for the aggregate functions MAX, MIN, SUM, STRING\_AGG, and COUNT.
-   A column [col](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) of a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry") for the aggregate functions AVG and GROUPING.

The aggregate functions take the values of the column or the results of the SQL expression of multiple rows of the query result set and determine a single value. Either all rows of the result set or the rows of the current group created using [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) are evaluated. If the value of an aggregate expression is too large for the [target area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm), an exception is raised.

Hints

-   [Table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed when aggregate expressions are used.
-   If SQL expressions other than directly specified columns are specified as arguments of aggregate expressions, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

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

-   [SQL Expressions, Use in Aggregate Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_in_aggregates_abexa.htm)
-   [SQL Expressions, Aggregate Expressions in SQL Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_aggr_in_expr_abexa.htm) #

Continue
[sql\_agg - agg\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_func.htm)
[sql\_agg - Examples of Aggregate Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_agg_expr_abexas.htm)