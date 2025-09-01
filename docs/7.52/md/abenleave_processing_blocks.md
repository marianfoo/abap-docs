---
title: "Exiting Processing Blocks"
description: |
  Processing blocks(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm 'Glossary Entry') can be exited implicitly using the following: -   Regular exits(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenend_processing_blocks.htm) The following s
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm"
abapFile: "abenleave_processing_blocks.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abenleave", "processing", "blocks"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm) → 

Exiting Processing Blocks

[Processing blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry") can be exited implicitly using the following:

-   [Regular exits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenend_processing_blocks.htm)

The following statements can be used to exit processing blocks in a program-driven way:

-   [RETURN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreturn.htm)

-   [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm)

-   [CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_processing_blocks.htm)

-   [STOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstop.htm)

-   [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_select-options.htm) (obsolete, for logical databases only)

-   [REJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreject.htm) (obsolete, for logical databases only)

The way the program flow continues depends on the type of processing block.

In addition to the statements described here, any statements that call other units without returning to the caller after the call also exit their processing block. These include the following statements:

-   [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_screen.htm)

-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_list-processing.htm)

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_transaction.htm)

-   [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) without AND RETURN

[Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry") and raised [exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_glosry.htm "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexit_procedure_guidl.htm "Guideline")

Note

Exiting a procedure using RETURN (or EXIT or CHECK) is the error-free way to exit the procedure. Any formal parameters for which pass by value is defined are not passed to the associated actual parameters only in cases where the procedure terminates after an error (for example, if an exception is raised or a message is sent).

Continue
[Regular Exiting of a Processing Block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenend_processing_blocks.htm)
[RETURN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreturn.htm)
[EXIT - processing\_block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm)
[CHECK - processing\_block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_processing_blocks.htm)
[STOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstop.htm)