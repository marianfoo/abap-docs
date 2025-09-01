  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [MODULE](javascript:call_link\('dynpmodule.htm'\)) →  [Module Call - Examples](javascript:call_link\('abenmodule_abexas.htm'\)) → 

Screens, Conditional Module Call

The example shows how to call modules on a condition-related basis.

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

The static next screen number of screen 100 is 100. The input fields have been assigned the screen fields input1, input2, and input3. The function code of the pubshbutton is EXECUTE. In GUI status STATUS\_100, the icon Cancel (F12) has been activated using the function code CANCEL with the function type E. Also, the F2 function key has been assigned the CS function code with the function type S, and the F8 function key has been assigned the EXECUTE function code without any specific function type. The screen flow logic is as follows:

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

Issuing information messages, the program shows which modules are called after which user actions and which data is transported:

-   If one of the input fields 1 or 2 is not initial, each user action calls module module\_1

-   If one of the three input fields has been modified, each user action calls module module\_2.

-   If a \* entry has been made in input field 3, each user action calls module module\_\*.

-   If the F2 function is chosen or if a text field of the screen is double-clicked, module cursor is called.

-   If the F2 function is chosen or if the input field 1 is double-clicked, module c1 is called.

-   If the F2 function is chosen or if input field 2 or 3 is double-clicked, module cursor is called. Module c2 is never called since the statement MODULE ... AT CURSOR SELECTION occurs twice and only the last one is processed.