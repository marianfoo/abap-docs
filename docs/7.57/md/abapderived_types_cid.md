---
title: "Use"
description: |
  %cid is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is a string to define a content ID that should be filled for ABAP EML requests. In case of strict(2)(https://help.sap.com/doc/abapdocu_757_in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid.htm"
abapFile: "abapderived_types_cid.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "types", "abapderived", "cid"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %cid, ABAPDERIVED_TYPES_CID, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

%cid

Use

%cid is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is a string to define a content ID that should be filled for ABAP EML requests. In case of [strict(2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_2.htm) mode, the use of %cid is enforced.

Content IDs are used as a unique and preliminary identifier for [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") instances, especially as long as no primary key exists for the particular instance. %cid is used in RAP create operations and then performing further, referencing modifications on them using [%cid\_ref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid_ref.htm), for example, RAP operations with [CREATE BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm), [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) and [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm), as well as [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm) with [EXECUTE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm), in a single ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) request. Furthermore, %cid must be filled because it is relevant for the [RAP BO instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") identification in the RAP [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) mapped, failed and reported.

%cid must be unique within one ABAP EML request and can be specified manually or automatically. The specified content ID is only valid within one ABAP EML request. The specification of %cid must be done even if there are no further operations referring to it. Especially in the context of [early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm) and [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenarios, %cid must be specified to avoid issues.

In ABAP EML MODIFY statements, the addition [AUTO FILL CID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm) can be used to create %cid automatically to ensure that %cid is filled. However, if %cid\_ref is to be used, %cid must be specified manually since %cid\_ref cannot refer to an automatically created value.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm)

Type

The component has the following type: ABP\_BEHV\_CID.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   CREATE
-   ACTION IMPORT ([static action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm))
-   ACTION RESULT (static action)
-   FUNCTION IMPORT ([static function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm))
-   FUNCTION RESULT (static function)
-   FAILED \[EARLY\]
-   MAPPED \[EARLY\]
-   REPORTED \[EARLY\]

The component also occurs in the [%target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_target.htm) component.

Hint

Note the difference of using %cid with static actions and [factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_factory_action_glosry.htm "Glossary Entry"). In factory actions (this also includes static factory actions), the use of %cid is as outlined above. In case of static actions, %cid assumes a different role. Here, %cid must be considered as an operation ID which can be referred to in RAP [responses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm).

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_CID demonstrates the component %cid.

MODIFY ENTITY demo\_managed\_root\_4
  CREATE FIELDS ( key\_field field1 field2 field3 field4 )
  WITH VALUE #(
    ( %cid = 'cid1'
      key\_field = 1
      field1 = 'aaa'
      field2 = 'bbb'
      field3 = 10
      field4 = 11 )
    ( %cid = 'cid2'
      key\_field = 2
      field1 = 'ccc'
      field2 = 'ddd'
      field3 = 20
      field4 = 21 )
    ( %cid = 'cid3'
      key\_field = 3
      field1 = 'eee'
      field2 = 'fff'
      field3 = 30
      field4 = 31 ) )
   MAPPED FINAL(mapped)
   FAILED FINAL(failed)
   REPORTED FINAL(reported).

Executable Example

The example [Using %cid / %cid\_ref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_cid_cidref_abexa.htm) demonstrates the use of %cid and %cid\_ref with a managed RAP BO.