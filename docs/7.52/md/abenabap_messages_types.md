---
title: "Behavior of Messages"
description: |
  When a message(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm 'Glossary Entry') is sent using the statement MESSAGE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), it must be classified with a one-character message type(https://he
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages_types.htm"
abapFile: "abenabap_messages_types.htm"
keywords: ["update", "do", "if", "try", "class", "types", "abenabap", "messages"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) → 

Behavior of Messages

When a [message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry") is sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), it must be classified with a one-character [message type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_type_glosry.htm "Glossary Entry"). For the basic form of the statement MESSAGE, the message type defines how the message is displayed and determines the subsequent program flow. Valid message types are "A", "E", "I", "S", "W", and "X". These stand for termination (abort) message, error message, information message, status message, warning, and exit message.

The system behavior after a message of a particular type with the basic form of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), i.e. without the additions [RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) or [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_into.htm), is context-dependent:

-   [Messages in list processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_list_processing.htm)

-   [Messages in Dialog Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_dialog.htm)

-   [Messages in Control Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_control.htm)

-   [Messages in Batch Input](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_batch_input.htm)

-   [Messages in Background Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_batch_job.htm)

-   [Messages in Updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_update.htm)

-   [Messages in Conversion Routines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_exit.htm)

-   [Messages in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_procedure.htm)

-   [Messages in RFC Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_rfc.htm)

-   [Messages in ICF Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_http_server.htm)

-   [Messages in APC Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_apc_server.htm)

-   [Messages in ABAP Daemon Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_daemon.htm)

Notes

-   Messages that are sent with the basic form of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) are mainly intended for use in dialog processing for the PAI event. Here, messages of type "E" and "W" permit an [error dialog](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_messages.htm) to be used in connection with the statement [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) of the dynpro structure logic. Therefore messages of type "E" or "W", in particular, should never be used in other contexts.

-   In list processing, warnings are always turned into error messages before being processed further, regardless of any other context.

-   [Assertions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertion_glosry.htm "Glossary Entry") can be used as an alternative to creating runtime errors with messages of type "X".

Continue
[Messages in List Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_list_processing.htm)
[Messages in Dialog Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_dialog.htm)
[Messages in control processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_control.htm)
[Messages in batch input](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_batch_input.htm)
[Messages in Background Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_batch_job.htm)
[Messages in Updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_update.htm)
[Messages in conversion routines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_exit.htm)
[Messages in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_procedure.htm)
[Messages in RFC Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_rfc.htm)
[Messages in ICF Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_http_server.htm)
[Messages in APC Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_apc_server.htm)
[Messages in ABAP Daemon Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_daemon.htm)