  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm) →  [Database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_transaction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Commit%2C%20ABENDB_COMMIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Commit

In [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry"), database commits are triggered either implicitly or explicitly.

-   [Implicit Database Commits](#@@ITOC@@ABENDB_COMMIT_1)
-   [Explicit Database Commits](#@@ITOC@@ABENDB_COMMIT_2)
-   [Database Commit on Secondary Connections](#@@ITOC@@ABENDB_COMMIT_3)

Hint

A database commit closes all opened [database cursors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). In particular, in [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) loops and after the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm), database commits should not be triggered by mistake in one of the ways listed here.

Implicit Database Commits   

The implicit database commits in an AS ABAP are caused by the fact that an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") uses its own [work processes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwork_process_glosry.htm "Glossary Entry") to log on to the database system. A work process can only ever execute a single [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry") but cannot interfere with the database LUWs belonging to other work processes. Since an ABAP program can be executed by different work processes during its runtime, the database LUW for the current work process must be completed for every action that can lead to a change of work process. As a result, a database commit is performed implicitly in the following situation:

-   Completion of a [dialog step](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_step_glosry.htm "Glossary Entry")
    
    The program waits for a user action and does not occupy a work process during this time. The next free work process is assigned to the program in the next dialog step.
    
-   Calling a function module in a [synchronous](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensynchronous_rfc_glosry.htm "Glossary Entry") or [asynchronous remote function call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry")
    
    The current work process passes control to a different work process or system. An exception to this are [updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_glosry.htm "Glossary Entry"). During updates, [sRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrfc_glosry.htm "Glossary Entry") and [aRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrfc_glosry.htm "Glossary Entry") do not cause work processes to be switched or database commits to be executed.
    
-   Completion of a function module called in a separate work process using a synchronous remote function call.
    
    Usually, a new work process is assigned to the calling program. If a new [sRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrfc_glosry.htm "Glossary Entry") follows quickly enough, and enough free work processes exist, the work process sRFC continues to be used, but an implicit database commit is performed regardless.
    
-   Use of the statement [RECEIVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive.htm) in a callback routine specified in an asynchronous RFC
    
    To receive data from another AS instance, the current work process must be interrupted before the callback routine is executed. A database commit is performed, except during the update.
    
-   HTTP/HTTPS/SMTP communication executed using the [Internet Communication Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry")
    
    A database commit is executed before each response is sent in an ICF server program or ICF client program. An exception to this are updates. This behavior is independent of whether the communication is stateless or stateful.
    
-   Receiving messages from [ABAP messaging channels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry")
    
    A database commit is executed while the methods START\_MESSAGE\_DELIVERY and STOP\_MESSAGE\_DELIVERY of a consumer object are executed.
    
-   Execution of WebSocket or TCP communication using ABAP Push Channels
    
    Each time a message is sent, and each time [APC processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenapc_processing_glosry.htm "Glossary Entry") is exited, a database commit is executed. An exception to this are [updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_glosry.htm "Glossary Entry"). More specifically, the methods BIND\_AMC\_MESSAGE\_CONSUMER and UNBIND\_AMC\_MESSAGE\_CONSUMER for binding an ABAP messaging channel produce a database commit.
    
-   Current work process interrupted using the statement [WAIT UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_up_to.htm), [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_arfc.htm), or [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_amc.htm).
    
    After the interruption, the program is assigned the next free work process. An exception to this are updates.
    
-   Sending [error messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_message_glosry.htm "Glossary Entry"), [information messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninformation_message_glosry.htm "Glossary Entry"), and [warnings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwarning_glosry.htm "Glossary Entry").
    
    These messages interrupt the current dialog step (see above).
    

The implicit database commit takes place on all currently open [database connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry") of the current work process. The situations above cause a work process to be switched while a program is running, but it is also possible for entire programs to be executed in a different work process, such as when a program is called in a background work process in [background processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbackround_processing_glosry.htm "Glossary Entry"). Here, a database commit is also made when the work process is switched.

Hints

-   When an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") is exited, there is no implicit database commit on the [standard connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") and no [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_rollback.htm). This must be programmed explicitly if required.
-   If a [global temporary table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm) filled using ABAP SQL statements is not emptied by an explicit database commit or database rollback in the case of implicit database commits or by the statement [DELETE FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm) without WHERE condition, the runtime error COMMIT\_GTT\_ERROR occurs.

Explicit Database Commits   

Database commits can be triggered explicitly in ABAP programs in the following ways:

-   The relevant database-specific [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") statement is used.
    -   In [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry"), only the method [COMMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_transaction.htm) of the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm) can be used to do this. In other cases, the database interface does not detect the end of the transaction and might not be able to perform certain actions.
    -   Any COMMIT statement embedded statically between [EXEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendexec.htm) is detected by the database interface and any required actions performed.
-   Executing the [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm). The database commit takes place on the specified [database connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry").
-   Calling the function module DB\_COMMIT. This function module encapsulates the corresponding Native SQL statement. By default, the database commit is triggered on the [connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec_connection.htm) currently open for [EXEC SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm). The commit is triggered explicitly on the standard connection by passing the value of abap\_true to the input parameter IV\_DEFAULT. The function module DB\_COMMIT raises the event DB\_TRANSACTION\_FINISHED of the class CL\_DBI\_TRANSACTION\_STATE, which is handled by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b) framework.
-   Executing the [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm). The database commit takes place on all currently open [database connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The statement COMMIT WORK also closes the current [SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw.htm) and performs the associated actions.

COMMIT statements are not allowed in [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") methods.

Hints

-   A simple database commit in an ABAP program is generally done using the statement [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm), where the standard connection can be specified using default. The database LUW can be monitored by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b) by using the function module DB\_COMMIT, if required. Apart from the database commit itself, using the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm) also has certain other consequences with respect to the [SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_glosry.htm "Glossary Entry").
-   All methods specified here for explicit database commits empty [global temporary tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm) and prevent the runtime error COMMIT\_GTT\_ERROR in the case of implicit database commits.

Database Commit on Secondary Connections   

Implicit deactivations of a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_connection_glosry.htm "Glossary Entry") at the end of an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") trigger a database commit in the transaction context of this [database connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). For more information, see [Database Connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_connections.htm).

If the internal session is switched on the [standard connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"), there is no database commit and no [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_rollback.htm).