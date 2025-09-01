  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](javascript:call_link\('abendynpro_obsolet.htm'\)) →  [dynpro - Obsolete Processing of Step Loops](javascript:call_link\('abensteploop.htm'\)) → 

dynpro - Step Loop

This example demonstrates the obsolete direct use of step loops.

Source Code

REPORT demo\_dynpro\_step\_loop.
TYPES: BEGIN OF t\_itab,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_itab.
DATA: itab TYPE STANDARD TABLE OF t\_itab,
      wa   LIKE LINE OF itab,
      fill TYPE i.
DATA: idx   TYPE i,
      line  TYPE i,
      lines TYPE i,
      limit TYPE i,
      c     TYPE i,
      n1    TYPE i VALUE 5,
      n2    TYPE i VALUE 25.
DATA:  ok\_code TYPE sy-ucomm,
       save\_ok TYPE sy-ucomm.
START-OF-SELECTION.
  itab = VALUE #( FOR j = 1 UNTIL j > 40
                  ( col1 = j col2 = j \*\* 2 ) ).
  fill = lines( itab ).
  CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100' EXCLUDING 'PREVIOUS'.
ENDMODULE.
MODULE status\_0200 OUTPUT.
  SET PF-STATUS 'STATUS\_200' EXCLUDING 'NEXT'.
ENDMODULE.
MODULE transp\_itab\_out OUTPUT.
  idx = sy-stepl + line.
  wa = itab\[ idx \].
ENDMODULE.
MODULE transp\_itab\_in INPUT.
  lines = sy-loopc.
  idx = sy-stepl + line.
  MODIFY itab FROM wa INDEX idx.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'NEXT\_LINE'.
      line = line + 1.
      limit = fill - lines.
      IF line > limit.
        line = limit.
      ENDIF.
    WHEN 'PREV\_LINE'.
      line = line - 1.
      IF line < 0.
        line = 0.
      ENDIF.
    WHEN 'NEXT\_PAGE'.
      line = line + lines.
      limit = fill - lines.
      IF line > limit.
        line = limit.
      ENDIF.
    WHEN 'PREV\_PAGE'.
      line = line - lines.
      IF line < 0.
        line = 0.
      ENDIF.
    WHEN 'LAST\_PAGE'.
      line =  fill - lines.
    WHEN 'FIRST\_PAGE'.
      line = 0.
    WHEN 'NEXT'.
      c = line + 1.
      LEAVE TO SCREEN 200.
  ENDCASE.
ENDMODULE.
MODULE get\_first\_line INPUT.
  line = c - 1.
ENDMODULE.
MODULE user\_command\_0200 INPUT.
  save\_ok = ok\_code.
  CASE save\_ok.
    WHEN 'PREVIOUS'.
      LEAVE TO SCREEN 100.
  ENDCASE.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

In the layout of dynpro 100, a variable step loop is defined with 10 repeating groups. The fields of the repeating groups are the components col1 and col2 of the structure wa of the ABAP program.

In the status STATUS\_100, the function codes FIRST\_PAGE, PREV\_PAGE, PREV\_LINE, NEXT\_LINE, NEXT\_PAGE, LAST\_PAGE, and NEXT are set on pushbuttons of the application toolbar for dynpro 100.

The layout of dynpro 200 is the same as that of dynpro 100, except that the step loop is fixed here, not variable.

In the status STATUS\_200, the function code PREVIOUS is set on a pushbutton of the application toolbar for dynpro 200.

When the program is executed, a step loop is displayed on dynpro 100, whose row number has been adjusted to fit the height of the screen but has no vertical scroll bars. On dynpro 200, a step loop is displayed which has a fixed size of 10 rows; this loop has a vertical scroll bar.

At the time of PBO, both step loops are filled from the internal table itab. For screen 100 the loop is only through the step loop and for screen 200 it is parallel through the step loop and the internal table. The step loop on dynpro 200 is restricted to the rows 5 to 25 of the internal table. To fill the work area wa on dynpro 100, a PBO module is called. This is not necessary for dynpro 200.

At the time of PAI, a module is called in both screens within the loops. In this module, the system transfers possible user entries in the step loop rows to the corresponding rows of the internal table.

For dynpro 100, the scroll function for the step loop is programmed in the PAI module user\_command\_100. To do this, the number of rows of the step loop on the screen is buffered in the helper variable step, because sy-loopc is only filled within the loop. A scrolling function does not need to be programmed for dynpro 200, because it is automatically provided by the system in the form of the scroll bar.

The synchronization between the internal table and the step loop on dynpro 200 is handled by the variable c, which is used in the addition CURSOR of the statement LOOP. It is set before dynpro 200 is called, in correspondence with the display of the table on dynpro 100. This means that the step loops on both dynpros start with the same table row. At the time of PAI of screen 200, c is read to redefine first table row after any scrolling with the scroll bar.