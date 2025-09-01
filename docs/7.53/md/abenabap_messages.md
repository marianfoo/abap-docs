  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) → 

Messages

Messages are [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") managed using the [message editor](javascript:call_link\('abenmessage_maintenance_glosry.htm'\) "Glossary Entry") tool in ABAP Workbench. Fundamentally, a message is a short text with its own ID that can be expanded using an optional long text. A message is available in its original language and in all languages into which it is translated.

The statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) is used to implement a message in a ABAP program. When the statement MESSAGE is used to send a message, a [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") must be specified. This type then defines the system behavior used when the message is sent.

-   In the basic form of the statement MESSAGE, the [behavior](javascript:call_link\('abenabap_messages_types.htm'\)) of a message is determined by the context in which the message was sent

-   The variant [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\)) associates messages as exception texts with [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)).

-   The variant [MESSAGE ... INTO](javascript:call_link\('abapmessage_into.htm'\)) assigns the short text of the message to a field.

The system interfaces [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) and [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) make it possible to associate objects with messages and display them using the statement MESSAGE. This is intended mainly for [exception texts](javascript:call_link\('abenexception_texts.htm'\)) of exception classes.

-   [Storing Messages](javascript:call_link\('abenabap_messages_storing.htm'\))

-   [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\))

-   [MESSAGE](javascript:call_link\('abapmessage.htm'\))

-   [System Interface for Messages](javascript:call_link\('abenmessage_interfaces.htm'\))

Programming Guideline

[Only use messages for error handling in classic dynpros and as exception texts](javascript:call_link\('abenmessages_guidl.htm'\) "Guideline")

Continue
[Storing Messages](javascript:call_link\('abenabap_messages_storing.htm'\))
[Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\))
[MESSAGE](javascript:call_link\('abapmessage.htm'\))
[System Interfaces for Messages](javascript:call_link\('abenmessage_interfaces.htm'\))