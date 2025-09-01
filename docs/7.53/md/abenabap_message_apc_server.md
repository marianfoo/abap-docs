  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in APC Processing

Messages sent during [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry") (namely when a Web socket query or TCP query is handled by an [APC handler](javascript:call_link\('abenapc.htm'\))) behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause the [APC session](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.