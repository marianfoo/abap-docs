  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) →  [AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) → 

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

In this program, a selection screen with two parameters that are based on the data element S\_CARR\_ID of the ABAP Dictionary are declared. Whereas the Dictionary documentation is used as online help for p\_carr\_1, the system calls a separate screen with the number 100 for p\_carr\_2. Using the Screen Painter, this screen is defined as a modal dialog box with next screen 0, which displays the required help text as text fields. You are not required to program the flow logic for this screen.