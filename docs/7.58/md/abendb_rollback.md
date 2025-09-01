  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [Database LUW](javascript:call_link\('abendb_transaction.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Rollback%2C%20ABENDB_ROLLBACK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Rollback

Database rollbacks are triggered implicitly or explicitly in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry").

-   [Implicit Database Rollbacks](#abendb-rollback-1-------explicit-database-rollbacks---@ITOC@@ABENDB_ROLLBACK_2)
-   [Database Rollback on Database Connections](#@@ITOC@@ABENDB_ROLLBACK_3)

Hint

A database rollback closes all opened [database cursors](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry"). It is particularly important that database rollbacks are not triggered in [SELECT](javascript:call_link\('abapselect.htm'\)) loops and after the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) using one of the options listed here.

Implicit Database Rollbacks   

The following exceptions trigger an implicit database rollback:

-   A [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry").
-   A [termination message](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry") is sent.
-   A program is terminated by sending a respective [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry").

The implicit database rollback takes place on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").

Hints

-   A termination message also produces a database rollback if the message is handled by the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) during the call of a function module.
-   Termination and [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry") always terminate the program. Other message types can also terminate a program in certain [contexts](javascript:call_link\('abenobj_context_glosry.htm'\) "Glossary Entry").
-   When an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is exited, there is no implicit [database commit](javascript:call_link\('abendb_commit.htm'\)) on the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") and there is no database rollback. This must be programmed explicitly if required.

Explicit Database Rollbacks   

Explicit database rollbacks in ABAP programs can be triggered in the following ways:

-   The corresponding database-specific [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement is used.
    -   In [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), only the method [ROLLBACK](javascript:call_link\('abenadbc_transaction.htm'\)) of the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) can be used to do this. In other cases, the database interface does not recognize the end of the transaction and might not be able to perform any necessary actions.
    -   Any ROLLBACK statement embedded statically between [EXEC](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)) is detected by the database interface and any required actions performed.
-   Executing the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)). The database rollback takes place on the specified [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").
-   Calling the function module DB\_ROLLBACK. This function module encapsulates the corresponding Native SQL statement. By default, the database rollback is triggered on the [connection](javascript:call_link\('abapexec_connection.htm'\)) currently open for [EXEC SQL](javascript:call_link\('abapexec.htm'\)). The rollback is triggered explicitly on the standard connection by passing the value of abap\_true to the input parameter IV\_DEFAULT. The function module DB\_ROLLBACK raises the event DB\_TRANSACTION\_FINISHED of the class CL\_DBI\_TRANSACTION\_STATE, which is handled by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b) framework.
-   Executing the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)). The database rollback takes place on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). The statement ROLLBACK WORK also closes the current [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) and performs the associated actions.

ROLLBACK statements are not allowed in [AMDP](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") methods.

Hints

-   For a simple database rollback in an ABAP program the statement [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) is usually sufficient. The standard connection can be specified here using default. If the database LUW is to be monitored by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b), the function module DB\_ROLLBACK can be used. The statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) should not be used for the sole purpose of a database rollback itself but only for rolling back a complete [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").
-   Generally, the use of the statement [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) with the addition default is recommended for an explicit database rollback in an ABAP program.
-   All the methods specified here for explicit database rollbacks empty any [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) and prevent the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](javascript:call_link\('abendb_commit.htm'\)).

Database Rollback on Database Connections   

When a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") is closed explicitly in Native SQL, a database rollback is triggered in the transaction context of this [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). For more information, see [Database Connections](javascript:call_link\('abendb_connections.htm'\)).