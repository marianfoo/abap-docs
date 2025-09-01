---
title: "READ LINE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_shortref.htm) Syntax READ  LINE line OF PAGE pageOF CURRENT PAGE INDEX idx  CURRENT LINE  result(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/e
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line.htm"
abapFile: "abapread_line.htm"
keywords: ["select", "do", "while", "if", "class", "data", "abapread", "line"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists_complex.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ LINE, ABAPREAD_LINE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

READ LINE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_shortref.htm)

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                   *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*[result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_result.htm)*\]*.

Additions:

[1\. ... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CURRENT LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns the content of a line stored in the list buffer to the system field sy-lisel, and allows other target fields to be specified in [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_result.htm). In addition, all values for this line stored using [HIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphide.htm) are assigned to the respective variables.

The line to be read is specified using the addition LINE or using CURRENT LINE.

System Fields

sy-subrc

Meaning

0

The specified line exists and was read.

Not 0

The specified line does not exist.

Addition 1   

... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*

Effect

The addition LINE selects a line. The line number is specified by line which expects a data object of type i. The line number is related to a list page of a list level.

The list level can be specified with the addition INDEX, where idx expects a data object, which contains the list index, of type i. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed.

The list page can be specified either with PAGE page or with CURRENT PAGE. page expects a data object of the type i that contains the page number of an existing page of the list level. No line is selected if no line is found for the specified values in line, idx and page. CURRENT PAGE indicates the topmost displayed page of the list, on which the last list event has taken place. No line is selected while creating the basic list. If no addition is specified for the page, the current page (sy-pagno) is selected when the basic list is created, and the page on which the event was raised (sy-cpage) is selected during the processing of a list event.

Addition 2   

... CURRENT LINE

Effect

For the addition CURRENT LINE, the line on which the screen cursor was positioned during a preceding list event (sy-lilli), or the last line read with a preceding READ LINE statement, is selected. No line is selected while creating the basic list.

Example

This example reads all lines of the basic list after selecting a line. The content of the checkbox is assigned to the output data object flag. A target field wa with length 10 is used for the date, since this is the length of the output area and contains separators. If an assignment was made to the output field date, the area length would be reduced. The selected data is displayed in the details list.

DATA: date TYPE d,
      flag TYPE c LENGTH 1,
      wa   TYPE c LENGTH 10.
START-OF-SELECTION.
  date = sy-datum.
  DO 10 TIMES.
    date += sy-index.
    WRITE: / flag AS CHECKBOX, (10) date.
  ENDDO.
AT LINE-SELECTION.
  DO.
    READ LINE sy-index FIELD VALUE flag
                                   date INTO wa.
    IF sy-subrc <> 0.
      EXIT.
    ELSEIF flag = 'X'.
      WRITE / wa.
    ENDIF.
  ENDDO.

Continue
[READ LINE, result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_result.htm)