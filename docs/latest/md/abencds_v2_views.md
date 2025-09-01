  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20View%20Entities%2C%20ABENCDS_V2_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - View Entities

A [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") is a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using the statement [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") of ABAP Core Data Services (CDS). A CDS view entity can be used to select fields from one or more data sources (database tables or other CDS entities). Additional semantic properties can be added by using annotations. CDS view entities are the successor of [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). They have the same structure and serve the same purpose as [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). Generally spoken, they represent an improved version of classic [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

When a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") is activated, a repository object is created. This repository object can be accessed using the name of the CDS view entity. As a global data type, each CDS view entity represents a structured type with the [elements of the CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v2.htm) as components and can be used like any [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_object_glosry.htm "Glossary Entry").

The name of the CDS entity is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

A CDS view entity is a [CDS SQL entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_entity_glosry.htm "Glossary Entry").

The following sections describe client handling and table buffering for CDS view entities. Afterwards, the statement [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) and all possible additions are described.

-   [Client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_client_handling.htm)
-   [Table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_buffering.htm)
-   [Creation of a CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm)

Further Information

[ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS view entities.

Hint

The programming of [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

Continue
[ABAP CDS - Client Handling in CDS View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_client_handling.htm)
[ABAP CDS - Table Buffering of CDS View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_buffering.htm)
[CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm)