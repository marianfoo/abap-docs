---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_on_condition . DATA: ok_code TYPE sy-ucomm, input1(20) TYPE c, input2(20) TYPE c, input3(20) TYPE c, fld(20) TYPE c. CALL SCREEN 100. MODULE init_screen_100 OUTPUT. SET PF-STATUS 'STATUS_100'. ENDMODULE. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. MODULE cursor INPUT. G
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_on_cond_abexa.htm"
abapFile: "abendynpro_on_cond_abexa.htm"
keywords: ["select", "do", "if", "try", "data", "abendynpro", "cond", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpmodule.htm) →  [dynpro - Examples of Module Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodule_abexas.htm) → 

dynpro - Conditional Module Call

This example demonstrates how to call modules on the basis of conditions.

Source Code

PROGRAM demo\_dynpro\_on\_condition .
DATA: ok\_code TYPE sy-ucomm,
      input1(20) TYPE c, input2(20) TYPE c, input3(20) TYPE c,
      fld(20) TYPE c.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE cursor INPUT.
  GET CURSOR FIELD fld.
  MESSAGE i888(sabapdemos) WITH text-001 fld.
ENDMODULE.
MODULE module\_1 INPUT.
  MESSAGE i888(sabapdemos) WITH text-002.
ENDMODULE.
MODULE module\_2 INPUT.
  MESSAGE i888(sabapdemos) WITH text-003.
ENDMODULE.
MODULE module\_\* INPUT.
  MESSAGE i888(sabapdemos) WITH text-004 input3.
ENDMODULE.
MODULE c1 INPUT.
  MESSAGE i888(sabapdemos) WITH text-005 '1'.
ENDMODULE.
MODULE c2 INPUT.
  MESSAGE i888(sabapdemos) WITH text-005 '2' text-006 '3'.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the dynpro fields input1, input2, and input3. The function code of the pushbutton is EXECUTE. In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. Also, the F2 function key is assigned the CS function code with the function type S, and the F8 function key is assigned the EXECUTE function code without a special function type. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  CHAIN.
    FIELD: input1, input2.
    MODULE module\_1 ON CHAIN-INPUT.
    FIELD  input3 MODULE module\_\* ON \*-INPUT.
    MODULE module\_2 ON CHAIN-REQUEST.
  ENDCHAIN.
  FIELD input1 MODULE c1 AT CURSOR-SELECTION.
  CHAIN.
    FIELD: input2, input3.
    MODULE c2 AT CURSOR-SELECTION.
  ENDCHAIN.
  MODULE cursor AT CURSOR-SELECTION.

The program uses information messages to show which modules are called following user interaction and which data is transported.

-   Whenever one of the input fields 1 or 2 is not initial, the system calls the module module\_1 for any user interaction.
-   Whenever one of the three input fields is changed, the system calls the module module\_2 for any user interaction.
-   If the \* entry was made in input field 3, each user action calls the module module\_\*.
-   If the F2 function is chosen or if a text field of the dynpro is double-clicked, the module cursor is called.
-   If the F2 function is chosen or if the input field 1 is double-clicked, the module c1 is called.
-   If the F2 function is chosen or if input field 2 or 3 is double-clicked, the module cursor is called. The module c2 is never called, since the statement MODULE ... AT CURSOR SELECTION occurs twice, and only the latter instance is processed.