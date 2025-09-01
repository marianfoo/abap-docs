  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) → 

SELECT, Grouping Sets

This example demonstrates the addition [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

Source Code

REPORT demo\_select\_grouping\_sets.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
   "Example for GROUPING SETS
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
   "Example for UNION ALL
    SELECT FROM sflight
           FIELDS carrid,
                  @( VALUE sflight-connid( ) ) AS connid,
                  planetype,
                  SUM( seatsmax ) AS sum\_seatsmax
           WHERE carrid = 'LH'
           GROUP BY carrid, planetype
    UNION ALL
    SELECT FROM sflight
           FIELDS carrid,
                  connid,
                  @( VALUE sflight-planetype( ) ) AS planetype,
                  SUM( seatsmax ) AS sum\_seatsmax
           WHERE carrid = 'LH'
           GROUP BY carrid, connid
           ORDER BY carrid, connid, planetype, sum\_seatsmax
           INTO TABLE @DATA(result\_union).
    ASSERT result\_union = result\_grouping\_sets.
    cl\_demo\_output=>display( result\_grouping\_sets ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

For Lufthansa flights, this example calculates the sum of the maximum available seats with respect to the plane type (column planetype) and the connection (column connid) Two grouping sets are defined, which contain either the plane type or the connection.

The example shows that SELECT statements that use UNION ALL or GROUPING SETS are equivalent. The first query defines the grouping sets (carrid, planetype) and (carrid, connid) with a GROUP BY clause. The second query, on the other hand, specifies the same grouping sets using two GROUP BY clauses and merges them using UNION ALL.