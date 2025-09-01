  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Business%20Services%20%28BS%29%2C%20ABENCDS_BUSINESS_SERVICES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Business Services (BS)

A [RAP business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") is a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") service provided by [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") as part of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). A RAP business service consists mainly of the following parts:

-   [Service definition](javascript:call_link\('abencds_service_definitions.htm'\))
    
    A service definition exposes CDS entities that can be accessed by a business service.
    
-   [Service binding](javascript:call_link\('abencds_service_bindings.htm'\))
    
    A service binding is a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that binds a service definition to a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") protocol, thereby publishing the business service for external consumption.
    

A business service can be used for both read and write access to AS ABAP. In the latter case, the CDS entity exposed by the service definition must be the root entity of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") for which there is a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") and a behavior pool.

Hint

A service definition can be published multiple times by different service bindings using different protocols.