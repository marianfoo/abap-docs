  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN - screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) →  [SELECTION-SCREEN - PUSHBUTTON](javascript:call_link\('abapselection-screen_pushbutton.htm'\)) → 

Selection Screens, Pushbuttons

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

“CLI1", "CLI2", "CLI3", and "CLI4" are used for fcode. If the user chooses a pushbutton, the runtime environment triggers the AT SELECTION-SCREEN event. The program is resumed after CALL SELECTION-SCREEN only if the user chooses Execute.