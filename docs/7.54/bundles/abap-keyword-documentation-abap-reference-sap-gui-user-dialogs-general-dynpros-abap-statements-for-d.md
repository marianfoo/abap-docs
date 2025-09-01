# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / General Dynpros / ABAP Statements for Dynpros / SET HOLD DATA

Included pages: 2


### abapset_hold_data.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_abap_statements.htm) → 

SET HOLD DATA

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_hold_data_shortref.htm)

Syntax

SET HOLD DATA *{*ON*|*OFF*}*.

Effect

During [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") processing, this statement turns the following standard menu items in the GUI status of the [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") either on using the addition ON or off using the addition OFF:

-   System → User Profile → Hold Data
    This function saves the entries made by the user in the input fields of the dynpro for the duration of the current user session. Each time the [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") of the dynpro is displayed, these values are passed to the corresponding input fields as default values. This overwrites the values transported from the ABAP program.
    
-   System → User Profile → Set Data
    This function works like the 'Hold Data' function except that here, the corresponding input fields are no longer ready for input for all subsequent calls of the dynpro.
    
-   System → User Profile → Delete Data
    This function deletes all saved data and makes the input fields that were locked using 'Set Data' ready for input again for all subsequent calls of the dynpro.
    

Each time PBO processing starts, the setting made in the static properties of the dynpro under Hold Data is configured so that execution of SET HOLD DATA during [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") processing does not have an effect on the display of the subsequent screen.

Note

The menu items above can be selected in every GUI status but only take effect when they are activated in the static properties of the dynpro using Hold Data or the statement SET HOLD DATA.

Continue
![Example](exa.gif "Example") [Dynpros, Holding Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_hold_data_abexa.htm)


### abendynpro_hold_data_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_abap_statements.htm) →  [SET HOLD DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_hold_data.htm) → 

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

In the PBO event of the dynpro, the Hold Data attribute is activated regardless of the static default. If, after entering a value, the user chooses System → User Profile → Hold Data or Set Data, the value is displayed again when the dynpro is called a second time and whenever the program is subsequently called (in the same [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry")) unless the user chooses Delete Data. This overwrites any value assigned to the field field in the ABAP program.
