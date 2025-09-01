  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [CDS BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

CDS BDL - DEFINE BEHAVIOR, alias

\* Work in progress \*

Syntax

... alias AliasName

Effect

Behavior Definition Language ([CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry")) makes it possible to define an alias name AliasName for a CDS entity.

A BDL alias for an entity makes it possible to introduce a alias name for a CDS entity. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

The alias name is visible in the method syntax of the [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)) of the business object and in the [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)).

The length of an alias name AliasName is restricted to 20 characters.

Example

In the following example, the data from the ABAP flight data reference scenario (short: flight data scenario) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing air travel. The underlying data is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel. The business object whose CDS data model is represented by the root entity /DMO/I\_Travel can be given an alias, in this instance Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
}