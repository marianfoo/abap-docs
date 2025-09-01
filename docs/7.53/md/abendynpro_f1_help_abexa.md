---
title: "Dynpros, Field Help"
description: |
  This example demonstrates how a field help is implemented on dynpros. Source Code REPORT demo_dynpro_f1_help. DATA:  text     TYPE c LENGTH 30, docu_num TYPE c LENGTH 4, int      TYPE i, links    TYPE TABLE OF tline, field5   TYPE c LENGTH 10, field6   TYPE c LENGTH 10. TABLES demof1help. text =
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_f1_help_abexa.htm"
abapFile: "abendynpro_f1_help_abexa.htm"
keywords: ["do", "if", "case", "class", "data", "abendynpro", "help", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) →  [Field Help and Input Help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_field_help.htm) →  [Field and Input Helps - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_help_abexas.htm) → 

Dynpros, Field Help

This example demonstrates how a field help is implemented on dynpros.

Source Code

REPORT demo\_dynpro\_f1\_help.
DATA:  text     TYPE c LENGTH 30,
       docu\_num TYPE c LENGTH 4,
       int      TYPE i,
       links    TYPE TABLE OF tline,
       field5   TYPE c LENGTH 10,
       field6   TYPE c LENGTH 10.
TABLES demof1help.
text = text-001.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE f1\_help\_field4 INPUT.
  int = int + 1.
  CASE int.
    WHEN 1.
      docu\_num = '0100'.
    WHEN 2.
      docu\_num = '0200'.
      int = 0.
  ENDCASE.
ENDMODULE.
MODULE f1\_help\_field5 INPUT.
  CALL FUNCTION 'HELP\_OBJECT\_SHOW\_FOR\_FIELD'
       EXPORTING
            doklangu         = sy-langu
            doktitle         = text-002
            called\_for\_tab   = 'DEMOF1HELP'
            called\_for\_field = 'FIELD1'.
ENDMODULE.
MODULE f1\_help\_field6 INPUT.
  CALL FUNCTION 'HELP\_OBJECT\_SHOW'
       EXPORTING
            dokclass = 'TX'
            doklangu = sy-langu
            dokname  = 'DEMO\_FOR\_F1\_HELP'
            doktitle = text-003
       TABLES
            links    = links.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the fields DEMOF1HELP-FIELD1, DEMOF1HELP-FIELD2, DEMOF1HELP-FIELD3, and DEMOF1HELP-FIELD4 from ABAP Dictionary and the fields field5 and field6 from the ABAP program. The function code of the pushbutton is CANCEL with the function type E. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON HELP-REQUEST.
  FIELD demof1help-field4 MODULE f1\_help\_field4 WITH docu\_num.
  FIELD field5 MODULE f1\_help\_field5.
  FIELD field6 MODULE f1\_help\_field6.

The components FIELD1 through FIELD4 of the structure DEMOF1HELP refer to the data element DEMOF1TYPE. This data element is documented, and also has two supplements with numbers 0100 and 0200. The user sees the following field help:

-   If the user chooses F1 on the input field for DEMOF1HELP-FIELD1, the data element documentation of DEMOF1TYPE is displayed since the field is not specified after PROCESS ON HELP-REQUEST.

-   If the user chooses F1 repeatedly for the input fields DEMOF1HELP-FIELD2 and DEMOF1HELP-FIELD3, the data element documentation is displayed, along with the supplement documentation for either 0100 or 0200. The necessary assignments are stored statically in the database table THLPF.

-   If the user chooses F1 repeatedly for the input field DEMOF1HELP-FIELD4, the data element documentation is displayed, along with the supplement documentation for either 0100 or 0200. The variable docu\_num is filled accordingly in the dialog module f1\_help\_field2.

-   If the user chooses F1 on the input field for field5, the data element documentation of DEMOF1TYPE is displayed since this is called in the dialog module f1\_help\_field5 by the function module HELP\_OBJECT\_SHOW\_FOR\_FIELD.

-   If the user chooses F1 on the input field for field6, the SAPscript document DEMO\_FOR\_F1\_HELP is displayed since this is called in the dialog module f1\_help\_field6 by the function module HELP\_OBJECT.