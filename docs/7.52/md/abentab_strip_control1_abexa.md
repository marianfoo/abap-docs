  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) →  [Subscreens, Tabstrips, and Splitter Controls - Examples](javascript:call_link\('abentab_strip_control_abexas.htm'\)) → 

Screens, Tabstrips with scrolling in the SAP GUI

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

The static subsequent screen number of screen 100 is 100. It is a tabstrip page called mytabstrip created with three tabs, PUSH1, PUSH2, PUSH3 and function codes with the same names (type p). One of three identically sized subscreen areas, sub1 to sub3, is assigned to each tab. The button is called BUTTON and has the function code 'OK'. In addition three subscreens, 110 to 130, are defined. These subscreens fit into the above mentioned subscreen areas. The screen flow logic of the subscreens 110 to 130 does not contain any module calls.

When the program is executed, the user sees a screen, the second tab page of which is active because before screen 100 is called, the component activetab of the structure mytabstrip is set to PUSH2. The user can scroll between the tab pages without triggering the PAI event. Each tab page has one of the three subscreens attached to it.

By selecting the Continue button, the PAI event is triggered and a message shows the function code of the tab assigned to the currently active tab page.