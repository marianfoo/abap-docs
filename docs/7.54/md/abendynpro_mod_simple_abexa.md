---
title: "Dynpros, Dynamic Screen Modifications"
description: |
  This example demonstrates how to modify dynpro fields at runtime. Source Code REPORT demo_dynpro_modify_simple . DATA: ok_code TYPE sy-ucomm, save_ok TYPE sy-ucomm. DATA flag(1) TYPE c. CALL SCREEN 100. MODULE status_0100 OUTPUT. SET PF-STATUS 'SCREEN_100'. LOOP AT SCREEN INTO DATA(screen_wa
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_mod_simple_abexa.htm"
abapFile: "abendynpro_mod_simple_abexa.htm"
keywords: ["loop", "do", "if", "case", "data", "abendynpro", "mod", "simple", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_screen.htm) → 

Dynpros, Dynamic Screen Modifications

This example demonstrates how to modify dynpro fields at runtime.

Source Code

REPORT demo\_dynpro\_modify\_simple .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA flag(1) TYPE c.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MOD'.
      IF flag = ' '.
        screen\_wa-input = '0'.
      ELSEIF flag = 'X'.
        screen\_wa-input = '1'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.
MODULE cancel.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'TOGGLE'.
      IF flag = ' '.
        flag = 'X'.
      ELSEIF flag = 'X'.
        flag = ' '.
      ENDIF.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input and output fields are from the structure DEMO\_CONN in ABAP Dictionary. The bottom four input and output fields are assigned to the modification group MOD. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In GUI status SCREEN\_100, the function code TOGGLE is associated with a pushbutton. When the program is called, the four input/output fields at the bottom are not displayed as ready for input, because the variable flag initially contains a blank. The user can make the fields ready for input or not by using Display/Change.

The program DEMO\_DYNPRO\_MODIFY\_SCREEN demonstrates further dynamic screen modifications.