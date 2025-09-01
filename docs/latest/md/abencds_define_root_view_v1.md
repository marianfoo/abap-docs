---
title: "CDS DDL - DDIC-Based View, ROOT"
description: |
  Syntax ... ROOT ... Effect The addition ROOT defines the CDS view ddic_based_view as the root entity of a RAP business object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm 'Glossary Entry') in the ABAP RESTful Application Programming Model(https://help.s
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_root_view_v1.htm"
abapFile: "abencds_define_root_view_v1.htm"
keywords: ["do", "if", "try", "data", "abencds", "define", "root", "view"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20ROOT%2C%20ABENCDS_DEFINE_ROOT_VIEW_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

CDS DDL - DDIC-Based View, ROOT

Syntax

... ROOT ...

Effect

The addition ROOT defines the CDS view ddic\_based\_view as the root entity of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry"). The [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   The definition of a root entity can use [COMPOSITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_v1.htm) to specify [to-child associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") to [child entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchild_entity_glosry.htm "Glossary Entry") of the business object.
-   A root entity does not have a [parent entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparent_entity_glosry.htm "Glossary Entry").

Hints

-   For more information about the ABAP RESTful Application Programming Model, see [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm).
-   The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view.htm) can add to a root entity but cannot make a regular view into a root entity.