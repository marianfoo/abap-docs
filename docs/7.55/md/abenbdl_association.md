  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [CDS BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

CDS BDL - DEFINE BEHAVIOR, association

\* Work in progress \*

Syntax

... *\[*internal*\]* association AssociationName
         *\[*abbreviation AbbreviationName*\]* {*\[**\[*internal*\]*create;*\]*};

Effect

An important behavior part of an entity is the transactional enabling of its associations. This affects both reads (Read-By-Association) and creates (Create-By-Association) along CDS associations. Here, the associations in question must be specified explicitly in the behavior definition.

To activate reads for an association, either the statement association AssociationName; or association AssociationName {} can be used.

The keyword {create;} is used to declare that instances of the associated entity can be created along the association. Example: association \_Booking { create; }

An association can be given the addition internal. This makes it possible to implement the action without making it consumable from outside. This affects both read and create actions along CDS associations. Example: internal association \_Booking { create; }

If the create action is internally activated (it can be implemented but is not consumable), the operation create can be given the addition internal. Example: association \_Booking { internal create; }

The addition abbreviation defines an alternative name, in a similar way to alias for entities. AbbreviationName is not an alias, however, which is why a different keyword is used here. Associations are in the namespace of their root entity, which is why their names are usually easy to read and no more than 30 characters long. This is too long for [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"), since certain component names are created by concatenating association names and default suffixes. This why an abbreviation AbbreviationName must be defined if the name of the association in the CDS view exceeds the length of 11 characters.

Example

In the following example, the data from the ABAP flight data reference scenario (short: flight data scenario) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing air travel. The underlying data is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
  association \_Booking { create; }
}

The association \_Booking specifies that new instances of the child entity Booking can be created for a specific instance of the entity Travel only. The keyword { create; } indicates that this assignment is activated for the standard operation create. Therefore, booking instances can only be created using a travel instance Travel.