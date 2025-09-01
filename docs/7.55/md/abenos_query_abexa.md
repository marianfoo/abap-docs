  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_object_services_query.htm) → 

OS - Query Service

This example demonstrates how an object-oriented query is used.

Source Code

REPORT demo\_query\_service.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: airpfrom TYPE s\_fromairp VALUE 'FRA',
          airpto   TYPE s\_toairp   VALUE 'SIN'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = airpfrom
      )->add\_field( CHANGING field = airpto )->request( ).
    TYPES: BEGIN OF result,
             carrid TYPE s\_carr\_id,
             connid TYPE s\_conn\_id,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    TRY.
        DATA(query) = cl\_os\_system=>get\_query\_manager( )->create\_query(
          i\_filter   = \`AIRPFROM = PAR1 AND AIRPTO = PAR2\`
          i\_ordering = \`CARRID ASCENDING CONNID ASCENDING\` ).
        DATA(agent) = ca\_spfli\_persistent=>agent.
        cl\_demo\_output=>display(
          VALUE results(
            FOR <connection>
            IN agent->if\_os\_ca\_persistency~get\_persistent\_by\_query(
              i\_query   = query
              i\_par1    = airpfrom
              i\_par2    = airpto )
              ( carrid = CAST cl\_spfli\_persistent(
                                <connection> )->get\_carrid( )
                connid = CAST cl\_spfli\_persistent(
                                <connection> )->get\_connid( ) ) ) ).
      CATCH cx\_root INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A query manager is called using the method GET\_QUERY\_MANAGER of the class CL\_OS\_SYSTEM and a query created using the method CREATE\_QUERY and a specified filter and sort conditions. The query is executed using the interface method GET\_PERSISTENT\_BY\_QUERY of the interface IF\_OS\_CA\_PERSISTENCY and the flights found are displayed.

Since the predefined parameters PAR1, PAR2 from a parameter list are used here, an [SQL injection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_injection_glosry.htm "Glossary Entry") is not possible in this example.