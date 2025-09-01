---
title: "READ ENTITY, ENTITIES"
description: |
  Syntax Forms READ ENTITY, Short Form(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_short.htm) 1. READ ENTITY  IN LOCAL MODE(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm) PRIVILEGED(https://help.sap.com/doc/abapdocu_7
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm"
abapFile: "abapread_entity_entities.htm"
keywords: ["do", "if", "try", "data", "abapread", "entity", "entities"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) → 

READ ENTITY, ENTITIES

Syntax Forms

[READ ENTITY, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_short.htm)
1\. READ ENTITY *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]* bdef [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.
[READ ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_long.htm)
2\. READ ENTITIES OF bdef*\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]*
         ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm)
        *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm)*\]*
        *\[*...*\]*
        *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.
[READ ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_operations.htm)
3\. READ ENTITIES *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* OPERATIONS op\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.

Effect

Used to perform read-only operations on [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). Read operations always return a result and can be carried out on RAP BO entities by default (excluding the implementation type [abstract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm)) provided that the entities are part of a [behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") after a declaration with [define behavior for](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm).

The following variants of the READ statement can be used to read from RAP BO entities:

-   [READ ENTITY, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_short.htm)
    
    The short form of the READ statement allows reading multiple instances of a single entity.
    
-   [READ ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_long.htm)
    
    The long form of the READ statement allows reading multiple instances of multiple entities.
    
-   [READ ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_operations.htm)
    
    The dynamic form of the READ statement allows collecting multiple instances to be read in multiple entities in one READ statement.
    

Hint

ABAP EML is used to read RAP BO node instances. From a RAP BO consumer perspective, the returned data of read operations include the current transactional image, i. e. the currently persisted values in the database and, additionally, the still unsaved changes from the current [LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry").

Executable Example

-   The example [ABAP EML - READ, Variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_read_alternatives_abexa.htm) demonstrates the three different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_read_examples.htm).

Continue
[READ ENTITY, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_short.htm)
[READ ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_long.htm)
[READ ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_operations.htm)
[READ ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm)
[Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_read_examples.htm)