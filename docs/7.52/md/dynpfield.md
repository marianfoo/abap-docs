  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) → 

FIELD

Syntax

FIELD dynp\_field *{* *\[* MODULE mod *\[*[cond](javascript:call_link\('dynpfield_module.htm'\))*\]* *\]*
                 *|* *\[* *\[*MODULE mod*\]* [WITH](javascript:call_link\('abendynp_field_help.htm'\)) hlp *\]* *}*.

Effect

The statement FIELD of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") controls the data transport from the dynpro to the ABAP program during the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"). It can be combined with the MODULE statement to call dialog modules conditionally, to allow any input to be checked, and to allow self-programmed field and input helps at POH time and POV time.

FIELD can be used in the event blocks at [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry"), and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry"), but is ignored in the event block at PBO. dynp\_field expects a dynpro field of the current dynpro. The statement has the following effect:

-   In the event block at PAI, FIELD controls the time when the [data transport](javascript:call_link\('abendynp_field_data_transport.htm'\)) from dynpro field dynp\_field to the global data object with the same name of the ABAP program takes place.
    
-   In the event block at PAI, FIELD can be combined with a [MODULE](javascript:call_link\('dynpfield_module.htm'\)) statement to call a module mod according to the conditions cond for the dynpro field dynp\_field and to allow input checks with [error handling](javascript:call_link\('abendynp_field_messages.htm'\)).
    
-   In the event blocks at POH and POV, FIELD can either be combined with a MODULE statement (without cond condition) to call a module mod with self-programmed [field or input help](javascript:call_link\('abendynp_field_help.htm'\)) or, with the addition WITH of POH, a [data element additional documentation](javascript:call_link\('abendynp_field_help.htm'\)) can be called.
    

If a [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") is assigned to the dynpro field dynp\_field in Screen Painter, the statement FIELD is respected only if the dynpro field has been activated by the switch.

Note

The statement FIELD has two further additions, [VALUES](javascript:call_link\('dynpfield_value_select.htm'\)) and [SELECT](javascript:call_link\('dynpfield_value_select.htm'\)), for executing an obsolete value check in the flow logic.

Continue
[Data Transport at PAI Time](javascript:call_link\('abendynp_field_data_transport.htm'\))
[FIELD - MODULE](javascript:call_link\('dynpfield_module.htm'\))
[Handling of Messages from the PAI Event](javascript:call_link\('abendynp_field_messages.htm'\))
[Field Help and Input Help](javascript:call_link\('abendynp_field_help.htm'\))