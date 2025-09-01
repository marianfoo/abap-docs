  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Statements in the Screen Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) →  [Field Help and Input Help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm) →  [Field and Input Helps - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_help_abexas.htm) → 

Screens, Screen Input Help

The example shows how to use the screen input help.

Source Code

REPORT demo\_dynpro\_f4\_help\_dynpro.
DATA: carrier(3) TYPE c,
      connection(4) TYPE c.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. The input fields have been taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The screen field carrier is assigned the search help DEMO\_F4\_DE with the search help parameter CARRID, which accesses the database table SCARR. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD carrier VALUES ('AA', 'LH').
  FIELD connection SELECT \*
                      FROM  spfli
                      WHERE carrid = carrier
                        AND connid = connection.

When choosing the F4 help for the individual fields, the user receives the following input helps:

-   For the airline carrier, the search help displays the list of airline names and copies the airline ID for the selected row to the input field. If the ID does not match the VALUES list of the flow logic, the input check triggers an error message at PAI. This means that the search help overrides the VALUES addition for the input help but not for the input check. You should therefore not use a VALUES addition.

-   For the connection, the flow logic displays the list of selected entries from database table SPFLI and copies the connection number of the selected row to the input field.