  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Statements in the Screen Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) →  [Handling of Messages from the PAI Event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_messages.htm) →  [Input Checks - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_check_abexas.htm) → 

Dynpros, Automatic Input Checks

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

The static next dynpro number of dynpro 100 is 100. The date field (taken from the program) date is assigned to the input field Date. The remaining input fields are the components CARRID, CONNID, and MARK of the structure DEMO\_CONN (taken from ABAP Dictionary). All of the fields are mandatory. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. Additionally, the function key F8 has the function code EXECUTE assigned to it. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE pai.

The user must first correctly fill all input fields before the module PAI can be called:

-   All of the input fields must contain values

-   The date entry must have the correct format

-   The airline must exist in the check table SCARR.

-   The flight number must exist in the check table SPFLI and match the airline.

-   The marker MARK must be one of the fixed values of the domain S\_FLAG.

The user can exit the dynpro using Cancel (F12) without correctly entering all values, since the module call was programmed accordingly using AT EXIT-COMMAND.