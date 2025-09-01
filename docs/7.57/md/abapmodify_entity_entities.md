  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY ENTITY, ENTITIES, ABAPMODIFY_ENTITY_ENTITIES, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

MODIFY ENTITY, ENTITIES

Syntax Forms

[MODIFY ENTITY, Short Form](javascript:call_link\('abapmodify_entity_short.htm'\))
1\. MODIFY ENTITY *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* bdef [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[MODIFY ENTITIES, Long Form](javascript:call_link\('abapmodify_entities_long.htm'\))
2\. MODIFY ENTITIES OF bdef *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]*
           ENTITY bdef1 [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\))
          *\[*ENTITY bdef2 [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\))*\]*
          *\[*...*\]*
          *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[MODIFY ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapmodify_entities_operations_dyn.htm'\))
3\. MODIFY ENTITIES *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* OPERATIONS op\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Effect

Used to perform [RAP modify operations](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") on [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). This includes [standard operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") (CREATE, CREATE BY, UPDATE, DELETE) and nonstandard operations (actions) using the keyword EXECUTE.

The following variants of the MODIFY statement can be used to modify RAP BO entities:

-   [MODIFY ENTITY, Short Form](javascript:call_link\('abapmodify_entity_short.htm'\))
    
    The short form of the MODIFY statement allows modifying instances of a single entity.
    
-   [MODIFY ENTITIES, Long Form](javascript:call_link\('abapmodify_entities_long.htm'\))
    
    The long form of the MODIFY statement allows modifying instances of multiple entities.
    
-   [MODIFY ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapmodify_entities_operations_dyn.htm'\))
    
    The dynamic form of the MODIFY statement allows collecting multiple instances to be modified in multiple entities in one MODIFY statement.
    

Hints

-   A [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") must not use ABAP EML MODIFY statements in the [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)), [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)), [save](javascript:call_link\('abensaver_method_save.htm'\)), [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) and [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)). The statements can only be used in the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") and in the [finalize](javascript:call_link\('abensaver_finalize.htm'\)) saver method in the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). Furthermore, ABAP EML MODIFY statements are not allowed in read-only [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry").
-   ABAP EML MODIFY statements in [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") and [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") trigger the calling of [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)).
-   RAP modify [standard operations](javascript:call_link\('abenrap_standard_operation_glosry.htm'\) "Glossary Entry") do not return [result](javascript:call_link\('abapeml_result.htm'\)) parameters, whereas [non-standard operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") do so. The changed data can be read via a subsequent ABAP EML READ statement.
-   RAP BO instances can only be modified if several conditions are met. For example, a modification can be prevented depending on certain specifications in the BDEF, among them control characteristics like (global or instance) [authorization](javascript:call_link\('abenbdl_authorization.htm'\)) and [feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)), [locking](javascript:call_link\('abenbdl_locking.htm'\)), [ETag](javascript:call_link\('abenbdl_etag.htm'\)) or [prechecks](javascript:call_link\('abenbdl_precheck.htm'\)). See more detailed information on the mentioned topics in the Development guide for the ABAP RESTful Application Programming Model, section Business Object.
-   If ABAP EML modify statements are used outside of behavior pools, for example, in ABAP programs, a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement is necessary to persist data to the database. If the statement is not provided, there would not be any effect on the database because the modify operations are only performed on the transactional buffer. Hence, a manual triggering of the save sequence is required. This is valid for all modify operations. Note that RAP supports the established [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") concept that incorporates [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). In RAP, COMMIT ENTITIES basically includes COMMIT WORK and provides additional information.
-   When executing independent modify requests, there is no dedicated processing sequence. However, the processing sequence is relevant if the modify requests are dependent, for example, when using [%cid](javascript:call_link\('abapderived_types_comp.htm'\)) or [%cid\_ref](javascript:call_link\('abapderived_types_comp.htm'\)) or in case of [create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") that can be dependent on a previous operation. To ensure the processing sequence when executing independent modify requests, it is recommended that separate EML statements are used. In the interest of a better performance, requests should preferably be executed in a bundled way.
-   ABAP EML statements should not be used within loops.
-   A special MODIFY ENTITY/MODIFY ENTITIES variant exists that includes the keyword AUGMENTING with which incoming requests can be modified on the projection layer before data reaches the transactional buffer. The variant can currently only be used for projections. See the details in the documentation for [MODIFY AUGMENTING ENTITY, ENTITIES](javascript:call_link\('abapmodify_aug_entity_entities.htm'\)).

Further Information

Make sure that you fulfill the [RAP Business Object Contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](javascript:call_link\('abaprap_bo_contract.htm'\)).

Executable Example

-   The example [ABAP EML - MODIFY, Variants](javascript:call_link\('abeneml_modify_alternatives_abexa.htm'\)) demonstrates the different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples_abexas.htm'\)).
-   The example [Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)) demonstrates various RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled. It includes ABAP EML requests with MODIFY in a RAP consumer and provider.

Continue
[MODIFY ENTITY, Short Form](javascript:call_link\('abapmodify_entity_short.htm'\))
[MODIFY ENTITIES, Long Form](javascript:call_link\('abapmodify_entities_long.htm'\))
[MODIFY ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapmodify_entities_operations_dyn.htm'\))
[MODIFY ENTITY, ENTITIES, operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\))
[Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples_abexas.htm'\))