---
title: "CDS DDL - EXTEND CUSTOM ENTITY"
description: |
  Syntax EXTEND CUSTOM ENTITY CustomEntity WITH  ElementListExtension  Effect Extends an existing CDS custom entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entity_glosry.htm 'Glossary Entry') CustomEntity using a CDS custom entity extension(https://help.sap.com/
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_custom_entity.htm"
abapFile: "abencds_extend_custom_entity.htm"
keywords: ["delete", "do", "if", "try", "data", "abencds", "extend", "custom", "entity"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_extension.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - EXTEND CUSTOM ENTITY, ABENCDS_EXTEND_CUSTOM_ENTITY, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - EXTEND CUSTOM ENTITY

Syntax

EXTEND CUSTOM ENTITY CustomEntity WITH
  { ElementListExtension }

Effect

Extends an existing [CDS custom entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") CustomEntity using a [CDS custom entity extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cus_entity_extend_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"). An existing CDS custom entity can have one or more CDS custom entity extensions.

Prerequisite

As a prerequisite, the extended entity must allow extensions. Extensions are allowed by default or can be explicitly allowed with the annotation [AbapCatalog.extensibility.extensible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) with the value true. If the value false is specified, extensions are not allowed.

Components of a Custom Entity Extension

Custom entity extensions can make additions to the original entity, but they cannot modify, overwrite, or delete elements from the original entity. A custom entity extension can specify only features that are possible within custom entities, but with some limitations. The following can be specified in a custom entity extension:

-   New elements. These new elements are defined as described in topic [DEFINE CUSTOM ENTITY, Element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element.htm). Those elements can have [element annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element_anno.htm). New key elements are not possible.
-   New associations \_assoc1, \_assoc2 can be defined in the CDS custom entity extension. The same rules apply that are described in topic [DEFINE CUSTOM ENTITY, association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_association.htm).
-   New [CDS compositions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry") \_compos1, \_compos2 can be defined in the CDS custom entity extension under the condition that the composition target is also defined as composition child and has the required to-parent association. The composition target is the extended custom entity, not the extension itself. The same rules apply that are described in topic [DEFINE CUSTOM ENTITY, Composition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_composition.htm).
-   Each appended element must have a unique name.

Restrictions

-   CDS custom entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_parameter_list.htm) in a custom entity extension.
-   [CDS to-parent associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry") must not be defined in a custom entity extension.
-   No addition ROOT can be specified in the statement EXTEND CUSTOM ENTITY to transform a regular entity to a [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry").
-   An appended element cannot be defined as a KEY element.
-   In a custom entity extension, [header annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) are not supported. That means that no annotations are allowed in front of the statement EXTEND CUSTOM ENTITY.

Example

The CDS custom entity extension DEMO\_CDS\_EXTEND\_CUSTOM

extend custom entity DEMO\_CDS\_ORIGINAL\_CUSTOM with
{
  col4    : abap.char(1);
  @ObjectModel.sort.enabled: false
  @ObjectModel.filter.enabled: false
  \_assoc  : association to DEMO\_CDS\_CUSTOM\_ENTITY  
    on $projection.col2 = \_assoc.id;
  \_compos : composition \[0..1\] of DEMO\_CDS\_CUSTOM\_CHILD;
}

adds a new element and two new associations to the existing CDS custom entity.

@EndUserText.label: 'CDS custom entity, extended entity'
@AbapCatalog.extensibility.extensible: true
define root custom entity DEMO\_CDS\_ORIGINAL\_CUSTOM
  with parameters
    param1 : abap.int4
{
  key col1 : abap.char( 5 );
      col2 : abap.int4;
      col3 : abap.int4;
}