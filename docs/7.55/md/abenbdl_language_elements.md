  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_syntax.htm) → 

CDS BDL - Language Elements

\* Work in progress \*

The following section summarizes the CDS Behavior Definition Language ([CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry")) language elements, arranged by topics.

Header

[implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) Business object behavior implementation type.
... [unmanaged](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) Utilization of the existing legacy business logic.
... [managed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) Implementation of new business logic.
... [abstract](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) Metadata artifact.
... [in class unique](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) Class restriction.

Entity Behavior Definition

[define behavior for](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) Definition of the behavior of an entity.
... [alias](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_alias.htm) Definition of the alias name for the entity.

Entity Properties

[implementation in class unique](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_in_class_unique.htm) class restriction.
[late numbering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm) Late numbering of entity instances.
... [in place](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm) Use own key fields.
[etag](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_etag.htm) Optimistic lock in shared access.
[lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_lock.htm) Can the entity be locked.
... [master](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_lock.htm) Support for direct locks.
...[... dependent](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_lock.htm) Definition of the lock dependencies.
[field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm) Access restrictions.
... [read only](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm) The field is not changed.
... [mandatory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm) The field is given a value.

Operations

[create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm) Standard operation, creates a new entity instance.
[update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm) Standard operation, updates an existing entity instance.
[delete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm) Standard operation, deletes an existing entity instance.
[action](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) Non-standard operation.
[static](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) Static action.
... [external](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) External name of an action.
... [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) Definition of an input parameter.
... [result](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) Definition of an output parameter.
... [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) Cardinality of the result entity.
... [$self](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) The type of the entity: self.
[internal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) Operation can be implemented but not consumed.

Associations

[association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm) Definition of the association.
... [... abbreviation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm) Alternative name of an association.
... [... create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm) Creates instances of the child entity using the association of the parent entity.
[internal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm) Association can be implemented but not consumed.