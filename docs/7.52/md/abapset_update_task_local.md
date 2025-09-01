---
title: "SET UPDATE TASK LOCAL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_update_task_shortref.htm) Syntax SET UPDATE TASK LOCAL. Effect This statement switches on the local update(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm 'Glossary Entry').
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_update_task_local.htm"
abapFile: "abapset_update_task_local.htm"
keywords: ["update", "do", "if", "try", "data", "abapset", "task", "local"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw.htm) → 

SET UPDATE TASK LOCAL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_update_task_shortref.htm)

Syntax

SET UPDATE TASK LOCAL.

Effect

This statement switches on the [local update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm "Glossary Entry"). In the local update, high priority update function modules - registered during the current [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry") using [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm) - are registered in the [ABAP memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry") instead of the VB... database tables. In addition, it specifies that the current work process and not the update work process run these modules during the current [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), when the [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) statement is executed. This statement is ignored by update function modules with low priority.

At the beginning of every SAP LUW, the local update function is deactivated. If required, it must be activated again before the first update function module is registered.

The local update is executed in a separate [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current [ABAP session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") and not in a dedicated [update session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry").

System Fields

sy-subrc

Meaning

0

The local update function is activated.

1

The local update function has not been activated, because the program has already registered at least one update function module for the normal updating procedure in the current SAP LUW.

Notes

-   The local update function performs a synchronous update after the COMMIT WORK statement, independently of the addition AND WAIT.
    
-   If a [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") occurs during the local update, all previous change requests are affected.
    
-   The [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/force\_local\_update\_task can be used to set the local update centrally for an AS ABAP.
    

Example

Activates [local update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm "Glossary Entry") for the subsequent registrations of [update function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") using the statement [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm).

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

[SAP-LUW, UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_update_task_abexa.htm)