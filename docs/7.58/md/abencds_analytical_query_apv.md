  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20Projection%20View%2C%20Analytical%20Queries%2C%20ABENCDS_ANALYTICAL_QUERY_APV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

CDS DDL - CDS Projection View, Analytical Queries

[CDS analytical projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") are intended for modeling analytical queries within a CDS data model. The [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") must be an [analytical cube view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry") or an [analytical dimension view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anal_dim_view_glosry.htm "Glossary Entry"). The feature set is restricted to the capabilities of the runtime of the analytical engine. The runtime for analytical queries are analytical engines, such as [ABAP Analytical Engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ae_glosry.htm "Glossary Entry"). The protocol for CDS analytical queries is the [Information Access protocol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenina_protocol_glosry.htm "Glossary Entry") (InA). InA is available as [service binding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_service_bindings.htm) type.

The following image shows the role of CDS analytical projection views within an analytical application.

![Figure](analytical_model.jpg)

Analytical projection views are transient projection views defined with the keyword [DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_as_analytical.htm). That means that only a runtime object on the ABAP server is generated. No [SQL view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_view_glosry.htm "Glossary Entry") is created on the database. Therefore, an analytical query can be used only by the analytical runtime. An analytical query cannot be used as data source of other CDS entities. Access with [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") is not possible.

Hint

CDS analytical projection views improve on the previous version of CDS Analytical Queries. They offer advantages such as avoiding the generation of an SQL artefact, reducing the need for annotations, and an improved syntax check. Moreover, they use the new features of CDS view entities, such as [typed literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typed_literal_v2.htm) and [improved amount and quantity handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calc_quan.htm).

Further Information

Development guide for the SAP Business Technology Platform, section about [Analytics](https://help.sap.com/docs/ABAP_Cloud/67127c83ae1a4917b6b65ec222416894/4ae5db4d9bfd472ba70613b358dbb16b?version=sap_cross_product_abap).

[ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS analytical queries.

Continue
[CDS DDL - Conceptual Background, Analytical Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_measure_dimension_apv.htm)
[CDS DDL - DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON, Analytical Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_as_analytical.htm)
[CDS DDL - parameter\_list, Analytical Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_apv.htm)
[CDS DDL - element\_list, Analytical Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_element_list_apv.htm)
[CDS DDL - WHERE, Analytical Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_apv.htm)