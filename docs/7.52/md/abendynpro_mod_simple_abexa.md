  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen.htm) → 

Screens, Dynamic Screen Modification

The example shows how to modify screen fields at runtime.

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

The static next screen number of screen 100 is 100. The input and output fields have been copied from the structure DEMO\_CONN of the ABAP Dictionary. The bottom-most four input and output fields are assigned to the modification group MOD. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In GUI status SCREEN\_100, the function code TOGGLE is linked to a pushbutton. When the program is called, the bottommost four input and output fields are displayed as not ready for input since the variable flag initially contains a blank. The user can switch the ready-for-input status on and off using Display/Change.

Program DEMO\_DYNPRO\_MODIFY\_SCREEN demonstrates further dynamic screen modifications.