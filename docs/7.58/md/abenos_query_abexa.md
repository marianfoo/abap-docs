  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Object Services (OS)](javascript:call_link\('abenabap_object_services.htm'\)) →  [OS - Query Service](javascript:call_link\('abenabap_object_services_query.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Query%20Service%2C%20ABENOS_QUERY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Query Service

This example demonstrates how an object-oriented query is used.

Source Code   

\* Public class definition
CLASS cl\_demo\_query\_service DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_query\_service IMPLEMENTATION.
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
        FINAL(query) = cl\_os\_system=>get\_query\_manager( )->create\_query(
          i\_filter   = \`AIRPFROM = PAR1 AND AIRPTO = PAR2\`
          i\_ordering = \`CARRID ASCENDING CONNID ASCENDING\` ).
        FINAL(agent) = ca\_spfli\_persistent=>agent.
        out->write(
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
      CATCH cx\_root INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

A query manager is called using the method GET\_QUERY\_MANAGER of the class CL\_OS\_SYSTEM and a query created using the method CREATE\_QUERY and a specified filter and sort conditions. The query is executed using the interface method GET\_PERSISTENT\_BY\_QUERY of the interface IF\_OS\_CA\_PERSISTENCY and the flights found are displayed.

Since the predefined parameters PAR1, PAR2 from a parameter list are used here, an [SQL injection](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry") is not possible in this example.