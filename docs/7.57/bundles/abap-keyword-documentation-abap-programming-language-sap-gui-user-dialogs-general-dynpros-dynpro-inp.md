# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Input Checks

Included pages: 7


### abenabap_dynpros_checks.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Checks, ABENABAP_DYNPROS_CHECKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

dynpro - Input Checks

Dynpros enables input values to be checked in the following ways:

-   [Automatic input checks](javascript:call_link\('abenabap_dynpros_checks_auto.htm'\))
-   [Input checks in dialog modules](javascript:call_link\('abenabap_dynpros_checks_mod.htm'\))

Hint

Obsolete input checks are possible using the additions [VALUES](javascript:call_link\('dynpfield_value_select.htm'\)) and [SELECT](javascript:call_link\('dynpfield_value_select.htm'\)) of the dynpro logic statement [FIELD](javascript:call_link\('dynpfield.htm'\)). These checks are made before dialog modules are called.

Continue
[dynpro - Automatic Input Checks](javascript:call_link\('abenabap_dynpros_checks_auto.htm'\))
[dynpro - Input Checks in Dialog Modules](javascript:call_link\('abenabap_dynpros_checks_mod.htm'\))
[dynpro - Examples of Input Checks](javascript:call_link\('abeninput_check_abexas.htm'\))


### abenabap_dynpros_checks_auto.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Automatic Input Checks, ABENABAP_DYNPROS_CHECKS_AUTO, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Automatic Input Checks

In the PAI event, the dynpro makes a series of automatic input checks. These checks take place before data transports to the ABAP program and before the dynpro flow logic is processed. Before these automatic input checks, a single dialog module can be called using an unconditional module call and with a special function type. This dialog module is usually used to bypass the checks and exit the dynpro directly.

If the automatic input checks find an error, a message appears in the status bar of the screen, and the corresponding fields remain ready for input. The user must correct the input and raise PAI again. The actual PAI processing does not start until there are no more errors.

The automatic input checks are performed in the following order:

-   Mandatory input
    
    If a field is defined as a mandatory field in Screen Painter, the user must enter a value for it before PAI can start.
    
-   Input format
    
    The values entered in an input field must match the data format of the associated dynpro field. For example, the format of a date field with the type DATS is an eight-character string with the format YYYYMMDD. All characters must be numbers and the characters MM and DD must be less than or equal to 12 or 31 respectively. The system also checks that the specified day is valid for the month.
    
-   Checks defined in the ABAP Dictionary
    
    If an input field in the Screen Painter is defined by being taken from the ABAP Dictionary, the dynpro checks the following:
    
    -   Does the entered value match any [foreign key relationship](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") with a different database table? This means the check table is checked to verify whether the input value exists as a foreign key in the check table. This check only takes place, however, if the foreign key attribute is set for the input field in the Screen Painter. This input check is not necessarily identical with the [input help](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\)). The developers must ensure that the input help represents a subset of the content of the check table.
    -   Does the entered value exist as a [fixed value](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of the domain of the field? This means that the definition of the domain of the field in the ABAP Dictionary is checked. The fixed values of the domain can also be used as an input help. The value table of a domain, however, is not checked. It is only used as a default value for the check tables of the fields that reference the domain.
    
    If necessary, the input check also triggers a [check on obsolete data](javascript:call_link\('abenddic_deprecation.htm'\)).
    

Executable Example

[Automatic Input Checks](javascript:call_link\('abendynpro_auto_check_abexa.htm'\))


### abenabap_dynpros_checks_mod.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Checks in Dialog Modules, ABENABAP_DYNPROS_CHECKS_MOD, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Checks in Dialog Modules

Input checks in PAI modules are enabled by first transporting the content of the input fields to the ABAP program. This is where the content can then be checked. Any errors can be corrected on the screen before further modules are called. This is achieved by combining the statements [FIELD](javascript:call_link\('dynpfield.htm'\)) and [CHAIN](javascript:call_link\('dynpchain.htm'\)) of the dynpro flow logic with [messages](javascript:call_link\('abendynp_field_messages.htm'\)).

-   [Checking Single Fields](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_1)
-   [Checking Multiple Fields](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_2)
-   [Defining Input-Enabled Fields and Data Transport](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_3)
-   [Checking Fields Repeatedly](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_4)
-   [Other Functions in the FIELD and CHAIN Statements](#@@ITOC@@ABENABAP_DYNPROS_CHECKS_MOD_5)

Checking Single Fields   

If a [warning or error message](javascript:call_link\('abendynp_field_messages.htm'\)) is sent in a module mod whose call is combined with a [FIELD](javascript:call_link\('dynpfield.htm'\)) statement

FIELD f MODULE mod.

the input field in question becomes the only input-enabled field on the current dynpro and the input can be repeated. If the field is only checked once, PAI resumes directly after the FIELD statement, and the preceding modules are not called again.

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

In the case of warnings and error messages, a [FIELD](javascript:call_link\('dynpfield.htm'\)) statement outside of a processing chain defines whether a single field is input-enabled. [FIELD](javascript:call_link\('dynpfield.htm'\)) statements between [CHAIN - ENDCHAIN](javascript:call_link\('dynpchain.htm'\)), on the other hand, define whether multiple fields are input-enabled. Here, all fields linked using FIELD are transported back to the screen layout without PBO processing taking place. This ensures that any changes to the field content are displayed before a message. This also applies to the sending of information messages, but no fields are input-enabled.

Checking Fields Repeatedly   

It may be necessary to specify a single dynpro field in multiple [FIELD](javascript:call_link\('dynpfield.htm'\)) or [CHAIN](javascript:call_link\('dynpchain.htm'\)) statements. If an associated dialog module sends a warning or error message, PAI resumes after the user enters a new value. It is not possible to resume at the associated FIELD or CHAIN statement if the error field is also specified in an earlier FIELD or CHAIN statement.

Instead, all FIELD and CHAIN statements containing the error field must be repeated. PAI processing resumes at the first FIELD or CHAIN statement containing one or more of the fields in the FIELD or CHAIN statement in which the error occurred and which were modified the last time the screen layout was displayed.

Other Functions in the FIELD and CHAIN Statements   

All functions of the statements [FIELD](javascript:call_link\('dynpfield.htm'\)) and [CHAIN](javascript:call_link\('dynpchain.htm'\)) used to defined data transport and for conditional module calls are also available in combination with warnings and error messages. The content of each field is transported after the FIELD statement in question. A warning or error message in a conditional module in a processing chain makes all fields in the chain input-enabled, although not all fields need to be transported.

If warnings or error messages are sent in dialog modules that are not linked with fields using FIELD or CHAIN, no dynpro fields become input-enabled. This makes a termination necessary, which itself requires a corresponding unconditional module call.

Executable Example

[Input Checks in Dialog Modules](javascript:call_link\('abendynpro_field_chain_abexa.htm'\))


### abeninput_check_abexas.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Examples of Input Checks, ABENINPUT_CHECK_ABEXAS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Examples of Input Checks

Continue
![Example](exa.gif "Example") [dynpro - Automatic Input Checks](javascript:call_link\('abendynpro_auto_check_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Checks in Dialog Modules](javascript:call_link\('abendynpro_field_chain_abexa.htm'\))


### abendynpro_auto_check_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) →  [dynpro - Examples of Input Checks](javascript:call_link\('abeninput_check_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Automatic Input Checks, ABENDYNPRO_AUTO_CHECK_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Automatic Input Checks

The example demonstrates what an automatic input check does.

Source Code   

PROGRAM demo\_dynpro\_automatic\_checks .
DATA: ok\_code TYPE sy-ucomm,
      date TYPE d.
TABLES demo\_conn.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE pai INPUT.
  MESSAGE i888(sabapdemos) WITH text-001.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The date field date taken from the program is assigned to the input field Date. The remaining input fields are the components CARRID, CONNID, and MARK of the structure DEMO\_CONN taken from ABAP Dictionary. All input fields are mandatory. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. Additionally, the function key F8 is assigned the function code EXECUTE. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE pai.

The user must fill all input fields with valid values before the PAI module can be called:

-   All input fields must contain values
-   The date entry must have the correct format
-   The airline must exist in the check table SCARR.
-   The flight number must exist in the check table SPFLI and match the airline.
-   The marker MARK must be one of the fixed values of the domain S\_FLAG.

The user can exit the dynpro using Cancel (F12) without correctly entering all values, since the module call was programmed accordingly using AT EXIT-COMMAND.


### abendynpro_field_chain_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) →  [dynpro - Examples of Input Checks](javascript:call_link\('abeninput_check_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Checks in Dialog Modules, ABENDYNPRO_FIELD_CHAIN_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Checks in Dialog Modules

This example demonstrates how to check input fields in dialog modules.

Source Code   

PROGRAM demo\_dynpro\_field\_chain.
DATA: ok\_code TYPE sy-ucomm,
      input1 TYPE i, input2 TYPE i, input3 TYPE i,
      input4 TYPE i, input5 TYPE i, input6 TYPE i,
      sum TYPE i.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  CLEAR: input1, input2, input3, input4, input5, input6.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE module\_1 INPUT.
  IF input1 < 50.
    MESSAGE e888(sabapdemos) WITH text-001 '50' text-002.
  ENDIF.
ENDMODULE.
MODULE module\_2 INPUT.
  IF input2 < 100.
    MESSAGE e888(sabapdemos) WITH text-001 '100' text-002.
  ENDIF.
ENDMODULE.
MODULE module\_3 INPUT.
  IF input3 < 150.
    MESSAGE e888(sabapdemos) WITH text-001 '150' text-002.
  ENDIF.
ENDMODULE.
MODULE chain\_module\_1 INPUT.
  IF input4 < 10.
    MESSAGE e888(sabapdemos) WITH text-003 '10' text-002.
  ENDIF.
ENDMODULE.
MODULE chain\_module\_2 INPUT.
  CLEAR sum.
  sum += input4.
  sum += input5.
  sum += input6.
  IF sum <= 100.
    MESSAGE e888(sabapdemos) WITH text-004 '100' text-002.
  ENDIF.
ENDMODULE.
MODULE execution INPUT.
  MESSAGE i888(sabapdemos) WITH text-005.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the dynpro fields input1 to input6. The function code of the pushbutton is EXECUTE.

In the GUI status STATUS\_100, the symbol Cancel (F12) is activated by the function code CANCEL with the function type E. The function key F8 is assigned the function code EXECUTE without a special function type. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_screen\_100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD input1 MODULE module\_1.
  FIELD input2 MODULE module\_2.
  FIELD input3 MODULE module\_3.
  CHAIN.
    FIELD input4.
    MODULE chain\_module\_1.
    FIELD input5.
    FIELD input6 MODULE chain\_module\_2.
  ENDCHAIN.
  MODULE execution.

The fields input1 to input3 are checked separately in the modules module\_1 to module\_3. As long as the user does not enter a corresponding value, the screen layout is repeatedly displayed with the appropriate field ready for input.

The fields input4 to input6 are checked together in the processing chain. If input4 does not match the condition in chain\_module\_1, all three fields are made ready for input again. The same applies if the three fields do not fulfill the condition in chain\_module\_2.

The execution module, from which an information message is displayed, is not executed until all six fields fulfill the appropriate conditions.


### abeninput_check_abexas.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Examples of Input Checks, ABENINPUT_CHECK_ABEXAS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Examples of Input Checks

Continue
![Example](exa.gif "Example") [dynpro - Automatic Input Checks](javascript:call_link\('abendynpro_auto_check_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Checks in Dialog Modules](javascript:call_link\('abendynpro_field_chain_abexa.htm'\))
