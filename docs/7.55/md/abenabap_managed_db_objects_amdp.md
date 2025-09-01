  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_objects.htm) →  [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_objects_access.htm) → 

AMDP Access to ABAP-Managed Database Objects

[ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry") is a class-based AS ABAP framework for managing and calling [database procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") and [database functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_function_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"). No other database platforms are currently supported. [AMDP methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry") are implemented in [SQLScript](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_glosry.htm "Glossary Entry"). The AMDP framework creates and manages the procedures and functions as ABAP-managed database objects. From ABAP, [AMDP procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") or [AMDP scalar functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") are called using method calls. [AMDP table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_table_function_glosry.htm "Glossary Entry"), on the other hand, are called by accessing the associated [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") using ABAP SQL. The AMDP framework itself uses the AS ABAP [Native SQL interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") internally to access the database.

AMDP can be used to access [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") as follows:

-   Reads and writes on the following ABAP-managed database objects in the SQLScript implementation of an AMDP method.

-   Instances of the [database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) and [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm) defined in ABAP Dictionary.

-   Instances of the [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") defined in ABAP CDS.

-   Calls of the following ABAP-managed database procedures or database functions:

-   [AMDP procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_glosry.htm "Glossary Entry") that do not implement any [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") can be called from other AMDP methods.

-   The AMDP table function of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") can be called from other AMDP methods.

-   The [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables.htm) can be read using the built-in HANA function SESSION\_CONTEXT.

The most important AMDP features are as follows:

-   The management of [AMDP procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_glosry.htm "Glossary Entry") is the full responsibility of the AMDP framework. This framework creates these database objects before they are used for the first time in ABAP or updates them as required.

-   AMDP methods are implemented as platform-dependent methods and their implementation is currently restricted to [SQLScript](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_glosry.htm "Glossary Entry") in the SAP HANA database.

-   Data types defined in the ABAP Dictionary and their possible enhancements are not currently known in the actual implementation of AMDP methods. Dictionary types are, however, respected as follows:

-   If possible, AMDP respects the order of fields defined in the ABAP Dictionary, which can differ from the order in the database. To do this, a view is generated internally. The prerequisite for this feature is that the AMDP framework detects that a database object defined in the ABAP Dictionary is being accessed.

-   The typing of the formal parameters of an AMDP method using dictionary types is one way of creating appropriate variables. Here, a predefined mapping takes place between ABAP types and database types.

-   Any [null values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry") passed from formal parameters to ABAP data objects are transformed to their type-dependent initial values. There is no special handling, however, within the implementation of an AMDP method.

-   The interface parameters of AMDP methods can be tabular. Internal ABAP tables can be bound to all categories of parameters. In the case of [input/output parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") declared using CHANGING, the parameters are transformed internally to a pair of input and output parameters declared using IN and OUT.

-   The [AMDP macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_abap_types.htm) can be used to specify ABAP Dictionary types and other ABAP types in the implementation of an [AMDP method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry"). The AMDP framework transforms this information into the respective HANA types.

-   AMDP does not support the following ABAP Dictionary and ABAP CDS functions:

-   AMDP [does not support implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm). The client ID must either be passed explicitly using an input parameter (recommended) or the ABAP-specific session variables CLIENT and CDS\_CLIENT can be accessed. When an AMDP method is called whose declaration specifies the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_amdp_options.htm), the value of the session variable CDS\_CLIENT can be set to the value of an input parameter here.

-   AMDP does not support [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry").

-   AMDP does not support [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry"). CDS access control only applies when using ABAP SQL to access a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") implemented in AMDP.

-   AMDP cannot handle the [enhancement category of DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm).

-   AMDP does not support the [logging of database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_protocol.htm).

-   AMDP accesses the database objects of [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") directly and ignores any other properties of CDS entities:

-   When a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is accessed, its database-specific instance must be known. This applies in particular to CDS DDIC-based views with input parameters.

-   When an instance of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") is accessed, its AMDP table function must be called.

-   AMDP cannot handle [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") and [CDS roles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry").

-   Care must be taken that all session variables used in a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) or a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm) have the correct value. This applies in particular to the session variable client, to which the HANA session variable CDS\_CLIENT is assigned and not CLIENT.

-   The ABAP-managed database objects accessed in an AMDP method must be declared with [USING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_by_db_proc.htm) in the implementation of the method. This guarantees that the AMDP methods are recorded in the where-used list.

-   DDL statements are not allowed in AMDP methods. Furthermore, no statements are allowed that are only possible in database tables and not in views, such as TRUNCATE TABLE or LOCK TABLE.

-   AMDP supports ABAP-managed [service connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") but does not support [secondary connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").

-   The [SQLScript](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_glosry.htm "Glossary Entry") used to implement AMDP methods can use the input parameters of the AMDP as operands but does not support dynamic tokens.

-   In the implementation of [AMDP methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry"), the [AMDP macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macro_glosry.htm "Glossary Entry") ["$ABAP.schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_logical_db_schemas.htm) can be used to specify [logical schemas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_schema_glosry.htm "Glossary Entry") that are transformed to the names of actual [database schemas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_schema_glosry.htm "Glossary Entry") by the AMDP framework. This enables, for example, simple access to [HDI objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhdi_object_glosry.htm "Glossary Entry") that use an [ABAP-managed HDI container](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamhc_glosry.htm "Glossary Entry") as an interface to the [Change and Transport System](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencts_glosry.htm "Glossary Entry").

-   AMDP respects the [dependency rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendependency_rule_glosry.htm "Glossary Entry") defined for a database.

-   AMDP respects [data aging](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_aging_glosry.htm "Glossary Entry") by default.

Hint

Implementations of AMDP methods can be debugged in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").