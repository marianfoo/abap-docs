  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

READ ENTITY, ENTITIES

Syntax Forms

[READ ENTITY, Short Form](javascript:call_link\('abapread_entity_short.htm'\))
1\. READ ENTITY *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* bdef [operations](javascript:call_link\('abapread_entity_entities_op.htm'\)) *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[READ ENTITIES, Long Form](javascript:call_link\('abapread_entities_long.htm'\))
2\. READ ENTITIES OF bdef*\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]*
         ENTITY bdef1 [operations](javascript:call_link\('abapread_entity_entities_op.htm'\))
        *\[*ENTITY bdef2 [operations](javascript:call_link\('abapread_entity_entities_op.htm'\))*\]*
        *\[*...*\]*
        *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[READ ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapread_entities_operations.htm'\))
3\. READ ENTITIES *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* OPERATIONS op\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Effect

Used to perform read-only operations on [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). Read operations always return a result and can be carried out on RAP BO entities by default (excluding the implementation type [abstract](javascript:call_link\('abenbdl_abstract.htm'\))) provided that the entities are part of a [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") after a declaration with [define behavior for](javascript:call_link\('abenbdl_define_beh.htm'\)).

The following variants of the READ statement can be used to read from RAP BO entities:

-   [READ ENTITY, Short Form](javascript:call_link\('abapread_entity_short.htm'\))
    
    The short form of the READ statement allows reading multiple instances of a single entity.
    
-   [READ ENTITIES, Long Form](javascript:call_link\('abapread_entities_long.htm'\))
    
    The long form of the READ statement allows reading multiple instances of multiple entities.
    
-   [READ ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapread_entities_operations.htm'\))
    
    The dynamic form of the READ statement allows collecting multiple instances to be read in multiple entities in one READ statement.
    

Hint

ABAP EML is used to read RAP BO node instances. From a RAP BO consumer perspective, the returned data of read operations include the current transactional image, i. e. the currently persisted values in the database and, additionally, the still unsaved changes from the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry").

Executable Example

-   The example [ABAP EML - READ, Variants](javascript:call_link\('abeneml_read_alternatives_abexa.htm'\)) demonstrates the three different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples.htm'\)).

Continue
[READ ENTITY, Short Form](javascript:call_link\('abapread_entity_short.htm'\))
[READ ENTITIES, Long Form](javascript:call_link\('abapread_entities_long.htm'\))
[READ ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapread_entities_operations.htm'\))
[READ ENTITY, ENTITIES, operations](javascript:call_link\('abapread_entity_entities_op.htm'\))
[Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples.htm'\))