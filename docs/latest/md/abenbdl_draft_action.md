---
title: "RAP - draft action"
description: |
  Syntax internal draft action ( authorization:none(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm), features: instance(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)) Edit
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm"
abapFile: "abenbdl_draft_action.htm"
keywords: ["insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "abenbdl", "draft", "action"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20draft%20action%2C%20ABENBDL_DRAFT_ACTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - draft action

Syntax

*\[*internal*\]* draft action
           *{**\[*(*\[* [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm)*\]**\[*, [features: instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)*\]*)*\]*
           *\[*Edit *\[*with additional implementation*\]*;*\]**}*
         *|* *\[*Activate *\[*optimized*\]* *\[*with additional implementation*\]*;*\]*
         *|* *\[*Discard *\[*with additional implementation*\]*;*\]*
         *|* *\[*Resume *\[*with additional implementation*\]*;*\]*
         *|* *\[*draft determine action Prepare *\[* [extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm)*\]*
              {
               [determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm) *\[*(always)*\]* DetName;
               [validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm) *\[*(always)*\]* ValName;
               ...
              }*\]*

Variants:

[1\. ... draft action Edit;](#!ABAP_VARIANT_1@1@)
[2\. ... draft action Activate *\[*optimized*\]*;](#!ABAP_VARIANT_2@2@)
[3\. ... draft action Discard;](#!ABAP_VARIANT_3@3@)
[4\. ... draft action Resume;](#!ABAP_VARIANT_4@4@)
[5\. ... draft determine action Prepare;](#!ABAP_VARIANT_5@5@)

Additions:

[1\. ... with additional implementation](#!ABAP_ADDITION_1@1@)

Effect

[Draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_draft_action_glosry.htm "Glossary Entry") are available only for draft-enabled RAP BOs and they allow data to be manipulated on the [RAP draft table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_table_glosry.htm "Glossary Entry"). Draft actions are implicitly available for business objects as soon as [RAP draft handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") is enabled for a business object. It is recommended, but not mandatory, that the draft actions are defined explicitly in the behavior definition.

Draft actions can only be specified for [lock master entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_locking.htm) that are defined using the keyword lock master, as they always refer to the whole lockable subtree of a business object.

Draft actions are provided by the [RAP managed draft provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_man_draft_provider_glosry.htm "Glossary Entry"). An implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required only in the following cases:

-   If the draft action Edit is specified with [instance feature control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm), then an implementation for instance feature control is required. Per default, the draft action Edit is implicitly enabled with feature control and an implementation is required. To avoid this, Edit must be explicitly specified without feature control.
-   If the optional addition with additional implementation is specified, the action must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm) in the ABAP behavior pool.

In a [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") that reuses RAP draft handling, the draft actions are reused implicitly. It is recommended that they are specified explicitly. In [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"), it is mandatory to specify all draft actions in a draft-enabled projection BDEF. For details on reuse, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).

The following [RAP BDL operation additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) are possible:

-   [internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_internal.htm): Available for all draft actions.
-   [(features:instance)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm): Dynamic feature control is available only for Edit. For Edit, it is per default implicitly enabled.
-   [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm): Available only for Edit.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Draft Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/707c7e93ecab48ea9e6b9c3c893a792e?version=sap_cross_product_abap).

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm) is enabled, it is mandatory that all draft actions are explicitly defined in the [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").
-   In draft-enabled scenarios, the names of the draft actions are reserved for the draft actions. Entities that are not draft-enabled can use the names Edit, Activate, and so on, as names for [actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm). But when the addition with draft; is used to draft-enable a business object, the names of draft actions are forbidden as names for actions.

Example - Managed, Edit, Discard, Prepare

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS. The BDEF is draft-enabled and strict mode is switched on. Therefore, it is mandatory to explicitly declare all draft actions.

managed implementation in class bp\_demo\_rap\_managed\_draft\_acti unique;
strict(2);
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
authorization master ( global )
{
  create;
  update;
  delete;
  determination setCharField on save { field Timestamp; }
  draft action ( authorization : none ) Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare
  { determination ( always ) setCharField; }
  field(readonly:update) KeyFieldRoot;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}

The class CL\_DEMO\_RAP\_MNGD\_DRAFT\_ACTNS accesses the business object using [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") and carries out the following actions:

-   It creates two active entity instances using the EML statement MODIFY ENTITY and commits them to the active database.
-   It executes the draft action Edit for the two active instances. No changes are made, the only effect of the draft action Edit in this example is that the active instances are copied to the draft database table.
-   The draft action Prepare is executed for the two draft instances that were copied from the [persistent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") to the [draft table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_table_glosry.htm "Glossary Entry") during the Edit. The assigned determination setCharField is executed and it inserts a value into field CharFieldRoot.
-   The draft action Discard is executed. It deletes both instances from the draft database table.

Executable Example

The example above is explained in detail in the executable example [RAP BDL - draft actions Edit, Discard, Prepare](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action2_abexa.htm).

Another executable example for the draft action Activate can be found under [RAP BDL - draft action Activate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action1_abexa.htm).

Variant 1   

... draft action Edit

Effect

The draft action Edit copies an active instance to the draft database table. Feature and [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") is available for Edit, which can optionally be defined to restrict the usage of the action. The optional addition with additional implementation is available.

Variant 2   

... draft action Activate *\[*optimized*\]*

Effect

The draft action Activate copies the content of the draft database table to the [persistent database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") and clears the draft database table. It includes all changes that were done on the draft application buffer.

It is recommended that you always use the optional addition optimized:

-   optimized speeds up the activation of draft instances considerably by reducing the number of determination and validation executions in a RAP transaction.
-   As a prerequisite, determinations and validations must be modeled according to the guidelines described in the [development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap), section [Determination and Validation Modelling](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/86a21be150db463a9c687e3ad34c308a?version=sap_cross_product_abap). For example, it must be ensured that the validations and determinations handle draft and active instances identically.
-   Further details are described in the [development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap) in the following topics:
    -   [Draft Action Activate Optimized](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7952cccd228444f383875d2fbbcd4b1e?version=sap_cross_product_abap)
    -   [Runtime Activate Optimized Action](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/9b7a3b482af04772ad6902e9e25ce300?version=sap_cross_product_abap)
    -   [Determination and Validation Modelling](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/86a21be150db463a9c687e3ad34c308a?version=sap_cross_product_abap)

The optional addition with additional implementation is available.

Variant 3   

... draft action Discard

Effect

The draft action Discard clears all entries from the draft database table. The optional addition with additional implementation is available.

Variant 4   

... draft action Resume

Effect

The draft action Resume sets a lock for an entity instance on the [persistent database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry"). It is executed automatically whenever there is a modification on a draft instance whose exclusive lock has expired.

In case of a new draft instances, the same feature and authorization control is executed as defined for the [standard operation create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm). In case of draft instances that are already saved in the active database table, the same feature and authorization control is executed as defined for the draft action Edit.

The optional addition with additional implementation is available.

Variant 5   

... draft determine action Prepare

Effect

The draft determine action Prepare is the draft-equivalent to the [determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm) for active instances and the rules described in the [topic about determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm) apply to Prepare as well. That means:

-   Only [validations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm) and [determinations defined as on save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm) can be assigned.
-   The optional addition [(always)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm) can be used.
-   Determinations and validations of child entities can be included.
-   Available for managed scenarios and for unmanaged and draft-enabled scenarios.
-   The optional addition [extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm) allows validations and determinations to be added to the draft determine action Prepare in question by means of [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry"). For further details on extensibility enabling, see topic [RAP - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm).

Like all other draft actions, it is implicitly enabled as soon as the business object is draft enabled, but in this case, no determinations and validations are assigned to it. The assignment of determinations and validations must be done explicitly in the BDEF. Only determinations and validations that are defined and implemented for the BO can be used.

The purpose of the draft determine action Prepare is to validate draft data before the transition to active data.

Addition 1   

... with additional implementation

Effect

The optional addition with additional implementation is available for Edit, Activate, Discard, and Resume. If it is specified, an implementation for the respective draft action in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm) FOR MODIFY in the local ABAP behavior pool is required.

Continue
[RAP - Examples of Draft Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action_abexas.htm)