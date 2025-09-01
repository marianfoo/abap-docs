---
title: "Syntax"
description: |
  EXIT. Effect If the statement EXIT is outside a loop(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm 'Glossary Entry'), it immediately terminates the current processing block(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm"
abapFile: "abapexit_processing_blocks.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "types", "abapexit", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXIT, processing_block, ABAPEXIT_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

EXIT, processing\_block

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the statement EXIT is outside a [loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm "Glossary Entry"), it immediately terminates the current [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry").

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in a regular way](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm), with the exception of the event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) and the [reporting event blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_event_glosry.htm "Glossary Entry") START-OF-SELECTION and GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using EXIT.
-   After the reporting event blocks START-OF-SELECTION and GET have been terminated using EXIT, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")

Example

The method main contains two EXIT statements. Whereas the first statement exits the LOOP loop, the second statement exits the entire method. Therefore, the RETURN statement should be used instead of the second EXIT statement.

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING char TYPE string
                                 itab TYPE itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    LOOP AT itab INTO FINAL(wa).
      FIND char IN wa-col1 RESPECTING CASE.
      IF sy-subrc = 0.
        EXIT.
      ENDIF.
    ENDLOOP.
    FIND to\_upper( char ) IN wa-col2 RESPECTING CASE.
    IF sy-subrc <> 0.
      EXIT.                   "works as RETURN here!
    ENDIF.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FINAL(itab) = VALUE itab(
    ( col1 = \`aaaa\` col2 = \`AAAA\` )
    ( col1 = \`bbbb\` col2 = \`XXXX\` )
    ( col1 = \`cccc\` col2 = \`CCCC\` ) ).
  demo=>main( char = \`b\`
              itab = itab ).