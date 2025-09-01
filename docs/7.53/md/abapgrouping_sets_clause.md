  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) → 

SELECT - GROUP BY, grouping\_sets

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

... GROUPING SETS ( ( *{* *}*
                    *|* *{* [col1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm), [col2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm), ...,
                        [sql\_exp1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), ... *}* ),
                    ( *{* *}*
                    *|* *{* [col1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm), [col2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm), ...,
                        [sql\_exp1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), ... *}* ), ... ) ...

The [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) addition GROUPING SETS makes it possible to group multiple aggregations under one [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement. This can also be done by specifying the same SELECT statement with different GROUP BY clauses and using the addition [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm) to group them in a single statement. This approach is more work, however, is error prone and is harder for the database to optimize. The addition GROUPING SETS also makes it easier to interpret and maintain the SELECT statement.

The GROUP BY addition GROUPING SETS expects to be followed by parenthesized comma-separated list of [grouping sets](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengrouping_set_glosry.htm "Glossary Entry") (grouping\_sets1, grouping\_sets2, ...). Each grouping set is itself parenthesized and can be specified as follows:

-   As an empty grouping set ( )
    
-   As a comma-separated list (col1, col2, ..., sql\_exp1, sql\_exp2, ... )
    

The database creates a GROUP BY list for each grouping set. Here, the [columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) col1, col2, ... and/or [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) sql\_exp1, sql\_exp2, ... outside of the grouping set are also included. The following example helps to explain this:

... GROUP BY col1, GROUPING SETS( ( col2 ), ( col3, sql\_exp1 ) ) ...

The example produces two GROUP BY lists:

1.  col1, col2
    
2.  col1, col3, sql\_exp1
    

The result is the same as two SELECT statements joined using [UNION ALL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm), with GROUP BY list 1 and GROUP BY list 2 being used. If the addition GROUPING SETS is used, the statement behaves like a UNION ALL that combines one SELECT statement for each grouping set. The grouping function [GROUPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengrouping_function.htm) makes it possible to identify whether a specific column in the results set in question was aggregated or not. All columns used in the GROUPING SETS must be specified in the SELECT addition [FIELDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfields_clause.htm).

An empty grouping set ( ) represents an aggregation across the entire [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm). Empty grouping sets are typically used to calculate a total.

The elements (columns and SQL expressions) can be in any order in the comma-separated list and the order does not affect the result of the aggregation. There is no rule for the order of the result rows and an [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) clause must be used to sort the results of the aggregation if required.

The columns specified in GROUPING SETS cannot have the [data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) LCHR, LRAW, RAWSTRING, and STRING or the obsolete data types DF16\_SCL, DF34\_SCL, and VARC .

Grouping sets are not supported by all databases.

Notes

-   If the [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) addition GROUPING SETS is used, the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) bypasses [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm).
    
-   If the addition GROUPING SETS is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_753.htm), which handles the SELECT statement more strictly than the regular syntax check.
    
-   Any columns that occur in every grouping set can also be moved in front of the addition GROUPING SETS. The following GROUP BY clauses are equivalent:
    

-   GROUP BY GROUPING SETS ( ( carrid, planetype ), ( carrid, connid ) )

-   GROUP BY carrid, GROUPING SETS ( ( planetype ), ( connid ) )

-   The addition GROUPING SETS can be used together with the [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) clause. The ORDER BY addition PRIMARY KEY is allowed.
    
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports access to grouping sets. This requires the constant GROUPING\_SETS of the class to be passed to the method in an internal table.
    

Example

For Lufthansa flights, the following example calculates the sum of the maximum available seats with respect to the plane type (column planetype) and the connection (column connid) Two grouping sets are defined, which contain either the plane type or the connection.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              planetype,
              SUM( seatsmax ) AS sum\_seatsmax
              WHERE carrid = 'LH'
       GROUP BY GROUPING SETS ( ( carrid, planetype ),
                                ( carrid, connid ) )
       ORDER BY connid, planetype
       INTO TABLE @DATA(result\_grouping\_sets).
cl\_demo\_output=>display( result\_grouping\_sets ).

Executable Example

See [SELECT, Grouping Sets](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_grouping_sets_abexa.htm)