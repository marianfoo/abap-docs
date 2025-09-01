  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_loops.htm) → 

CHECK, loop

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm).

Effect

If the statement CHECK is listed in a [loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is incorrect, the statement CHECK immediately terminates the current loop pass and the program continues with the next loop pass. Any [logical expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm).

Hints

-   Within a loop, CHECK log\_exp has the same effect as:
    
    IF NOT log\_exp.
      CONTINUE.
    ENDIF.
    
-   Outside a loop, the statement CHECK exits the current [processing block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_processing_blocks.htm)), however it is recommended that only CHECK is used inside loops.

Example

Termination of a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).