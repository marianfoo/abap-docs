  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20ABAP%20Daemon%20Processing%2C%20ABENABAP_MESSAGE_DAEMON%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - ABAP Daemon Processing

Messages sent in [ABAP daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry"), that is, when [ABAP daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") methods are executed, behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X terminate the [ABAP daemon session](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry") and restart the [ABAP daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") in a new user session. After the restart, the [ABAP daemon event](javascript:call_link\('abenabap_daemon_event_glosry.htm'\) "Glossary Entry") ON\_ERROR is raised.

Procedures called in an ABAP daemon are executed in the ABAP daemon context and their messages behave accordingly.