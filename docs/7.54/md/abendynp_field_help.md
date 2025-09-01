  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [FIELD](javascript:call_link\('dynpfield.htm'\)) → 

FIELD - Field and Input Help

In the event blocks at [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry"), only FIELD statements are possible. The statement MODULE can only be used as addition of the statement FIELD. In the case of these events, no data is transported automatically from the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") to the ABAP program and the statement FIELD is ignored accordingly. The statement FIELD can either be associated with the statement MODULE or specified with the addition WITH at POH.

If the statement FIELD is specified more than once for the same [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"), only the first statement is executed. If the event blocks at POH and POV are not implemented, field or input help fields are displayed that are defined in the system or in ABAP Dictionary . If no help is defined, this is displayed in a message in the task bar.

-   [Calling a Dialog Module](#@@ITOC@@ABENDYNP_FIELD_HELP_1)

-   [Calling the data element supplement documentation](#@@ITOC@@ABENDYNP_FIELD_HELP_2)

Note

For a more detailed description, see also [Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)).

Calling a Dialog Module

Syntax

FIELD dynp\_field MODULE mod.

Effect

If the statement FIELD is [associated](javascript:call_link\('dynpfield_module.htm'\)) with a statement MODULE in the event block at POH or POV, the specified dialog module mod is called if the function keys F1 or F4 are selected on the assigned screen element. After the dialog module is processed, the system returns to display the current [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") without raising the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and without automatically transporting data from the ABAP program to the dynpro. After the dialog module is called, no condition AT or ON can be specified.

Note

You want to program a field help or input help in the called dialog module. If data is to be transported between the screen and the ABAP program, this transport must be programmed there as well. For both tasks, you can use function modules like, for example, DYNP\_VALUES\_READ or DYNP\_VALUES\_UPDATE. The function module DYNP\_VALUES\_UPDATE is intended for the event POV and only functions there and only for the current dynpro. If data is to be passed from the ABAP program to the dynpro outside of POV, the function module DYNP\_UPDATE\_FIELDS can also be used.

Calling the data element supplement documentation

Syntax

FIELD dynp\_field *\[*MODULE mod*\]* WITH hlp.

Effect

If the addition WITH is used in the event block at POH, the data element supplement documentation specified in hlp is displayed when the function key F1 is selected on the associated screen element. The prerequisite is that the dynpro field dynp\_field was defined with reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) in ABAP Dictionary and that [additional documentation](javascript:call_link\('abenddic_data_elements_sema.htm'\)) for the current dynpro and the current program was created there.

hlp expects a global numeric data object of the ABAP program which contains the number of the data element supplement documentation. The name of hlp must not simultaneously be the name of a data element in ABAP Dictionary, because this will cause a program termination when the dynpro is used during the program execution. MODULE can be used to call a dialog module mod to fill the data object hlp.

Note

The data element supplement documentation replaces the data element documentation which is displayed by default for screen fields that are defined with reference to a data element. The data element supplement documentation has to be specifically designed for the current screen and the current program. The associations between the data element supplement documentation and dynpros of programs are stored in the database table THLPF. This association is created if the data element supplement documentation for a dynpro field was created using forward navigation in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). The association is not created if the data element supplement documentation was created directly in ABAP Dictionary.