---
title: "Dynpros, GUI Status, and Function Codes"
description: |
  This example demonstrates how to set the GUI status and evaluate function codes. Source Code PROGRAM demo_dynpro_gui_status. DATA: ok_code TYPE sy-ucomm, save_ok LIKE ok_code, output  LIKE ok_code. CALL SCREEN 100. MODULE init_screen_0100 OUTPUT. SET PF-STATUS 'STATUS_100'. SET TITLEBAR '1
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_gui_status_abexa.htm"
abapFile: "abendynpro_gui_status_abexa.htm"
keywords: ["do", "case", "data", "abendynpro", "gui", "status", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [User Interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_gui.htm) → 

Dynpros, GUI Status, and Function Codes

This example demonstrates how to set the GUI status and evaluate function codes.

Source Code

PROGRAM demo\_dynpro\_gui\_status.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      output  LIKE ok\_code.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'BACK' OR 'EXIT' OR 'CANCEL'.
      LEAVE PROGRAM.
    WHEN OTHERS.
      output = save\_ok.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The screen field of output is defined as not ready for input in Screen Painter. The module init\_screen\_0100 sets the GUI status status\_0100 and the title 100 in the PBO event. All function codes exist as menu entries, but not all of them are assigned to function keys. The function codes in the standard toolbar activate the icons and are automatically assigned to their function keys. Some of the additional function keys are assigned to the application toolbar. The module user\_command\_0100 first assigns the contents of the field ok\_code to the helper variable save\_ok and initializes ok\_code. This procedure is always recommended since it makes sure that the dynpro field ok\_code is also reinitialized in the PBO event and does not contain any unwanted values. Then the function code chosen is assigned to the field output and displayed in the corresponding screen field, except for BACK, EXIT, and CANCEL. The latter exits the program. The function code SELE can be passed to the ABAP program in the following ways:

-   Choosing Choose in the Edit menu

-   Choosing the Choose pushbutton in the application toolbar

-   Choosing F2 on the keyboard

-   Pressing the right mouse button and choosing Choose

-   Double-clicking the screen field of output

-   Entering SELE in the command field and choosing ENTER

The other function codes are passed in accordance with their definition, but without the double-click function.