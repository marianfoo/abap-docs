---
title: "Selection Screens - Pushbuttons"
description: |
  This example demonstrates how pushbuttons with function codes can be defined on selection screens. Source Code REPORT demo_sel_screen_pushbutton. TABLES sscrfields. DATA flag(1) TYPE c. SELECTION-SCREEN: BEGIN OF SCREEN 500 AS WINDOW TITLE tit, BEGIN OF LINE, PUSHBUTTON 2(10) but1 USER-COMMAND cl
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensel_screen_button_abexa.htm"
abapFile: "abensel_screen_button_abexa.htm"
keywords: ["select", "do", "if", "case", "data", "abensel", "screen", "button", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_layout.htm) →  [SELECTION-SCREEN, PUSHBUTTON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_pushbutton.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Pushbuttons%2C%20ABENSEL_SCREEN_BUTTON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Pushbuttons

This example demonstrates how pushbuttons with function codes can be defined on selection screens.

Source Code   

REPORT demo\_sel\_screen\_pushbutton.
TABLES sscrfields.
DATA flag(1) TYPE c.
SELECTION-SCREEN:
  BEGIN OF SCREEN 500 AS WINDOW TITLE tit,
    BEGIN OF LINE,
      PUSHBUTTON 2(10) but1 USER-COMMAND cli1,
      PUSHBUTTON 12(10) text-020 USER-COMMAND cli2,
    END OF LINE,
    BEGIN OF LINE,
      PUSHBUTTON 2(10) but3 USER-COMMAND cli3,
      PUSHBUTTON 12(10) text-040 USER-COMMAND cli4,
    END OF LINE,
  END OF SCREEN 500.
AT SELECTION-SCREEN.
  MESSAGE i888(sabapdemos) WITH text-001 sscrfields-ucomm.
  CASE sscrfields-ucomm.
    WHEN 'CLI1'.
      flag = '1'.
    WHEN 'CLI2'.
      flag = '2'.
    WHEN 'CLI3'.
      flag = '3'.
    WHEN 'CLI4'.
      flag = '4'.
  ENDCASE.
START-OF-SELECTION.
  tit  = 'Four Buttons'.
  but1 = 'Button 1'.
  but3 = 'Button 3'.
  CALL SELECTION-SCREEN 500 STARTING AT 10 10.
  CASE flag.
    WHEN '1'.
      WRITE / 'Button 1 was clicked'.
    WHEN '2'.
      WRITE / 'Button 2 was clicked'.
    WHEN '3'.
      WRITE / 'Button 3 was clicked'.
    WHEN '4'.
      WRITE / 'Button 4 was clicked'.
    WHEN OTHERS.
      WRITE / 'No Button was clicked'.
  ENDCASE.

Description   

This example defines four pushbuttons on a selection screen that is displayed as a dialog box. The selection screen is defined in a chained statement for the keyword SELECTION-SCREEN.

CLI1, CLI2, CLI3, and CLI4 are used for fcode. If the user chooses a pushbutton, the runtime framework raises the AT SELECTION-SCREEN event. The program is resumed after CALL SELECTION-SCREEN only if the user chooses Execute.