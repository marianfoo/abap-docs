---
title: "ABAP CDS - Consuming Business Services with Odata Client Proxy"
description: |
  This example demonstrates how the OData data of business services can be consumed in ABAP using an OData Client Proxy. Source Code REPORT demo_consume_bs_client_proxy. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA scarr_spfli T
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconsume_bs_client_proxy_abexa.htm"
abapFile: "abenconsume_bs_client_proxy_abexa.htm"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "abenconsume", "client", "proxy", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Services (BS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_business_services.htm) →  [ABAP CDS - Consuming Business Services](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_bindings_abexas.htm) → 

ABAP CDS - Consuming Business Services with Odata Client Proxy

This example demonstrates how the OData data of business services can be consumed in ABAP using an OData Client Proxy.

Source Code

REPORT demo\_consume\_bs\_client\_proxy.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
        cl\_demo\_output=>display( scarr\_spfli ).
      CATCH /iwbep/cx\_gateway INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Methods of the [SAP Gateway](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_gateway_glosry.htm "Glossary Entry") framework are used to create a local OData Client Proxy and to retrieve the data exposed by a CDS service binding DEMO\_SB\_SCARR\_SPFLI. The service binding provides the following service definition:

@EndUserText.label: 'Expose demo\_cds\_scarr\_spfli'
define service demo\_sd\_scarr\_spfli {
  expose demo\_cds\_scarr\_spfli;
}

This service definition exposes the following CDS view:

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