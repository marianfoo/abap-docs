  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpmodule.htm) →  [dynpro - Examples of Module Calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmodule_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Unconditional%20Module%20Call%2C%20ABENDYNPRO_AT_EXIT_COMM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

dynpro - Unconditional Module Call

This example demonstrates how a dynpro can be exited without the automatic input checks.

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

The static next dynpro number of dynpro 100 is 100. The input fields have the dynpro fields input1 and input2 assigned to them. The input fields are marked in their properties as required fields. The function codes of the pushbuttons are EXECUTE and CANCEL, in which CANCEL has the function type E. In GUI status STATUS\_100, the symbols Back (F3) and Cancel (F12) are activated using the function codes BACK and CANCEL. Both have the function type E. The function key F8 remains assigned to the function code EXECUTE. EXECUTE does not have the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_0100.
PROCESS AFTER INPUT.
  MODULE execute1.
  MODULE cancel AT EXIT-COMMAND.
  MODULE back AT EXIT-COMMAND.
  MODULE execute2.

Using information messages and status messages, the program demonstrates which modules are called after user actions and which data is transported.

-   When Execute is selected without input in the mandatory fields, the automatic input check demands that the mandatory fields are filled.
-   When Execute is selected with filled mandatory fields, all dynpro fields are transported and the modules execute1 and execute2 are called consecutively.
-   When Cancel is selected with or without input in the mandatory fields, the OK field is transported and the module cancel is called. The program is exited at this point.
-   When Back is selected with or without input in the mandatory fields, the OK field is transported and the module cancel is called. However, the program is not exited there, because the function code is BACK. Instead, the automatic field checks are performed. If the mandatory fields are filled, the modules execute1 and execute2 are called.

The back module is never called. Two module calls using AT EXIT-COMMAND are pointless in the dynpro flow logic. In the above example, the function code BACK is to be handled in module cancel as well. In this case, the position of the statement MODULE with AT EXIT-COMMAND is irrelevant.