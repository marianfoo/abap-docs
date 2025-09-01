  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Tabstrips%20with%20Scrolling%20in%20SAP%20GUI%2C%20ABENTAB_STRIP_CONTROL1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

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

The static next dynpro number of dynpro 100 is 100. It is a tabstrip page called mytabstrip created with three tabs, PUSH1, PUSH2, PUSH3 and identically named function codes of type p. One of the subscreen areas sub1 to sub3 is assigned to each tab title. The push button is called BUTTON and has the function code OK. Three subscreen dynpros 110 to 130 are also defined that fit into the subscreen areas mentioned above. The dynpro flow logic of subscreens 110 to 130 does not contain any module calls.

When the program is executed, the user sees a screen, the second tab page of which is active because before dynpro 100 is called, the component activetab of the structure mytabstrip is set to PUSH2. The user can scroll between the tab pages without raising the event PAI. One of the three subscreen dynpros is included on each tab page.

When the user chooses Continue, the PAI event is raised, and an information message displays the function code of the tab title of the page that is currently active.