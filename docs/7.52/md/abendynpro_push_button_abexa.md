---
title: "Screens, Pushbuttons"
description: |
  The example shows how to process pushbuttons on screens. Source Code PROGRAM demo_dynpro_push_button . DATA: ok_code TYPE sy-ucomm, save_ok LIKE ok_code, output(8) TYPE c. CALL SCREEN 100. MODULE user_command_0100 INPUT. save_ok = ok_code. CLEAR ok_code. CASE save_ok. WHEN 'BUTTON_EXIT'
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_push_button_abexa.htm"
abapFile: "abendynpro_push_button_abexa.htm"
keywords: ["do", "if", "case", "data", "abendynpro", "push", "button", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Dynpro Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_fields.htm) →  [Screen Fields - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_abexas.htm) → 

Screens, Pushbuttons

The example shows how to process pushbuttons on screens.

Source Code

PROGRAM demo\_dynpro\_push\_button .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      output(8) TYPE c.
CALL SCREEN 100.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'BUTTON\_EXIT'.
      LEAVE PROGRAM.
    WHEN 'BUTTON\_1'.
      output = 'Button 1'(001).
    WHEN 'BUTTON\_2'.
      output = 'Button 2'(002).
    WHEN 'BUTTON\_3'.
      output = 'Button 3'(003).
    WHEN 'BUTTON\_4'.
      output = 'Button 4'(004).
    WHEN OTHERS.
      output = save\_ok.
  ENDCASE.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. The screen field of output has been set as not ready for input in the Screen Painter. If the user chooses one of the pushbuttons, the event PAI is triggered. The function code of the pushbutton is assigned to the screen field ok\_code which in turn is assigned to the ABAP field of the same name. Then the module user\_command\_0100 is processed. First, the contents of the field ok\_code are assigned to the auxiliary variable save\_ok, and ok\_code is initialized. This procedure is always recommended since it makes sure that the screen field ok\_code is also reinitialized in the PBO event and does not contain any unintended value. The control structure CASE then assigns a text symbol to the output field depending on the pushbutton chosen which is then displayed in the output field of the screen, or the program is quit when the Cancel button is chosen.