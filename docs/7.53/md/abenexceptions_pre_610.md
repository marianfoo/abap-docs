  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

Exceptions Before Class-Based Exceptions

Exceptions are [class-based](javascript:call_link\('abenexceptions.htm'\)). Before the introduction of exception classes, there were the following types of exceptions:

-   Exception situations detected by the system (and whose causes could be handled effectively by the program) raised [catchable runtime errors](javascript:call_link\('abensystem-exceptions.htm'\)) that could be handled by the statement [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)). Catchable runtime errors are now obsolete. Each catchable runtime error is assigned an exception class instead, which is handled in a [TRY block](javascript:call_link\('abaptry.htm'\)). Conversely, not all predefined class-based exceptions are assigned to a catchable runtime error. No new catchable runtime errors are created and existing runtime errors that are to be made handleable are no longer transformed to catchable runtime errors. Instead, exception classes are assigned to them.

-   [Self-defined handleable exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) were allowed only in the interfaces of function modules and methods. These types of exceptions can be raised within the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") by the statement [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) as soon as an exception situation is detected. The caller of the procedure can use the addition EXCEPTIONS of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) or [meth( ... )](javascript:call_link\('abapcall_method_static_short.htm'\)) to assign return codes for the system field sy-subrc to the exceptions the caller wants to handle and evaluate them after the call. However, this is not true exception handling in the sense of reacting to an event.

Interaction of the Exception Concepts

The class-based exceptions replace and enhance the previous concepts in full. Class-based exceptions can be raised and handled in all ABAP contexts (programs, processing blocks). In particular, all previously catchable runtime errors can be handled as class-based exceptions, with the previous exception groups being mapped to shared superclasses. For reasons of downward-compatibility, the catchable runtime errors and the non-class-based exceptions defined in the interfaces of methods and function modules have not been abolished, but their use has been restricted as follows:

-   Within a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"), only one kind of exception can be raised.

-   Within a procedure interface, the declaration of class-based exceptions and the definition of non-class-based exceptions exclude one another.

-   Within a processing block, catchable runtime errors cannot be caught using [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)) if class-based exceptions are handled there in [TRY](javascript:call_link\('abaptry.htm'\)) blocks or are raised using [RAISE EXCEPTION](javascript:call_link\('abapraise_exception.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)). Instead, catchable runtime errors must be caught when handling the associated class-based exception.

For reasons of interoperability, class-based exceptions can be handled within a processing block and return codes of function modules and methods evaluated there using non-class-based exceptions.

Continue
[Non-Class-Based Exceptions](javascript:call_link\('abenexceptions_non_class.htm'\))