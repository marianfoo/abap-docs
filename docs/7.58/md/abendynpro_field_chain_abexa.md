  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Processing Screens](javascript:call_link\('abenabap_dynpro_processing_screens.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) →  [dynpro - Examples of Input Checks](javascript:call_link\('abeninput_check_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Input%20Checks%20in%20Dialog%20Modules%2C%20ABENDYNPRO_FIELD_CHAIN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

dynpro - Input Checks in Dialog Modules

This example demonstrates how to check input fields in dialog modules.

Source Code   

PROGRAM demo\_dynpro\_field\_chain.
DATA: ok\_code TYPE sy-ucomm,
      input1 TYPE i, input2 TYPE i, input3 TYPE i,
      input4 TYPE i, input5 TYPE i, input6 TYPE i,
      sum TYPE i.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  CLEAR: input1, input2, input3, input4, input5, input6.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE module\_1 INPUT.
  IF input1 < 50.
    MESSAGE e888(sabapdemos) WITH text-001 '50' text-002.
  ENDIF.
ENDMODULE.
MODULE module\_2 INPUT.
  IF input2 < 100.
    MESSAGE e888(sabapdemos) WITH text-001 '100' text-002.
  ENDIF.
ENDMODULE.
MODULE module\_3 INPUT.
  IF input3 < 150.
    MESSAGE e888(sabapdemos) WITH text-001 '150' text-002.
  ENDIF.
ENDMODULE.
MODULE chain\_module\_1 INPUT.
  IF input4 < 10.
    MESSAGE e888(sabapdemos) WITH text-003 '10' text-002.
  ENDIF.
ENDMODULE.
MODULE chain\_module\_2 INPUT.
  CLEAR sum.
  sum += input4.
  sum += input5.
  sum += input6.
  IF sum <= 100.
    MESSAGE e888(sabapdemos) WITH text-004 '100' text-002.
  ENDIF.
ENDMODULE.
MODULE execution INPUT.
  MESSAGE i888(sabapdemos) WITH text-005.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the dynpro fields input1 to input6. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. The function key F8 is assigned the function code EXECUTE without a special function type. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD input1 MODULE module\_1.
  FIELD input2 MODULE module\_2.
  FIELD input3 MODULE module\_3.
  CHAIN.
    FIELD input4.
    MODULE chain\_module\_1.
    FIELD input5.
    FIELD input6 MODULE chain\_module\_2.
  ENDCHAIN.
  MODULE execution.

The fields input1 to input3 are checked separately in the modules module\_1 to module\_3. As long as the user does not enter a corresponding value, the screen layout is repeatedly displayed with the appropriate field ready for input.

The fields input4 to input6 are checked together in the processing chain. If input4 does not match the condition in chain\_module\_1, all three fields are made ready for input again. The same applies if the three fields do not fulfill the condition in chain\_module\_2.

The execution module, from which an information message is displayed, is not executed until all six fields fulfill the appropriate conditions.