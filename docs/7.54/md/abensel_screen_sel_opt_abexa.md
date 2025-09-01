  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) →  [SELECT-OPTIONS - FOR](javascript:call_link\('abapselect-options_for.htm'\)) → 

Selection Screens, Basic Form of Selection Criteria

The example shows how the selection tables are filled in a multiple selection.

Source Code

REPORT demo\_sel\_screen\_select\_options.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA name(80) TYPE c.
    CLASS-METHODS main.
ENDCLASS.
SELECTION-SCREEN BEGIN OF SCREEN 100.
  PARAMETERS: dbtab  TYPE c LENGTH 30 DEFAULT 'SFLIGHT',
              column TYPE c LENGTH 30 DEFAULT 'CARRID'.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
  SELECT-OPTIONS selcrit FOR (start=>name).
SELECTION-SCREEN END OF SCREEN 500.
START-OF-SELECTION.
  start=>main( ).
CLASS start IMPLEMENTATION.
  METHOD main.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    name = dbtab && '-' && column.
    CALL SELECTION-SCREEN 500 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    cl\_abap\_demo\_services=>list\_table( selcrit\[\] ).
  ENDMETHOD.
ENDCLASS.

Description

On the selection screen 100, the name of the table dbtab and its column column can be specified. These are then used for the dynamic layout of the selection criterion on the selection screen 500.

Two input fields and a pushbutton to enter additional values for the selection criterion are displayed. The value which the user enters in the first input field is written to the component selcrit-low of the selection table; the value for the second field is written to the component selcrit-high.

For more complex selections, the user can use the pushbutton on the right side of the selection screen to display the GUI window for multiple selections.

The contents of the selection table are then shown in a list. The first column determines whether the subsequent values are to be included or not; the second contains the Boolean operator and the last two columns contain the limits low and high.