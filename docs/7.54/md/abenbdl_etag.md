  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_bdl.htm) →  [ABAP BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_define_behavior.htm) → 

ABAP BDL - DEFINE BEHAVIOR, etag

Syntax

... etag field|AncestorEntity~Field ( LocalField = MasterField )

Effect

The etag field field of an entity is used for locks in the OData protocol. It references either the entity itself or the parent entity AncestorEntity for which a foreign key relationship LocalField = MasterField must be specified.

A field flagged as an entity tag (ETag) field field is typically used to describe, uniquely, the state of a requested resource (for example a specific entity instance). Any changes made to the requested resource update the etag field. Often fields containing time stamps, check sums, or version numbers are used for this.

In the [behavior implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"), the method [read](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_read.htm) of the [handler class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm) is called, which then requests the current ETag for the resource as shown in the following example. The process flow is as follows:

-   If an entity has an ETag field in its [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry"), a write operation (such as update) passes an if match header with the value of the ETag in the query and hence informs the framework of the expected state.

-   The method read then checks whether the requested resource exists in a buffered state or, if not, whether it needs to be read from the database.

-   The value of the ETag is then passed to the framework using the output parameters of the read method.

-   The framework checks both values and calls the write operation only if they match.

Note

An ETag can be used for optimistic locks in shared OData protocol access, where it prevents simultaneous updates on a resource from overwriting each other.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

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