  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

EXIT - loop

[Quick Reference](javascript:call_link\('abapexit_shortref.htm'\))

Syntax

EXIT.

Effect

If the EXIT statement is specified within a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry"), it exits the loop by ending the current loop pass. The program flow resumes after the closing statement in the loop.

Note

Outside of a loop, the statement EXIT exits the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") (see [EXIT - Processing Block](javascript:call_link\('abapexit_processing_blocks.htm'\))). EXIT, however, should only be used within loops.

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