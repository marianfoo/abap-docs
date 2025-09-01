  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ ENTITY, ENTITIES, ABAPREAD_ENTITY_ENTITIES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

READ ENTITY, ENTITIES

Syntax Forms

[READ ENTITY, Short Form](javascript:call_link\('abapread_entity_short.htm'\))
1\. READ ENTITY *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* bdef [operations](javascript:call_link\('abapread_entity_entities_op.htm'\)) *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[READ ENTITIES, Long Form](javascript:call_link\('abapread_entities_long.htm'\))
2\. READ ENTITIES OF bdef*\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]*
         ENTITY bdef1 [operations](javascript:call_link\('abapread_entity_entities_op.htm'\))
        *\[*ENTITY bdef2 [operations](javascript:call_link\('abapread_entity_entities_op.htm'\))*\]*
        *\[*...*\]*
        *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[READ ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapread_entities_operations.htm'\))
3\. READ ENTITIES *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* OPERATIONS op\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Effect

Used to perform read-only operations on [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). Read operations always return a result and can be carried out on RAP BO entities by default (excluding the implementation type [abstract](javascript:call_link\('abenbdl_abstract.htm'\))) provided that the entities are part of a [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") after a declaration with [define behavior for](javascript:call_link\('abenbdl_define_beh.htm'\)).

The following variants of the READ statement can be used to read from RAP BO entities:

-   [READ ENTITY, Short Form](javascript:call_link\('abapread_entity_short.htm'\))
    
    The short form of the READ statement allows reading multiple instances of a single entity.
    
-   [READ ENTITIES, Long Form](javascript:call_link\('abapread_entities_long.htm'\))
    
    The long form of the READ statement allows reading multiple instances of multiple entities.
    
-   [READ ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapread_entities_operations.htm'\))
    
    The dynamic form of the READ statement allows collecting multiple instances to be read in multiple entities in one READ statement.
    

Hints

-   ABAP EML is used to read RAP BO node instances. From a RAP BO consumer perspective, the returned data of read operations include the current transactional image, i. e. the currently persisted values in the database and, additionally, the still unsaved changes from the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry").
-   ABAP EML READ statements in [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") and [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") trigger the calling of [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR READ](javascript:call_link\('abaphandler_meth_read.htm'\)).
-   ABAP EML statements should not be used within loops.

Further Information

Make sure that you fulfill the [RAP Business Object Contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](javascript:call_link\('abaprap_bo_contract.htm'\)).

Executable Example

-   The example [ABAP EML - READ, Variants](javascript:call_link\('abeneml_read_alternatives_abexa.htm'\)) demonstrates the different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples_abexas.htm'\)).

Continue
[READ ENTITY, Short Form](javascript:call_link\('abapread_entity_short.htm'\))
[READ ENTITIES, Long Form](javascript:call_link\('abapread_entities_long.htm'\))
[READ ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapread_entities_operations.htm'\))
[READ ENTITY, ENTITIES, operations](javascript:call_link\('abapread_entity_entities_op.htm'\))
[Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples_abexas.htm'\))