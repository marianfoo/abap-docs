---
title: "Screens, Processing Input and Output Fields"
description: |
  The example shows how to process screen fields local in the program. Source Code PROGRAM demo_dynpro_input_output. DATA: input  TYPE i, output TYPE i, radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c, box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c. CALL SCREEN 100. MODULE init_screen_100 OU
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_in_out_field_abexa.htm"
abapFile: "abendynpro_in_out_field_abexa.htm"
keywords: ["do", "if", "data", "abendynpro", "out", "field", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Dynpro Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_fields.htm) →  [Screen Fields - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_abexas.htm) → 

Screens, Processing Input and Output Fields

The example shows how to process screen fields local in the program.

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

The static next screen number of screen 100 is 100. The screen fields of output, box1, box2, and box3 have been defined as not ready for input in Screen Painter. The length of input is specified so that the user can enter a nine-digit integer without thousands separators. However, the display in the output field contains up to two thousands separators. If the length of input had remained 11 digits, a runtime error could occur if users do not set thousand separators. The user entries in the input fields are passed to the ABAP program in the PAI event triggered by ENTER and then assigned to the output fields in the dialog module user\_command\_100. The next time the screen appears, the screen fields contain the appropriate values. The input fields are set in the dialog module init\_screen\_100 in the event PBO.