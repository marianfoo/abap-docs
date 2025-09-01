  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) →  [Handling of Messages from the PAI Event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_field_messages.htm) →  [Input Checks - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_check_abexas.htm) → 

Dynpros, Input Checks in the Flow Logic

The example illustrates how the input checks can be performed in PAI processing.

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

The static next dynpro number of dynpro 100 is 100. The input fields have the fields carrier and connect (taken from the program) assigned to them. The function code of the pubshbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. Additionally, the function key F8 has the function code EXECUTE assigned to it. The screen flow logic is as follows:

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