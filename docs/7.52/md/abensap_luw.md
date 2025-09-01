  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm) → 

SAP LUW

An application program can be split into several program sections, which are processed in sequence using different [work processes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwork_process_glosry.htm "Glossary Entry"). Each switch of a work process is associated with an implicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry"), which means that an application program is not associated with a single [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") automatically. More specifically, this applies to dialog-oriented applications with classic [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") in [SAP GUI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_gui_glosry.htm "Glossary Entry") in which each [dialog step](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_step_glosry.htm "Glossary Entry") is assigned a database LUW.

To ensure the data consistency of application programs that are executed across multiple work processes, the change statements are not executed directly in an SAP LUW. Instead, they are first registered and then executed by a single work process, that is in a single database LUW.

![Figure](abdoc_sap_luw.gif)

-   [Bundling Methods](#@@ITOC@@ABENSAP_LUW_1)

-   [Statements for SAP LUWs](#@@ITOC@@ABENSAP_LUW_2)

Bundling Methods

The following techniques are available for bundling the change statements in a database LUW:

-   Update (bundling using function modules)

The statement [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm) is used to register an [update function module](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") for later execution in an update work process ([synchronous](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasynchronous_update_glosry.htm "Glossary Entry")) or in the current work process ([local updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm "Glossary Entry")). No [forbidden statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit_during_update.htm) can be executed during an update. Synchronous and asynchronous updates are executed in their own [update sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry"). Local updates, on the other hand, only open a new [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry").

-   Transactional RFC (bundling using function modules)

The statement [CALL FUNCTION ... IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_background_unit.htm) is used to register a [remote-enabled function module](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") for later asynchronous execution in the background and using the RFC interface (Background RFC).

-   Bundling using subroutines

The statement [PERFORM ... ON COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm) is used to register a subroutine for later execution in a different work process.

Note

A function module can be specified as either an update function module or as remote-enabled, but not both at the same time. The update is used to realize SAP LUWs within [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), while transactional RFC creates LUWs in distributed systems.

Statements for SAP LUWs

Each opening of a new [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") (except for the statement [CALL DIALOG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_dialog.htm)) starts a new SAP LUW which can be controlled by the Open SQL statements

-   [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm)

-   [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm)

-   [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_update_task_local.htm)

Each closing of an internal session ends the current SAP LUW.

Notes

-   The statements COMMIT WORK and ROLLBACK WORK determine the limits of a SAP LUW. An ABAP program can be divided into any number of SAP LUWs, whereby the end of an ABAP program always ends the last SAP LUW as well. Calling ABAP programs with [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm) or [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) provides the option of nesting SAP LUWs.

-   If a program is ended or an internal session closed using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) without AND RETURN or [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_transaction.htm) and procedures are still registered in the current SAP LUW, the SAP LUW is ended without the procedures being called or rolled back. Registered update function modules are persisted on the database, but can no longer be executed.

-   The system class CL\_SYSTEM\_TRANSACTION\_STATE contains methods that get the status of the current [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry").

Continue
[CALL FUNCTION - IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm)
[PERFORM - ON COMMIT, ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm)
[COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm)
[ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm)
[SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_update_task_local.htm)
[Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit_during_update.htm)
[SAP LUW, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_abexas.htm)