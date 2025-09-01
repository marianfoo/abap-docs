---
title: "Source Code"
description: |
  REPORT demo_dynpro_set_cursor. DATA:  field1(14) TYPE c, field2(14) TYPE c, field3(14) TYPE c, name(10) TYPE c. SELECTION-SCREEN BEGIN OF BLOCK bloc WITH FRAME. PARAMETERS: def RADIOBUTTON GROUP rad, txt RADIOBUTTON GROUP rad, f1  RADIOBUTTON GROUP rad, f2  RADIOBUTTON GROUP rad, f3  RADIOBUTTON
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_set_cursor_abexa.htm"
abapFile: "abendynpro_set_cursor_abexa.htm"
keywords: ["select", "do", "if", "data", "abendynpro", "set", "cursor", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_abap_statements.htm) →  [SET CURSOR, Dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_cursor_dynpro.htm) → 

dynpro - Defining the Cursor Position

This example demonstrates how to define the cursor position on dynpros.

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

At the start of the program, a selection screen appears on a cursor position can be selected. Afterwards, dynpro 100 is called whose static next dynpro number is dynpro 100.

The input and output fields are assigned to the fields field1 to field3 of the ABAP program. The header is the text field TEXT and the pushbutton is the screen element PUSH. The static cursor position is predefined in the dynpro attributes as PUSH. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE cursor.
PROCESS AFTER INPUT.
  MODULE back AT EXIT-COMMAND.

Before the screen of dynpro 100 is sent, the cursor position is set at PBO as specified by the user on the selection screen. If the user chooses the static default, the cursor is placed on the pushbutton, otherwise on the header or one of the input fields. The specified position pos is only respected in the input fields.