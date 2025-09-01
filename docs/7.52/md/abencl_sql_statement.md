  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) → 

ADBC - CL\_SQL\_STATEMENT

The CL\_SQL\_STATEMENT class contains instance methods that receive and execute dynamically created SQL statements.

Instances of the CL\_SQL\_STATEMENT class can be created using the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)), which allow a reference to an object of the [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) class to be passed to the constructor. If no database connection is passed, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") from the database interface to the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is used.

-   [DDL and DML Statements](javascript:call_link\('abenadbc_ddl_dml.htm'\))

-   [Queries](javascript:call_link\('abenadbc_query.htm'\))

-   [Stored Procedures](javascript:call_link\('abenadbc_procedure.htm'\))

Notes

-   Exactly one SQL statement can be passed to each method of class CL\_SQL\_STATEMENT for execution. Passing multiple SQL statements separated by delimiters such as ; is not possible.

-   The CL\_SQL\_STATEMENT class allows the statement passed to be executed once. To execute a statement multiple times with different parameters, you can use the subclass [CL\_SQL\_PREPARED\_STATEMENT](javascript:call_link\('abencl_sql_prepared_statement.htm'\)).

-   An object of the class CL\_SQL\_STATEMENT is often only intended to be used once, which means it is also only addressed once. In this case, the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) with appended method call can be used to create the instance. This removes the need to declare a reference variable explicitly.

-   The methods in the class CL\_SQL\_STATEMENT should not be used to execute transaction-control statements (COMMIT, ROLLBACK). This is because they are not detected by the database interface, which then might not execute the actions required at the end of a transaction. Only the appropriate [methods](javascript:call_link\('abenadbc_transaction.htm'\)) in the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) can be used for transaction control.

Continue
[ADBC - DDL and DML Statements](javascript:call_link\('abenadbc_ddl_dml.htm'\))
[ADBC - Queries](javascript:call_link\('abenadbc_query.htm'\))
[ADBC - Stored Procedures](javascript:call_link\('abenadbc_procedure.htm'\))