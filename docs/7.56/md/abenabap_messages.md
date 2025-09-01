---
title: "Messages"
description: |
  Messages are repository objects(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm 'Glossary Entry') that are managed using the message maintenance(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_maintenance_glosry.htm 'Glossary Ent
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm"
abapFile: "abenabap_messages.htm"
keywords: ["do", "if", "try", "class", "types", "abenabap", "messages"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) → 

Messages

Messages are [repository objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are managed using the [message maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_maintenance_glosry.htm "Glossary Entry") tool in the ABAP Workbench. Fundamentally, a message is a short text with its own ID that can be expanded using an optional long text. A message exists in its original language and in all languages into which it is translated.

The statement [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm) is used to use a message in a ABAP program. When the statement MESSAGE is used to send a message, a [message type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_type_glosry.htm "Glossary Entry") must be specified. This type then controls the system behavior when the message is sent.

-   In the basic form of the statement MESSAGE, the [behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) of a message depends on the context in which the message was sent
-   The variant [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm) associates messages as exception texts with [non-class-based exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions_non_class.htm).
-   The variant [MESSAGE ... INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_into.htm) assigns the short text of the message to a field.

The system interfaces [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_message.htm) and [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm) make it possible to associate objects with messages and output them using the statement MESSAGE. This is intended mainly for [exception texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts.htm) of exception classes.

-   [Messages - Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_storing.htm)
-   [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm)
-   [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm)
-   [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_interfaces.htm)

Programming Guideline

[Only use messages for error handling in classic dynpros and as exception texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessages_guidl.htm "Guideline")

Continue
[Messages - Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_storing.htm)
[Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm)
[MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm)
[Messages - System Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_interfaces.htm)