---
title: "Syntax"
description: |
  ... proj_element1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm), proj_element2(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm), virtual_element1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm"
abapFile: "abencds_proj_view_element_list.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "proj", "view", "element", "list"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) → 

CDS DDL - projection\_view, element\_list

Syntax

... [proj\_element1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm), [proj\_element2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm)*\[*,
    [virtual\_element1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_virtual_element.htm), [virtual\_element2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_virtual_element.htm), ... *\]*

Effect

Defines the elements of a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). The elements are specified in a comma-separated list. The element list consists of projected elements (these can be fields, [associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry"), [compositions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry"), or [to-parent associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry")), and, optionally, [virtual elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_virtual_element_glosry.htm "Glossary Entry"). There can be one or several of all of the listed elements.

The projected elements [proj\_element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm) are the elements of the underlying CDS view view\_entity or elements of the [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") exposed in the view\_entity. Associations, compositions, and to-parent associations of the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") can be exposed as well. It is also possible to add new elements to a projection view which are not included in the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). These elements are called [virtual elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") and they can be specified using the keyword VIRTUAL. For further details, see the respective sections below.

The names of the elements of a CDS projection view must be unique. They can be either the names of the elements taken from the data source, or else alternative element names specified using [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm).

Continue
[CDS DDL - projection\_view, projected element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm)
[CDS DDL - projection\_view, VIRTUAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_virtual_element.htm)
[CDS DDL - projection\_view, expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm)