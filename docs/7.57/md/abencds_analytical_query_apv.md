  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, Analytical Queries, ABENCDS_ANALYTICAL_QUERY_APV, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, Analytical Queries

[CDS analytical projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") are intended for modelling analytical queries within a CDS data model. The [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") must be an [analytical cube view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry"). The feature set is restricted to the capabilities of the runtime of the analytical engine. The runtime for analytical queries are analytical engines, such as ABAP Analytical Engine.

The following image shows the role of CDS analytical projection views within an analytical application.

![Figure](analytical_query_1.png)

Analytical projection views are transient projection views defined with the keyword [DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_analytical.htm). That means that only a runtime object on the ABAP server is generated. No [SQL view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_view_glosry.htm "Glossary Entry") is created on the database. Therefore, an analytical query can be used only by the analytical runtime. An analytical query cannot be used as data source of other CDS entities. Access with [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") is not possible.

Hint

CDS analytical projection views improve on the previous version of CDS Analytical Queries. They offer advantages such as avoiding the generation of an SQL artefact, reducing the need for annotations, and an improved syntax check. Moreover, they use the new features of CDS view entities, such as [typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typed_literal_v2.htm) and [improved amount and quantity handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calc_quan.htm).

Further Information

Development guide for the SAP Business Technology Platform, section about Analytics.

Continue
[CDS DDL - Conceptual Background, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_measure_dimension_apv.htm)
[CDS DDL - DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_analytical.htm)
[CDS DDL - parameter\_list, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_apv.htm)
[CDS DDL - element\_list, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_apv.htm)
[CDS DDL - WHERE, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_where_apv.htm)