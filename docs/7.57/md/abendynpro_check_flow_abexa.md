---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_value_select. DATA: ok_code TYPE sy-ucomm, carrier TYPE spfli-carrid, connect TYPE spfli-connid. CALL SCREEN 100. MODULE init_screen_0100 OUTPUT. SET PF-STATUS 'STATUS_100'. ENDMODULE. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. MODULE module_1 INPUT. MESSAGE i888(saba
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_check_flow_abexa.htm"
abapFile: "abendynpro_check_flow_abexa.htm"
keywords: ["select", "do", "if", "data", "abendynpro", "check", "flow", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_obsolet.htm) →  [dynpro - FIELD VALUES, FIELD SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_value_select.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Obsolete Input Check Using SELECT, ABENDYNPRO_CHECK_FLOW_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Obsolete Input Check Using SELECT

The example illustrates how input checks work in PAI processing.

Source Code   

PROGRAM demo\_dynpro\_value\_select.
DATA: ok\_code TYPE sy-ucomm,
      carrier TYPE spfli-carrid,
      connect TYPE spfli-connid.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE module\_1 INPUT.
  MESSAGE i888(sabapdemos) WITH text-001 carrier
                        text-002 connect.
ENDMODULE.
MODULE module\_2 INPUT.
  MESSAGE i888(sabapdemos) WITH text-001 carrier
                        text-002 connect.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The fields carrier and connect, which were taken from the program, are assigned to the input fields. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. Additionally, the function key F8 has the function code EXECUTE assigned to it. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD carrier VALUES (NOT 'AA', 'LH', BETWEEN 'QF' AND 'UA').
  MODULE module\_1.
  FIELD connect SELECT  \*
                  FROM spfli
                  WHERE carrid = carrier AND connid = connect
                  WHENEVER NOT FOUND SEND ERRORMESSAGE 107
                                          WITH carrier connect.
  MODULE module\_2.

The user must enter a value for carrier that is in the list following VALUES before module\_1 is called. When module\_1 is called, connect has not yet been transported. The user can then only enter a value for connect, which exists together with carrier as the primary key in the database table SPFLI. If the user enters a different value, an error message appears in the status bar. Only when a correct value has been entered is connect transported and module\_2 called.