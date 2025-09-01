  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ROLLBACK%20WORK%2C%20ABAPROLLBACK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ROLLBACK WORK

[Short Reference](javascript:call_link\('abaprollback_shortref.htm'\))

Syntax

ROLLBACK WORK.

Effect

The statement ROLLBACK WORK closes the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") and opens a new one. This cancels all changes requests made by the current SAP LUW. To do this, ROLLBACK WORK performs the following actions:

1.  Executes all subroutines registered using [PERFORM ON ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)).
2.  Deletes the registrations of all subroutines registered using [PERFORM ON COMMIT](javascript:call_link\('abapperform_on_commit.htm'\)).
3.  Raises an internal event in the [Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") that ensures that the attributes of persistent objects are initialized.
4.  Deletes all update function modules registered with [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) from the DDIC database tables VB... and deletes all Remote Function Calls registered with [CALL FUNCTION ... IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) or [CALL FUNCTION ... IN BACKGROUND TASK](javascript:call_link\('abapcall_function_background_task.htm'\)) (obsolete) from the DDIC database tables ARFCSSTATE and ARFCSDATA.
5.  Removes all [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") set in the current program for which the formal parameter \_SCOPE of the lock function module was set to the value 2.
6.  Triggers a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") on all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"), which also ends the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

After the statement ROLLBACK WORK is completed, the event TRANSACTION\_FINISHED from the system class CL\_SYSTEM\_TRANSACTION\_STATE is raised. Here, the parameter KIND has the value of the constant CL\_SYSTEM\_TRANSACTION\_STATE=>ROLLBACK\_WORK.

Hints

-   After a ROLLBACK statement is executed, sy-subrc is always zero. It is not necessary to query whether sy-subrc is not equal to zero after ROLLBACK.
-   The ROLLBACK WORK statement is executed implicitly if a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type A is handled by the addition error\_message when calling a function module with CALL FUNCTION.
-   ROLLBACK WORK empties [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) of all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") and prevents the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](javascript:call_link\('abendb_commit.htm'\)).
-   All open [database cursors](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") in the database connections concerned are closed during a ROLLBACK, which means that a runtime error occurs when the system attempts to continue a SELECT loop after a ROLLBACK. It must therefore be ensured that cursors that are still open are no longer used after the ROLLBACK.
-   For the same reason, a [FETCH](javascript:call_link\('abapfetch.htm'\)) after a ROLLBACK on the cursor that is now closed also causes a runtime error.
-   ROLLBACK must not be used during [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") (CALL FUNCTION ... IN UPDATE TASK) or when subroutines registered using PERFORM ... ON COMMIT or PERFORM ... ON ROLLBACK are being executed.
-   The statement ROLLBACK WORK must not be executed in units or LUWs that are managed by background RFC calls ([bgRFC](javascript:call_link\('abenbgrfc_glosry.htm'\) "Glossary Entry") and the obsolete [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") and [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry")).

Example

The statement ROLLBACK WORK deletes the registration of [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") using the statements [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) and calls the subroutine cleanup.

PERFORM cleanup ON ROLLBACK.
...
CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK.
...
FINAL(values) = VALUE demo\_update\_tab(
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

Executable Example

The example [Demonstrating the SAP LUW](javascript:call_link\('abensap_luw_bundl_tech_abexa.htm'\)) demonstrates the SAP LUW, covering the ROLLBACK WORK statement.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: ROLLBACK WORK is not allowed within a FORM that is called using [PERFORM ... ON COMMIT](javascript:call_link\('abapperform.htm'\)) or [PERFORM ... ON ROLLBACK](javascript:call_link\('abapperform.htm'\)).
    Runtime error: ROLLBACK\_IN\_PERFORM\_ON\_COMMIT
-   Cause: ROLLBACK WORK is not allowed within updates.
    Runtime error: ROLLBACK\_IN\_POSTING