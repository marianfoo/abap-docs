  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

PERFORM, ON COMMIT, ROLLBACK

[Short Reference](javascript:call_link\('abapperform_shortref.htm'\))

Syntax

PERFORM subr ON *{* *{*COMMIT *\[*LEVEL idx*\]**}* *|* ROLLBACK *}*.

Addition:

[... LEVEL idx](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the subroutine of the current program for later execution. The name of the subroutine is directly specified as subr. The subroutine is not executed immediately and is flagged for execution by one of the statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) instead.

The statements COMMIT WORK or ROLLBACK WORK execute the subroutines that are registered with ON COMMIT or ON ROLLBACK respectively in the current work process and before update function modules registered using [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) are called. Subroutines that are registered during execution of an update function module with ON COMMIT are executed at the end of the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"). In non-local updates, this takes places in the update work process and in local updates in the current work process.

Programming Guideline

[Do not implement in function modules and subroutines](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")

Hints

-   Creating subroutines is obsolete. If new subroutines are required for PERFORM subr ON COMMIT or PERFORM subr ON ROLLBACK, they should only be used as wrapping for a method call and must not contain any other functional code.
    

-   Registered subroutines cannot have any parameter interface. Therefore, data can only be passed through external interfaces - for example, the ABAP memory. Subroutines that are executed in COMMIT WORK or ROLLBACK WORK are thus more suitable for management tasks, such as cleanup work at the end of a [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), than for database changes.
    

-   During processing of a registered subroutine after COMMIT WORK or ROLLBACK WORK, the statements PERFORM ... ON COMMIT, PERFORM ... ON ROLLBACK, COMMIT WORK, or ROLLBACK WORK must not be executed. Type "A" messages caught using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) in function module calls execute the statement ROLLBACK WORK implicitly and are therefore also forbidden.
    

-   Explicit [database commits](javascript:call_link\('abendb_commit.htm'\)) or [database rollbacks](javascript:call_link\('abendb_rollback.htm'\)) are allowed during processing of a registered subroutine with COMMIT WORK or ROLLBACK WORK.
    

-   If, during the processing of a registered subroutine after COMMIT WORK, update function modules are registered using [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)), this registration still applies to the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").
    

-   If the registration of subroutines is combined with the registration of update function modules with [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) special care has to be taken regarding the [database LUWs](javascript:call_link\('abendb_transaction.htm'\)) involved. Especially for [asynchronous update](javascript:call_link\('abenasynchronous_update_glosry.htm'\) "Glossary Entry"), procedures that are registered outside update processing are executed in different work processes and therefore in different database LUWs. The changes in the database LUW of the subroutine can be committed before the update function modules are executed and a database rollback during an asynchronous update does not rollback these changes.
    

Addition

... LEVEL idx

Effect

In the case of subroutines registered for COMMIT, the order of execution can be controlled using the addition LEVEL, where idx expects a data object of the type i. The execution then takes place, sorted according to ascending value of idx. idx has the value 0, if a value is not explicitly specified. If the value is the same as idx or if no value is specified, the order of execution is the same as the order of registration. A subroutine registered multiple times for COMMIT or ROLLBACK is executed once in each case.

Example

Registers a subroutine insert of the same program for execution in the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). The data is passed using the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry").

DATA(values) = VALUE demo\_update\_tab(
  ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
  ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
  ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
EXPORT values = values TO MEMORY ID 'INS'.
PERFORM insert ON COMMIT .
...
FORM insert.
  DATA values TYPE demo\_update\_tab.
  IMPORT values = values FROM MEMORY ID 'INS'.
  IF sy-subrc = 0.
    ...
  ENDIF.
ENDFORM.

Executable Example

[SAP LUW, ON COMMIT](javascript:call_link\('abensap_luw_on_commit_abexa.htm'\))