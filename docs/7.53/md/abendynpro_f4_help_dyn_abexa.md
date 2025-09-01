  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [FIELD](javascript:call_link\('dynpfield.htm'\)) →  [Field Help and Input Help](javascript:call_link\('abendynp_field_help.htm'\)) →  [Field and Input Helps - Examples](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

Dynpros, Dynpro Input Help

This example demonstrates how input helps can be used on dynpros.

Source Code

REPORT demo\_dynpro\_f4\_help\_dynpro.
DATA: carrier(3) TYPE c,
      connection(4) TYPE c.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The dynpro field carrier is assigned the search help DEMO\_F4\_DE with the search help parameter CARRID which accesses the database table SCARR. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD carrier VALUES ('AA', 'LH').
  FIELD connection SELECT \*
                      FROM  spfli
                      WHERE carrid = carrier
                        AND connid = connection.

When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   For the airline carrier, the search help displays the list of airline names and copies the airline ID for the selected row into the input field. If the airline code is not one of those listed in the VALUES list of the flow logic, the input check triggers an error message in the PAI event. The search help, therefore, overrides the VALUES addition for the input help, but not for the input checks. For this reason, do not use a VALUES addition here.

-   For the connection, the flow logic displays the list of selected entries from the database table SPFLI and copies the connection number of the selected row into the input field.