---
title: "SAP LUW"
description: |
  Related sequence of programming units, whose execution, for example in dialog steps(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_step_glosry.htm 'Glossary Entry') or in remote function calls(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_function_c
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm"
abapFile: "abensap_luw_glosry.htm"
keywords: ["update", "do", "if", "try", "data", "abensap", "luw", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

SAP LUW

Related sequence of programming units, whose execution, for example in [dialog steps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_step_glosry.htm "Glossary Entry") or in [remote function calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_function_call_glosry.htm "Glossary Entry"), can be distributed across multiple [work processes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwork_process_glosry.htm "Glossary Entry"), but whose database changes are updated within a single [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). SAP LUWs are implemented by bundling techniques, in which programming units such as [update function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") or [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry") are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") and completed by the [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm). Changes within one SAP LUW can be undone by the open SQL statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm).

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw.htm)