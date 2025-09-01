  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) → 

Involved Objects

\* Work in progress \*

-   CDS data model

-   CDS entities (just views?), there must be at least one key field if used in a service binding, no hierarchies, no functions
    DDLS,

-   Business services

-   Service definitions
    SRVD, source-code-based in ... editor in ADT, same namespace as CDS entities, part of CDS,

-   Service bindings
    SRVB, form-based in ADT, different OData variants UI vs. Web API, V2 vs. V4.
    exposed CDS entities must have key fields, parameters must be typed with data elements
    Metadata
    https://ldcialx.wdf.sap.corp:44318/sap/opu/odata/sap/KELLERH\_SCARR\_SB\_OD\_WEB\_V2/$metadata/?sap-client=000
    Data:
    https://ldcialx.wdf.sap.corp:44318/sap/opu/odata/sap/KELLERH\_SCARR\_SB\_OD\_WEB\_V2/kellerh\_scarr/?sap-client=000
    Handled by default class /IWFND/CL\_SODATA\_HTTP\_HNDL\_OAT

-   Business objects

-   Tree structured consisting of CDS entities
    Root node defined by the addition ROOT
    Parent-child relationships are produced by the addition COMPOSITION in parent nodes. Child nodes must contain special associations with the addition TO PARENT.
    

-   Queries

-   Regular CDS entities (no business objects) exposed as a business service. Query runtime is SADL. SADL uses ABAP SQL to access the database. SADL uses SAP Gateway for exports of data in OData format.