  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Behavior Definitions, ABENCDS_BDEF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP CDS - Behavior Definitions

A [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (BDEF for short) is an ABAP repository object that defines the transactional behavior of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of [ABAP RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_glosry.htm "Glossary Entry"). The transactional behavior defines and restricts how a RAP BO can be accessed by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). A BDEF is always based on a CDS data model that consists of at least one [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") and it refers to the root entity. A root entity can have no more than one BDEF.

A CDS behavior definition consists of a [header part](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and at least one [entity behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry"). The entity behavior definition, in turn, is made up of [entity characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") and a [body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_body_glosry.htm "Glossary Entry"). One or more [authorization contexts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") can optionally be defined.

The following image shows the structure of a CDS behavior definition:

![Figure](abdoc_bdef_structure.png)

Further details on the parts of a CDS behavior definition can be found in the following sections:

-   [BDEF header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bdef_header.htm)
-   [entity behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm)
-   [entity behavior characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_character.htm)
-   [entity behavior body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm)
-   [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm)

Further Information

An exhaustive description of RAP business objects, behavior characteristics, and transactional behavior can be found in the development guide for the RESTful Application Programming Model, in section Business Object.

Continue
[ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm)