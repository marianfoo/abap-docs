  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [Database LUW](javascript:call_link\('abendb_transaction.htm'\)) → 

Database Commit

In [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"), database commits are triggered either implicitly or explicitly.

-   [Implicit Database Commits](#@@ITOC@@ABENDB_COMMIT_1)
-   [Explicit Database Commits](#@@ITOC@@ABENDB_COMMIT_2)
-   [Database Commit on Secondary Connections](#@@ITOC@@ABENDB_COMMIT_3)

Hint

A database commit closes all opened [database cursors](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry"). In particular, in [SELECT](javascript:call_link\('abapselect.htm'\)) loops and after the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), database commits should not be triggered by mistake in one of the ways listed here.

Implicit Database Commits

The implicit database commits in an AS ABAP are caused by the fact that an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") uses its own [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to log on to the database system. A work process can only ever execute a single [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") but cannot interfere with the database LUWs belonging to other work processes. Since an ABAP program can be executed by different work processes during its runtime, the database LUW for the current work process must be completed for every action that can lead to a change of work process. As a result, a database commit is performed implicitly in the following situation:

-   Completion of a [dialog step](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry")
    
    The program waits for a user action and does not occupy a work process during this time. The next free work process is assigned to the program in the next dialog step.
    
-   Calling a function module in a [synchronous](javascript:call_link\('abensynchronous_rfc_glosry.htm'\) "Glossary Entry") or [asynchronous remote function call](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry")
    
    The current work process passes control to a different work process or system. An exception to this are [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"). During updates, [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") and [aRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") do not cause work processes to be switched or database commits to be executed.
    
-   Completion of a function module called in a separate work process using a synchronous remote function call.
    
    Usually, a new work process is assigned to the calling program. If a new [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") follows quickly enough, and enough free work processes exist, the work process sRFC continues to be used, but an implicit database commit is performed regardless.
    
-   Use of the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) in a callback routine specified in an asynchronous RFC
    
    To receive data from another AS instance, the current work process must be interrupted before the callback routine is executed. A database commit is performed, except during the update.
    
-   HTTP/HTTPS/SMTP communication executed using the [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry")
    
    A database commit is executed before each response is sent in an ICF server program or ICF client program. An exception to this are updates. This behavior is independent of whether the communication is stateless or stateful.
    
-   Receiving messages from [ABAP messaging channels](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry")
    
    A database commit is executed while the methods START\_MESSAGE\_DELIVERY and STOP\_MESSAGE\_DELIVERY of a consumer object are executed.
    
-   Execution of WebSocket or TCP communication using ABAP Push Channels
    
    Each time a message is sent, and each time [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry") is exited, a database commit is executed. An exception to this are [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"). More specifically, the methods BIND\_AMC\_MESSAGE\_CONSUMER and UNBIND\_AMC\_MESSAGE\_CONSUMER for binding an ABAP messaging channel produce a database commit.
    
-   Current work process interrupted using the statement [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)), [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)), [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)).
    
    After the interruption, the program is assigned the next free work process. An exception to this are updates.
    
-   Sending [error messages](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"), [information messages](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry"), and [warnings](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry").
    
    These messages interrupt the current dialog step (see above).
    

The implicit database commit takes place on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") of the current work process. The situations above cause a work process to be switched while a program is running, but it is also possible for entire programs to be executed in a different work process, such as when a program is called in a background work process in [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"). Here, a database commit is also made when the work process is switched.

Hints

-   When an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is exited, there is no implicit database commit on the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") and no [database rollback](javascript:call_link\('abendb_rollback.htm'\)). This must be programmed explicitly if required.
-   If a [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) filled using ABAP SQL statements is not emptied by an explicit database commit or database rollback in the case of implicit database commits or by the statement [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) without WHERE condition, the runtime error COMMIT\_GTT\_ERROR occurs.

Explicit Database Commits

Database commits can be triggered explicitly in ABAP programs in the following ways:

-   The relevant database-specific [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement is used.
    -   In [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), only the method [COMMIT](javascript:call_link\('abenadbc_transaction.htm'\)) of the class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) can be used to do this. In other cases, the database interface does not detect the end of the transaction and might not be able to perform certain actions.
    -   Any COMMIT statement embedded statically between [EXEC](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)) is detected by the database interface and any required actions performed.
-   Executing the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)). The database commit takes place on the specified [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").
-   Calling the function module DB\_COMMIT. This function module encapsulates the corresponding Native SQL statement. By default, the database commit is triggered on the [connection](javascript:call_link\('abapexec_connection.htm'\)) currently open for [EXEC SQL](javascript:call_link\('abapexec.htm'\)). The commit is triggered explicitly on the standard connection by passing the value of abap\_true to the input parameter IV\_DEFAULT. The function module DB\_COMMIT raises the event DB\_TRANSACTION\_FINISHED of the class CL\_DBI\_TRANSACTION\_STATE, which is handled by the application log framework.
-   Executing the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [COMMIT CONNECTION](javascript:call_link\('abapcommit.htm'\)). The database commit takes place on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). The statement COMMIT WORK also closes the current [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) and performs the associated actions.

COMMIT statements are not allowed in [AMDP](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") methods.

Hints

-   A simple database commit in an ABAP program is generally done using the statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)), where the standard connection can be specified using default. The database LUW can be monitored by the application log by using the function module DB\_COMMIT, if required. Apart from the database commit itself, using the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) also has certain other consequences with respect to the [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").
-   All methods specified here for explicit database commits empty [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) and prevent the runtime error COMMIT\_GTT\_ERROR in the case of implicit database commits.

Database Commit on Secondary Connections

Implicit deactivations of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") at the end of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") trigger a database commit in the transaction context of this [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). For more information, see [Database Connections](javascript:call_link\('abendb_connections.htm'\)).

If the internal session is switched on the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry"), there is no database commit and no [database rollback](javascript:call_link\('abendb_rollback.htm'\)).