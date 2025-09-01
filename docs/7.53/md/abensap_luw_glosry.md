---
title: "SAP LUW"
description: |
  Related sequence of programming units, whose execution , for example in dialog steps(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_step_glosry.htm 'Glossary Entry') or in remote function calls(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenremote_function_
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm"
abapFile: "abensap_luw_glosry.htm"
keywords: ["update", "do", "if", "try", "data", "abensap", "luw", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

SAP LUW

Related sequence of programming units, whose execution , for example in [dialog steps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_step_glosry.htm "Glossary Entry") or in [remote function calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenremote_function_call_glosry.htm "Glossary Entry"), can be distributed across multiple [work processes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_process_glosry.htm "Glossary Entry"), but whose database changes are updated within a single [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). SAP LUWs are implemented by bundling techniques, in which programming units such as [update function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") or [subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_glosry.htm "Glossary Entry") are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") and completed by the [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm). Changes within one SAP LUW can be undone by the ABAP SQL statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprollback.htm).

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw.htm)