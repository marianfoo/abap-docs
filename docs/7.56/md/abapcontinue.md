  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_loops.htm) → 

CONTINUE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcontinue_shortref.htm)

Syntax

CONTINUE.

Effect

The statement CONTINUE may only be used in [loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_glosry.htm "Glossary Entry"). If it is used, the current loop pass is terminated immediately and the program flow is continued with the next loop pass.

Example

Exit of a loop pass using CONTINUE if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  IF remainder <> 0.
    CONTINUE.
  ENDIF.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).