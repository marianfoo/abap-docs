---
title: "MODIFY ENTITY, ENTITIES, operations"
description: |
  Syntax ... CREATE field_spec(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm) CREATE BY _assoc field_spec(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm) UPDATE field_spe
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm"
abapFile: "abapmodify_entity_entities_op.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "data", "types", "internal-table", "abapmodify", "entity", "entities"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY ENTITY, ENTITIES, operations, ABAPMODIFY_ENTITY_ENTITIES_OP, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

MODIFY ENTITY, ENTITIES, operations

Syntax

... *\[*CREATE [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm)*\]*
    *\[*CREATE BY \\\_assoc [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm)*\]*
    *\[*UPDATE [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm)*\]*
    *\[*DELETE [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm)*\]*
    *\[*EXECUTE action [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm) *\[*REQUEST request*\]* *\[* [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm)*\]**\]* ...

Variants:

[1\. ... CREATE field\_spec](#!ABAP_VARIANT_1@1@)
[2\. ... CREATE BY \\\_assoc field\_spec](#!ABAP_VARIANT_2@2@)
[3\. ... UPDATE field\_spec](#!ABAP_VARIANT_3@3@)
[4\. ... DELETE field\_spec](#!ABAP_VARIANT_4@4@)
[5\. ... EXECUTE action field\_spec](#!ABAP_VARIANT_5@5@)

Effect

The EML MODIFY statement supports the following operations:

-   CREATE: Create new RAP BO node instances for root or child entities.
-   CREATE BY: Create target instances for associated entities for which create must be enabled in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The creation is not restricted to compositions.
-   UPDATE: Update existing RAP BO node instances.
-   DELETE: Delete existing RAP BO node instances. Note that the deletion also affects node instances along the composition.
-   EXECUTE [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm): Carry out self-defined modify operations.

In both, managed and unmanaged implementations, all modify operations must be specified in the [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). See more details in the BDL documentation: [Define Behavior, Standard Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm). All nonstandard operations (actions) must be self-implemented in the [ABP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Each modify operation requires an internal table (field\_spec) of instances as input parameters after the respective keyword to specify the fields that should be modified.

Hints

-   After the keyword BY for create-by-association operations, a backslash (\\) must be inserted in front of the associations are displayed via the code completion.
-   Updating and deleting instances via associations is not possible.
-   In [draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm) scenarios, draft instances are created if the draft indicator [%is\_draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_is_draft.htm) is set to true. If it is set to false, active instances are created.

Further Information

See further information and rules for using ABAP EML statements in implementations of the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Variant 1   

... CREATE field\_spec

Effect

Used to create new node instances of a [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") entity.

For the keywords that must follow the keyword CREATE, see the documentation for [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OP\_2 demonstrates a CREATE operation.

MODIFY ENTITY demo\_managed\_root
CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root )
WITH VALUE #(
    ( %cid = 'cid1' key\_field = 1
      data\_field1\_root = 'aaa' data\_field2\_root = 'bbb' )
    ( %cid = 'cid2' key\_field = 2
      data\_field1\_root = 'ccc' data\_field2\_root = 'ddd' )
    ( %cid = 'cid3' key\_field = 3
      data\_field1\_root = 'eee' data\_field2\_root = 'fff')
    ( %cid = 'cid4' key\_field = 4
      data\_field1\_root = 'ggg' data\_field2\_root = 'hhh')
          ).

Variant 2   

... CREATE BY \\\_assoc field\_spec

Effect

Used to create new node instances for associated entities for which create must be enabled in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The creation is not restricted to compositions. \_assoc is the name of the association as it is specified in the underlying CDS view.

For the keywords that must follow the keyword CREATE, see the documentation for [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OP\_2 demonstrates a create-by-association operation.

MODIFY ENTITY demo\_managed\_root
CREATE BY \\\_child
FIELDS ( data\_field1\_child data\_field2\_child )
WITH VALUE #(
  ( key\_field = 1
    %target = VALUE #( ( %cid = 'cid3'
                         data\_field1\_child = 'iii'
                         data\_field2\_child = 'jjj' ) ) )
  ( key\_field = 2
    %target = VALUE #( ( %cid = 'cid4'
                         data\_field1\_child = 'kkk'
                         data\_field2\_child = 'lll' ) ) ) ).

Variant 3   

... UPDATE field\_spec

Effect

Used to update node instances of a RAP BO. The UPDATE statement allows delta updates on [RAP BO consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") side to be triggered where only key fields and the fields with new values must be provided. On [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") side, the fields to be overwritten and kept are identified.

For the keywords that must follow the keyword UPDATE, see the documentation for [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OP\_2 demonstrates an UPDATE operation.

MODIFY ENTITY demo\_managed\_root
UPDATE FIELDS ( data\_field1\_root data\_field2\_root )
WITH VALUE #(
    ( key\_field = 3
      data\_field1\_root = 'qqq'
      data\_field2\_root = 'rrr')
    ( key\_field = 4
      data\_field1\_root = 'sss'
      data\_field2\_root = 'ttt') ).

Variant 4   

... DELETE field\_spec

Effect

Used to delete instances of a RAP BO. Only key field values or [%cid\_ref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) are needed to identify which instances are to be deleted.

For the keywords that must follow the keyword DELETE, see the documentation for [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OP\_2 demonstrates a DELETE operation.

MODIFY ENTITY demo\_managed\_root
DELETE FROM VALUE #( ( key\_field = 4  ) ).

Variant 5   

... EXECUTE action field\_spec *\[*REQUEST request*\]* *\[*RESULT result\_tab*\]*

Additions:

[1\. ... REQUEST request](#!ABAP_ADDITION_1@1@)
[2\. ... RESULT result\_tab](#!ABAP_ADDITION_2@2@)

Effect

Used to trigger custom actions that are defined to modify data in a self-implemented way. The syntax for executing an action allows requested data (REQUEST request) to be specified and result data (RESULT result\_tab) to be exported, each action specified in target variables.

For the keywords that must follow the keyword CREATE, see the documentation for [field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm).

Example

The following source code section taken from DEMO\_CDS\_PURCHASE demonstrates a modify operation executing an action.

MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m
  ENTITY PurchaseDocument
  EXECUTE approve\_order
  FROM VALUE #( ( PurchaseDocument = 'a' ) )
  RESULT FINAL(result)
  FAILED FINAL(failed)
  REPORTED FINAL(reported).

Addition 1   

... REQUEST request

Effect

Used to specify whether the result should be returned completely or only parts of it (for example, only the keys) for the purpose of improving performance. request must be typed with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE STRUCTURE FOR ACTION REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm). The components of the structure are all key and data fields of the RAP BO entity. They are of type ABP\_BEHV\_FLAG and can be flagged to specify whether the respective fields are included or not.

This is optional and can only be used for actions specified in the BDEF with the addition [result selective](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm).

Addition 2   

... RESULT result\_tab

Effect

Actions can optionally return a result. This can only be used for actions specified in the BDEF with the addition [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm). The internal table result\_tab must be of type TABLE FOR ACTION RESULT bdef~action. See more details in [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm).

Executable Example

-   The example [MODIFY: Standard Operations (Managed)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_op_abexa.htm) demonstrates various standard operations with MODIFY.
-   The example [MODIFY: Nonstandard Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_custom_op_abexa.htm) shows the implementation of an action in the context of a managed RAP BO. See more examples of actions in the [ABAP CDS documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_abexas.htm).
-   The example [MODIFY: Standard Operations (Unmanaged)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_op_u_abexa.htm) demonstrates all standard operations with MODIFY with a simple unmanaged RAP BO.
-   The example [Example for RAP Handler Methods (Unmanaged BO with draft)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_handler_methods_abexa.htm) includes various standard and nonstandard ABAP EML MODIFY operations in both a [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and a [consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_modify_examples_abexas.htm).

Continue
[MODIFY ENTITY, ENTITIES, field\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm)