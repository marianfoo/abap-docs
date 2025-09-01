  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [GET CURSOR, Dynpro](javascript:call_link\('abapget_cursor_dynpro.htm'\)) → 

dynpro - Determining the Cursor Position

This example demonstrates how to determine the cursor position on dynpros.

Source Code

PROGRAM demo\_dynpro\_get\_cursor .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code.
DATA: input\_output(20) TYPE c,
      fld(20) TYPE c,
      off     TYPE i,
      val(20) TYPE c,
      len     TYPE i.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'CANCEL'.
      LEAVE PROGRAM.
    WHEN 'SELE'.
      GET CURSOR FIELD fld OFFSET off VALUE val LENGTH len.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. All input/output fields except for the screen field of input\_output are set as not ready for input in the Screen Painter. The module init\_screen\_0100 sets the GUI status to STATUS\_100 in the PBO event. In the GUI status, the 'Cancel' symbol (F12) is activated using the function code CANCEL, and the function key F2 is assigned the function code SELE. When the program is executed, the user can select all screen elements by double-clicking them or all interface elements linked with SELE. The output fields on the screen return the cursor position.