---
title: "Hint"
description: |
  For a more detailed description, see also Field Help, Input Help, and Dropdown List Boxes(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_help.htm). Calling a Dialog Module Syntax FIELD dynp_field MODULE mod. Effect If the statement FIELD is linked(https://help.sap.c
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynp_field_help.htm"
abapFile: "abendynp_field_help.htm"
keywords: ["select", "update", "do", "if", "case", "try", "data", "abendynp", "field", "help"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - FIELD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpfield.htm) → 

dynpro - FIELD, Field Help and Input Help

In the event blocks at [POH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpov_glosry.htm "Glossary Entry"), only FIELD statements are possible. The statement MODULE can only be used as addition of the statement FIELD. In the case of these events, no data is transported automatically from the [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") to the ABAP program and the statement FIELD is ignored accordingly. The statement FIELD can either be linked with the statement MODULE or specified with the addition WITH at POH.

If the statement FIELD is specified more than once for the same [dynpro field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_field_glosry.htm "Glossary Entry"), only the first statement is executed. If the event blocks at POH and POV are not implemented, field or input help fields are displayed that are defined in the system or in the ABAP Dictionary . If no help is defined, this is displayed in a message in the task bar.

-   [Calling a Dialog Module](#abendynp-field-help-1-------calling-the-data-element-supplementary-documentation---@ITOC@@ABENDYNP_FIELD_HELP_2)

Hint

For a more detailed description, see also [Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_help.htm).

Calling a Dialog Module

Syntax

FIELD dynp\_field MODULE mod.

Effect

If the statement FIELD is [linked](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpfield_module.htm) with a statement MODULE in the event block at POH or POV, the specified dialog module mod is called if the function keys F1 or F4 are selected on the assigned screen element. After the dialog module is processed, the system returns to display the current [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") without raising the event [PBO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpbo_glosry.htm "Glossary Entry") and without automatically transporting data from the ABAP program to the dynpro. After the dialog module is called, no condition AT or ON can be specified.

Hint

A field help or input help should be programmed in the called dialog module. If data is to be transported between the dynpro and the ABAP program, this transport must be programmed there as well. For both tasks, there are function modules, such as DYNP\_VALUES\_READ or DYNP\_VALUES\_UPDATE. The function module DYNP\_VALUES\_UPDATE is intended for the event POV and only works there and only for the current dynpro. If data is to be passed from the ABAP program to the dynpro outside of POV, the function module DYNP\_UPDATE\_FIELDS can also be used.

Calling the data element supplementary documentation

Syntax

FIELD dynp\_field *\[*MODULE mod*\]* WITH hlp.

Effect

If the addition WITH is used in the event block at POH, the data element supplementary documentation specified in hlp is displayed when the function key F1 is selected on the associated screen element. The prerequisite is that the dynpro field dynp\_field was defined with reference to a [data element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_elements.htm) in the ABAP Dictionary and that [supplementary documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_elements_sema.htm) for the current dynpro and the current program was created there.

hlp expects a global numeric data object of the ABAP program which contains the number of the data element supplementary documentation. The name of hlp must not simultaneously be the name of a data element in the ABAP Dictionary, because this will cause a program termination when the dynpro is used during the program execution. MODULE can be used to call a dialog module mod to fill the data object hlp.

Hint

The data element supplementary documentation replaces the data element documentation which is displayed by default for screen fields that are defined with reference to a data element. The data element supplementary documentation has to be specifically designed for the current dynpro and the current program. The associations between the data element supplementary documentation and dynpros of programs are stored in the database table THLPF. This association is created if the data element supplementary documentation for a dynpro field was created using forward navigation in the [Screen Painter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). The association is not created if the data element supplementary documentation was created directly in the ABAP Dictionary.