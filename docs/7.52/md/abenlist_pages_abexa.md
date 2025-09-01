---
title: "Lists, Page Layout"
description: |
  The example shows how to layout the page header and footer and the page breaks on lists. Source Code &--------------------------------------------------------------------- & Report  DEMO_LIST_PAGES & &--------------------------------------------------------------------- & & &----
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_pages_abexa.htm"
abapFile: "abenlist_pages_abexa.htm"
keywords: ["select", "do", "if", "class", "abenlist", "pages", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) → 

Lists, Page Layout

The example shows how to layout the page header and footer and the page breaks on lists.

Source Code

\*&---------------------------------------------------------------------\*
\*& Report  DEMO\_LIST\_PAGES
\*&
\*&---------------------------------------------------------------------\*
\*&
\*&
\*&---------------------------------------------------------------------\*
REPORT  DEMO\_LIST\_PAGES LINE-SIZE 60 LINE-COUNT 12(3).
TOP-OF-PAGE.
  WRITE: '------', ' Top-of-page', (3) sy-pagno, '------'.
END-OF-PAGE.
  WRITE: '------', ' End-of-page', (3) sy-pagno, '------'.
START-OF-SELECTION.
  DO 32 TIMES.
    IF sy-index = 7.
      WRITE:/ '"NEW-PAGE NO-TITLE"'.
      NEW-PAGE NO-TITLE.
    ENDIF.
    IF sy-index = 9.
      WRITE: / '"NEW-PAGE NO-HEADING"'.
      NEW-PAGE NO-HEADING.
    ENDIF.
    IF sy-index = 11.
      WRITE: / '"NEW-PAGE WITH-TITLE"'.
      NEW-PAGE WITH-TITLE.
    ENDIF.
    IF sy-index = 13.
      WRITE: / '"NEW-PAGE WITH-HEADING"'.
      NEW-PAGE WITH-HEADING.
    ENDIF.
    IF sy-index = 15.
      WRITE: / '"RESERVE 3 LINES"'.
      RESERVE 3 LINES.
    ENDIF.
    IF sy-index = 18.
      WRITE: / '"NEW-PAGE LINE-COUNT 15"'.
      NEW-PAGE LINE-COUNT 15.
    ENDIF.
    WRITE: /  sy-index.
  ENDDO.

Description

The addition LINE-SIZE of the statement REPORT sets the width of the program output list to 60. The addition LINE-COUNT sets the page length to 12 and the page footer length to 3.

This program does not use the default page header but a user-defined header based on TOP-OF-PAGE. The header consists of a single line. The page number is taken from the system field sy-pagno. The page footer is also user-defined and is determined in the event END-OF-PAGE, analogously to the page header. Although the page footer comprises only one line, it is filled with two empty lines since 3 lines have been reserved for it. After subtracting the list title and the column title, this leaves 4 lines for the actual output.

At the beginning, the program generates five pages with different page headers, indicating the statement to be used for initiating the next page break on each preceding page. The list title was defined as 'List Title' and the column title as the 'Column Title in the text elements.

The statement RESERVE triggers the event END-OF-PAGE and a page break since no three lines remain on the page.

Finally, the addition LINE-COUNT of the statement NEW-PAGE sets the page length of the subsequent pages to 15.