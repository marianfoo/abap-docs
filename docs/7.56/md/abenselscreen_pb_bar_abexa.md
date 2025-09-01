---
title: "Selection Screens -Pushbuttons in the Toolbar"
description: |
  This example demonstrates the activation of pushbuttons in the application toolbar of the GUI status. Source Code REPORT demo_sel_screen_function_key. TABLES sscrfields. SELECTION-SCREEN BEGIN OF SCREEN 1100. PARAMETERS: p_carrid TYPE s_carr_id, p_cityfr TYPE s_from_cit. SELECTION-SCREEN:
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselscreen_pb_bar_abexa.htm"
abapFile: "abenselscreen_pb_bar_abexa.htm"
keywords: ["select", "do", "case", "method", "class", "abenselscreen", "bar", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_layout.htm) →  [SELECTION-SCREEN, FUNCTION KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_functionkey.htm) → 

Selection Screens -Pushbuttons in the Toolbar

This example demonstrates the activation of pushbuttons in the application toolbar of the GUI status.

Source Code

REPORT demo\_sel\_screen\_function\_key.
TABLES sscrfields.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
PARAMETERS: p\_carrid TYPE s\_carr\_id,
            p\_cityfr TYPE s\_from\_cit.
SELECTION-SCREEN: FUNCTION KEY 1,
                  FUNCTION KEY 2.
SELECTION-SCREEN END OF SCREEN 1100.
AT SELECTION-SCREEN.
  CASE sscrfields-ucomm.
      WHEN'FC01'.
      p\_carrid = 'LH'.
      p\_cityfr = 'Frankfurt'.
    WHEN 'FC02'.
      p\_carrid = 'UA'.
      p\_cityfr = 'Chicago'.
  ENDCASE.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS start IMPLEMENTATION.
  METHOD main.
    sscrfields-functxt\_01 = 'LH'.
    sscrfields-functxt\_02 = 'UA'.
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description

A standalone selection screen with the dynpro number 1100 is defined with two parameters. In the application toolbar, two pushbuttons are activated using FUNCTION KEY and supplied with the texts "LH" and "UA".

When the user clicks a button, the event AT SELECTION-SCREEN is raised. The input fields are filled with default values accordingly.