---
title: "ABAP CDS - Service Bindings"
description: |
  A service binding is a repository object(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm 'Glossary Entry') defined in a form-based ABAP Development Tool (ADT)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm 'Glossary Entry
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_bindings.htm"
abapFile: "abencds_service_bindings.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abencds", "service", "bindings"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Services (BS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_business_services.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Service Bindings, ABENCDS_SERVICE_BINDINGS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Service Bindings

A service binding is a [repository object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") defined in a form-based [ABAP Development Tool (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") that binds a [service definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_definition_glosry.htm "Glossary Entry") in ABAP CDS with a [RESTful](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestful_glosry.htm "Glossary Entry") protocol and provides it as a [business service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_service_glosry.htm "Glossary Entry") to be used outside of [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry").

Different variants of [OData](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenodata_glosry.htm "Glossary Entry") can be used as the [RESTful](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestful_glosry.htm "Glossary Entry") protocol:

-   OData in versions 2 and 4
-   OData for UIs or Web APIs
    -   OData for UIs is designed for access to business services using UI technologies like [SAPUI5](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensapui5_glosry.htm "Glossary Entry"). The data provided by a business service contains control elements for user interfaces. These elements are themselves defined by [framework-specific annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") in the [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") in question.
    -   OData for [Web APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenweb_api_glosry.htm "Glossary Entry") is limited to the data-only content of the business services and does not contain any control elements for user interfaces.

The Information Access (InA) protocol can be used for [analytical queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry").

When a service binding is activated, it makes the business service accessible in accordance with the protocol used. This involves using internal frameworks such as [SAP Gateway](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gateway_glosry.htm "Glossary Entry") and the [RAP query engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_query_engine_glosry.htm "Glossary Entry") to generate the objects in question. [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_glosry.htm "Glossary Entry") services visible in transaction SICF are created to provide access to the OData-based data outside AS ABAP:

-   The ICF node of a service binding is /sap/opu/odata/sap/SB\_NAME, where SB\_NAME is the name of the service binding in uppercase letters.
-   A client can access the ICF node and use it for reads in accordance with the OData protocol, for example as follows:
    -   Access to the metadata of the OData service
        
        .../sap/opu/odata/sap/SB\_NAME/$metadata
        
    -   Access to the data of a CDS entity cds\_entity exposed in the service definition:
        
        .../sap/opu/odata/sap/SB\_NAME/cds\_entity
        
    -   Passing formal parameters to CDS entities with input parameters
        
        .../sap/opu/odata/sap/SB\_NAME/cds\_entity(p1=...,p2=...,...)
        
    -   Path specified for CDS entities with CDS associations whose [association targets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") are exposed in the service definition
        
        .../sap/opu/odata/sap/SB\_NAME/cds\_entity?$expand=to.../to...
        
-   If the service binding for the [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") is defined by the [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") and behavior pools, transactional HTTP POST requests can be used to access the ICF node. The internal frameworks are responsible for calling the methods of the handler classes in the behavior pools in the correct order.

When a service binding is activated, the service definition used is checked to verify whether it meets the requirements of the internal underlying framework. The following restrictions currently apply:

-   The CDS entities of the service definition must have at least one key field.
-   The [cardinality](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencardinality_glosry.htm "Glossary Entry") of CDS associations must be defined correctly.
-   No service binding can be defined for service definitions that expose CDS abstract entities.
-   The input parameters of the CDS entities must be typed with reference to data elements. A direct typing with built-in dictionary types is not allowed.
-   Depending on the OData version, not all data types are supported for the elements of the CDS entities.
-   The names of [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm) defined in CDS BDL cannot produce naming conflicts and cannot exceed a certain length, as specified by the OData version.
-   The parameter structure of [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm) defined in CDS BDL cannot overlap with the key fields of the CDS entity.

Hints

-   A service binding is not a [CDS object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") defined in [CDS source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_source_code_glosry.htm "Glossary Entry").
-   Once a service binding is activated, the form-based [ABAP Development Tool (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") shows the associated URL and enables comprehensive testing of the service.
-   The default HTTP request handler of an [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_glosry.htm "Glossary Entry") service created when a service binding is activated is the class /IWFND/CL\_SODATA\_HTTP\_HNDL\_OAT in [SAP Gateway](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gateway_glosry.htm "Glossary Entry").
-   [SAP Gateway](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gateway_glosry.htm "Glossary Entry") offers OData client proxies in order to access OData data of an AS ABAP. These are of special use for OData data of business services.

Executable Examples

See [Consuming Business Services](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenservice_bindings_abexas.htm).