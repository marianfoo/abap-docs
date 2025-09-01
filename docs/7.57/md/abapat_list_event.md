---
title: "Syntax"
description: |
  AT LINE-SELECTION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_line-selection.htm)  USER-COMMAND(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm)  PFnn(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_pfnn.htm). Eff
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_list_event.htm"
abapFile: "abapat_list_event.htm"
keywords: ["select", "do", "if", "class", "data", "abapat", "list", "event"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists_interactive.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT list_event, ABAPAT_LIST_EVENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

AT list\_event

Syntax

AT [LINE-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_line-selection.htm)
  *|* [USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm)
  *|* [PFnn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_pfnn.htm).

Effect

Defines event blocks for interactive list processing. The associated events occur if the screen cursor is positioned on a line in a displayed list and the user chooses an appropriate function. Each interactive list event increases the system field sy-lsind by one.

If the cursor is positioned on a line in a list displayed on the screen in an interactive list event, all the values stored using [HIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphide.htm) and belonging to the relevant line are assigned the respective variables and the following system fields are filled with data:

System Field

Meaning

sy-cpage

Page number of the first displayed page of the list from which the event was raised

sy-cucol

Position of the column in the GUI window from which the event was raised (counting starts with 2)

sy-curow

Position of the line in the GUI window from which the event was raised (counting starts with 1)

sy-lilli

Number of the line from which the event was raised

sy-lisel

Content of the line that raised the event (is limited to the first 255 characters)

sy-listi

Index of the list from which the event was raised

sy-lsind

Index of the list level that was created in the event block

sy-staco

Number of the first column displayed in the list from which the event was raised (counting starts with 1)

sy-staro

Number of the first line of the first page displayed of the list from which the event was raised (counting starts with 1)

sy-ucomm

Function code to which the user action that raised the event is assigned

After each list event AT LINE-SELECTION, AT PFnn, and AT USER-COMMAND, the statement [NEW-PAGE PRINT OFF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm) is executed implicitly.

Hint

The list event [AT PFnn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_pfnn.htm) is obsolete and the other two list events, preferably [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm), should be used instead.

Continue
[AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_line-selection.htm)
[AT USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm)