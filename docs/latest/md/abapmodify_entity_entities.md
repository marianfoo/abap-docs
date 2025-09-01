---
title: "MODIFY ENTITY, ENTITIES"
description: |
  Syntax Forms MODIFY ENTITY, Short Form(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_short.htm) 1. MODIFY ENTITY  IN LOCAL MODE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)PRIVILEGED(https://help.sap.com/doc/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm"
abapFile: "abapmodify_entity_entities.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "abapmodify", "entity", "entities"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20ENTITY%2C%20ENTITIES%2C%20ABAPMODIFY_ENTITY_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY ENTITY, ENTITIES

Syntax Forms

[MODIFY ENTITY, Short Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_short.htm)

1\. MODIFY ENTITY *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]* entity [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

[MODIFY ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_long.htm)

2\. MODIFY ENTITIES OF bdef *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]*
           ENTITY entity1 [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)
          *\[*ENTITY entity2 [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)*\]*
          *\[*...*\]*
          *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

[MODIFY ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_operations_dyn.htm)

3\. MODIFY ENTITIES *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]* OPERATIONS op\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Effect

Used to perform [RAP modify operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") on [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). This includes [standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencrud_glosry.htm "Glossary Entry") (CREATE, CREATE BY, UPDATE, DELETE) and nonstandard operations (actions) using the keyword EXECUTE.

The following variants of the MODIFY statement can be used to modify RAP BO entities:

-   [MODIFY ENTITY, Short Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_short.htm)
    
    The short form of the MODIFY statement allows modifying instances of a single entity.
    
-   [MODIFY ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_long.htm)
    
    The long form of the MODIFY statement allows modifying instances of multiple entities.
    
-   [MODIFY ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_operations_dyn.htm)
    
    The dynamic form of the MODIFY statement allows collecting multiple instances to be modified in multiple entities in one MODIFY statement.
    

Hints

-   A [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must not use ABAP EML MODIFY statements in the [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [check\_before\_save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_check_before_save.htm), [adjust\_numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_adjust_numbers.htm), [save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_save.htm), [save\_modified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_saver_meth_save_modified.htm) and [cleanup](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_cleanup.htm). The statements can only be used in the [RAP interaction phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and in the [finalize](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_finalize.htm) saver method in the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). Furthermore, ABAP EML MODIFY statements are not allowed in read-only [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry").
-   ABAP EML MODIFY statements in [RAP BO consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") trigger the calling of [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm).
-   RAP modify [standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_standard_operation_glosry.htm "Glossary Entry") do not return [result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_result.htm) parameters, whereas [non-standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") do so. The changed data can be read via a subsequent ABAP EML READ statement.
-   RAP BO instances can only be modified if several conditions are met. For example, a modification can be prevented depending on certain specifications in the BDEF, among them control characteristics like (global or instance) [authorization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm) and [feature control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm), [locking](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_locking.htm), [ETag](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_etag.htm) or [prechecks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm). See more detailed information on the mentioned topics in the Development guide for the ABAP RESTful Application Programming Model, section [Business Object](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a3ff9dcdb25a4f1a9408422b8ba5fa00?version=sap_cross_product_abap).
-   If ABAP EML modify statements are used outside of behavior pools, for example, in ABAP programs, a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement is necessary to persist data to the database. If the statement is not provided, there would not be any effect on the database because the modify operations are only performed on the transactional buffer. Hence, a manual triggering of the save sequence is required. This is valid for all modify operations. Note that RAP supports the established [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_glosry.htm "Glossary Entry") concept that incorporates [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm). In RAP, COMMIT ENTITIES basically includes COMMIT WORK and provides additional information.
-   When executing independent modify requests, there is no dedicated processing sequence. However, the processing sequence is relevant if the modify requests are dependent, for example, when using [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) or [%cid\_ref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) or in case of [create-by-association operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") that can be dependent on a previous operation. To ensure the processing sequence when executing independent modify requests, it is recommended that separate EML statements are used. In the interest of a better performance, requests should preferably be executed in a bundled way.
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   A special MODIFY ENTITY/MODIFY ENTITIES variant exists that includes the keyword AUGMENTING with which incoming requests can be modified on the projection layer before data reaches the transactional buffer. The variant can currently only be used for projections. See the details in the documentation for [MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_aug_entity_entities.htm).
-   In case of a non-dynamic ABAP EML MODIFY statement without the addition IN LOCAL MODE and without specifying the FAILED response parameter, it is recommended that the FAILED response parameter is specified and that proper error handling on the [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma ##EML\_FAILED\_MISSING\_OK.

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_impl_rules.htm).

Executable Examples

-   The example [ABAP EML - MODIFY, Variants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_modify_alternatives_abexa.htm) demonstrates the different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_modify_examples_abexas.htm).
-   The example [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_handler_methods_abexa.htm) demonstrates various RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled. It includes ABAP EML requests with MODIFY in a RAP consumer and provider.

Continue
[MODIFY ENTITY, Short Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_short.htm)
[MODIFY ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_long.htm)
[MODIFY ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_operations_dyn.htm)
[MODIFY ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)
[Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_modify_examples_abexas.htm)