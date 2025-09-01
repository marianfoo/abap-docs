# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - ABAP Statements / SET HOLD DATA

Included pages: 2


### abapset_hold_data.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

SET HOLD DATA

[Short Reference](javascript:call_link\('abapset_hold_data_shortref.htm'\))

Syntax

SET HOLD DATA *{*ON*|*OFF*}*.

Effect

During [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing, this statement makes the following standard menu items in the GUI status of the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") either effective using the addition ON or ineffective using the addition OFF:

-   System → User Profile → Hold Data
    
    This function saves the entries made by the user in the input fields of the dynpro for the duration of the current user session. Each time the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the dynpro is displayed, these values are passed to the corresponding input fields as default values. This overwrites the values transported from the ABAP program.
    
-   System → User Profile → Set Data
    
    This function works like the 'Hold Data' function except that here, the corresponding input fields are no longer ready for input for all subsequent calls of the dynpro.
    
-   System → User Profile → Delete Data
    
    This function deletes all saved data and makes the input fields that were locked using 'Set Data' ready for input again for all subsequent calls of the dynpro.
    

Each time PBO processing starts, the setting made in the static properties of the dynpro under Hold Data is set so that execution of SET HOLD DATA during [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing does not have an effect on the display of the subsequent screen layout.

Hint

The menu items above can be selected in every GUI status but only take effect when they are activated in the static properties of the dynpro using Hold Data or the statement SET HOLD DATA.

Continue
![Example](exa.gif "Example") [dynpro - Holding Data](javascript:call_link\('abendynpro_hold_data_abexa.htm'\))


### abendynpro_hold_data_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [SET HOLD DATA](javascript:call_link\('abapset_hold_data.htm'\)) → 

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

In the PBO event of the dynpro, the Hold Data attribute is activated regardless of the static default. If, after entering a value, the user chooses System → User Profile → Hold Data or Set Data, the value is displayed again when the dynpro is called a second time and whenever the program is subsequently called (in the same [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry")) unless the user chooses Delete Data. This overwrites any value assigned to the field field in the ABAP program.
