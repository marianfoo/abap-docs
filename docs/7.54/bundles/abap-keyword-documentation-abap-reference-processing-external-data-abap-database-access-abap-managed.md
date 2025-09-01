# ABAP Keyword Documentation / ABAP − Reference / Processing External Data / ABAP Database Access / ABAP-Managed Database Objects / Access to ABAP-Managed Database Objects

Included pages: 4


### abenabap_managed_db_objects_access.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) → 

Access to ABAP-Managed Database Objects

[ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") can be accessed as follows:

-   [ABAP SQL Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_osql.htm'\))

-   [AMDP access to ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\))

-   [Native SQL access to ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

These access methods each have their own attributes and restrictions, which are described in the corresponding section. The following table summarizes the most important aspects supported by each access method:

\-

[Dependency Rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") Respected

[Data Aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") Respected

Mapping Between ABAP Types and Database Types,
Existence of the Database Objects,
ABAP-Specific Environment Information,
Where-Used List

ABAP-Managed Database Connections

Field Order,
DDL Forbidden

Client Handling,
Table Buffering,
Table Logging, ...,
CDS Entities

[ABAP SQL](javascript:call_link\('abenabap_managed_db_objects_osql.htm'\))

Yes

Yes

Yes

Yes

Yes

Yes

[AMDP](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\))

Yes

Yes

Yes

Restricted

Yes

No

[ABAP-Managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

Yes

Yes

Restricted

Yes

No

No

[Non-ABAP-Managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

Yes

No

No

No

No

No

Note

These access methods can be used separately from each other, but there are some mutual dependencies. One example are AS ABAP [database connections](javascript:call_link\('abenopensql_multiconnect.htm'\)) and their transaction contexts, which are shared by ABAP SQL, Native SQL, and AMDP.

Continue
[ABAP SQL Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_osql.htm'\))
[AMDP Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\))
[Native SQL Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))


### abenabap_managed_db_objects_osql.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) →  [Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) → 

ABAP SQL Access to ABAP-Managed Database Objects

[ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") includes a set of [ABAP SQL statements](javascript:call_link\('abenopensql.htm'\)) for use in ABAP programs. The database is accessed using the [ABAP SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry") of the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry"), which transforms the ABAP SQL statements into platform-specific SQL.

ABAP SQL can be used to access [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") as follows:

-   Reads and writes on [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [classic database views](javascript:call_link\('abenddic_database_views.htm'\)) defined in ABAP Dictionary. Writes on database views are only possible with restrictions.

-   Reads on the database objects of CDS views, CDS table functions, and CDS hierarchies. When a CDS table function is accessed, the associated [AMDP table function](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry") is called internally and its result is provided as the results set of the ABAP SQL statement.

The most important ABAP SQL features are as follows:

-   ABAP SQL is to a great extent platform-independent

-   ABAP SQL is based on the data types defined in ABAP Dictionary and any enhancements made to them:

-   ABAP SQL respects the order of fields defined in ABAP Dictionary, since this can differ from the order in the database.

-   ABAP SQL checks the compatibility of [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the associated dictionary types or database types.

-   ABAP SQL enables conversions to be made between ABAP types and platform-specific data types in accordance with uniform ABAP-specific rules.

-   ABAP SQL has its own [handler](javascript:call_link\('abenopen_sql_null_values.htm'\)) for [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

-   ABAP SQL supports the following ABAP Dictionary and ABAP CDS functions:

-   [Implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\))

-   [Table buffering](javascript:call_link\('abensap_puffering.htm'\))

-   Evaluating [CDS access control](javascript:call_link\('abencds_authorizations.htm'\))

-   [Enhancement categories](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) are respected

-   [Logging of database tables](javascript:call_link\('abenddic_database_tables_protocol.htm'\))

-   ABAP SQL uses the name of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") to access the entity and respects all relevant attributes. Access to [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") is [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)) and forbidden in [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)).

-   [Implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied in accordance with how client dependency is defined using the relevant annotations in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry").

-   The [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") mapped to the CDS entity are evaluated.

-   The key fields defined in the CDS entity are respected.

-   [Actual parameters](javascript:call_link\('abenopen_sql_parameters.htm'\)) can be associated with the input parameters of a CDS entity in uniform syntax.

-   [SQL path expressions](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry") can be specified for [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

-   When ABAP SQL is used to access a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), the additional [hierarchy columns](javascript:call_link\('abenhierarchy_column_glosry.htm'\) "Glossary Entry") can also be read.

-   All [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)) are set correctly on all platforms when ABAP SQL is used to access a CDS view. More specifically, the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) modifies the session variable client.

-   When ABAP SQL is used to access a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), the access is transformed to the associated [AMDP table function](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry").

-   Database objects specified statically in ABAP SQL are recorded in the where-used list in ABAP tools. Each time an ABAP-managed database object is modified it is advisable to record it in the where-used list. In this way, any consequences of modifying the object can be checked.

-   ABAP SQL enables dynamic tokens to be specified that are evaluated at runtime of an ABAP program.

-   DDL statements are not included in the scope of ABAP SQL. The respective ABAP-managed database objects cannot be modified in ABAP SQL and no other database objects can be created or modified.

-   ABAP SQL does not support [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry").

-   ABAP SQL respects the [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined for a database.

-   ABAP SQL respects [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") by default.

Note

Some of the semantic attributes defined in ABAP Dictionary or ABAP CDS, such as foreign key relationships or reference fields, are ignored in ABAP SQL and are respected only by classic [Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), [Web Dynpros](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry"), and some other frameworks. This applies in particular to the evaluation of [framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") in ABAP CDS as well.


### abenabap_managed_db_objects_amdp.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) →  [Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) → 

AMDP Access to ABAP-Managed Database Objects

[ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenabap_managed_db_proc_glosry.htm'\) "Glossary Entry") is a class-based AS ABAP framework for managing and calling [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") and [database functions](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry") in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). No other database platforms are currently supported. [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are implemented in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry"). The AMDP framework creates the procedures and functions as ABAP-managed database objects and is also the management framework for these objects. From ABAP, [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") or [AMDP scalar functions](javascript:call_link\('abenamdp_scalar_function_glosry.htm'\) "Glossary Entry") are called using method calls. [AMDP table functions](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry"), on the other hand, are called by accessing the associated [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") using ABAP SQL. The AMDP framework itself uses the AS ABAP [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") internally to access the database.

AMDP can be used to access [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") as follows:

-   Reads and writes on the following ABAP-managed database objects in the SQLScript implementation of an AMDP method.

-   Instances of the [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and classic [database views](javascript:call_link\('abenddic_database_views.htm'\)) defined in ABAP Dictionary.

-   Instances of the [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of CDS views defined in ABAP CDS.

-   Calls of the following ABAP-managed database procedures or database functions:

-   It is possible to call [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry"), as well as [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") that do not implement any [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), from other AMDP methods.

-   The AMDP table function of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can be called from other AMDP methods.

-   The [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) can be read using the built-in HANA function SESSION\_CONTEXT.

The most important AMDP features are as follows:

-   The management of [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") is the full responsibility of the AMDP framework. This framework creates these database objects before they are used for the first time in ABAP or updates them as required.

-   AMDP methods are implemented as platform-dependent methods and their implementation is currently restricted to [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") in the SAP HANA database.

-   Data types defined in ABAP Dictionary (and any enhancements of these types) are not currently known in the actual implementation of AMDP methods. Dictionary types are, however, respected as follows:

-   If possible, AMDP respects the order of fields defined in ABAP Dictionary, since this can differ from the order in the database. To do this, a view is generated internally. The prerequisite for this feature is that the AMDP framework detects that a database object defined in ABAP Dictionary is being accessed.

-   The typing of the formal parameters of an AMDP method using dictionary types is one way of creating matching variables. Here, a predefined mapping takes place between ABAP types and database types.

-   Any [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") passed from formal parameters to ABAP data objects are transformed to their type-dependent initial values. There is no special handling, however, within the implementation of an AMDP method.

-   The interface parameters of AMDP methods can be tabular parameters. Internal ABAP tables can be bound to all categories of parameters. In the case of [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry") declared using CHANGING, the parameters are transformed to a pair of input and output parameters declared using IN and OUT.

-   The [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.type](javascript:call_link\('abenamdp_abap_types.htm'\)) can be used to specify ABAP Dictionary types and other ABAP types in the implementation of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"). The AMDP framework transforms this information into the respective HANA types.

-   AMDP does not support the following ABAP Dictionary and ABAP CDS functions:

-   AMDP [does not support implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)). The client ID must either be passed explicitly using an input parameter (recommended) or the ABAP-specific session variables CLIENT and CDS\_CLIENT can be accessed. When an AMDP method is called whose declaration specifies the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)), the value of the session variable CDS\_CLIENT can be set to the value of an input parameter here.

-   AMDP does not support [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").

-   AMDP does not support [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"). CDS access control can only be applied when using ABAP SQL to access a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") implemented in AMDP.

-   AMDP cannot handle the [enhancement category of structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)).

-   AMDP does not support the [logging of database tables](javascript:call_link\('abenddic_database_tables_protocol.htm'\)).

-   AMDP accesses the database objects of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") directly and ignores any other properties of CDS entities:

-   When the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a CDS view is accessed, the database-specific instance created of this view must be known. This applies in particular to CDS views with input parameters.

-   When an instance of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") is accessed, its AMDP table function must be called.

-   AMDP cannot handle [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

-   Care must be taken that all [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)) used in a CDS view have the correct value. This applies in particular to the session variable client, which is mapped to the HANA session variable CDS\_CLIENT and not to CLIENT.

-   The ABAP-managed database objects accessed in an AMDP method must be declared with [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)) in the implementation of the method. This guarantees that the AMDP methods are recorded in the where-used list.

-   DDL statements are not allowed in AMDP methods. Furthermore, no statements are allowed that are only possible in database tables and not in views, such as TRUNCATE TABLE or LOCK TABLE.

-   AMDP supports ABAP-managed [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") but does not support [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").

-   The [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") used to implement AMDP methods can use the input parameters of the AMDP as operands but does not support dynamic tokens.

-   In the implementation of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"), the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") ["$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) can be used to specify [logical schemas](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") that are transformed to the names of actual [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") by the AMDP framework. This enables, for example, simple access to [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") that use an [ABAP-managed HDI container](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry") as an interface to the [Change and Transport System](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry").

-   AMDP respects the [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined for a database.

-   AMDP respects [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") by default.

Note

Implementations of AMDP methods can be debugged in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").


### abenabap_managed_db_objects_nsql.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) →  [Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) → 

Native SQL Access to ABAP-Managed Database Objects

Two methods of Native SQL access to [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") can be distinguished.

-   [Access Using ABAP-Managed Native SQL](#@@ITOC@@ABENABAP_MANAGED_DB_OBJECTS_NSQL_1)

-   [Access Using Non-ABAP-Managed Native SQL](#@@ITOC@@ABENABAP_MANAGED_DB_OBJECTS_NSQL_2)

Access Using ABAP-Managed Native SQL

ABAP-managed Native SQL is the variant of [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") used by ABAP programs to access the database through the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") in AS ABAP. It encompasses the following:

-   [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\))

-   [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\))

The Native SQL interface passes vendor-specific SQL statements to the database system without making any modifications. Alongside this, SAP-specific Native SQL is available, which is processed in platform-dependent parts of the interface (Client Libraries).

Native SQL can be used to access ABAP-managed database objects as follows:

-   Reads and writes on the following ABAP-managed database objects using database-specific SQL:

-   Instances of the [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and classic [database views](javascript:call_link\('abenddic_database_views.htm'\)) defined in ABAP Dictionary.

-   Instances of the [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of CDS views defined in ABAP CDS.

-   Calls of the following ABAP-managed database procedures or database functions:

-   It is possible to call [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") that do not implement any [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   The AMDP table function of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can be called.

-   The [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) can be accessed on the SAP HANA database using the built-in HANA function SESSION\_CONTEXT.

The most important features of Native SQL are as follows:

-   Native SQL is platform-dependent.

-   Data types defined in ABAP Dictionary (and any enhancements of these types) are not currently known in Native SQL.

-   Native SQL does not respect the order of fields defined in ABAP Dictionary, which can differ from the order in the database.

-   The platform-dependent parts (Client Libraries) of the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") support [mappings](javascript:call_link\('abennative_sql_type_mapping.htm'\)) between ABAP types and appropriate database types for bound parameters in ADBC and [host variables](javascript:call_link\('abapexec_host.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\)). If types are not appropriate, on the other hand, platform-dependent conversions are made, which can easily produce unexpected results and errors.

-   Any [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") passed to ABAP data objects using the Native SQL interface are transformed to their type-dependent initial values. In the case of writes, null values can be created.

-   When procedures are called, Native SQL provides the following special methods alongside the platform-specific SQL statements:

-   The method [EXECUTE\_PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)) of the class CL\_SQL\_STATEMENT

-   The statement [EXECUTE PROCEDURE](javascript:call_link\('abapexec_procedure.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\))

-   Bindings of internal ABAP tables to Native SQL are only possible using the methods SET\_PARAM\_TABLE of the classes [CL\_SQL\_STATEMENT](javascript:call_link\('abenadbc_ddl_dml.htm'\)) and [CL\_SQL\_RESULT\_SET](javascript:call_link\('abenadbc_query.htm'\)) in ADBC. Internal tables cannot be used as [host variables](javascript:call_link\('abapexec_host.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and cannot be used as parameters of the method [EXECUTE\_PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)) in ADBC.

-   When [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") are called, it cannot be guaranteed that that the database objects exist or that their content is up-to-date. This is only the case in calls from ABAP and when accessing objects using ABAP SQL. Before an object is accessed using Native SQL, methods of the documented class CL\_AMDP\_RUNTIME\_SERVICES can be used to created the database objects. This applies both to direct calls and to indirect cases, such as when [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") are accessed in whose DDL source code [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") are used as a data source.

-   Native SQL does not support the following ABAP Dictionary and ABAP CDS functions:

-   Native SQL does not support [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)). The client ID must always be specified explicitly. To enable this, a parameter must be bound in ADBC or a host variable used after EXEC SQL. The ABAP-specific session variables CLIENT and CDS\_CLIENT can be accessed on the SAP HANA database. It must be noted here that, when using Native SQL, the value of the session variable CDS\_CLIENT cannot be set to a different value using ABAP methods.

-   Native SQL does not support [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").

-   Native SQL does not support [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

-   Native SQL cannot handle the [enhancement category of structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)).

-   Native SQL does not support the [logging of database tables](javascript:call_link\('abenddic_database_tables_protocol.htm'\)).

-   Native SQL accesses the database objects of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") directly and ignores any other properties of CDS entities:

-   When the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a CDS view is accessed, the database-specific instance created of this view must be known. This applies in particular to CDS views with input parameters.

-   When an instance of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") is accessed, its AMDP table function must be called.

-   Native SQL cannot handle [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").

-   Care must be taken that all [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)) used in a CDS view have the correct value. This applies in particular to the session variable client, which is mapped to the HANA session variable CDS\_CLIENT and not to CLIENT.

-   The ABAP-managed database objects accessed in Native SQL are not recorded in a where-used list. Where-used lists can only be created indirectly, by declaring suitable parameters and host variables in references to the dictionary types of the database objects. Another option is a full text search in the ABAP source code in AS ABAP.

-   DDL statements are allowed in Native SQL.

-   Native SQL supports ABAP-managed [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") and [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry").

-   Native SQL respects the [dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined for a database.

-   Native SQL respects [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") by default.

-   When ADBC is used, Native SQL is either fully dynamic or, if EXEC SQL is used, fully static.

Access Using Non-ABAP-Managed Native SQL

Non-ABAP-managed Native SQL consists of SQL statements that are passed to the database using interfaces other than the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") of AS ABAP or that are executed in the database without being checked in AS ABAP. Examples are [database objects](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") created by [SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry") that access [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry"), views that access database tables in ABAP Dictionary, or database procedures that call AMDP procedures or functions.

In general, the same applies to access using non-ABAP-managed Native SQL as to accessing ABAP-managed Native SQL. There are, however, the following additional restrictions:

-   The precise instance of an [ABAP-managed database object](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") that is created and its name are undefined and can change between releases. Only the AS ABAP [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") can react to changes of this type and make them transparent to the consumer.

-   The implementation of a database object managed by ABAP and the way it functions can be dependent on ABAP-specific context information that is provided only in cases where the database is a standard AS ABAP database and addressed using its database interface. More specifically, the content of the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables_abexa.htm'\)) in the SAP HANA database can be set correctly only when an object is accessed from ABAP. On other database platforms, in fact, only [CDS session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)) are set when CDS entities are accessed using ABAP SQL.

-   Only in cases where access is made from AS ABAP can it be guaranteed that an ABAP-managed database object actually exists and its content is up-to-date. The time when the instance is created or updated is not fixed and the existence or consistency of the instance is not guaranteed for access from sources other than AS ABAP. This applies in particular to [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") whose existence and consistency is only guaranteed by the AMDP framework of AS ABAP.

-   A where-used list for ABAP-managed database objects does not have any way of detecting when an object is used by non-ABAP-managed Native SQL.

-   Non-ABAP-managed Native SQL does not support any ABAP-managed [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") and [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry").

-   Non-ABAP-managed Native SQL does not respect [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"). If there is no suitable [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"), all partitions in the main memory of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") must be read.

Note

A [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") defined for a database table is also respected by non-ABAP-managed Native SQL, since this rule is evaluated by the optimizer of the SAP HANA database.
