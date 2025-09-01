---
title: "Lists - System Fields"
description: |
  The sections below give an overview of the system fields(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm 'Glossary Entry') relevant for list processing. The list that is currently being created is called the 'current' list (like the current page, or current l
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_systemfields.htm"
abapFile: "abenlist_systemfields.htm"
keywords: ["select", "do", "if", "try", "class", "abenlist", "systemfields"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) → 

Lists - System Fields

The sections below give an overview of the [system fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm "Glossary Entry") relevant for list processing. The list that is currently being created is called the "current" list (like the current page, or current line). A list that has just been displayed, possibly involving a list event, is known as the "displayed" list. "Absolute" means that the list itself is referred to and not the state of the [list dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_dynpro_glosry.htm "Glossary Entry"). A line selected by a list event on which the cursor is positioned, or which is read by READ LINE, is called the "selected" line.

System Fields During List Creation

These system fields are set after every interactive list event and by the statement [READ LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm).

System Field

Meaning

sy-pagno

Page number of the current page of the current list. Counting begins at 1.

sy-linno

Number of the current line on the current page. Counting begins at 1.

sy-colno

Number of the column on which the cursor is positioned on the current list. Counting begins at 1.

sy-linct

Number of lines per page of the current list, if it was specified by the LINE-COUNT addition of the statement [REPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport.htm) or [NEW-PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page.htm). Otherwise, sy-linct has the value zero.

sy-linsz

Line width of the current list. Set by the LINE-SIZE addition of the [REPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport.htm) or [NEW-PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page.htm) statement.

sy-title

List header. Set in the text elements of a program or by [SET TITLEBAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_titlebar_list.htm).

sy-srows

Current number of lines in the display window. Counting begins at 1.

sy-scols

Current number of columns in the display window. Counting begins at 1.

System Fields After List Events

System Field

Meaning

sy-lsind

List level of the current list; (basic list: 0, first details list: 1, ..., 20th details list: 20). sy-lsind can be set in the program to replace the current list with the list of the set level.

sy-lilli

Absolute number of a selected line in the displayed list. Counting begins at 1.

sy-listi

List level of the displayed list.

sy-lisel

Content of the selected line.

sy-curow

Number of the line in the GUI window on which the cursor of the displayed list was positioned. Counting begins at 1.

sy-cucol

Number of the column in the GUI window on which the cursor of the displayed list was positioned. Counting begins at 2.

sy-cpage

Number of the first displayed page of the displayed list. Counting begins at 1.

sy-staro

Number of the first line on the first displayed page of the displayed list. Counting starts at 1, the lines of the [page header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpage_header_glosry.htm "Glossary Entry") are included.

sy-staco

Number of the first displayed column of the displayed list. Counting begins at 1.

sy-ucomm

Function code that raised the event on the displayed list.

sy-pfkey

GUI status of the list currently being displayed.

Hint

The program SHOWLISY displays the current values of the system fields above. Changes to the values caused by scrolling, changing the window size, selecting a list line, and so on, can be monitored.