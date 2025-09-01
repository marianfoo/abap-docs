---
title: "ABAP CDS - Consuming Business Services with Demo Class"
description: |
  This example demonstrates how the OData data of business services can be consumed in ABAP with a demonstration class. Source Code  Public class definition CLASS cl_demo_consume_bs_simple DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITI
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconsume_bs_abexa.htm"
abapFile: "abenconsume_bs_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenconsume", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Service Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_service_definitions.htm) →  [ABAP CDS - Consuming Business Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_bindings_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Consuming%20Business%20Services%20with%20Demo%20Class%2C%20ABENCONSUME_BS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

ABAP CDS - Consuming Business Services with Demo Class

This example demonstrates how the OData data of business services can be consumed in ABAP with a demonstration class.

Source Code   

\* Public class definition
CLASS cl\_demo\_consume\_bs\_simple DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_consume\_bs\_simple IMPLEMENTATION.
  METHOD main.
    DATA(service\_binding) = \`demo\_sb\_scarr\_spfli\`.
    DATA(entity)          = \`demo\_cds\_scarr\_spfli\`.
    DATA(limit)           =  50.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = service\_binding
       )->add\_field( CHANGING field = entity
       )->add\_field( CHANGING field = limit
       )->request( ).
    IF limit < 1 OR limit > 1000.
      out->write( 'Enter a number between 1 and 1000' ).
      RETURN.
    ENDIF.
    TRY.
        cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab(
          EXPORTING
            entity          = entity
            limit           = limit
          IMPORTING
            itab            = FINAL(itab) ).
      CATCH cx\_demo\_bs\_consumption INTO FINAL(exc).
        out->write\_text( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( itab->\* ).
  ENDMETHOD.
ENDCLASS.

Description   

Business services are designed mainly for accessing AS ABAP from outside, however for demonstration purposes here, an ICF client implemented in ABAP is used to read the ICF nodes of business services. The ICF client is implemented in the class CL\_DEMO\_BS\_CONSUMPTION that offers some methods for examining the OData data of [service bindings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_binding_glosry.htm "Glossary Entry") whose names are passed by parameter:

-   Several methods are available for reading URLs for use in browsers.
-   One method reads the non-handled OData data in XML or JSON format.
-   One method extracts important metadata to internal tables.
-   One method extracts the actual data to internal tables.

The class CL\_DEMO\_CONSUME\_BS\_SIMPLE shown above uses the class to extract the data of individual CDS entities exposed in service definitions to internal tables and display it. The class CL\_DEMO\_BS\_SIMPLE\_URL displays a URL that can be copied and pasted to a web browser in order to display the OData data in XML or JSON format.

Further example classes are:

-   CL\_DEMO\_BS\_URLS gets the URLs of service bindings.
-   CL\_DEMO\_BS\_ODATA gets the unhandled OData data of service bindings.
-   CL\_DEMO\_BS\_META\_DATA gets important metadata as the content of internal tables.
-   CL\_DEMO\_CONSUME\_BS\_WITH\_PARAMS demonstrates parameter passing to exposed CDS entities with input parameters.
-   CL\_DEMO\_CONSUME\_BS\_WITH\_ASSOCS demonstrates how paths are specified for exposed CDS entities joined using associations.

The defaults for the input parameters of the class access service definitions and service bindings that were created for these demonstrations. These service bindings use the OData protocol (version 2) for [Web APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweb_api_glosry.htm "Glossary Entry").

Hint

See also [Consuming Business Services with Client Proxy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconsume_bs_client_proxy_abexa.htm)