  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: System Response After a Class-Based Exception, ABENEXCEPTIONS_SYSTEM_RESPONSE, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

System Response After a Class-Based Exception

A class-based exception occurs in a statement block for one of the following reasons:

-   The exception is raised explicitly using the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expressions.htm).
-   The exception is raised implicitly by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry").

In both cases, the occurrence of a class-based exception interrupts the sequential processing of the current statement block, and the system responds as follows:

-   If the exception occurs when a TRY block of a [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) control structure is executed, an appropriate CATCH block is searched as a handler. The execution of each TRY block opens a context, also referred to as a protected area, into which the execution of other TRY blocks can be embedded. Usually, the embedding takes place by calling [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_procedures.htm) and less frequently by nesting TRY blocks in the source code. Starting at the position where the exception is raised, the system scans the TRY control structures of the involved TRY blocks from the inside to the outside for the first [CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm) block in which the exception class or one of its superclasses is listed. If such a CATCH block is found, there are two possible cases:
    
    -   If the addition BEFORE UNWIND is not specified in the statement [CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm), the context in which the exception was raised is deleted, including all called procedures and their local data. The CATCH block is then executed.
    -   If the addition BEFORE UNWIND is specified in the statement [CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm), the CATCH block is executed immediately. If the CATCH block is exited using the statement [RESUME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapresume.htm) in a [resumable exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), processing resumes after the raising position. In all other cases, the system deletes the context in which the exception was raised, after the CATCH block is exited.
    
    If the CATCH block is not exited using a statement such as [RESUME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapresume.htm), [RETRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapretry.htm), or any other processing block [exits](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm), processing continues after the TRY control structure of the block by default.
    
-   If no handler is found in any of the participating TRY control structures of a protected area, or if the exception is not raised during processing of a TRY block of a TRY control structure, a runtime error occurs at the point where the exception was raised. The [short dump](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error contains the name of the exception class and the exception text. The attributes of the exception object can be displayed in transaction ST22.

Note the following special features:

-   If the context of a procedure is exited during the handler search, the procedure's interface will be checked. Only exceptions declared there can be propagated from the procedure. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly, while exceptions of category CX\_NO\_CHECK are always declared implicitly but can also be declared explicitly. If the exception is not declared in the interface, the exception of the predefined class CX\_SY\_NO\_HANDLER is raised at the call position of the procedure, in whose attribute PREVIOUS a reference to the original exception is stored.
-   If a handler is found, the [CLEANUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcleanup.htm) blocks of all TRY control structures that were so far scanned unsuccessfully are executed from the inside to the outside, directly before their context is deleted. This means that, if BEFORE UNWIND is specified in the CATCH block, the CLEANUP blocks are executed when the handler is exited. Otherwise, they are executed before being handled. Exceptions that are raised within a CLEANUP block cannot exit the block and must be handled there.
    
    No CLEANUP blocks are executed in the following cases:
    
    -   If the handling of a [resumable exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresumable_exception_glosry.htm "Glossary Entry") is exited using [RESUME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapresume.htm).
    -   TRY control structures whose exception is raised in a CATCH block (a CATCH block is not part of the protected range).

See also:

-   [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_procedures.htm)
-   [Class-Based Exceptions in Event Handlers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_events.htm)

Continue
[Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_procedures.htm)
[Class-Based Exceptions in Event Handlers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_events.htm)