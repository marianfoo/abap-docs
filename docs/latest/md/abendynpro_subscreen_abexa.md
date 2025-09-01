  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Subscreens%2C%20ABENDYNPRO_SUBSCREEN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Subscreens

This example demonstrates how to include subscreens.

Source Code   

REPORT demo\_dynpro\_subscreens.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA: number1(4) TYPE n VALUE '0110',
      number2(4) TYPE n VALUE '0130',
      field(10) TYPE c, field1(10) TYPE c, field2(10) TYPE c.
CALL SCREEN 100.
MODULE status\_100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE fill\_0110 OUTPUT.
  field = 'Entry 1'(001).
ENDMODULE.
MODULE fill\_0120 OUTPUT.
  field = field1.
ENDMODULE.
MODULE fill\_0130 OUTPUT.
  field = 'Entry 2'(002).
ENDMODULE.
MODULE fill\_0140 OUTPUT.
  field = field2.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE save\_ok INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
ENDMODULE.
MODULE user\_command\_0110 INPUT.
  IF save\_ok = 'OK1'.
    number1 = '0120'.
    field1 = field.
    CLEAR field.
  ENDIF.
ENDMODULE.
MODULE user\_command\_0130 INPUT.
  IF save\_ok = 'OK2'.
    number2 = '0140'.
    field2 = field.
    CLEAR field.
  ENDIF.
ENDMODULE.
MODULE user\_command\_100 INPUT.
  CASE save\_ok.
    WHEN 'SUB1'.
      number1 = '0110'.
    WHEN 'SUB2'.
      number1 = '0120'.
      CLEAR field1.
    WHEN 'SUB3'.
      number2 = '0130'.
    WHEN 'SUB4'.
      number2 = '0140'.
      CLEAR field2.
  ENDCASE.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. Four pushbuttons with function codes SUB1 to SUB4 and two identically sized subscreen areas area1 and area2 have been created. In the same ABAP program, four subscreen dynpros 110 to 140 are defined. The input/output field of all four subscreen dynpro has the name field. The function codes of the pushbuttons on the subscreen dynpros 110 and 130 are OK1 and OK2. The dynpro flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_100.
  CALL SUBSCREEN: area1 INCLUDING sy-repid number1,
                  area2 INCLUDING sy-repid number2.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE save\_ok.
  CALL SUBSCREEN: area1,
                  area2.
  MODULE user\_command\_100.

The dynpro flow logic of subscreen dynpros 110 and 130 is:

PROCESS BEFORE OUTPUT.
  MODULE fill\_0110*|*0130.
PROCESS AFTER INPUT.
  MODULE user\_command\_0110*|*0130.

The dynpro flow logic of subscreen dynpros 120 and 140 is:

PROCESS BEFORE OUTPUT.
  MODULE fill\_0120*|*0150.
PROCESS AFTER INPUT.

When the program is executed, a screen appears on which subscreens 110 and 130 are displayed. The pushbuttons on the main dynpro allow the user to choose between two subscreen dynpros for each screen area. The pushbuttons on the subscreen dynpros 110 and 130 allow data to be passed to the subscreen dynpros 120 and 140.

Since all subscreen dynpros use the same field name field, the identically named ABAP field is transported more than once at each PBO and PAI of the main dynpro. For this reason, the values must be stored in the auxiliary fields field1 and field2 in the ABAP program.

The function code of the pushbuttons of the subscreen dynpros is different and regular handling in an ABAP field is enough. If the function codes had the same names, it would be necessary to use multiple helper fields here as well.