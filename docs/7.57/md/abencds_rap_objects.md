  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - RAP Objects, ABENCDS_RAP_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

ABAP CDS - RAP Objects

[RAP objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_object_glosry.htm "Glossary Entry") are special [CDS objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") that support [ABAP RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_glosry.htm "Glossary Entry"):

-   [Service definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_definitions.htm) for [RAP business services (BS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_business_services.htm)
-   [Behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) for [RAP business objects (BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm)

RAP business services provide access to CDS entities by Web clients from outside an AS ABAP. Such an access can be a pure read access (query) or a transactional request.

-   For read accesses (queries), all accesses from the AS ABAP to the underlying database are encapsulated by the [RAP transactional engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry"). Normally, no own ABAP programming is necessary. Only in exceptional cases, special [CDS custom entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") can be used, that are implemented in ABAP classes.
-   For transactional requests, RAP business objects (RAP BOs) are required. In a RAP BO, a behavior is defined by a CDS behavior definition for a CDS entity, that can be exposed by a RAP business service. The behavior is implemented by the managed RAP BO provider or in ABAP behavior implementations.

More information about ABAP RAP can be found under ABAP RESTful Programming Model.

Continue
[ABAP CDS - RAP Business Services (BS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_business_services.htm)
[ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm)