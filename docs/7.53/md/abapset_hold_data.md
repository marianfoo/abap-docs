  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) → 

SET HOLD DATA

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_hold_data_shortref.htm)

Syntax

SET HOLD DATA *{*ON*|*OFF*}*.

Effect

During [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") processing, this statement turns the following standard menu items in the GUI status of the [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") either on using the addition ON or off using the addition OFF:

-   System → User Profile → Hold Data
    This function saves the entries made by the user in the input fields of the dynpro for the duration of the current user session. Each time the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the dynpro is displayed, these values are passed to the corresponding input fields as default values. This overwrites the values transported from the ABAP program.
    
-   System → User Profile → Set Data
    This function works like the 'Hold Data' function except that here, the corresponding input fields are no longer ready for input for all subsequent calls of the dynpro.
    
-   System → User Profile → Delete Data
    This function deletes all saved data and makes the input fields that were locked using 'Set Data' ready for input again for all subsequent calls of the dynpro.
    

Each time PBO processing starts, the setting made in the static properties of the dynpro under Hold Data is configured so that execution of SET HOLD DATA during [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") processing does not have an effect on the display of the subsequent screen.

Note

The menu items above can be selected in every GUI status but only take effect when they are activated in the static properties of the dynpro using Hold Data or the statement SET HOLD DATA.

Continue
![Example](exa.gif "Example") [Dynpros, Holding Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_hold_data_abexa.htm)