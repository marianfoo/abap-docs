  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) → 

System Response after a Class-Based Exception

A class-based exception can be raised in a statement block for one of the following reasons:

-   The exception is raised explicitly using the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)).

-   The exception is raised implicitly by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry").

In both cases, the occurrence of a class-based exception interrupts the sequential processing of the current processing block, and the system responds as follows:

-   If the exception is raised when a TRY block of a [TRY](javascript:call_link\('abaptry.htm'\)) control structure is executed, an appropriate CATCH block is searched as a handler. Execution of each TRY block opens a context, also called a protected area, into which the execution of other TRY blocks can be embedded. Usually, execution is embedded by calling [procedures](javascript:call_link\('abenexceptions_procedures.htm'\)) and less frequently by nesting TRY blocks in the source code. Starting at the position where the exception is raised, the system scans the TRY control structures of the participating TRY blocks from the inside to the outside for the first [CATCH](javascript:call_link\('abapcatch_try.htm'\)) block in which the exception class or one of its superclasses appears. If it finds a CATCH block, there are two possible cases:

-   If the addition BEFORE UNWIND is not declared in the statement [CATCH](javascript:call_link\('abapcatch_try.htm'\)), the context in which the exception was raised is deleted, including all called procedures and their local data. The CATCH block is then executed.

-   If the addition BEFORE UNWIND is declared in the statement [CATCH](javascript:call_link\('abapcatch_try.htm'\)), the CATCH block is executed immediately. If the CATCH block is exited using the statement [RESUME](javascript:call_link\('abapresume.htm'\)) in a [resumable exception](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry"), the program resumes after the place where the exception was raised. In all other cases, the system deletes the context in which the exception was raised, after the CATCH block is exited.

If the CATCH block is not exited using a statement such as [RESUME](javascript:call_link\('abapresume.htm'\)), [RETRY](javascript:call_link\('abapretry.htm'\)), or any other processing block [exits](javascript:call_link\('abenleave_processing_blocks.htm'\)), processing continues after the TRY control structure of the block.

-   If no handlers are found in any of the participating TRY control structures of a protected area, or if the exception is not raised during processing of a TRY block of a TRY control structure, a runtime error occurs at the point where the exception was raised. The [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") of the runtime error contains the name of the exception class and the exception text. The attributes of the exception object can be displayed in transaction ST22.

Note the following special features:

-   If the user leaves the procedure context during the handler search, the procedure's interface will be checked. Only exceptions declared there can be propagated from the procedure. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly, while exceptions of category CX\_NO\_CHECK are always declared implicitly. If the exception is not declared in the interface, the exception of the predefined class CX\_SY\_NO\_HANDLER is raised at the call position of the procedure, in whose attribute PREVIOUS a reference to the original exception is stored. This is done at the call position of the procedure,

-   If a handler is found, the [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) blocks of all TRY control structures that were so far scanned unsuccessfully are executed from the inside to the outside, directly before their context is deleted. This means that, if BEFORE UNWIND is declared for the CATCH block, the CLEANUP blocks are executed when the handler is exited and are otherwise executed before being handled. Exceptions that are raised within a CLEANUP block cannot exit the block and must be handled there.
    No CLEANUP blocks are executed in the following cases:

-   When the handling of a [resumable exception](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry") is exited using [RESUME](javascript:call_link\('abapresume.htm'\)).

-   TRY control structures whose exception is raised in a CATCH block (a CATCH block is not part of the protected range).

See also:

-   [Class-Based Exceptions in Procedures](javascript:call_link\('abenexceptions_procedures.htm'\))

-   [Class-Based Exceptions in Event Handlers](javascript:call_link\('abenexceptions_events.htm'\))

Continue
[Class-Based Exceptions in Procedures](javascript:call_link\('abenexceptions_procedures.htm'\))
[Class-Based Exceptions in Event Handlers](javascript:call_link\('abenexceptions_events.htm'\))