  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) → 

dynpro - Input Checks in Dialog Modules

Input checks in PAI modules are enabled by first transporting the content of the input fields to the ABAP program. This is where the content can then be checked. Any errors can be corrected on the screen before further modules are called. This is made possible by combining the statements [FIELD](javascript:call_link\('dynpfield.htm'\)) and [CHAIN](javascript:call_link\('dynpchain.htm'\)) in dynpro flow logic with [messages](javascript:call_link\('abendynp_field_messages.htm'\)).

-   [Checking Single Fields](#abenabap-dynpros-checks-mod-1--------checking-multiple-fields---@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_2)

-   [Defining Input-Enabled Fields and Data Transport](#abenabap-dynpros-checks-mod-3--------checking-fields-repeatedly---@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_4)

-   [Other Functions in the FIELD and CHAIN Statements](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_5)

Checking Single Fields

If a [warning or error message](javascript:call_link\('abendynp_field_messages.htm'\)) is sent in a module mod whose call is combined with a [FIELD](javascript:call_link\('dynpfield.htm'\)) statement

FIELD f MODULE mod.

the input field in question becomes the only input-enabled field on the current dynpro and the input can be corrected. If the field is only checked once, PAI resumes directly after the FIELD statement, and the preceding modules are not called again.

Checking Multiple Fields

If a [warning or error message](javascript:call_link\('abendynp_field_messages.htm'\)) is sent in a module mod1, mod2, ... whose call takes place in a [processing chain](javascript:call_link\('dynpchain.htm'\))

CHAIN.
  FIELD: f1, f2,...
  MODULE mod1.
  FIELD: g1, g2,...
  MODULE mod2.
...
ENDCHAIN.

the input fields of all dynpro fields in the processing chain become input-enabled on the current dynpro. This includes fields after the [MODULE](javascript:call_link\('dynpmodule.htm'\)) statement in [FIELD](javascript:call_link\('dynpfield.htm'\)) statements. None of the other fields are input-enabled. Even when a MODULE statement is combined with a FIELD statement within a processing chain, all input fields in the chain become input-enabled and not just the field in question. If the fields in the processing chain are only checked once, PAI resumes directly after the CHAIN statement, and the preceding modules are not called again.

Defining Input-Enabled Fields and Data Transport

In the case of warnings and error messages, a [FIELD](javascript:call_link\('dynpfield.htm'\)) statement outside of a processing chain defines whether a single field is input-enabled. [FIELD](javascript:call_link\('dynpfield.htm'\)) statements between [CHAIN - ENDCHAIN](javascript:call_link\('dynpchain.htm'\)), on the other hand, define whether multiple fields are input-enabled. Here, all fields associated using FIELD are transported back to the screen without PBO taking place. This ensures that any changes to the field content are displayed before a message. This also applies to the sending of information messages where no fields are input-enabled.

Checking Fields Repeatedly

It may be necessary to specify a single dynpro field in multiple [FIELD](javascript:call_link\('dynpfield.htm'\)) or [CHAIN](javascript:call_link\('dynpchain.htm'\)) statements. If an associated dialog module sends a warning or error message, PAI resumes after the user enters a new value. It is not possible to resume at the associated FIELD or CHAIN statement if the error field is also specified in an earlier FIELD or CHAIN statement.

Instead, all of the FIELD and CHAIN statements containing the error field are repeated. PAI resumes at the first FIELD or CHAIN statement containing one or more of the fields in the FIELD or CHAIN statement in which error occurred and which were modified the last time the screen was displayed.

Other Functions in the FIELD and CHAIN Statements

All functions of the statements [FIELD](javascript:call_link\('dynpfield.htm'\)) and [CHAIN](javascript:call_link\('dynpchain.htm'\)) used to defined data transport and for conditional module calls are also available in combination with warnings and error messages. The content of each field is transported after the FIELD statement in question. A warning or error message in a conditional module in a processing chain makes all fields in the chain input-enabled, although not all fields need to be transported.

If warnings or error messages are sent in dialog modules that are not associated with fields using FIELD or CHAIN, none of the dynpro fields become input-enabled. This makes a termination necessary, which itself requires an appropriate unconditional module call.

Executable Example

[Input Checks in Dialog Modules](javascript:call_link\('abendynpro_field_chain_abexa.htm'\))