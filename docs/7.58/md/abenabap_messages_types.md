  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Behavior%2C%20ABENABAP_MESSAGES_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Behavior

When a [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") is sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm), it must be classified with a single-character [message type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_type_glosry.htm "Glossary Entry"). For the basic form of the statement MESSAGE, the message type defines how the message is displayed and determines the subsequent program flow. Valid message types are A, E, I, S, W, and X. The abbreviations stand for termination (abort) message, error message, information message, status message, warning, and exit message.

The system behavior after sending a message of a particular type with the basic form of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm), that is, without the additions [RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) or [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_into.htm), is context-dependent:

-   [Messages in list processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_list_processing.htm)
-   [Messages in Dialog Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_dialog.htm)
-   [Messages in Control Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_control.htm)
-   [Messages in Batch Input](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_batch_input.htm)
-   [Messages in Background Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_batch_job.htm)
-   [Messages in Updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_update.htm)
-   [Messages in Conversion Exits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_exit.htm)
-   [Messages in Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_procedure.htm)
-   [Messages in RFC Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_rfc.htm)
-   [Messages in ICF Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_http_server.htm)
-   [Messages in APC Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_apc_server.htm)
-   [Messages in ABAP daemon Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_daemon.htm)

Hints

-   Messages that are sent with the basic form of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) are mainly intended for use in dialog processing for the PAI event. Therefore, messages of type E and W allow an error dialog to be used in connection with the statement [FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpfield.htm) of the [dynpro structure logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_field_messages.htm). Therefore messages of type E or W, in particular, should never be used in other contexts.
-   In list processing, warnings are always turned into error messages before being processed further, regardless of any other context.
-   An alternative to creating [runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_error_glosry.htm "Glossary Entry") with messages of type X are [assertions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertion_glosry.htm "Glossary Entry") and the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) and [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm).

Continue
[Messages - List Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_list_processing.htm)
[Messages - Dialog Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_dialog.htm)
[Messages - Control Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_control.htm)
[Messages - Batch Input](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_batch_input.htm)
[Messages - Background Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_batch_job.htm)
[Messages - Updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_update.htm)
[Messages - Conversion Exits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_exit.htm)
[Messages - Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_procedure.htm)
[Messages - RFC Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_rfc.htm)
[Messages - ICF Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_http_server.htm)
[Messages - APC Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_apc_server.htm)
[Messages - ABAP Daemon Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_daemon.htm)