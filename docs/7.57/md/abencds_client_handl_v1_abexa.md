  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [ABAP CDS - Client Handling in CDS DDIC-Based Views](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDIC-based views \(obsolete\), Client Handling, ABENCDS_CLIENT_HANDL_V1_ABEXA, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDIC-based views (obsolete), Client Handling

This example demonstrates how [client-dependent](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) CDS DDIC-based views (obsolete) are handled.

Source Code   

REPORT demo\_cds\_client\_handling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'Data Types' ).
    out->write(
      name = 'Client dependent, no client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_0' )
                        )->components ).
    out->write(
      name = 'Client dependent, no client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN0' )
                        )->components ).
    out->write(
      name = 'Client dependent, client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_1' )
                        )->components ).
    out->write(
      name = 'Client dependent, client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN1' )
                        )->components ).
    out->next\_section( 'SELECT Statements' ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_0
           ORDER BY carrid, connid
           INTO TABLE @DATA(result1)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, CDS entity'
      data = result1 ).
    SELECT \*
           FROM demo\_cds\_prjctn0
           ORDER BY carrid, connid
           INTO TABLE @DATA(result2)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, database view'
      data = result2 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_0
                CLIENT SPECIFIED demo\_cds\_spfli\_client\_0~myclient
           WHERE myclient = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result3)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, CDS entity,' &
             ' CLIENT SPECIFIED'
      data = result3 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_1
           ORDER BY carrid, connid
           INTO TABLE @DATA(result4)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, client field, CDS entity'
      data = result4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program accesses the following CDS views:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN0'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #AUTOMATED
define view demo\_cds\_spfli\_client\_0
  as select from
    spfli
    {
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #AUTOMATED
define view demo\_cds\_spfli\_client\_1
  as select from
    spfli
    {
      key spfli.mandt,
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

The view DEMO\_CDS\_SPFLI\_CLIENT\_0 is a regular client-dependent CDS DDIC-based view (obsolete) in which the client column is not specified in the SELECT list. The CDS DDIC-based view (obsolete) DEMO\_CDS\_SPFLI\_CLIENT\_1 is used to demonstrate the behavior in rare cases where the client column is specified in the SELECT list of a client-dependent CDS view.

RTTI is used to read the components of the associated data types:

-   The structure of the client-dependent CDS entity without client column in the SELECT list does not have a client column.
-   The CDS-managed DDIC view (obsolete) of the client-dependent [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") without client column in the SELECT list has a client column.
-   Nevertheless, the structure of the client-dependent CDS entity with client column in the SELECT list does not have a client column.
-   The CDS-managed DDIC view (obsolete) of the client-dependent [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") with client column in the SELECT list has a client column.

The statement SELECT is used to make the following accesses:

-   Regular access to a client-dependent CDS entity without client column in the SELECT list. The data from the current client is read. The result set does not have a client column.
-   Regular access to a CDS-managed DDIC view (obsolete) of the client-dependent CDS entity without client column in the SELECT list. The data from the current client is read. The result set has a client column.
-   Access to a client-dependent CDS entity without client column in the SELECT list using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)). The data of the client specified in the WHERE condition is read. A name myclient must be defined for this. The result set has a client column with this name.
-   Regular access to a CDS-managed DDIC view (obsolete) of the client-dependent CDS entity with client column in the SELECT list. The data from the current client is read. The result set does not have a client column.

The similar program DEMO\_CDS\_CLIENT\_HANDLING\_SV accesses CDS views in which the annotation @ClientHandling.algorithm: #SESSION\_VARIABLE is used instead of @ClientHandling.algorithm: #AUTOMATED. The results are shown in exactly the same way as here, however access using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) is not possible since the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)) is evaluated implicitly in the views.

Hint

The accesses to the CDS-managed DDIC views (obsolete) of [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") shown here are for demonstration purposes only. This way of accessing CDS DDIC-based views (obsolete) is obsolete and only the CDS entities should now be accessed.