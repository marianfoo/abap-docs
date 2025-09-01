  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20Projection%20View%2C%20Transactional%20Queries%2C%20ABENCDS_PV_TRANSACTIONAL_QUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

CDS DDL - CDS Projection View, Transactional Queries

[CDS transactional queries](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") are intended for modelling the projection layer of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity. The feature set focuses on specializing the [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") of the underlying business object. The runtime for transactional queries is mainly the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"), but also the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry").

The following image shows the role of CDS transactional queries within the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

![Figure](transactional_pv_1.png)

As a global data type, a CDS transactional query represents a structured type with the [elements of the CDS projection view](javascript:call_link\('abencds_proj_view_element_list.htm'\)) as components. Usage:

-   Unlike other CDS entities, CDS transactional queries currently cannot be used as data source of other CDS entities.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Hint

Transactional projection views have evolved from and will in the future replace [consumption views](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/82a882a0d1de41fa949ea7cd186f15c0). Both serve the same purpose, namely, to simplify the access to business objects. While consumption views were used for data modelling in the obsolete [ABAP Programming Model for SAP Fiori](javascript:call_link\('abenabap_pm_for_fiori_glosry.htm'\) "Glossary Entry"), projection views take over this role in its successor [RAP](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic [CDS Projection View](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/448c144391764977aefea5e1984ced38?version=sap_cross_product_abap).
-   [ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS transactional queries.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Query](javascript:call_link\('abencds_define_view_as_projection.htm'\))
[CDS DDL - proj\_view\_annot](javascript:call_link\('abencds_proj_view_annotations.htm'\))
[CDS DDL - PROVIDER CONTRACT](javascript:call_link\('abencds_pv_provider_contract.htm'\))
[CDS DDL - ASSOCIATION, Transactional Query](javascript:call_link\('abencds_proj_view_association.htm'\))
[CDS DDL - REDEFINE ASSOCIATION, Transactional Query](javascript:call_link\('abencds_proj_view_redefined_assoc.htm'\))
[CDS DDL - projection\_list, Transactional Query](javascript:call_link\('abencds_proj_view_element_list.htm'\))
[CDS DDL - WHERE, Transactional Query](javascript:call_link\('abencds_proj_view_cond_expr.htm'\))