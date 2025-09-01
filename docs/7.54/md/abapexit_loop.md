  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleave_loops.htm) → 

EXIT - loop

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the EXIT statement is specified within a [loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_glosry.htm "Glossary Entry"), it exits the loop by ending the current loop pass. The program flow resumes after the closing statement in the loop.

Note

Outside of a loop, the statement EXIT exits the current [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [EXIT - Processing Block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexit_processing_blocks.htm)). EXIT, however, should only be used within loops.

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