  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_abap_statements.htm) →  [SET HOLD DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_hold_data.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Holding%20Data%2C%20ABENDYNPRO_HOLD_DATA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Holding Data

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

In the PBO event of the dynpro, the Hold Data attribute is activated regardless of the static default. If, after entering a value, the user chooses System → User Profile → Hold Data or Set Data, the value is displayed again when the dynpro is called a second time and whenever the program is subsequently called (in the same [ABAP session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_session_glosry.htm "Glossary Entry")) unless the user chooses Delete Data. This overwrites any value assigned to the field field in the ABAP program.