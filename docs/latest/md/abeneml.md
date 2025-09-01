---
title: "ABAP EML - Consuming RAP BOs"
description: |
  The ABAP Entity Manipulation Language (EML)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaeml_glosry.htm 'Glossary Entry') is a subset of ABAP for accessing RAP business objects (RAP BOs) and RAP BO interfaces. EML statements allow the data content of a RAP BO (transactional
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm"
abapFile: "abeneml.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abeneml"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20Consuming%20RAP%20BOs%2C%20ABENEML%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - Consuming RAP BOs

The [ABAP Entity Manipulation Language (EML)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaeml_glosry.htm "Glossary Entry") is a subset of ABAP for accessing RAP business objects (RAP BOs) and RAP BO interfaces. EML statements allow the data content of a RAP BO (transactional buffer) to be read or modified and the persistent storage of modified data to be triggered.

ABAP EML can be used in all ABAP programs to consume RAP BOs. In particular, they can be used in the implementation of a RAP BO in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") itself. For the latter there are some special [EML variants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_in_abp.htm).

The execution of an EML statement triggers processes in the [RAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_runt_framework_glosry.htm "Glossary Entry") that call the implementation of the RAP BOs. For [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") or unmanaged parts of [managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") the implementation is part of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). Otherwise, it is part of the RAP provider framework.

The operands of EML statements are mainly special messenger tables for passing data to and receiving results or messages from RAP BOs. These messenger tables are internal tables whose line type is tailor-made for this purpose.

The following topics are covered in this section:

-   [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommon_eml_elements.htm)
-   [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm)
-   [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_permissions.htm)
-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm)
-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities.htm)
-   [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback_entities.htm)
-   [SET LOCKS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locks.htm)

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_impl_rules.htm).

Continue
[ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommon_eml_elements.htm)
[COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm)
[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_permissions.htm)
[MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm)
[READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities.htm)
[ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback_entities.htm)
[SET LOCKS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locks.htm)