  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20GROUP%20BY%2C%20grouping_sets%2C%20ABAPGROUPING_SETS_CLAUSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, GROUP BY, grouping\_sets

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... GROUPING SETS ( ( *{* *}*
                    *|* *{* [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)), [sql\_exp2](javascript:call_link\('abapsql_expr.htm'\)), ... *}* ),
                    ( *{* *}*
                    *|* *{* [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)), [sql\_exp2](javascript:call_link\('abapsql_expr.htm'\)), ... *}* ), ... ) ...

Effect

GROUPING SETS is an addition of the GROUP BY clause that allows the definition of multiple grouping sets under a GROUP BY clause. The grouping sets are aggregated separately and grouped in a result set.

The [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) addition GROUPING SETS consists of a comma-separated list of grouping sets enclosed in parentheses. Each grouping set is itself parenthesized and is specified as follows:

-   As an empty grouping set ( )
    
    An empty grouping set represents an [aggregation](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") across the entire [data source](javascript:call_link\('abapselect_data_source.htm'\)). It is used, for example, to calculate a [total sum](javascript:call_link\('abapselect_aggregate.htm'\)).
    
-   As a comma-separated list ( sql\_exp1, sql\_exp2,  ... )
    
    A comma-separated list consisting of SQL expressions sql\_exp1, sql\_exp2, ... that defines the set of expressions to be aggregated.
    

Each grouping is viewed as a separate GROUP BY list and is evaluated as such. Here, the [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) sql\_exp1, sql\_exp2, ... outside of the grouping set are also respected. The following two examples demonstrate this:

GROUP BY sql\_exp1, GROUPING SETS( ( sql\_exp2 ), ( sql\_exp3, sql\_exp4 ) )

GROUP BY GROUPING SETS( ( sql\_exp1, sql\_exp2 ), (sql\_exp1, sql\_exp3, sql\_exp4 ) )

The results of the two GROUP BY clauses are equivalent and are the same as two [SELECT](javascript:call_link\('abapselect.htm'\)) statements joined using [UNION ALL](javascript:call_link\('abapunion.htm'\)). The following two GROUP BY lists are used here:

1.  sql\_exp1, sql\_exp2
2.  sql\_exp1, sql\_exp3, sql\_exp4

The addition GROUPING SETS has an advantage over a UNION clause grouping because the SELECT clause only needs to be specified once. It is also potentially easier for the database to optimize a statement with the addition GROUPING SETS than its UNION equivalent.

Rules

-   All columns used in the addition GROUPING SETS must be specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).
-   The expressions specified in GROUPING SETS cannot have the [data type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, RAWSTRING, STRING, or GEOM\_EWKB.
-   The result rows, plus the SQL expressions, can be in any order in the comma-separated list and the order does not affect the result of the aggregation. If the results of the aggregation need to be sorted in a specific way, an [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause must be specified. The ORDER BY addition PRIMARY KEY is allowed.
-   The expressions that are part of the aggregation contain the null values as placeholders in the corresponding results.

Tips

The grouping function [GROUPING](javascript:call_link\('abengrouping_function.htm'\)) can be used to check whether a specific column in the result set was aggregated or not.

Hints

-   The GROUP BY addition GROUPING SETS cannot be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)). The ABAP SQL statement bypasses the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If the addition GROUPING SETS is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)), which handles the SELECT statement more strictly than the regular syntax check.
-   Grouping sets are not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports access to grouping sets. This requires the constant GROUPING\_SETS of the class to be passed to the method in an internal table.

Example

For Lufthansa flights, the following example calculates the sum of the maximum available seats depending on the plane type (column planetype) and the connection (column connid) Two grouping sets are defined, which contain either the plane type or the connection.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              planetype,
              SUM( seatsmax ) AS sum\_seatsmax
              WHERE carrid = 'LH'
       GROUP BY GROUPING SETS ( ( carrid, planetype ),
                                ( carrid, connid ),
                                ( ) )
       ORDER BY connid, planetype
       INTO TABLE @FINAL(result\_grouping\_sets).
cl\_demo\_output=>display( result\_grouping\_sets ).

Executable Example

See [SELECT, Grouping Sets](javascript:call_link\('abenselect_grouping_sets_abexa.htm'\))