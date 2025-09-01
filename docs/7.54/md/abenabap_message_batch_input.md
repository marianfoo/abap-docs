  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in Batch Input

As in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)), messages in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry") can be converted to another message type depending on where they are called, for example from "I" to "S" in PBO processing or from "W" to "E" in list processing.

No message is displayed and instead is written to the batch input log, in accordance with the (updated) message type as follows:

-   Messages of type "S" are written to the log and the program continues.

-   Messages of type "I" and "W" are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.

-   Messages of type "E" and "A" are written to the log. The current program is canceled and a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") is executed in the case of messages with the type "A". The status of the current [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.

-   Messages of type "X" [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with associated [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). The status of the current [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.