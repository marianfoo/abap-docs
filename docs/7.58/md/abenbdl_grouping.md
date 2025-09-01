---
title: "RAP - Implementation Grouping"
description: |
  Syntax ... group Group1 implementation in class Class1 unique(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique.htm)  // implementation-relevant content  group Group2 implementation in class Class2 unique(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_grouping.htm"
abapFile: "abenbdl_grouping.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "grouping"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Implementation%20Grouping%2C%20ABENBDL_GROUPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Implementation Grouping

Syntax

...
group Group1 [implementation in class Class1 unique](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique.htm)
{
  // implementation-relevant content
}
group Group2 [implementation in class Class2 unique](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique.htm)
{
  //implementation-relevant content
}
*\[*group Group3 ...*\]*
...

Effect

Grouping divides the implementation-relevant parts of a [business object's](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") business logic into multiple groups for behavior implementation. Each group is assigned to a separate [implementation class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique.htm). This allows the implementation of a business object to be divided technically into multiple parts. Otherwise, the implementation could be done only by one person at a time, since the [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") prevents simultaneous work.

If used, the following implementation-relevant parts of a [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") must be included in a group (in both a managed and an unmanaged RAP BO):

-   [actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm)
-   [determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determinations.htm)
-   [validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_validations.htm)
-   feature control (for [fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm) and for [RAP BO operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm))
-   In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), the following operations must be included in a group:
    -   The standard operations create, read, update, and delete.
    -   [Operations for associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_association.htm)
    -   Lock - the [RAP locking mechanism](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_locking.htm) for the [lock master entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_lock_ma_ent_glosry.htm "Glossary Entry") must be assigned to a group.

Not allowed within a group is:

-   [Type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm) (no implementation required)

Optionally inside or outside of a group:

-   In a [managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), create, update, and delete and operations for associations can be specified either inside or outside of a group.
-   [Field additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm) that do not require an implementation.

Further rules:

-   When grouping is used, an implementation class on entity level is not allowed.
    
    Example: this is not allowed
    
    define behavior for MyEntity alias MyAlias implementation in class ClassName unique
    
-   An implementation class in the [RAP behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") that applies to the complete BO with all subnodes is allowed.
    
    Example: this is allowed:
    
    managed implementation in class ClassName unique
    
-   Different groups can be implemented in the same implementation class.
-   The group names Group1, Group2, ... must not conflict with actions, determinations, or validations of the same name.
-   For [RAP BO consumers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"), the group names are irrelevant and therefore, group names can be changed retrospectively.
-   Associations can only be assigned as a whole to a group and therefore, [read-by-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") and [create-by-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") must be implemented in the same class.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Using Groups in Large Development Projects](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/590871b5608546d0ba251d8b7af58c0c?version=sap_cross_product_abap).

Example - Managed

The following example shows a managed BDEF that consists of a parent and of a child entity. The implementation is split into multiple groups. Each group has its own ABAP behavior pool. Group one\_a and one\_b share the same ABAP behavior pool.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") and it does not implement the [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

managed implementation in class bp\_demo\_rap\_managed\_group unique;
define behavior for DEMO\_RAP\_MANAGED\_GROUP alias RootEntity
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
{
  field (readonly:update) keyfieldroot;
  group one\_a implementation in class cl\_group1a unique
  {
    create;
    update;
    delete;
    association \_child { create; }
  }
  group two implementation in class cl\_group2 unique
  {
    field ( features : instance ) DataFieldRoot;
    action Myaction;
  }
  group one\_b implementation in class cl\_group1a unique
  {
    validation MyValidation on save { create; }
  }
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_GROUP\_CHILD alias ChildEntity
persistent table demo\_dbtab\_child
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  association \_parent;
  group three implementation in class cl\_group3 unique
  {
    action MyAction1;
  }
  field ( readonly:update ) KeyField, KeyFieldChild;
  group four implementation in class cl\_group4 unique
  {
    determination MyDetermination on modify { create; }
  }
  mapping for demo\_dbtab\_child
  {
    KeyFieldChild = key\_field\_child;
    KeyField = key\_field;
    DataField = data\_field;
  }
}

Example - Unmanaged

The following example shows an unmanaged BDEF that consists of a parent and of a child entity. The implementation is split into multiple groups. Each group has its own ABAP behavior pool.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_group unique;
strict(2);
with draft;
define behavior for DEMO\_RAP\_UNMANAGED\_GROUP
draft table demo\_dbtab\_group
lock master
total etag CharFieldRoot
authorization master ( instance )
{
  field ( readonly ) KeyFieldRoot;
  group one\_au implementation in class cl\_group1au unique
  {
  read;
  create;
  update;
  delete;
  association \_child { create; with draft; }
  }
  group two implementation in class cl\_group2u unique
  {
    lock;
    field ( features : instance ) DataFieldRoot;
    action Myaction;
  }
  group one\_bu implementation in class cl\_group1au unique
  {
    validation MyValidation on save { create; }
  }
  group three\_u implementation in class cl\_group2u unique
  {
    draft action Edit;
    draft action Activate optimized;
    draft action Discard;
    draft action Resume;
    draft determine action Prepare {validation MyValidation;}
  }
}
define behavior for DEMO\_RAP\_UNMANAGED\_GROUP\_CHILD
draft table demo\_draft\_group
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild;
  association \_parent {with draft;}
}