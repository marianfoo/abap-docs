  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [CDS BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

CDS BDL - DEFINE BEHAVIOR, action

\* Work in progress \*

Syntax

... *\[*internal*\]* *\[*static*\]* action ActionName
               *\[*external LongName*\]*
               *\[*parameter InputParameterEntity*|*$self*\]*
               *\[*result cardinality OutputParameterEntity*|*$self*\]*;

Effect

In behavior definitions, actions can be specified as application-specific operations. Actions can either reference an instance (the default case, without the keyword static) or they can be static (with the keyword static).

An action can also be given the keyword internal. This makes it possible to implement the action without making it consumable from outside.

Input and output parameters are optional. Actions can pass CDS entities as input parameters (InputParameterEntity) and as output parameters (OutputParameterEntity). The CDS entity can be a regular CDS view or a CDS abstract entity. If InputParameterEntity and OutputParameterEntity are also the entity for which the action is executed, only the predefined keyword $self is required. In this case, the keyword stands for the type of the entity itself.

InputParameterEntity can be any type defined in ABAP Dictionary or ABAP CDS. OData accepts structured types only. EML can also handle elementary types.

An instance action is always multi-instance-enabled. The result [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") in instance actions specifies whether an input instance points to 0..1, 1, 0..n, or 1..n instances. The potential cardinality values are therefore as follows: \[0..1\], \[1\], \[0..\*\] or \[1..\*\].

An action can also be given an external name. Here is one example:

action ActionName external 'AVeryLongExternalActionName'
     result \[0..1\] OutputParameter;

The external name can be up to 128 characters long. It will only be exposed in the OData metadata. It is ignored within ABAP, for example the action cannot be addressed in [Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) using the external name.

Note

The BDL syntax specifies that a maximum of one input parameter and a maximum of one output parameter can be specified. If an action requires more than one input or output, a CDS structure type or an abstract entity can be used with components for each input or output.

Example

In the following example, the data from the ABAP flight data reference scenario (short: flight data scenario) is used. It models a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing air travel.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}

The transactional [behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") of the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") travel is defined by the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete plus one action. The end user can use the action set\_status\_booked to set the status of a trip to booked. The action set\_status\_booked is bound to an instance of the type travel, which in this case is also returned by the action. This means the cardinality equals \[1\] and $self is set as the type of the output parameter.