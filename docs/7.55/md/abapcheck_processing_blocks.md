---
title: "Syntax"
description: |
  CHECK log_exp(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm). Effect If the statement CHECK is listed outside a loop(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_glosry.htm 'Glossary Entry') and log_exp is false, it terminates the current proc
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcheck_processing_blocks.htm"
abapFile: "abapcheck_processing_blocks.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "abapcheck", "processing", "blocks"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleave_processing_blocks.htm) → 

CHECK, processing\_block

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm).

Effect

If the statement CHECK is listed outside a [loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is false, it terminates the current processing block. Any [logical expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm).

After the processing block is exited, the runtime environment behaves in the same way as when the [processing block is exited in the regular way](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenend_processing_blocks.htm) , with the exception of the event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm) and the [reporting event block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_event_glosry.htm "Glossary Entry") GET . In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using CHECK.

-   After the reporting event block GET is terminated using CHECK, any subordinate nodes in the hierarchy structure of the associated [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   In a procedure (a method, function module, or subroutine), CHECK log\_exp works outside a loop in the same way as:

IF NOT log\_exp.
  RETURN.
ENDIF.

-   A further variant of the statement CHECK for exiting processing blocks is [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcheck_select-options.htm), which can only be used in [GET event blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget-.htm) for logical databases.
    

Example

This example shows a case where CHECK can be used outside a loop. At the start of a procedure, a prerequisite for executing the procedure is checked and the procedure exited if the check is not successful. In this case, the procedure must not be executed in the background.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CHECK sy-batch IS INITIAL.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).