---
title: "Selection Screens, Input Help"
description: |
  The example illustrates a self-defined F4 help on selection screens. Source Code REPORT demo_selection_screen_f4. PARAMETERS: p_carr_1 TYPE spfli-carrid, p_carr_2 TYPE spfli-carrid. AT SELECTION-SCREEN ON VALUE-REQUEST FOR p_carr_2. CALL SCREEN 100 STARTING AT 10 5 ENDING   AT 50 10. MODULE
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f4_help_abexa.htm"
abapFile: "abensel_screen_f4_help_abexa.htm"
keywords: ["select", "do", "if", "data", "abensel", "screen", "help", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm) → 

Selection Screens, Input Help

The example illustrates a self-defined F4 help on selection screens.

Source Code

REPORT demo\_selection\_screen\_f4.
PARAMETERS: p\_carr\_1 TYPE spfli-carrid,
            p\_carr\_2 TYPE spfli-carrid.
AT SELECTION-SCREEN ON VALUE-REQUEST FOR p\_carr\_2.
  CALL SCREEN 100 STARTING AT 10 5
                  ENDING   AT 50 10.
MODULE value\_list OUTPUT.
  SUPPRESS DIALOG.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
  SET PF-STATUS space.
  NEW-PAGE NO-TITLE.
  WRITE 'Star Alliance' COLOR COL\_HEADING.
  ULINE.
  p\_carr\_2 = 'AC '.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Air Canada'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'LH '.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Lufthansa'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'SAS'.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'SAS'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'THA'.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Thai International'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'UA '.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'United Airlines'.
  HIDE p\_carr\_2.
  CLEAR p\_carr\_2.
ENDMODULE.
AT LINE-SELECTION.
  CHECK NOT p\_carr\_2 IS INITIAL.
  LEAVE TO SCREEN 0.

Description

In this program, a selection screen with two parameters that are based on column CARRID of database table SPFLI is declared. Whereas for p\_carr\_1 the input help of the Dictionary is used, a special separate input help is programmed for p\_carr\_2. Screen 100 is called for this purpose. In the flow logic, the system starts the dialog module value\_list at the PBO event. The screen layout for screen 100 is not required, and the system does not call any dialog modules at the PAI event.

PROCESS BEFORE OUTPUT.
  MODULE value\_list.
PROCESS AFTER INPUT.

The dialog module value\_list suppresses the display of the screen layout of screen 100 and switches to list display. The list shows values for the parameter p\_carr\_2 and stores them in the HIDE area. Selecting a line on the value list triggers the event AT LINE-SELECTION, automatically putting the selected value from the HIDE area in the field p\_carr\_2. If the selection is valid, the system quits the event block for AT LINE-SELECTION directly with the selection screen and fills the input field accordingly.