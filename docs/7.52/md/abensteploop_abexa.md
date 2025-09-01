  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete statements of the screen flow logic](javascript:call_link\('abendynpro_obsolet.htm'\)) →  [Obsolete Processing of Step Loops](javascript:call_link\('abensteploop.htm'\)) → 

Step Loop

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

In the layout of screen 100, a variable step loop is defined with 10 repeating groups. The fields of the repeating groups are the components col1 and col2 of the wa structure of the ABAP program.

In the status STATUS\_100, the function codes FIRST\_PAGE, PREV\_PAGE, PREV\_LINE, NEXT\_LINE, NEXT\_PAGE, LAST\_PAGE, and NEXT are set on pushbuttons of the application toolbar for screen 100.

The layout for screen 200 is the same as for screen 100, except that the step loop here is fixed rather than variable.

In the status STATUS\_200, the function code PREVIOUS is set on a pushbutton of the application toolbar for screen 200.

During the execution of the program, a step loop is displayed on screen 100 that has a number of lines corresponding to the height of the screen, but that does not have a scroll bar. On screen 200, a step loop is displayed which has a fixed size of 10 rows; this loop has a vertical scroll bar.

During PBO, both loops are filled from the internal table itab; the loop on screen 100 is executed using only the step loop, whereas the loop on screen 200 is executed by the step loop and the internal table in parallel. The step loop on screen 200 is limited to rows 5 to 25 of the internal table. To fill the work area wa on screen 100, a PBO module is called. This is not necessary for screen 200.

During PAI, a module is called on both screens from within the loops, in which any user inputs in the step loop rows can be copied to the corresponding rows of the internal table.

For screen 100, the scroll function for the step loop is programmed in PAI-Modul user\_command\_100. For this purpose, the number of rows in the step loop on the screen is temporarily stored in the auxiliary variable step, as sy-loopc is only filled in the loop. For screen 200, there is no need to program a scroll function as it is supplied automatically by the system through the scroll bar.

The synchronization between the internal table and the step loop on screen 200 uses the variable c that is used in the CURSOR addition of the LOOP statement. Before screen 200 is called, it is set to the corresponding display of the table on screen 100, so that the step loops on both screens begin at the same table row. During the PAI of screen 200, c is read to determine the new first row of the table after any scrolling with the scroll bar.