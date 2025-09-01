  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw.htm) → 

ROLLBACK WORK

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback_shortref.htm)

Syntax

ROLLBACK WORK.

Effect

The statement ROLLBACK WORK closes the current [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry") and opens a new one. This cancels all changes requests made by the current SAP LUW. In this case, ROLLBACK WORK performs the following actions:

1.  Executes all subroutines registered using [PERFORM ON ROLLBACK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapperform_subr.htm).
    
2.  Deletes the registrations of all subroutines registered using [PERFORM ON COMMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapperform_subr.htm).
    
3.  Raises an internal event in the [Object Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_services_glosry.htm "Glossary Entry") that makes sure that the attributes of persistent objects are initialized.
    
4.  Deletes all update function modules registered with [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_update.htm) from the database tables VB... and deletes all Remote Function Calls registered with [CALL FUNCTION ... IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_background_unit.htm) or [CALL FUNCTION ... IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_background_task.htm) (obsolete) from the database tables ARFCSSTATE and ARFCSDATA.
    
5.  Removes all [SAP locks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_lock_glosry.htm "Glossary Entry") set in the current program for which the formal parameter \_SCOPE of the lock function module was set to the value 2.
    
6.  Triggers a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") on all currently open [database connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_connection_glosry.htm "Glossary Entry"), which also ends the current [database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_luw_glosry.htm "Glossary Entry").
    

After the statement ROLLBACK WORK is completed, the event TRANSACTION\_FINISHED from the system class CL\_SYSTEM\_TRANSACTION\_STATE is raised. Here, the parameter KIND has the value of the constant CL\_SYSTEM\_TRANSACTION\_STATE=>ROLLBACK\_WORK.

Notes

-   All open [database cursors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") in the database connections concerned are closed during ROLLBACKs, which means that a runtime error occurs when the system attempts to continue a SELECT loop after a ROLLBACK. For the same reason, a [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm) after a ROLLBACK on the cursor that is now closed also causes a runtime error. Make sure that cursors that are still open are no longer used after the ROLLBACK.
    
-   After a ROLLBACK statement, sy-subrc is always zero. It is not necessary to query whether sy-subrc is not equal to zero after ROLLBACK.
    
-   ROLLBACK must not be used during [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry") (CALL FUNCTION ... IN UPDATE TASK) or when subroutines registered using PERFORM ... ON COMMIT or PERFORM ... ON ROLLBACK are being executed.
    
-   The statement ROLLBACK WORK must not be executed in units or LUWs that are managed by background RFC calls ([bgRFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbgrfc_glosry.htm "Glossary Entry") and the obsolete [tRFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentrfc_2_glosry.htm "Glossary Entry") and [qRFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenqrfc_glosry.htm "Glossary Entry")).
    
-   The ROLLBACK WORK statement is executed implicitly if a [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") of type A is handled by the addition error\_message when calling a function module with CALL FUNCTION.
    
-   ROLLBACK WORK empties [global temporary tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_gtt.htm) of all currently open [database connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_connection_glosry.htm "Glossary Entry") and prevents the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_commit.htm).
    

Example

The statement ROLLBACK WORK deletes the registration of [update function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") made using the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_update.htm) and calls the subroutine cleanup.

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

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: ROLLBACK WORK is not permitted within a FORM that is called using [PERFORM ... ON COMMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapperform.htm) or [PERFORM ... ON ROLLBACK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapperform.htm).
    Runtime error: ROLLBACK\_IN\_PERFORM\_ON\_COMMIT
    
-   Cause: ROLLBACK WORK is not permitted within updates.
    Runtime error: ROLLBACK\_IN\_POSTING