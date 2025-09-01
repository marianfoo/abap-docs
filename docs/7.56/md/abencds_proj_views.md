  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) → 

ABAP CDS - Projection Views

A [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") is defined in the [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_definition_glosry.htm "Glossary Entry") using the statement DEFINE *\[*TRANSIENT*\]* VIEW ENTITY AS PROJECTION ON in the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm). DDL source code in a CDS projection view can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

A CDS projection view is based on a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") and exposes a subset of its features.

The name of a CDS projection view is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

[Client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry") is done implicitly and automatically for CDS projection views. The rules are the same as for CDS view entities, see section [ABAP CDS - Client Handling in CDS View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_client_handling.htm).

Table buffering does not work for CDS projection views, since [buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") in general doesn't work with another [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") as data source.

There are different types of projection views available, depending on the purpose and use case of the projection view. The type of projection view is specified using the syntax addition [PROVIDER CONTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_provider_contract.htm). The following types of CDS projection views are available:

-   Transactional CDS projection views
    
    Transactional queries serve as an interface for a [business service](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_service_glosry.htm "Glossary Entry") within the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_glosry.htm "Glossary Entry")
    
    For details, see the section about [Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm).
    
-   no provider contract specified
    
    Deprecated. It is strongly recommended to always specify a provider contract. If no provider contract is specified, the same features are available as for transactional queries. There are only a few differences in the syntax checks to transactional queries. The differences are listed in topic [no contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_no_contract.htm)..
    

Hint

A CDS projection view can be extended using a [CDS view entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") EXTEND VIEW ENTITY. For details, see topic [CDS DDL - EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm).

Continue
[CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm)
[CDS DDL - CDS Projection View, no contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_no_contract.htm)