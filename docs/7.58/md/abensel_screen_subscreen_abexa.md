---
title: "Selection Screens - Subscreens"
description: |
  The example demonstrates how selection screens can be included in subscreens. Source Code REPORT demo_sel_screen_as_subscreen. SELECTION-SCREEN BEGIN OF SCREEN 1100 AS SUBSCREEN NESTING LEVEL 4. SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE text-010. PARAMETERS: p1(10) TYPE c, p2(10) TYPE
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensel_screen_subscreen_abexa.htm"
abapFile: "abensel_screen_subscreen_abexa.htm"
keywords: ["select", "do", "if", "case", "data", "abensel", "screen", "subscreen", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, BEGIN OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_definition.htm) →  [SELECTION-SCREEN, AS SUBSCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_subscreen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Subscreens%2C%20ABENSEL_SCREEN_SUBSCREEN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Subscreens

The example demonstrates how selection screens can be included in subscreens.

Source Code   

REPORT demo\_sel\_screen\_as\_subscreen.
SELECTION-SCREEN BEGIN OF SCREEN 1100 AS SUBSCREEN NESTING LEVEL 4.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE text-010.
PARAMETERS: p1(10) TYPE c,
            p2(10) TYPE c,
            p3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN END OF SCREEN 1100.
SELECTION-SCREEN BEGIN OF SCREEN 1200 AS SUBSCREEN NESTING LEVEL 4.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE text-020.
PARAMETERS: q1(10) TYPE c OBLIGATORY,
            q2(10) TYPE c OBLIGATORY,
            q3(10) TYPE c OBLIGATORY.
SELECTION-SCREEN END OF BLOCK b2.
SELECTION-SCREEN END OF SCREEN 1200.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA: number(4) TYPE n VALUE '1100'.
START-OF-SELECTION.
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
      number = 1100.
    WHEN 'BUTTON2'.
      number = 1200.
  ENDCASE.
ENDMODULE.
AT SELECTION-SCREEN.
  MESSAGE s888(sabapdemos) WITH text-030 sy-dynnr.

Description   

The two selection screens 1100 and 1200 are defined as subscreens. The static next dynpro number of dynpro 100 is 100. A subscreen area area and two pushbuttons with the function codes BUTTON1 and BUTTON2 are created. The dynpro flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
  CALL SUBSCREEN area INCLUDING sy-repid number.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  CALL SUBSCREEN area.
  MODULE user\_command\_0100.

When the program is executed, the screen of dynpro 100 is displayed. There, the selection screen 1100 is shown as a subscreen. The pushbuttons of the main dynpro can be used to switch between the two selection screens in the subscreen area. The mandatory input fields must be filled before it is possible to browse from selection screen 1200 to 1100. The input data is available to the program in the selection parameters at PAI.