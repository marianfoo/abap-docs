---
title: "Regular Exiting of a Processing Block"
description: |
  A processing block is terminated normally when its end is reached. For processing blocks that are completed using an END statement, this is the end. Event blocks that are not completed explicitly with a statement have an implicit completion after their last statement. Depending on the processing blo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenend_processing_blocks.htm"
abapFile: "abenend_processing_blocks.htm"
keywords: ["select", "do", "try", "method", "class", "abenend", "processing", "blocks"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleave_processing_blocks.htm) → 

Regular Exiting of a Processing Block

A processing block is terminated normally when its end is reached. For processing blocks that are completed using an END statement, this is the end. Event blocks that are not completed explicitly with a statement have an implicit completion after their last statement.

Depending on the processing block that is exited, the runtime environment behaves as follows:

-   In [procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry"), the program returns to the position after the procedure call. The output parameters for which [pass by values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_value_glosry.htm "Glossary Entry") are defined are passed to the bound actual parameters.

-   In [dialog modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendialog_module_glosry.htm "Glossary Entry"), the program returns to after the calling position in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry").

-   In [event blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_block_glosry.htm "Glossary Entry"), the control is returned back to the runtime environment and the current process of the runtime environment continues with the program execution.

Example

Output before, during, and after execution of a procedure.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>write( \`In procedure\` ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>write( \`Before procedure\` ).
  demo=>main( ).
  cl\_demo\_output=>display( \`After procedure\` ).