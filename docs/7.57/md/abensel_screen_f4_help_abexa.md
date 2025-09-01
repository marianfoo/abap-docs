  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN, selscreen\_event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Input Help for Parameters, ABENSEL_SCREEN_F4_HELP_ABEXA, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Input Help for Parameters

The example demonstrates a self-defined F4 help for a parameter on a selection screen.

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

This program declares a selection screen with two parameters that both refer to the column CARRID of the database table SPFLI. While the dictionary input help is used for p\_carr\_1, a separate input help is programmed for p\_carr\_2. Dynpro 100 is called for this. In the flow logic, the dialog module value\_list is called at the PBO event. The screen of dynpro 100 is not required and the system does not call any dialog modules at PAI time.

PROCESS BEFORE OUTPUT.
  MODULE value\_list.
PROCESS AFTER INPUT.

The dialog module value\_list suppresses the display of the screen layout of dynpro 100 and switches to a list display. The list contains values for the parameter p\_carr\_2. These values are also placed in the HIDE area. When a line is selected from the value list, the event AT LINE-SELECTION is raised, and the selected value is passed from the area HIDE to the field p\_carr\_2. If a valid line is selected, the system switches directly from the event block AT LINE-SELECTION back to the selection screen and fills the corresponding input field.