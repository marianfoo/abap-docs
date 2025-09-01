  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Processing Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_processing_screens.htm) →  [dynpro - User Actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_user_actions.htm) →  [dynpro - Examples for User Actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Checkboxes%20and%20Radio%20Buttons%2C%20ABENDYNPRO_RADIO_BUTTON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

dynpro - Checkboxes and Radio Buttons

This example demonstrates how checkboxes and radio buttons can be processed on dynpros.

Source Code   

PROGRAM demo\_dynpro\_check\_radio .
DATA: radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c,
      field1(10) TYPE c, field2(10) TYPE c, field3(10) TYPE c,
      box TYPE c.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
CALL SCREEN 100.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'RADIO'.
      IF radio1 = 'X'.
        field1 = 'Selected!'.
        CLEAR: field2, field3.
      ELSEIF radio2 = 'X'.
        field2 = 'Selected!'.
        CLEAR: field1, field3.
      ELSEIF radio3 = 'X'.
        field3 = 'Selected!'.
        CLEAR: field1, field2.
      ENDIF.
    WHEN 'CANCEL'.
      LEAVE PROGRAM.
  ENDCASE.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The screen fields field1 to field3 are defined as not ready for input in the Screen Painter. Selecting one of the three radio buttons raises the event PAI, which passes the function code RADIO and the field content of the screen fields to the ABAP program. The dialog module user\_command\_0100 fills the fields field1 to field3 according to the radio button that was selected. These field content appears the next time the dynpro is sent. The PAI event is also raised if the checkbox is selected. In this case, the function CANCEL is passed to the ABAP program, and the dialog module user\_command\_0100 immediately ends the program.