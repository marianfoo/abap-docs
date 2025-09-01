  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [MODULE](javascript:call_link\('dynpmodule.htm'\)) →  [Module Call - Examples](javascript:call_link\('abenmodule_abexas.htm'\)) → 

Screens, Unconditional Module Call

The example illustrates how you can exit a screen without the automatic input checks.

Source Code

PROGRAM demo\_dynpro\_at\_exit\_command .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      input1(20) TYPE c, input2(20) TYPE c.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  MESSAGE i888(sabapdemos) WITH text-001 ok\_code input1 input2.
  IF ok\_code = 'CANCEL'.
    CLEAR ok\_code.
    LEAVE PROGRAM.
  ENDIF.
ENDMODULE.
MODULE back INPUT.
  MESSAGE i888(sabapdemos) WITH text-002 ok\_code input1 input2.
  IF ok\_code = 'BACK' OR ok\_code = 'EXIT'.
    CLEAR: ok\_code, input1, input2.
    LEAVE TO SCREEN 100.
  ENDIF.
ENDMODULE.
MODULE execute1 INPUT.
  MESSAGE i888(sabapdemos) WITH text-003 ok\_code input1 input2.
  save\_ok = ok\_code.
  CLEAR ok\_code.
ENDMODULE.
MODULE execute2 INPUT.
  MESSAGE i888(sabapdemos) WITH text-004 ok\_code input1 input2.
  IF save\_ok = 'EXECUTE'.
    MESSAGE s888(sabapdemos) WITH text-005.
  ENDIF.
ENDMODULE.

Description

The static Next-Screen-Number of screen 100 is 100. The input fields have the screen fields input1 and input2 assigned to them. The input fields are specified as obligatory fields in their attributes. The function codes of the pushbuttons are EXECUTE and CANCEL, in which CANCEL has the function type E. In GUI status STATUS\_100, the symbols Back (F3) and Cancel (F12) are activated using the function codes BACK and CANCEL. Both have the function type E. In addition, the function code EXECUTE is assigned to the function key F8. EXECUTE does not have the function type E. The screen flow logic is:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_0100.
PROCESS AFTER INPUT.
  MODULE execute1.
  MODULE cancel AT EXIT-COMMAND.
  MODULE back AT EXIT-COMMAND.
  MODULE execute2.

The program demonstrates via information reports and status messages which modules are called after user actions and which data is transported.

-   When "Execute" is selected without input to the mandatory fields, the automatic input check demands that the mandatory fields are populated.

-   When "Execute" is selected with populated mandatory fields, all screen fields are transported and the modules execute1 and execute2 are called consecutively.

-   When "Cancel" is selected with or without input to the mandatory fields, the OK field is transported and the module cancel is called. The program is exited there.

-   When you select "Back" with or without input to the mandatory fields, the OK field is transported and the module cancel is called. However, the program is not exited there, because the function code is BACK. Instead, the automatic input check is carried out. If the mandatory fields are populated, the modules execute1 and execute2 are called consecutively.

The module back is never called. Two module calls with AT EXIT-COMMAND do not make sense in the screen flow logic. In above example, the function code BACK was to be handled in module cancel as well. Then, the position of the statement MODULE with AT EXIT-COMMAND is irrelevant.