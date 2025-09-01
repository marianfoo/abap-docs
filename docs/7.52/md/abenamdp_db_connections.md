  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - Database Connections

An [AMDP method](javascript:call_link\('abenamdp_methods.htm'\)) is always implemented on the standard [database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). By default, the call is made using the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry"). An optional [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be specified for an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_methods.htm'\)).

To specify the database connection explicitly, an input parameter (with the predefined name connection) can be declared for an AMDP procedure implementation. This parameter must be of type DBCON\_NAME. When the AMDP method is called, the following values can be passed to the parameter to specify the database connection:

-   When the initial value or the value "DEFAULT" is passed, the standard connection is used.

-   When a name "R/3\*name" is passed, which consists of the prefix "R/3\*" (uppercase characters) and a user-defined name "name" (case sensitive), a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") of this name to the standard database is used. The names "R/3\*AMDP\_SYNC" and "R/3\*AMDP\_ADBC" are exceptions. They are used by the AMDP framework itself.

All other names raise an exception.

Notes

-   Detailed information about database connections can be found [here](javascript:call_link\('abenopensql_multiconnect.htm'\)).

-   The parameter connection cannot be used to implement the AMDP method.

-   The input parameter connection cannot be declared for an [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)). This applies in particular to the parameter list of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   The parameter connection cannot be used to specify connections to databases other than the standard database.

-   [Service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") to the standard database are useful for performing operations in a [database LUW](javascript:call_link\('abendb_transaction.htm'\)), which does not depend on the LUW of the standard connection.

-   The statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") methods can be used to call database procedures on databases other than the standard database. This involves creating an object of the class [CL\_SQL\_STATEMENT](javascript:call_link\('abencl_sql_statement.htm'\)) while passing an object of the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) and using the method [EXECUTE\_PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)).

Executable Example

[AMDP Method with Specified Service Connection](javascript:call_link\('abenamdp_connection_abexa.htm'\))