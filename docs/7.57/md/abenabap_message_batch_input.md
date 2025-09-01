  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - Batch Input, ABENABAP_MESSAGE_BATCH_INPUT, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - Batch Input

As in [dialog processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_dialog.htm), messages in [batch input](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_glosry.htm "Glossary Entry") can be converted to another message type depending on where they are called, for example from I to S in PBO processing or from W to E in list processing.

No message is displayed and instead is written to the batch input log, in accordance with the (converted) message type as follows:

-   Messages of type S are written to the log and the program continues.
-   Messages of type I and W are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type E and A are written to the log. The current program is terminated, and a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") is executed for messages with the type A. The status of the current [batch input session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.
-   Messages of type X [runtime error](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm "Glossary Entry") with associated [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The status of the current [batch input session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.