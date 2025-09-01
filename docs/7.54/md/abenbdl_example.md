  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) → 

ABAP BDL - Example

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings.

The underlying business object for managing flight trips can be given an alias, in this instance, Travel. The structure of the business object consists of a tree with the entities Travel, Booking, Agency, Customer, Carrier, Connection, Currency, and Status. The entities are joined by compositions and associations. Each entity of the tree structure is modeled as a CDS view:

-   The entity Travel is the top node in the business object structure and is used to manage general travel data. It is represented by the CDS view /DMO/I\_Travel.

-   The entity Booking is a child entity of Travel and is represented by the CDS view /DMO/I\_Booking. It is used to manage flight booking data, for example, the passenger, connection, price, and flight date.

-   The CDS views that represent entities other than those in this example are described in [Other entity examples](javascript:call_link\('abenbdl_example_data.htm'\)).

The following example shows the behavior definition for the root entity Travel. In the example, the implementation type is set to unmanaged because the existing legacy business logic needs to be integrated into the new application for managing flight trips.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias travel
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

The transactional [behavior](javascript:call_link\('abenbehavior_glosry.htm'\) "Glossary Entry") of the business object travel is defined by the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete as well as the [action](javascript:call_link\('abenbdl_action.htm'\)) set\_status\_booked. These operations are implemented in the association [behavior pool](javascript:call_link\('abenrpm_global_class.htm'\)).

The end user can use the action set\_status\_booked to set the status of a trip to booked. The action set\_status\_booked is bound to an instance of the type travel, which in this case is also returned by the action. This means the cardinality equals \[1\] and $self is set as the type of the output parameter.

The association \_Booking specifies that new instances of the child entity Booking can be created for a specific instance of the entity Travel only.

Continue
[Root entities example](javascript:call_link\('abenbdl_example_root_entity.htm'\))
[Child entity example](javascript:call_link\('abenbdl_example_cds_entity.htm'\))
[Other entity examples](javascript:call_link\('abenbdl_example_data.htm'\))