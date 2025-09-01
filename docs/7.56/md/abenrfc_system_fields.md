  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_intro_oview.htm) → 

RFC - System Fields

RFC initializes the system field sy-subrc is initialized in the calling program or sets it to the value specified in exception handling, as with every function module call. In addition, each time a function module is called remotely, the system fields for messages (sy-msgid, sy-msgno, sy-msgty, and sy-msgv1 through sy-msgv4) are initialized in the calling program. If the statement [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm) is used to send a [message of the type A, E, or X](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_rfc.htm) when a remotely called function module is executed, the classic exception SYSTEM\_FAILURE is usually raised in the calling program. When the exception is raised, the system fields for messages of both types of [exception handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_exception.htm) are filled with the properties of the message.