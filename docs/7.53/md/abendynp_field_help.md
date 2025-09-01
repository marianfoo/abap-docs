  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) → 

Field Help and Input Help

In the event blocks at [POH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpov_glosry.htm "Glossary Entry"), only FIELD statements are possible. The statement MODULE can only be used as addition of the statement FIELD. In the case of these events, no data is transported automatically from the [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") to the ABAP program and the statement FIELD is ignored accordingly. The statement FIELD can either be associated with the statement MODULE or specified with the addition WITH at POH.

If the statement FIELD is specified more than once for the same [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry"), only the first statement is executed. If the event blocks at POH and POV are not implemented, field or input help fields are displayed that are defined in the system or in ABAP Dictionary . If no help is defined, this is displayed in a message in the task bar.

-   [Calling a Dialog Module](#@@ITOC@@ABENDYNP_FIELD_HELP_1)

-   [Calling the data element supplement documentation](#@@ITOC@@ABENDYNP_FIELD_HELP_2)

Calling a Dialog Module

Syntax

FIELD dynp\_field MODULE mod.

Effect

If the statement FIELD is [associated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_module.htm) with a statement MODULE in the event block at POH or POV, the specified dialog module mod is called if the function keys F1 or F4 are selected on the assigned screen element. After the dialog module is processed, the system returns to display the current [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") without raising the event [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") and without automatically transporting data from the ABAP program to the dynpro. After the dialog module is called, no condition AT or ON can be specified.

Note

You want to program a field help or input help in the called dialog module. If data is to be transported between the screen and the ABAP program, this transport must be programmed there as well. For both tasks, you can use function modules like, for example, DYNP\_VALUES\_READ or DYNP\_VALUES\_UPDATE. The function module DYNP\_VALUES\_UPDATE is intended for the event POV and only functions there and only for the current dynpro. If data is to be passed from the ABAP program to the dynpro outside of POV, the function module DYNP\_UPDATE\_FIELDS can also be used.

Calling the data element supplement documentation

Syntax

FIELD dynp\_field *\[*MODULE mod*\]* WITH hlp.

Effect

If the addition WITH is used in the event block at POH, the data element supplement documentation specified in hlp is displayed when the function key F1 is selected on the associated screen element. The prerequisite is that the dynpro field dynp\_field was defined with reference to a [data element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm) in ABAP Dictionary and that [additional documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_sema.htm) for the current dynpro and the current program was created there.

hlp expects a global numeric data object of the ABAP program which contains the number of the data element supplement documentation. The name of hlp must not simultaneously be the name of a data element in ABAP Dictionary, because this will cause a program termination when the dynpro is used during the program execution. MODULE can be used to call a dialog module mod to fill the data object hlp.

Note

The data element supplement documentation replaces the data element documentation which is displayed by default for screen fields that are defined with reference to a data element. The data element supplement documentation has to be specifically designed for the current screen and the current program. The associations between the data element supplement documentation and dynpros of programs are stored in the database table THLPF. This association is created if the data element supplement documentation for a dynpro field was created using forward navigation in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). The association is not created if the data element supplement documentation was created directly in ABAP Dictionary.

Continue
[Field and Input Helps - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_help_abexas.htm)