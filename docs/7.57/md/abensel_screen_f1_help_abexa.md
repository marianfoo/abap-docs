---
title: "Selection Screens - Field Help"
description: |
  The example shows a self-defined F1 help on selection screens. Source Code REPORT demo_selection_screen_f1. PARAMETERS: p_carr_1 TYPE s_carr_id, p_carr_2 TYPE spfli-carrid. AT SELECTION-SCREEN ON HELP-REQUEST FOR p_carr_2. CALL SCREEN 100 STARTING AT 10 5 ENDING   AT 60 10. Description Th
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensel_screen_f1_help_abexa.htm"
abapFile: "abensel_screen_f1_help_abexa.htm"
keywords: ["select", "do", "while", "if", "data", "abensel", "screen", "help", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN, selscreen\_event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Field Help, ABENSEL_SCREEN_F1_HELP_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Field Help

The example shows a self-defined F1 help on selection screens.

Source Code   

REPORT demo\_selection\_screen\_f1.
PARAMETERS: p\_carr\_1 TYPE s\_carr\_id,
            p\_carr\_2 TYPE spfli-carrid.
AT SELECTION-SCREEN ON HELP-REQUEST FOR p\_carr\_2.
  CALL SCREEN 100 STARTING AT 10 5
                  ENDING   AT 60 10.

Description   

This program declares a selection screen with two parameters that both refer to the data element S\_CARR\_ID from the ABAP Dictionary. While the dictionary documentation is used as online help for p\_carr\_1, a separate dynpro with the number 100 is called for p\_carr\_2. Using the Screen Painter, this dynpro is defined as a modal dialog box with the next dynpro 0, which displays the required help text as text fields. The screen does not require any flow logic.