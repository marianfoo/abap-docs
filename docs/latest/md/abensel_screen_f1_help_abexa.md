  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN, selscreen\_event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Field%20Help%2C%20ABENSEL_SCREEN_F1_HELP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Field Help

The example shows a user-defined F1 help on selection screens.

Source Code   

REPORT demo\_selection\_screen\_f1.
PARAMETERS: p\_carr\_1 TYPE s\_carr\_id,
            p\_carr\_2 TYPE spfli-carrid.
AT SELECTION-SCREEN ON HELP-REQUEST FOR p\_carr\_2.
  CALL SCREEN 100 STARTING AT 10 5
                  ENDING   AT 60 10.

Description   

This program declares a selection screen with two selection parameters that both refer to the data element S\_CARR\_ID from the ABAP Dictionary. While the dictionary documentation is used as online help for p\_carr\_1, a separate dynpro with the number 100 is called for p\_carr\_2. Using the Screen Painter, this dynpro is defined as a modal dialog box with the next dynpro 0, which displays the required help text as text fields. The screen does not require any flow logic.