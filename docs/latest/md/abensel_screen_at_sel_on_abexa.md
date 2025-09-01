  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) →  [AT SELECTION-SCREEN, selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Block%20Processing%20and%20Radio%20Button%20Processing%2C%20ABENSEL_SCREEN_AT_SEL_ON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Block Processing and Radio Button Processing

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

In the event blocks AT SELECTION-SCREEN ON BLOCK and AT SELECTION-SCREEN ON RADIOBUTTON GROUP the user input is checked and error messages are displayed if necessary.

If the user does not enter any ascending numbers in a block part1, the entire block is made ready for input again.

If the user does not change the radio buttons of group rad, a warning appears.