---
title: "MODIFY ENTITIES, Long Form"
description: |
  Syntax MODIFY ENTITIES OF bdef  IN LOCAL MODE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)PRIVILEGED(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) ENTITY entity1 operations(https://help.sap.com/doc/a
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entities_long.htm"
abapFile: "abapmodify_entities_long.htm"
keywords: ["insert", "update", "delete", "do", "if", "case", "try", "method", "data", "abapmodify", "entities", "long"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20ENTITIES%2C%20Long%20Form%2C%20ABAPMODIFY_ENTITIES_LONG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY ENTITIES, Long Form

Syntax

MODIFY ENTITIES OF bdef *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]*
           ENTITY entity1 [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)
          *\[*ENTITY entity2 [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)*\]*
          *\[*...*\]*
          *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The long form of the MODIFY statement is used for executing multiple modify operations ([operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)) on multiple entities of a RAP BO. However, it can also be used for a single operation on a single RAP BO.

bdef must be a [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") followed by a list of operations grouped by individual entities. entity1, entity2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the root entity bdef. If specified in the BDEF, alias names should be used for entity1, entity2, and so on. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/entity1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once.

Hint

A [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must not use ABAP EML MODIFY statements in the [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [check\_before\_save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_check_before_save.htm), [adjust\_numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_adjust_numbers.htm), [save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_save.htm), [save\_modified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_saver_meth_save_modified.htm) and [cleanup](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_cleanup.htm). The statements can only be used in the [RAP interaction phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and in the [finalize](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_finalize.htm) saver method in the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). Furthermore, ABAP EML MODIFY statements are not allowed in read-only [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry").

Addition 1   

... IN LOCAL MODE

Effect

The addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm) is used to exclude [feature controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) and [authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm). It can only be used within the RAP BO runtime implementation.

Hint

In case of a non-dynamic ABAP EML MODIFY statement without the addition IN LOCAL MODE and without specifying the FAILED response parameter, it is recommended that the FAILED response parameter is specified and that proper error handling on the [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma ##EML\_FAILED\_MISSING\_OK.

Addition 2   

... PRIVILEGED

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_MODIFY demonstrates an EML MODIFY ENTITIES OF statement that includes CREATE, UPDATE and create-by-association operations.

MODIFY ENTITIES OF demo\_managed\_root
    ENTITY demo\_managed\_root
        CREATE FIELDS ( key\_field data\_field1\_root
          data\_field2\_root ) WITH VALUE #(
          ( %cid = 'cid5'
            key\_field = 3
            data\_field1\_root = 'iii'
            data\_field2\_root = 'jjj' )
          ( %cid = 'cid6'
            key\_field = 4
            data\_field1\_root = 'kkk'
            data\_field2\_root = 'lll' ) )
    ENTITY demo\_managed\_root
        UPDATE FIELDS ( data\_field1\_root
          data\_field2\_root ) WITH VALUE #(
          ( %cid\_ref = 'cid6'
            data\_field1\_root = 'mmm'
            data\_field2\_root = 'nnn' ) )
    ENTITY demo\_managed\_root
        CREATE BY \\\_child FIELDS ( data\_field1\_child
          data\_field2\_child ) WITH VALUE #(
          ( %cid\_ref = 'cid5'
            %target = VALUE #( ( %cid = 'cid7'
                                 data\_field1\_child = 'eee'
                                 data\_field2\_child = 'fff' )
                             ) )
          ( %cid\_ref = 'cid6'
            %target = VALUE #( ( %cid = 'cid8'
                                 data\_field1\_child = 'ggg'
                                 data\_field2\_child = 'hhh' )
                             ) ) )
    ENTITY child
        UPDATE FIELDS ( data\_field1\_child
            data\_field2\_child ) WITH VALUE #(
          ( %cid\_ref = 'cid8'
            data\_field1\_child = 'ooo'
            data\_field2\_child = 'ppp' ) )
        FAILED   FINAL(fail\_mod)
        REPORTED FINAL(rep\_mod)
        MAPPED   FINAL(map\_mod).

Example

The root entity name in the position of the first statement, MODIFY ENTITIES OF bdef, must be the full entity name. entity1, and so on, should be the entity alias names if provided in the [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

For example, an alias name is specified for root and child entity as in the BDEF DEMO\_RAP\_MANAGED\_GROUP. A statement with MODIFY ENTITIES OF could be as follows:

MODIFY ENTITIES OF demo\_rap\_managed\_group
  ENTITY RootEntity
    CREATE FIELDS ( keyfieldroot charfieldroot datafieldroot )
    WITH VALUE #(
        (  %cid = 'cid1' keyfieldroot = 1
           datafieldroot = 'aaa' charfieldroot = 'bbb' )
        (  %cid = 'cid2' keyfieldroot = 2
           datafieldroot = 'ccc' charfieldroot = 'ddd' )
              )
  ENTITY ChildEntity
    DELETE FROM VALUE #(
        ( keyfield = 3 keyfieldchild = 4 )
        ( keyfield = 5 keyfieldchild = 6 )
              ).

Executable Example

-   The example [ABAP EML - MODIFY, Variants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_modify_alternatives_abexa.htm) demonstrates this MODIFY variant with a simple managed RAP BO.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_modify_examples_abexas.htm).