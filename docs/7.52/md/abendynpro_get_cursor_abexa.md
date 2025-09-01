  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [GET CURSOR - Dynpro](javascript:call_link\('abapget_cursor_dynpro.htm'\)) → 

Screens, Determining the Cursor Position

The example shows how to determine the cursor position on screens.

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

The static next screen number of screen 100 is 100. All input/output fields except for the screen field of input\_output have been set as not ready for input in the Screen Painter. Module init\_screen\_0100 sets the GUI status to STATUS\_100 in the PBO event. In the GUI status, the 'Cancel' ( F12) has been activated using the function code CANCEL, and the function key F2 has been assigned the function code SELE. When the program is executed, the user may select all screen elements by double-clicking them or all interface elements linked to SELE. The output fields then show the corresponding cursor position.