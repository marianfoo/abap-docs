  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP business object, ABENRAP_BO_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

RAP business object

RAP BO for short. [Business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_object_glosry.htm "Glossary Entry") in the context of [ABAP RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_glosry.htm "Glossary Entry"). A RAP BO is mainly described by a [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") that defines the [RAP business object behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") for a set of special hierarchical [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") in form of RAP behavior operations and behavior characteristics. A RAP BO has [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") to handle its data that are available in a [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"). There are two kinds of RAP BOs:

-   [managed RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") that are fully or partly provided by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry")
-   [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") that are provided by the [unmanaged RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_prov_glosry.htm "Glossary Entry") that is implemented in an [ABAP behavior implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_implement_glosry.htm "Glossary Entry").

A RAP BO can be exposed as a [business service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_service_glosry.htm "Glossary Entry") for access from outside [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") and is consumed by the [RAP transactional engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry") then. For access to RAP BOs from inside AS ABAP, ABAP contains a subset called [ABAP Entity Manipulation Language (EML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaeml_glosry.htm "Glossary Entry").