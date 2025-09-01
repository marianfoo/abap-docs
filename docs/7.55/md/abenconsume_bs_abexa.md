  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\)) →  [ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\)) → 

ABAP CDS - Consuming Business Services with Demo Class

This example demonstrates how the OData data of business services can be consumed in ABAP with a demonstration class.

Source Code

REPORT demo\_consume\_bs\_simple.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(service\_binding) = \`demo\_sb\_scarr\_spfli\`.
    DATA(entity)          = \`demo\_cds\_scarr\_spfli\`.
    data(limit)           =  50.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = service\_binding
       )->add\_field( CHANGING field = entity
       )->add\_field( CHANGING field = limit
       )->request( ).
    TRY.
        cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab(
          EXPORTING
            entity          = entity
            limit           = limit
          IMPORTING
            itab            = DATA(itab) ).
      CATCH cx\_demo\_bs\_consumption INTO DATA(exc).
        cl\_demo\_output=>display\_text( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSIGN itab->\* TO FIELD-SYMBOL(<itab>).
    cl\_demo\_output=>display( <itab> ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Business services are designed mainly for accessing AS ABAP from outside, however for demonstration purposes here, an ICF client implemented in ABAP is used to read the ICF nodes of business services. The ICF client is implemented in the class CL\_DEMO\_BS\_CONSUMPTION that offers some methods for examining the OData data of [service bindings](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry") whose names are passed by parameter:

-   Several methods are available for reading URLs for use in browsers.

-   One method reads the non-handled OData data in XML or JSON format.

-   One method extracts important metadata to internal tables.

-   One method extracts the actual data to internal tables.

The above shown program DEMO\_CONSUME\_BS\_SIMPLE uses the class to extract the data of individual CDS entities exposed in service definitions to internal tables and display it. Further example programs are:

-   DEMO\_BS\_URLS gets the URLs of service bindings.

-   DEMO\_BS\_ODATA gets the untreated OData data of service bindings.

-   DEMO\_BS\_META\_DATA gets important metadata as the content of internal tables.

-   DEMO\_CONSUME\_BS\_WITH\_PARAMS demonstrates parameter passing to exposed CDS entities with input parameters.

-   DEMO\_CONSUME\_BS\_WITH\_ASSOCS demonstrates how paths are specified for exposed CDS entities joined using associations.

The defaults for the input parameters of the programs access service definitions and service bindings that were created for these demonstrations. These service bindings use the OData protocol (version 2) for Web APIs.

Hint

See also [Consuming Business Services with Client Proxy](javascript:call_link\('abenconsume_bs_client_proxy_abexa.htm'\))