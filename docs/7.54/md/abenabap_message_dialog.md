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