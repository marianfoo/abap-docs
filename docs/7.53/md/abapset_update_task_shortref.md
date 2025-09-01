---
title: "SET UPDATE TASK - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_update_task_local.htm) Syntax SET UPDATE TASK LOCAL. Effect Detemines that update function modules(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm 'Glossary Entry') regis
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_update_task_shortref.htm"
abapFile: "abapset_update_task_shortref.htm"
keywords: ["update", "do", "try", "data", "abapset", "task", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SET UPDATE TASK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_update_task_local.htm)

Syntax

SET UPDATE TASK LOCAL.

Effect

Detemines that [update function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered with CALL FUNCTION ... IN UPDATE TASK that have high priority are executed immediately in the current [work process](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_process_glosry.htm "Glossary Entry") and within the current [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry") when the COMMIT WORK statement is executed.