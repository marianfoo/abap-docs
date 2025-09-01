  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) → 

MODIFY ENTITY, ENTITIES

Syntax Forms

[MODIFY ENTITY, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_short.htm)
1\. MODIFY ENTITY *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]* bdef [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.
[MODIFY ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entities_long.htm)
2\. MODIFY ENTITIES OF bdef *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]*
           ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm)
          *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm)*\]*
          *\[*...*\]*
          *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.
[MODIFY ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entities_operations_dyn.htm)
3\. MODIFY ENTITIES *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* OPERATIONS op\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.

Effect

Used to perform transactional modify operations on [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). This includes [standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") (CREATE, CREATE BY, UPDATE, DELETE) and nonstandard operations (actions) using the keyword EXECUTE.

The following variants of the MODIFY statement can be used to modify RAP BO entities:

-   [MODIFY ENTITY, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_short.htm)
    
    The short form of the MODIFY statement allows modifying instances of a single entity.
    
-   [MODIFY ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entities_long.htm)
    
    The long form of the MODIFY statement allows modifying instances of multiple entities.
    
-   [MODIFY ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entities_operations_dyn.htm)
    
    The dynamic form of the MODIFY statement allows collecting multiple instances to be modified in multiple entities in one MODIFY statement.
    

Hints

-   Modify standard operations do not return [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm) parameters, whereas nonstandard operations do so. The changed data can be read via a subsequent ABAP EML READ statement.
-   RAP BO instances can only be modified if several conditions are met. For example, a modification can be prevented depending on certain specifications in the BDEF, among them control characteristics like (global or instance) [authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) and [feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm), [locking](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm), [ETag](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm) or [prechecks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm). See more detailed information on the mentioned topics in the Development guide for the ABAP RESTful Application Programming Model, section Business Object.
-   If ABAP EML modify statements are used outside of behavior pools, for example, in ABAP programs, a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm) statement is required to persist data to the database. If the statement is not provided, there would not be any effect on the database because the modify operations are only performed on the transactional buffer. Hence, a manual triggering of the save sequence is required. This is valid for all modify operations. Note that RAP supports the established [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry") concept that incorporates [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm). In RAP, COMMIT ENTITIES basically includes COMMIT WORK and provides additional information.
-   When executing independent modify requests, there is no dedicated processing sequence. However, the processing sequence is relevant if the modify requests are dependent, for example, when using [%cid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) or [%cid\_ref](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) or in case of [create-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") that can be dependent on a previous operation. To ensure the processing sequence when executing independent modify requests, it is recommended that separate EML statements are used. In the interest of a better performance, requests should preferably be executed in a bundled way.
-   A special MODIFY ENTITY/MODIFY ENTITIES variant exists that includes the keyword AUGMENTING with which incoming requests can be modified on the projection layer before data reaches the transactional buffer. The variant can currently only be used for projections. See the details in the documentation for [MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_aug_entity_entities.htm).

Executable Example

-   The example [ABAP EML - MODIFY, Variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_modify_alternatives_abexa.htm) demonstrates the three different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_modify_examples.htm).
-   The example [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_handler_methods_abexa.htm) demonstrates various RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled. It includes ABAP EML requests with MODIFY in RAP consumer and provider.

Continue
[MODIFY ENTITY, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_short.htm)
[MODIFY ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entities_long.htm)
[MODIFY ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entities_operations_dyn.htm)
[MODIFY ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm)
[Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_modify_examples.htm)