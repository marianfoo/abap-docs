  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) → 

agg\_exp - GROUPING

Syntax

... GROUPING( [col](javascript:call_link\('abenopen_sql_columns.htm'\)) )

Effect

An [aggregate expression](javascript:call_link\('abapselect_aggregate.htm'\)) with the [aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") GROUPING acts as a grouping function for [grouping sets](javascript:call_link\('abengrouping_set_glosry.htm'\) "Glossary Entry") [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) in a [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause. The grouping function GROUPING makes it possible to identify whether a specific column in the results set in question was aggregated or not. A grouping function can be used only if the GROUP BY clause contains a [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) addition.

If the GROUP BY clause is used to aggregate across multiple columns, these columns are filled with null values in the corresponding aggregated result rows. The columns for these rows cannot have fixed content because they are used for the aggregation and the null value is hence used as a placeholder.

The data type of the result of the grouping function is [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)). The expected return values of the grouping functions are 1 for the specified column used for the aggregation and 0 for the column not used for the aggregation.

Notes

-   A grouping function can only be used in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list and the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.

-   The argument of a grouping function should also be specified in the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) list.

-   A grouping function can be defined for each element of the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)).

Example

The following example calculates the number of Lufthansa fights with respect to the plane type and connection (the columns planetype and connid). Two grouping sets are defined, which contain either the plane type or the connection.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              planetype,
              COUNT( \* ) AS flights\_count,
              grouping( connid ) AS agg\_connid,
              grouping( planetype ) AS agg\_planetype
       WHERE carrid = 'LH'
       GROUP BY GROUPING SETS ( ( carrid, planetype ),
                                ( carrid, connid ),
                                ( carrid ) )
       ORDER BY connid, planetype
       INTO TABLE @DATA(result\_grouping).
cl\_demo\_output=>display( result\_grouping ).

The elements of the results set in which the results are aggregated across connid have a null value for the column connid. A fixed connid cannot be assigned here because connid is used for the aggregation. The result of the grouping function agg\_connid is set to 1, which indicates that connid is used for the aggregation. For rows like this, the result of the grouping function agg\_planetype is 0, which indicates that planetype is not used for the aggregation here. In the same way, the rows in which planetype was used for the aggregation have any empty value for planetype, since a fixed value cannot be assigned. In this case, the result of the grouping function agg\_planetype is 1 and agg\_connid is 0. This means that planetype was used for the aggregation in these rows and not connid.

The grouping set (carrid) groups all Lufthansa flights in a single result. In this case, the result of both grouping functions agg\_connid and agg\_planetype is 1. This indicates that both planetype and connid were used for the aggregation.

Example

For Lufthansa flights, the following example calculates the sum of the maximum available seats with respect to the plane type (column planetype) and the connection (column connid) Two grouping sets are defined, which contain either the plane type or the connection.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              planetype,
              SUM( seatsmax ) AS sum\_seatsmax,
              grouping( connid ) AS grouping\_connid,
              grouping( planetype ) AS grouping\_planetype
       WHERE carrid = 'LH'
       GROUP BY GROUPING SETS ( ( carrid, planetype ),
                                ( carrid, connid ),
                                ( ) )
       ORDER BY connid, planetype
       INTO TABLE @DATA(result\_grouping).
cl\_demo\_output=>display( result\_grouping ).

The empty grouping set ( ) aggregates all Lufthansa flights in a single results set. In this case, the result of both grouping functions agg\_connid and agg\_planetype is set to 1. This indicates that both planetype and connid were used for the aggregation. If the WHERE clause were not used, the empty grouping set would aggregate all flights in the table sflight in a single result with respect to the maximum number of seats (and not just Lufthansa flights).