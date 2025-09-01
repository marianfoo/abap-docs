---
title: "Exiting Processing Blocks"
description: |
  Processing blocks(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocessing_block_glosry.htm 'Glossary Entry') can be exited implicitly using: -   regular exiting(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenend_processing_blocks.htm) or program-driven, using: -
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_processing_blocks.htm"
abapFile: "abenleave_processing_blocks.htm"
keywords: ["select", "update", "do", "if", "try", "data", "abenleave", "processing", "blocks"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_program_units.htm) → 

Exiting Processing Blocks

[Processing blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocessing_block_glosry.htm "Glossary Entry") can be exited implicitly using:

-   [regular exiting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenend_processing_blocks.htm)

or program-driven, using:

-   [RETURN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreturn.htm)
-   [EXIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_processing_blocks.htm)
-   [CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_processing_blocks.htm)
-   [STOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapstop.htm)
-   [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_select-options.htm) (obsolete, for logical databases only)
-   [REJECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreject.htm) (obsolete, for logical databases only)

The subsequent program flow depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also terminate their processing block. These include:

-   [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_screen.htm)
-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_list-processing.htm)
-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm) without AND RETURN

[Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_glosry.htm "Glossary Entry") and raised [exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_glosry.htm "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   Exiting a procedure using RETURN, EXIT or CHECK is the error-free termination of the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is raised or a message is sent).
-   The statements for [exiting programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_leave_program.htm) are not recommended inside procedures. They are not allowed in contexts like [unit tests](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunit_test_glosry.htm "Glossary Entry") or during [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit_during_update.htm) and lead to exceptions if a procedure is called from such a context.

Continue
[Regular Exiting of a Processing Block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenend_processing_blocks.htm)
[RETURN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreturn.htm)
[EXIT, processing\_block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_processing_blocks.htm)
[CHECK, processing\_block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_processing_blocks.htm)
[STOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapstop.htm)