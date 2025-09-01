  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - CDS Interface Behavior Definition, ABENBDL_RAP_BO_INTERFACE, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - CDS Interface Behavior Definition

A [CDS interface behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") is created using the behavior definition language [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [BDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_source_code_glosry.htm "Glossary Entry").

A [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") is a RAP business object that serves as interface for stable consumption. It is typically released as [released API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry") under the [C1 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry"). It might also be released under the [C0 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry") for extensibility. A RAP BO interface consists of a [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") and a CDS interface behavior definition. It does not have a runtime handler and cannot specify an implementation class for [ABAP behavior implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"). Instead, it reuses or inherits the behavior and characteristics of the underlying base BO. Each RAP BO can have multiple interfaces.

RAP BO interfaces can only be consumed with [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_eml_glosry.htm "Glossary Entry"). It is not possible to expose a RAP BO interface directly as [RAP business service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_service_glosry.htm "Glossary Entry").

The following image shows the role of CDS interface behavior definitions in a CDS data model.

![Figure](abdoc_interface_bdef.png)

A CDS interface behavior definition must always be based on a [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") and it defines the behavior that is included in the interface. Another projection layer ([CDS transactional query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") and [projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry")) can be built on top of a RAP BO interface.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Business Object Interface.

Continue
[CDS BDL - CDS Behavior Definition Header, Interface BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bo_interface_header.htm)
[CDS BDL - Entity Behavior Definition, Interface BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_interface.htm)