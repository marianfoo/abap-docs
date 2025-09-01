  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages, ABENABAP_MESSAGES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

Messages

Messages are [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that are managed using a [message maintenance](javascript:call_link\('abenmessage_maintenance_glosry.htm'\) "Glossary Entry") tool. Fundamentally, a message is a short text that can be expanded using an optional long text. A message is identified with the following key:

-   A 20-character message class
-   A 3-digit message number

A message is created with an original language and can be translated to other languages.

The statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) is the basic statement for working with messages in an ABAP program. When the statement MESSAGE is used to send a message, the message key and a [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") must be specified. Optionally, placeholders in the message text can be filled with values.

The message type defines the system behavior when the message is sent.

-   In the basic form of the statement MESSAGE, the [behavior](javascript:call_link\('abenabap_messages_types.htm'\)) of a message depends on the context in which the message was sent
-   The variant [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\)) raises a [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) and uses the message as its exception text.
-   The variant [MESSAGE ... INTO](javascript:call_link\('abapmessage_into.htm'\)) assigns the short text of the message to a field.

The system interfaces [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) and [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) make it possible to associate objects with messages and send them using the statement MESSAGE. This is intended mainly for [exception texts](javascript:call_link\('abenexception_texts.htm'\)) of exception classes.

After sending a message, a set of system fields contain the properties of the message, namely the message type the message key and the values for the placeholders.. The DDIC structure SYMSG contains components that allows this information to be stored in one structured data object.

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