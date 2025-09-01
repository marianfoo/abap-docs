  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, Analytical Queries, ABENCDS_ANALYTICAL_QUERY_APV, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, Analytical Queries

[CDS analytical projection views](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry") are intended for modelling analytical queries within a CDS data model. The [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") must be an [analytical cube view](javascript:call_link\('abencds_analytical_cube_glosry.htm'\) "Glossary Entry"). The feature set is restricted to the capabilities of the runtime of the analytical engine. The runtime for analytical queries are analytical engines, such as ABAP Analytical Engine.

The following image shows the role of CDS analytical projection views within an analytical application.

![Figure](analytical_query_1.png)

Analytical projection views are transient projection views defined with the keyword [DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_analytical.htm'\)). That means that only a runtime object on the ABAP server is generated. No [SQL view](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") is created on the database. Therefore, an analytical query can be used only by the analytical runtime. An analytical query cannot be used as data source of other CDS entities. Access with [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") is not possible.

Hint

CDS analytical projection views improve on the previous version of CDS Analytical Queries. They offer advantages such as avoiding the generation of an SQL artefact, reducing the need for annotations, and an improved syntax check. Moreover, they use the new features of CDS view entities, such as [typed literals](javascript:call_link\('abencds_typed_literal_v2.htm'\)) and [improved amount and quantity handling](javascript:call_link\('abencds_calc_quan.htm'\)).

Further Information

Development guide for the SAP Business Technology Platform, section about Analytics.

Continue
[CDS DDL - Conceptual Background, Analytical Query](javascript:call_link\('abencds_measure_dimension_apv.htm'\))
[CDS DDL - DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON, Analytical Query](javascript:call_link\('abencds_define_view_as_analytical.htm'\))
[CDS DDL - parameter\_list, Analytical Query](javascript:call_link\('abencds_parameter_list_apv.htm'\))
[CDS DDL - element\_list, Analytical Query](javascript:call_link\('abencds_element_list_apv.htm'\))
[CDS DDL - WHERE, Analytical Query](javascript:call_link\('abencds_where_apv.htm'\))