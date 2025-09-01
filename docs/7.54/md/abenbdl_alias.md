  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

ABAP BDL - DEFINE BEHAVIOR, alias

Syntax

... alias AliasName

Effect

Behavior Definition Language ([BDL](javascript:call_link\('abenbdl_glosry.htm'\) "Glossary Entry")) makes it possible to define an alias name AliasName for a CDS entity.

A BDL alias for an entity makes it possible to introduce a alias name for a CDS entity. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

The alias name is visible in the method syntax of the [behavior implementation](javascript:call_link\('abenabap_behavior_implementations.htm'\)) of the business object and in the [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)).

The length of an alias name AliasName is restricted to 20 characters.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the behavior definition for the root entity Travel. The business object whose CDS data model is represented by the root entity /DMO/I\_Travel can be given an alias, in this instance Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
}