---
title: "COMMIT WORK"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit_shortref.htm) Syntax COMMIT WORK AND WAIT. Effect The statement COMMIT WORK closes the current SAP LUW(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm 'Glossary Entry')
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm"
abapFile: "abapcommit.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "class", "data", "abapcommit"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw.htm) → 

COMMIT WORK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit_shortref.htm)

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

The statement COMMIT WORK closes the current [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry") and opens a new one. All change requests from the current SAP LUW are then committed. In this case, COMMIT WORK performs the following actions:

1.  It executes all subroutines registered using [PERFORM ON COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform_subr.htm).
    The order is based on the order of registration or according to the priority specified using the addition LEVEL. The following statements are not allowed to be executed in a subroutine of this type:
    [PERFORM ... ON COMMIT*|*ROLLBACK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform_subr.htm)
    COMMIT WORK
    [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprollback.htm)
    The statement [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) can be executed.
    
2.  It raises an internal event for the persistence service of the [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_services_glosry.htm "Glossary Entry").
    If event handlers are registered by the persistence service, they collect the changes to the objects managed by the service and use [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) to pass them to a special update function module, registered as the final update module.
    
3.  It triggers the processing of all update function modules registered using [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) in the update work process or, for [local updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_update_glosry.htm "Glossary Entry"), in the current work process as well.
    All high-priority ("VB1") update function modules are executed in the order of their registration and in a shared [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). If the addition AND WAIT is not specified, the program does not wait (in non-local updates) until the update work process has executed it (asynchronous updates), but instead is resumed immediately after COMMIT WORK. However, if the addition AND WAIT is specified, program processing after COMMIT WORK will not continue until the update work process has executed the high-priority update function modules (synchronous updating).
    When all high-priority update function modules are completed successfully, the statement executes the low-priority ("VB2") update function modules in the order of registration in a shared database LUW in the update work process.
    No [database commits](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") and no [database rollbacks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") can occur and the update control cannot be modified during the processing of an update function module triggered using COMMIT WORK is being processed. Any statements that would produce this situation are [forbidden statements in updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_commit_during_update.htm) and always produce runtime errors.
    After the execution of high-priority update function modules, the individual function modules registered using CALL FUNCTION ...[](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm)[](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_task.htm)
    
4.  It handles all [SAP locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock_glosry.htm "Glossary Entry") set in the current program in accordance with the value of the formal parameter \_SCOPE of the corresponding lock function modules.
    
5.  It triggers a [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") on all currently open [database connections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_connection_glosry.htm "Glossary Entry"), which also terminates the current [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry") and closes all [database cursors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_cursor_glosry.htm "Glossary Entry").
    

The COMMIT WORK still raises the event TRANSACTION\_FINISHED from the system class CL\_SYSTEM\_TRANSACTION\_STATE. Here, the parameter KIND has the value of the constant CL\_SYSTEM\_TRANSACTION\_STATE=>COMMIT\_WORK. The time when this event is raised is described in the documentation for the event in the class:

-   During a [synchronous update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensynchronous_update_glosry.htm "Glossary Entry"), [local update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_update_glosry.htm "Glossary Entry") and outside the update, TRANSACTION\_FINISHED is raised by COMMIT WORK once processing is finished.
    
-   During an [asynchronous update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_update_glosry.htm "Glossary Entry"), TRANSACTION\_FINISHED is raised by the statement COMMIT WORK when the update is initiated.
    

Resources for preparation work can be cleaned up in the event handlers for this event before the update is performed. However, this is no guarantee that the update has not already been performed.

If the statement COMMIT WORK is executed by calling special programs, be aware of the following:

-   In a program executed using [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry") or if the program was called using the statement [CALL TRANSACTION USING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_using.htm), COMMIT WORK terminates batch input processing by default. This setting can be overwritten in the statement CALL TRANSACTION USING by using the component RACOMMIT of the structure CTU\_PARAMS, passed to the statement OPTIONS FROM.
    
-   In a program called using [CALL DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm), COMMIT WORK does not trigger the processing of subroutines or function modules registered using [PERFORM ON COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform_subr.htm) and [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) and hence does not close the current SAP LUW. At the earliest, the SAP LUW can be closed by the statement COMMIT WORK in the calling program. Only those [background remote function calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") or obsolete [transactional remote function calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_1_glosry.htm "Glossary Entry") registered using [CALL FUNCTION ... IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm) or [CALL FUNCTION ... IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_task.htm) (which is obsolete) within a [dialog module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_module_object_glosry.htm "Glossary Entry") are actually started here using COMMIT WORK. Any [bgRFCs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbgrfc_glosry.htm "Glossary Entry"), [tRFCs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_2_glosry.htm "Glossary Entry"), or [qRFCs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqrfc_glosry.htm "Glossary Entry") registered in a dialog module and not started there using COMMIT WORK are not executed.
    
-   The statement COMMIT WORK cannot be executed in updates or during the execution of subroutines registered using PERFORM ... ON *{*COMMIT*|*ROLLBACK*}*.
    
-   The statement COMMIT WORK must not be executed in units or LUWs that are managed by background RFC calls ([bgRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbgrfc_glosry.htm "Glossary Entry") and the (obsolete) [tRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_2_glosry.htm "Glossary Entry"), [qRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqrfc_glosry.htm "Glossary Entry")).
    

System Fields

sy-subrc

Meaning

0 (means:

The addition AND WAIT was specified and the update of the update function modules was successful.

4

The addition AND WAIT was specified and the update of the update function modules was not successful.

The statement COMMIT WORK always sets sy-subrc to 0 if the addition AND WAIT is not specified.

Notes

-   An SAP LUW not closed by COMMIT WORK but by ending the current program or closing the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is ignored by the registered procedures. Registered update function modules remain on the database but can no longer be executed.
    
-   The statement COMMIT WORK closes all [database cursors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). ABAP SQL statements that access a database cursor later ([SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) loop and [FETCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfetch.htm)) raise a non-handleable exception.
    
-   If a runtime error occurs during an [update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_glosry.htm "Glossary Entry") triggered by a COMMIT, the update work process executes a [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"), logs this in the corresponding database tables, and notifies the user whose entries created the entries by SAPMail. After the cause of the error has been resolved, the canceled entries can be updated again.
    
-   The statement [PERFORM ... ON COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform_subr.htm) can be executed during updates. The registered subroutine must be defined in the current function group and is then executed at the end of the current update.
    
-   COMMIT WORK also triggers a database commit in programs called using [CALL DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm).
    
-   COMMIT WORK empties [global temporary tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_gtt.htm) of all currently open [database connections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_connection_glosry.htm "Glossary Entry") and prevents the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_commit.htm).
    

Example

Registers various [update function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") using [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) and triggers a [synchronous update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensynchronous_update_glosry.htm "Glossary Entry") using COMMIT WORK AND WAIT.

CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK.
...
DATA(values) = VALUE demo\_update\_tab(
  ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
  ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
  ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
CALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK
  EXPORTING
    values = values.
...
COMMIT WORK AND WAIT.

Executable Examples

-   [SAP-LUW, UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_update_task_abexa.htm)

-   [SAP-LUW, ON COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_on_commit_abexa.htm)
    

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: COMMIT WORK is not allowed within a FORM called using [PERFORM ... ON COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm).
    Runtime error: COMMIT\_IN\_PERFORM\_ON\_COMMIT
    
-   Cause: COMMIT WORK is not allowed within the update.
    Runtime error: COMMIT\_IN\_POSTING