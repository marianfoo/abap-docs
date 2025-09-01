  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Database%20Connections%2C%20ABENAMDP_DB_CONNECTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Database Connections

An [AMDP method](javascript:call_link\('abenamdp_methods.htm'\)) is always implemented on the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). By default, the call is made using the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry"). An optional [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be specified for an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_methods.htm'\)).

To specify the database connection explicitly, an input parameter with the predefined name connection can be declared for an AMDP procedure implementation. This parameter must be of type DBCON\_NAME. When the AMDP method is called, the following values can be passed to the parameter to specify the database connection:

-   When the initial value or the value DEFAULT is passed, the standard connection is used.
-   When a name R/3\*name is passed, which consists of the prefix R/3\* (uppercase characters) and a user-defined name "name" (case sensitive), a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") of this name to the standard database is used. The names R/3\*AMDP\_SYNC and R/3\*AMDP\_ADBC are exceptions. They are used by the AMDP framework itself.

All other names raise an exception.

Hints

-   The parameter connection cannot be used to implement the AMDP method.
-   The input parameter connection cannot be declared for an [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)). This applies in particular to the parameter list of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").
-   The parameter connection cannot be used to specify connections to databases other than the standard database.
-   [Service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") to the standard database are useful for performing operations in a [database LUW](javascript:call_link\('abendb_transaction.htm'\)) that is independent of the LUW of the standard connection.
-   For detailed information about database connections, see [database connections](javascript:call_link\('abendb_connections.htm'\)).
-   The statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") methods can be used to call database procedures on databases other than the standard database. This involves creating an object of the class [CL\_SQL\_STATEMENT](javascript:call_link\('abencl_sql_statement.htm'\)) while passing an object of the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) and using the method [EXECUTE\_PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)).

Executable Example

[AMDP Method with Specified Service Connection](javascript:call_link\('abenamdp_connection_abexa.htm'\))