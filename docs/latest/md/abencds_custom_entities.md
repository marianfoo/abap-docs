  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Custom%20Entities%2C%20ABENCDS_CUSTOM_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Custom Entities

A [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") using the statement [DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). The name of the CDS custom entity must match the name of the DDL source code.

Purpose and use cases:

CDS custom entities allow developers to implement their own data provision using ABAP. Data retrieval is implemented via an ABAP class and performed at runtime. On CDS level, only an interface is defined, while the implementation of the logic is encapsulated in the application server artifact. Custom entities are used if data access cannot be done via means of [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") and the available CDS feature set and other CDS entity types. For example, custom entities can be used when

-   data is stored in non-relational storage, for example in a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").
-   data is stored in SAP liveCache and access is done via ABAP APIs.
-   data cannot be computed by means of CDS due to additional application-server-side logic.
-   a data model can be defined via CDS views, but the [DCL](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") feature set is not sufficient to define the necessary authorizations.

Data retrieval is also possible using an http client.

In the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), custom entities are used as a data model basis for [RAP unmanaged queries](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry").

A CDS custom entity represents all type properties of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   Metadata defined using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")
-   A structured type defined using an [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\))
-   Optionally, a parameter interface defined using [input parameters](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))
-   Any [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [CDS to-child associations](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry"), or [CDS to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") exposed in the element list.

A CDS custom entity is a [non-SQL CDS entity](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry").

A CDS custom entity can be used as follows:

-   ABAP CDS
    -   A CDS custom entity can be specified as the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [CDS to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry"), or [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). A CDS association, CDS to-child association, or CDS to-parent association of this type can be [exposed](javascript:call_link\('abencds_f1_custom_element.htm'\)) only and cannot be created as an instance of a join expression. Such associations can only be followed in Fiori OData scenarios where the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") (not SQL) is used to execute the query.
    -   Since no SQL artifact is generated for CDS custom entities and the query is implemented in ABAP, a CDS custom entity cannot be used as a data source of SELECT statements or used by SQL path expressions in other [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
-   ABAP Programs
    -   The structured type of the CDS custom entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition TYPE. The properties of the structured type can be evaluated using [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry").
    -   A CDS custom entity cannot be used as a data source of [SELECT](javascript:call_link\('abapselect.htm'\)) statements or used by [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) in ABAP SQL.
-   Frameworks
    -   In the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), custom entities are used as a data model basis for [RAP unmanaged queries](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry"). The ABAP query is in this case executed by a framework such as the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry").
    -   The [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of a CDS custom entity can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    -   The parameters and the CDS associations of CDS custom entities can be evaluated by frameworks such as the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry").

An instance of a CDS custom entity is not created as a database object and client handling is not defined.

Further Information

-   Development guide for the ABAP RESTful Application Programming model, section [Query](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/511a134f89614e77a2231d0af5b924f8?version=sap_cross_product_abap).
-   [ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS custom entities.

Hints

-   Custom entities can be nodes in RAP business objects, for example root, parent and/or child nodes using ROOT and composition relationships.
-   There is no [DCL](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") support for custom entities. If required, access control needs to be implemented manually in the [query implementation class](javascript:call_link\('abencds_f1_custom_query.htm'\)).
-   [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") are not supported for CDS custom entities.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))