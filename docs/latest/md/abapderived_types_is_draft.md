  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25is_draft%2C%20ABAPDERIVED_TYPES_IS_DRAFT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%is\_draft

Use

The draft indicator %is\_draft is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used to indicate if a [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") instance is a [drafts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) instance or an active instance. To create a draft instance, %is\_draft must be explicitly set in ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) requests.

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_identifiers.htm)

Type

The component has the following type: ABP\_BEHV\_FLAG

Where used

In ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) requests, the component can be referred to directly or via the [component group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomponent_group_glosry.htm "Glossary Entry") [%tky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_tky.htm) since %is\_draft is a component of %tky.

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_ISDRAFT demonstrates the component %is\_draft.

MODIFY ENTITY demo\_unmanaged\_root\_draft
    CREATE FIELDS ( field1 field2 field3 field4 )
    WITH VALUE #(
       ( %cid = 'cid4'
         %is\_draft = if\_abap\_behv=>mk-on
         key\_field = 4
         field1 = 'ggg'
         field2 = 'hhh'
         field3 = 40
         field4 = 41 )
       ( %cid = 'cid5'
         %is\_draft = if\_abap\_behv=>mk-on
         key\_field = 5
         field1 = 'iii'
         field2 = 'jjj'
         field3 = 50
         field4 = 51 )
       ( %cid = 'cid6'
         %is\_draft = if\_abap\_behv=>mk-on
         key\_field = 6
         field1 = 'kkk'
         field2 = 'lll'
         field3 = 60
         field4 = 61 ) )
       MAPPED FINAL(mapped)
       FAILED FINAL(failed)
       REPORTED FINAL(reported).

Executable Example

The example [Using %is\_draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_isdraft_abexa.htm) demonstrates the use of %is\_draft with an unmanaged RAP BO in a draft scenario.