---
title: "Messages"
description: |
  Messages are repository objects(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm 'Glossary Entry') that are managed using a message maintenance(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_maintenance_glosry.htm 'Glos
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm"
abapFile: "abenabap_messages.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenabap", "messages"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%2C%20ABENABAP_MESSAGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages

Messages are [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are managed using a [message maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_maintenance_glosry.htm "Glossary Entry") tool. Fundamentally, a message is a short text that can be expanded using an optional long text. A message is identified with the following key:

-   A 20-character message class
-   A 3-digit message number

A message is created with an original language and can be translated to other languages.

The statement [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm) is the basic statement for working with messages in an ABAP program. When the statement MESSAGE is used to send a message, the message key and a [message type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_type_glosry.htm "Glossary Entry") must be specified. Optionally, placeholders in the message text can be filled with values.

The message type defines the system behavior when the message is sent.

-   In the basic form of the statement MESSAGE, the [behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm) of a message depends on the context in which the message was sent
-   The variant [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) raises a [non-class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm) and uses the message as its exception text.
-   The variant [MESSAGE ... INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_into.htm) assigns the short text of the message to a field.

The system interfaces [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm) and [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) make it possible to associate objects with messages and send them using the statement MESSAGE. This is intended mainly for [exception texts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_texts.htm) of exception classes.

After sending a message, a set of system fields contain the properties of the message, namely the message type the message key and the values for the placeholders.. The DDIC structure SYMSG contains components that allows this information to be stored in one structured data object.

-   [Messages - Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_storing.htm)
-   [Messages - Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm)
-   [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm)
-   [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm)

Programming Guideline

[Only use messages for error handling in classic dynpros and as exception texts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessages_guidl.htm "Guideline")

Continue
[Messages - Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_storing.htm)
[Messages - Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm)
[MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm)
[Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm)