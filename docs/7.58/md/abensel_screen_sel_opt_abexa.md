  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect-options.htm) →  [SELECT-OPTIONS, FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect-options_for.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Basic%20Form%20of%20Selection%20Criteria%2C%20ABENSEL_SCREEN_SEL_OPT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

Selection Screens - Basic Form of Selection Criteria

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

Two input fields and a pushbutton to enter additional values for the selection criterion are displayed. The value that the user enters in the first input field is written to the component selcrit-low of the selection table; the value for the second field is written to the component selcrit-high.

For more complex selections, the user can use the pushbutton on the right side of the selection screen to display the GUI window for multiple selections.

The content of the selection table are then output in a list. The first column determines whether the subsequent values are included or not, the second contains the Boolean operator and the last two columns contain the limits low and high.