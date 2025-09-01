  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

SET UPDATE TASK LOCAL

[Short Reference](javascript:call_link\('abapset_update_task_shortref.htm'\))

Syntax

SET UPDATE TASK LOCAL.

Effect

This statement switches the local update on. In the local update, high priority update function modules that are registered in the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") using [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) are stored in the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") instead of the VB... DDIC database tables. They are executed immediately in the current process and not in the update work process within the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"), when the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) is executed. This statement has no effect on low-priority update function modules.

At the beginning of every SAP LUW, the local update function is deactivated. If required, it must be activated again before the first update function module is registered.

The local update is executed in a separate [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the current [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") and not in a dedicated [update session](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry").

System Fields

sy-subrc

Meaning

0

The local update function is activated.

1

The local update function has not been activated, because the program has already registered at least one update function module for the regular updating procedure in the current SAP LUW.

Hints

-   The local update function performs a synchronous update after the statement COMMIT WORK, independently of the addition AND WAIT.
-   If a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") occurs during the local update, all previous change requests are affected.
-   The [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/force\_local\_update\_task can be used to set the local update centrally for an AS ABAP. This should be done with great care, however, and while respecting all updates that can take place in the system. If not, the behavior of programs not intended for local updates may change. The performance of database locks may also be affected negatively.

Example

Activation of the [local update](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry") for the subsequent registrations of [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") using the statement [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)).

SET UPDATE TASK LOCAL.
...
DATA(values) = VALUE demo\_update\_tab(
  ( id = 'Y' col1 = 1111 col2 = 2111 col3 = 3111 col4 = 4111 ) ).
CALL FUNCTION 'DEMO\_UPDATE\_UPDATE' IN UPDATE TASK
  EXPORTING
    values = values.
...
COMMIT WORK.

Executable Example

[SAP-LUW, UPDATE TASK](javascript:call_link\('abensap_luw_update_task_abexa.htm'\))