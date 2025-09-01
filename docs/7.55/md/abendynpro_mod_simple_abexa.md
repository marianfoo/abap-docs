  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)) → 

dynpro - Dynamic Screen Modification

This example demonstrates how to modify dynpro fields at runtime.

Source Code

REPORT demo\_dynpro\_modify\_simple .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA flag(1) TYPE c.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MOD'.
      IF flag = ' '.
        screen\_wa-input = '0'.
      ELSEIF flag = 'X'.
        screen\_wa-input = '1'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.
MODULE cancel.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'TOGGLE'.
      IF flag = ' '.
        flag = 'X'.
      ELSEIF flag = 'X'.
        flag = ' '.
      ENDIF.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input and output fields are from the structure DEMO\_CONN in ABAP Dictionary. The bottom four input and output fields are assigned to the modification group MOD. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In GUI status SCREEN\_100, the function code TOGGLE is associated with a pushbutton. When the program is called, the four input/output fields at the bottom are not displayed as ready for input, because the variable flag initially contains a blank. The user can make the fields ready for input or not by using Display/Change.

The program DEMO\_DYNPRO\_MODIFY\_SCREEN demonstrates further dynamic screen modifications.