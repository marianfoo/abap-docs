  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Screen Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Screens, Checkboxes and Radio Buttons

The example shows how to process checkboxes and radio buttons on screens.

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

The static next screen number of screen 100 is 100. The screen fields field1 to field3 have been defined as not ready for input in the Screen Painter. Choosing one of the three radio buttons triggers the event PAI passing the function code RADIO and the field contents of the screenfields to the ABAP program. The dialog module user\_command\_0100 fills the fields field1 to field3 based on the radio button chosen. They are displayed when the screen is sent the next time. Choosing the checkbox also triggers the event PAI. In this case, the function CANCEL is passed to the ABAP program, and the dialog module user\_command\_0100 immediately ends the program.