  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

RFC System Fields

When an RFC is made, the system field sy-subrc is initialized in the calling program, or set to the value that is specified in exception handling, just like whenever a function module is called. In addition, every time a function module is called remotely, the system fields for messages (sy-msgid, sy-msgno, sy-msgty, and sy-msgv1 to sy-msgv4) are initialized in the calling program. If the [MESSAGE](javascript:call_link\('abapmessage.htm'\)) statement is used to send a [message of the type "A", "E", or "X"](javascript:call_link\('abenabap_message_rfc.htm'\)) when a remote function module is executed, the classic exception SYSTEM\_FAILURE is raised in the calling program. When the exception is raised, the system fields for messages of both types of [exception handling](javascript:call_link\('abenrfc_exception.htm'\)) are supplied with the properties of the message.