  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Processing Blocks

[Processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") can be exited implicitly using:

-   [regular exiting](javascript:call_link\('abenend_processing_blocks.htm'\))

or program-driven, using:

-   [RETURN](javascript:call_link\('abapreturn.htm'\))
-   [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\))
-   [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))
-   [STOP](javascript:call_link\('abapstop.htm'\))
-   [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)) (obsolete, for logical databases only)
-   [REJECT](javascript:call_link\('abapreject.htm'\)) (obsolete, for logical databases only)

The subsequent program flow depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also terminate their processing block. These include:

-   [LEAVE *\[*TO*\]* SCREEN](javascript:call_link\('abapleave_screen.htm'\))
-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))
-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))
-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

[Messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") and raised [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Hints

-   Exiting a procedure using RETURN, EXIT or CHECK is the error-free termination of the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is raised or a message is sent).
-   The statements for [exiting programs](javascript:call_link\('abenabap_leave_program.htm'\)) are not recommended inside procedures. They are not allowed in contexts like [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") or during [update](javascript:call_link\('abendb_commit_during_update.htm'\)) and lead to exceptions if a procedure is called from such a context.

Continue
[Regular Exiting of a Processing Block](javascript:call_link\('abenend_processing_blocks.htm'\))
[RETURN](javascript:call_link\('abapreturn.htm'\))
[EXIT, processing\_block](javascript:call_link\('abapexit_processing_blocks.htm'\))
[CHECK, processing\_block](javascript:call_link\('abapcheck_processing_blocks.htm'\))
[STOP](javascript:call_link\('abapstop.htm'\))