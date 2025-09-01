  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

LEAVE \[TO\] SCREEN

[Short Reference](javascript:call_link\('abapleave_screen_shortref.htm'\))

Syntax

LEAVE *{* SCREEN *|* *{*TO SCREEN dynnr*}* *}*.

Variants:

[1\. LEAVE SCREEN.](#!ABAP_VARIANT_1@1@)
[2\. LEAVE TO SCREEN dynnr.](#!ABAP_VARIANT_2@2@)

Effect

This statement ends the processing of the current [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). The current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") of the ABAP program and the current processing block of the dynpro are exited immediately.

Variant 1

LEAVE SCREEN.

Effect

The variant LEAVE SCREEN calls the current [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry"). This is either specified defined statically in the properties of the current dynpro or was set earlier using the statement [SET SCREEN](javascript:call_link\('abapset_screen.htm'\)).

Variant 2

LEAVE TO SCREEN dynnr.

Effect

The variant LEAVE TO SCREEN calls the dynpro with the number dynnr as the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry"). dynnr expects a data object of the type n and the length 4. It must contain either the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") of a dynpro in the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") or the value 0. If it does not, an uncatchable exception is raised. This statement is a short form of the statements SET SCREEN dynnr and LEAVE SCREEN.

Hints

-   This statement does not terminate the entire dynpro sequence; instead it branches to another dynpro in the same sequence. Only if the number 0 is used to branch to the next dynpro does LEAVE SCREEN terminate the dynpro sequence.

-   This statement must not be used when handling events of the [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry").