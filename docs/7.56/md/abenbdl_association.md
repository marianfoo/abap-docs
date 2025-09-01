  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) → 

CDS BDL - operations for associations

Syntax

... *\[*[internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm)*\]* association \_Assoc
              *\[*abbreviation \_newName*\]*
              *\[*without response*\]*
               {*\[*
              *\[*[internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm)*\]* create
             *\[**{*( [features:instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) *|* [features:global](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)*}**\]*
              *\[*,[precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*
              *\[*,[authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm)*\]*
              *\[*, [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm)*\]*);
              *\[*with draft*\]*;
               *\]*}

Additions:

[1\. ... abbreviation \_newName ...](#!ABAP_ADDITION_1@1@)
[2\. ... without response ...](#!ABAP_ADDITION_2@2@)
[3\. ... with draft; ...](#!ABAP_ADDITION_3@3@)

Effect

Enables [read-by-association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") and [create-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") for [associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry"). That means, it allows [RAP BO consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") read access to the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") (read-by-association operation) or the creation of new [RAP BO entity instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") of the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") entity (create-by-association operation).

[Compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") and [to-parent associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") are per default implicitly read and create enabled. Still, it is recommended and in [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") also enforced to specify the read- and create-by-association operations explicitly.

[Cross-BO associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry") that are not part of the [composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") are not per default read and create enabled and this behavior must be defined explicitly, if required. A prerequisite is that the association target entity must have an own [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") and offer the respective operations as well.

In a [managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), operations for associations are provided by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry").

In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), operations for associations must be implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm) [FOR MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_modify.htm).

In a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), operations for associations can be reused from the base BDEF. This can be done using the keyword use. For further details, see topic [CDS BDL - use, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm).

Read and create access

The following syntax explicitly defines read and create access:
association \_Assoc *\[*abbreviation \_newName*\]* { create; }
This is only required and only allowed for compositions (that is, associations from the parent node to the child node), it is not allowed for to-parent associations. In other words, [child nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry") can be created via their [parent node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_entity_glosry.htm "Glossary Entry"), but parents can't be created via their child nodes.

Read access only

To enable only read access and deactivate create operations for the associated entity, the following syntax can be used:
association \_Assoc *\[*abbreviation \_newName*\]* { }
Alternative spelling option:
association \_Assoc *\[*abbreviation \_newName*\]*;
This is allowed in both directions, from parent to child and vice versa.

Limitation in a managed RAP BO

In a managed RAP BO, create-by-association works only on direct child entities. Entities that are part of the same composition tree, but more than one level below the [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry"), can be read enabled, but not create enabled. In an unmanaged RAP BO, this limitation doesn't apply.

CDS BDL operation additions

The following [CDS BDL operation additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) are possible:

-   [internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm): Can be used in two places:
    -   in front of the association:
        
        Example: internal association \_Assoc;
        
        In this case, the complete association can only be accessed from its own business object implementation. This affects both read and create operations along CDS associations.
        
    -   in front of create within the curly brackets:
        
        Example: association \_Assoc { internal create; }
        
        If only create is marked as internal, read access to the association target is allowed, but create-by-association operations are only allowed internally.
        

The following additions are only possible in combination with { create; } and therefore, in case of a composition relationship, can only be declared for the parent entity.

Example: association \_Assoc { create(addition);}

-   [features:instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm): Enables dynamic feature control for the association in question.
-   [features:global](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm): Enables global feature control for the association in question.
-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm): Prevents illegal changes from reaching the application buffer by prechecking [modify operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry").
-   [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm): Excludes the association in question from [authorization checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm).
-   [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm): Delegates the [authorization control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) to the authorization check that is implemented for the update operation.

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, it is mandatory that each target entity of a behavior-enabled association within the same composition tree has an own behavior definition.
-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, it is mandatory that each target entity of a behavior-enabled cross-BO association has an own behavior definition.
-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, to-parent associations and compositions must be publicly and explicitly exposed. Public means without the keyword internal.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Create by Association Operation.

Example - managed

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. The root entity explicitly enables read and create access for two associations:

-   the composition \_child to its child node, and
-   the cross-BO association \_ext to an external association which is not part of the composition tree.

The child entity explicitly enables read access to the parent entity \_parent. In this example, this is required by the [RAP locking mechanism](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_locking_glosry.htm "Glossary Entry") (the association from the [lock dependent entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_lock_dep_ent_glosry.htm "Glossary Entry") to the [lock master entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_lock_ma_ent_glosry.htm "Glossary Entry") must be explicitly defined, see topic [CDS BDL - locking](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm)).

managed;
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root
persistent table demo\_dbtab\_root
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_ext { create; }
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    DecFieldRoot = dec\_field;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child
persistent table demo\_dbtab\_child
lock dependent by \_parent
{
  update;
  delete;
  association \_parent { }
  field ( readonly:update ) KeyField;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}

The program DEMO\_RAP\_MANAGED\_ASSOC\_1 accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") performs the following steps:

-   it creates a new instance of \_Child via the composition \_child from its parent entity.
-   it creates new instances of the association target entity of the external association \_ext
-   a read by association operation is performed via the external association.

Example - unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_AUTH.

-   The association \_child is read- and create-enabled.
-   The association \_parent is read-enabled.
    
    unmanaged implementation in class bp\_demo\_rap\_unmanaged\_auth unique;
    strict;
    define behavior for DEMO\_RAP\_UNMANAGED\_AUTH
    lock master
    authorization master (global)
    {
      create;
      update;
      delete;
      association \_child {create;}
    }
    define behavior for DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD
    lock dependent by \_parent
    authorization dependent by \_parent
    {
      update;
      delete;
      field ( readonly ) KeyField;
      association \_parent { }
    }
    

For the implementation in the ABAP behavior pool, see CCIMP include

The program DEMO\_RAP\_UNMANAGED\_ASSOC accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following steps:

-   it creates three instances of the parent entity and two instances of the child entity via the association \_child.
-   it reads the content of the parent table via the association \_parent and the content of the child table via the association \_child and displays the result.

Addition 1   

... abbreviation \_newName

Effect

Defines an alternative name for an association. The abbreviation \_newName can have a maximum of 16 characters. Associations are in the namespace of their root entity and can have up to 30 characters. This is under certain circumstances too long to be processed in [ABAP RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_glosry.htm "Glossary Entry"). Whenever a shorter name is required, you are prompted to assign an abbreviation to the association with no more that 16 characters.

Addition 2   

... without response

Effect

The optional addition without response is for cross-BO associations that have an association target from another BO. With such a cross-BO association, the association target entity is automatically included in the response types as [foreign entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm). In this way, problems with the target entity can become part of the response types during read-by-association or create-by-association operations. without response prevents the default behavior of the [foreign entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") being included in the response types.

Notation: association \_ext without response { create; }

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_WITHOUT\_RES. It exposes the cross-BO association \_ext, which has the foreign entity DEMO\_RAP\_MANAGED\_ASSOC\_EXT as association target.

managed implementation in class bp\_demo\_rap\_managed\_without\_re unique;
strict;
define behavior for DEMO\_RAP\_MANAGED\_WITHOUT\_RES
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  association \_ext without response { create; }
  mapping for demo\_dbtab\_root
  {
  KeyFieldRoot = key\_field;
  CharFieldRoot = char\_field;
  DataFieldRoot = data\_field;
  }
}

As the addition without response is used, the mapped, failed, and reported response structures do not include the foreign entity DEMO\_RAP\_MANAGED\_ASSOC\_EXT.

![Figure](bdoc_foreign_entity_excluded.jpg)

Without the addition without response, the response structures would look as follows:

![Figure](bdoc_foreign_entity_included.jpg)

Addition 3   

... with draft; ...

Effect

Draft-enables an association. A draft-enabled association retrieves active data if it is followed from an [active instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_active_instance_glosry.htm "Glossary Entry") and draft data if it is followed from a [draft instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry") (for details about RAP draft handling, see [CDS BDL - managed, with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm)).

If a [BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_object_glosry.htm "Glossary Entry") is draft-enabled, then all associations should be draft-enabled, so that the associations always lead to the target instance with the same state (draft or active).

As soon as you draft-enable a BO by adding with draft, all BO-internal associations are automatically draft-enabled. To make this behavior explicit, the behavior prompts you to specify the compositions within a draft BO with with draft.

Example - draft-enabled association

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_DRAFT\_ROOT. The BDEF is draft-enabled and the association \_child is draft-enabled using the syntax element with draft;.

managed;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ROOT alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
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
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_CHILD alias ChildEntity
persistent table demo\_dbtab\_child
draft table demo\_draft\_child
lock dependent by \_parent
etag dependent by \_parent
{
  update;
  delete;
  field ( readonly ) KeyField;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataFieldChild = data\_field;
  }
}

The program DEMO\_RAP\_MANAGED\_DRAFT accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry"). It first creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the [draft tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry"). Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") and the draft tables are emptied.