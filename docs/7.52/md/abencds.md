  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) → 

ABAP CDS in ABAP Dictionary

The ABAP Core Data Services (ABAP CDS) are the platform-independent implementation of the general [CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_glosry.htm "Glossary Entry") concept for AS ABAP. The ABAP CDS make it possible to define semantic data models on the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry"). Unlike the SAP HANA-specific variant [HANA CDS](https://help.sap.com/viewer/09b6623836854766b682356393c6c416/2.0.00/en-us), the ABAP CDS are independent of the database system. The entities of the models defined in ABAP CDS provide enhanced access functions compared with existing database tables and views defined in ABAP Dictionary, making it possible to optimize Open SQL-based applications. This is particularly clear when an AS ABAP uses a [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry"), since its in-memory characteristics can be implemented in an optimum manner.

The data models are defined in the form of [CDS objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry") using the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") provided by ABAP CDS in the [syntax of ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm) in [CDS source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_source_code_glosry.htm "Glossary Entry"). The CDS objects defined with these languages are integrated into ABAP Dictionary and managed here. [CDS annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") can be used to define metadata for CDS objects.

-   [CDS Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm)

A CDS annotation adds metadata to a CDS object. Annotations can be specified in [DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry") source code and [DCL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry") and moved to [metadata extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). [Annotation definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") can be used to created an annotation itself as a CDS object. An annotation definition dictates how an annotation is used.

-   [CDS data definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm)

CDS data definitions are created using the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP CDS in the [DDL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). They define the following [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). These units can be accessed as a data type (in ABAP programs) and as a data source (in Open SQL read statements).

-   [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_views.htm)
    [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"), which from a technical perspective are based on [CDS database views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") of the ABAP Dictionary.

-   [CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_table_functions.htm)
    [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"), which are implemented in [AMDP functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_glosry.htm "Glossary Entry").

The [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP CDS also contains language elements that enhance CDS entities.

-   [CDS access controls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm)

[CDS access controls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") are based on [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") that are defined in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in [DCL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendcl_source_code_glosry.htm "Glossary Entry"). When CDS entities that are assigned a CDS role are accessed, additional [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are evaluated by default.

Notes

-   [CDS objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry") are transported using the [CDS source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_source_code_glosry.htm "Glossary Entry"). The [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using a [CDS data definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry") are created after the transport when activated in the target system.

-   [CDS source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_source_code_glosry.htm "Glossary Entry") can only be programmed in the Eclipse-based [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry"). The Data Definition Language (DDL) and the Data Control Language (DCL) use different editors. The ADT documentation describes how these editors are used. CDS source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   As well as the database-independent ABAP CDS, [HANA CDS](https://help.sap.com/viewer/09b6623836854766b682356393c6c416/2.0.00/en-us) are also available as another variant of the [CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_glosry.htm "Glossary Entry") concept. HANA CDS are only available in the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry"). Entities in HANA CDS are developed using HANA-specific tools such as [SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") and not with the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry").

-   The fact that the ABAP CDS are platform-independent from a functional perspective does not mean that the performance when accessing [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") is the same for all platforms. See the [Performance Note](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_perfo.htm).

Continue
[ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm)
[ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm)
[ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm)
[ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm)
[ABAP CDS - Performance Note](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_perfo.htm)