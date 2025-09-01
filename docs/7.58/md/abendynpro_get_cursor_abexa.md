---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_get_cursor . DATA: ok_code TYPE sy-ucomm, save_ok LIKE ok_code. DATA: input_output(20) TYPE c, fld(20) TYPE c, off     TYPE i, val(20) TYPE c, len     TYPE i. CALL SCREEN 100. MODULE init_screen_0100 OUTPUT. SET PF-STATUS 'STATUS_100'. ENDMODULE. MODULE user_command_0
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_get_cursor_abexa.htm"
abapFile: "abendynpro_get_cursor_abexa.htm"
keywords: ["select", "do", "if", "case", "data", "abendynpro", "get", "cursor", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_abap_statements.htm) →  [GET CURSOR, Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_dynpro.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Determining%20the%20Cursor%20Position%2C%20ABENDYNPRO_GET_CURSOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

dynpro - Determining the Cursor Position

This example demonstrates how to determine the cursor position on dynpros.

Source Code   

PROGRAM demo\_dynpro\_get\_cursor .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code.
DATA: input\_output(20) TYPE c,
      fld(20) TYPE c,
      off     TYPE i,
      val(20) TYPE c,
      len     TYPE i.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'CANCEL'.
      LEAVE PROGRAM.
    WHEN 'SELE'.
      GET CURSOR FIELD fld OFFSET off VALUE val LENGTH len.
  ENDCASE.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. All input/output fields except for the screen field of input\_output are set as not ready for input in the Screen Painter. The module init\_screen\_0100 sets the GUI status to STATUS\_100 in the PBO event. In the GUI status, the 'Cancel' symbol (F12) is activated using the function code CANCEL, and the function key F2 is assigned the function code SELE. When the program is executed, the user can select all screen elements by double-clicking them or all interface elements linked with SELE. The output fields on the screen return the cursor position.