  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components related to keys and RAP BO instance identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

%cid\_ref

Use

%cid\_ref is a component of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It is used as a reference to a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") instance for which [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) has been specified manually. The value of %cid\_ref is the same string as %cid that is referred to. This %cid must exist in the same ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) request. Thus, %cid\_ref cannot be used to refer to a particular %cid from another request.

When referencing an instance that has been created in the same request, note the following aspects:

-   It is mandatory to provide %cid and then %cid\_ref in the referencing operation. Otherwise, the new instance is not found in a referencing operation.
-   [%key](javascript:call_link\('abapderived_types_key.htm'\)) is ignored in the referencing operation. If %cid\_ref is provided in a referencing operation, %key need not be specified.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Type

The component has the following type: ABP\_BEHV\_CID.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   CREATE ([create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") only)
-   UPDATE
-   DELETE
-   ACTION IMPORT ([instance action](javascript:call_link\('abenbdl_action.htm'\)))
-   ACTION RESULT (instance action)

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
  SET FIELDS WITH VALUE #(
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
   MAPPED DATA(mapped)
   FAILED DATA(failed)
   REPORTED DATA(reported).

Executable Example

The example [Using %cid / %cid\_ref](javascript:call_link\('abenderived_types_cid_cidref_abexa.htm'\)) demonstrates the use of %cid and %cid\_ref with a managed RAP BO.