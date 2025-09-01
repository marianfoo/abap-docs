  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Processing Blocks

[Processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") can be exited implicitly using the following:

-   [normal exiting](javascript:call_link\('abenend_processing_blocks.htm'\))

or program-driven exiting, using these statements:

-   [RETURN](javascript:call_link\('abapreturn.htm'\))

-   [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\))

-   [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))

-   [STOP](javascript:call_link\('abapstop.htm'\))

-   [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)) (obsolete, for logical databases only)

-   [REJECT](javascript:call_link\('abapreject.htm'\)) (obsolete, for logical databases only)

The onward flow of the program depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also end their processing block. These include:

-   [LEAVE *\[*TO*\]* SCREEN](javascript:call_link\('abapleave_screen.htm'\))

-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

[Messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") and raised [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Note

Exiting a procedure using RETURN (or EXIT or CHECK) is the error-free way to exit the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is triggered or a message is sent).

Continue
[Regular Exiting of a Processing Block](javascript:call_link\('abenend_processing_blocks.htm'\))
[RETURN](javascript:call_link\('abapreturn.htm'\))
[EXIT - processing\_block](javascript:call_link\('abapexit_processing_blocks.htm'\))
[CHECK - processing\_block](javascript:call_link\('abapcheck_processing_blocks.htm'\))
[STOP](javascript:call_link\('abapstop.htm'\))