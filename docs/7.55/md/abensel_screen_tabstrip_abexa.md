  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, BEGIN OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_definition.htm) →  [SELECTION-SCREEN, AS SUBSCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_subscreen.htm) → 

Selection Screens - In Tabstrips

This example demonstrates how selection screens can be included in tabstrips.

Source Code

REPORT demo\_sel\_screen\_in\_tabstrip.
SELECTION-SCREEN BEGIN OF SCREEN 1100 AS SUBSCREEN NO INTERVALS.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE text-010.
PARAMETERS: p1(10) TYPE c,
            p2(10) TYPE c,
            p3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN END OF SCREEN 1100.
SELECTION-SCREEN BEGIN OF SCREEN 1200 AS SUBSCREEN NO INTERVALS.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE text-020.
PARAMETERS: q1(10) TYPE c OBLIGATORY,
            q2(10) TYPE c OBLIGATORY,
            q3(10) TYPE c OBLIGATORY.
SELECTION-SCREEN END OF BLOCK b2.
SELECTION-SCREEN END OF SCREEN 1200.
CONTROLS mytabstrip TYPE TABSTRIP.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA: number(4) TYPE n VALUE '1100'.
START-OF-SELECTION.
  mytabstrip-activetab = 'BUTTON1'.
  CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'BUTTON1'.
      mytabstrip-activetab = save\_ok.
      number = 1100.
    WHEN 'BUTTON2'.
      mytabstrip-activetab = save\_ok.
      number = 1200.
  ENDCASE.
ENDMODULE.
AT SELECTION-SCREEN.
  MESSAGE s888(sabapdemos) WITH text-030 sy-dynnr.

Description

The two selection screens 1100 and 1200 are defined as subscreens. The static next screen number of screen 100 is 100. A tab strip area called mytabstrip is created with two tab titles, BUTTON1 and BUTTON2, plus a function code with the same name (without typing). All tabs are assigned a shared subscreen area area. The screen flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
  CALL SUBSCREEN area INCLUDING sy-repid number.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  CALL SUBSCREEN area.
  MODULE user\_command\_0100.

From a programming point of view, this program is almost identical to the executable example for [Selection Screens as Subscreens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensel_screen_subscreen_abexa.htm) and shows similar behavior. The only difference is that the pushbuttons have been replaced with tab titles, and the control mytabstrip has been declared and filled. Scrolling between the tab pages is programmed in the ABAP program. Whenever a tab title is chosen, the function code of the OK field is assigned to the component activetab of the structure mytabstrip. At the same time, the variable number is filled with the dynpro number of the subscreen selection screen which is to be displayed in the subscreen area area of the tabstrip.