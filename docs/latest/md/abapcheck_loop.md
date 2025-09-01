  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CHECK%2C%20loop%2C%20ABAPCHECK_LOOP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CHECK, loop

[Short Reference](javascript:call_link\('abapcheck_shortref.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Effect

If the statement CHECK is listed in a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") and log\_exp is false, the statement CHECK immediately terminates the current loop pass and the program continues with the next loop pass. Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Hints

-   Within a loop, CHECK log\_exp has the same effect as:
    
    IF NOT log\_exp.
      CONTINUE.
    ENDIF.
    
-   Outside a loop, the statement CHECK exits the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") (see [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))), however it is recommended that CHECK is used inside loops only.

Example

Termination of a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).