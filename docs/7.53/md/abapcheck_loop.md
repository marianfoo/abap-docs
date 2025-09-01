---
title: "CHECK - loop"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcheck_shortref.htm) Syntax CHECK log_exp(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm). Effect If the statement CHECK is executed in a loop(https://help.sap.com/doc/abapdocu_753_index_h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcheck_loop.htm"
abapFile: "abapcheck_loop.htm"
keywords: ["loop", "do", "if", "try", "data", "abapcheck"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_loops.htm) → 

CHECK - loop

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm).

Effect

If the statement CHECK is executed in a [loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is incorrect, the statement CHECK exits the current loop pass immediately and the program continues with the next loop pass. Any [logical expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm).

Notes

-   Inside a loop, CHECK log\_exp works just like the following:
    

IF NOT log\_exp.
  CONTINUE.
ENDIF.

-   Outside a loop, the statement CHECK exits the current [processing block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcheck_processing_blocks.htm)), however it is best to only use CHECK inside loops.
    

Example

Cancels a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).