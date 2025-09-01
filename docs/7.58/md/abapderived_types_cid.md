---
title: "Use"
description: |
  %cid is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is a string to define a content ID that should be filled for ABAP EML requests. In case of strict(2)(https://help.sap.com/doc/abapdocu_758_in
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm"
abapFile: "abapderived_types_cid.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "types", "abapderived", "cid"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25cid%2C%20ABAPDERIVED_TYPES_CID%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%cid

Use

%cid is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is a string to define a content ID that should be filled for ABAP EML requests. In case of [strict(2)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict_2.htm) mode, the use of %cid is enforced.

Content IDs are used as a unique and preliminary identifier for [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") instances, especially as long as no primary key exists for the particular instance. %cid is used in RAP create operations to create RAP BO instances and for performing further, referencing modifications on those instances using [%cid\_ref](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid_ref.htm). %cid\_ref - which has the same value as %cid - is then used, for example, in RAP operations using [CREATE BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm), [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) and [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm), as well as [actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) with [EXECUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) in a single ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) request.

%cid must be unique within one ABAP EML request and can be specified manually or automatically. The specified content ID is only valid within one ABAP EML request. The specification of %cid should be done even if there are no further operations referring to it. Especially in the context of [early numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_early_numb.htm) and [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenarios, %cid must be specified to avoid issues.

In ABAP EML MODIFY statements, the addition [AUTO FILL CID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_fields.htm) can be used to create %cid automatically to ensure that %cid is filled. However, if %cid\_ref is to be used, %cid must be specified manually since %cid\_ref cannot refer to an automatically created value.

Type

The component has the following type: ABP\_BEHV\_CID.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm):

-   CREATE
-   ACTION IMPORT ([static action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm))
-   ACTION RESULT (static action)
-   FUNCTION IMPORT ([static function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_function.htm))
-   FUNCTION RESULT (static function)
-   FAILED \[EARLY\]
-   MAPPED \[EARLY\]
-   REPORTED \[EARLY\]

The component also occurs in the [%target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_target.htm) component.

Hints

-   A missing %cid specification can cause a runtime error. See [RAP Implementation Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_impl_rules.htm).
-   Note the difference of using %cid with static actions and [factory actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_factory_action_glosry.htm "Glossary Entry"). In factory actions (this also includes static factory actions), the use of %cid is as outlined above. In case of static actions, %cid assumes a different role. Here, %cid must be considered as an operation ID which can be referred to in RAP [responses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_identifiers.htm)

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_CID demonstrates the component %cid.

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

The example [Using %cid / %cid\_ref](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_cid_cidref_abexa.htm) demonstrates the use of %cid and %cid\_ref with a managed RAP BO.