---
title: "ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES"
description: |
  Syntax MODIFY AUGMENTING  ENTITY bdef operations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) RELATING TO orig BY rela    ENTITIES OF bdef ENTITY bdef1 operations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapm
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_aug_entity_entities.htm"
abapFile: "abapmodify_aug_entity_entities.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "method", "abapmodify", "aug", "entity", "entities"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES, ABAPMODIFY_AUG_ENTITY_ENTITIES, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES

Syntax

MODIFY AUGMENTING *{* ENTITY bdef
                      [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]* *}*
                *|* *{* ENTITIES OF bdef
                      ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]*
                     *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]**\]*
                     *\[*...*\]* *}*.

Alternatives:

[1\. MODIFY AUGMENTING ENTITY ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. MODIFY AUGMENTING ENTITIES OF ...](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... RELATING TO orig BY rela](#!ABAP_ONE_ADD@1@)

Effect

A special variant of [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) that is only possible in the context of [projections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm). The variant can only be used by a [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and is used to manipulate the request for the base BO in the handler implementation. Only entities of the base BO can be modified by this statement. All [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm "Glossary Entry") are allowed including actions.

Hints

-   For the statements, no [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) can be specified, i.e. the additions FAILED, MAPPED or REPORTED cannot be used.
-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation.
-   An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.

Further Information

-   [CDS BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm)
-   Development guide for the ABAP RESTful Application Programming Model, section Operation Augmentation.

Alternative 1   

MODIFY AUGMENTING ENTITY ...

Effect

Short form. Used to manipulate the request for the base BO in the handler implementation. bdef must be the full name, i. e. not the alias name, of the projected root BO. Multiple operations can be specified for [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) within a single MODIFY statement. However, in this case, it must be ensured that the importing parameters for the corresponding methods are available.

Alternative 2   

MODIFY AUGMENTING ENTITIES ...

Effect

Long form. Used to manipulate the request for the base BO in the handler implementation including one or more RAP BO entities. bdef must be the full name, i. e. not the alias name, of the projected root BO.

bdef must be the full name, i. e. not the alias name, of the projected root BO followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the root entity bdef. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY AUGMENTING ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/bdef1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once. operations must be specified as outlined in the topic [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm).

Addition   

... RELATING TO orig BY rela

Effect

Used to relate augment instances to original instances. When the augmented request is passed to the base handler, it may return FAILED instances. If this happens for new instances that are not contained in the original request but added by the augment exit, it may be problematic for the consumer to relate these responses to the actual request. The runtime uses this information to transform FAILED keys of new instances back to the keys of the related original instances which the consumer can be expected to handle.

Each operation can be followed by this clause.

In the example code below, orig1 (the same is true for orig2) is an original instance table (i. e. the input for the augment exit), and rela1 is a variable of type ABP\_BEHV\_RELATING\_TAB that is a standard table of integers. The number of lines in augm1 and rela1 must be equal. All entries in rela1 must be integers between 0 and lines( orig1 ). A violation of these conditions leads to a runtime error. If the entry in rela1 is an integer greater than 0, for example, 2, it means that the second entry in augm1 is related to the second entry in orig1. If the entry is 0, it means that an entry in augm1 is not related to an entry in orig1, for example, because it is an original instance. It is possible that many augment instances are related in this way to the same original instance.

If augmentations are needed with the same operation, for example CREATE, but with instances relating to different original tables, it can be achieved by splitting the augmentation in several MODIFY AUGMENTING statements. If an instance from augm1 fails, for example when trying to lock it or when processing the base handler, the related orig1 instance is included in the FAILED response of the overall request. If the failure occurs when locking, the related orig1 instance is not passed to the base handler.

Example

MODIFY AUGMENTING ENTITY ...
  CREATE FROM augm1 RELATING TO orig1 BY rela1
  UPDATE FROM augm2 RELATING TO orig2 BY rela2 ...

Executable Example

The example [ABAP EML - MODIFY ENTITY AUGMENTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the addition AUGMENTING with a RAP projection business object.

Continue
![Example](exa.gif "Example") [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm)