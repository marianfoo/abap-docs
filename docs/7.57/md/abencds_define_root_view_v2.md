---
title: "CDS DDL - CDS View Entity, ROOT"
description: |
  Syntax ... ROOT ... Effect The addition ROOT defines the CDS view entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm 'Glossary Entry') view_entity as the root entity of a RAP business object(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abe
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_root_view_v2.htm"
abapFile: "abencds_define_root_view_v2.htm"
keywords: ["do", "if", "try", "data", "abencds", "define", "root", "view"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, ROOT, ABENCDS_DEFINE_ROOT_VIEW_V2, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, ROOT

Syntax

... ROOT ...

Effect

The addition ROOT defines the [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") view\_entity as the root entity of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry"). The root entity is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity does not have a [parent entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenparent_entity_glosry.htm "Glossary Entry").
-   A root entity can specify [CDS compositions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry") that define [child entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchild_entity_glosry.htm "Glossary Entry") of the business object using the keyword [COMPOSITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_v2.htm). This is not mandatory, a root node can also be a [leaf entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleaf_entity_glosry.htm "Glossary Entry").

Hints

-   More information about the ABAP RESTful Application Programming Model can be found under [RAP objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm).
-   The statement [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_view_entity.htm) can add to a root entity but cannot turn a regular view entity into a root entity.