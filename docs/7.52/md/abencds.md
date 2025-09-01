  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) → 

ABAP CDS in ABAP Dictionary

The ABAP Core Data Services (ABAP CDS) are the platform-independent implementation of the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept for AS ABAP. The ABAP CDS make it possible to define semantic data models on the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). Unlike the SAP HANA-specific variant [HANA CDS](https://help.sap.com/viewer/09b6623836854766b682356393c6c416/2.0.00/en-us), the ABAP CDS are independent of the database system. The entities of the models defined in ABAP CDS provide enhanced access functions compared with existing database tables and views defined in ABAP Dictionary, making it possible to optimize Open SQL-based applications. This is particularly clear when an AS ABAP uses a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), since its in-memory characteristics can be implemented in an optimum manner.

The data models are defined in the form of [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") provided by ABAP CDS in the [syntax of ABAP CDS](javascript:call_link\('abencds_syntax.htm'\)) in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). The CDS objects defined with these languages are integrated into ABAP Dictionary and managed here. [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can be used to define metadata for CDS objects.

-   [CDS Annotations](javascript:call_link\('abencds_annotations.htm'\))

A CDS annotation adds metadata to a CDS object. Annotations can be specified in [DDL](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") source code and [DCL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") and moved to [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). [Annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") can be used to created an annotation itself as a CDS object. An annotation definition dictates how an annotation is used.

-   [CDS data definitions](javascript:call_link\('abenddic_cds_entities.htm'\))

CDS data definitions are created using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP CDS in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). They define the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). These units can be accessed as a data type (in ABAP programs) and as a data source (in Open SQL read statements).

-   [CDS views](javascript:call_link\('abenddic_cds_views.htm'\))
    [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), which from a technical perspective are based on [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of the ABAP Dictionary.

-   [CDS table functions](javascript:call_link\('abenddic_cds_table_functions.htm'\))
    [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), which are implemented in [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry").

The [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP CDS also contains language elements that enhance CDS entities.

-   [CDS access controls](javascript:call_link\('abencds_authorizations.htm'\))

[CDS access controls](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") are based on [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") that are defined in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry"). When CDS entities that are assigned a CDS role are accessed, additional [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are evaluated by default.

Notes

-   [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") are transported using the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). The [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined using a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") are created after the transport when activated in the target system.

-   [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") can only be programmed in the Eclipse-based [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The Data Definition Language (DDL) and the Data Control Language (DCL) use different editors. The ADT documentation describes how these editors are used. CDS source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   As well as the database-independent ABAP CDS, [HANA CDS](https://help.sap.com/viewer/09b6623836854766b682356393c6c416/2.0.00/en-us) are also available as another variant of the [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept. HANA CDS are only available in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). Entities in HANA CDS are developed using HANA-specific tools such as [SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry") and not with the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   The fact that the ABAP CDS are platform-independent from a functional perspective does not mean that the performance when accessing [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is the same for all platforms. See the [Performance Note](javascript:call_link\('abenabap_cds_perfo.htm'\)).

Continue
[ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\))
[ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\))
[ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\))
[ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\))
[ABAP CDS - Performance Note](javascript:call_link\('abenabap_cds_perfo.htm'\))