---
title: "Native SQL Access to ABAP-Managed Database Objects"
description: |
  There are two types of Native SQL access to ABAP-managed database objects(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_object_glosry.htm 'Glossary Entry'). -   Access Using ABAP-Managed Native SQL(#abenabap-managed-db-objects-nsql-1--------access-using-non-abap-
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_objects_nsql.htm"
abapFile: "abenabap_managed_db_objects_nsql.htm"
keywords: ["update", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenabap", "managed", "objects", "nsql"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_objects.htm) →  [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_objects_access.htm) → 

Native SQL Access to ABAP-Managed Database Objects

There are two types of Native SQL access to [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry").

-   [Access Using ABAP-Managed Native SQL](#abenabap-managed-db-objects-nsql-1--------access-using-non-abap-managed-native-sql---@ITOC@@ABENABAP_MANAGED_DB_OBJECTS_NSQL_2)

Access Using ABAP-Managed Native SQL

ABAP-managed Native SQL is [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_glosry.htm "Glossary Entry") that can be used by ABAP programs to access the database through the [Native SQL interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") in AS ABAP. It includes the following:

-   [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc.htm)

-   [EXEC SQL - Embedded Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennativesql.htm)

The Native SQL interface passes vendor-specific SQL statements to the database system without making any modifications. Alongside this, SAP-specific Native SQL is available, which is processed in platform-dependent parts of the interface (Client Libraries).

Native SQL can be used to access ABAP-managed database objects as follows:

-   Reads and writes on the following ABAP-managed database objects using database-specific SQL:

-   Instances of the [database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) and [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm) defined in the ABAP Dictionary.

-   [SQL views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_view_glosry.htm "Glossary Entry") of CDS views defined in ABAP CDS.

-   Calls of the following ABAP-managed database procedures or database functions:

-   It is possible to call [AMDP procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_glosry.htm "Glossary Entry") that do not implement any [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   The AMDP table function of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") can be called.

-   The [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables.htm) can be accessed on the SAP HANA database using the built-in HANA function SESSION\_CONTEXT.

The most important features of Native SQL are as follows:

-   Native SQL is platform-dependent.

-   Data types defined in the ABAP Dictionary and their possible enhancements are not currently known in Native SQL.

-   Native SQL does not respect the order of fields defined in the ABAP Dictionary, which can differ from the order in the database.

-   The platform-dependent parts (Client Libraries) of the [Native SQL interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") support [mappings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_type_mapping.htm) between ABAP types and appropriate database types for bound parameters in ADBC and [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_host.htm) after [EXEC SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm). If types are not appropriate, on the other hand, platform-dependent conversions are made, which can easily produce unexpected results and errors.

-   Any [null values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry") passed to ABAP data objects using the Native SQL interface are transformed to their type-dependent initial values. In the case of writes, null values cannot be prevented.

-   When procedures are called, Native SQL provides the following special methods alongside the platform-specific SQL statements:

-   The method [EXECUTE\_PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_procedure.htm) of the class CL\_SQL\_STATEMENT

-   The statement [EXECUTE PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_procedure.htm) after [EXEC SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm)

-   Bindings of internal ABAP tables to Native SQL are only possible using the methods SET\_PARAM\_TABLE of the classes [CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_ddl_dml.htm) and [CL\_SQL\_RESULT\_SET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_query.htm) in ADBC. Internal tables cannot be used as [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_host.htm) after [EXEC SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm) and cannot be used as parameters of the method [EXECUTE\_PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_procedure.htm) in ADBC.

-   When [AMDP procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_glosry.htm "Glossary Entry") are called, it cannot be guaranteed that the database objects exist or that their content is up-to-date. This is only the case in calls from ABAP and when accessing objects using ABAP SQL. Before an object is accessed using Native SQL, methods of the documented class CL\_AMDP\_RUNTIME\_SERVICES can be used to create the database objects. This applies both to direct calls and indirect cases, such as when [SQL views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_view_glosry.htm "Glossary Entry") of CDS views are accessed in whose DDL source code [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") are used as a data source.

-   Native SQL does not support the following ABAP Dictionary and ABAP CDS functions:

-   Native SQL does not support [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm). The client ID must always be specified explicitly. To do this, a parameter must be bound in ADBC or a host variable must be used after EXEC SQL. The ABAP-specific session variables CLIENT and CDS\_CLIENT can be accessed on the SAP HANA database. It should be noted here that, when using Native SQL, the value of the session variable CDS\_CLIENT cannot be set to a different value using ABAP methods.

-   Native SQL does not support [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry").

-   Native SQL does not support [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry").

-   Native SQL cannot handle the [enhancement category of DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm).

-   Native SQL does not support the [logging of database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_protocol.htm).

-   Native SQL accesses the database objects of [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") directly and ignores any other properties of CDS entities:

-   When the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a CDS view is accessed, the database-specific instance created of this view must be known. This applies in particular to CDS views with input parameters.

-   When an instance of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") is accessed, its AMDP table function must be called.

-   Native SQL cannot handle [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") and [CDS roles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry").

-   It must be ensured that all session variables used in a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm) or [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm) have the correct value. This applies in particular to the session variable client, to which the HANA session variable CDS\_CLIENT is assigned and not CLIENT.

-   The ABAP-managed database objects accessed in Native SQL are not recorded in a where-used list. Where-used lists can only be created indirectly, by declaring suitable parameters and host variables in references to the dictionary types of the database objects. Another option is a full text search in the ABAP source code in AS ABAP.

-   DDL statements are allowed in Native SQL.

-   Native SQL supports ABAP-managed [secondary connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") and [service connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry").

-   Native SQL respects the [dependency rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendependency_rule_glosry.htm "Glossary Entry") defined for a database.

-   Native SQL respects [data aging](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_aging_glosry.htm "Glossary Entry") by default.

-   When ADBC is used, Native SQL is either fully dynamic or, if EXEC SQL is used, fully static.

Access Using Non-ABAP-Managed Native SQL

Non-ABAP-managed Native SQL consists of SQL statements that are passed to the database using interfaces other than the [Native SQL interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") of AS ABAP or that are executed in the database without being checked in AS ABAP. Examples are [database objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_object_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") created by [\>SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") that access [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry"), views that access database tables in ABAP Dictionary, or database procedures that call AMDP procedures or functions.

In general, the same applies to access using non-ABAP-managed Native SQL as to accessing ABAP-managed Native SQL. There are, however, the following additional restrictions:

-   The exact instance and name of an [ABAP-managed database object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") is undefined and can change between releases. Only the AS ABAP [database interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_interface_glosry.htm "Glossary Entry") can react to such changes and make them transparent to the consumer.

-   The implementation and function of a database object managed by ABAP can depend on ABAP-specific context information that is provided only in cases where the database is a standard AS ABAP database and addressed using its database interface. More specifically, the content of the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables_abexa.htm) in the SAP HANA database can be set correctly only when an object is accessed from ABAP. On other database platforms, in fact, only CDS session variables are set when CDS entities are accessed using ABAP SQL.

-   Only in cases where access is made from AS ABAP can it be guaranteed that an ABAP-managed database object actually exists and its content is up-to-date. The time when the instance is created or updated is not fixed and the existence or consistency of the instance is not guaranteed for access from outside AS ABAP. This applies in particular to [AMDP procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_glosry.htm "Glossary Entry") whose existence and consistency is only guaranteed by the AMDP framework of AS ABAP.

-   A where-used list for ABAP-managed database objects cannot be found using non-ABAP-managed Native SQL.

-   Non-ABAP-managed Native SQL does not support any ABAP-managed [secondary connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") and [service connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry").

-   Non-ABAP-managed Native SQL does not respect [data aging](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_aging_glosry.htm "Glossary Entry"). If there is no suitable [dependency rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendependency_rule_glosry.htm "Glossary Entry"), all partitions in the main memory of the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") must be read.

Hint

A [dependency rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendependency_rule_glosry.htm "Glossary Entry") defined for a database table is also respected by non-ABAP-managed Native SQL, since this rule is evaluated by the optimizer of the SAP HANA database.