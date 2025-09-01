  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [FIELD](javascript:call_link\('dynpfield.htm'\)) →  [FIELD - Data Transport in Event PAI](javascript:call_link\('abendynp_field_data_transport.htm'\)) → 

Dynpros, FIELD Statement

This example demonstrates how to transport data using the statement FIELD.

Source Code

PROGRAM demo\_dynpro\_field.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c, box4(1) TYPE c,
      mod1\_result1(1) TYPE c, mod1\_result2(1) TYPE c,
      mod1\_result3(1) TYPE c, mod1\_result4(1) TYPE c,
      mod2\_result1(1) TYPE c, mod2\_result2(1) TYPE c,
      mod2\_result3(1) TYPE c, mod2\_result4(1) TYPE c,
      mod3\_result1(1) TYPE c, mod3\_result2(1) TYPE c,
      mod3\_result3(1) TYPE c, mod3\_result4(1) TYPE c.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  CLEAR:  box1, box2, box3, box4.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'CANCEL'.
    LEAVE PROGRAM.
  ENDIF.
ENDMODULE.
MODULE module\_1 INPUT.
  mod1\_result1 = box1.
  mod1\_result2 = box2.
  mod1\_result3 = box3.
  mod1\_result4 = box4.
ENDMODULE.
MODULE module\_2 INPUT.
  mod2\_result1 = box1.
  mod2\_result2 = box2.
  mod2\_result3 = box3.
  mod2\_result4 = box4.
ENDMODULE.
MODULE module\_3 INPUT.
  mod3\_result1 = box1.
  mod3\_result2 = box2.
  mod3\_result3 = box3.
  mod3\_result4 = box4.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The checkboxes which are ready for input are assigned the dynpro fields box1, box2, box3, and box4. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE user\_command\_0100.
  MODULE module\_1.
  FIELD box2.
  MODULE module\_2.
  FIELD: box1, box3.
  MODULE module\_3.

In GUI status STATUS\_100, the Cancel icon (F12) is activated using the function code CANCEL. If the user selects the checkboxes ready for input and triggers the PAI event by pressing Enter, the output fields indicate which dynpro field is available in which dialog module.

-   The screen field box4 is transported in the PAI event, since it does not occur in any FIELD statements.

-   Dynpro field box2 is not transported until before the dialog module module\_2 is called and is therefore not available in user\_command\_0100 or module\_1.

-   Dynpro fields box1 and box3 are transported before dialog module module\_3, and are therefore only available in that module.