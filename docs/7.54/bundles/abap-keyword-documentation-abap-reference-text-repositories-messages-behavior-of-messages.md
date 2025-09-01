# ABAP Keyword Documentation / ABAP − Reference / Text Repositories / Messages / Behavior of Messages

Included pages: 13


### abenabap_messages_types.htm

---
title: "Behavior of Messages"
description: |
  When a message(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm 'Glossary Entry') is sent using the statement MESSAGE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm), it must be classified with a one-character message type(https://he
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm"
abapFile: "abenabap_messages_types.htm"
keywords: ["update", "do", "if", "try", "class", "types", "abenabap", "messages"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) → 

Behavior of Messages

When a [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") is sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm), it must be classified with a one-character [message type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_type_glosry.htm "Glossary Entry"). For the basic form of the statement MESSAGE, the message type defines how the message is displayed and determines the subsequent program flow. Valid message types are "A", "E", "I", "S", "W", and "X". These stand for termination (abort) message, error message, information message, status message, warning, and exit message.

The system behavior after a message of a particular type with the basic form of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm), i.e. without the additions [RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) or [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_into.htm), is context-dependent:

-   [Messages in list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm)

-   [Messages in Dialog Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm)

-   [Messages in Control Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_control.htm)

-   [Messages in Batch Input](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_input.htm)

-   [Messages in Background Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_job.htm)

-   [Messages in Updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_update.htm)

-   [Messages in Conversion Routines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_exit.htm)

-   [Messages in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_procedure.htm)

-   [Messages in RFC Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_rfc.htm)

-   [Messages in ICF Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_http_server.htm)

-   [Messages in APC Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_apc_server.htm)

-   [Messages in ABAP Daemon Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_daemon.htm)

Notes

-   Messages that are sent with the basic form of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) are mainly intended for use in dialog processing for the PAI event. Here, messages of type "E" and "W" permit an error dialog to be used in connection with the statement [FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield.htm) of the [dynpro structure logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynp_field_messages.htm). Therefore messages of type "E" or "W", in particular, should never be used in other contexts.

-   In list processing, warnings are always turned into error messages before being processed further, regardless of any other context.

-   An alternative to creating [runtime errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") with messages of type “X” are [assertions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassertion_glosry.htm "Glossary Entry") and the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_shortdump.htm) and [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm).

Continue
[Messages in List Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm)
[Messages in Dialog Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm)
[Messages in Control Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_control.htm)
[Messages in Batch Input](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_input.htm)
[Messages in Background Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_job.htm)
[Messages in Updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_update.htm)
[Messages in conversion routines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_exit.htm)
[Messages in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_procedure.htm)
[Messages in RFC Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_rfc.htm)
[Messages in ICF Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_http_server.htm)
[Messages in APC Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_apc_server.htm)
[Messages in ABAP Daemon Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_daemon.htm)


### abenabap_message_list_processing.htm

---
title: "Messages in List Processing"
description: |
  In list processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_processing_glosry.htm 'Glossary Entry'), a message of type 'W' is always converted to type 'E' before further context-dependent handling takes place. The message is then handled in accordance with the other cont
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm"
abapFile: "abenabap_message_list_processing.htm"
keywords: ["select", "do", "try", "types", "abenabap", "message", "list", "processing"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in List Processing

In [list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_processing_glosry.htm "Glossary Entry"), a message of type "W" is always converted to type "E" before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

-   In all executable programs called using [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm), as long as no dynpro sequence called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm) is being processed there.

-   After list processing is called explicitly using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_list-processing.htm) in a dynpro sequence. The statement [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_list-processing.htm) switches list processing off during a dynpro sequence.

In programs called using SUBMIT, list processing is active, therefore, apart from when actual [list events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_event_glosry.htm "Glossary Entry") are being handled (even when [reporting events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry") are being handled). This is especially true for the standard event [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstart-of-selection.htm).

Note

[Background jobs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_job.htm) are always started using [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_via_job.htm), which means that list processing is usually also active at the same time.


### abenabap_message_dialog.htm

---
title: "Messages in Dialog Processing"
description: |
  The behavior of messages (regardless of message type) sent when programs are executed in dialog processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_processing_glosry.htm 'Glossary Entry') (in accordance with the dialog modules or event blocks in which the messages are
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm"
abapFile: "abenabap_message_dialog.htm"
keywords: ["select", "delete", "do", "if", "try", "data", "types", "abenabap", "message", "dialog"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Dialog Processing

The behavior of messages (regardless of message type) sent when programs are executed in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_processing_glosry.htm "Glossary Entry") (in accordance with the dialog modules or event blocks in which the messages are sent) is displayed in the tables below:

Processing Block/Message Type

  A  

  E  

  I  

  S  

  W  

  X  

[MODULE INPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm) after [PROCESS AFTER INPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpprocess.htm)

  1

  2

  3

  4

  5

  6

[MODULE INPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm) after [PROCESS ON HELP-REQUEST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpprocess.htm)

  1

  7

  3

  4

  7

  6

[MODULE INPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm) after [PROCESS ON VALUE-REQUEST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpprocess.htm)

  1

  7

  3

  4

  7

  6

[MODULE INPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm) after [MODULE AT EXIT-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpmodule.htm)

  1

  7

  3

  4

  7

  6

[AT SELECTION-SCREEN ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen.htm)

  1

  8

  3

  4

  9

  6

[AT SELECTION-SCREEN ON HELP-REQUEST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen_events.htm)

  1

  7

  3

  4

  7

  6

[AT SELECTION-SCREEN ON VALUE-REQUEST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen_events.htm)

  1

  7

  3

  4

  7

  6

[AT SELECTION-SCREEN ON EXIT-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen_events.htm)

  1

  7

  3

  4

  7

  6

[AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_line-selection.htm)

  1

  10

  3

  4

  E

  6

[AT PFnn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_pfnn.htm)

  1

  10

  3

  4

  E

  6

[AT USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_user-command.htm)

  1

  10

  3

  4

  E

  6

[INITIALIZATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinitialization.htm)

  1

  A

  S

  4

  S

  6

[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstart-of-selection.htm)

  1

  11

  3

  4

  E

  6

[GET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget-.htm)

  1

  11

  3

  4

  E

  6

[END-OF-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-selection.htm)

  1

  11

  3

  4

  E

  6

[TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptop-of-page.htm)

  1

  11

  3

  4

  E

  6

[END-OF-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-page.htm)

  1

  11

  3

  4

  E

  6

[TOP-OF-PAGE DURING ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptop-of-page.htm)

  1

  10

  3

  4

  E

  6

[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm)

  1

  12

  S

  4

  S

  6

[MODULE OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodule.htm) after [PROCESS BEFORE OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpprocess.htm)

  1

  A

  S

  4

  S

  6

[AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen_events.htm)

  1

  A

  S

  4

  S

  6

If a different message type is specified under a message type "A", "E", "I", "S", "W", and "X", the original message type is converted to this type and the message is sent in accordance with this type. The conversion of the message type "W" to "E" when handling [reporting events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry") and [list events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_event_glosry.htm "Glossary Entry") depends on the general behavior of [messages in list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm). From a technical perspective, an event block [INITIALIZATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinitialization.htm) is executed during [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") processing.

A number under a message type means that processing is to take place as described below:

1.  The message is displayed in a dialog box. After the dialog box is exited, the program is terminated and processing returns to the calling position of the first program of the current [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry"). All [internal sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the call sequence are deleted and a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") is performed.
2.  [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") processing is terminated and returns to the current [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") without raising the event [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry"). The message is displayed in the status bar of the current GUI window by default. If the error message is sent in a dialog module that is called in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") outside a process chain defined with [CHAIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpchain.htm) following a [FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield.htm) statement, the input field specified after FIELD is the only field that is ready for input. If the error message is sent in a dialog module that is called within a process chain defined with CHAIN, all fields specified after FIELD in the process chain are ready for input. After a user action, PAI processing is continued at the point described under [Handling of Messages for the PAI Event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynp_field_messages.htm).
3.  The message is displayed in a dialog box. After the dialog box is exited, the program is resumed after the statement MESSAGE.
4.  The program is continued after the statement MESSAGE. The message is displayed by default in the screen of the [next dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennext_dynpro_glosry.htm "Glossary Entry") in the status bar of the current GUI window.
5.  PAI processing is terminated and returns to the current screen without raising the event PBO. The message is displayed in the status bar of the current GUI window by default. The fields described under point 2 are ready for input. If the user confirms the current field contents with the Enter key without entering a new value, the program is resumed after the statement MESSAGE. If the user has entered one or more new values, processing is resumed after a user action as described under point 2. User actions associated with function codes that set the [OK field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenok_field_glosry.htm "Glossary Entry") also count as new values here.
6.  The program is terminated, a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") is executed, and the runtime error MESSAGE\_TYPE\_X is raised. The [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error is displayed, which contains the ID, the short text, and the long text of the message.
7.  The sending of error messages is not permitted in [POH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpov_glosry.htm "Glossary Entry") processing and the handling of a function code of type "E". This raises a non-handleable exception.
8.  [Selection screen processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") is interrupted and the system returns to the current selection screen with raising the event AT SELECTION-SCREEN OUTPUT. The message is displayed in the status bar of the current GUI window by default. The input fields of the selection screen are ready for input that were specified by the additions of the statement [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen.htm) of the current event block. After a user action, selection screen processing is continued with the current selection screen event. Previous selection screen events are not triggered.
9.  Selection screen processing is interrupted and the system returns to the current selection screen with raising the event AT SELECTION-SCREEN OUTPUT. The message is displayed in the status bar of the current GUI window by default. The fields described under point 8 are ready for input. If the user confirms the current field contents with the Enter key without entering a new value, the program is resumed after the statement MESSAGE. If the user has entered one or more new values, selection screen processing is resumed after a user action as described under point 8.
10.  The event block of the current list event is terminated and the list level at which the list event was triggered remains displayed. The message is displayed in the status bar of the current GUI window by default.
11.  The program is terminated and an empty [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") is displayed with an empty GUI status. The message is displayed in the status bar of the current GUI window by default. After a user action, processing returns to the calling position of the program.
12.  The program is terminated with the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED.

When a message is displayed, the user can display the long text, if applicable, by a single click with the mouse on the Help button if the message is displayed in a dialog box, or by clicking in the status bar. If no long text is defined, it is generated using the content of the short text.

Notes

-   The function adjustment of local layout in the [standard toolbar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry") of the GUI status can be used to specify that error, warning, and status messages are displayed in a dialog box instead of in the status bar. The program flow does not continue as described above until the dialog box has been closed.

-   When displaying messages in a dialog box, 50 characters are available in a line. Messages with more than 50 characters are wrapped. One dialog box can display a maximum of six rows, which corresponds to 300 characters. This covers the maximum length of a short message of 269 characters, if this contains 73 characters and four placeholders that are each replaced by 50 characters. If displayed in the status bar, as many characters are displayed in the message as fit into the current width of the bar. If characters are cut off, this is indicated by three dots "..." at the end of the message. If you select it using the right mouse button, the message in the status bar is scrolled from right to left.

-   An icon specific to the message type is displayed in front of the message. If a message type is converted to another message type before sending, the icon of the new type is also displayed. The displayed icon can be overridden using the addition [DISPLAY LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) of the statement MESSAGE.

-   If the internal ID of an [icon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicon_glosry.htm "Glossary Entry") is displayed at the start of a line when shown in a dialog box, the icon is displayed as an icon. In all other positions, however, the icon ID is displayed as a literal.

-   Updating the output of a message to another type does not affect the setting of the system fields in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm). The system field sy-msgty is always filled with the type specified in the statement MESSAGE

-   The behavior for the OK field described above in point 5 assumes that the OK field is defined in the screen. If function codes are only evaluated with system field sy-ucomm, the behavior is as for Enter.

Example

The program DEMO\_MESSAGES demonstrates the display of various message types from different processing blocks in dialog processing.


### abenabap_message_control.htm

---
title: "Messages in Control Processing"
description: |
  When Control Framework(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_framework_glosry.htm 'Glossary Entry') events are handled, messages of types 'W' and 'E' are converted to type 'A'. All other messages are processed as specified in dialog processing(https://help.sap.co
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_control.htm"
abapFile: "abenabap_message_control.htm"
keywords: ["do", "if", "try", "types", "abenabap", "message", "control"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Control Processing

When [Control Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_framework_glosry.htm "Glossary Entry") events are handled, messages of types "W" and "E" are converted to type "A". All other messages are processed as specified in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm).


### abenabap_message_batch_input.htm

---
title: "Messages in Batch Input"
description: |
  As in dialog processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm), messages in batch input(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_input_glosry.htm 'Glossary Entry') can be converted to another message type depending on w
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_input.htm"
abapFile: "abenabap_message_batch_input.htm"
keywords: ["update", "do", "case", "try", "data", "types", "abenabap", "message", "batch", "input"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Batch Input

As in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm), messages in [batch input](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_input_glosry.htm "Glossary Entry") can be converted to another message type depending on where they are called, for example from "I" to "S" in PBO processing or from "W" to "E" in list processing.

No message is displayed and instead is written to the batch input log, in accordance with the (updated) message type as follows:

-   Messages of type "S" are written to the log and the program continues.

-   Messages of type "I" and "W" are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.

-   Messages of type "E" and "A" are written to the log. The current program is canceled and a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") is executed in the case of messages with the type "A". The status of the current [batch input session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.

-   Messages of type "X" [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") with associated [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The status of the current [batch input session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is set to "processed with errors". Processing of the session is then continued with the next program.


### abenabap_message_batch_job.htm

---
title: "Messages in Background Processing"
description: |
  In background processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm 'Glossary Entry'), all messages are handled in accordance with the type specified in the statement MESSAGE, with the following exception. Only during list processing(https://he
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_job.htm"
abapFile: "abenabap_message_batch_job.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenabap", "message", "batch", "job"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Background Processing

In [background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), all messages are handled in accordance with the type specified in the statement MESSAGE, with the following exception. Only [during list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm) is a message of type "W" converted into a message of type "E" before it is actually handled.

A message is not displayed, but instead is written as follows to the background processing log (job log) in accordance with the message type:

-   Messages of type "S" are written to the log and the program continues.

-   Messages of type "I" and "W" are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.

-   Messages of type "E" and "A" are written to the log. A check is then performed to see whether the message is handled using [error\_message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm). If this is not the case, the message is also written to the log with message number 564 of the message class 00 and current background processing is interrupted; here, a message of type "A" executes a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and a message of type "E" does not. Background processing is resumed when the message is handled.

-   Messages of type "X" create a [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") with associated [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and the current background processing is canceled.

Notes

-   Since background jobs are always started internally using the statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_via_job.htm), [list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm) is usually also active at the same time.

-   For messages of type "A", remember that handling using [error\_message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) causes the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) to be executed implicitly, hence producing a database rollback and other side-effects.


### abenabap_message_update.htm

---
title: "Messages in Updates"
description: |
  During updates(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm 'Glossary Entry'), the behavior of messages depends on the work process. -   During synchronous updates(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensynchronous_update_glosry.htm 'Gl
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_update.htm"
abapFile: "abenabap_message_update.htm"
keywords: ["update", "do", "if", "case", "try", "data", "types", "abenabap", "message"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Updates

During [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry"), the behavior of messages depends on the work process.

-   During [synchronous updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasynchronous_update_glosry.htm "Glossary Entry") in an update work process in an [update session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_session_glosry.htm "Glossary Entry"), all messages except type "S" cancel the update without creating a runtime error. The update work process performs a database rollback, enters appropriate comments in the associated database tables VB..., and notifies the user whose program created the entries by SAPmail.

-   During [local updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_update_glosry.htm "Glossary Entry"), all messages apart from type "S" and "X" are converted to messages of type "A" and these behave in the same way as in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm), which means they lead to a termination and a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Messages of type "S" and "X" are also handled in the same way as in dialog processing.

Notes

-   In exceptional cases, the work process may be connected to a dialog (for example, during debugging). Messages then behave as in local updates.

-   In updates, type "A" messages cannot be caught using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) in function module calls, since here the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) is executed implicitly and this is not allowed in updates. This is why the runtime error MESSAGE\_ROLLBACK\_IN\_POSTING is produced when type "A" messages are caught using error\_message. Messages of types "I", "W", and "E", on the other, can be caught.

-   More information can be found under [Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_commit_during_update.htm).


### abenabap_message_exit.htm

---
title: "Messages in conversion routines"
description: |
  In conversion routines(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_routine_glosry.htm 'Glossary Entry'), the function modules ..._INPUT and ...OUTPUT need to be distinguished: -   In an ..._INPUT function module, all messages apart from those of type 'E', 'A' or 'S'
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_exit.htm"
abapFile: "abenabap_message_exit.htm"
keywords: ["do", "try", "types", "abenabap", "message", "exit"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in conversion routines

In [conversion routines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_routine_glosry.htm "Glossary Entry"), the function modules ...\_INPUT and ...OUTPUT need to be distinguished:

-   In an ...\_INPUT function module, all messages apart from those of type "E", "A" or "S" lead to an untreatable exception. Messages of types "E", "A" and "S" behave in the same way as in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm).

-   In an ...\_OUTPUT function module, all messages apart from those of type "A" lead to an untreatable exception. Messages of type "A" behave in the same way as in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm).


### abenabap_message_procedure.htm

---
title: "Messages in Procedures"
description: |
  In procedures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm 'Glossary Entry'), message handling complies with the context from which the procedure was called. Exceptions to this rule are arise when: -   the addition RAISING(https://help.sap.com/doc/abapdocu_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_procedure.htm"
abapFile: "abenabap_message_procedure.htm"
keywords: ["do", "if", "try", "types", "abenabap", "message", "procedure"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Procedures

In [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"), message handling complies with the context from which the procedure was called. Exceptions to this rule are arise when:

-   the addition [RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) is used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)

-   a message is handled when a function module is called using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm)

-   a function module is called using the [RFC interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_rfc.htm)

Note

If a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is defined is not assigned to the associated actual parameters.


### abenabap_message_rfc.htm

---
title: "Messages in RFC Processing"
description: |
  If list processing and dialog processing do not take place in RFC processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_processing_glosry.htm 'Glossary Entry'), messages behave as follows: -   Messages of types 'I', 'S', and 'W' are ignored. -   Messages of types 'A', 'E',
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_rfc.htm"
abapFile: "abenabap_message_rfc.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenabap", "message", "rfc"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in RFC Processing

If list processing and dialog processing do not take place in [RFC processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), messages behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause processing to terminated, followed by a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm) or [list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm) takes place during RFC processing, any messages sent behave as described there.

Note

If a message of type "E" is sent in a remote-enabled function module, note that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.


### abenabap_message_http_server.htm

---
title: "Messages in ICF Processing"
description: |
  Messages sent during ICF processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_processing_glosry.htm 'Glossary Entry') (namely when a HTTP/HTTPS query or SMTP query is handled by an HTTP request handler(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.ht
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_http_server.htm"
abapFile: "abenabap_message_http_server.htm"
keywords: ["do", "if", "try", "data", "types", "abenabap", "message", "http", "server"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in ICF Processing

Messages sent during [ICF processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_processing_glosry.htm "Glossary Entry") (namely when a HTTP/HTTPS query or SMTP query is handled by an [HTTP request handler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm)) behave in the same way as in [RFC processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_rfc.htm). Programs or procedures called in the handler are executed in the service context and their messages behave accordingly.

Note

[Dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm) or [list processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_list_processing.htm) can only take place for an ICF server if the Service Data → GUI Link setting for the service is set to "Yes" in the transaction SICF. Messages of the types "I", "S", and "W" are always ignored by default and messages of the types "A", "E", and "X" always terminate processing followed by a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").


### abenabap_message_apc_server.htm

---
title: "Messages in APC Processing"
description: |
  Messages sent during APC processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_processing_glosry.htm 'Glossary Entry') (namely when a Web socket query or TCP query is handled by an APC handler(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm)) behave
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_apc_server.htm"
abapFile: "abenabap_message_apc_server.htm"
keywords: ["do", "case", "try", "method", "types", "abenabap", "message", "apc", "server"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in APC Processing

Messages sent during [APC processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_processing_glosry.htm "Glossary Entry") (namely when a Web socket query or TCP query is handled by an [APC handler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm)) behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause the [APC session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_session_glosry.htm "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.


### abenabap_message_daemon.htm

---
title: "Messages in ABAP Daemon Processing"
description: |
  Messages sent in ABAP Daemon processing(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_processing_glosry.htm 'Glossary Entry') (namely when ABAP Daemon(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm 'Glossary Entry') methods are
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_daemon.htm"
abapFile: "abenabap_message_daemon.htm"
keywords: ["do", "try", "method", "types", "abenabap", "message", "daemon"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in ABAP Daemon Processing

Messages sent in [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") (namely when [ABAP Daemon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm "Glossary Entry") methods are executed) behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" terminate the [ABAP Daemon session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") and restart the [ABAP Daemon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm "Glossary Entry") in a new user session. After the restart, the [ABAP Daemon event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") ON\_ERROR is raised.

Procedures called in an ABAP Daemon are executed in the ABAP Daemon context and their messages behave accordingly.
