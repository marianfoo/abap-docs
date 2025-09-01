  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Grouping Function, ABENGROUPING_FUNCTION_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Grouping Function

This example demonstrates the grouping function [GROUPING](javascript:call_link\('abengrouping_function.htm'\)).

Source Code   

REPORT demo\_grouping\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT FROM sflight
       FIELDS carrid,
              connid,
              planetype,
              SUM( seatsmax ) AS sum\_seatsmax,
              grouping( carrid ) AS grouping\_carrid,
              grouping( connid ) AS grouping\_connid,
              grouping( planetype ) AS grouping\_planetype
       WHERE carrid = 'LH'
       GROUP BY GROUPING SETS ( ( carrid, connid, planetype ),
                                ( carrid, connid ),
                                ( carrid, planetype ),
                                ( connid, planetype ),
                                ( carrid ),
                                ( connid ),
                                ( planetype ),
                                ( ) )
       INTO TABLE @FINAL(result\_grouping).
    cl\_demo\_output=>display( result\_grouping ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

For Lufthansa flights, this example calculates the sum of the maximum available seats depending on the plane type (column planetype), the connection (column connid), and the carrier (column carrid).

The grouping function for the plane type column, connection column, or carrier column is used to determine whether they are part of the aggregation. The following combinations of the grouping sets are used to do this:

-   ( carrid, connid, planetype )
-   ( carrid, connid )
-   ( carrid, planetype )
-   ( connid, planetype )
-   ( carrid )
-   ( connid )
-   ( planetype )
-   Empty grouping set ( ).