---
title: "Messages - Batch Input"
description: |
  As in dialog processing(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_dialog.htm), messages in batch input(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_input_glosry.htm 'Glossary Entry') can be converted to another message type depending on w
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_batch_input.htm"
abapFile: "abenabap_message_batch_input.htm"
keywords: ["do", "try", "data", "types", "abenabap", "message", "batch", "input"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) → 

Messages - Batch Input

As in [dialog processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_dialog.htm), messages in [batch input](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_input_glosry.htm "Glossary Entry") can be converted to another message type depending on where they are called, for example from I to S in PBO processing or from W to E in list processing.

No message is displayed and instead is written to the batch input log, in accordance with the (converted) message type as follows:

-   Messages of type S are written to the log and the program continues.
-   Messages of type I and W are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type E and A are written to the log. The current program is terminated, and a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") is executed for messages with the type A. The status of the current [batch input session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.
-   Messages of type X [runtime error](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_glosry.htm "Glossary Entry") with associated [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The status of the current [batch input session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.