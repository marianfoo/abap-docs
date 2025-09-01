  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Managed%20Database%20Procedures%20%28AMDP%29%2C%20ABENAMDP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Managed Database Procedures (AMDP)

ABAP Managed Database Procedures are a framework for managing and calling

-   [stored procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstored_procedure_glosry.htm "Glossary Entry") or [database procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") and
-   [database functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_function_glosry.htm "Glossary Entry")

in [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry"). Accordingly, the ABAP Managed Database Procedures manage

-   [AMDP procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and
-   [AMDP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry")

A procedure or function of this type is implemented in a database-specific language ( [SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_glosry.htm "Glossary Entry"), [L](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenllang_glosry.htm "Glossary Entry"), ... ) in an

-   [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") or
-   [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry")

as an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") in an [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry").

The following sections describe the components of AMDP:

-   [AMDP - Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_classes.htm)
-   [AMDP - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm)
-   [AMDP - Inheritance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_inheritance.htm)
-   [AMDP - Use](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_calls.htm)
-   [AMDP - Client Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_client_handling.htm)
-   [AMDP - BAdIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_badis.htm)
-   [AMDP - Database Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_db_connections.htm)
-   [AMDP Macros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_macros.htm)
-   [AMDP - Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_exceptions.htm)
-   [AMDP - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexas.htm)

Currently, AMDP only supports database procedures and functions from the SAP HANA database. In principle, however, AMDP is designed so that stored procedures and functions from other database systems can also be supported.

The constant CALL\_AMDP\_METHOD of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_dbfeatures.htm) can be used to query whether the current database supports AMDP procedures.

There is a special release contract available to classify repository objects as stable public interface for use in AMDP: the [C4 Contract for use in ABAP-Managed Database Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc4_contract_glosry.htm "Glossary Entry").

Hints

-   ABAP developers or consumers do not need separate users for the database system to manage and call database procedures and database functions using AMDP. Instead, the AS ABAP logged on to the database system using its work processes requires the correct authorizations to manage database procedures and functions using AMDP. Missing authorizations can be detected using transaction SICK.
-   [Table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed when using AMDP.
-   To process database procedures and functions in [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") are better suited than the [Class Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_builder_glosry.htm "Glossary Entry") in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). AMDP classes can only be edited with the ABAP development tools for Eclipse. AMDP classes can also be displayed in the Class Builder.
-   If the current database of an AS ABAP is an SAP HANA database and ABAP programs access [SQLScript procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") that outsource code from ABAP programs to the database, ABAP Managed Database Procedures are the replacement technology for [database procedure proxies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script.htm). Database procedure proxies are still recommended when using a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to access SQLScript procedures that exist in a different SAP HANA database.
-   To manage and call database procedures and database functions with [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry"), the AMDP framework uses the [Native SQL interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") to access the database.

Programming Guideline

The programming guideline [Use ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_guidl.htm "Guideline") is particularly relevant for AMDP too. The use of AMDP is not recommended if the same task can be achieved using ABAP SQL (or [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm)). The executable example [AMDP, Comparison with ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_vs_abap_sql_abexa.htm) demonstrates how a database access not programmed well in ABAP SQL can often be optimized using an improved use of ABAP SQL, making it unnecessary to use AMDP in these cases. AMDP should be used only if it enables access to database-specific functions that do not exist in ABAP SQL (see the executable example for [Currency Conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_curr_conv_abexa.htm)) or if large process flows or analyses that incur repeated transports of large amounts of data between the database and the AS instance can be outsourced.

Continue
[AMDP - Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_classes.htm)
[AMDP - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm)
[AMDP - Inheritance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_inheritance.htm)
[AMDP - Use](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_calls.htm)
[AMDP - Client Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_client_handling.htm)
[AMDP - BAdIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_badis.htm)
[AMDP - Database Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_db_connections.htm)
[AMDP - Macros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_macros.htm)
[AMDP - Exception Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_exceptions.htm)
[AMDP - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexas.htm)