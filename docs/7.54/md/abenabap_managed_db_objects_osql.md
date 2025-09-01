---
title: "ABAP SQL Access to ABAP-Managed Database Objects"
description: |
  ABAP SQL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm 'Glossary Entry') includes a set of ABAP SQL statements(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) for use in ABAP programs. The database is accessed using the ABAP SQL i
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_objects_osql.htm"
abapFile: "abenabap_managed_db_objects_osql.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abenabap", "managed", "objects", "osql"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_objects.htm) →  [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_objects_access.htm) → 

ABAP SQL Access to ABAP-Managed Database Objects

[ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") includes a set of [ABAP SQL statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) for use in ABAP programs. The database is accessed using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry") of the [database interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_interface_glosry.htm "Glossary Entry"), which transforms the ABAP SQL statements into platform-specific SQL.

ABAP SQL can be used to access [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") as follows:

-   Reads and writes on [database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and [classic database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) defined in ABAP Dictionary. Writes on database views are only possible with restrictions.

-   Reads on the database objects of CDS views, CDS table functions, and CDS hierarchies. When a CDS table function is accessed, the associated [AMDP table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") is called internally and its result is provided as the results set of the ABAP SQL statement.

The most important ABAP SQL features are as follows:

-   ABAP SQL is to a great extent platform-independent

-   ABAP SQL is based on the data types defined in ABAP Dictionary and any enhancements made to them:

-   ABAP SQL respects the order of fields defined in ABAP Dictionary, since this can differ from the order in the database.

-   ABAP SQL checks the compatibility of [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) with the associated dictionary types or database types.

-   ABAP SQL enables conversions to be made between ABAP types and platform-specific data types in accordance with uniform ABAP-specific rules.

-   ABAP SQL has its own [handler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_null_values.htm) for [null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry").

-   ABAP SQL supports the following ABAP Dictionary and ABAP CDS functions:

-   [Implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm)

-   [Table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_puffering.htm)

-   Evaluating [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm)

-   [Enhancement categories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_enh_cat.htm) are respected

-   [Logging of database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_protocol.htm)

-   ABAP SQL uses the name of a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") to access the entity and respects all relevant attributes. Access to [CDS database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") is [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_cds_obsolete.htm) and forbidden in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_750.htm).

-   [Implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is applied in accordance with how client dependency is defined using the relevant annotations in the [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry").

-   The [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") mapped to the CDS entity are evaluated.

-   The key fields defined in the CDS entity are respected.

-   [Actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_parameters.htm) can be associated with the input parameters of a CDS entity in uniform syntax.

-   [SQL path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_path_expression_glosry.htm "Glossary Entry") can be specified for [CDS associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry").

-   When ABAP SQL is used to access a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") can also be read.

-   All [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) are set correctly on all platforms when ABAP SQL is used to access a CDS view. More specifically, the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) modifies the session variable client.

-   When ABAP SQL is used to access a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), the access is transformed to the associated [AMDP table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_table_function_glosry.htm "Glossary Entry").

-   Database objects specified statically in ABAP SQL are recorded in the where-used list in ABAP tools. Each time an ABAP-managed database object is modified it is advisable to record it in the where-used list. In this way, any consequences of modifying the object can be checked.

-   ABAP SQL enables dynamic tokens to be specified that are evaluated at runtime of an ABAP program.

-   DDL statements are not included in the scope of ABAP SQL. The respective ABAP-managed database objects cannot be modified in ABAP SQL and no other database objects can be created or modified.

-   ABAP SQL does not support [secondary connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or [service connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_connection_glosry.htm "Glossary Entry").

-   ABAP SQL respects the [dependency rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendependency_rule_glosry.htm "Glossary Entry") defined for a database.

-   ABAP SQL respects [data aging](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_aging_glosry.htm "Glossary Entry") by default.

Note

Some of the semantic attributes defined in ABAP Dictionary or ABAP CDS, such as foreign key relationships or reference fields, are ignored in ABAP SQL and are respected only by classic [Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"), [Web Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"), and some other frameworks. This applies in particular to the evaluation of [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in ABAP CDS as well.