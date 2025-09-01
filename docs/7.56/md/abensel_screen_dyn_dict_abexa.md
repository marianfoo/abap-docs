  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapparameters.htm) →  [PARAMETERS, type\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapparameters_type.htm) → 

Selection Screens - Dynamic Dictionary Reference

This example demonstrates how a dynamic dictionary reference to a parameter can be created.

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

At the event at which selection screen 200 is called, the field name must contain the name of a data type from the ABAP Dictionary. Currently, parameters can only refer to fields of database tables, views, and structures. The parameter applies the attributes, that is, technical attributes and help texts, of the dictionary type dynamically. If a selection text for the parameter is not created in the program, the field label from the dictionary appears as the description on the selection screen. Otherwise, the selection text is displayed.