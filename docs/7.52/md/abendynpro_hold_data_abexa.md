  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [SET HOLD DATA](javascript:call_link\('abapset_hold_data.htm'\)) → 

Dynpros, Holding Data

This example demonstrates how to hold input data across transactions.

Source Code

REPORT demo\_dynpro\_set\_hold\_data.
DATA field(10) TYPE c.
CALL SCREEN 100.
field = 'XXXXXXXXXX'.
CALL SCREEN 100.
MODULE hold\_data OUTPUT.
  SET HOLD DATA ON.
ENDMODULE.

Description

The static next dynpro of dynpro 100 is 0. It contains a single input/output field field. The dynpro flow logic is:

PROCESS BEFORE OUTPUT.
  MODULE hold\_data.
PROCESS AFTER INPUT.

In the PBO event of the dynpro, the Hold Data attribute is activated regardless of the static default. If, after entering a value, the user chooses System → User Profile → Hold Data or Set Data, the value is displayed again when the dynpro is called a second time and whenever the program is subsequently called (in the same [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry")) unless the user chooses Delete Data. This overwrites any value assigned to the field field in the ABAP program.