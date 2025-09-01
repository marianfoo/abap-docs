---
title: "ABAP BDL - DEFINE BEHAVIOR, lock"
description: |
  Syntax ... lock masterdependent ( LocalField = MasterField ) Effect A behavior definition can specify the following for an entity: -   The entity supports direct locks (by specifying the entity property lock master) or -   the entity is dependent on the lock status of a parent entity or root enti
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_lock.htm"
abapFile: "abenbdl_lock.htm"
keywords: ["update", "delete", "do", "if", "try", "data", "abenbdl", "lock"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_bdl.htm) →  [ABAP BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_define_behavior.htm) → 

ABAP BDL - DEFINE BEHAVIOR, lock

Syntax

... lock master*|*dependent ( LocalField = MasterField )

Effect

A behavior definition can specify the following for an entity:

-   The entity supports direct locks (by specifying the entity property lock master)
    or

-   the entity is dependent on the lock status of a parent entity or root entity (by specifying the entity property lock dependent).

A foreign key relationship must be defined for any lock dependencies. This relationship describes which field in the child entity references which field in the parent entity, expressed using LocalField = MasterField in BDL syntax.

Remarks

-   The [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm "Glossary Entry") supports lock master for root nodes of the [business object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") only.

-   The lock property is only relevant for those entities that provide change operations (such as update).

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
lock master
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}