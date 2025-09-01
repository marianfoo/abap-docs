  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20-%20Core%20Data%20Services%20%28ABAP%20CDS%29%2C%20ABENCDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP - Core Data Services (ABAP CDS)

The ABAP Core Data Services (ABAP CDS) are the implementation of the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept for AS ABAP. ABAP CDS makes it possible to define semantic data models on the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of an AS ABAP and support [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") using behavior models.

-   The entities of the data models defined in ABAP CDS provide enhanced access functions compared to previous DDIC database tables and DDIC views defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)), thus enabling the optimization of ABAP SQL-based applications. This is particularly the case if an AS ABAP uses an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), since its in-memory characteristics can be used optimally.
-   [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") is based both on the data models defined in ABAP CDS and on special RAP objects, which model behavior.

The data models are defined in the form of [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") using the [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry"), [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry"), and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") provided by ABAP CDS in the [syntax of ABAP CDS](javascript:call_link\('abencds_syntax.htm'\)) in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can be used to define metadata for CDS objects.

Data exchange between ABAP CDS data models and data models on different platforms is possible using [CDS schema notation](javascript:call_link\('abencds_schema_notation_glosry.htm'\) "Glossary Entry") (CSN). CSN is a data format for data exchange between data models and it can be used, for example, to exchange metadata between [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and SAP Analytics Cloud (SAC).

-   [CDS Annotations](javascript:call_link\('abencds_annotations.htm'\))
    
    A CDS annotation adds metadata to a CDS object. Annotations can be specified in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry"), and [DCL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") and outsourced to [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). [Annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") can be used to create an annotation itself as a CDS object. An annotation definition prescribes how an annotation is used.
    
-   [CDS Type Definitions](javascript:call_link\('abencds_types.htm'\))
    
    CDS type definitions are created using the [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry"). They define data types natively in ABAP CDS. They can be enhanced with [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") and they can be used for typing, casting, and as operands of expressions in [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and in [ABAP](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry").
    
    -   [CDS Simple Types](javascript:call_link\('abencds_simple_types.htm'\))
        
        [CDS user-defined type](javascript:call_link\('abencds_user_defined_type_glosry.htm'\) "Glossary Entry") that defines an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry").
        
    -   [CDS Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\))
        
        [CDS user-defined type](javascript:call_link\('abencds_user_defined_type_glosry.htm'\) "Glossary Entry") that defines an [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry").
        
-   [CDS Function Definitions](javascript:call_link\('abencds_fdl.htm'\))
    
    [CDS function definitions](javascript:call_link\('abencds_function_definition_glosry.htm'\) "Glossary Entry") are created using the [CDS FDL](javascript:call_link\('abencds_fdl_glosry.htm'\) "Glossary Entry"). CDS function definitions allow the definition of user-defined [CDS functions](javascript:call_link\('abencds_function_glosry.htm'\) "Glossary Entry") that encapsulate algorithms in reusable code that can be used in operand positions of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). There is currently only one type of CDS function definition:
    
    -   [CDS Scalar Functions](javascript:call_link\('abencds_scalar_functions.htm'\))
        
        [CDS function definitions](javascript:call_link\('abencds_function_definition_glosry.htm'\) "Glossary Entry") that are implemented in [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") and return a scalar result.
        
-   [CDS Data Definitions](javascript:call_link\('abencds_entities.htm'\))
    
    CDS data definitions are created using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP CDS in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). They define the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that can be accessed as a data type in ABAP programs and as a data source in reading ABAP SQL statements.
    
    -   [CDS View Entities](javascript:call_link\('abencds_v2_views.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that use SQL to access other data sources and can be enriched semantically using annotations.
        
    -   [CDS Projection Views](javascript:call_link\('abencds_proj_views.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are based on a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and project a subset of its elements.
        
    -   [CDS Table Functions](javascript:call_link\('abencds_table_functions.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are implemented in [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") and return a tabular result set.
        
    -   [CDS Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that create an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") from a data source.
        
    -   [CDS Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for data models whose runtime is implemented manually.
        
    -   [CDS Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that describe only type properties and for which no database objects are instantiated.
        
    -   [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_views.htm'\))
        
        [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that use SQL to access other data sources and can be enriched semantically using annotations. These entities are technically based on [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry") and were superseded from release 7.55 on by [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), which are no longer based on dictionary objects.
        
    
    The [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS also contains language elements for enhancing CDS entities.
    
-   [CDS tuning objects](javascript:call_link\('abencds_tuning_objects.htm'\))
    
    [ABAP tuning objects](javascript:call_link\('abenabap_tuning_object_glosry.htm'\) "Glossary Entry") for CDS objects to define technical settings and tunings that can be transported separately.
    
-   [CDS Access Control](javascript:call_link\('abencds_access_control.htm'\))
    
    [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is based on [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") that are defined in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry"). When [CDS SQL entities](javascript:call_link\('abencds_sql_entity_glosry.htm'\) "Glossary Entry") that are assigned a CDS role are accessed, additional [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are evaluated by default.
    
-   [CDS System Entities](javascript:call_link\('abencds_system_entities.htm'\))
    
    [CDS system entities](javascript:call_link\('abencds_system_entity_glosry.htm'\) "Glossary Entry") are predefined CDS entities for common usage in ABAP CDS and ABAP SQL.
    

Further Information

For further details on ABAP Core Data Services, check the [ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide on SAP Help Portal.

Hints

-   [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") are transported using the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). The actual objects, like the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are defined using a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), are created after the transport by being activated in the target system.
-   [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") can only be programmed in the Eclipse-based [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). There are different editors for the Data Definition Language (DDL), the Service Definition Language (SDL), and the Data Control Language (DCL). The ADT documentation describes how these editors are used.
-   CDS source code can also be displayed in the [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\))
[ABAP CDS - Data Types](javascript:call_link\('abencds_data_types.htm'\))
[ABAP CDS - Null Values](javascript:call_link\('abencds_null_values.htm'\))
[ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\))
[ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\))
[ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\))
[ABAP CDS - Function Definitions](javascript:call_link\('abencds_fdl.htm'\))
[ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\))
[ABAP CDS - Tuning Objects](javascript:call_link\('abencds_tuning_objects.htm'\))
[ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\))
[ABAP CDS - System Entities](javascript:call_link\('abencds_system_entities.htm'\))
[Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\))