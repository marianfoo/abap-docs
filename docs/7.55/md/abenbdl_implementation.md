  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) → 

CDS BDL - IMPLEMENTATION

\* Work in progress \*

Syntax

implementation unmanaged*|*managed*|*abstract *\[*in class class\_name unique*\]*;

Effect

The implementation type of the [business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") is introduced in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") using the keyword implementation.

Implementation types can be split into the following categories:

-   unmanaged
    In the case of the implementation type unmanaged, all important components of the REST contract must be implemented first. All required operations (the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete plus any application-specific [actions](javascript:call_link\('abenbdl_action.htm'\))) must be defined in the relevant behavior definition before being implemented in ABAP. This implementation type is best used when using existing legacy business logic for [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

-   managed
    The implementation type managed is best used when implementing completely new business logic. In this case, a behavior definition is sufficient to obtain a ready-to-run business object.

-   abstract
    A behavior definition with the implementation type abstract cannot be implemented using [behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") and is used as a metadata-only artifact in the representation of external services instead.

A behavior definition can specify one or more classes which allow the behavior implementation of a business object. This can be done by using the addition [in class ... unique](javascript:call_link\('abenbdl_in_class_unique.htm'\)) in the behavior definition of the business object.

Effect of in class ... unique:

-   A behavior for the entity in question can only be implemented in a behavior pool with the specified name. Any other class that attempts this raises an ABAP Compiler error.

-   If the addition in class ... unique is specified, an operation must not be implemented multiple times in different [handler classes](javascript:call_link\('abenabp_handler_class.htm'\)).

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel. In the example, the implementation type is set to unmanaged because the existing legacy business logic needs to be integrated into the new application for managing flight trips.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
}