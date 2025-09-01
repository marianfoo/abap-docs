---
title: "SET UPDATE TASK LOCAL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_update_task_shortref.htm) Syntax SET UPDATE TASK LOCAL. Effect This statement switches the local update(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_update_glosry.htm 'Glossary En
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_update_task_local.htm"
abapFile: "abapset_update_task_local.htm"
keywords: ["update", "do", "while", "if", "try", "data", "abapset", "task", "local"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20UPDATE%20TASK%20LOCAL%2C%20ABAPSET_UPDATE_TASK_LOCAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET UPDATE TASK LOCAL

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_update_task_shortref.htm)

Syntax

SET UPDATE TASK LOCAL.

Effect

This statement switches the [local update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_update_glosry.htm "Glossary Entry") on. In the local update, high priority update function modules that are registered in the current [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_glosry.htm "Glossary Entry") using [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_update.htm) are stored in the [ABAP memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry") instead of the VB... DDIC database tables. They are executed immediately in the current process and not in the update work process within the current [database LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), when the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) is executed. This statement has no effect on low-priority update function modules.

At the beginning of every SAP LUW, the local update function is deactivated. If required, it must be activated again before the first update function module is registered.

The local update is executed in a separate [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry") and not in a dedicated [update session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_session_glosry.htm "Glossary Entry").

System Fields

sy-subrc

Meaning

0

The local update function is activated.

1

The local update function has not been activated, because the program has already registered at least one update function module for the regular updating procedure in the current SAP LUW.

Hints

-   The local update function performs a synchronous update after the statement COMMIT WORK, independently of the addition AND WAIT.
-   If a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") occurs during the local update, all previous change requests are affected.
-   The [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/force\_local\_update\_task can be used to set the local update centrally for an AS ABAP. This should be done with great care, however, and while respecting all updates that can take place in the system. If not, the behavior of programs not intended for local updates may change. The performance of database locks may also be affected negatively.

Example

Activation of the [local update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_update_glosry.htm "Glossary Entry") for the subsequent registrations of [update function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") using the statement [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_update.htm).

SET UPDATE TASK LOCAL.
...
FINAL(values) = VALUE demo\_update\_tab(
  ( id = 'Y' col1 = 1111 col2 = 2111 col3 = 3111 col4 = 4111 ) ).
CALL FUNCTION 'DEMO\_UPDATE\_UPDATE' IN UPDATE TASK
  EXPORTING
    values = values.
...
COMMIT WORK.

Executable Examples

-   [SAP-LUW, UPDATE TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_update_task_abexa.htm)
-   The example [Demonstrating the SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_bundl_tech_abexa.htm) demonstrates the SAP LUW, covering the SET UPDATE TASK LOCAL statement.