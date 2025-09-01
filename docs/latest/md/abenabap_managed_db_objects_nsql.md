  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) →  [Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Native%20SQL%20Access%20to%20ABAP-Managed%20Database%20Objects%2C%20ABENABAP_MANAGED_DB_OBJECTS_NSQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

Native SQL Access to ABAP-Managed Database Objects

There are two types of Native SQL access to [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry").

-   [Access Using ABAP-Managed Native SQL](#abenabap-managed-db-objects-nsql-1-------access-using-non-abap-managed-native-sql---@ITOC@@ABENABAP_MANAGED_DB_OBJECTS_NSQL_2)

Access Using ABAP-Managed Native SQL   

ABAP-managed Native SQL is [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") that can be used by ABAP programs to access the database through the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") in AS ABAP. It includes the following:

-   [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\))
-   [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\))

The Native SQL interface passes vendor-specific SQL statements to the database system without making any modifications. Alongside this, SAP-specific Native SQL is available, which is processed in platform-dependent parts of the interface (Client Libraries).

Native SQL can be used to access ABAP-managed database objects as follows:

-   Reads and writes on the following ABAP-managed database objects using database-specific SQL:
    -   Instances of the [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)) defined in the ABAP Dictionary.
    -   [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") of CDS views defined in ABAP CDS.
-   Calls of the following ABAP-managed database procedures or database functions:
    -   It is possible to call [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") that do not implement any [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") or [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry")..
    -   The AMDP table function of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can be called.
    -   The AMDP scalar function of a [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry") can be called.
-   The [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) can be accessed on the SAP HANA database using the built-in HANA function SESSION\_CONTEXT.

The most important features of Native SQL are as follows:

-   Native SQL is platform-dependent.
-   Data types defined in the ABAP Dictionary and their possible enhancements are not currently known in Native SQL.
    -   Native SQL does not respect the order of fields defined in the ABAP Dictionary, which can differ from the order in the database.
    -   The platform-dependent parts (Client Libraries) of the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") support [mappings](javascript:call_link\('abennative_sql_type_mapping.htm'\)) between ABAP types and appropriate database types for bound parameters in ADBC and [host variables](javascript:call_link\('abapexec_host.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\)). If types are not appropriate, on the other hand, platform-dependent conversions are made, which can easily produce unexpected results and errors.
    -   Any [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") passed to ABAP data objects using the Native SQL interface are transformed to their type-dependent initial values. In the case of writes, null values cannot be prevented.
-   When procedures are called, Native SQL provides the following special methods alongside the platform-dependent SQL statements:
    -   The method [EXECUTE\_PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)) of the class CL\_SQL\_STATEMENT
    -   The statement [EXECUTE PROCEDURE](javascript:call_link\('abapexec_procedure.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\))
-   Bindings of internal ABAP tables to Native SQL are only possible using the methods SET\_PARAM\_TABLE of the classes [CL\_SQL\_STATEMENT](javascript:call_link\('abenadbc_ddl_dml.htm'\)) and [CL\_SQL\_RESULT\_SET](javascript:call_link\('abenadbc_query.htm'\)) in ADBC. Internal tables cannot be used as [host variables](javascript:call_link\('abapexec_host.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and cannot be used as parameters of the method [EXECUTE\_PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)) in ADBC.
-   When [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") are called, it cannot be guaranteed that the database objects exist or that their content is up-to-date. This is only the case in calls from ABAP and when accessing objects using ABAP SQL. Before an object is accessed using Native SQL, methods of the documented class CL\_AMDP\_RUNTIME\_SERVICES can be used to create the database objects. This applies both to direct calls and indirect cases, such as when [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") of CDS views are accessed in whose DDL source code [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") are used as a data source.
-   Native SQL does not support the following ABAP Dictionary and ABAP CDS functions:
    -   Native SQL does not support [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)). The client ID must always be specified explicitly. To do this, a parameter must be bound in ADBC or a host variable must be used after EXEC SQL. The ABAP-specific session variables CLIENT and CDS\_CLIENT can be accessed on the SAP HANA database. It should be noted here that, when using Native SQL, the value of the session variable CDS\_CLIENT cannot be set to a different value using ABAP methods.
    -   Native SQL does not support [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").
    -   Native SQL does not support [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").
    -   Native SQL cannot handle the [enhancement category of DDIC structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)).
    -   Native SQL does not support the [logging of database tables](javascript:call_link\('abenddic_database_tables_protocol.htm'\)).
-   Native SQL accesses the database objects of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") directly and ignores any other properties of CDS entities:
    -   When the [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a CDS view is accessed, the database-specific instance created of this view must be known. This applies in particular to CDS views with input parameters.
        
        Note: Accessing a CDS-managed DDIC view (obsolete) is [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)).
        
    -   When an instance of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") is accessed, its AMDP table function must be called.
    -   When an instance of a [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry") is accessed, its AMDP scalar function must be called.
    -   Native SQL cannot handle [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").
    -   It must be ensured that all session variables used in a [CDS view entity](javascript:call_link\('abencds_session_variable_v1.htm'\)) or [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_session_variable_v1.htm'\)) have the correct value. This applies in particular to the session variable client, to which the HANA session variable CDS\_CLIENT is assigned and not CLIENT.
-   The ABAP-managed database objects accessed in Native SQL are not recorded in a where-used list. Where-used lists can only be created indirectly, by declaring suitable parameters and host variables in references to the dictionary types of the database objects. Another option is a full text search in the ABAP source code in AS ABAP.
-   DDL statements are allowed in Native SQL.
-   Native SQL supports ABAP-managed [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") and [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry").
-   Native SQL respects the [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined for a database.
-   Native SQL respects [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") by default.
-   When ADBC is used, Native SQL is either fully dynamic or, if EXEC SQL is used, fully static.

Access Using Non-ABAP-Managed Native SQL   

Non-ABAP-managed Native SQL consists of SQL statements that are passed to the database using interfaces other than the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") of AS ABAP or that are executed in the database without being checked in AS ABAP. Examples are [database objects](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") created by [SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry") that access [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry"), views that access database tables in ABAP Dictionary, or database procedures that call AMDP procedures or functions.

In general, the same applies to access using non-ABAP-managed Native SQL as to accessing ABAP-managed Native SQL. There are, however, the following additional restrictions:

-   The exact instance and name of an [ABAP-managed database object](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") is undefined and can change between releases. Only the AS ABAP [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") can react to such changes and make them transparent to the consumer.
-   The implementation and function of a database object managed by ABAP can depend on ABAP-specific context information that is provided only in cases where the database is a standard AS ABAP database and addressed using its database interface. More specifically, the content of the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables_abexa.htm'\)) in the SAP HANA database can be set correctly only when an object is accessed from ABAP. On other database platforms, in fact, only CDS session variables are set when CDS entities are accessed using ABAP SQL.
-   Only in cases where access is made from AS ABAP can it be guaranteed that an ABAP-managed database object actually exists and its content is up-to-date. The time when the instance is created or updated is not fixed and the existence or consistency of the instance is not guaranteed for access from outside AS ABAP. This applies in particular to [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") whose existence and consistency is only guaranteed by the AMDP framework of AS ABAP.
-   A where-used list for ABAP-managed database objects cannot be found using non-ABAP-managed Native SQL.
-   Non-ABAP-managed Native SQL does not support any ABAP-managed [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") and [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry").
-   Non-ABAP-managed Native SQL does not respect [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"). If there is no suitable [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"), all partitions in the main memory of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") must be read.

Hint

A [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined for a database table is also respected by non-ABAP-managed Native SQL, since this rule is evaluated by the optimizer of the SAP HANA database.