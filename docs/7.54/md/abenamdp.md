  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) → 

AMDP - ABAP Managed Database Procedures

ABAP Managed Database Procedures are a framework for managing and calling

-   [stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry") or [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") and

-   [database functions](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry")

in [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). Accordingly, the ABAP Managed Database Procedures manage

-   [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and

-   [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry")

A procedure or function of this type is implemented in a database-specific language ( [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") , [L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry"), ... ) in an

-   [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") or

-   [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry")

and at the same time as an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") in an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry").

The following sections describe the components of AMDP:

-   [AMDP - Classes](javascript:call_link\('abenamdp_classes.htm'\))

-   [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\))

-   [AMDP - Inheritance](javascript:call_link\('abenamdp_inheritance.htm'\))

-   [AMDP - Use](javascript:call_link\('abenamdp_calls.htm'\))

-   [AMDP - Client Handling](javascript:call_link\('abenamdp_client_handling.htm'\))

-   [AMDP - BAdIs](javascript:call_link\('abenamdp_badis.htm'\))

-   [AMDP - Database Connections](javascript:call_link\('abenamdp_db_connections.htm'\))

-   [AMDP Macros](javascript:call_link\('abenamdp_macros.htm'\))

-   [AMDP - Exceptions](javascript:call_link\('abenamdp_exceptions.htm'\))

-   [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\))

Currently, AMDP only supports database procedures and functions from the SAP HANA database. In principle, however, AMDP is designed so that stored procedures and functions from other database systems can also be supported. The constant CALL\_AMDP\_METHOD of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) can be used to query whether the current database supports AMDP procedures.

Notes

-   The [ABAP Development Tools (ADT)](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are better suited for the editing of database procedures and functions in [AMDP methods](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") than [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). This means that AMDP classes can only be edited with the ABAP Development Tools (ADT). AMDP classes can also be displayed in Class Builder.

-   ABAP developers or consumers do not need separate users for the database system to manage and call database procedures and database functions using AMDP. Instead, the AS ABAP logged on to the database system using its work processes requires the correct authorizations to manage database procedures and functions using AMDP. Missing authorizations can be detected using transaction SICK.

-   If the current database of an AS ABAP is an SAP HANA database and ABAP programs access [SQL Script procedures](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") used to swap out code from ABAP programs to the database, ABAP Managed Database Procedures are the replacement technology for [database procedure proxies](javascript:call_link\('abensql_script.htm'\)). Database procedure proxies are still recommended when using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") to access SQLScript procedures that exist in a different SAP HANA database.

-   To manage and call database procedures and database functions with [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), the AMDP framework uses the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") to access the database.

-   [Table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") is bypassed when using AMDP.

Programming Guideline

The programming guideline [Use ABAP SQL](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline") is particularly relevant for AMDP too. The use of AMDP is not recommended if the same task can be achieved using ABAP SQL (or [ABAP CDS](javascript:call_link\('abencds.htm'\))). The executable example [AMDP, Comparison with ABAP SQL](javascript:call_link\('abenamdp_vs_open_sql_abexa.htm'\)) demonstrates how a database access not programmed well in ABAP SQL can often be optimized using an improved use of ABAP SQL, removing the need to use AMDP in these cases. AMDP should be used only if it enables database-specific functions to be accessed that do not exist in ABAP SQL (see the executable example for [Currency Conversion](javascript:call_link\('abensql_script_curr_conv_abexa.htm'\))) or if large process flows or analyses that incur repeated transports of large amounts of data between the database and the AS Instance can be swapped out.

Continue
[AMDP - Classes](javascript:call_link\('abenamdp_classes.htm'\))
[AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\))
[AMDP - Inheritance](javascript:call_link\('abenamdp_inheritance.htm'\))
[AMDP - Use](javascript:call_link\('abenamdp_calls.htm'\))
[AMDP - Client Handling](javascript:call_link\('abenamdp_client_handling.htm'\))
[AMDP - BAdIs](javascript:call_link\('abenamdp_badis.htm'\))
[AMDP - Database Connections](javascript:call_link\('abenamdp_db_connections.htm'\))
[AMDP Macros](javascript:call_link\('abenamdp_macros.htm'\))
[AMDP - Exception Classes](javascript:call_link\('abenamdp_exceptions.htm'\))
[AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\))