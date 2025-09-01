  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages_types.htm) → 

Messages in batch input

In [batch input](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_input_glosry.htm "Glossary Entry"), as in [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_dialog.htm), messages may be converted to another message type depending on the point of calling, for example "I" to "S" during PBO or "W" to "E" during list processing.

A message is not displayed, but instead is written to the batch input log by the (converted) message type as follows:

-   Messages of type "S" are written to the log and the program is continued.

-   Message of types "I" and "W" are written to the log and the program is continued. The user input Enter, which is required for continuing the program, is generated automatically.

-   Messages of types "E" and "A" are written to the log. The current program is cancelled, whereupon a [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") was executed in a message with the type "A". The status of the current [batch input session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is subsequently continued with the next program.

-   Messages of type "X" [runtime error](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenruntime_error_glosry.htm "Glossary Entry") with associated [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The status of the current [batch input session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is subsequently continued with the next program.