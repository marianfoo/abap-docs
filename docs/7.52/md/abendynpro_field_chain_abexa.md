---
title: "Screens, Input Checks in Dialog Modules"
description: |
  The example shows how to check input fields in dialog modules. Source Code PROGRAM demo_dynpro_field_chain. DATA: ok_code TYPE sy-ucomm, input1 TYPE i, input2 TYPE i, input3 TYPE i, input4 TYPE i, input5 TYPE i, input6 TYPE i, sum TYPE i. CALL SCREEN 100. MODULE init_screen_100 OUTPUT. CLEAR:
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_chain_abexa.htm"
abapFile: "abendynpro_field_chain_abexa.htm"
keywords: ["do", "if", "data", "abendynpro", "field", "chain", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Statements in the Screen Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) →  [Handling of Messages from the PAI Event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_messages.htm) →  [Input Checks - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_check_abexas.htm) → 

Screens, Input Checks in Dialog Modules

The example shows how to check input fields in dialog modules.

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
  sum = sum + : input4, input5, input6.
  IF sum <= 100.
    MESSAGE e888(sabapdemos) WITH text-004 '100' text-002.
  ENDIF.
ENDMODULE.
MODULE execution INPUT.
  MESSAGE i888(sabapdemos) WITH text-005.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. The input fields are assigned the screen fields input1 to input6. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the icon Cancel (F12) has been activated using the function code CANCEL with the function type E. The function key F8 is assigned the function code EXECUTE without any specific function type. The screen flow logic is as follows:

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
  MODULE EXECUTION.

The fields input1 to input3 are checked separately in the modules module\_1 to module\_3. Unless the user specifies an appropriate value, the screen is dislayed again and again with the corresponding field in ready-for-input mode.

The fields input4 to input6 are checked jointly in the processing chain. If input4 does not match the condition in chain\_module\_1, all three fields are reset as ready for input. The same happens if the three fields do not match the condition in chain\_module\_2.

It is not before all six fields match the conditions that the module EXECUTION is executed which issues an information message.