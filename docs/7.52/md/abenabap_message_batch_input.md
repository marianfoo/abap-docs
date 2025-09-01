  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in batch input

In [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"), as in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)), messages may be converted to another message type depending on the point of calling, for example "I" to "S" during PBO or "W" to "E" during list processing.

A message is not displayed, but instead is written to the batch input log by the (converted) message type as follows:

-   Messages of type "S" are written to the log and the program is continued.

-   Message of types "I" and "W" are written to the log and the program is continued. The user input Enter, which is required for continuing the program, is generated automatically.

-   Messages of types "E" and "A" are written to the log. The current program is cancelled, whereupon a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") was executed in a message with the type "A". The status of the current [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is set to "processed with errors". Processing of the session is subsequently continued with the next program.

-   Messages of type "X" [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with associated [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). The status of the current [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is set to "processed with errors". Processing of the session is subsequently continued with the next program.