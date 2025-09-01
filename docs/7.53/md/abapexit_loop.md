---
title: "EXIT - loop"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexit_shortref.htm) Syntax EXIT. Effect If the EXIT statement is specified within a loop(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_glosry.htm 'Glossary Entry'), it exits the loop by ending the
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexit_loop.htm"
abapFile: "abapexit_loop.htm"
keywords: ["loop", "do", "if", "try", "data", "abapexit"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_loops.htm) → 

EXIT - loop

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the EXIT statement is specified within a [loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_glosry.htm "Glossary Entry"), it exits the loop by ending the current loop pass. The program flow resumes after the closing statement in the loop.

Note

Outside of a loop, the statement EXIT exits the current [processing block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [EXIT - Processing Block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexit_processing_blocks.htm)). EXIT, however, should only be used within loops.

Example

Exits a loop using EXIT if the loop index sy-index is greater than a number limit.

DATA limit TYPE i VALUE 10.
DO.
  IF sy-index > limit.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( |{ sy-index } | ).
ENDDO.
cl\_demo\_output=>display( ).