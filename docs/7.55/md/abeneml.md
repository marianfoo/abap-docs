---
title: "ABAP Entity Manipulation Language"
description: |
  Work in progress  Entity Manipulation Language (or EML for short) is a set of ABAP statements for manipulating the CDS entities(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm 'Glossary Entry') that are granted a behavior by the behavior definition(https
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm"
abapFile: "abeneml.htm"
keywords: ["do", "if", "try", "method", "abeneml"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) → 

ABAP Entity Manipulation Language

\* Work in progress \*

Entity Manipulation Language (or EML for short) is a set of ABAP statements for manipulating the [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") that are granted a behavior by the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). EML statements allow:

-   Modifying operations on CDS entities.
    For this purpose, the statement MODIFY ENTITIES is available in different variants, which reference one or more entities of a [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry"), statically or dynamically: [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm), [MODIFY ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entity.htm) and [MODIFY ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities_op.htm).

-   Read operations on CDS entities.
    For this purpose, the statement READ ENTITIES is available in different variants, which reference one or more entities of a business object, statically or dynamically: [READ ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm), [READ ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entity.htm) and [READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entities_op.htm).

-   Triggering the saver sequence.
    For this purpose the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm) is available in different variants: COMMIT ENTITIES and COMMIT ENTITIES RESPONSES.

-   Handling the result of the [adjust\_numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_adjust_numbers.htm) method.
    For this purpose there is the block-constructing variant of COMMIT ENTITIES and the [CONVERT KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvert_key.htm) statement.

-   Rolling back all changes since the last COMMIT.
    For this purpose there is the [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_rollback_entities.htm) statement.

-   Explicit locking of instances for a following modification.
    For this purpose the statement [SET LOCKS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm) is available in different variants: SET LOCKS OF and SET LOCKS ENTITY.

If the IMPORT table is empty, the method is not called.

Continue
[ABAP EML - MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm)
[ABAP EML - READ ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm)
[ABAP EML - COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm)
[ABAP EML - CONVERT KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvert_key.htm)
[ABAP EML - ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_rollback_entities.htm)
[ABAP EML - SET LOCKS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm)
[ABAP EML - GET FEATURES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features.htm)