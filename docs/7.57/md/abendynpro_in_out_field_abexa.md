  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Dynpro Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_fields.htm) →  [dynpro - Examples of Dynpro Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Processing Input and Output Fields, ABENDYNPRO_IN_OUT_FIELD_ABEXA, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Processing Input and Output Fields

The example shows how to process dynpro fields locally in the program.

Source Code   

PROGRAM demo\_dynpro\_input\_output.
DATA: input  TYPE i,
      output TYPE i,
      radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c,
      box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  CLEAR input.
  radio1 = 'X'.
  CLEAR: radio2, radio3.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  IF sy-ucomm = 'CANCEL'.
    LEAVE PROGRAM.
  ENDIF.
  output = input.
  box1 = radio1.
  box2 = radio2.
  box3 = radio3.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The screen fields of output, box1, box2, and box3 were defined as not ready for input in the Screen Painter. The length of input is specified so that the user can enter a nine-digit integer without thousands separators. However, the display in the output field contains up to two thousands separators. If the length of input had remained 11 digits, a runtime error could occur if users do not set thousands separators. The user entries in the input fields are passed to the ABAP program at the PAI event raised by ENTER and then assigned to the output fields in the dialog module user\_command\_100. The next time the dynpro appears, the output fields contain the appropriate values. The input fields are set in the dialog module init\_screen\_100 in the event PBO.