  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_complex.htm) → 

READ LINE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_shortref.htm)

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                   *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*[result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_result.htm)*\]*.

Extras:

[1\. ... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEXidx*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CURRENT LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns the content of a line stored in the list buffer to the system field sy-lisel, and allows other target fields to be specified in [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_result.htm). In addition, all values for this line saved using [HIDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphide.htm) are assigned to the respective variables.

The line read is specified using the addition LINE or using CURRENT LINE.

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

In the addition LINE, line expects a data object of the type i, which contains the line number based on the list page of a list level.

The list level can be specified with the addition INDEX, where idx expects a data object (which contains the list index) of type i. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed.

The list page can be specified either with PAGE page or with CURRENT PAGE. page expects a data object of the type i that contains the page number of an existing page of the list level. No line is selected if no line is found for the specified values in line, idx and page. CURRENT PAGE indicates the topmost displayed page of the list, on which the last list event has taken place. No line is selected while creating the basic list. If no addition is specified for the page, the current page (sy-pagno) is selected when the basic list is created, and the page on which the event was raised (sy-cpage) is selected during the processing of a list event.

Addition 2

... CURRENT LINE

Effect

For the addition CURRENT LINE, the line on which the screen cursor was positioned during a preceding list event (sy-lilli), or the last line read with a preceding READ LINE statement, is selected. No line is selected while creating the basic list.

Example

This example reads all lines of the basic list after selecting a line. The content of the checkbox is assigned to the output data object flag. A target field wa with length 10 is used for the date, since this is the length of the output area and contains separators. If an assignment was made to the output field date, the area length would be reduced. The checked data is displayed in the details list.

DATA: date TYPE d,
      flag TYPE c LENGTH 1,
      wa   TYPE c LENGTH 10.
START-OF-SELECTION.
  date = sy-datum.
  DO 10 TIMES.
    date = date + sy-index.
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
[READ LINE - result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_result.htm)