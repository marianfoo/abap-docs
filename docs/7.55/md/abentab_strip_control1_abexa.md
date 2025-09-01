  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_subscreens.htm) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentab_strip_control_abexas.htm) → 

dynpro - Tabstrips with Scrolling in SAP GUI

This example demonstrates the use of tabstrip controls with local scrolling.

Source Code

REPORT demo\_dynpro\_tabstrip\_local.
CONTROLS mytabstrip TYPE TABSTRIP.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
mytabstrip-activetab = 'PUSH2'.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'OK'.
    MESSAGE i888(sabapdemos) WITH 'MYTABSTRIP-ACTIVETAB ='
                                  mytabstrip-activetab.
  ENDIF.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. It is a tabstrip page called mytabstrip created with three tabs, PUSH1, PUSH2, PUSH3 and function codes with the same names (type p). One of the subscreen areas sub1 to sub3 is assigned to each tab title. The button is called BUTTON and has the function code OK. Three subscreen dynpros, 110 to 130, are also defined. These subscreens fit into the above mentioned subscreen areas. The screen flow logic of subscreens 110 to 130 does not contain any module calls.

When the program is executed, the user sees a screen, the second tab page of which is active because before dynpro 100 is called, the component activetab of the structure mytabstrip is set to PUSH2. The user can scroll between the tab pages without raising the event PAI. One of the three subscreen dynpros is included on each tab page.

When the user chooses Continue, the PAI event is raised, and an information message displays the function code of the tab title of the page that is currently active.