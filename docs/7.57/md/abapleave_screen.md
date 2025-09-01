  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LEAVE [TO] SCREEN, ABAPLEAVE_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

LEAVE \[TO\] SCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_screen_shortref.htm)

Syntax

LEAVE *{* SCREEN *|* *{*TO SCREEN dynnr*}* *}*.

Variants:

[1\. LEAVE SCREEN.](#!ABAP_VARIANT_1@1@)
[2\. LEAVE TO SCREEN dynnr.](#!ABAP_VARIANT_2@2@)

Effect

This statement ends the processing of the current [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"). The current [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of the ABAP program and the current processing block of the dynpro are exited immediately.

Variant 1   

LEAVE SCREEN

Effect

The variant LEAVE SCREEN calls the current [next dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennext_dynpro_glosry.htm "Glossary Entry"). This is either specified defined statically in the properties of the current dynpro or was previously set using the statement [SET SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_screen.htm).

Variant 2   

LEAVE TO SCREEN dynnr

Effect

The variant LEAVE TO SCREEN calls the dynpro with the number dynnr as the [next dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennext_dynpro_glosry.htm "Glossary Entry"). dynnr expects a data object of the type n and the length 4. It must contain either the [dynpro number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_number_glosry.htm "Glossary Entry") of a dynpro in the [main program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_group_glosry.htm "Glossary Entry") or the value 0, otherwise an uncatchable exception is raised. This statement is a short form of the statements SET SCREEN dynnr and LEAVE SCREEN.

Hints

-   This statement does not terminate the entire dynpro sequence and instead branches to another dynpro in the same sequence. Only if the number 0 is used to branch to the next dynpro does LEAVE SCREEN terminate the dynpro sequence.
-   This statement must not be used when handling events of the [Control Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_framework_glosry.htm "Glossary Entry").