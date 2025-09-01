---
title: "call_sequence_glosry"
description: |
  call_sequence_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_sequence_glosry.htm"
abapFile: "abencall_sequence_glosry.htm"
keywords: ["do", "try", "abencall", "sequence", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

call sequence

A call sequence is the set of programs whose [internal sessions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") are loaded jointly into an [ABAP session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_session_glosry.htm "Glossary Entry") by a sequence of calls using [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm) or [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm). It is possible to return to the preceding program in the call sequence from every program. The first program in a call sequence is the [top level transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentop_level_transaction_glosry.htm "Glossary Entry"). The programs of a call sequence have collective access to the [ABAP memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_memory_glosry.htm "Glossary Entry"). A call sequence can be exited completely using the statement [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm).

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_call.htm)