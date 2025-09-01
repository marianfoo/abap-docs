  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %cid_ref, ABAPDERIVED_TYPES_CID_REF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

%cid\_ref

Use

%cid\_ref is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used as a reference to a [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") instance for which [%cid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid.htm) has been specified manually. The value of %cid\_ref is the same string as %cid that is referred to. This %cid must exist in the same ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) request. Thus, %cid\_ref cannot be used to refer to a particular %cid from another request.

When referencing an instance that has been created in the same request, note the following aspects:

-   It is mandatory to provide %cid and then %cid\_ref in the referencing operation. Otherwise, the new instance is not found in a referencing operation.
-   [%key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_key.htm) is ignored in the referencing operation. If %cid\_ref is provided in a referencing operation, %key need not be specified.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm)

Type

The component has the following type: ABP\_BEHV\_CID.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   CREATE ([create-by-association operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") only)
-   UPDATE
-   DELETE
-   ACTION IMPORT ([instance action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm))
-   ACTION RESULT (instance action)

Hints

-   If a [RAP BO operation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") refers to an instance via %cid\_ref, the key values of the affected instance are basically ignored if specified in the [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). For example, if a create request is followed by an update request and the reference is made via %cid\_ref, it does not matter if the update request also specifies the key values for the instance reference (it could actually be a non-existent key).
-   According to the RAP Business Object Contract, for example, a duplicate update on [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") within one [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry") is not allowed. However, the syntax currently allows for a RAP BO operation following a create request in the same RAP LUW to refer to a previously created instance both via %cid\_ref and only the key values, too.

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_CID demonstrates the component %cid\_ref that refers to a previously defined content ID %cid.

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

The example [Using %cid / %cid\_ref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_cid_cidref_abexa.htm) demonstrates the use of %cid and %cid\_ref with a managed RAP BO.