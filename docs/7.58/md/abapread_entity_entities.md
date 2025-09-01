---
title: "READ ENTITY, ENTITIES"
description: |
  Syntax Forms READ ENTITY, Short Form(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm) 1. READ ENTITY  IN LOCAL MODE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)PRIVILEGED(https://help.sap.com/doc/abapdocu_758_ind
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm"
abapFile: "abapread_entity_entities.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "data", "types", "abapread", "entity", "entities"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20ENTITY%2C%20ENTITIES%2C%20ABAPREAD_ENTITY_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ ENTITY, ENTITIES

Syntax Forms

[READ ENTITY, Short Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm)

1\. READ ENTITY *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm)*\]* entity [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*\]*.

[READ ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_long.htm)

2\. READ ENTITIES OF bdef*\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm)*\]*
         ENTITY entity1 [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm)
        *\[*ENTITY entity2 [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm)*\]*
        *\[*...*\]*
        *\[*[response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*\]*.

[READ ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_operations.htm)

3\. READ ENTITIES *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm)*\]* OPERATIONS op\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*\]*.

Effect

Used to perform read-only operations on [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). Read operations always return a result and can be carried out on RAP BO entities by default (excluding the implementation type [abstract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_abstract.htm)) provided that the entities are part of a [behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") after a declaration with [define behavior for](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm).

The following variants of the READ statement can be used to read from RAP BO entities:

-   [READ ENTITY, Short Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm)
    
    The short form of the READ statement allows reading multiple instances of a single entity.
    
-   [READ ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_long.htm)
    
    The long form of the READ statement allows reading multiple instances of multiple entities.
    
-   [READ ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_operations.htm)
    
    The dynamic form of the READ statement allows collecting multiple instances to be read in multiple entities in one READ statement.
    

Hints

-   ABAP EML is used to read RAP BO node instances. From a RAP BO consumer perspective, the returned data of read operations include the current transactional image, i. e. the currently persisted values in the database and, additionally, the still unsaved changes from the current [LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenluw_glosry.htm "Glossary Entry").
-   ABAP EML READ statements in [RAP BO consumers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") trigger the calling of [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_read.htm).
-   When specifying the REPORTED response parameter for an ABAP EML READ request, the related [RAP state messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") of the instances and child entities of a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the REPORTED response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and an entity instance contains a state message, the component [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm) of the REPORTED response contains %STATE as an indicator for state messages. When using ABAP EML READ statements with the addition IN LOCAL MODE in behavior implementations, the original value of %state\_area can be retrieved. See the example [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_messages_abexa.htm).
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_impl_rules.htm).

Executable Example

-   The example [ABAP EML - READ, Variants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_read_alternatives_abexa.htm) demonstrates the different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_read_examples_abexas.htm).

Continue
[READ ENTITY, Short Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm)
[READ ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_long.htm)
[READ ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_operations.htm)
[READ ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm)
[Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_read_examples_abexas.htm)