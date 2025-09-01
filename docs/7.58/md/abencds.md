  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20-%20Core%20Data%20Services%20%28ABAP%20CDS%29%2C%20ABENCDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP - Core Data Services (ABAP CDS)

The ABAP Core Data Services (ABAP CDS) are the implementation of the general [CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_glosry.htm "Glossary Entry") concept for AS ABAP. ABAP CDS makes it possible to define semantic data models on the [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry") of an AS ABAP and support [ABAP RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_glosry.htm "Glossary Entry") using behavior models.

-   The entities of the data models defined in ABAP CDS provide enhanced access functions compared to previous DDIC database tables and DDIC views defined in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm), thus enabling the optimization of ABAP SQL-based applications. This is particularly the case if an AS ABAP uses an [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), since its in-memory characteristics can be used optimally.
-   [ABAP RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_glosry.htm "Glossary Entry") is based both on the data models defined in ABAP CDS and on special RAP objects, which model behavior.

The data models are defined in the form of [CDS objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") using the [CDS TDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl_glosry.htm "Glossary Entry"), [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS SDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sdl_glosry.htm "Glossary Entry"), and [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry") provided by ABAP CDS in the [syntax of ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_syntax.htm) in [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry"). [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") can be used to define metadata for CDS objects.

Data exchange between ABAP CDS data models and data models on different platforms is possible using [CDS schema notation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_schema_notation_glosry.htm "Glossary Entry") (CSN). CSN is a data format for data exchange between data models and it can be used, for example, to exchange metadata between [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and SAP Analytics Cloud (SAC).

-   [CDS Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm)
    
    A CDS annotation adds metadata to a CDS object. Annotations can be specified in [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), [SDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensdl_source_code_glosry.htm "Glossary Entry"), and [DCL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry") and outsourced to [metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). [Annotation definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") can be used to create an annotation itself as a CDS object. An annotation definition prescribes how an annotation is used.
    
-   [CDS Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm)
    
    CDS type definitions are created using the [CDS TDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl_glosry.htm "Glossary Entry"). They define data types natively in ABAP CDS. They can be enhanced with [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") and they can be used for typing, casting, and as operands of expressions in [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") and in [ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glosry.htm "Glossary Entry").
    
    -   [CDS Simple Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_types.htm)
        
        [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") that defines an [elementary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry").
        
    -   [CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enumeration_types.htm)
        
        [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") that defines an [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").
        
-   [CDS Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm)
    
    [CDS function definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_function_definition_glosry.htm "Glossary Entry") are created using the [CDS FDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl_glosry.htm "Glossary Entry"). CDS function definitions allow the definition of user-defined [CDS functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_function_glosry.htm "Glossary Entry") that encapsulate algorithms in reusable code that can be used in operand positions of [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"). There is currently only one type of CDS function definition:
    
    -   [CDS Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_functions.htm)
        
        [CDS function definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_function_definition_glosry.htm "Glossary Entry") that are implemented in [AMDP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") and return a scalar result.
        
-   [CDS Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm)
    
    CDS data definitions are created using the [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP CDS in [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). They define the following [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that can be accessed as a data type in ABAP programs and as a data source in reading ABAP SQL statements.
    
    -   [CDS View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that use SQL to access other data sources and can be enriched semantically using annotations.
        
    -   [CDS Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that are based on a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") and project a subset of its elements.
        
    -   [CDS Table Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_functions.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that are implemented in [AMDP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") and return a tabular result set.
        
    -   [CDS Hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchies.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that create an [SQL hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") from a data source.
        
    -   [CDS Custom Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entities.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") for data models whose runtime is implemented manually.
        
    -   [CDS Abstract Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entities.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that describe only type properties and for which no database objects are instantiated.
        
    -   [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm)
        
        [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that use SQL to access other data sources and can be enriched semantically using annotations. These entities are technically based on [dictionary objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_object_glosry.htm "Glossary Entry") and were superseded from release 7.55 on by [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), which are no longer based on dictionary objects.
        
    
    The [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry") in ABAP CDS also contains language elements for enhancing CDS entities.
    
-   [CDS tuning objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tuning_objects.htm)
    
    [ABAP tuning objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tuning_object_glosry.htm "Glossary Entry") for CDS objects to define technical settings and tunings that can be transported separately.
    
-   [CDS Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm)
    
    [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") is based on [CDS roles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") that are defined in [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry") in [DCL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendcl_source_code_glosry.htm "Glossary Entry"). When [CDS SQL entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_entity_glosry.htm "Glossary Entry") that are assigned a CDS role are accessed, additional [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are evaluated by default.
    
-   [CDS System Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_system_entities.htm)
    
    [CDS system entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_system_entity_glosry.htm "Glossary Entry") are predefined CDS entities for common usage in ABAP CDS and ABAP SQL.
    

Further Information

For further details on ABAP Core Data Services, check the [ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide on SAP Help Portal.

Hints

-   [CDS objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") are transported using the [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry"). The actual objects, like the [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that are defined using a [CDS data definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), are created after the transport by being activated in the target system.
-   [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry") can only be programmed in the Eclipse-based [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). There are different editors for the Data Definition Language (DDL), the Service Definition Language (SDL), and the Data Control Language (DCL). The ADT documentation describes how these editors are used.
-   CDS source code can also be displayed in the [Repository Browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_browser_glosry.htm "Glossary Entry") of the [ABAP Workbench](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_syntax.htm)
[ABAP CDS - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_types.htm)
[ABAP CDS - Null Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_null_values.htm)
[ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm)
[ABAP CDS - Service Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_service_definitions.htm)
[ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm)
[ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm)
[ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm)
[ABAP CDS - Tuning Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tuning_objects.htm)
[ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm)
[ABAP CDS - System Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_system_entities.htm)
[Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm)