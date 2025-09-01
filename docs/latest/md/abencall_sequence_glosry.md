---
title: "call_sequence_glosry"
description: |
  call_sequence_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_sequence_glosry.htm"
abapFile: "abencall_sequence_glosry.htm"
keywords: ["do", "if", "try", "abencall", "sequence", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20call%20sequence%2C%20ABENCALL_SEQUENCE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

call sequence

A call sequence is the set of programs whose [internal sessions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") are loaded jointly into an [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry") by a sequence of calls using [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) or [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm). It is possible to return to the preceding program in the call sequence from every program. The first program in a call sequence is the [top level transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentop_level_transaction_glosry.htm "Glossary Entry"). The programs of a call sequence have collective access to the [ABAP memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry"). A call sequence can be exited completely using the statement [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_to_transaction.htm).

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm)