  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) → 

ABAP Database Access

All the data relevant for all applications of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"), including metadata and technical data, is stored and managed centrally in its [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). AS ABAP supports database systems from different vendors. The [database objects](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") for storing and accessing data, such as database tables, views, or stored procedures, are created as platform-specific objects by the ABAP-specific frameworks [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"), [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry").

-   In the ABAP Dictionary, [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC views](javascript:call_link\('abenddic_views.htm'\)), in ABAP CDS, and non-abstract [CDS entities](javascript:call_link\('abencds_entities.htm'\)) are defined as ABAP-specific objects. Instances of these objects are created in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") when they are activated. Such database tables, views, and entities can also be used as globally visible structured types in ABAP programs.

-   The [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") framework makes it possible to create ABAP-based definitions of [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). In ABAP, they are called using either [method calls](javascript:call_link\('abenmethod_calls.htm'\)) or, in the case of [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry").

All database objects defined and managed in AS ABAP are known as:

-   [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)).

To enable access to database objects, every database system uses the largely standardized language [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry"), which can be implemented in different ways to suit specific platforms. The following options are available in ABAP for accessing ABAP-managed managed database objects: [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry"):

-   [ABAP SQL](javascript:call_link\('abenopensql.htm'\))

For mostly platform-independent access to database tables, dictionary views, and non-abstract CDS entities, the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements embedded in ABAP are used, which themselves are transformed to platform-specific SQL using the [ABAP SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry") in AS ABAP. This method also covers ABAP-specific evaluations, such as implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") or [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

-   [AMDP](javascript:call_link\('abenamdp.htm'\))

Framework used to manage and call [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") and [database functions](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry") in ABAP.

-   [Native SQL](javascript:call_link\('abennative_sql.htm'\))

To use platform-specific SQL in ABAP, [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") can be passed to the database as follows using the [Native-SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry"):

-   Using the object-oriented framework [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry")

-   Using embedded Native SQL statements after the ABAP statement [EXEC SQL](javascript:call_link\('abapexec.htm'\)).

-   [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\))

Additional specific methods are available when accessing [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") from ABAP.

-   [Object Services](javascript:call_link\('abenabap_object_services.htm'\))

The [Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") framework makes object-oriented access to the database possible by placing a wrapper around the actual database reads.

The following topics also deal with important aspects of database access:

-   [Data consistency](javascript:call_link\('abentransaction.htm'\))

[LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") concepts must be employed to ensure data consistency when handling persistent data in databases.

-   [Database connections](javascript:call_link\('abenopensql_multiconnect.htm'\))

[Database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") can also be used to provide access to other databases or database schemas.

-   [System class for database features](javascript:call_link\('abencl_abap_dbfeatures.htm'\))

The class CL\_ABAP\_DBFEATURES can be used to determine features of database.

Programming Guideline

[Use ABAP SQL for general database accesses where possible.](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

Hints

-   If a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is used as the standard AS ABAP database, it is handled in ABAP programs like any relational database.

-   In addition to the statements described here for database reads, the following are also available:

-   Access to [data clusters](javascript:call_link\('abendata_cluster.htm'\)) in database tables

-   [Obsolete access statements](javascript:call_link\('abendb_access_obsolete.htm'\))

-   The framework for [logical databases](javascript:call_link\('abenldb.htm'\)) is an obsolete wrapper framework for database access.

-   [ABAP-managed database objects should not be accessed](javascript:call_link\('abendatabase_access_recomm.htm'\)) using any methods other than those described here.

Continue
[ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\))
[ABAP SQL](javascript:call_link\('abenopensql.htm'\))
[ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\))
[Native SQL](javascript:call_link\('abennative_sql.htm'\))
[ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\))
[Object Services (OS)](javascript:call_link\('abenabap_object_services.htm'\))
[Data Consistency](javascript:call_link\('abentransaction.htm'\))
[Database Connections](javascript:call_link\('abenopensql_multiconnect.htm'\))
[System Class for Database Features](javascript:call_link\('abencl_abap_dbfeatures.htm'\))