---
title: "SAP LUW"
description: |
  An application program can be split into several program sections, which are processed in sequence using different work processes(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwork_process_glosry.htm 'Glossary Entry'). Each switch of a work process is associated with an implicit
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw.htm"
abapFile: "abensap_luw.htm"
keywords: ["update", "do", "while", "if", "try", "method", "class", "data", "abensap", "luw"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction.htm) → 

SAP LUW

An application program can be split into several program sections, which are processed in sequence using different [work processes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwork_process_glosry.htm "Glossary Entry"). Each switch of a work process is associated with an implicit [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry"), which means that an application program is not associated with a single [database LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_luw_glosry.htm "Glossary Entry") automatically. More specifically, this applies to dialog-oriented applications with classic [dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") in [SAP GUI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_gui_glosry.htm "Glossary Entry") in which each [dialog step](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendialog_step_glosry.htm "Glossary Entry") is assigned a database LUW.

![Figure](abdoc_sap_luw.gif)

To ensure the data consistency of application programs that are executed across multiple work processes, the change statements are not executed directly in an [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry"). Instead, they are first registered and then executed by a single work process, that is in a single database LUW.

-   [Bundling Techniques](#abensap-luw-1--------statements-for-sap-luws---@ITOC@@ABENSAP_LUW_2)

-   [SAP LUWs and internal sessions](#@@ITOC@@ABENSAP_LUW_3)

Bundling Techniques

The following techniques are available for bundling the change statements in a database LUW:

-   Update (bundling using function modules)

The statement [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_update.htm) is used to register an [update function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") for later execution in an update work process ([synchronous](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasynchronous_update_glosry.htm "Glossary Entry")) or in the current work process ([local update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_update_glosry.htm "Glossary Entry")). In updates, no [forbidden statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit_during_update.htm) can be executed and no [authorization checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthority_during_update.htm) are made. Synchronous and asynchronous updates are executed in their own [update sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_session_glosry.htm "Glossary Entry"). Local updates, on the other hand, only open a new [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry").

-   Transactional RFC (bundling using function modules)

The statement [CALL FUNCTION ... IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_background_unit.htm) is used to register a [remote-enabled function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") for later asynchronous execution in the background and through the RFC interface (background RFC).

-   Bundling using subroutines

The statement [PERFORM ... ON COMMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapperform_subr.htm) is used to register a subroutine for later execution in a different work process.

Hint

A function module can be specified as either an update function module or as remote-enabled, but not both at the same time. The update is used to realize SAP LUWs within [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"), while transactional RFC creates LUWs in distributed systems.

Statements for SAP LUWs

Each opening of a new [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") (except for the statement [CALL DIALOG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_dialog.htm)) starts a new SAP LUW which can be controlled by the ABAP SQL statements

-   [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm)

-   [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm)

-   [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_update_task_local.htm)

Hints

-   The statements COMMIT WORK and ROLLBACK WORK determine the limits of a SAP LUW. An ABAP program can be divided into any number of SAP LUWs, whereby the end of an ABAP program always ends the last SAP LUW as well. Calling ABAP programs with [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm) or [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm) provides the option of nesting SAP LUWs.

-   The system class CL\_SYSTEM\_TRANSACTION\_STATE contains methods that return the status of the current [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry").

SAP LUWs and internal sessions

Each closing of an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") ends the current SAP LUW. If a program is ended or an internal session closed using

-   [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm) without AND RETURN or

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm)

and procedures are still registered in the current SAP LUW, the SAP LUW is ended and the procedures are not called or rolled back. Registered update function modules remain on the database but can no longer be executed.

Hint

If a program is called using

-   [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm) with AND RETURN or

-   [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm)

a new [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry") opens, but not a new [database LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that a [database rollback](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") in this SAP LUW can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_update.htm) or [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_background_task.htm) in the tables VB... or ARFCSSTATE and ARFCSDATA. Under certain circumstances, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") must be executed before the program is called. This problem does not occur in [local updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_update_glosry.htm "Glossary Entry").

Continue
[CALL FUNCTION, IN UPDATE TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_update.htm)
[PERFORM, ON COMMIT, ROLLBACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapperform_subr.htm)
[COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm)
[ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm)
[SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_update_task_local.htm)
[Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit_during_update.htm)
[Authorization Checks during an Update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthority_during_update.htm)
[SAP LUW, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_abexas.htm)