---
title: "CDS DDL - CDS Projection View, Transactional Queries"
description: |
  Transactional CDS projection views(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_transactional_pv_glosry.htm 'Glossary Entry') are intended for modelling the projection layer of a RAP business object(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosr
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm"
abapFile: "abencds_pv_transactional_query.htm"
keywords: ["do", "while", "if", "try", "data", "abencds", "transactional", "query"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) → 

CDS DDL - CDS Projection View, Transactional Queries

[Transactional CDS projection views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") are intended for modelling the projection layer of a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity. The feature set focuses on specializing the [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") of the underlying business object. The runtime for transactional queries is mainly the [RAP query engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"), but also the [RAP transactional engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry").

The following image shows the role of transactional CDS projection views within the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry").

![Figure](ransactional_pv_1.png)

As a global data type, a CDS projection view of type transactional query represents a structured type with the [elements of the CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element_list.htm) as components. Usage:

-   Unlike other CDS entities, transactional CDS projection views currently can't be used as data source of other CDS entities.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Hint

Transactional projection views have evolved from and will in the future replace consumption views. Both serve the same purpose, namely, to simplify the access to business objects. While consumption views were used for data modelling in the obsolete [ABAP Programming Model for SAP Fiori](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pm_for_fiori_glosry.htm "Glossary Entry"), projection views take over this role in its successor [RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry").

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic CDS Projection View.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_as_projection.htm)
[CDS DDL - proj\_view\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_annotations.htm)
[CDS DDL - PROVIDER CONTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_provider_contract.htm)
[CDS DDL - ASSOCIATION, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_association.htm)
[CDS DDL - REDEFINE ASSOCIATION, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_redefined_assoc.htm)
[CDS DDL - projection\_list, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element_list.htm)
[CDS DDL - WHERE, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_cond_expr.htm)