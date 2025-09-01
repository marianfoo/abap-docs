  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20APC%20Processing%2C%20ABENABAP_MESSAGE_APC_SERVER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - APC Processing

Messages sent during [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry"), that is, when a Web socket query or TCP query is handled by an [APC handler](javascript:call_link\('abenapc.htm'\)), behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause the [APC session](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.