  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - RAP Business Services \(BS\), ABENCDS_BUSINESS_SERVICES, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - RAP Business Services (BS)

A [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") is a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") service provided by [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") as part of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). A business service consists mainly of the following parts:

-   [Service definition](javascript:call_link\('abencds_service_definitions.htm'\))
    
    A service definition is a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") that exposes the CDS entities in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") accessed using the business service.
    
-   [Service binding](javascript:call_link\('abencds_service_bindings.htm'\))
    
    A service binding is a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that binds a service definition to a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") protocol and uses this protocol to publish the business.
    

A business service can be used to both read and write to AS ABAP. In the latter case, the CDS entity exposed by the service definition must be the root entity of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") for which there is a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") and a behavior pool.

Hint

A service definition can be published by multiple service bindings using different protocols.

Continue
[ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\))
[ABAP CDS - Service Bindings](javascript:call_link\('abencds_service_bindings.htm'\))
[ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\))