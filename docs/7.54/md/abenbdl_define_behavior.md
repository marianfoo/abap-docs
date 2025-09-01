  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) → 

ABAP BDL - DEFINE BEHAVIOR

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

Similarly to CDS entities, the [behavior](javascript:call_link\('abenbehavior_glosry.htm'\) "Glossary Entry") for an entity can be divided into a part for once-only specifications (implementation, late numbering, etag, and lock), followed by a part of multiple specifications (field, standard operations, actions, and associations) enclosed in {...}.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

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
[ABAP BDL - DEFINE BEHAVIOR, alias](javascript:call_link\('abenbdl_alias.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, in class unique](javascript:call_link\('abenbdl_in_class_unique.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, etag](javascript:call_link\('abenbdl_etag.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, lock](javascript:call_link\('abenbdl_lock.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, field](javascript:call_link\('abenbdl_field.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, Standard Operations](javascript:call_link\('abenbdl_standard_operations.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, action](javascript:call_link\('abenbdl_action.htm'\))
[ABAP BDL - DEFINE BEHAVIOR, association](javascript:call_link\('abenbdl_association.htm'\))