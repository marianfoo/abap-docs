  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) →  [PARAMETERS - type\_options](javascript:call_link\('abapparameters_type.htm'\)) → 

Selection screens, dynamic Dictionary reference

The example demonstrates how you can create a dynamic Dictionary reference to a parameter.

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

At the event at which selection screen 200 is called, the field name must contain the name of a data type from the ABAP Dictionary. At present, only the reference to fields of database tables, views and structures is supported. The parameter dynamically takes over the attributes of the type from the Dictionary, that is, technical properties and help texts. If in the program no selection text is created for the parameter, on the selection screen the field label from the Dictionary appears. Otherwise the selection text is used.