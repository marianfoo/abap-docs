# ABAP - Keyword Documentation / ABAP - Programming Language / Text Repositories / Messages / Messages - Behavior

Included pages: 13


### abenabap_messages_types.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Behavior%2C%20ABENABAP_MESSAGES_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Behavior

When a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent using the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)), it must be classified with a single-character [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry"). For the basic form of the statement MESSAGE, the message type defines how the message is displayed and determines the subsequent program flow. Valid message types are A, E, I, S, W, and X. The abbreviations stand for termination (abort) message, error message, information message, status message, warning, and exit message.

The system behavior after sending a message of a particular type with the basic form of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)), that is, without the additions [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) or [INTO](javascript:call_link\('abapmessage_into.htm'\)), is context-dependent:

-   [Messages in list processing](javascript:call_link\('abenabap_message_list_processing.htm'\))
-   [Messages in Dialog Processing](javascript:call_link\('abenabap_message_dialog.htm'\))
-   [Messages in Control Processing](javascript:call_link\('abenabap_message_control.htm'\))
-   [Messages in Batch Input](javascript:call_link\('abenabap_message_batch_input.htm'\))
-   [Messages in Background Processing](javascript:call_link\('abenabap_message_batch_job.htm'\))
-   [Messages in Updates](javascript:call_link\('abenabap_message_update.htm'\))
-   [Messages in Conversion Exits](javascript:call_link\('abenabap_message_exit.htm'\))
-   [Messages in Procedures](javascript:call_link\('abenabap_message_procedure.htm'\))
-   [Messages in RFC Processing](javascript:call_link\('abenabap_message_rfc.htm'\))
-   [Messages in ICF Processing](javascript:call_link\('abenabap_message_http_server.htm'\))
-   [Messages in APC Processing](javascript:call_link\('abenabap_message_apc_server.htm'\))
-   [Messages in ABAP daemon Processing](javascript:call_link\('abenabap_message_daemon.htm'\))

Hints

-   Messages that are sent with the basic form of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) are mainly intended for use in dialog processing for the PAI event. Therefore, messages of type E and W allow an error dialog to be used in connection with the statement [FIELD](javascript:call_link\('dynpfield.htm'\)) of the [dynpro structure logic](javascript:call_link\('abendynp_field_messages.htm'\)). Therefore messages of type E or W, in particular, should never be used in other contexts.
-   In list processing, warnings are always turned into error messages before being processed further, regardless of any other context.
-   An alternative to creating [runtime errors](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with messages of type X are [assertions](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry") and the language elements [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) and [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)).

Continue
[Messages - List Processing](javascript:call_link\('abenabap_message_list_processing.htm'\))
[Messages - Dialog Processing](javascript:call_link\('abenabap_message_dialog.htm'\))
[Messages - Control Processing](javascript:call_link\('abenabap_message_control.htm'\))
[Messages - Batch Input](javascript:call_link\('abenabap_message_batch_input.htm'\))
[Messages - Background Processing](javascript:call_link\('abenabap_message_batch_job.htm'\))
[Messages - Updates](javascript:call_link\('abenabap_message_update.htm'\))
[Messages - Conversion Exits](javascript:call_link\('abenabap_message_exit.htm'\))
[Messages - Procedures](javascript:call_link\('abenabap_message_procedure.htm'\))
[Messages - RFC Processing](javascript:call_link\('abenabap_message_rfc.htm'\))
[Messages - ICF Processing](javascript:call_link\('abenabap_message_http_server.htm'\))
[Messages - APC Processing](javascript:call_link\('abenabap_message_apc_server.htm'\))
[Messages - ABAP Daemon Processing](javascript:call_link\('abenabap_message_daemon.htm'\))


### abenabap_message_list_processing.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20List%20Processing%2C%20ABENABAP_MESSAGE_LIST_PROCESSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - List Processing

In [list processing](javascript:call_link\('abenlist_processing_glosry.htm'\) "Glossary Entry"), a message of type W is always converted to type E before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

-   In all executable programs called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), if no dynpro sequence called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) is processed there.
-   After list processing is called explicitly using [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) in a dynpro sequence. The statement [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)) switches list processing off during a dynpro sequence.

In programs called using SUBMIT, list processing is active, therefore, apart from when actual [list events](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry") are handled, even when [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") are being handled. The latter applies in particular to the standard event [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)).

Hint

[Background jobs](javascript:call_link\('abenabap_message_batch_job.htm'\)) are always started using [SUBMIT](javascript:call_link\('abapsubmit_via_job.htm'\)), which means that list processing is usually also active at the same time.


### abenabap_message_dialog.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Dialog%20Processing%2C%20ABENABAP_MESSAGE_DIALOG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Dialog Processing

For program execution in [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry"), the behavior of messages of each message type is shown in the tables below, depending on the dialog modules or event blocks in which they are sent:

Processing Block / Message Type

  A

  E

  I

  S

  W

  X

[MODULE INPUT](javascript:call_link\('abapmodule.htm'\)) after [PROCESS AFTER INPUT](javascript:call_link\('dynpprocess.htm'\))

  1

  2

  3

  4

  5

  6

[MODULE INPUT](javascript:call_link\('abapmodule.htm'\)) after [PROCESS ON HELP-REQUEST](javascript:call_link\('dynpprocess.htm'\))

  1

  7

  3

  4

  7

  6

[MODULE INPUT](javascript:call_link\('abapmodule.htm'\)) after [PROCESS ON VALUE-REQUEST](javascript:call_link\('dynpprocess.htm'\))

  1

  7

  3

  4

  7

  6

[MODULE INPUT](javascript:call_link\('abapmodule.htm'\)) after [MODULE AT EXIT-COMMAND](javascript:call_link\('dynpmodule.htm'\))

  1

  7

  3

  4

  7

  6

[AT SELECTION-SCREEN ...](javascript:call_link\('abapat_selection-screen.htm'\))

  1

  8

  3

  4

  9

  6

[AT SELECTION-SCREEN ON HELP-REQUEST](javascript:call_link\('abapat_selection-screen_events.htm'\))

  1

  7

  3

  4

  7

  6

[AT SELECTION-SCREEN ON VALUE-REQUEST](javascript:call_link\('abapat_selection-screen_events.htm'\))

  1

  7

  3

  4

  7

  6

[AT SELECTION-SCREEN ON EXIT-COMMAND](javascript:call_link\('abapat_selection-screen_events.htm'\))

  1

  7

  3

  4

  7

  6

[AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))

  1

  10

  3

  4

  E

  6

[AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))

  1

  10

  3

  4

  E

  6

[AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))

  1

  10

  3

  4

  E

  6

[INITIALIZATION](javascript:call_link\('abapinitialization.htm'\))

  1

  A

  S

  4

  S

  6

[START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))

  1

  11

  3

  4

  E

  6

[GET](javascript:call_link\('abapget-.htm'\))

  1

  11

  3

  4

  E

  6

[END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\))

  1

  11

  3

  4

  E

  6

[TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))

  1

  11

  3

  4

  E

  6

[END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))

  1

  11

  3

  4

  E

  6

[TOP-OF-PAGE DURING ...](javascript:call_link\('abaptop-of-page.htm'\))

  1

  10

  3

  4

  E

  6

[LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))

  -

  12

  -

  -

  -

  -

[MODULE OUTPUT](javascript:call_link\('abapmodule.htm'\)) after [PROCESS BEFORE OUTPUT](javascript:call_link\('dynpprocess.htm'\))

  1

  A

  S

  4

  S

  6

[AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen_events.htm'\))

  1

  A

  S

  4

  S

  6

If another message type is specified under a message type A, E, I, S, W, and X, the original message type is converted to this type and the message is output in accordance with this type. The conversion of the message type W to E when handling [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") and [list events](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry") is due to the general behavior of [messages in list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)).

The hyphens (-) in the columns for event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) denote that the behavior the message is governed by the context, where the program is loaded. Messages of type W that are converted to E during list processing are handled as described in point 12 below.

A number under a message type means that the message is processed as described in the following:

1.  The message is displayed in a dialog box. After the dialog box is exited, the program is terminated, and processing returns to the calling position of the first program of the current [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). All [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the call sequence are deleted, and a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") is performed.
2.  [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing is terminated and returns to the current screen without raising the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"). The message is displayed in the status bar of the current GUI window by default. If the error message is sent in a dialog module that is called in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") outside of a processing chain defined with [CHAIN](javascript:call_link\('dynpchain.htm'\)) following a [FIELD](javascript:call_link\('dynpfield.htm'\)) statement, the input field specified after FIELD is the only field that is ready for input. If the error message is sent in a dialog module that is called within a processing chain defined with CHAIN, all fields specified after FIELD in the processing chain are ready for input. After a user action, PAI processing is continued at the point described under [Handling of Messages for the PAI Event](javascript:call_link\('abendynp_field_messages.htm'\)).
3.  The message is displayed in a dialog box. After the dialog box is exited, the program is continued after the statement MESSAGE.
4.  The program is continued after the statement MESSAGE. The message is displayed by default in the screen of the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") in the status bar of the current GUI window.
5.  PAI processing is terminated and returns to the current screen without raising the event PBO. The message is displayed in the status bar of the current GUI window by default. The fields described under point 2 are ready for input. If the user confirms the current field content with the Enter key without entering a new value, the program continues after the statement MESSAGE. If the user has entered one or more new values, processing continues after a user action as described under point 2. User actions linked with function codes that set the [OK field](javascript:call_link\('abenok_field_glosry.htm'\) "Glossary Entry") also count as new values here.
6.  The program is terminated, a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") is executed, and the runtime error MESSAGE\_TYPE\_X is raised. The [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") of the runtime error is displayed, which contains the ID, the short text, and the long text of the message.
7.  The sending of error messages or warnings is not allowed in [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry") processing and in the handling of a function code of type E. This raises an uncatchable exception.
8.  [Selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") is interrupted, and the system returns to the current selection screen without raising the event AT SELECTION-SCREEN OUTPUT. The message is displayed in the status bar of the current GUI window by default. The input fields of the selection screen are ready for input that were specified by the additions of the statement [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) of the current event block. After a user action, selection screen processing is continued with the current selection screen event. Previous selection screen events are not raised.
9.  Selection screen processing is interrupted, and the system returns to the current selection screen without raising the event AT SELECTION-SCREEN OUTPUT. The message is displayed in the status bar of the current GUI window by default. The fields described under point 8 are ready for input. If the user confirms the current field content with the Enter key without entering a new value, the program continues after the statement MESSAGE. If the user has entered one or more new values, selection screen processing continues after a user action as described under point 8.
10.  The event block of the current list event is terminated and the list level at which the list event was raised remains displayed. The message is displayed in the status bar of the current GUI window by default.
11.  The program is terminated, and an empty [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is displayed with an empty GUI status. The message is displayed in the status bar of the current GUI window by default. After a user action, processing returns to the calling position of the program.
12.  The program is terminated with the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED.

When a message is displayed, the user can display any long text that exists, by a single click with the mouse on the Help button if the message is displayed in a dialog box, or by clicking in the status bar. If no long text is defined, it is generated using the content of the short text.

Hints

-   The function adjustment of local layout in the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry") of the GUI status can be used to specify that error, warning, and status messages are displayed in a dialog box instead of in the status bar. The program flow does not continue as described above until the dialog box has been closed.
-   When displaying messages in a dialog box, 50 characters are available in a line. Messages with more than 50 characters are wrapped. A dialog box can display a maximum of six lines, which corresponds to 300 characters. This covers the maximum length of a short message of 269 characters, if this contains 73 characters and four placeholders that are each replaced by 50 characters. If displayed in the status bar, as many characters are displayed in the message as fit into the current width of the bar. If characters are cut off, this is indicated by three dots ... at the end of the message. If you select it using the right mouse button, the message in the status bar is scrolled from right to left.
-   An icon specific to the message type is displayed in front of the message. If a message type is converted to another message type before sending, the icon of the new type is also displayed. The displayed icon can be overridden using the addition [DISPLAY LIKE](javascript:call_link\('abapmessage.htm'\)) of the statement MESSAGE.
-   If the internal ID of an [icon](javascript:call_link\('abenicon_glosry.htm'\) "Glossary Entry") is displayed at the start of a line when shown in a dialog box, the icon is displayed as such. In all other positions, however, the icon ID is displayed as a literal.
-   Converting the output of a message to another type does not affect the setting of the system fields in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)). The system field sy-msgty is always filled with the type specified in the statement MESSAGE
-   The behavior for the OK field described above in point 5 assumes that the OK field is defined in the screen. If function codes are only evaluated with system field sy-ucomm, the behavior is as for Enter.
-   An event block [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) is executed during [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing and messages behave accordingly.
-   For an event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) with the exception of error messages, the message handling depends on the context, where a program is loaded. This mainly affects messages of types I and W. For example, if a program is loaded by statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) messages of type I and W behave as during reporting event INITIALIZATION. If a program is loaded by an external subroutine call during PAI of a dynpro, messages of type I and W behave accordingly. It is not recommended that messages are used that require user interaction in an event block LOAD-OF-PROGRAM.

Example

The program DEMO\_MESSAGES demonstrates the display of different message types from different processing blocks in dialog processing.


### abenabap_message_control.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Control%20Processing%2C%20ABENABAP_MESSAGE_CONTROL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Control Processing

When [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry") events are handled, messages of types W and E are converted to type A. All other messages are processed as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).


### abenabap_message_batch_input.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Batch%20Input%2C%20ABENABAP_MESSAGE_BATCH_INPUT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Batch Input

As in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)), messages in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry") can be converted to another message type depending on where they are called, for example from I to S in PBO processing or from W to E in list processing.

No message is displayed and instead is written to the batch input log, in accordance with the (converted) message type as follows:

-   Messages of type S are written to the log and the program continues.
-   Messages of type I and W are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type E and A are written to the log. The current program is terminated, and a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") is executed for messages with the type A. The status of the current [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is set to processed with errors. Processing of the session is then continued with the next program.
-   Messages of type X [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with associated [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). The status of the current [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is set to processed with errors. Processing of the session is then continued with the next program.


### abenabap_message_batch_job.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Background%20Processing%2C%20ABENABAP_MESSAGE_BATCH_JOB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Background Processing

In [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"), all messages are handled in accordance with the type specified in the statement MESSAGE, with the following exception. Only [during list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) is a message of type W converted into a message of type E before it is actually handled.

A message is not displayed, but instead is written as follows to the background processing log (job log) depending on the message type:

-   Messages of type S are written to the log and the program continues.
-   Messages of type I and W are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type E and A are written to the log. A check is then performed to see whether the message is handled using [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)). If this is not the case, the message is also written to the log with message number 564 of the message class 00 and current background processing is terminated, whereby a message of type A executes a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") and a message of type E does not. Background processing is resumed when the message is handled.
-   Messages of type X create a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with associated [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") and the current background processing is canceled.

Hints

-   Since background processing is always started internally using the statement [SUBMIT](javascript:call_link\('abapsubmit_via_job.htm'\)), [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) is usually also active at the same time.
-   For messages of type A, it should be noted that handling using [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) causes the statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) to be executed implicitly, hence producing a database rollback and other side-effects.


### abenabap_message_update.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Updates%2C%20ABENABAP_MESSAGE_UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Updates

During [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), the behavior of messages depends on the work process.

-   During [synchronous updates](javascript:call_link\('abensynchronous_update_glosry.htm'\) "Glossary Entry") and [asynchronous updates](javascript:call_link\('abenasynchronous_update_glosry.htm'\) "Glossary Entry") in an update work process in an [update session](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry"), all messages except type S cause the update to terminate without creating a runtime error. The update work process performs a database rollback, enters appropriate comments in the associated database tables VB..., and notifies the user whose program created the entries by SAPmail.
-   During [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry"), all messages apart from type S and X are converted to messages of type A and these behave in the same way as in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)), which means they lead to a termination and a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). Messages of type S and X are also handled in the same way as in dialog processing.

Hints

-   In exceptional cases, an update work process may be connected to a dialog (for example, during debugging). Messages then behave as in local updates.
-   In updates, type A messages cannot be caught using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) in function module calls, since here the statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) is executed implicitly, and this is not allowed in updates. Therefore, the runtime error MESSAGE\_ROLLBACK\_IN\_POSTING is produced when type A messages are caught using error\_message. Messages of types I, W, and E, on the other hand, can be caught.
-   For more information, see [Forbidden Statements in Updates](javascript:call_link\('abendb_commit_during_update.htm'\)).


### abenabap_message_exit.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Conversion%20Exits%2C%20ABENABAP_MESSAGE_EXIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Conversion Exits

[conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry") are implemented in [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") (function modules) ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type E, A, or S raise an uncatchable exception. Messages of types E, A, and S behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).
-   In an ...\_OUTPUT function module, all messages apart from those of type A raise an uncatchable exception. Messages of type A behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).


### abenabap_message_procedure.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Procedures%2C%20ABENABAP_MESSAGE_PROCEDURE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Procedures

In [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when:

-   the addition [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) is used in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\))
-   a message is handled when a function module is called using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\))
-   a function module is called using the [RFC interface](javascript:call_link\('abenabap_message_rfc.htm'\))

Hint

If a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") is defined is not assigned to the respective actual parameters.


### abenabap_message_rfc.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20RFC%20Processing%2C%20ABENABAP_MESSAGE_RFC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - RFC Processing

As long as no list or dialog processing takes place during [RFC processing](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), messages behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause processing to terminated, followed by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)) or [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) takes place during RFC processing, any messages sent behave as described there.

Hint

If a message of type E is sent in a remote-enabled function module, it should be noted that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.


### abenabap_message_http_server.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20ICF%20Processing%2C%20ABENABAP_MESSAGE_HTTP_SERVER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - ICF Processing

Messages sent during [ICF processing](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry"), that is, when a HTTP/HTTPS query or SMTP query is handled by an [HTTP request handler](javascript:call_link\('abenicf.htm'\)), behave in the same way as in [RFC processing](javascript:call_link\('abenabap_message_rfc.htm'\)). Programs or procedures called in the handler are executed in the service context and their messages behave accordingly.

Hint

[Dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)) or [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) can only take place for an ICF server if the Service Data → GUI Link setting for the service is set to Yes in the transaction SICF. Messages of the types I, S, and W are always ignored by default and messages of the types A, E, and X always terminate processing followed by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry").


### abenabap_message_apc_server.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20APC%20Processing%2C%20ABENABAP_MESSAGE_APC_SERVER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - APC Processing

Messages sent during [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry"), that is, when a Web socket query or TCP query is handled by an [APC handler](javascript:call_link\('abenapc.htm'\)), behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause the [APC session](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.


### abenabap_message_daemon.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20ABAP%20Daemon%20Processing%2C%20ABENABAP_MESSAGE_DAEMON%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - ABAP Daemon Processing

Messages sent in [ABAP daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry"), that is, when [ABAP daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") methods are executed, behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X terminate the [ABAP daemon session](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry") and restart the [ABAP daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") in a new user session. After the restart, the [ABAP daemon event](javascript:call_link\('abenabap_daemon_event_glosry.htm'\) "Glossary Entry") ON\_ERROR is raised.

Procedures called in an ABAP daemon are executed in the ABAP daemon context and their messages behave accordingly.
