  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm) →  [PARAMETERS, value\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Value Properties of Parameters, ABENSEL_SCREEN_PARAM_VALUE_ABEXA,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Value Properties of Parameters

The example shows how to use the value\_options additions of the statement PARAMETERS.

Source Code   

REPORT demo\_sel\_screen\_parameters\_1.
SELECTION-SCREEN BEGIN OF SCREEN 100.
SELECTION-SCREEN BEGIN OF BLOCK part1 WITH FRAME TITLE text-001.
PARAMETERS: value TYPE i DEFAULT 100,
            name  TYPE sy-uname DEFAULT sy-uname,
            date  TYPE sy-datum DEFAULT '19980627'.
SELECTION-SCREEN END OF BLOCK part1.
SELECTION-SCREEN BEGIN OF BLOCK part2 WITH FRAME TITLE text-002.
PARAMETERS: field1 TYPE c LENGTH 10 DEFAULT 'input1',
            field2 TYPE c LENGTH 10 DEFAULT 'input2' LOWER CASE.
SELECTION-SCREEN END OF BLOCK part2.
SELECTION-SCREEN BEGIN OF BLOCK part3 WITH FRAME TITLE text-004.
PARAMETERS p\_carrid TYPE s\_carr\_id MATCHCODE OBJECT demo\_f4\_de.
SELECTION-SCREEN END OF BLOCK part3.
SELECTION-SCREEN BEGIN OF BLOCK part4 WITH FRAME TITLE text-003.
PARAMETERS p\_prog TYPE sy-repid MEMORY ID rid.
SELECTION-SCREEN END OF BLOCK part4.
SELECTION-SCREEN BEGIN OF BLOCK part5 WITH FRAME TITLE text-005.
PARAMETERS p\_carr TYPE spfli-carrid VALUE CHECK.
SELECTION-SCREEN END OF BLOCK part5.
SELECTION-SCREEN END OF SCREEN 100.
AT SELECTION-SCREEN OUTPUT.
  SET PARAMETER ID 'RID' FIELD 'TEST\_PROGRAM'.
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
    WRITE: / 'FIELD1 is transported UPPERCASE      : ', field1,
           / 'FIELD2 is transported without changes: ', field2.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description   

This example program consists of five parts, each illustrating one of [value\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm) additions of the statement PARAMETERS. Each example corresponds to a block on selection screen 100.

-   Part 1: The input fields of the parameters on the selection screen are prefilled with default values. The user can accept or change this value. The default value of the field name is the user name. The default value for date appears in the format defined in the user master record.
-   Part 2: Once parameters have been entered in the fields field1 and field2, they are displayed in uppercase (field1) and without any changes (field2) on a list.
-   Part 3: The search help DEMO\_F4\_DE is defined in the dictionary. The search help reads the columns CARRID and CARRNAME of the database table SCARR. Only CARRNAME is listed but CARRID is marked as an export parameter. Selecting a line places the ID of the airline CARRID in the input field.
-   Part 4: The parameter p\_prog is linked with the SPA/GPA parameter rid, which is used in the current AS ABAP version to store the name of the program processed last. The SPA/GPA parameter rid, for example, is also linked with the input fields for the program name on the dynpros of the transactions SE38 and SA38. For demonstration purposes, this parameter is explicitly set to the value TEST\_PROGRAM in this example.
-   Part 5: The parameter p\_carr is declared with reference to the field CARRID of the database table SPFLI. For this field, the check table SCARR is specified in the ABAP Dictionary. The user can only enter those values for the ID of the airline which are also contained in SCARR. The possible entries help of the input field for p\_carr displays the allowed values.