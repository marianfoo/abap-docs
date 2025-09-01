  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm) → 

SELECT, Grouping Function

This example demonstrates the grouping function [GROUPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengrouping_function.htm).

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
       INTO TABLE @DATA(result\_grouping).
    cl\_demo\_output=>display( result\_grouping ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

For Lufthansa flights, this example calculates the sum of the maximum available seats with respect to the plane type (column planetype), the connection (column connid), and the carrier (column carrid).

The grouping function for the plane type column, connection column, or carrier column is used to determine whether they are part of the aggregation. The following combinations of the grouping sets are used to do this:

-   ( carrid, connid, planetype )

-   ( carrid, connid )

-   ( carrid, planetype )

-   ( connid, planetype )

-   ( carrid )

-   ( connid )

-   ( planetype )

-   Empty grouping set ( ).