  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) → 

ABAP CDS - RAP Business Services (BS)

A [business service](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_service_glosry.htm "Glossary Entry") is a [RESTful](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestful_glosry.htm "Glossary Entry") service provided by [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") as part of [ABAP RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_glosry.htm "Glossary Entry"). A business service consists mainly of the following parts:

-   [Service definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_service_definitions.htm)
    
    A service definition is a [CDS object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm "Glossary Entry") that exposes the CDS entities in [CDS source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_source_code_glosry.htm "Glossary Entry") accessed using the business service.
    
-   [Service binding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_service_bindings.htm)
    
    A service binding is a [repository object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") that binds a service definition to a [RESTful](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestful_glosry.htm "Glossary Entry") protocol and uses this protocol to publish the business.
    

A business service can be used to both read and write to AS ABAP. In the latter case, the CDS entity exposed by the service definition must be the root entity of a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") for which there is a [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") and a behavior pool.

Hint

A service definition can be published by multiple service bindings using different protocols.

Continue
[ABAP CDS - Service Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_service_definitions.htm)
[ABAP CDS - Service Bindings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_service_bindings.htm)
[ABAP CDS - Consuming Business Services](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_bindings_abexas.htm)