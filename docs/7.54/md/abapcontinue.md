---
title: "CONTINUE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontinue_shortref.htm) Syntax CONTINUE. Effect The statement CONTINUE can only be used in loops(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_glosry.htm 'Glossary Entry'). If it is used, the curr
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontinue.htm"
abapFile: "abapcontinue.htm"
keywords: ["loop", "do", "if", "try", "data", "abapcontinue"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleave_loops.htm) → 

CONTINUE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontinue_shortref.htm)

Syntax

CONTINUE.

Effect

The statement CONTINUE can only be used in [loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_glosry.htm "Glossary Entry"). If it is used, the current loop pass is ended immediately and the program flow is continued with the next loop pass.

Example

Exits a loop pass using CONTINUE if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  IF remainder <> 0.
    CONTINUE.
  ENDIF.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).