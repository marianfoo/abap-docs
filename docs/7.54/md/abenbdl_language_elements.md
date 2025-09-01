  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

ABAP BDL - Language Elements

The following section summarizes the Behavior Definition Language ([BDL](javascript:call_link\('abenbdl_glosry.htm'\) "Glossary Entry")) language elements, arranged by topics.

Header

[implementation](javascript:call_link\('abenbdl_implementation.htm'\)) Business object behavior implementation type.
... [unmanaged](javascript:call_link\('abenbdl_implementation.htm'\)) Utilization of the existing legacy business logic.
... [managed](javascript:call_link\('abenbdl_implementation.htm'\)) Implementation of new business logic.
... [abstract](javascript:call_link\('abenbdl_implementation.htm'\)) Metadata artifact.
... [in class unique](javascript:call_link\('abenbdl_implementation.htm'\)) Class restriction.

Entity Behavior Definition

[define behavior for](javascript:call_link\('abenbdl_define_behavior.htm'\)) Definition of the behavior of an entity.
... [alias](javascript:call_link\('abenbdl_alias.htm'\)) Definition of the alias name for the entity.

Entity Properties

[implementation in class unique](javascript:call_link\('abenbdl_in_class_unique.htm'\)) class restriction.
[late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) Late numbering of entity instances.
... [in place](javascript:call_link\('abenbdl_late_numbering.htm'\)) Use own key fields.
[etag](javascript:call_link\('abenbdl_etag.htm'\)) Optimistic lock in shared access.
[lock](javascript:call_link\('abenbdl_lock.htm'\)) Can the entity be locked.
... [master](javascript:call_link\('abenbdl_lock.htm'\)) Support for direct locks.
...[... dependent](javascript:call_link\('abenbdl_lock.htm'\)) Definition of the lock dependencies.
[field](javascript:call_link\('abenbdl_field.htm'\)) Access restrictions.
... [read only](javascript:call_link\('abenbdl_field.htm'\)) The field is not changed.
... [mandatory](javascript:call_link\('abenbdl_field.htm'\)) The field is given a value.

Operations

[create](javascript:call_link\('abenbdl_standard_operations.htm'\)) Standard operation, creates a new entity instance.
[update](javascript:call_link\('abenbdl_standard_operations.htm'\)) Standard operation, updates an existing entity instance.
[delete](javascript:call_link\('abenbdl_standard_operations.htm'\)) Standard operation, deletes an existing entity instance.
[action](javascript:call_link\('abenbdl_action.htm'\)) Non-standard operation.
[static](javascript:call_link\('abenbdl_action.htm'\)) Static action.
... [external](javascript:call_link\('abenbdl_action.htm'\)) External name of an action.
... [parameter](javascript:call_link\('abenbdl_action.htm'\)) Definition of an input parameter.
... [result](javascript:call_link\('abenbdl_action.htm'\)) Definition of an output parameter.
... [cardinality](javascript:call_link\('abenbdl_action.htm'\)) Cardinality of the result entity.
... [$self](javascript:call_link\('abenbdl_action.htm'\)) The type of the entity: self.
[internal](javascript:call_link\('abenbdl_action.htm'\)) Operation can be implemented but not consumed.

Associations

[association](javascript:call_link\('abenbdl_association.htm'\)) Definition of the association.
... [... abbreviation](javascript:call_link\('abenbdl_association.htm'\)) Alternative name of an association.
... [... create](javascript:call_link\('abenbdl_association.htm'\)) Creates instances of the child entity using the association of the parent entity.
[internal](javascript:call_link\('abenbdl_association.htm'\)) Association can be implemented but not consumed.