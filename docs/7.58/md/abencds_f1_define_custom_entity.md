---
title: "CDS DDL - DEFINE CUSTOM ENTITY"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm) ... @ObjectModel.query.implementedBy : 'class_n
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_custom_entity.htm"
abapFile: "abencds_f1_define_custom_entity.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abencds", "define", "custom", "entity"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20ABENCDS_F1_DEFINE_CUSTOM_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

CDS DDL - DEFINE CUSTOM ENTITY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@ObjectModel.query.implementedBy : 'class\_name'](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_query.htm)*\]*
*\[*DEFINE*\]* *\[*ROOT*\]* CUSTOM ENTITY custom\_entity
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_parameter_list.htm)*\]*
          [element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm)*\[*;*\]*

Additions:

[1\. ... ROOT ...](#!ABAP_ADDITION_1@1@)

Effect

Defines a [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") custom\_entity in the [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry"). When a CDS custom entity is activated, its metadata is created but no other object instances are created on the database or in AS ABAP. The name custom\_entity must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm) can be used to specify optional [annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the CDS custom entity.
-   The annotation [@ObjectModel.query.implementedBy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_query.htm) binds an ABAP class which implements an ABAP query. This query is not called by the ABAP runtime framework but by a framework like the [RAP query engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_query_engine_glosry.htm "Glossary Entry").
-   [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_parameter_list.htm) is used to declare a list of optional input parameters for the CDS custom entity.
-   [element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_absent_element_list.htm) is used to declare elements, CDS associations, CDS to-child associations, and CDS-to-parent associations of the CDS custom entity.

A CDS custom entity can be used as a global structured type in ABAP programs. The entity is located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The elements of the CDS custom entity define the components of the global structured type that can be referenced in ABAP programs using TYPE. As is the case for any CDS entity, the annotations of a CDS custom entity can be [evaluated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_semantics_annotation_abexa.htm).

Hints

-   A CDS custom entity cannot be used as a data source in other CDS entities or in ABAP SQL.
-   CDS custom entities can be used as values for the CDS annotations AssociationRef and ElementRef.
-   The annotation ObjectModel.query.implementedBy is mandatory when working in [ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cloud_glosry.htm "Glossary Entry").
-   In the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry"), custom entities are used as a data model basis for [RAP unmanaged queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_unmanged_query_glosry.htm "Glossary Entry").
-   No ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) visible in the [tools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) for structures is created for a CDS custom entity.

Example

The following DDL source code shows a CDS custom entity:

@EndUserText.label: 'Custom Entity for Sales Order'
define root custom entity DEMO\_SALES\_SO\_CUSTOM\_ANALYTICS
  {
    key SalesOrderKey       : DEMO\_BT\_RAW\_16;
        @EndUserText.label  : 'Sales Order Item Count'
        SalesOrderItemCount : int4;
        TypeCode            : abap.char(5);
  }

Addition 1   

... ROOT

Effect

In ABAP CDS, the keyword ROOT is used to define the CDS custom entity custom\_entity as a [root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry") of the hierarchy of a [business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbusiness_object_glosry.htm "Glossary Entry"). The following applies to the root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity can have [child entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry") defined by means of [to-child associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry") using the keyword [COMPOSITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_composition.htm), but this is not mandatory. A root entity can also be a [leaf entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleaf_entity_glosry.htm "Glossary Entry").
-   A root entity does not have a [parent entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparent_entity_glosry.htm "Glossary Entry"). [To-parent](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_tp_association.htm) associations are not allowed in root entities.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, ABAP Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_query.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_parameter_list.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm)