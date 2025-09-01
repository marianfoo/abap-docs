  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - RAP Objects, ABENCDS_RAP_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

ABAP CDS - RAP Objects

[RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry") are special [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") that support [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"):

-   [Service definitions](javascript:call_link\('abencds_service_definitions.htm'\)) for [RAP business services (BS)](javascript:call_link\('abencds_business_services.htm'\))
-   [Behavior definitions](javascript:call_link\('abencds_bdef.htm'\)) for [RAP business objects (BO)](javascript:call_link\('abencds_rap_business_objects.htm'\))

RAP business services provide access to CDS entities by Web clients from outside an AS ABAP. Such an access can be a pure read access (query) or a transactional request.

-   For read accesses (queries), all accesses from the AS ABAP to the underlying database are encapsulated by the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry"). Normally, no own ABAP programming is necessary. Only in exceptional cases, special [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") can be used, that are implemented in ABAP classes.
-   For transactional requests, RAP business objects (RAP BOs) are required. In a RAP BO, a behavior is defined by a CDS behavior definition for a CDS entity, that can be exposed by a RAP business service. The behavior is implemented by the managed RAP BO provider or in ABAP behavior implementations.

More information about ABAP RAP can be found under ABAP RESTful Programming Model.

Continue
[ABAP CDS - RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\))
[ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\))