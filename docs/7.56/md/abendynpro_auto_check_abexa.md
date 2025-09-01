---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_automatic_checks . DATA: ok_code TYPE sy-ucomm, date TYPE d. TABLES demo_conn. CALL SCREEN 100. MODULE init_screen_100 OUTPUT. SET PF-STATUS 'STATUS_100'. ENDMODULE. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. MODULE pai INPUT. MESSAGE i888(sabapdemos) WITH text-001. E
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_auto_check_abexa.htm"
abapFile: "abendynpro_auto_check_abexa.htm"
keywords: ["do", "try", "data", "abendynpro", "auto", "check", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Input Checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_checks.htm) →  [dynpro - Examples of Input Checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninput_check_abexas.htm) → 

dynpro - Automatic Input Checks

The example demonstrates what an automatic input check does.

Source Code

PROGRAM demo\_dynpro\_automatic\_checks .
DATA: ok\_code TYPE sy-ucomm,
      date TYPE d.
TABLES demo\_conn.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE pai INPUT.
  MESSAGE i888(sabapdemos) WITH text-001.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The date field date taken from the program is assigned to the input field Date. The remaining input fields are the components CARRID, CONNID, and MARK of the structure DEMO\_CONN taken from ABAP Dictionary. All input fields are mandatory. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. Additionally, the function key F8 is assigned the function code EXECUTE. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE pai.

The user must fill all input fields with valid values before the PAI module can be called:

-   All input fields must contain values
-   The date entry must have the correct format
-   The airline must exist in the check table SCARR.
-   The flight number must exist in the check table SPFLI and match the airline.
-   The marker MARK must be one of the fixed values of the domain S\_FLAG.

The user can exit the dynpro using Cancel (F12) without correctly entering all values, since the module call was programmed accordingly using AT EXIT-COMMAND.