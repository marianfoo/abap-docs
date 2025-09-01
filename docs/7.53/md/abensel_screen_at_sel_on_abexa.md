  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) → 

Selection Screens, Block Processing and Radio Button Processing

This example demonstrates how blocks and radio buttons are processed in selection screens.

Source Code

REPORT demo\_at\_selection\_on\_block .
SELECTION-SCREEN BEGIN OF BLOCK part1 WITH FRAME.
PARAMETERS: number1 TYPE i,
            number2 TYPE i,
            number3 TYPE i.
SELECTION-SCREEN END OF BLOCK part1.
SELECTION-SCREEN BEGIN OF BLOCK part2 WITH FRAME.
PARAMETERS: r1 RADIOBUTTON GROUP rad DEFAULT 'X',
            r2 RADIOBUTTON GROUP rad,
            r3 RADIOBUTTON GROUP rad.
SELECTION-SCREEN END OF BLOCK part2.
AT SELECTION-SCREEN ON BLOCK part1.
  IF number3 <= number2 OR
     number2 <= number1.
    MESSAGE e888(sabapdemos) WITH text-001.
  ENDIF.
AT SELECTION-SCREEN ON RADIOBUTTON GROUP rad.
  IF r1 = 'X'.
    MESSAGE w888(sabapdemos) WITH text-002.
  ENDIF.

Description

In the event blocks AT SELECTION-SCREEN ON BLOCK and AT SELECTION-SCREEN ON RADIOBUTTON GROUP the user input is validated and error messages are displayed if applicable.

If the user does not enter any ascending numbers in a block part1, the entire block is made ready for input again.

If the user does not change the radio buttons of group rad, a warning appears.