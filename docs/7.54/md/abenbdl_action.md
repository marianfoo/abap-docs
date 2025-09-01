  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

ABAP BDL - DEFINE BEHAVIOR, action

Syntax

... *\[*internal*\]* *\[*static*\]* action ActionName
               *\[*external LongName*\]*
               *\[*parameter InputParameterEntity*|*$self*\]*
               *\[*result cardinality OutputParameterEntity*|*$self*\]*;

Effect

In behavior definitions, actions can be specified as application-specific operations. Actions can either reference an instance (the default case, without the keyword static) or they can be static (with the keyword static).

An action can also be given the keyword internal. This makes it possible to implement the action without making it consumable from outside.

Input and output parameters are optional. Actions can pass CDS entities as input parameters (InputParameterEntity) and as output parameters (OutputParameterEntity). The CDS entity can be a regular CDS view or an abstract CDS entity. If InputParameterEntity and OutputParameterEntity are also the entity for which the action is executed, only the predefined keyword $self is required. In this case, the keyword stands for the type of the entity itself.

An instance action is always multi-instance-enabled. The result cardinality in instance actions specifies whether an input instance points to 0..1, 1, 0..n, or 1..n instances. The potential cardinality values are therefore as follows: \[0..1\], \[1\], \[0..\*\] or \[1..\*\].

An action can also be given an external name. Here is one example:

action ActionName external AVeryLongExternalActionName
     result \[0..1\] OutputParameter;

The external name can be up to 128 characters long. It will only be exposed in the OData metadata. It is ignored within ABAP, for example the action cannot be addressed in [Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) using the external name.

Note

The [BDL](javascript:call_link\('abenbdl_glosry.htm'\) "Glossary Entry") syntax specifies that a maximum of one input parameter and a maximum of one output parameter can be specified. If an action requires more than one input or output, a CDS structure type or an abstract entity can be used with components for each input or output.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}

The transactional [behavior](javascript:call_link\('abenbehavior_glosry.htm'\) "Glossary Entry") of the [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") travel is defined by the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete plus one action. The end user can use the action set\_status\_booked to set the status of a trip to booked. The action set\_status\_booked is bound to an instance of the type travel, which in this case is also returned by the action. This means the cardinality equals \[1\] and $self is set as the type of the output parameter.