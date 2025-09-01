  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20CHAIN%2C%20DYNPCHAIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - CHAIN

Syntax

CHAIN.
  ...
ENDCHAIN.

Effect

The statements CHAIN and ENDCHAIN in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") define processing chains. The statements [FIELD](javascript:call_link\('dynpfield.htm'\)) and [MODULE](javascript:call_link\('dynpmodule.htm'\)) can be executed between CHAIN and ENDCHAIN. The statements between CHAIN and ENDCHAIN form a processing chain. Processing chains cannot be nested. The statement CHAIN can be specified in the event blocks at PAI and PBO, is ignored, however, in the event block at PBO.

A processing chain allows the joint processing of all the [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") specified between CHAIN and ENDCHAIN after FIELD statements:

-   The content of all dynpro fields combined as a processing chain by the FIELD statements can be checked in the shared conditions ON CHAIN-INPUT and ON CHAIN-REQUEST of the statement [MODULE](javascript:call_link\('dynpmodule.htm'\)).
-   A [warning or error message](javascript:call_link\('abendynp_field_messages.htm'\)) in a module called within a processing chain makes all input fields ready for input whose dynpro fields are combined in this processing chain using FIELD statements. After user input, PAI processing resumes at the statement CHAIN at the latest.

Example

Call of dialog modules to check input values. The dynpro fields input1 and input2 are checked in separate dialog modules check\_1 and check\_2. The dynpro fields input3 to input5 are checked in a processing chain in a shared dialog module check\_chain. Warning or error messages in the dialog modules either make only one input field input1 or input2 or all three input fields input3 to input5 ready for input.

PROCESS AFTER INPUT.
  MODULE leave\_dynpro AT EXIT-COMMAND.
  FIELD input1 MODULE check\_1 ON REQUEST.
  FIELD input2 MODULE check\_2 ON REQUEST.
  CHAIN.
    FIELD input3.
    FIELD input4.
    FIELD input5.
    MODULE check\_chain ON CHAIN-REQUEST.
  ENDCHAIN.
  MODULE handle\_user\_command.

Continue
[dynpro - ENDCHAIN](javascript:call_link\('dynpendchain.htm'\))