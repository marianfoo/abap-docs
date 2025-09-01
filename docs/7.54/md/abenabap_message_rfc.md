  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in RFC Processing

If list processing and dialog processing do not take place in [RFC processing](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), messages behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause processing to terminated, followed by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)) or [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) takes place during RFC processing, any messages sent behave as described there.

Note

If a message of type "E" is sent in a remote-enabled function module, note that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.