  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Page Layout, ABENLIST_PAGES_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Lists - Page Layout

This example demonstrates how to design the page header and footer and the page breaks in lists.

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

The addition LINE-SIZE of the statement REPORT sets the width of the output list of the program to 60. Furthermore, the addition LINE-COUNT is used to set the page length to 12 and the length of the page footer to 3 (in parentheses).

This program does not use the standard page header, but one that is self-defined using TOP-OF-PAGE. The header consists of a single line. The page number is taken from the system field sy-pagno. The page footer is also self-defined and is determined in the event END-OF-PAGE, in the same way as the page header. Although the page footer comprises only one line, it is filled with two empty lines since three lines have been reserved for it. After subtracting the list title and the column title, this leaves four lines for the actual output.

The program starts by creating five pages with different page headers, indicating the statement to be used for initiating the next page break on each preceding page. The list title was defined as 'List Title' and the column title as the 'Column Title' in the text elements.

The statement RESERVE raises the event END-OF-PAGE and a page break since the page no longer has three more lines.

Finally, the addition LINE-COUNT of the statement NEW-PAGE sets the page length of the following pages to 15.