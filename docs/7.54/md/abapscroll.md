  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_lists_complex.htm) → 

SCROLL LIST

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_shortref.htm)

Syntax

SCROLL LIST *\[*[horizontal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_list_horizontal.htm)*\]*
            *\[*[vertical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_list_vertical.htm)*\]*
            *\[*INDEX idx*\]*.

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement scrolls the display area of a list stored in the list buffer to the position specified in [horizontal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_list_horizontal.htm) and/or [vertical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_list_vertical.htm). At least one of these additions must be specified, in which all horizontal specifications refer to the columns of a displayed list. The corresponding section is displayed when the list is next displayed.

If the SCROLL statement is not used, a list is displayed during the initial display, starting from the first column of the first row. If the user navigates from a details list back to a lower list level, the list is displayed with the section in which it was last displayed. The SCROLL statement sets a new first column, a new first row, or both. Each SCROLL statement sets only the size specified in it, without changing the other positions.

Addition

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object (which contains the list index) of type i. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx is not available, sy-subrc is set to the value 8.

System Fields

sy-subrc

Meaning

0

Screen section was scrolled.

4

Complete scrolling not possible because the list margin was reached.

8

Scrolling not possible because the specified list level does not exist.

Note

While scrolling through the list that is being created (sy-lsind), it should be noted that a SCROLL statement is ignored prior to the first output statement, since the list does not yet exist in the list buffer.

Example

By double-clicking the basic list, it is possible to scroll down this list in the event block [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_line-selection.htm) to the page entered in a [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The lines on the page retain their original position with reference to the [page header](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpage_header_glosry.htm "Glossary Entry") by using sy-staro. However, it is not necessary to set the column to sy-staco explicitly, since this position is retained during vertical scrolling.

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
[SCROLL LIST - horizontal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_list_horizontal.htm)
[SCROLL LIST - vertical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_list_vertical.htm)