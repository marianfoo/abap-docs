---
title: "Checking Single Fields"
description: |
  If a warning or error message(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm) is sent in a module mod whose call is combined with a FIELD(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) statement FIELD f MODULE mod. the input fiel
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_checks_mod.htm"
abapFile: "abenabap_dynpros_checks_mod.htm"
keywords: ["do", "if", "case", "data", "abenabap", "dynpros", "checks", "mod"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Input Checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_checks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Checks in Dialog Modules, ABENABAP_DYNPROS_CHECKS_MOD, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Checks in Dialog Modules

Input checks in PAI modules are enabled by first transporting the content of the input fields to the ABAP program. This is where the content can then be checked. Any errors can be corrected on the screen before further modules are called. This is achieved by combining the statements [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) and [CHAIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm) of the dynpro flow logic with [messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm).

-   [Checking Single Fields](#abenabap-dynpros-checks-mod-1-------checking-multiple-fields---@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_2)
-   [Defining Input-Enabled Fields and Data Transport](#abenabap-dynpros-checks-mod-3-------checking-fields-repeatedly---@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_4)
-   [Other Functions in the FIELD and CHAIN Statements](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_5)

Checking Single Fields   

If a [warning or error message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm) is sent in a module mod whose call is combined with a [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) statement

FIELD f MODULE mod.

the input field in question becomes the only input-enabled field on the current dynpro and the input can be repeated. If the field is only checked once, PAI resumes directly after the FIELD statement, and the preceding modules are not called again.

Checking Multiple Fields   

If a [warning or error message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm) is sent in a module mod1, mod2, ... whose call takes place in a [processing chain](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm)

CHAIN.
  FIELD: f1, f2,...
  MODULE mod1.
  FIELD: g1, g2,...
  MODULE mod2.
...
ENDCHAIN.

the input fields of all dynpro fields in the processing chain become input-enabled on the current dynpro. This includes fields after the [MODULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpmodule.htm) statement in [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) statements. None of the other fields are input-enabled. Even when a MODULE statement is combined with a FIELD statement within a processing chain, all input fields in the chain become input-enabled and not just the field in question. If the fields in the processing chain are only checked once, PAI resumes directly after the CHAIN statement, and the preceding modules are not called again.

Defining Input-Enabled Fields and Data Transport   

In the case of warnings and error messages, a [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) statement outside of a processing chain defines whether a single field is input-enabled. [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) statements between [CHAIN - ENDCHAIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm), on the other hand, define whether multiple fields are input-enabled. Here, all fields linked using FIELD are transported back to the screen layout without PBO processing taking place. This ensures that any changes to the field content are displayed before a message. This also applies to the sending of information messages, but no fields are input-enabled.

Checking Fields Repeatedly   

It may be necessary to specify a single dynpro field in multiple [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) or [CHAIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm) statements. If an associated dialog module sends a warning or error message, PAI resumes after the user enters a new value. It is not possible to resume at the associated FIELD or CHAIN statement if the error field is also specified in an earlier FIELD or CHAIN statement.

Instead, all FIELD and CHAIN statements containing the error field must be repeated. PAI processing resumes at the first FIELD or CHAIN statement containing one or more of the fields in the FIELD or CHAIN statement in which the error occurred and which were modified the last time the screen layout was displayed.

Other Functions in the FIELD and CHAIN Statements   

All functions of the statements [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) and [CHAIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm) used to defined data transport and for conditional module calls are also available in combination with warnings and error messages. The content of each field is transported after the FIELD statement in question. A warning or error message in a conditional module in a processing chain makes all fields in the chain input-enabled, although not all fields need to be transported.

If warnings or error messages are sent in dialog modules that are not linked with fields using FIELD or CHAIN, no dynpro fields become input-enabled. This makes a termination necessary, which itself requires a corresponding unconditional module call.

Executable Example

[Input Checks in Dialog Modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_chain_abexa.htm)