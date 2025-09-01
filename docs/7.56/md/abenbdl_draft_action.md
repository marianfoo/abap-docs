  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) → 

CDS BDL - draft actions

Syntax

*\[*internal*\]* draft action
           *{**\[*(*\[* [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm)*\]**\[*, [features: instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)*\]*)*\]*
           *\[*Edit *\[*with additional implementation*\]*;*\]**}*
         *|* *\[*Activate *\[*with additional implementation*\]*;*\]*
         *|* *\[*Discard *\[*with additional implementation*\]*;*\]*
         *|* *\[*Resume *\[*with additional implementation*\]*;*\]*
         *|* *\[*draft determine action Prepare
              {
               [determination](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm) *\[*(always)*\]* DetName;
               [validation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm) *\[*(always)*\]* ValName;
               ...
              }*\]*

Variants:

[1\. ... draft action Edit;](#!ABAP_VARIANT_1@1@)
[2\. ... draft action Activate;](#!ABAP_VARIANT_2@2@)
[3\. ... draft action Discard;](#!ABAP_VARIANT_3@3@)
[4\. ... draft action Resume;](#!ABAP_VARIANT_4@4@)
[5\. ... draft determine action Prepare;](#!ABAP_VARIANT_5@5@)

Additions:

[1\. ... with additional implementation](#!ABAP_ADDITION_1@1@)

Effect

[Draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_draft_action_glosry.htm "Glossary Entry") are available only in draft-enabled RAP BOs and they allow data to be manipulated on the [RAP draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry"). Draft actions are implicitly available for business objects as soon as [RAP draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") is enabled for a business object. It is recommended, but not mandatory, that the draft actions are defined explicitly in the behavior definition.

Draft actions can only be specified for [lock master entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm) that are defined using the keyword lock master, as they always refer to the whole lockable subtree of a business object.

Draft actions are provided by the [RAP managed draft provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_man_draft_provider_glosry.htm "Glossary Entry"). An implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required only in the following cases:

-   If the draft action Edit is specified with [instance feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm), then an implementation for instance feature control is required. Per default, the draft action Edit is implicitly enabled with feature control and an implementation is required. To avoid this, Edit must be explicitly specified without feature control.
-   If the optional addition with additional implementation is specified, the action must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_modify.htm) in the ABAP behavior pool.

In a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") that reuses RAP draft handling, the draft actions are reused implicitly. It is recommended that they are specified explicitly. In [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"), it is mandatory to specify all draft actions in a draft-enabled projection BDEF. For details on reuse, see topic [CDS BDL - use, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm).

The following [CDS BDL operation additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) are possible:

-   [internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm): Available for all draft actions.
-   [(features:instance)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm): Dynamic feature control is available only for Edit. For Edit, it is per default implicitly enabled.
-   [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm): Available only for Edit.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Draft Actions.

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, it is mandatory that all draft actions are explicitly defined in the [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").
-   In draft-enabled scenarios, the names of the draft actions are reserved for the draft actions. Entities that are not draft-enabled can use the names Edit, Activate, and so on, as names for [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm). But when addition with draft; is used to draft-enable a business object, the names of draft actions are forbidden as names for actions.

Example - managed, Edit, Discard, Prepare

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS. The BDEF is draft-enabled and strict mode is switched on. Therefore, it is mandatory to explicitly declare all draft actions.

managed implementation in class bp\_demo\_rap\_managed\_draft\_acti unique;
strict;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
authorization master ( instance )
{
  create;
  update;
  delete;
  determination setCharField on save { field Timestamp; }
  draft action ( authorization : none ) Edit;
  draft action Activate;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare
  { determination ( always ) setCharField; }
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}

The program DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and carries out the following actions:

-   It creates two active entity instances using the EML statement MODIFY ENTITY and commits them to the active database.
-   It executes the draft action Edit for the two active instances. No changes are made, the only effect of the draft action Edit in this example is that the active instances are copied to the draft database table.
-   The draft action Prepare is executed for the two draft instances that were copied from the [persistent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") to the [draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry") during the Edit. The assigned determination setCharField is executed and it inserts a value into field CharFieldRoot.
-   The draft action Discard is executed. It deletes both instances from the draft database table.

Executable Example

The example above is explained in detail in the executable example [CDS BDL - draft actions Edit, Discard, Prepare](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action2_abexa.htm).

Another executable example for the draft action Activate can be found under [CDS BDL - draft action Activate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action1_abexa.htm).

Variant 1   

... draft action Edit

Effect

The draft action Edit copies an active instance to the draft database table. Feature and [authorization control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") is available for Edit, which can optionally be defined to restrict the usage of the action. The optional addition with additional implementation is available.

Variant 2   

... draft action Activate

Effect

The draft action Activate copies the content of the draft database table to the [persistent database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") and clears the draft database table. It includes all changes that were done on the draft application buffer. The optional addition with additional implementation is available.

Variant 3   

... draft action Discard

Effect

The draft action Discard clears all entries from the draft database table. The optional addition with additional implementation is available.

Variant 4   

... draft action Resume

Effect

The draft action Resume sets a lock for an entity instance on the [persistent database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry"). It is executed automatically whenever there is a modification on a draft instance whose exclusive lock has expired.

In case of a new draft instances, the same feature and authorization control is executed as defined for the [standard operation create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm). In case of draft instances that are already saved in the active database table, the same feature and authorization control is executed as defined for the draft action Edit.

The optional addition with additional implementation is available.

Variant 5   

... draft determine action Prepare

Effect

The draft determine action Prepare is the draft-equivalent to the [determine actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm) for active instances and the rules described in the [topic about determine actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm) apply to Prepare as well. That means:

-   Only [validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm) and [determinations defined as on save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm) can be assigned.
-   The optional addition [(always)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm) can be used.
-   Determinations and validations of child entities can be included.
-   Available for managed scenarios and for unmanaged and draft-enabled scenarios.

Like all other draft actions, it is implicitly enabled as soon as the business object is draft enabled, but in this case, no determinations and validations are assigned to it. The assignment of determinations and validations must be done explicitly in the BDEF. Only determinations and validations that are defined and implemented for the BO can be used.

The purpose of the draft determine action Prepare is to validate draft data before the transition to active data.

Addition 1   

... with additional implementation

Effect

The optional addition with additional implementation is available for Edit, Activate, Discard, and Resume. If it is specified, an implementation for the respective draft action in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm) FOR MODIFY in the local ABAP behavior pool is required.

Continue
[CDS BDL - Examples of draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action_abexas.htm)