  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) → 

Overview of ABAP-Managed Database Objects

[ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") can be the following:

-   An instance of a [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary.

-   The name of the database table on the database matches the name of the table in ABAP Dictionary.

-   Together, the key fields defined in ABAP Dictionary are the primary key of the database table on the database.

-   The indexes defined in ABAP Dictionary are created on the database.

-   The order of the fields in ABAP Dictionary does not need to match the order and on the database.

-   An instance of a classic [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary.

-   The database object of a database view is implemented using the platform-specific database statement CREATE VIEW, which is itself based on the definition of the database view in ABAP Dictionary.

-   The name of the view on the database matches the name of the table in ABAP Dictionary.

-   The key fields of a database view defined in ABAP Dictionary are ignored on the database.

-   An instance of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   Currently, the database object of a CDS view is defined using its CDS database view. The name of this view is specified in the [definition](javascript:call_link\('abencds_f1_define_view.htm'\)) of the CDS view using the annotation @AbapCatalog.sqlViewName.

-   The same applies as to classic database views, however (depending on the database platform) instances of CDS views with input parameters can also be created as database functions using CREATE FUNCTION, as is currently the case on SAP HANA databases.

-   Instances of [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry")

-   The AMDP framework copies the source code of [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") and [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") from [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") to a [database procedure](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") managed by the framework.

-   The name of an AMDP-managed database procedure is CLASS=>METH, where CLASS is the [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") and METH is the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

-   The parameter interface of an AMDP-managed database procedure is generated as a platform-specific interface from the parameter interface of the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

-   Instance of the [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") of [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   CDS table functions are implemented in [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") whose parameter interface is defined by the CDS table function.

-   The same properties apply as to all [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

-   Creating an instance of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   Instances of CDS hierarchies are created as special views on the database, which access a built-in hierarchy function on the database.

-   The name of the view on the database matches the name of the CDS hierarchy.

-   Instances of ABAP-specific session variables

-   The SAP HANA database has special [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) whose content matches the value of specific [ABAP system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") when accessed from ABAP. Some of these variables can also be modified from ABAP.

-   On other database platforms, these ABAP-specific session variables exist only when [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") are accessed using [ABAP SQL](javascript:call_link\('abenopensql.htm'\)).

-   Instances of [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary on the SAP HANA database.

Alongside the database objects themselves, the definitions of these objects in the AS ABAP framework cover further attributes described using metadata that are not known on the database. The most important of these attributes are:

-   Use as data types

-   The database tables and database views in ABAP Dictionary can be used in ABAP Dictionary itself and as [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") in ABAP programs.

-   [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be used as [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry").

In ABAP Dictionary, the data types of the components of the database tables and views are based on [built-in dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)). These types are a platform-independent wrapper of the actual database types and have ABAP-specific properties.

-   Client dependency

-   Database tables and database views whose first column is a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") with the built-in dictionary type [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) are [client-specific](javascript:call_link\('abenclient_dependence_glosry.htm'\) "Glossary Entry").

-   The annotation [@ClientHandling.type](javascript:call_link\('abencds_client_handling.htm'\)) or the obsolete annotation [@ClientDependent](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) define whether [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") are client-specific.

-   Table buffering

-   In ABAP Dictionary, it is possible to define whether [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") takes place for database tables and database views and the method used.

-   Table buffering of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is defined by the annotation [@AbapCatalog.buffering](javascript:call_link\('abencds_sap_puffer.htm'\)).

-   Extensibility

-   An [extension category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) can be defined in ABAP Dictionary for database tables.

-   The extensibility of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is defined by the annotation [@AbapCatalog.viewEnhancementCategory](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

-   Foreign key dependencies

-   In ABAP Dictionary, [foreign key dependencies](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") between [foreign key tables](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") and [check tables](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry") can be defined for database tables. [Text tables](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") are special foreign key tables that associate the rows in check tables with language-specific texts.

-   Logging

-   [Logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) can be enabled in ABAP Dictionary for database tables.

-   Access control

-   [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") from [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") can be defined for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and configured using the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

-   Reference fields

-   For table fields or view fields with the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN, reference fields of the types CUKY and UNIT must be defined in ABAP Dictionary.

-   For the elements of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), the relationships to reference fields are defined using [@Semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

-   Translatable texts

-   For database tables and database views, translatable short texts and documentation can be created in ABAP Dictionary.

-   For [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and their elements, translatable texts are defined using [@EndUserText](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) annotations.

-   [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") and [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are documented in the same way as regular [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") in [ABAP Doc](javascript:call_link\('abenabap_doc_glosry.htm'\) "Glossary Entry") or by using traditional class documentation.

In AS ABAP, the database objects managed by ABAP Dictionary, ABAP CDS, and AMDP are represented by [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that have a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") interface to the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"). The database objects themselves are created and modified using internal DDL statements and the AS ABAP [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

The ABAP Dictionary, ABAP CDS, and AMDP frameworks, together with the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"), ensure that complete and consistent ABAP-managed database objects are available to be accessed from AS ABAP.

Note

The overview above does not contain any database objects created by AS ABAP on the database for purely technical reasons and which should therefore never be accessed. Examples of these are database objects in the AMDP framework that are part of the framework itself, unlike AMDP procedures and AMDP functions.