---
title: "Screens, Determinig the Cursor Position"
description: |
  The example shows how to determine the cursor position on screens. Source Code REPORT demo_dynpro_set_cursor. DATA:  field1(14) TYPE c, field2(14) TYPE c, field3(14) TYPE c, name(10) TYPE c. SELECTION-SCREEN BEGIN OF BLOCK bloc WITH FRAME. PARAMETERS: def RADIOBUTTON GROUP rad, txt RADIOBUTTON GR
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_set_cursor_abexa.htm"
abapFile: "abendynpro_set_cursor_abexa.htm"
keywords: ["select", "do", "if", "data", "abendynpro", "set", "cursor", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) →  [SET CURSOR - Dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_dynpro.htm) → 

Screens, Determinig the Cursor Position

The example shows how to determine the cursor position on screens.

Source Code

REPORT demo\_dynpro\_set\_cursor.
DATA:  field1(14) TYPE c, field2(14) TYPE c, field3(14) TYPE c,
       name(10) TYPE c.
SELECTION-SCREEN BEGIN OF BLOCK bloc WITH FRAME.
PARAMETERS: def RADIOBUTTON GROUP rad,
            txt RADIOBUTTON GROUP rad,
            f1  RADIOBUTTON GROUP rad,
            f2  RADIOBUTTON GROUP rad,
            f3  RADIOBUTTON GROUP rad.
SELECTION-SCREEN END OF BLOCK bloc.
PARAMETERS pos TYPE i.
IF txt = 'X'.
  name = 'TEXT'.
ELSEIF f1 = 'X'.
  name = 'FIELD1'.
ELSEIF f2 = 'X'.
  name = 'FIELD2'.
ELSEIF f3 = 'X'.
  name = 'FIELD3'.
ENDIF.
CALL SCREEN 100.
MODULE cursor OUTPUT.
  IF def NE 'X'.
    SET CURSOR FIELD name OFFSET pos.
  ENDIF.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE back INPUT.
  LEAVE SCREEN.
ENDMODULE.

Description

When the program is started, a selection screen is displayed which allows the user to select a cursor position. Afterwards, screen 100 is called whose static next screen number is screen 100.

The input and output fields are assigned to the fields field1 to field3 of the ABAP program. The heading is the text field TEXT, the pushbutton is the screen element PUSH. The static cursor position is preset in the screen attributes as PUSH. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE cursor.
PROCESS AFTER INPUT.
  MODULE back AT EXIT-COMMAND.

Before sending screen 100, the system sets the cursor position at PBO as specified by the user on the selection screen. If the user opts for the static default, the cursor is positioned on the pushbutton; otherwise, the cursor is positioned on the heading or one of the input fields. The position value pos is only processed for the input fields.