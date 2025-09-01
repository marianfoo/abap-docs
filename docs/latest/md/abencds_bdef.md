  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Behavior%20Definitions%2C%20ABENCDS_BDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Behavior Definitions

A [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (BDEF for short) is an ABAP repository object that defines the transactional behavior of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of [ABAP RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_glosry.htm "Glossary Entry"). The transactional behavior defines and restricts how a RAP BO can be accessed by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). A BDEF is always based on a CDS data model that consists of at least one [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") and it refers to the root entity. A root entity can have no more than one BDEF.

A RAP behavior definition consists of a [header part](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and at least one [entity behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry"). The entity behavior definition, in turn, is made up of [entity characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") and a [body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_body_glosry.htm "Glossary Entry"). One or more [authorization contexts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_con_glosry.htm "Glossary Entry") can optionally be defined.

The following image shows the structure of a RAP behavior definition:

![Figure](abdoc_bdef_structure.png)

Further details on the parts of a RAP behavior definition can be found in the following sections:

-   [BDEF header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_header.htm)
-   [entity behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm)
-   [entity behavior characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character.htm)
-   [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm)
-   [authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm)

Further Information

An exhaustive description of RAP business objects, behavior characteristics, and transactional behavior can be found in the development guide for the RESTful Application Programming Model, in section [Business Object](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a3ff9dcdb25a4f1a9408422b8ba5fa00?version=sap_cross_product_abap).

Continue
[RAP BDL - Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_syntax.htm)
[RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm)