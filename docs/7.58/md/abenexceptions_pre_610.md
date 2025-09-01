  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%20Before%20Class-Based%20Exceptions%2C%20ABENEXCEPTIONS_PRE_610%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions Before Class-Based Exceptions

Exceptions are [class-based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm). Before the introduction of exception classes, there were the following types of exceptions:

-   Exception situations detected by the system (and whose causes could be handled effectively by the program) raised [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm) that could be handled by the statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm). Catchable runtime errors are now obsolete. Each catchable runtime error is assigned an exception class instead, which is handled in a [TRY block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm). Conversely, not all predefined class-based exceptions are assigned to a catchable runtime error. No new catchable runtime errors are created and existing runtime errors that are to be made catchable are no longer transformed to catchable runtime errors. Instead, exception classes are assigned to them.
-   [User-defined catchable exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_non_class.htm) were only possible in the interfaces of function modules and methods. These types of exceptions can be raised within the [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") when an exception situation is recognized by the statement [RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm). The caller of the procedure can use the addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function.htm) or [meth( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm) to assign return codes for the system field sy-subrc to the exceptions the caller wants to handle and evaluate them after the call. However, this does not represent true exception handling in the sense of reacting to an event.

Interaction of the Exception Concepts   

The class-based exceptions replace and enhance the previous concepts completely. Class-based exceptions can be raised and handled in all ABAP contexts (programs, processing blocks). In particular, all previously catchable runtime errors can be handled as class-based exceptions, whereby the previous exception groups are mapped by shared superclasses. For reasons of downward-compatibility, the catchable runtime errors and the non-class-based exceptions defined in the interfaces of methods and function modules have not been abolished, but their use has been restricted as follows:

-   Within a [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), only one kind of exception can be raised.
-   Within a procedure interface, the declaration of class-based exceptions and the definition of non-class-based exceptions are mutually exclusive.
-   Within a processing block, catchable runtime errors cannot be caught using [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm) if class-based exceptions are handled there in [TRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) blocks or are raised using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm). Instead, catchable runtime errors must be caught when handling the associated class-based exception.

For reasons of interoperability, class-based exceptions and return values of function modules should be handled or evaluated within a processing block using non-class-based exceptions.

Continue
[Non-Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_non_class.htm)