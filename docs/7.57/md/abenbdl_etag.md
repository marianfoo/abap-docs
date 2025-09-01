  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Characteristics](javascript:call_link\('abenbdl_character.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - etag, ABENBDL_ETAG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CDS BDL - etag

Syntax Forms

ETag for active version
  etag master MasterField
*|* etag dependent by \_Assoc
ETag for [draft version](javascript:call_link\('abenbdl_with_draft.htm'\))
  total etag TotalEtagField

Variants:

[1\. ... etag master MasterField](#!ABAP_VARIANT_1@1@)
[2\. ... etag dependent by \_Assoc](#!ABAP_VARIANT_2@2@)
[3\. ... total etag TotalEtagField](#!ABAP_VARIANT_3@3@)

Effect

Defines a field as entity tag ([ETag](javascript:call_link\('abenrap_etag_glosry.htm'\) "Glossary Entry")) field for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry"). A field flagged as ETag field is used to describe, uniquely, the state of a requested resource (for example a specific [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry")). Any changes made to the requested resource update the ETag field. On each change request, the value of the ETag field is compared to the value the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") sends with the request and only if these values match is the change request accepted. This way, inconsistencies and unintentional changes of data are prevented when multiple users work on the same data. Often fields containing time stamps, hash values, or any other versioning that precisely identifies the version of the data set are used.

etag master and etag dependent can optionally be used for the [persistent data](javascript:call_link\('abenrap_persistent_data_glosry.htm'\) "Glossary Entry") of a business object. They are defined at entity-level in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") for each [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") separately. If an entity is an [ETag master entity](javascript:call_link\('abenrap_etag_ma_ent_glosry.htm'\) "Glossary Entry"), it has its own ETag field. An [ETag dependent entity](javascript:call_link\('abenrap_etag_dep_ent_glosry.htm'\) "Glossary Entry") uses the ETag field of another entity for optimistic concurrency control.

total etag is available only for [draft-enabled business objects](javascript:call_link\('abenbdl_with_draft.htm'\)) and for these, it is recommended. It manages the transitions from active data to draft data and vice versa.

In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), optimistic concurrency control with ETag fields can be handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"), so that no implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required. This is only possible if the following prerequisites are met:

-   The ETag field must be updated reliably with every change on the [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").
-   The read access to the ETag master field from every entity that uses an ETag must be guaranteed.

In a [projection](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") or interface behavior definition, the optimistic concurrency control functionality can be reused with the keyword use etag. For details, see topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).

Hints

-   In draft-enabled RAP BOs, [total ETag](javascript:call_link\('abenrap_total_etag_glosry.htm'\) "Glossary Entry") and ETag master/dependent complement each other and it is recommended that both are used together. Since both serve different purposes, separate fields must be used to enable both functionalities.
-   The RAP framework offers reuse data elements that can be used as ETag and total ETag fields. For more information, see RAP Reuse Data Elements.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about Optimistic Concurrency Control.

Example - Managed

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_DRAFT\_1. The BDEF is draft-enabled and it defines a total etag field as well as an etag master field.

managed;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_1 alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
{
  create;
  update;
  delete;
  draft action Edit;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}

The program DEMO\_RAP\_MANAGED\_TOTAL\_ETAG accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and executes the following actions:

-   First, it creates a new draft instance.
-   Then, it creates a new active instance.
-   Finally, it activates the new draft instance.

The entries of the database tables after each of these actions are shown. Both the ETag field and the total ETag field of the [persistent database table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") are automatically filled with a time stamp period.

Result: the ETag field LCHG\_DATE\_TIME and the total ETag field CREA\_DATE\_TIME are automatically filled with a time stamp value.

![Figure](abdoc_etag.png)

Example - Unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. The BDEF is draft-enabled and it defines a total etag field as well as an etag master field.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;
strict(2);
with draft;
define behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT alias ParentEntity
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
authorization master ( global, instance )
{
  create;
  update;
  delete;
  draft action Activate;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare;
  association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_CHILD alias ChildEntity
draft table demo\_draft\_child
lock dependent by \_parent
etag dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  association \_parent { with draft; }
  field ( readonly ) keyfield;
}

In the ABAP behavior pool, the create method provides values for the etag master and for the total etag fields using the function GET TIME STAMP.

Code snippet:

METHOD create.
"Prepare the transactional buffer.
    prep\_root\_buffer( CORRESPONDING #( entities ) ).
    LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>).
        DELETE lcl\_buffer=>root\_buffer
        WHERE key\_field = <entity>-KeyFieldRoot.
        INSERT VALUE #( cid       = <entity>-%cid
                        key\_field = <entity>-KeyFieldRoot
                        changed   = 'X'
                        deleted   = ' ' )
                    INTO TABLE lcl\_buffer=>root\_buffer.
        "Fill data fields:
          lcl\_buffer=>root\_buffer\[ key\_field
          = <entity>-keyfieldroot \]-data\_field
          = <entity>-DataFieldRoot.
          lcl\_buffer=>root\_buffer\[ key\_field
          = <entity>-KeyFieldRoot \]-char\_field
          = <entity>-CharFieldRoot.
GET TIME STAMP FIELD DATA(ts1).
          lcl\_buffer=>root\_buffer\[ key\_field
          = <entity>-KeyFieldRoot \]-lchg\_date\_time = ts1.
GET TIME STAMP FIELD DATA(ts2).
          lcl\_buffer=>root\_buffer\[ key\_field
          = <entity>-KeyFieldRoot \]-crea\_date\_time = ts2.
    ENDLOOP.
ENDMETHOD.

The program DEMO\_RAP\_UNMANAGED\_TOTAL\_ETAG accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and executes the following actions:

-   First, it creates a new draft instance.
-   Then, it creates a new active instance.
-   Finally, it activates the new draft instance.

Result: the ETag field LCHG\_DATE\_TIME and the total ETag field CREA\_DATE\_TIME are automatically filled with a time stamp value

![Figure](abdoc_etag.png)

Variant 1   

... etag master MasterField

Effect

-   Defines an entity as ETag master and assigns a field MasterField for change logging. [Root entities](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") are often ETag masters that log the changes of every [business object entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that is part of the [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").
-   In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), a value for the total ETag field can be provided automatically if the following conditions are met:
    -   The ETag field MasterField must be annotated in CDS with the annotation @Semantics.systemDateTime.localInstanceLastChangedAt: true
    -   The data type must be date compatible.
-   In [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), the application developer must ensure that a value is provided for the total ETag field by filling the respective field in the implementation of all [MODIFY ENTITY](javascript:call_link\('abapmodify_entity_entities.htm'\)) operations.
-   If you choose an element as ETag field that is not automatically updated, you have to make sure that the ETag value is updated on every MODIFY ENTITY operation via [determinations](javascript:call_link\('abenbdl_determinations.htm'\)).
-   In a managed RAP BO, the [RAP read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") is always implicitly available and therefore, this prerequisite is always fulfilled.

Variant 2   

... etag dependent by \_Assoc

-   Defines an entity as ETag dependent. This means that this entity does not have its own ETag field and uses the ETag field of the ETag master entity. The association to the ETag master entity must be explicitly read-enabled in the entity behavior body using the syntax:
    
    association \_AssocToETagMaster { }
    This association must also be defined in the underlying CDS data model.
    
-   An ETag master entity must always be higher in the BO [composition structure](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") than its dependent entities.
-   The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:
    
    (*\[*lock*\]**\[*, authorization*\]**\[*, etag*\]*) dependent by \_assoc
    
    For details, see topic [syntax\_short\_form](javascript:call_link\('abenbdl_short_syntax.htm'\)).
    

Variant 3   

... total etag TotalEtagField

Defines a field as [total ETag field](javascript:call_link\('abenrap_total_etag_glosry.htm'\) "Glossary Entry") for [draft-enabled scenarios](javascript:call_link\('abenbdl_with_draft.htm'\)) to enable optimistic concurrency checks during the transition from draft to persistent data. If a user edits data in draft mode and returns after the exclusive lock of their editing session has expired, the total etag checks whether the persistent data has been changed during the period of absence. Each time the persistent state is changed, the total etag field is updated. To resume a draft version, the infrastructure first compares the total etag of the persistent and the draft version and only if both values are identical the draft can be resumed.

The total ETag field is defined in the entity behavior characteristics of the [lock master](javascript:call_link\('abenbdl_locking.htm'\)) entity (currently identical to the root entity) and it controls the whole business object. A total ETag field is recommended for draft-enabled BOs. Its position is important: it must be defined directly after the lock master definition in the behavior definition.

A value for the total ETag field can be provided automatically in the managed RAP BO if the following conditions are met:

-   The field that is specified as TotalEtagField must be annotated in CDS with the annotation @Semantics.systemDateTime.lastChangedAt: true and the data type must be date compatible.
-   The total ETag field must be included in the [type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)) in the entity behavior definition body, if its name in the database table and in the CDS view model differs.

In unmanaged RAP BOs, the application developer must ensure that a value is provided for the total ETag field by filling the respective field in the implementation of all MODIFY ENTITY operations.

Hint

If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, draft-enabled scenarios require a total etag field. Otherwise, a syntax error occurs.

Further Information

For further details, see topic Total ETag in the development guide for the ABAP RESTful Application Programming Model.