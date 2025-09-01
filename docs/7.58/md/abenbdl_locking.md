---
title: "RAP - Locking"
description: |
  Syntax Forms Declaration on Entity Level ... lock master unmanaged  lock dependent by _Assoc Addition That Can Be Used for an Action(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) ... lock:none Variants: 1. ... lock master unmanaged(#!ABAP_VARIANT
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_locking.htm"
abapFile: "abenbdl_locking.htm"
keywords: ["update", "delete", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "abenbdl", "locking"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Locking%2C%20ABENBDL_LOCKING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Locking

Syntax Forms

Declaration on Entity Level

... lock master *\[*unmanaged*\]*
  *|* lock dependent by \_Assoc

Addition That Can Be Used for an [Action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm)

... lock:none

Variants:

[1\. ... lock master \[unmanaged\]](#!ABAP_VARIANT_1@1@)
[2\. ... lock dependent by \_Assoc](#!ABAP_VARIANT_2@2@)
[3\. ... lock:none](#!ABAP_VARIANT_3@3@)

Effect

Specifies the [RAP locking mechanism](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_locking_glosry.htm "Glossary Entry") for a [RAP BO entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). The RAP locking mechanism prevents simultaneous modification access to data on the database by more than one user ([pessimistic concurrency control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpessimist_conc_control_glosry.htm "Glossary Entry")). Whenever a lock is requested for a specific entity instance, its lock master and all lock-dependent entity instances are locked for editing by a different user, in other words, as soon as one node receives a locking request, the whole BO instance is locked.

Lock master entities are locked on each locking request of one of their lock-dependent entities. In an unmanaged RAP BO, the [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR LOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_lock.htm) must be implemented for lock master entities. For [lock dependent entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_lock_dep_ent_glosry.htm "Glossary Entry"), any locking request is delegated to its [lock master entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_lock_ma_ent_glosry.htm "Glossary Entry"). Currently, only [root entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry") can be defined as lock master entities.

Setting Locks

If a lock is defined for a RAP BO entity, the entity instances in question are implicitly locked during the runtime of the following [modify operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry"):

-   [update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm)
-   [delete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm)
-   [create by association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_association.htm)
-   [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm)
-   Exception: [create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm): In a managed RAP BO, the newly created key values (if available) of instances are written into the global lock table during the create operation. This is part of a uniqueness check, which is automatically and implicitly carried out by the RAP framework. In an unmanaged RAP BO, there is no automatic uniqueness check and no key values are written into the global lock table. For further details, see the development guide for the ABAP RESTful Application Programming Model, section [Uniqueness Check](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/cc4064be45ff46d6a6b8828d3aaa9bb9?version=sap_cross_product_abap).

Managed RAP BO

In a [managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), each entity must be defined either as lock master or as lock dependent. The lock mechanism is handled by the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry").

Unmanaged RAP BO

In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), it is recommended that each entity is defined either as lock master or as lock dependent, but this is enforced only in [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm). The lock must be implemented by the application developer in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") in the [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR LOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_lock.htm). This can be done, for example, using DDIC [lock objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlock_object_glosry.htm "Glossary Entry").

Draft-enabled RAP BO

If a BO is [draft-enabled](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm), locking must also be considered. As soon as a draft instance is created for an existing active instance, the active instance is given an [exclusive lock](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") and cannot be modified by another user. This exclusive lock remains for a determined time, even if the [ABAP session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_session_glosry.htm "Glossary Entry") terminates. The duration time of the exclusive lock can be configured. Once the exclusive lock expires after the duration time, the [optimistic lock phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_etag.htm) begins. During the optimistic lock phase, a draft can be resumed as long as the active instance does not change, but there is no longer an exclusive lock.

Projection BO

In a [projection business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), the RAP locking mechanism that is defined and implemented for the base BO is automatically reused and does not need to be explicitly defined. For details, see topic [RAP - Entity Behavior Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character_projection.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Pessimistic Concurrency Control (Locking)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/99d8162b8d7d4a83ae65320d2a03b8ab).

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm) is enabled, it is mandatory, even in unmanaged RAP BOs, that each entity is marked either as lock master or as lock dependent.
-   The [draft action Resume](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm) recreates a lock for an entity instance on the [persistent database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") when a draft instance is resumed after the lock has expired.
-   The EML statement [SET LOCKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks.htm) can be used to explicitly lock [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry").
-   Locks are managed in a global lock table.
-   The lock table is administered by the transaction SM12

Example - Managed

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The root entity is defined as lock master entity and the child entity is defined as lock dependent entity. The association association \_Address { } is defined in the entity behavior body of the child entity, thereby ensuring that locking requests on the child entity are delegated to the lock master entity.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  field (readonly:update) id;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly:update ) Id, child\_key;
  update;
  delete;
association \_Address { }
}

The class CL\_DEMO\_SALES\_RAP\_LOCK accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and creates two BO instances.

Code snippet:

DELETE FROM demo\_sales\_bupa.
MODIFY ENTITIES OF demo\_sales\_cds\_bupa\_2
     ENTITY demo\_sales\_cds\_bupa\_2
     CREATE FIELDS ( id gender ) WITH VALUE #(
          ( %cid = '1' id = \`AAA\` gender = 'f' )
          ( %cid = '2' id = \`BBB\` gender = 'm' ) )
           FAILED  FINAL(failed)
        REPORTED FINAL(reported).
COMMIT ENTITIES.

The following image shows the global lock table (transaction SM12) during the transaction, before the COMMIT ENTITIES statement is executed. The key values of both newly created entities are listed there as part of the uniqueness check.. After the [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) statement is executed, both entries are deleted automatically.

![Figure](abdoc_lock_table.png)

Example - Unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_LOCKING. The root entity is defined as lock master entity.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_locking unique;
strict(2);
define behavior for DEMO\_RAP\_UNMANAGED\_LOCKING
lock master
authorization master (global)
{
  create;
  update;
  delete;
  field ( readonly:update ) KeyFieldRoot;
}

The lock method is implemented in the ABAP behavior pool as shown below. The lock object ERAPLOCK is used to control access to the RAP BO's persistent database table.

METHOD lock.
TRY.
      DATA(lo\_lock) = cl\_abap\_lock\_object\_factory=>get\_instance(
      iv\_name = 'ERAPLOCK' ).
      LOOP AT keys REFERENCE INTO DATA(lr\_key).
        TRY.
            lo\_lock->enqueue( it\_parameter = VALUE #(
              ( name = 'KEY\_FIELD' value = REF #(
              lr\_key->KeyFieldRoot ) ) ) ).
          CATCH cx\_abap\_foreign\_lock.
            APPEND VALUE #( %key = CORRESPONDING #( lr\_key->\* )
                            %fail-cause = if\_abap\_behv=>cause-locked )
            TO failed-demo\_rap\_unmanaged\_locking.
          CATCH cx\_abap\_lock\_failure.
            APPEND VALUE #( %key = CORRESPONDING #( lr\_key->\* )
                            %fail-cause = if\_abap\_behv=>cause-unspecific )
            TO failed-demo\_rap\_unmanaged\_locking.
        ENDTRY.
      ENDLOOP.
    CATCH cx\_abap\_lock\_failure.
      APPEND VALUE #( %fail-cause = if\_abap\_behv=>cause-unspecific )
      TO failed-demo\_rap\_unmanaged\_locking.
  ENDTRY.
ENDMETHOD.

The class CL\_DEMO\_RAP\_UNMANAGED\_LOCK accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and carries out the following steps:

-   it creates two entity instances
-   it updates one of the instances
-   it deletes both instances

During the [UPDATE ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) and [DELETE ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) operations, the two entity instances are locked in the global lock table. During the [CREATE ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) operation, this is not the case, since no key values are available yet.

Example - With Draft

The following example shows an unmanaged, draft-enabled BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT.

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
  field ( readonly:update ) KeyFieldRoot;
  draft action Activate optimized;
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
  field ( readonly:update ) keyfield, KeyFieldChild;
}

The class CL\_DEMO\_RAP\_UNMANAGED\_DRFT\_LCK accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity.
-   It activates the draft entities using the draft action Activate.

The following image shows the global lock table (transaction SM12) during the creation of the new draft instances, before the COMMIT ENTITIES statement is executed. The active instances are locked. This lock is removed after the draft action Activate has been completed.

![Figure](abdoc_lock_table_2.jpg)

Variant 1   

... lock master *\[*unmanaged*\]*

Effect

Declares an entity as lock master entity. Currently, only root nodes are allowed as lock master entity.

In a managed RAP BO, the implementation is per default provided by the managed BO framework. If the optional addition unmanaged is used, the lock mechanism must be implemented manually in the method FOR LOCK of the behavior pool, just like in the unmanaged scenario. It is then invoked at runtime.

Variant 2   

... lock dependent by \_Assoc

Effect

Defines an entity as lock dependent. This means that locking requests are delegated to the lock master entity. The association from the lock dependent entity to the lock master entity must be explicitly defined in the entity behavior definition using the syntax association \_AssocToLockMaster { }. The association must also be defined in the underlying CDS data model.

The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:

(*\[*lock*\]**\[*, authorization*\]**\[*, etag*\]*) dependent by \_assoc

For details, see topic [RAP - syntax\_short\_form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_short_syntax.htm).

Variant 3   

... lock:none

Effect

Can be used as syntax addition for an [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) to prevent the locking mechanism for the entity instance for which an action is executed. See topic [RAP - action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm).