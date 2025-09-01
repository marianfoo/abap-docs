---
title: "ABAP CDS - Projection Views"
description: |
  A CDS projection view(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm 'Glossary Entry') is defined in the DDL source code(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm 'Glossary Entry') of a CDS
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm"
abapFile: "abencds_proj_views.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abencds", "proj", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Projection%20Views%2C%20ABENCDS_PROJ_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Projection Views

A [CDS projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") is defined in the [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_definition_glosry.htm "Glossary Entry") using the statement DEFINE *\[*TRANSIENT*\]* VIEW ENTITY AS PROJECTION ON in the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm). DDL source code in a CDS projection view can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

A CDS projection view is based on another [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") (called [projected entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry")). CDS projection views adapt a CDS data model for service-specific use cases.

The name of a CDS projection view is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

[Client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") is done implicitly and automatically for CDS projection views. The rules are the same as for CDS view entities, see section [ABAP CDS - Client Handling in CDS View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_client_handling.htm).

Table buffering does not work for CDS projection views, since [buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") in general does not work with another [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") as data source.

There are different types of projection views available, depending on the purpose and use case of the projection view. The type of projection view is specified using the syntax addition [PROVIDER CONTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_provider_contract.htm). The following types of CDS projection views are available:

-   [CDS transactional queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry")
    
    Transactional queries define the projection layer of a RAP business object. They are [CDS SQL entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_entity_glosry.htm "Glossary Entry").
    
    For details, see the section about [Transactional Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_query.htm).
    
-   [CDS transactional interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry")
    
    CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry") to provide the basis for a [RAP BO interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry").
    
    CDS transactional interfaces are [SQL entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_entity_glosry.htm "Glossary Entry").
    
    For details, see the section about [CDS Transactional Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_interface.htm).
    
-   [CDS analytical queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry")
    
    [CDS analytical queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") are intended for modelling analytical queries within the CDS data model. They are evaluated by an analytical engine.
    
    Analytical queries are [non-SQL entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry").
    
    For details, see the section about [Analytical Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_query_apv.htm).
    
-   no provider contract specified
    
    Deprecated. It is strongly recommended that a provider contract is specified. If no provider contract is specified, the same features are available as for transactional queries. There are only a few differences in the syntax checks to transactional queries. The differences are listed in topic [no contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_no_contract.htm).
    

Further Information

[ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS projection views.

Hint

A CDS projection view can be extended using a [CDS view entity extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") EXTEND VIEW ENTITY. For details, see topic [CDS DDL - EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view_entity.htm).

Continue
[CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_query.htm)
[CDS DDL - CDS Projection View, Transactional Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_interface.htm)
[CDS DDL - CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_query_apv.htm)
[CDS DDL - CDS Projection View, No Contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_no_contract.htm)