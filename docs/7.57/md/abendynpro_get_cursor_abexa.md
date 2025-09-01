  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm) →  [GET CURSOR, Dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_dynpro.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Determining the Cursor Position, ABENDYNPRO_GET_CURSOR_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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