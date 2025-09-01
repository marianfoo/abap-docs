  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [FIELD](javascript:call_link\('dynpfield.htm'\)) →  [Handling of Messages from the PAI Event](javascript:call_link\('abendynp_field_messages.htm'\)) →  [Input Checks - Examples](javascript:call_link\('abeninput_check_abexas.htm'\)) → 

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