---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_input_output. DATA: input  TYPE i, output TYPE i, radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c, box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c. CALL SCREEN 100. MODULE init_screen_100 OUTPUT. SET PF-STATUS 'SCREEN_100'. CLEAR input. radio1 = 'X'. CLEAR: radio2, radi
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_in_out_field_abexa.htm"
abapFile: "abendynpro_in_out_field_abexa.htm"
keywords: ["do", "if", "data", "abendynpro", "out", "field", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Processing Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_processing_screens.htm) →  [dynpro - User Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_user_actions.htm) →  [dynpro - Examples for User Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Processing%20Input%20and%20Output%20Fields%2C%20ABENDYNPRO_IN_OUT_FIELD_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

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