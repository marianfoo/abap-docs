---
title: "ABAP SQL Access to ABAP-Managed Database Objects"
description: |
  ABAP SQL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm 'Glossary Entry') includes a set of ABAP SQL statements(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) for use in ABAP programs. The database is accessed using the ABAP SQL
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_managed_db_objects_asql.htm"
abapFile: "abenabap_managed_db_objects_asql.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abenabap", "managed", "objects", "asql"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_managed_db_objects.htm) →  [Access to ABAP-Managed database objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_managed_db_objects_access.htm) → 

ABAP SQL Access to ABAP-Managed Database Objects

[ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") includes a set of [ABAP SQL statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) for use in ABAP programs. The database is accessed using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry") of the [database interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm "Glossary Entry"), which transforms the ABAP SQL statements into platform-dependent SQL.

ABAP SQL can be used to access [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") as follows:

-   Reads and writes on [database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) and [DDIC database views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_views.htm) defined in the ABAP Dictionary. Writes on DDIC database views are restricted.
-   Reads on the database objects of CDS views, CDS table functions, and CDS hierarchies. When a CDS table function is accessed, the associated [AMDP table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") is called internally and its result is provided as the result set of the ABAP SQL statement.

The most important ABAP SQL features are as follows:

-   ABAP SQL is largely platform-independent
-   ABAP SQL is based on the data types defined in the ABAP Dictionary and their possible enhancements.
    -   ABAP SQL respects the order of fields defined in the ABAP Dictionary, since this can differ from the order in the database.
    -   ABAP SQL checks the compatibility of [host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm) with the associated dictionary types or database types.
    -   ABAP SQL enables conversions between ABAP types and platform-dependent data types in accordance with uniform ABAP-specific rules.
    -   ABAP SQL has its own [handler](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_null_values.htm) for [null values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry").
-   ABAP SQL supports the following ABAP Dictionary and ABAP CDS functions:
    -   [Implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm)
    -   [Table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm)
    -   Evaluating [CDS access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control.htm)
    -   [Enhancement categories of DDIC structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm) are respected
    -   [Logging of database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_protocol.htm)
-   ABAP SQL accesses a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") using its name and respects all its relevant attributes. Access to [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is [obsolete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_cds_obsolete.htm) and forbidden in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm).
    -   [Implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) depends on how client dependency is defined using the corresponding annotations in the [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry").
    -   The [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") mapped to the CDS entity are evaluated.
    -   The key fields defined in the CDS entity are respected.
    -   [Actual parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_parameters.htm) can be assigned to the input parameters of a CDS entity in uniform syntax.
    -   [SQL path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_path_expression_glosry.htm "Glossary Entry") can be specified for [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry").
    -   When ABAP SQL is used to access a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") can also be read.
    -   All [session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensession_variable_glosry.htm "Glossary Entry") are set correctly on all platforms when ABAP SQL is used to access a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). More specifically, the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) modifies the session variable client.
    -   When ABAP SQL is used to access a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"), the access is transformed to the call of the associated [AMDP table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_table_function_glosry.htm "Glossary Entry").
-   Database objects specified statically in ABAP SQL are recorded in the where-used list of the ABAP tools. Each time an ABAP-managed database object is modified it is advisable to record it in the where-used list. In this way the effects of the modification can be controlled.
-   ABAP SQL enables dynamic tokens to be specified that are evaluated at runtime of an ABAP program.
-   DDL statements are not included in ABAP SQL. The respective ABAP-managed database objects cannot be modified in ABAP SQL and no other database objects can be created or modified.
-   ABAP SQL supports the use of ABAP-managed [secondary connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or [service connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_connection_glosry.htm "Glossary Entry").
-   ABAP SQL respects the [dependency rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendependency_rule_glosry.htm "Glossary Entry") defined for a database.
-   ABAP SQL respects [data aging](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_aging_glosry.htm "Glossary Entry") by default.

Hint

Some of the semantic attributes defined in the ABAP Dictionary or ABAP CDS, such as foreign key relationships or reference fields, are ignored in ABAP SQL and are respected only by classic [Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry"), [Web Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"), and some other frameworks. The latter applies in particular to the evaluation of [framework-specific annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") in ABAP CDS.