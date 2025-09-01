  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [Database LUW](javascript:call_link\('abendb_transaction.htm'\)) → 

Database Rollback

Database rollbacks are triggered implicitly or explicitly in [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry").

-   [Implicit Database Rollbacks](#@@ITOC@@ABENDB_ROLLBACK_1)

-   [Explicit Database Rollbacks](#@@ITOC@@ABENDB_ROLLBACK_2)

Note

A database rollback closes all opened [database cursors](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry"). It is particularly important that database rollbacks are not triggered (in one of the ways listed here) in [SELECT](javascript:call_link\('abapselect.htm'\)) loops and after the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)).

Implicit Database Rollbacks

The following exceptions trigger an implicit database rollback:

-   A [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry").

-   A [termination message](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry") is sent.

-   A program is terminated when a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent.

The implicit database rollback takes place on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").

Notes

-   A termination message also produces a database rollback if the message is handled by the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) when a function module is called.

-   Termination and [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry") always terminate the program. Other message types can also terminate a program in certain [contexts](javascript:call_link\('abencontext_2_glosry.htm'\) "Glossary Entry").

Explicit Database Rollbacks

Explicit database rollbacks in ABAP programs can be triggered in the following ways:

-   The relevant database-specific [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement is used.

-   In [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), only the method [ROLLBACK](javascript:call_link\('abenadbc_transaction.htm'\)) of the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) can be used to do this. In other cases, the database interface does not detect the end of the transaction and might not be able to perform certain actions.

-   Any ROLLBACK statement embedded statically between [EXEC](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)) is detected by the database interface and any required actions performed.

-   The [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) is executed. The database rollback takes place on the specified [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").

-   Calling the function module DB\_ROLLBACK. This function module encapsulates the corresponding Native SQL statement. By default, the database rollback is triggered on the [connection](javascript:call_link\('abapexec_connection.htm'\)) currently open for [EXEC SQL](javascript:call_link\('abapexec.htm'\)). The rollback is triggered explicitly on the standard connection by passing the value of abap\_true to the input parameter IV\_DEFAULT. The function module DB\_ROLLBACK raises the event DB\_TRANSACTION\_FINISHED of the class CL\_DBI\_TRANSACTION\_STATE, which is handled by the application log framework.

-   The [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) is executed. The database rollback takes place on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). The statement ROLLBACK WORK also closes the current [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) and performs the associated actions.

ROLLBACKs are not allowed in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

Notes

-   A simple database rollback in an ABAP program is is usually triggered using the statement [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) (the standard connection can be specified here using default). The database LUW can be monitored by the application log by using the function module DB\_ROLLBACK. Apart from the database rollback itself, using the statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) also has certain other consequences with respect to the [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").

-   An explicit database rollback in an ABAP program is is best triggered using the statement [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) (the standard connection can be specified here using default).

-   All the methods specified here for explicit database rollbacks clear any [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) and prevent the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](javascript:call_link\('abendb_commit.htm'\)).