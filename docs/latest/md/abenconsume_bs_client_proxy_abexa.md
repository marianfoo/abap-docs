  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Consuming%20Business%20Services%20with%20OData%20Client%20Proxy%2C%20ABENCONSUME_BS_CLIENT_PROXY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Consuming Business Services with OData Client Proxy

This example demonstrates how the OData data of business services can be consumed in ABAP using an OData Client Proxy.

Source Code   

\* Public class definition
CLASS cl\_demo\_consume\_bs\_clnt\_proxy DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_consume\_bs\_clnt\_proxy IMPLEMENTATION.
  METHOD main.
    DATA scarr\_spfli TYPE STANDARD TABLE OF demo\_cds\_scarr\_spfli
                     WITH EMPTY KEY.
    TRY.
        /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy(
          VALUE #( service\_id      = 'demo\_sb\_scarr\_spfli'
                   service\_version = '0001' )
           )->create\_resource\_for\_entity\_set( 'demo\_cds\_scarr\_spfli'
           )->create\_request\_for\_read(
           )->execute(
           )->get\_business\_data(
                IMPORTING et\_business\_data = scarr\_spfli ).
        out->write( scarr\_spfli ).
      CATCH /iwbep/cx\_gateway INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Methods of the [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry") framework are used to create a local [OData Client Proxy](https://help.sap.com/docs/ABAP_PLATFORM_NEW/68bf513362174d54b58cddec28794093/bb778da49bf34e03a699eb476d4bb316) and to retrieve the data exposed by a CDS service binding DEMO\_SB\_SCARR\_SPFLI. The service binding provides the following service definition:

@EndUserText.label: 'Expose demo\_cds\_scarr\_spfli'
define service demo\_sd\_scarr\_spfli {
  expose demo\_cds\_scarr\_spfli;
}

This service definition exposes the following CDS view entity:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view demo\_cds\_scarr\_spfli(
    id,
    carrier,
    flight,
    departure,
    destination
  )
  as select from spfli
    join         scarr on scarr.carrid = spfli.carrid
{
  key spfli.carrid,
  key scarr.carrname,
  key spfli.connid,
      spfli.cityfrom,
      spfli.cityto
}

The data provided by that view are retrieved.