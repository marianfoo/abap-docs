  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Data%20Source%20Matrix%2C%20ABENCDS_DATA_SOURCE_MATRIX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Data Source Matrix

The following tables show all possible data sources of all available [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   Direct data sources defined after FROM.
-   [Association targets](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") of [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry").
-   Association targets of [CDS compositions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_glosry.htm "Glossary Entry").

Content:

-   [Data Sources After FROM](#@@ITOC@@ABENCDS_DATA_SOURCE_MATRIX_1)
-   [Association Targets of CDS Associations](#@@ITOC@@ABENCDS_DATA_SOURCE_MATRIX_2)
-   [Association Targets of CDS Compositions](#@@ITOC@@ABENCDS_DATA_SOURCE_MATRIX_3)

Data Sources After FROM   

The following table lists all available CDS entities and which data sources they accept after FROM, both directly and joined via a join.

Note: [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") can define a [join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoin_glosry.htm "Glossary Entry") between two data sources. The data sources that can be specified directly after FROM and by means of a join are the same. There is no difference.

CDS entity/FROM

CDS view entity

CDS transactional interface

CDS table function

CDS hierarchy

CDS DDIC-based view

DDIC database table

[DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry")

[DDIC external view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_view_glosry.htm "Glossary Entry")

[CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry")

x

\-

x

x

x

x

\-

\-

[CDS transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry")

x

x

\-

\-

x

\-

\-

\-

[CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry")

x

\-

\-

\-

x

\-

\-

\-

[CDS analytical projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry")

x

\-

\-

\-

x

\-

\-

\-

[CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

x

\-

\-

\-

x

\-

\-

\-

[CDS DDIC-based view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

x

\-

x

x

x

x

x

x

-   [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry"), [CDS custom entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"), and [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") do not specify any data source. They do not have a FROM clause.
-   CDS custom entities and CDS abstract entities cannot be used as data source of another CDS entity.
-   [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") can generally not be used as data source of another CDS entity. There is only one exception: A projection view of type [transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") can have a projection view of type [transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") as data source.
-   CDS projection views can have CDS view entities or CDS DDIC-based views (obsolete) as data source. This applies to all [provider contracts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_provider_contract.htm). There are some special rules for certain provider contracts:
    -   For CDS transactional interfaces and CDS transactional queries, the data source must be part of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"). This means it must either be a [CDS root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") itself, or be part of a [CDS composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") which includes a root node.
    -   For projection views of provider contract [ANALYTICAL\_QUERY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_query_apv.htm), the data source must be an [analytical cube view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry") or an [analytical dimension view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anal_dim_view_glosry.htm "Glossary Entry").

Association Targets of CDS Associations   

The following table lists all CDS entities that can define CDS associations and shows which other entities they accept as association target.

Note: The table is only about defining associations and not about exposing associations.

CDS entity/association target

CDS view entity

CDS projection view

CDS table function

CDS hierarchy

CDS custom entity

CDS abstract entity

CDS DDIC-based view

DDIC database table

[DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry")

[DDIC external view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_view_glosry.htm "Glossary Entry")

CDS view entity

x

x

x

x

x

x

x

x

\-

\-

CDS transactional query

x

x

x

x

x

x

x

x

\-

\-

CDS custom entity

x

\-

x

x

x

x

x

x

x

\-

CDS abstract entity

x

\-

x

x

x

x

x

x

x

\-

CDS DDIC-based view

x

\-

x

x

x

x

x

x

x

x

-   In CDS table functions and CDS hierarchies, associations cannot be specified. Therefore, they are not listed here.
-   A CDS entity can define itself as association target. [Self-associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenself_association_glosry.htm "Glossary Entry") are generally supported. They are mainly relevant for CDS hierarchies.
-   CDS projection views with provider contract ANALYTICAL\_QUERY and TRANSACTIONAL\_INTERFACE cannot define associations. This table applies only to CDS projection views of type [TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_query.htm) and to projection views [without provider contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_no_contract.htm) (not recommended).

Association Targets of CDS Compositions   

The following table lists all CDS entities that can define CDS compositions and shows with which entity they can be connected via a parent-child relationship by means of CDS compositions.

CDS entity/composition of or to-parent association

CDS view entity

,CDS custom entity

CDS abstract entity

CDS DDIC-based view

CDS view entity

x

x

x

x

CDS custom entity

x

x

x

x

CDS abstract entity

x

x

x

x

CDS DDIC-based view

x

x

x

x

-   CDS hierarchies and CDS table functions cannot define CDS composition relations.
-   CDS projection views can [expose](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_expose_assoc.htm) and [redirect](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm) compositions. The association target of a redirected composition must be another CDS projection view. However, a CDS projection view cannot define any new composition.