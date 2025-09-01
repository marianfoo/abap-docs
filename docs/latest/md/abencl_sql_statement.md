  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20CL_SQL_STATEMENT%2C%20ABENCL_SQL_STATEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - CL\_SQL\_STATEMENT

The class CL\_SQL\_STATEMENT contains instance methods that receive and execute dynamically created SQL statements.

Instances of the class CL\_SQL\_STATEMENT can be created using the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)), which allow a reference to an object of the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) to be passed to the constructor. If no database connection is passed, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") from the database interface to the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is used.

-   [ADBC - DDL and DML Statements](javascript:call_link\('abenadbc_ddl_dml.htm'\))
-   [ADBC - Queries](javascript:call_link\('abenadbc_query.htm'\))
-   [ADBC - Stored Procedures](javascript:call_link\('abenadbc_procedure.htm'\))
-   [ADBC - All Statements](javascript:call_link\('abenadbc_execute.htm'\))

Hints

-   Exactly one SQL statement can be passed to each method of the class CL\_SQL\_STATEMENT to be executed. Passing multiple SQL statements separated by delimiters such as ; is not possible.
-   The class CL\_SQL\_STATEMENT allows the statement passed to be executed once. The subclass [CL\_SQL\_PREPARED\_STATEMENT](javascript:call_link\('abencl_sql_prepared_statement.htm'\)) can be used to execute a statement multiple times with different parameters.
-   An object of the class CL\_SQL\_STATEMENT is often only intended to be used once, which means it is also only addressed once. In this case, the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) with appended method call can be used to create the instance. This removes the need to declare a reference variable explicitly.
-   The methods in the class CL\_SQL\_STATEMENT should not be used to execute transaction control statements (COMMIT, ROLLBACK) because they are not detected by the database interface, which then might not execute the actions required at the end of a transaction. Only the corresponding [methods](javascript:call_link\('abenadbc_transaction.htm'\)) in the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) can be used for transaction control.

Continue
[ADBC - DDL and DML Statements](javascript:call_link\('abenadbc_ddl_dml.htm'\))
[ADBC - Queries](javascript:call_link\('abenadbc_query.htm'\))
[ADBC - Stored Procedures](javascript:call_link\('abenadbc_procedure.htm'\))
[ADBC - All Statements](javascript:call_link\('abenadbc_execute.htm'\))