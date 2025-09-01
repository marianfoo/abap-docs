---
title: "CDS BDL - DEFINE BEHAVIOR, late numbering"
description: |
  Work in progress  Syntax ... late numbering in place Effect Late numbering is a concept for gapless assignments of unique keys when creating new entity instances. New entity instances are given their final key shortly before the RAP business object(https://help.sap.com/doc/abapdocu_75
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm"
abapFile: "abenbdl_late_numbering.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenbdl", "late", "numbering"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, late numbering

\* Work in progress \*

Syntax

... late numbering *\[*in place*\]*

Effect

Late numbering is a concept for gapless assignments of unique keys when creating new entity instances. New entity instances are given their final key shortly before the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") is saved. Until this moment, the application logic uses a temporary key that has to be replaced when the business object data is saved.

The addition in place indicates that a CDS entity uses its own key fields for late numbering. These key fields are written to the special values, which are identified as temporary. This means that the [derived types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) for the entity do not contain an additional field [%PID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponents_derived_types.htm). The task when assigning the keys (TYPE TABLE FOR MAPPED) therefore is to map from a temporary key to the final key and not to map from a %PID to the final key. This means that the mapped structure contains the entity key fields twice, once as a component %TMP and once as a component [%KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponents_derived_types.htm).

Late numbering must be applied by implementing the method [adjust\_numbers()](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_adjust_numbers.htm) of the local [saver class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) that is part of the [behavior implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"). When declared in the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of the entity, late numbering causes the runtime to call the method adjust\_numbers() at the time in question. This implementation is then responsible for assigning the final keys and passing them to the method parameter mapped.

Remarks

-   The parameter mapped is used to pass the final keys to the framework and hence replace the temporary keys. Ideally, this replacement action is decoupled from the actual saving of the data but many legacy applications determine their keys when the data is saved. In these cases, it is best to implement the save logic in adjust\_numbers() and leave the method [save](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_method_save.htm) itself empty.

-   Late numbering modifies the derived types: The tables mapped, reported, and failed are given the additional field %PID to hold a temporary key.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
late numbering
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}