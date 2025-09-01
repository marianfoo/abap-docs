  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) → 

SAP LUW

An application program can be split into several program sections, which are processed in sequence using different [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"). Each switch of a work process is associated with an implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"), which means that an application program is not associated with a single [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") automatically. More specifically, this applies to dialog-oriented applications with classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") in [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry") in which each [dialog step](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry") is assigned a database LUW.

To ensure the data consistency of application programs that are executed across multiple work processes, the change statements are not executed directly in an SAP LUW. Instead, they are first registered and then executed by a single work process, that is in a single database LUW.

![Figure](abdoc_sap_luw.gif)

-   [Bundling Methods](#abensap-luw-1--------statements-for-sap-luws---@ITOC@@ABENSAP_LUW_2)

Bundling Methods

The following techniques are available for bundling the change statements in a database LUW:

-   Update (bundling using function modules)

The statement [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) is used to register an [update function module](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") for later execution in an update work process ([synchronous](javascript:call_link\('abensynchronous_update_glosry.htm'\) "Glossary Entry") and [asynchronous updates](javascript:call_link\('abenasynchronous_update_glosry.htm'\) "Glossary Entry")) or in the current work process ([local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry")). No [forbidden statements](javascript:call_link\('abendb_commit_during_update.htm'\)) can be executed during an update. Synchronous and asynchronous updates are executed in their own [update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry"). Local updates, on the other hand, only open a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   Transactional RFC (bundling using function modules)

The statement [CALL FUNCTION ... IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) is used to register a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") for later asynchronous execution in the background and using the RFC interface (Background RFC).

-   Bundling using subroutines

The statement [PERFORM ... ON COMMIT](javascript:call_link\('abapperform_subr.htm'\)) is used to register a subroutine for later execution in a different work process.

Note

A function module can be specified as either an update function module or as remote-enabled, but not both at the same time. The update is used to realize SAP LUWs within [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"), while transactional RFC creates LUWs in distributed systems.

Statements for SAP LUWs

Each opening of a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (except for the statement [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\))) starts a new SAP LUW which can be controlled by the Open SQL statements

-   [COMMIT WORK](javascript:call_link\('abapcommit.htm'\))

-   [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\))

-   [SET UPDATE TASK LOCAL](javascript:call_link\('abapset_update_task_local.htm'\))

Each closing of an internal session ends the current SAP LUW.

Notes

-   The statements COMMIT WORK and ROLLBACK WORK determine the limits of a SAP LUW. An ABAP program can be divided into any number of SAP LUWs, whereby the end of an ABAP program always ends the last SAP LUW as well. Calling ABAP programs with [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) or [SUBMIT ... AND RETURN](javascript:call_link\('abapsubmit.htm'\)) provides the option of nesting SAP LUWs.

-   If a program is ended or an internal session closed using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN or [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) and procedures are still registered in the current SAP LUW, the SAP LUW is ended without the procedures being called or rolled back. Registered update function modules are persisted on the database, but can no longer be executed.

-   The system class CL\_SYSTEM\_TRANSACTION\_STATE contains methods that get the status of the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").

Continue
[CALL FUNCTION - IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\))
[PERFORM - ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_subr.htm'\))
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\))
[ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\))
[SET UPDATE TASK LOCAL](javascript:call_link\('abapset_update_task_local.htm'\))
[Forbidden Statements in Updates](javascript:call_link\('abendb_commit_during_update.htm'\))
[SAP LUW, Examples](javascript:call_link\('abensap_luw_abexas.htm'\))