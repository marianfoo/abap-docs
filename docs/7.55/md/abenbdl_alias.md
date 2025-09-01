  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, alias

\* Work in progress \*

Syntax

... alias AliasName

Effect

Behavior Definition Language ([CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry")) makes it possible to define an alias name AliasName for a CDS entity.

A BDL alias for an entity makes it possible to introduce a alias name for a CDS entity. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").

The alias name is visible in the method syntax of the [behavior implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) of the business object and in the [derived types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm).

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