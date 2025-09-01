  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

CHECK - loop

[Quick Reference](javascript:call_link\('abapcheck_shortref.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Effect

If the statement CHECK is executed in a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") and log\_exp is incorrect, the statement CHECK exits the current loop pass immediately and the program continues with the next loop pass. Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Notes

-   Inside a loop, CHECK log\_exp works just like the following:
    

IF NOT log\_exp.
  CONTINUE.
ENDIF.

-   Outside a loop, the statement CHECK exits the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") (see [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))), however it is best to only use CHECK inside loops.
    

Example

Cancels a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).