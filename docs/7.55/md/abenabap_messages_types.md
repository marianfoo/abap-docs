  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) → 

Messages - Behavior

When a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent using the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)), it must be classified with a one-character [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry"). For the basic form of the statement MESSAGE, the message type defines how the message is displayed and determines the subsequent program flow. Valid message types are "A", "E", "I", "S", "W", and "X". These stand for termination (abort) message, error message, information message, status message, warning, and exit message.

The system behavior after a message of a particular type with the basic form of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)), i.e. without the additions [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) or [INTO](javascript:call_link\('abapmessage_into.htm'\)), is context-dependent:

-   [Messages in list processing](javascript:call_link\('abenabap_message_list_processing.htm'\))

-   [Messages in Dialog Processing](javascript:call_link\('abenabap_message_dialog.htm'\))

-   [Messages in Control Processing](javascript:call_link\('abenabap_message_control.htm'\))

-   [Messages in Batch Input](javascript:call_link\('abenabap_message_batch_input.htm'\))

-   [Messages in Background Processing](javascript:call_link\('abenabap_message_batch_job.htm'\))

-   [Messages in Updates](javascript:call_link\('abenabap_message_update.htm'\))

-   [Messages in Conversion Routines](javascript:call_link\('abenabap_message_exit.htm'\))

-   [Messages in Procedures](javascript:call_link\('abenabap_message_procedure.htm'\))

-   [Messages in RFC Processing](javascript:call_link\('abenabap_message_rfc.htm'\))

-   [Messages in ICF Processing](javascript:call_link\('abenabap_message_http_server.htm'\))

-   [Messages in APC Processing](javascript:call_link\('abenabap_message_apc_server.htm'\))

-   [Messages in ABAP Daemon Processing](javascript:call_link\('abenabap_message_daemon.htm'\))

Hints

-   Messages that are sent with the basic form of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) are mainly intended for use in dialog processing for the PAI event. Here, messages of type "E" and "W" allow an error dialog to be used in connection with the statement [FIELD](javascript:call_link\('dynpfield.htm'\)) of the [dynpro structure logic](javascript:call_link\('abendynp_field_messages.htm'\)). Therefore messages of type "E" or "W", in particular, should never be used in other contexts.

-   In list processing, warnings are always turned into error messages before being processed further, regardless of any other context.

-   An alternative to creating [runtime errors](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with messages of type "X" are [assertions](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry") and the language elements [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) and [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)).

Continue
[Messages - List Processing](javascript:call_link\('abenabap_message_list_processing.htm'\))
[Messages - Dialog Processing](javascript:call_link\('abenabap_message_dialog.htm'\))
[Messages - Control Processing](javascript:call_link\('abenabap_message_control.htm'\))
[Messages - Batch Input](javascript:call_link\('abenabap_message_batch_input.htm'\))
[Messages - Background Processing](javascript:call_link\('abenabap_message_batch_job.htm'\))
[Messages - Updates](javascript:call_link\('abenabap_message_update.htm'\))
[Messages - Conversion Routines](javascript:call_link\('abenabap_message_exit.htm'\))
[Messages - Procedures](javascript:call_link\('abenabap_message_procedure.htm'\))
[Messages - RFC Processing](javascript:call_link\('abenabap_message_rfc.htm'\))
[Messages - ICF Processing](javascript:call_link\('abenabap_message_http_server.htm'\))
[Messages - APC Processing](javascript:call_link\('abenabap_message_apc_server.htm'\))
[Messages - ABAP Daemon Processing](javascript:call_link\('abenabap_message_daemon.htm'\))