---
title: "Syntax"
description: |
  ... proj_element1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm), proj_element2(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm), virtual_element1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element_list.htm"
abapFile: "abencds_proj_view_element_list.htm"
keywords: ["do", "if", "try", "data", "abencds", "proj", "view", "element", "list"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm) → 

CDS DDL - projection\_list, transactional query

Syntax

... [proj\_element1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm), [proj\_element2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm)*\[*,
    [virtual\_element1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_virtual_element.htm), [virtual\_element2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_virtual_element.htm), ... *\]*
   *\[* [expose\_assoc1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm), [expose\_assoc2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm)*\]* ...

Effect

Defines the elements of a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). The elements are specified in a comma-separated list in curly brackets { }. The projection list can consist of projected elements from the underlying projected entity, [virtual elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_virtual_element_glosry.htm "Glossary Entry"), and exposed associations. Exposed associations can be associations from the projected entity, [newly defined associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_association.htm), or [redefined associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_redefined_assoc.htm).

Continue
[CDS DDL - proj\_element, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm)
[CDS DDL - VIRTUAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_virtual_element.htm)