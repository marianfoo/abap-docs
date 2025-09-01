  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) → 

ABAP - Core Data Services (ABAP CDS)

The ABAP Core Data Services (ABAP CDS) are the implementation of the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept for AS ABAP. ABAP CDS makes it possible to define semantic data models on the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of an AS ABAP and support [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") using behavior models.

-   The entities of the data models defined in ABAP CDS provide enhanced access functions compared to previous DDIC database tables and DDIC views defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)), thus enabling the optimization of ABAP SQL-based applications. This is particularly the case if an AS ABAP uses an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), since its in-memory characteristics can be used optimally.
-   [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") is based both on the data models defined in ABAP CDS and on special CDS objects, which model services and behavior.

The data models and behavior models are defined in the form of [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry"), [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"), and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") provided by ABAP CDS in the [syntax of ABAP CDS](javascript:call_link\('abencds_syntax.htm'\)) in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can be used to define metadata for CDS objects.

-   [CDS Annotations](javascript:call_link\('abencds_annotations.htm'\))
    
    A CDS annotation adds metadata to a CDS object. Annotations can be specified in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry"), and [DCL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") and outsourced to [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). [Annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") can be used to created an annotation itself as a CDS object. An annotation definition prescribes how an annotation is used.
    
-   [CDS Data Definitions](javascript:call_link\('abencds_entities.htm'\))
    
    CDS data definitions are created using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP CDS in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). They define the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that can be accessed as a data type in ABAP programs and as a data source in reading ABAP SQL statements.
    
    -   [CDS View Entities](javascript:call_link\('abencds_v2_views.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that use SQL to access other data sources and can be enriched semantically using annotations.
        
    -   [CDS Projection Views](javascript:call_link\('abencds_proj_views.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are based on a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and project a subset of its elements.
        
    -   [CDS Table Functions](javascript:call_link\('abencds_table_functions.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are implemented in [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry").
        
    -   [CDS Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that create an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") from a data source.
        
    -   [CDS Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for data models whose runtime is implemented manually.
        
    -   [CDS Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that describe only type attributes and for which no database objects are instantiated.
        
    -   [CDS DDIC-based views](javascript:call_link\('abencds_v1_views.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that use SQL to access other data sources and can be enriched semantically using annotations. These entities are technically based on [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry") and were superseded from release 7.55 on by [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), which are no longer based on dictionary objects.
        
    
    The [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS also contains language elements for enhancing CDS entities.
    
-   [CDS RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\))
    
    The data and behavior model of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") is based on [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and on special [CDS RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry") created using [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry") and [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry") or [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry"):
    
    -   [CDS Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\))
        
        [CDS RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry") that expose [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry").
        
    -   [CDS Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\))
        
        [CDS RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry") that define the behavior of [RAP business objects (RAP BO)](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").
        
-   [CDS Access Control](javascript:call_link\('abencds_access_control.htm'\))
    
    [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is based on [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") that are defined in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry"). When [non-SQL CDS entities](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") that are assigned a CDS role are accessed, additional [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are evaluated by default.
    

Hints

-   [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") are transported using the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). The actual objects, like the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are defined using a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), are created after the transport by being activated in the target system.
-   [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") can only be programmed in the Eclipse-based [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). There are different editors for the Data Definition Language (DDL), the Service Definition Language (SDL), the Behavior Definition Language (BDL), and the Data Control Language (DCL). The ADT documentation describes how these editors are used. CDS source code can also be displayed in the [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   Alongside ABAP CDS, [HANA CDS](https://help.sap.com/viewer/09b6623836854766b682356393c6c416/2.0.04/en-US/0b1eb07d74ec4f91947ff4cc4f557429.html) currently exists as another variant of the [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept. HANA CDS is only available on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). Entities in HANA CDS are developed using HANA-specific tools such as [SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry") and not with the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\))
[ABAP CDS - Amounts and Quantities](javascript:call_link\('abencds_calc_quan.htm'\))
[ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\))
[ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\))
[ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\))
[ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\))