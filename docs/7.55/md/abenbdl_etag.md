  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [CDS BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

CDS BDL - DEFINE BEHAVIOR, etag

\* Work in progress \*

Syntax

... etag field|AncestorEntity~Field ( LocalField = MasterField )

Effect

The etag field field of an entity is used for locks in the OData protocol. It references either the entity itself or the parent entity AncestorEntity for which a foreign key relationship LocalField = MasterField must be specified.

A field flagged as an entity tag (ETag) field field is typically used to describe, uniquely, the state of a requested resource (for example a specific entity instance). Any changes made to the requested resource update the etag field. Often fields containing time stamps, check sums, or version numbers are used for this.

In the [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"), the method [read](javascript:call_link\('abenhandler_method_read.htm'\)) of the [handler class](javascript:call_link\('abenabp_handler_class.htm'\)) is called, which then requests the current ETag for the resource as shown in the following example. The process flow is as follows:

-   If an entity has an ETag field in its [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), a write operation (such as update) passes an if match header with the value of the ETag in the query and hence informs the framework of the expected state.

-   The method read then checks whether the requested resource exists in a buffered state or, if not, whether it needs to be read from the database.

-   The value of the ETag is then passed to the framework using the output parameters of the read method.

-   The framework checks both values and calls the write operation only if they match.

Note

An ETag can be used for optimistic locks in shared OData protocol access, where it prevents simultaneous updates on a resource from overwriting each other.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
etag LastChangedAt
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}