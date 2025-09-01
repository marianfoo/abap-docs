  

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