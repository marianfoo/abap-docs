---
title: "CDS DDL - CDS Projection View, Calculating a Virtual Element"
description: |
  This example demonstrates how a virtual element(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_virtual_element_glosry.htm 'Glossary Entry') is calculated at runtime. Source Code  Public class definition CLASS cl_demo_cnsme_bs_prj_view_virt DEFINITION INHERITING FRO
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_virtel_abexa.htm"
abapFile: "abencds_proj_view_virtel_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abencds", "proj", "view", "virtel", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_query.htm) →  [CDS DDL - projection\_list, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - proj\_element, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm) →  [CDS DDL - VIRTUAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_virtual_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20Projection%20View%2C%20Calculating%20a%20Virtual%20Element%2C%20ABENCDS_PROJ_VIEW_VIRTEL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - CDS Projection View, Calculating a Virtual Element

This example demonstrates how a [virtual element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") is calculated at runtime.

Source Code   

\* Public class definition
CLASS cl\_demo\_cnsme\_bs\_prj\_view\_virt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cnsme\_bs\_prj\_view\_virt IMPLEMENTATION.
  METHOD main.
    FINAL(service\_binding) = \`DEMO\_SB\_SALES\_PV\_SO\_EXP\`.
    FINAL(entity)          = \`DEMO\_SALES\_PV\_SO\_EXP\`.
    SELECT \*
           FROM demo\_sales\_pv\_so\_exp
           INTO TABLE @FINAL(from\_select).              "#EC CI\_NOWHERE
    out->write( from\_select ).
    DATA from\_bs TYPE STANDARD TABLE OF demo\_sales\_pv\_so\_exp
                 WITH EMPTY KEY.
    TRY.
        /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy(
          VALUE #( service\_id      = service\_binding
                   service\_version = '0001' )
           )->create\_resource\_for\_entity\_set( CONV #( entity )
           )->create\_request\_for\_read(
           )->execute(
           )->get\_business\_data(
                IMPORTING et\_business\_data = from\_bs ).
        out->write( from\_bs ).
      CATCH /iwbep/cx\_gateway INTO FINAL(exc2).
        out->write( exc2->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The example accesses the CDS projection view DEMO\_SALES\_PV\_SO\_EXP in which a virtual element expiry\_date is bound to an ABAP class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT:

-   First, it reads data from the view using an ABAP SQL SELECT statement.
-   Second, it reads data from the view using the [service binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_binding_glosry.htm "Glossary Entry") DEMO\_SB\_SALES\_PV\_SO\_EXP. For that, an [OData Client Proxy](https://help.sap.com/docs/ABAP_PLATFORM_NEW/68bf513362174d54b58cddec28794093/bb778da49bf34e03a699eb476d4bb316) is used, that accesses the OData service of the service binding.

When using ABAP SQL, the class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT is not accessed and the virtual element is not calculated. When using the service binding, the class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT is accessed. When using the OData service, the results of the query are provided by the [RAP query engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"). The RAP query engine uses ABAP SQL and also calls the method for calculating the virtual element.