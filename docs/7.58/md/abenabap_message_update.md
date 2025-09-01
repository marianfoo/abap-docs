  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Updates%2C%20ABENABAP_MESSAGE_UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Updates

During [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), the behavior of messages depends on the work process.

-   During [synchronous updates](javascript:call_link\('abensynchronous_update_glosry.htm'\) "Glossary Entry") and [asynchronous updates](javascript:call_link\('abenasynchronous_update_glosry.htm'\) "Glossary Entry") in an update work process in an [update session](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry"), all messages except type S cause the update to terminate without creating a runtime error. The update work process performs a database rollback, enters appropriate comments in the associated database tables VB..., and notifies the user whose program created the entries by SAPmail.
-   During [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry"), all messages apart from type S and X are converted to messages of type A and these behave in the same way as in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)), which means they lead to a termination and a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). Messages of type S and X are also handled in the same way as in dialog processing.

Hints

-   In exceptional cases, an update work process may be connected to a dialog (for example, during debugging). Messages then behave as in local updates.
-   In updates, type A messages cannot be caught using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) in function module calls, since here the statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) is executed implicitly, and this is not allowed in updates. Therefore, the runtime error MESSAGE\_ROLLBACK\_IN\_POSTING is produced when type A messages are caught using error\_message. Messages of types I, W, and E, on the other hand, can be caught.
-   For more information, see [Forbidden Statements in Updates](javascript:call_link\('abendb_commit_during_update.htm'\)).