  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_managed_db_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Overview%20of%20ABAP-Managed%20Database%20Objects%2C%20ABENABAP_MANAGED_DB_OBJECTS_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Overview of ABAP-Managed Database Objects

[ABAP-managed database objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") can be the following:

-   An instance of a [transparent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry") defined in the ABAP Dictionary.
    -   The name of the database table on the database matches the name of the table in the ABAP Dictionary.
    -   The key fields defined in the ABAP Dictionary are the primary key of the database table on the database.
    -   The indexes defined in the ABAP Dictionary are created on the database.
    -   The order of the fields in the ABAP Dictionary does not need to match the order and on the database.
-   An instance of a [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined in the ABAP Dictionary.
    -   The database object of a DDIC database view is implemented as an [SQL view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm "Glossary Entry") using a platform-dependent database statement CREATE VIEW, which is itself based on the definition of the DDIC database view in the ABAP Dictionary.
    -   The name of the view on the database matches the name of the table in the ABAP Dictionary.
    -   The key fields of a DDIC database view defined in the ABAP Dictionary are ignored on the database.
-   Instance of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") defined in ABAP CDS.
    -   In CDS views that are not defined with the addition [ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm), an additional [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is created in the ABAP Dictionary whose name is specified in the definition of the CDS view with the annotation @AbapCatalog.sqlViewName. The same applies as to DDIC database views, where instances of CDS views with input parameters can also be created as database functions using CREATE FUNCTION, depending on the database platform, as is currently the case on SAP HANA databases.
    -   In CDS views defined using the statement [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm), an identically named [SQL view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm "Glossary Entry") or a database function on the database is created directly from the definition of the CDS entity.
-   Instances of [AMDP procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry")
    -   The AMDP framework copies the source code of [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") and [AMDP function implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") from [AMDP classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") to a [database procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") managed by the framework.
    -   The name of an AMDP-managed database procedure is CLASS=>METH, where CLASS is the [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") and METH is the [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry").
    -   The parameter interface of an AMDP-managed database procedure is generated as a platform-dependent interface from the parameter interface of the [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry").
-   Instance of the [AMDP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry") of [CDS scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry")
    -   CDS scalar functions are implemented in [AMDP function implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") whose parameter interface is defined by the CDS scalar function.
    -   The same applies as to general [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry").
-   Instance of the [AMDP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry") of [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    -   CDS table functions are implemented in [AMDP function implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") whose parameter interface is defined by the CDS table function.
    -   The same applies as to general [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry").
-   Instance of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")
    -   Instances of CDS hierarchies are created as special views on the database, which access a built-in hierarchy function on the database.
    -   The name of the view on the database matches the name of the CDS hierarchy.
-   Instances of ABAP-specific session variables
    -   The SAP HANA database has special [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables.htm) whose content matches the value of specific [ABAP system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") when accessed from ABAP. Some of these variables can also be modified from ABAP.
    -   On other database platforms, these ABAP-specific session variables exist only when CDS views are accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm).
-   Instances of [dependency rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendependency_rule_glosry.htm "Glossary Entry") defined in ABAP Dictionary on the SAP HANA database.

In addition to the database objects themselves, their definitions in the AS ABAP framework cover further properties described using metadata that are not known to the database. The most important of these properties are:

-   Use as data types
    
    -   The database tables and DDIC database views in the ABAP Dictionary can be used in the ABAP Dictionary itself and as [structured types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm "Glossary Entry") in ABAP programs.
    -   [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") can be used as [structured types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm "Glossary Entry").
    
    In the ABAP Dictionary, the data types of the components of the database tables and views are based on [built-in dictionary types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). These types are an ABAP-specific wrapper of the actual database types and have ABAP-specific properties.
    
-   Client dependency
    -   Database tables and DDIC database views whose first column is a [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") with the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) are [client-dependent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_dependent_glosry.htm "Glossary Entry").
    -   The annotation [@ClientHandling.typ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) or the obsolete annotation [@ClientDependent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_obs.htm) define whether CDS views and [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") are client-dependent.
-   Table buffering
    -   In ABAP Dictionary, it is possible to define whether and how [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") takes place for database tables and DDIC database views.
    -   Table buffering of CDS views is defined by the annotation [@AbapCatalog.buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_buffering.htm).
-   Enhancements
    -   An [enhancement category of DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm) can be defined in the ABAP Dictionary for database tables.
    -   The enhancement of CDS views is defined by the annotation @AbapCatalog.viewEnhancementCategory.
    -   For [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry"), special extensibility annotations [@AbapCatalog.extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm) are available.
-   Foreign key dependencies
    -   In the ABAP Dictionary, [foreign key dependencies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") between [foreign key tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") and [check tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheck_table_glosry.htm "Glossary Entry") can be defined for database tables. [Text tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_table_glosry.htm "Glossary Entry") are special foreign key tables that link the lines in check tables with language-specific texts.
-   Logging
    -   [Logging](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_protocol.htm) can be enabled in the ABAP Dictionary for database tables.
-   Access control
    -   [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") from [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") can be defined for CDS views and [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") and configured using the annotation @AccessControl.authorizationCheck.
-   Reference fields
    -   For table fields or view fields with the [built-in data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) CURR and QUAN, reference fields of the types CUKY and UNIT must be defined in the ABAP Dictionary.
    -   For the elements of CDS views and [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry"), the relationships to reference fields are defined using [@Semantics annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm).
-   Translatable texts
    -   For database tables and DDIC database views, translatable short texts and documentation can be created in the ABAP Dictionary.
    -   For CDS views and [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") and their elements, translatable texts are defined using [@EndUserText](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_tables.htm) annotations.
    -   [AMDP classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") and [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") are documented in the same way as regular [classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm "Glossary Entry") in [ABAP Doc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_doc_glosry.htm "Glossary Entry") or in classic class documentation.

In AS ABAP, the database objects managed by the ABAP Dictionary, ABAP CDS, and AMDP are represented by [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") that have a [package](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpackage_glosry.htm "Glossary Entry") interface to the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencts_glosry.htm "Glossary Entry"). The actual database objects are created and modified using internal DDL statements and the AS ABAP [database interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_interface_glosry.htm "Glossary Entry").

The ABAP Dictionary, ABAP CDS, and AMDP frameworks, together with the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencts_glosry.htm "Glossary Entry"), ensure that complete and consistent ABAP-managed database objects are available to be accessed from AS ABAP.

Hint

The overview above does not contain any database objects created by AS ABAP on the database for purely technical reasons and which should therefore never be accessed. Examples are database objects in the AMDP framework that are part of the framework itself, unlike AMDP procedures and AMDP functions.