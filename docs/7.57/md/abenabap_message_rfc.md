  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - RFC Processing, ABENABAP_MESSAGE_RFC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Messages - RFC Processing

As long as no list or dialog processing takes place during [RFC processing](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), messages behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause processing to terminated, followed by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)) or [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) takes place during RFC processing, any messages sent behave as described there.

Hint

If a message of type E is sent in a remote-enabled function module, it should be noted that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.