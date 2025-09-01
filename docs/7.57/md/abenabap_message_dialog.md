  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - Dialog Processing, ABENABAP_MESSAGE_DIALOG, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

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
-   When displaying messages in a dialog box, 50 characters are available in a line. Messages with more than 50 characters are wrapped. A dialog box can display a maximum of six lines, which corresponds to 300 characters. This covers the maximum length of a short message of 269 characters, if this contains 73 characters and four placeholders that are each replaced by 50 characters. If displayed in the status bar, as many characters are displayed in the message as fit into the current width of the bar. If characters are cut off, this is indicated by three dots "..." at the end of the message. If you select it using the right mouse button, the message in the status bar is scrolled from right to left.
-   An icon specific to the message type is displayed in front of the message. If a message type is converted to another message type before sending, the icon of the new type is also displayed. The displayed icon can be overridden using the addition [DISPLAY LIKE](javascript:call_link\('abapmessage.htm'\)) of the statement MESSAGE.
-   If the internal ID of an [icon](javascript:call_link\('abenicon_glosry.htm'\) "Glossary Entry") is displayed at the start of a line when shown in a dialog box, the icon is displayed as such. In all other positions, however, the icon ID is displayed as a literal.
-   Converting the output of a message to another type does not affect the setting of the system fields in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)). The system field sy-msgty is always filled with the type specified in the statement MESSAGE
-   The behavior for the OK field described above in point 5 assumes that the OK field is defined in the screen. If function codes are only evaluated with system field sy-ucomm, the behavior is as for Enter.
-   An event block [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) is executed during [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing and messages behave accordingly.
-   For an event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) with the exception of error messages, the message handling depends on the context, where a program is loaded. This mainly affects messages of types I and W. For example, if a program is loaded by statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) messages of type I and W behave as during reporting event INITIALIZATION. If a program is loaded by an external subroutine call during PAI of a dynpro, messages of type I and W behave accordingly. It is not recommended that messages are used that require user interaction in an event block LOAD-OF-PROGRAM.

Example

The program DEMO\_MESSAGES demonstrates the display of different message types from different processing blocks in dialog processing.