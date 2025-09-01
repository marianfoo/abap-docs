  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_dynpro_statements.htm) → 

dynpro - CHAIN

Syntax

CHAIN.
  ...
ENDCHAIN.

Effect

The statements CHAIN and ENDCHAIN in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") define processing chains. The statements [FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpfield.htm) and [MODULE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpmodule.htm) can be executed between CHAIN and ENDCHAIN. The statements between CHAIN and ENDCHAIN form a processing chain. Processing chains cannot be nested. The statement CHAIN can be specified in the event blocks at PAI and PBO, is ignored, however, in the event block at PBO.

A processing chain allows the joint processing of all the [dynpro fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") specified between CHAIN and ENDCHAIN after FIELD statements:

-   The content of all dynpro fields combined as a processing chain by the FIELD statements can be checked in the shared conditions ON CHAIN-INPUT and ON CHAIN-REQUEST of the statement [MODULE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpmodule.htm).
    

-   A [warning or error message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_field_messages.htm) in a module called within a processing chain makes all input fields ready for input whose dynpro fields are combined in this processing chain using FIELD statements. After user input, PAI processing resumes at the statement CHAIN at the latest.

Example

Calls dialog modules to check input values. The dynpro fields input1 and input2 are checked in separate dialog modules check\_1 and check\_2. The dynpro fields input3 to input5 are checked in a processing chain in a shared dialog module check\_chain. Warning or error messages in the dialog modules either make only one input field input1 or input2 ready for input or all three input fields input3 to input5.

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
[dynpro - ENDCHAIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpendchain.htm)