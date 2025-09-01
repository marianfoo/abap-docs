  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) →  [PARAMETERS, type\_options](javascript:call_link\('abapparameters_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Dynamic%20Dictionary%20Reference%2C%20ABENSEL_SCREEN_DYN_DICT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

Selection Screens - Dynamic Dictionary Reference

This example demonstrates how a dynamic dictionary reference to a selection parameter can be created.

Source Code   

REPORT demo\_sel\_screen\_parameters\_2 .
SELECTION-SCREEN BEGIN OF SCREEN 100.
   PARAMETERS name(20) TYPE c DEFAULT 'SPFLI-CARRID'.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 200.
   PARAMETERS p\_carr LIKE (name).
SELECTION-SCREEN END OF SCREEN 200.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS start IMPLEMENTATION.
  METHOD main.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    CALL SELECTION-SCREEN 200 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description   

At the event at which selection screen 200 is called, the field name must contain the name of a data type from the ABAP Dictionary. Currently, selection parameters can only refer to fields of database tables, views, and structures. The selection parameter dynamically takes the properties, that is, technical properties and help texts, from the dictionary type. If a selection text for the selection parameter is not created in the program, the field label from the dictionary appears as the description on the selection screen. Otherwise, the selection text is displayed.