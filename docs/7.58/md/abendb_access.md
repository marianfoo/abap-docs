  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Database%20Access%2C%20ABENDB_ACCESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Database Access

All the data relevant for all applications of an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry"), including metadata and technical data, is stored and managed centrally in its [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry"). AS ABAP supports database systems from different vendors. The [database objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_object_glosry.htm "Glossary Entry") for storing and accessing data, such as database tables, views, or stored procedures, are created as platform-dependent objects by the ABAP-specific frameworks [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"), [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry"), and [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") in the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").

-   In the ABAP Dictionary, [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) and [DDIC views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_views.htm), and in ABAP CDS non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) are defined as ABAP-specific objects. Instances of these objects are created in the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") when they are activated. Such database tables, views, and entities can also be used as globally visible structured types in ABAP programs.
-   The [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") framework makes it possible to create ABAP-based definitions of [AMDP procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") in the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). In ABAP, they can be called as follows:
    -   Using [method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_calls.htm)
    -   Using [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") for accessing a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry").
    -   With [CDS scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry").

All database objects defined and managed in AS ABAP are known as:

-   [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_managed_db_objects.htm).

To enable access to database objects, every database system uses the largely standardized language [SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_glosry.htm "Glossary Entry"), which can be implemented in different ways to suit specific platforms. The following options are available in ABAP for accessing ABAP-managed database objects: [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry"):

-   [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm)
    
    For mostly platform-independent access to database tables, DDIC views, and non-abstract CDS entities, the [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements embedded in ABAP are used, which themselves are transformed to platform-dependent SQL using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry") in AS ABAP. This method also covers ABAP-specific evaluations, such as implicit [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_handling_glosry.htm "Glossary Entry") or [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry").
    
-   [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm)
    
    Framework used to manage and call [database procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") and [database functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_function_glosry.htm "Glossary Entry") in ABAP.
    
-   [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql.htm)
    
    To use platform-dependent SQL in ABAP, [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") can be passed to the database as follows using the [Native-SQL interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_interface_glosry.htm "Glossary Entry"):
    
    -   Using the object-oriented framework [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry")
    -   Using embedded Native SQL statements after the ABAP statement [EXEC SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm).
-   [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_hana.htm)
    
    Additional specific methods are available when accessing [SAP HANA databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") from ABAP.
    
-   [Object Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_object_services.htm)
    
    The [Object Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_services_glosry.htm "Glossary Entry") framework makes object-oriented access to the database possible by placing a wrapper around the actual database reads.
    

The following topics also deal with important aspects of database access:

-   [Data consistency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm)
    
    [LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenluw_glosry.htm "Glossary Entry") concepts must be employed to ensure data consistency when handling persistent data in databases.
    
-   [Database connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_connections.htm)
    
    [Database connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry") can also be used to provide access to other databases or database schemas.
    
-   [System class for database features](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm)
    
    The class CL\_ABAP\_DBFEATURES can be used to determine features of database.
    

Programming Guideline

[Use ABAP SQL for general database accesses where possible.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_guidl.htm "Guideline")

Hints

-   If a [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") is used as the standard AS ABAP database, it is handled in ABAP programs like any relational database.
-   [ABAP-managed database objects should not be accessed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_recomm.htm) using any methods other than those described here.
-   [ABAP SQL Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_services_glosry.htm "Glossary Entry") provide SQL-level access to published, ABAP-managed [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") for consumers outside the system.
-   In addition to the statements described here for database reads, the following are also available:
    -   Access to [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster.htm) in database tables
    -   [Obsolete access statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access_obsolete.htm)
-   The framework for [logical databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb.htm) is an obsolete wrapper framework for database access.

Continue
[ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_managed_db_objects.htm)
[ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm)
[ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm)
[Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql.htm)
[ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_hana.htm)
[Object Services (OS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_object_services.htm)
[Data Consistency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm)
[Database Connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_connections.htm)