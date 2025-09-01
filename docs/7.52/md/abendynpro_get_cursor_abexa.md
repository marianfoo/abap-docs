---
title: "Screens, Determining the Cursor Position"
description: |
  The example shows how to determine the cursor position on screens. Source Code PROGRAM demo_dynpro_get_cursor . DATA: ok_code TYPE sy-ucomm, save_ok LIKE ok_code. DATA: input_output(20) TYPE c, fld(20) TYPE c, off     TYPE i, val(20) TYPE c, len     TYPE i. CALL SCREEN 100. MODULE init_scree
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_get_cursor_abexa.htm"
abapFile: "abendynpro_get_cursor_abexa.htm"
keywords: ["select", "do", "case", "data", "abendynpro", "get", "cursor", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) →  [GET CURSOR - Dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_dynpro.htm) → 

Screens, Determining the Cursor Position

The example shows how to determine the cursor position on screens.

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

The static next screen number of screen 100 is 100. All input/output fields except for the screen field of input\_output have been set as not ready for input in the Screen Painter. Module init\_screen\_0100 sets the GUI status to STATUS\_100 in the PBO event. In the GUI status, the 'Cancel' ( F12) has been activated using the function code CANCEL, and the function key F2 has been assigned the function code SELE. When the program is executed, the user may select all screen elements by double-clicking them or all interface elements linked to SELE. The output fields then show the corresponding cursor position.