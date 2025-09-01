  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Service Bindings, ABENCDS_SERVICE_BINDINGS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Service Bindings

A service binding is a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") defined in a form-based [ABAP Development Tool (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") that binds a [service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in ABAP CDS with a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") protocol and provides it as a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") to be used outside of [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry").

Different variants of [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") can be used as the [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") protocol:

-   OData in versions 2 and 4
-   OData for UIs or Web APIs
    -   OData for UIs is designed for access to business services using UI technologies like [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry"). The data provided by a business service contains control elements for user interfaces. These elements are themselves defined by [framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") in the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in question.
    -   OData for [Web APIs](javascript:call_link\('abenweb_api_glosry.htm'\) "Glossary Entry") is limited to the data-only content of the business services and does not contain any control elements for user interfaces.

The Information Access (InA) protocol can be used for [analytical queries](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry").

When a service binding is activated, it makes the business service accessible in accordance with the protocol used. This involves using internal frameworks such as [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry") and the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") to generate the objects in question. [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") services visible in transaction SICF are created to provide access to the OData-based data outside AS ABAP:

-   The ICF node of a service binding is /sap/opu/odata/sap/SB\_NAME, where SB\_NAME is the name of the service binding in uppercase letters.
-   A client can access the ICF node and use it for reads in accordance with the OData protocol, for example as follows:
    -   Access to the metadata of the OData service
        
        .../sap/opu/odata/sap/SB\_NAME/$metadata
        
    -   Access to the data of a CDS entity cds\_entity exposed in the service definition:
        
        .../sap/opu/odata/sap/SB\_NAME/cds\_entity
        
    -   Passing formal parameters to CDS entities with input parameters
        
        .../sap/opu/odata/sap/SB\_NAME/cds\_entity(p1=...,p2=...,...)
        
    -   Path specified for CDS entities with CDS associations whose [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") are exposed in the service definition
        
        .../sap/opu/odata/sap/SB\_NAME/cds\_entity?$expand=to.../to...
        
-   If the service binding for the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is defined by the [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") and behavior pools, transactional HTTP POST requests can be used to access the ICF node. The internal frameworks are responsible for calling the methods of the handler classes in the behavior pools in the correct order.

When a service binding is activated, the service definition used is checked to verify whether it meets the requirements of the internal underlying framework. The following restrictions currently apply:

-   The CDS entities of the service definition must have at least one key field.
-   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of CDS associations must be defined correctly.
-   No service binding can be defined for service definitions that expose CDS abstract entities.
-   The input parameters of the CDS entities must be typed with reference to data elements. A direct typing with built-in dictionary types is not allowed.
-   Depending on the OData version, not all data types are supported for the elements of the CDS entities.
-   The names of [actions](javascript:call_link\('abenbdl_action.htm'\)) defined in CDS BDL cannot produce naming conflicts and cannot exceed a certain length, as specified by the OData version.
-   The parameter structure of [actions](javascript:call_link\('abenbdl_action.htm'\)) defined in CDS BDL cannot overlap with the key fields of the CDS entity.

Hints

-   A service binding is not a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") defined in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry").
-   Once a service binding is activated, the form-based [ABAP Development Tool (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") shows the associated URL and enables comprehensive testing of the service.
-   The default HTTP request handler of an [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") service created when a service binding is activated is the class /IWFND/CL\_SODATA\_HTTP\_HNDL\_OAT in [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry").
-   [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry") offers OData client proxies in order to access OData data of an AS ABAP. These are of special use for OData data of business services.

Executable Examples

See [Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\)).