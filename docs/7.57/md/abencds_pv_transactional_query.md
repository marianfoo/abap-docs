  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, Transactional Queries, ABENCDS_PV_TRANSACTIONAL_QUERY,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, Transactional Queries

[CDS transactional queries](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") are intended for modelling the projection layer of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity. The feature set focuses on specializing the [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") of the underlying business object. The runtime for transactional queries is mainly the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"), but also the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry").

The following image shows the role of CDS transactional queries within the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

![Figure](transactional_pv_1.png)

As a global data type, a CDS transactional query represents a structured type with the [elements of the CDS projection view](javascript:call_link\('abencds_proj_view_element_list.htm'\)) as components. Usage:

-   Unlike other CDS entities, CDS transactional queries currently cannot be used as data source of other CDS entities.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Hint

Transactional projection views have evolved from and will in the future replace consumption views. Both serve the same purpose, namely, to simplify the access to business objects. While consumption views were used for data modelling in the obsolete [ABAP Programming Model for SAP Fiori](javascript:call_link\('abenabap_pm_for_fiori_glosry.htm'\) "Glossary Entry"), projection views take over this role in its successor [RAP](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic CDS Projection View.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Query](javascript:call_link\('abencds_define_view_as_projection.htm'\))
[CDS DDL - proj\_view\_annot](javascript:call_link\('abencds_proj_view_annotations.htm'\))
[CDS DDL - PROVIDER CONTRACT](javascript:call_link\('abencds_pv_provider_contract.htm'\))
[CDS DDL - ASSOCIATION, Transactional Query](javascript:call_link\('abencds_proj_view_association.htm'\))
[CDS DDL - REDEFINE ASSOCIATION, Transactional Query](javascript:call_link\('abencds_proj_view_redefined_assoc.htm'\))
[CDS DDL - projection\_list, Transactional Query](javascript:call_link\('abencds_proj_view_element_list.htm'\))
[CDS DDL - WHERE, Transactional Query](javascript:call_link\('abencds_proj_view_cond_expr.htm'\))