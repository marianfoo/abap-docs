  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) →  [SELECTION-SCREEN, FUNCTION KEY](javascript:call_link\('abapselection-screen_functionkey.htm'\)) → 

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