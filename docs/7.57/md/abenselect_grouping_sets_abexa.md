  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Grouping Sets, ABENSELECT_GROUPING_SETS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Grouping Sets

This example demonstrates the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) addition [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

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
           INTO TABLE @FINAL(result\_grouping\_sets).
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
           INTO TABLE @FINAL(result\_union).
    ASSERT result\_union = result\_grouping\_sets.
    cl\_demo\_output=>display( result\_grouping\_sets ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

For Lufthansa flights, this example calculates the sum of the maximum available seats depending on the plane type (column planetype) and the connection (column connid). Two grouping sets are defined, which contain either the plane type or the connection.

The example shows that SELECT statements that use [UNION ALL](javascript:call_link\('abapunion.htm'\)) or GROUPING SETS are equivalent. The first [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") defines the grouping sets ( carrid, planetype ) and ( carrid, connid ) with a GROUP BY clause. The second query, on the other hand, specifies the same grouping sets using two GROUP BY clauses and merges them using UNION ALL.