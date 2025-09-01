  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in ABAP Daemon Processing

Messages sent in [ABAP Daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry") (namely when [ABAP Daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") methods are executed) behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" terminate the [ABAP Daemon session](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry") and restart the [ABAP Daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") in a new user session. After the restart, the [ABAP Daemon event](javascript:call_link\('abenabap_daemon_event_glosry.htm'\) "Glossary Entry") ON\_ERROR is raised.

Procedures called in an ABAP Daemon are executed in the ABAP Daemon context and their messages behave accordingly.