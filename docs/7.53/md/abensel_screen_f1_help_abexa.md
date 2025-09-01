  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) →  [AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) → 

Selection Screens, Field Help

The example shows a self-defined F1 help on selection screens.

Source Code

REPORT demo\_selection\_screen\_f1.
PARAMETERS: p\_carr\_1 TYPE s\_carr\_id,
            p\_carr\_2 TYPE spfli-carrid.
AT SELECTION-SCREEN ON HELP-REQUEST FOR p\_carr\_2.
  CALL SCREEN 100 STARTING AT 10 5
                  ENDING   AT 60 10.

Description

This program declares a selection screen with two parameters both referring to the data element S\_CARR\_ID from ABAP Dictionary. While the dictionary documentation is used as online help for p\_carr\_1, a separate dynpro with the number 100 is called for p\_carr\_2. Using Screen Painter, this dynpro is defined as a modal dialog box with the next dynpro 0, which displays the required help text as text fields. The screen does not require any flow logic.