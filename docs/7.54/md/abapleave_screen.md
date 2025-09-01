---
title: "Syntax"
description: |
  LEAVE  SCREEN  TO SCREEN dynnr . Variants: 1. LEAVE SCREEN.(#!ABAP_VARIANT_1@1@) 2. LEAVE TO SCREEN dynnr.(#!ABAP_VARIANT_2@2@) Effect This statement ends the processing of the current dynpro(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm 'Glo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_screen.htm"
abapFile: "abapleave_screen.htm"
keywords: ["do", "if", "try", "data", "abapleave", "screen"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_abap_statements.htm) → 

LEAVE \[TO\] SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_screen_shortref.htm)

Syntax

LEAVE *{* SCREEN *|* *{*TO SCREEN dynnr*}* *}*.

Variants:

[1\. LEAVE SCREEN.](#!ABAP_VARIANT_1@1@)
[2\. LEAVE TO SCREEN dynnr.](#!ABAP_VARIANT_2@2@)

Effect

This statement ends the processing of the current [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"). The current [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of the ABAP program and the current processing block of the dynpro are exited immediately.

Variant 1

LEAVE SCREEN.

Effect

The variant LEAVE SCREEN calls the current [next dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennext_dynpro_glosry.htm "Glossary Entry"). This is either specified defined statically in the properties of the current dynpro or was set earlier using the statement [SET SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_screen.htm).

Variant 2

LEAVE TO SCREEN dynnr.

Effect

The variant LEAVE TO SCREEN calls the dynpro with the number dynnr as the [next dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennext_dynpro_glosry.htm "Glossary Entry"). dynnr expects a data object of the type n and the length 4. It must contain either the [dynpro number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_number_glosry.htm "Glossary Entry") of a dynpro in the [main program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_group_glosry.htm "Glossary Entry") or the value 0. If it does not, a non-handleable exception is raised. This statement is a short form of the statements SET SCREEN dynnr and LEAVE SCREEN.

Notes

-   This statement does not terminate the entire dynpro sequence; instead it branches to another dynpro in the same sequence. Only if the number 0 is used to branch to the next dynpro does LEAVE SCREEN terminate the dynpro sequence.
    
-   This statement must not be used when handling events of the [Control Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_framework_glosry.htm "Glossary Entry")s.