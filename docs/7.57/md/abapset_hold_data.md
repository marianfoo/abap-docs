  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET HOLD DATA, ABAPSET_HOLD_DATA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

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