---
title: "RFC - System Fields"
description: |
  RFC initializes the system field sy-subrc is initialized in the calling program or sets it to the value specified in exception handling, as with every function module call. In addition, each time a function module is called remotely, the system fields for messages (sy-msgid, sy-msgno, sy-msgty, and
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_system_fields.htm"
abapFile: "abenrfc_system_fields.htm"
keywords: ["do", "if", "class", "data", "types", "exception-handling", "abenrfc", "system", "fields"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - System Fields, ABENRFC_SYSTEM_FIELDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

RFC - System Fields

RFC initializes the system field sy-subrc is initialized in the calling program or sets it to the value specified in exception handling, as with every function module call. In addition, each time a function module is called remotely, the system fields for messages (sy-msgid, sy-msgno, sy-msgty, and sy-msgv1 through sy-msgv4) are initialized in the calling program. If the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) is used to send a [message of the type A, E, or X](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_rfc.htm) when a remotely called function module is executed, the classic exception SYSTEM\_FAILURE is usually raised in the calling program. When the exception is raised, the system fields for messages of both types of [exception handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_exception.htm) are filled with the properties of the message.