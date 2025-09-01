  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) → 

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

Similarly to CDS entities, the [behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") for an entity can be divided into a part for once-only specifications (implementation, late numbering, etag, and lock), followed by a part of multiple specifications (field, standard operations, actions, and associations) enclosed in {...}.

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
[CDS BDL - DEFINE BEHAVIOR, alias](javascript:call_link\('abenbdl_alias.htm'\))
[CDS BDL - DEFINE BEHAVIOR, in class unique](javascript:call_link\('abenbdl_in_class_unique.htm'\))
[CDS BDL - DEFINE BEHAVIOR, late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))
[CDS BDL - DEFINE BEHAVIOR, etag](javascript:call_link\('abenbdl_etag.htm'\))
[CDS BDL - DEFINE BEHAVIOR, lock](javascript:call_link\('abenbdl_lock.htm'\))
[CDS BDL - DEFINE BEHAVIOR, field](javascript:call_link\('abenbdl_field.htm'\))
[CDS BDL - DEFINE BEHAVIOR, Standard Operations](javascript:call_link\('abenbdl_standard_operations.htm'\))
[CDS BDL - DEFINE BEHAVIOR, action](javascript:call_link\('abenbdl_action.htm'\))
[CDS BDL - DEFINE BEHAVIOR, association](javascript:call_link\('abenbdl_association.htm'\))