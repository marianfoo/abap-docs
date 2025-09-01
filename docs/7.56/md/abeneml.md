---
title: "ABAP EML - Consuming RAP BOs"
description: |
  The ABAP Entity Manipulation Language (EML)(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaeml_glosry.htm 'Glossary Entry') is a subset of ABAP for accessing RAP business objects (RAP BOs). EML statements allow the data content of a RAP BO (transactional buffer) to be read or modi
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm"
abapFile: "abeneml.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abeneml"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) → 

ABAP EML - Consuming RAP BOs

The [ABAP Entity Manipulation Language (EML)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaeml_glosry.htm "Glossary Entry") is a subset of ABAP for accessing RAP business objects (RAP BOs). EML statements allow the data content of a RAP BO (transactional buffer) to be read or modified and the persistent storage of modified data to be triggered.

ABAP EML can be used in all ABAP programs to consume RAP BOs. In particular, they can be used in the implementation of a RAP BO in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") itself. For the latter there are some special [EML variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_in_abp.htm).

The execution of an EML statement triggers processes in the [RAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runt_framework_glosry.htm "Glossary Entry") that call the implementation of the RAP BOs. For [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") or unmanaged parts of [managed RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") the implementation is part of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). Otherwise, it is part of the RAP provider framework.

The operands of EML statements are mainly special messenger tables for passing data to and receiving results or messages from RAP BOs. These messenger tables are internal tables whose line type is tailor-made for this purpose.

Continue
[ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommon_eml_elements.htm)
[COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm)
[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm)
[MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm)
[READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm)
[ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback_entities.htm)
[SET LOCKS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks.htm)