---
title: "ABAP Database Access"
description: |
  All the data relevant for all applications in AS ABAP(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm 'Glossary Entry'), including metadata and technical data, is saved and managed centrally in the standard database(https://help.sap.com/doc/abapdocu_754_inde
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm"
abapFile: "abenabap_sql.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenabap", "sql"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) → 

ABAP Database Access

All the data relevant for all applications in [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), including metadata and technical data, is saved and managed centrally in the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry"). AS ABAP supports database systems from different vendors. The [database objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_object_glosry.htm "Glossary Entry") used as data repositories and to access this data, such as database tables, database views, or stored procedures, are created as platform-specific objects by the ABAP-specific frameworks [ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") (including [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry")) and [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry") and are in the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").

-   In ABAP Dictionary, [database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm), [views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm), and non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) are defined as platform-independent objects. Instances of these objects are created in the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") when they are activated. At the same time, database tables, views, and [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) entities defined in ABAP Dictionary are also structures in ABAP Dictionary and can be used as globally visible structured types in ABAP programs.

-   The [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry") framework makes it possible to create ABAP-based definitions of [AMDP procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_glosry.htm "Glossary Entry") in the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). In ABAP, they are called using either [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls.htm) or, in the case of [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), using [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry").

All database objects defined and managed in AS ABAP are known as:

-   [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_objects.htm).

To enable access to database objects, every database system uses the largely standardized language [SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_glosry.htm "Glossary Entry"), which can be implemented in different ways to suit specific platforms. The following is possible when accessing [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry"):

-   [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm)

For (mostly) platform-independent access to database tables, views, and non-abstract CDS entities in ABAP Dictionary, the [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements embedded in ABAP are used, which themselves are transformed to platform-specific SQL using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry") in AS ABAP. This method also covers ABAP-specific evaluations, such as implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry") or [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry").

-   [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm)

Framework used to manage and call [database procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") and [database functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_function_glosry.htm "Glossary Entry") in ABAP.

-   [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm)

To use platform-specific SQL in ABAP, [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") can be passed to the database as follows using the [Native-SQL interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_interface_glosry.htm "Glossary Entry"):

-   Using the object-oriented framework [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry")

-   Using embedded Native SQL statements after the ABAP statement [EXEC SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec.htm).

-   [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hana.htm)

Additional specific methods are available when accessing [SAP HANA databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") from ABAP.

-   [Object Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_object_services.htm)

The [Object Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_services_glosry.htm "Glossary Entry") framework makes object-oriented access to the database possible by placing a wrapper around the actual database reads in question.

The following topics also deal with important aspects of database access:

-   [Data consistency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction.htm)

[LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry") concepts must be employed to ensure data consistency when handling persistent data in databases.

-   [Database connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_multiconnect.htm)

[Database connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_connection_glosry.htm "Glossary Entry") can be used to provide access to other databases too.

-   [System class for database features](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm)

The class CL\_ABAP\_DBFEATURES can be used to detect features of database.

Notes

-   If a [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") is used as the standard AS ABAP database, it is handled in ABAP programs like any relational database.

-   As well as the statements described here for database reads, the following are also available:

-   Access to [data clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster.htm) in database tables

-   [Obsolete access statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_access_obsolete.htm)

-   The framework for [logical databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb.htm) is an obsolete wrapper framework for database access.

-   [ABAP-managed database objects should not be accessed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_recomm.htm) using any methods other than those described here.

Continue
[ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_objects.htm)
[ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm)
[AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm)
[Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm)
[ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hana.htm)
[Object Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_object_services.htm)
[Data Consistency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction.htm)
[Database Connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_multiconnect.htm)
[System Class for Database Features](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm)