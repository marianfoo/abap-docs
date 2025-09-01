---
title: "Use"
description: |
  %cid_ref is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used as a reference to a RAP BO(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm 'Glossary
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid_ref.htm"
abapFile: "abapderived_types_cid_ref.htm"
keywords: ["update", "delete", "do", "if", "try", "types", "abapderived", "cid", "ref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25cid_ref%2C%20ABAPDERIVED_TYPES_CID_REF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%cid\_ref

Use

%cid\_ref is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used as a reference to a [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") instance for which [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm) has been specified manually. The value of %cid\_ref is the same string as %cid that is referred to. This %cid must exist in the same ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) request. Thus, %cid\_ref cannot be used to refer to a particular %cid from another request.

When referencing an instance that has been created in the same request, note the following aspects:

-   It is mandatory to provide %cid and then %cid\_ref in the referencing operation. Otherwise, the new instance is not found in a referencing operation.
-   [%key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_key.htm) is ignored in the referencing operation. If %cid\_ref is provided in a referencing operation, %key need not be specified.

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_identifiers.htm)

Type

The component has the following type: ABP\_BEHV\_CID.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm):

-   CREATE ([create-by-association operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") only)
-   UPDATE
-   DELETE
-   ACTION IMPORT ([instance action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm))
-   ACTION RESULT (instance action)

Hints

-   If a [RAP BO operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") refers to an instance via %cid\_ref, the key values of the affected instance are basically ignored if specified in the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). For example, if a create request is followed by an update request and the reference is made via %cid\_ref, it does not matter if the update request also specifies the key values for the instance reference (it could actually be a non-existent key).
-   According to the [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap), for example, a duplicate update on [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") within one and the same ABAP EML request is not allowed. However, the syntax currently allows for a RAP BO operation following a create request in the same RAP transaction to refer to a previously created instance both via %cid\_ref and only the key values, too.

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_CID demonstrates the component %cid\_ref that refers to a previously defined content ID %cid.

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
  CREATE BY \\\_child
   FIELDS ( key\_field\_child field1 field2 field3 field4 )
   WITH VALUE #(
    ( %cid\_ref = 'cid1'
      %target = VALUE #(
        ( %cid = 'cid\_child1'
          key\_field\_child = 10
          field1 = 'ggg'
          field2 = 'hhh'
          field3 = 100
          field4 = 101  ) ) ) )
  UPDATE FIELDS ( field2 ) WITH VALUE #(
    ( %cid\_ref = 'cid2'
      field2 = 'iii' ) )
  DELETE FROM VALUE #(
    ( %cid\_ref = 'cid3' ) )
   MAPPED FINAL(mapped)
   FAILED FINAL(failed)
   REPORTED FINAL(reported).

Executable Example

The example [Using %cid / %cid\_ref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_cid_cidref_abexa.htm) demonstrates the use of %cid and %cid\_ref with a managed RAP BO.