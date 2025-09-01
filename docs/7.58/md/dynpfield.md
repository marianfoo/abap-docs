  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20FIELD%2C%20DYNPFIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - FIELD

Syntax

FIELD dynp\_field *{* *\[* MODULE mod *\[*[cond](javascript:call_link\('dynpfield_module.htm'\))*\]* *\]*
                 *|* *\[* *\[*MODULE mod*\]* [WITH](javascript:call_link\('abendynp_field_help.htm'\)) hlp *\]* *}*.

Effect

The statement FIELD of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") controls the data transport from the dynpro to the ABAP program during the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"). It can also be linked with the MODULE statement to call dialog modules conditionally, to allow any input to be checked, and to allow self-programmed field and input helps at POH time and POV time.

FIELD can be specified in the event blocks at [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry"), and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry"), but is ignored in the event block at PBO. dynp\_field expects a dynpro field of the current dynpro. The statement has the following effect:

-   In the event block at PAI, FIELD controls the time of [data transport](javascript:call_link\('abendynp_field_data_transport.htm'\)) from the dynpro field dynp\_field to the identically named global data object of the ABAP program takes place.
-   In the event block at PAI, FIELD can be linked with a [MODULE](javascript:call_link\('dynpfield_module.htm'\)) statement to call a module mod depending on the conditions cond for the dynpro field dynp\_field and to allow input checks with [error handling](javascript:call_link\('abendynp_field_messages.htm'\)).
-   In the event blocks at POH and POV, FIELD can either be linked with a MODULE statement (without a cond condition) to call a module mod with a self-programmed [field help or input help](javascript:call_link\('abendynp_field_help.htm'\)) or the addition WITH of POH can be used to call [supplementary data element documentation](javascript:call_link\('abendynp_field_help.htm'\)).

If a switch is assigned to the dynpro field dynp\_field in the [Screen Painter](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry"), the statement FIELD is respected only if the dynpro field has been activated by the switch.

Hint

The statement FIELD has two further additions, [VALUES](javascript:call_link\('dynpfield_value_select.htm'\)) and [SELECT](javascript:call_link\('dynpfield_value_select.htm'\)), for executing an obsolete value check in the flow logic.

Continue
[dynpro - FIELD, Data Transport at PAI Time](javascript:call_link\('abendynp_field_data_transport.htm'\))
[dynpro - FIELD, MODULE](javascript:call_link\('dynpfield_module.htm'\))
[dynpro - FIELD, Handling of Messages from the PAI Event](javascript:call_link\('abendynp_field_messages.htm'\))
[dynpro - FIELD, Field Help and Input Help](javascript:call_link\('abendynp_field_help.htm'\))