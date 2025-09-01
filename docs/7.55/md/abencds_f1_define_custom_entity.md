---
title: "CDS DDL - DEFINE CUSTOM ENTITY"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) ... @objectModel.query.implementedBy : 'class_name'
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm"
abapFile: "abencds_f1_define_custom_entity.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abencds", "define", "custom", "entity"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entities.htm) → 

CDS DDL - DEFINE CUSTOM ENTITY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm)*\]*
...
@objectModel.query.implementedBy : 'class\_name'
*\[*DEFINE*\]* *\[*ROOT*\]* CUSTOM ENTITY custom\_entity
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_parameter_list.htm)*\]*
          [element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm)*\[*;*\]*

Effect

Defines a [CDS custom entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entities.htm) custom\_entity in the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry").

The following applies to CDS custom entities:

-   CDS custom entities do not have a SELECT statement.

-   The runtime of a CDS custom entity must be implemented in an ABAP class class\_name.

-   The class class\_name must be referenced in the associated CDS custom entity using the [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_frmwrk_tables.htm) @objectModel.query.implementedBy.

-   The ABAP class class\_name must be implemented before the activation of the CDS custom entity.

-   The CDS custom entity can be specified as the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry"), [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry"), or [CDS to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry"). A CDS association, CDS composition, or CDS to-parent association of this type can be [exposed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element.htm) only and cannot be created as an instance of a join expression.

-   CDS custom entities can be used in AssociationRef annotations and ElementRef annotations.

The following applies to the syntax of the CDS custom entity:

-   The name custom\_entity must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) can be used to specify optional [annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the CDS custom entity.

-   [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_parameter_list.htm) is used to declare a list of optional input parameters for the CDS custom entity.

-   [element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) is used to declare elements of the CDS custom entity and to declare and expose CDS associations, CDS compositions, and CDS to-parent associations of the CDS custom entity.

The keyword ROOT is used to define the CDS custom entity custom\_entity as a [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry") of the hierarchy of the business object. The following applies to the root entity:

-   There can be a maximum of one root entity.

-   A root entity can be a node without definition of the [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") or a CDS composition for a different CDS entity.

-   A root entity does not have a [parent entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_entity_glosry.htm "Glossary Entry").

Generally speaking, the syntax and semantics of CDS custom entities are very similar to [abstract entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entities.htm).

The name of a CDS custom entity is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

Hints

-   The [DDL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a CDS custom entity must have the same name as this entity.

-   No ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) visible in the [tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) for structures is created for a CDS custom entity.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_parameter_list.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm)