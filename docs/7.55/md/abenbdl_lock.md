  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [CDS BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

CDS BDL - DEFINE BEHAVIOR, lock

\* Work in progress \*

Syntax

... lock master*|*dependent ( LocalField = MasterField )

Effect

A behavior definition can specify the following for an entity:

-   The entity supports direct locks (by specifying the entity property lock master)
    or

-   the entity is dependent on the lock status of a parent entity or root entity (by specifying the entity property lock dependent).

A foreign key relationship must be defined for any lock dependencies. This relationship describes which field in the child entity references which field in the parent entity, expressed using LocalField = MasterField in BDL syntax.

Remarks [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") supports lock master for root nodes of the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") only.

-   The lock property is only relevant for those entities that provide change operations (such as update).

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
  action set\_status\_booked result \[1\] $self;
}