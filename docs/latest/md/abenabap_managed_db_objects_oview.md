  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Overview%20of%20ABAP-Managed%20Database%20Objects%2C%20ABENABAP_MANAGED_DB_OBJECTS_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Overview of ABAP-Managed Database Objects

[ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") can be the following:

-   An instance of a [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary.
    -   The name of the database table on the database matches the name of the table in the ABAP Dictionary.
    -   The key fields defined in the ABAP Dictionary are the primary key of the database table on the database.
    -   The indexes defined in the ABAP Dictionary are created on the database.
    -   The order of the fields in the ABAP Dictionary does not need to match the order and on the database.
-   An instance of a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary.
    -   The database object of a DDIC database view is implemented as an [SQL view](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") using a platform-dependent database statement CREATE VIEW, which is itself based on the definition of the DDIC database view in the ABAP Dictionary.
    -   The name of the view on the database matches the name of the table in the ABAP Dictionary.
    -   The key fields of a DDIC database view defined in the ABAP Dictionary are ignored on the database.
-   Instance of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") defined in ABAP CDS.
    -   In CDS views that are not defined with the addition [ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) of the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)), an additional [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is created in the ABAP Dictionary whose name is specified in the definition of the CDS view with the annotation @AbapCatalog.sqlViewName. The same applies as to DDIC database views, where instances of CDS views with input parameters can also be created as database functions using CREATE FUNCTION, depending on the database platform, as is currently the case on SAP HANA databases.
    -   In CDS views defined using the statement [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)), an identically named [SQL view](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") or a database function on the database is created directly from the definition of the CDS entity.
-   Instances of [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry")
    -   The AMDP framework copies the source code of [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") and [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") from [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") to a [database procedure](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") managed by the framework.
    -   The name of an AMDP-managed database procedure is CLASS=>METH, where CLASS is the [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") and METH is the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
    -   The parameter interface of an AMDP-managed database procedure is generated as a platform-dependent interface from the parameter interface of the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
-   Instance of the [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") of [CDS scalar functions](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry")
    -   CDS scalar functions are implemented in [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") whose parameter interface is defined by the CDS scalar function.
    -   The same applies as to general [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
-   Instance of the [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") of [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
    -   CDS table functions are implemented in [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") whose parameter interface is defined by the CDS table function.
    -   The same applies as to general [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
-   Instance of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
    -   Instances of CDS hierarchies are created as special views on the database, which access a built-in hierarchy function on the database.
    -   The name of the view on the database matches the name of the CDS hierarchy.
-   Instances of ABAP-specific session variables
    -   The SAP HANA database has special [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) whose content matches the value of specific [ABAP system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") when accessed from ABAP. Some of these variables can also be modified from ABAP.
    -   On other database platforms, these ABAP-specific session variables exist only when CDS views are accessed using [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)).
-   Instances of [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary on the SAP HANA database.

In addition to the database objects themselves, their definitions in the AS ABAP framework cover further properties described using metadata that are not known to the database. The most important of these properties are:

-   Use as data types
    
    -   The database tables and DDIC database views in the ABAP Dictionary can be used in the ABAP Dictionary itself and as [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") in ABAP programs.
    -   [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be used as [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry").
    
    In the ABAP Dictionary, the data types of the components of the database tables and views are based on [built-in dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)). These types are an ABAP-specific wrapper of the actual database types and have ABAP-specific properties.
    
-   Client dependency
    -   Database tables and DDIC database views whose first column is a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") with the built-in dictionary type [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) are [client-dependent](javascript:call_link\('abenclient_dependent_glosry.htm'\) "Glossary Entry").
    -   The annotation [@ClientHandling.typ](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) or the obsolete annotation [@ClientDependent](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) define whether CDS views and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") are client-dependent.
-   Table buffering
    -   In ABAP Dictionary, it is possible to define whether and how [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") takes place for database tables and DDIC database views.
    -   Table buffering of CDS views is defined by the annotation [@AbapCatalog.buffering](javascript:call_link\('abencds_v1_buffering.htm'\)).
-   Enhancements
    -   An [enhancement category of DDIC structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) can be defined in the ABAP Dictionary for database tables.
    -   The enhancement of CDS views is defined by the annotation @AbapCatalog.viewEnhancementCategory.
    -   For [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") and [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), special extensibility annotations [@AbapCatalog.extensibility](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) are available.
-   Foreign key dependencies
    -   In the ABAP Dictionary, [foreign key dependencies](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") between [foreign key tables](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") and [check tables](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry") can be defined for database tables. [Text tables](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") are special foreign key tables that link the lines in check tables with language-specific texts.
-   Logging
    -   [Logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) can be enabled in the ABAP Dictionary for database tables.
-   Access control
    -   [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") from [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") can be defined for CDS views and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and configured using the annotation @AccessControl.authorizationCheck.
-   Reference fields
    -   For table fields or view fields with the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN, reference fields of the types CUKY and UNIT must be defined in the ABAP Dictionary.
    -   For the elements of CDS views and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), the relationships to reference fields are defined using [@Semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).
-   Translatable texts
    -   For database tables and DDIC database views, translatable short texts and documentation can be created in the ABAP Dictionary.
    -   For CDS views and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and their elements, translatable texts are defined using [@EndUserText](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) annotations.
    -   [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") and [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are documented in the same way as regular [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") in [ABAP Doc](javascript:call_link\('abenabap_doc_glosry.htm'\) "Glossary Entry") or in classic class documentation.

In AS ABAP, the database objects managed by the ABAP Dictionary, ABAP CDS, and AMDP are represented by [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that have a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") interface to the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"). The actual database objects are created and modified using internal DDL statements and the AS ABAP [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

The ABAP Dictionary, ABAP CDS, and AMDP frameworks, together with the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"), ensure that complete and consistent ABAP-managed database objects are available to be accessed from AS ABAP.

Hint

The overview above does not contain any database objects created by AS ABAP on the database for purely technical reasons and which should therefore never be accessed. Examples are database objects in the AMDP framework that are part of the framework itself, unlike AMDP procedures and AMDP functions.