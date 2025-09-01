  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [ABAP CDS - Client Handling in CDS DDIC-Based Views](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDIC-based%20views%20%28obsolete%29%2C%20Obsolete%20Client%20Handling%2C%20ABENCDS_CLIENT_HANDLING_OBS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

CDS DDIC-based views (obsolete), Obsolete Client Handling

This example demonstrates how obsolete [client-independent](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") are handled.

Source Code   

REPORT demo\_cds\_client\_handling\_obs.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'Data Types' ).
    out->write(
      name = 'Not client dependent, no client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_2' )
                        )->components ).
    out->write(
      name = 'Not client dependent, no client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN2' )
                        )->components ).
    out->write(
      name = 'Not client dependent, client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_3' )
                        )->components ).
    out->write(
      name = 'Not client dependent, client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN3' )
                        )->components ).
    out->next\_section( 'SELECT Statements' ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_2
           ORDER BY carrid, connid
           INTO TABLE @DATA(result1)
           UP TO 1 ROWS.
    out->write(
      name =  'Not client dependent, no client field, CDS entity'
      data = result1 ).
    SELECT \*
           FROM demo\_cds\_prjctn2
           ORDER BY carrid, connid
           INTO TABLE @DATA(result2)
           UP TO 1 ROWS.
    out->write(
      name =  'Not client dependent, no client field, database view'
      data = result2 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_3
           WHERE mandt = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result3)
           UP TO 1 ROWS.
    out->write(
      name = 'Not client dependent, client field, CDS entity'
      data = result3 ).
    SELECT \*
           FROM demo\_cds\_prjctn3 CLIENT SPECIFIED
           WHERE mandt = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result4)
           UP TO 1 ROWS.
    out->write(
      name = 'Not client dependent, client field, database view,' &
             ' CLIENT SPECIFIED'
      data = result4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program accesses the following [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientDependent: false
define view demo\_cds\_spfli\_client\_2
  as select from
    spfli
    {
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN3'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientDependent: false
define view demo\_cds\_spfli\_client\_3
  as select from
    spfli
    {
      key spfli.mandt,
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

They are used to demonstrate the behavior in rare cases where CDS DDIC-based views (obsolete) with the obsolete notation [ClientDependent:false](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) are made into client-independent views even though they contain client-dependent data sources:

-   DEMO\_CDS\_SPFLI\_CLIENT\_2 is a client-independent CDS view in which the client column is not specified in the SELECT list.
-   DEMO\_CDS\_SPFLI\_CLIENT\_3 is a client-independent CDS view in which the client column is specified in the SELECT list.

RTTI is used to read the components of the associated data types:

-   The structure of the client-independent CDS entity without client column in the SELECT list does not have a client column.
-   The CDS-managed DDIC view (obsolete) of the client-independent CDS view without client column in the SELECT list has a client column.
-   The structure of the client-independent CDS entity without client column in the SELECT list does not have a client column.
-   The CDS-managed DDIC view (obsolete) of the client-independent CDS view with client column in the SELECT list has a client column, which makes it client-dependent.

The statement SELECT is used to make the following accesses:

-   Regular access to a client-independent CDS entity without client column in the SELECT list. The data is read from all clients. No conditions can be specified for the client. The result set does not have a client column.
-   Regular access to a CDS-managed DDIC view (obsolete) of the client-independent CDS entity without client column in the SELECT list. The data is read from all clients. No conditions can be specified for the client. The result set does not have a client column.
-   Regular access to a client-independent CDS entity with client column in the SELECT list. The data of the client specified in the WHERE condition is read. It is not possible to specify the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) here. The result set has a client column.
-   Access to a CDS-managed DDIC view (obsolete) of the client-independent CDS view with client column in the SELECT list using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)). The data of the client specified in the WHERE condition is read. The result set has a client column.

Hint

The accesses to the CDS-managed DDIC views (obsolete) of the CDS DDIC-based views (obsolete) shown here are for demonstration purposes only. This way of accessing such CDS views is obsolete and only the CDS entities should now be accessed.