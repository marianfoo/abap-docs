---
title: "CDS BDL - DEFINE BEHAVIOR"
description: |
  Work in progress  Syntax define behavior for CDSEntityName alias AliasName implementation in class ClassName unique late numbering in place etag fieldAncestorEntity~Field ( LocalField = MasterField ) lock masterdependent ( LocalField = MasterFie
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm"
abapFile: "abenbdl_define_behavior.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "define", "behavior"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) → 

CDS BDL - DEFINE BEHAVIOR

\* Work in progress \*

Syntax

define behavior for CDSEntityName *\[*alias AliasName*\]*
  *\[*implementation in class ClassName unique*\]*
  *\[*late numbering *\[*in place*\]**\]*
  *\[*etag field*|*AncestorEntity~Field ( LocalField = MasterField )*\]*
  *\[*lock master*|*dependent ( LocalField = MasterField )*\]*
  {
    *\[*field(read only *|* mandatory) field1*\[*, field2, ...*\]*;*\]*
    *\[*internal*\]* create;
    *\[*internal*\]* update;
    *\[*internal*\]* delete;
    *\[*internal*\]* *\[*static*\]* action ActionName
        *\[*external LongName*\]*
        *\[*parameter InputParameterEntity*|*$self*\]*
        *\[*result cardinality OutputParameterEntity*|*$self*\]*;
    *\[*internal*\]* association AssociationName
        *\[*abbreviation AbbreviationName*\]* {*\[**\[*internal*\]*create;*\]*};
  }

Effect

Similarly to CDS entities, the [behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") for an entity can be divided into a part for once-only specifications (implementation, late numbering, etag, and lock), followed by a part of multiple specifications (field, standard operations, actions, and associations) enclosed in {...}.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
late numbering
lock master
etag LastChangedAt
{
  field (read only) Travel\_ID;
  field (mandatory) Agency\_ID, Customer\_ID, Begin\_Date, End\_Date;
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
  association \_Booking { create; }
}

Continue
[CDS BDL - DEFINE BEHAVIOR, alias](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_alias.htm)
[CDS BDL - DEFINE BEHAVIOR, in class unique](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_in_class_unique.htm)
[CDS BDL - DEFINE BEHAVIOR, late numbering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm)
[CDS BDL - DEFINE BEHAVIOR, etag](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_etag.htm)
[CDS BDL - DEFINE BEHAVIOR, lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_lock.htm)
[CDS BDL - DEFINE BEHAVIOR, field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm)
[CDS BDL - DEFINE BEHAVIOR, Standard Operations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm)
[CDS BDL - DEFINE BEHAVIOR, action](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm)
[CDS BDL - DEFINE BEHAVIOR, association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm)