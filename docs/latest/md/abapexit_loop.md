  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXIT%2C%20loop%2C%20ABAPEXIT_LOOP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXIT, loop

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the EXIT statement is listed within a [loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm "Glossary Entry"), it exits the loop by terminating the current loop pass. The program flow resumes after the closing statement of the loop.

Hint

Outside of a loop, the statement EXIT exits the current [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [EXIT - Processing Block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_processing_blocks.htm)). EXIT, however, it should only be used within loops.

Example

Exit of a loop using EXIT if the loop index sy-index is greater than a number limit.

DATA limit TYPE i VALUE 10.
DO.
  IF sy-index > limit.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( |{ sy-index } | ).
ENDDO.
cl\_demo\_output=>display( ).