  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) → 

ABAP CDS - Custom Entities

A [CDS custom entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") is defined in the [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_definition_glosry.htm "Glossary Entry") using the statement [DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm). The name of the CDS custom entity must match the name of the DDL source code.

Purpose and use cases:

CDS custom entities allow developers to implement their own data provision using ABAP. Data retrieval is implemented via an ABAP class and performed at runtime. On CDS level, only an interface is defined, while the implementation of the logic is encapsulated in the application server artifact. Custom entities are used if data access cannot be done via means of [SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") and the available CDS feature set and other CDS entity types. For example, custom entities can be used when

-   data is stored in non-relational storage, for example in a [BLOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenblob_glosry.htm "Glossary Entry").
-   data is stored in SAP liveCache and access is done via ABAP APIs.
-   data cannot be computed by means of CDS due to additional application-server-side logic.
-   a data model can be defined via CDS views, but the [DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_glosry.htm "Glossary Entry") feature set is not sufficient to define the necessary authorizations.

Data retrieval is also possible using an http client.

In the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry"), custom entities are used as a data model basis for [RAP unmanaged queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_unmanged_query_glosry.htm "Glossary Entry").

A CDS custom entity represents all type attributes of a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   Metadata defined using [CDS annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry")
-   A structured type defined using an [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm)
-   Optionally, a parameter interface defined using [input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_parameter_list.htm)
-   Any [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry"), [CDS compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry"), or [CDS to-parent associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") exposed in the element list.

A CDS custom entity can be used as follows:

-   ABAP CDS
    -   A CDS custom entity can be specified as the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry"), [CDS composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry"), or [CDS to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry"). A CDS association, CDS composition, or CDS to-parent association of this type can be [exposed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element.htm) only and cannot be created as an instance of a join expression. Such associations can only be followed in Fiori OData scenarios where the [RAP query engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_query_engine_glosry.htm "Glossary Entry") (not SQL) is used to execute the query.
    -   Since no SQL artifact is generated for CDS custom entities and the query is implemented in ABAP, a CDS custom entity cannot be used as a data source of SELECT statements or used by SQL path expressions in other [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry").
-   ABAP Programs
    -   The structured type of the CDS custom entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition TYPE. The attributes of the structured type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").
    -   A CDS custom entity cannot be used as a data source of [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statements or used by [path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path.htm) in ABAP SQL.
-   Frameworks
    -   In the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry"), custom entities are used as a data model basis for [RAP unmanaged queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_unmanged_query_glosry.htm "Glossary Entry"). The ABAP query is in this case executed by a framework such as the [RAP query engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_query_engine_glosry.htm "Glossary Entry").
    -   The [annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") of a CDS custom entity can be [evaluated](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_analysis.htm) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    -   The parameters and the CDS associations of CDS custom entities can be evaluated by frameworks such as the [RAP query engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_query_engine_glosry.htm "Glossary Entry").

An instance of a CDS custom entity is not created as a database object and client handling is not defined.

Further Information

-   Development guide for the ABAP RESTful Application Programming model, section Query.

Hints

-   There is no [DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_glosry.htm "Glossary Entry") support for custom entities. If required, access control needs to be implemented manually in the [query implementation class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_query.htm).
-   [CDS metadata extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") are not supported for CDS custom entities.
-   Custom entities can be nodes in RAP business objects, for example root, parent and/or child nodes using ROOT and composition relationships.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm)