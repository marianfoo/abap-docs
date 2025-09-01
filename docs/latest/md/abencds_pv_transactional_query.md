---
title: "CDS DDL - CDS Projection View, Transactional Queries"
description: |
  CDS transactional queries(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm 'Glossary Entry') are intended for modelling the projection layer of a RAP business object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glos
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_query.htm"
abapFile: "abencds_pv_transactional_query.htm"
keywords: ["do", "while", "if", "try", "data", "abencds", "transactional", "query"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20Projection%20View%2C%20Transactional%20Queries%2C%20ABENCDS_PV_TRANSACTIONAL_QUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

CDS DDL - CDS Projection View, Transactional Queries

[CDS transactional queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") are intended for modelling the projection layer of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity. The feature set focuses on specializing the [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") of the underlying business object. The runtime for transactional queries is mainly the [RAP query engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"), but also the [RAP transactional engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry").

The following image shows the role of CDS transactional queries within the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry").

![Figure](transactional_pv_1.png)

As a global data type, a CDS transactional query represents a structured type with the [elements of the CDS projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element_list.htm) as components. Usage:

-   Unlike other CDS entities, CDS transactional queries currently cannot be used as data source of other CDS entities.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Hint

Transactional projection views have evolved from and will in the future replace [consumption views](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/82a882a0d1de41fa949ea7cd186f15c0). Both serve the same purpose, namely, to simplify the access to business objects. While consumption views were used for data modelling in the obsolete [ABAP Programming Model for SAP Fiori](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pm_for_fiori_glosry.htm "Glossary Entry"), projection views take over this role in its successor [RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry").

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic [CDS Projection View](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/448c144391764977aefea5e1984ced38?version=sap_cross_product_abap).
-   [ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS transactional queries.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_projection.htm)
[CDS DDL - proj\_view\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_annotations.htm)
[CDS DDL - PROVIDER CONTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_provider_contract.htm)
[CDS DDL - ASSOCIATION, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_association.htm)
[CDS DDL - REDEFINE ASSOCIATION, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_redefined_assoc.htm)
[CDS DDL - projection\_list, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element_list.htm)
[CDS DDL - WHERE, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_cond_expr.htm)