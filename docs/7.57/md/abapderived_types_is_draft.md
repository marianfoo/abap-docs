  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Keys and RAP BO Instance Identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %is_draft, ABAPDERIVED_TYPES_IS_DRAFT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

%is\_draft

Use

The draft indicator %is\_draft is a component of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It is used to indicate if a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") instance is a [drafts](javascript:call_link\('abenbdl_with_draft.htm'\)) instance or an active instance. To create a draft instance, %is\_draft must be explicitly set in ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) requests.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Type

The component has the following type: ABP\_BEHV\_FLAG

Where used

In ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) requests, the component can be referred to directly or via the [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") [%tky](javascript:call_link\('abapderived_types_tky.htm'\)) since %is\_draft is a component of %tky.

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_ISDRAFT demonstrates the component %is\_draft.

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

The example [Using %is\_draft](javascript:call_link\('abenderived_types_isdraft_abexa.htm'\)) demonstrates the use of %is\_draft with an unmanaged RAP BO in a draft scenario.