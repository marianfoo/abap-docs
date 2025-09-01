---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_push_button . DATA: ok_code TYPE sy-ucomm, save_ok LIKE ok_code, output(8) TYPE c. CALL SCREEN 100. MODULE user_command_0100 INPUT. save_ok = ok_code. CLEAR ok_code. CASE save_ok. WHEN 'BUTTON_EXIT'. LEAVE PROGRAM. WHEN 'BUTTON_1'. output = 'Button 1'(001). WHEN 'BU
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_push_button_abexa.htm"
abapFile: "abendynpro_push_button_abexa.htm"
keywords: ["do", "if", "case", "data", "abendynpro", "push", "button", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Dynpro Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_fields.htm) →  [dynpro - Examples of Dynpro Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Pushbuttons, ABENDYNPRO_PUSH_BUTTON_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Pushbuttons

This example demonstrates how pushbuttons on dynpros can be processed.

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

The static next dynpro number of dynpro 100 is 100. The screen field of output is defined as not ready for input in the Screen Painter. When the user chooses a pushbutton, the PAI event is raised. The function code of the pushbutton is assigned to the dynpro field ok\_code, which is then assigned to the identically named ABAP field. The module user\_command\_0100 is then processed. First, the content of the ok\_code field is copied to the auxiliary variable save\_ok code, and ok\_code is initialized. This procedure is always recommended since it makes sure that the dynpro field ok\_code is also reinitialized in the PBO event and does not contain any unwanted values. Next, in the CASE structure, a text symbol is assigned to the output field according to the button that the user chose. This is displayed in the output field on the dynpro. If the user chooses Cancel, the program is exited.