  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) → 

Messages

Messages are [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that are managed using the [message maintenance](javascript:call_link\('abenmessage_maintenance_glosry.htm'\) "Glossary Entry") tool in the ABAP Workbench. Fundamentally, a message is a short text with its own ID that can be expanded using an optional long text. A message exists in its original language and in all languages into which it is translated.

The statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) is used to use a message in a ABAP program. When the statement MESSAGE is used to send a message, a [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") must be specified. This type then controls the system behavior when the message is sent.

-   In the basic form of the statement MESSAGE, the [behavior](javascript:call_link\('abenabap_messages_types.htm'\)) of a message depends on the context in which the message was sent
-   The variant [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\)) associates messages as exception texts with [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)).
-   The variant [MESSAGE ... INTO](javascript:call_link\('abapmessage_into.htm'\)) assigns the short text of the message to a field.

The system interfaces [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) and [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) make it possible to associate objects with messages and output them using the statement MESSAGE. This is intended mainly for [exception texts](javascript:call_link\('abenexception_texts.htm'\)) of exception classes.

-   [Messages - Maintenance](javascript:call_link\('abenabap_messages_storing.htm'\))
-   [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\))
-   [MESSAGE](javascript:call_link\('abapmessage.htm'\))
-   [Messages - System Interfaces](javascript:call_link\('abenmessage_interfaces.htm'\))

Programming Guideline

[Only use messages for error handling in classic dynpros and as exception texts](javascript:call_link\('abenmessages_guidl.htm'\) "Guideline")

Continue
[Messages - Maintenance](javascript:call_link\('abenabap_messages_storing.htm'\))
[Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\))
[MESSAGE](javascript:call_link\('abapmessage.htm'\))
[Messages - System Interfaces](javascript:call_link\('abenmessage_interfaces.htm'\))