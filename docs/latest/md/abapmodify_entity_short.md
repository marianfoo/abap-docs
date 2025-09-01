---
title: "MODIFY ENTITY, Short Form"
description: |
  Syntax MODIFY ENTITY  IN LOCAL MODE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)PRIVILEGED(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) entity operations(https://help.sap.com/doc/abapdocu_latest_ind
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_short.htm"
abapFile: "abapmodify_entity_short.htm"
keywords: ["insert", "do", "if", "case", "try", "method", "class", "data", "abapmodify", "entity", "short"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20ENTITY%2C%20Short%20Form%2C%20ABAPMODIFY_ENTITY_SHORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY ENTITY, Short Form

Syntax

MODIFY ENTITY *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]* entity [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The short form of the MODIFY statement is used to perform transactional modify operations ([operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)) for a single RAP BO node.

entity can be any node of the RAP BO when the statement is used within the implementation class. If the statement is used outside of the implementation class, entity can only be the [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"). entity must be the full entity name and cannot be an alias name. It is also possible to specify any node of the RAP BO following the root entity name and \\\\:

MODIFY ENTITY root\_entity\\\\bdef\_node1 ...
MODIFY ENTITY root\_entity\\\\bdef\_node2 ...
...

bdef\_node1, bdef\_node2, and so on, must be the alias names if provided in the BDEF. Otherwise, the full names must be inserted.

Multiple operations can be inserted for operations within a single MODIFY statement.

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

The following source code section taken from CL\_DEMO\_RAP\_EML\_MODIFY demonstrates an EML MODIFY ENTITY statement that includes a CREATE and create-by-association operation.

MODIFY ENTITY demo\_managed\_root
      CREATE FIELDS ( key\_field data\_field1\_root
          data\_field2\_root ) WITH VALUE #(
        ( %cid = 'cid1' key\_field = 1
          data\_field1\_root = 'aaa' data\_field2\_root = 'bbb' )
        ( %cid = 'cid2' key\_field = 2
          data\_field1\_root = 'ccc' data\_field2\_root = 'ddd' ) )
      CREATE BY \\\_child FIELDS ( data\_field1\_child
          data\_field2\_child ) WITH VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #( ( %cid = 'cid3'
                               data\_field1\_child = 'eee'
                               data\_field2\_child = 'fff' )
                           ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #( ( %cid = 'cid4'
                               data\_field1\_child = 'ggg'
                               data\_field2\_child = 'hhh' )
                           ) )
        )
        FAILED   FINAL(fail\_mod)
        REPORTED FINAL(rep\_mod)
        MAPPED FINAL(map\_mod).

Executable Examples

-   The example [ABAP EML - MODIFY, Variants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_modify_alternatives_abexa.htm) demonstrates this MODIFY variant with a simple managed RAP BO.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_modify_examples_abexas.htm).