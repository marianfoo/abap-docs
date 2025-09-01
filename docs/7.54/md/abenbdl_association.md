  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

ABAP BDL - DEFINE BEHAVIOR, association

Syntax

... *\[*internal*\]* association AssociationName
         *\[*abbreviation AbbreviationName*\]* {*\[**\[*internal*\]*create;*\]*};

Effect

An important behavior part of an entity is the transactional enabling of its associations. This affects both reads (Read-By-Association) and creates (Create-By-Association) along CDS associations. Here, the associations in question must be specified explicitly in the behavior definition.

To activate reads for an association, either the command association AssociationName; or association AssociationName {} can be used.

The keyword {create;} is used to declare that instances of the associated entity can be created along the association. Example: association \_Booking { create; }

An association can be given the addition internal. This makes it possible to implement the action without making it consumable from outside. This affects both read and create actions along CDS associations. Example: internal association \_Booking { create; }

If the create action is internally activated (it can be implemented but is not consumable), the operation create can be given the addition internal. Example: association \_Booking { internal create; }

The addition abbreviation defines an alternative name, in a similar way to alias for entities. AbbreviationName is not an alias, however, which is why a different keyword is used here. Associations are in the namespace of their root entity, which is why their names are usually easy to read and no more than 30 characters long. This is too long for the [ABAP RESTful Programming Model](javascript:call_link\('abenr_a_p_glosry.htm'\) "Glossary Entry"), since certain component names are created by concatenating association names and default suffixes. This why an abbreviation AbbreviationName must be defined if the name of the association in the CDS view exceeds the length of 11 characters.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

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