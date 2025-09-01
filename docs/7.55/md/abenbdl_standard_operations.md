---
title: "CDS BDL - DEFINE BEHAVIOR, Standard Operations"
description: |
  Work in progress  Syntax ... internal create; internal update; internal delete; Effect The standard operations create, update, and delete (known as the CRUD operations) are the most important operations for the transactional behavior of a RAP business object(https://he
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm"
abapFile: "abenbdl_standard_operations.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "standard", "operations"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, Standard Operations

\* Work in progress \*

Syntax

... *\[*internal*\]* create;
    *\[*internal*\]* update;
    *\[*internal*\]* delete;

Effect

The standard operations create, update, and delete (known as the CRUD operations) are the most important operations for the transactional behavior of a [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The operations create, update, and delete must be declared appropriately in the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") for an entity whenever an entity is created, updated, or deleted.

A standard operation can be given the addition internal. This makes it possible to implement the action without making it consumable from outside. Example: internal update;

CRUD operations can be made available for an entity simply by declaring them in the body of the entity in question.

The [behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") for the operations create, update, and delete is implemented in the method [FOR MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhandler_method_modify.htm) of the [handler class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm).

Note

The [FOR LOCK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhandler_method_lock.htm) method of the handler class is called automatically before a change operation (such as update) is triggered. However, the corresponding entity must have the lock property in its behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
lock master
{
  create;
  update;
  delete;
}

The transactional behavior of the business object is defined by the standard operations create, update, and delete. These operations are [implemented](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) in the association [behavior pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").