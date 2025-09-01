  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

ROLLBACK WORK

[Quick Reference](javascript:call_link\('abaprollback_shortref.htm'\))

Syntax

ROLLBACK WORK.

Effect

The statement ROLLBACK WORK closes the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") and opens a new one. This cancels all changes requests made by the current SAP LUW. In this case, ROLLBACK WORK performs the following actions:

1.  Executes all subroutines registered using [PERFORM ON ROLLBACK](javascript:call_link\('abapperform_subr.htm'\)).
    
2.  Deletes the registrations of all subroutines registered using [PERFORM ON COMMIT](javascript:call_link\('abapperform_subr.htm'\)).
    
3.  Triggers an internal event in the [Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") that makes sure that the attributes of persistent objects are initialized.
    
4.  Deletes all update function modules registered with [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) from the database tables VB... And deletes all remote function calls registered using [CALL FUNCTION ... IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) or [CALL FUNCTION ... IN BACKGROUND TASK](javascript:call_link\('abapcall_function_background_task.htm'\)) (obsolete) from the database tables ARFCSSTATE and ARFCSDATA.
    
5.  Removes all [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") set in the current program for which the formal parameter \_SCOPE of the lock function module was set to the value 2.
    
6.  Triggers a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"), which also ends the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").
    

After the statement ROLLBACK WORK is completed, the event TRANSACTION\_FINISHED from the system class CL\_SYSTEM\_TRANSACTION\_STATE is triggered. Here, the parameter KIND has the value of the constant CL\_SYSTEM\_TRANSACTION\_STATE=>ROLLBACK\_WORK.

Notes

-   All open [database cursors](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") in the database connections concerned are closed during ROLLBACKs, which means that a runtime error occurs when the system attempts to continue a SELECT loop after a ROLLBACK. For the same reason, a [FETCH](javascript:call_link\('abapfetch.htm'\)) after a ROLLBACK on the cursor that is now closed also causes a runtime error. Make sure that cursors that are still open are no longer used after the ROLLBACK.
    
-   After a ROLLBACK statement, sy-subrc is always zero. It is not necessary to query whether sy-subrc is not equal to zero after ROLLBACK.
    
-   ROLLBACK must not be used during [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") (CALL FUNCTION ... IN UPDATE TASK) or when subroutines registered using PERFORM ... ON COMMIT or PERFORM ... ON ROLLBACK are being executed.
    
-   The statement ROLLBACK WORK must not be executed in units or LUWs that are managed by background RFC calls ([bgRFC](javascript:call_link\('abenbgrfc_glosry.htm'\) "Glossary Entry") and the obsolete [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") and [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry")).
    
-   The ROLLBACK WORK statement is executed implicitly if a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type A is handled by the addition error\_message when calling a function module with CALL FUNCTION.
    
-   ROLLBACK WORK empties [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) of all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") and prevents the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](javascript:call_link\('abendb_commit.htm'\)).
    

Example

The statement ROLLBACK WORK deletes the registration of [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") made using the statements [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) and calls the subroutine cleanup.

PERFORM cleanup ON ROLLBACK.
...
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
ROLLBACK WORK.
...
FORM cleanup.
  ...
ENDFORM.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: ROLLBACK WORK is not permitted within a FORM that is called using [PERFORM ... ON COMMIT](javascript:call_link\('abapperform.htm'\)) or [PERFORM ... ON ROLLBACK](javascript:call_link\('abapperform.htm'\)).
    Runtime error: ROLLBACK\_IN\_PERFORM\_ON\_COMMIT
    
-   Cause: ROLLBACK WORK is not permitted within updates.
    Runtime error: ROLLBACK\_IN\_POSTING