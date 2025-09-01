  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SCROLL%20LIST%2C%20ABAPSCROLL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SCROLL LIST

[Short Reference](javascript:call_link\('abapscroll_shortref.htm'\))

Syntax

SCROLL LIST *\[*[horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\))*\]*
            *\[*[vertical](javascript:call_link\('abapscroll_list_vertical.htm'\))*\]*
            *\[*INDEX idx*\]*.

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement scrolls the display area of a list stored in the list buffer to the position specified in [horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\)) and/or [vertical](javascript:call_link\('abapscroll_list_vertical.htm'\)). At least one of these additions must be specified, whereby all horizontal specifications refer to the columns of a displayed list. The corresponding section is displayed when the list is next displayed.

If the SCROLL statement is not used, a list is displayed during the initial display, starting from the first column of the first line. If the user navigates from a details list back to a lower list level, the list is displayed with the section in which it was last displayed. The SCROLL statement sets a new first column, a new first line, or both. Each SCROLL statement sets only the size specified in it, without changing any positions that are not affected.

Addition   

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object of type i, which contains the list index. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx is not available, sy-subrc is set to the value 8.

System Fields

sy-subrc

Meaning

0

Screen section was scrolled successfully.

4

Complete scrolling not possible because the list margin was reached.

8

Scrolling not possible because the specified list level does not exist.

Hint

While scrolling through the list that is being created (sy-lsind), it should be noted that a SCROLL statement is ignored prior to the first output statement, since the list does not yet exist in the list buffer.

Example

By double-clicking the basic list, it is possible to scroll down this list in the event block [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) to the page entered in a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). The lines on the page retain their original position with reference to the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") by using sy-staro. However, it is not necessary to set the column to sy-staco explicitly, since this position is retained during vertical scrolling.

REPORT LINE-COUNT 100 LINE-SIZE 100
       NO STANDARD PAGE HEADING.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
PARAMETERS page TYPE i.
SELECTION-SCREEN END OF SCREEN 500.
START-OF-SELECTION.
  DO 10000 TIMES.
    WRITE sy-index.
  ENDDO.
TOP-OF-PAGE.
  ULINE.
  WRITE sy-pagno.
  ULINE.
AT LINE-SELECTION.
  CALL SELECTION-SCREEN 500 STARTING AT 10 10.
  SCROLL LIST TO COLUMN sy-staco
              TO PAGE page LINE sy-staro.

Continue
[SCROLL LIST, horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\))
[SCROLL LIST, vertical](javascript:call_link\('abapscroll_list_vertical.htm'\))