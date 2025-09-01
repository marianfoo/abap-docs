# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Exception Handling / Exceptions Before Class-Based Exceptions

Included pages: 5


### abenexceptions_pre_610.htm

  

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


### abenexceptions_non_class.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) → 

Non-Class-Based Exceptions

Definition

Non-class-based exceptions can be defined in the interfaces of function modules and methods. These exceptions are defined as follows:

-   In methods of local classes, by assigning a name for the exception after the addition [EXCEPTIONS](javascript:call_link\('abapmethods_general.htm'\)) of the statement [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods.htm'\))[METHODS](javascript:call_link\('abapmethods.htm'\)).

-   In methods of global classes or function modules, by assigning a name for the exception in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). Here, the radio button for exception classes is not selected.

The statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Note

Before class-based exceptions were introduced, all exceptions defined in the interface of methods of global classes or function modules were non-class-based.

Raising

Non-class-based exceptions are raised by the following statements:

-   [RAISE](javascript:call_link\('abapraise_exception.htm'\))

-   [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\))

Handling

The handling of non-class-based exceptions is made possible by the addition EXCEPTIONS in [method calls](javascript:call_link\('abenmethod_calls.htm'\)) and [function module calls](javascript:call_link\('abapcall_function.htm'\)). Number values are assigned to the exceptions and are used to fill the system field sy-subrc when the exception is raised. The actual error handling takes place after the call, when sy-subrc is evaluated.

Programming Guideline

[Using Class-Based Exceptions](javascript:call_link\('abenclass_exception_guidl.htm'\) "Guideline")

Notes

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not modify the control flow and they just end the processing of the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") prematurely and set the return code sy-subrc instead.

-   [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.

Continue
[RAISE](javascript:call_link\('abapraise_exception.htm'\))
[MESSAGE - RAISING](javascript:call_link\('abapmessage_raising.htm'\))


### abapraise_exception.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) →  [Non-Class-Based Exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) → 

RAISE

[Quick Reference](javascript:call_link\('abapraise_shortref.htm'\))

Syntax

RAISE exception.

Effect

This statement raises the [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) exception.

-   RAISE can be specified in a method only if the non-class-based exception is defined in the interface of the method.
    
-   Specify RAISE in function modules only if the non-class-based exception is defined in the interface of the function module.
    
-   It is possible to specify RAISE in all other positions, but this is not recommended.
    

After the exception exception is raised, the system proceeds as follows:

-   If the exception is raised in a method or function module whose caller assigns a return value to the exception, the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") ends immediately, the system returns to the calling position, and the system field sy-subrc is set according to the assignment.
    
-   If the exception is raised in a method or function module whose caller does not assign a return value to the exception, a runtime error is then triggered whose [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") contains the name of the exception.
    
-   If the exception is raised in a subroutine, the system searches for the first function module in the procedures of the preceding call stack. If it finds a function module of this type and the exception is defined in it, the system acts as though the exception was raised in this function module. Otherwise, a runtime error occurs.
    
-   In all other processing blocks, raising a non class-based exception produces a runtime error that immediately ends the program.
    

This form of the statement RAISE cannot be used in the same [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") as the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) to raise class-based exceptions.

Notes

-   The statement MESSAGE with the addition [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) also raises a non-class-based exception. In cases in which non-class-based exceptions are still used, this statement is preferred instead of RAISE, because it offers the option of adding a text to the exception.
    
-   If a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is exited by raising an exception, the content of the formal parameter for which the [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") is defined is not assigned to the respective actual parameters.
    

Example

Raising a non-class-based exception in a method.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth EXCEPTIONS exc.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
    RAISE exc.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cls=>meth( EXCEPTIONS exc = 4 ).
  CASE sy-subrc.
    WHEN 4.
      cl\_demo\_output=>display( 'Exception' ).
    WHEN OTHERS.
      ...
  ENDCASE.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The raised exception was not handled by the caller.
    Runtime error: RAISE\_EXCEPTION


### abapmessage_raising.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) →  [Non-Class-Based Exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) → 

MESSAGE - RAISING

[Quick Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

MESSAGE *{* [msg](javascript:call_link\('abapmessage_msg.htm'\)) *|* [text](javascript:call_link\('abapmessage_text.htm'\)) *}* [*\[*DISPLAY LIKE dtype*\]*](javascript:call_link\('abapmessage.htm'\)) [*\[*WITH dobj1... dobj4*\]*](javascript:call_link\('abapmessage.htm'\))
        RAISING exception.

Effect

The statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) with the addition RAISING raises a non-class-based exception exception and only sends a message if the exception is not handled. The semantics of [msg](javascript:call_link\('abapmessage_msg.htm'\)), [text](javascript:call_link\('abapmessage_text.htm'\)), and [WITH](javascript:call_link\('abapmessage.htm'\)) is the same as in the statement MESSAGE without the addition RAISING.

This addition only makes sense during the processing of methods and function modules in which the non-class-based exception exception is defined. Furthermore, it cannot be used in the same [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") as the statement RAISE EXCEPTION or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) to raise class-based exceptions.

-   If the MESSAGE statement is executed with the addition RAISING during processing of a method or a function module, and the caller of the method or function module assigns a return code to the [exception](javascript:call_link\('abenexceptions_non_class.htm'\)) exception using the addition EXCEPTIONS of the statement CALL, the statement works in the same way as the statement [RAISE](javascript:call_link\('abapraise_exception.htm'\)).
    
-   If no return code is assigned to the exception exception, the addition RAISING is ignored and the message is sent using the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) and [processed](javascript:call_link\('abenabap_messages_types.htm'\)) in accordance with its [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry").
    

The system fields of the statement MESSAGE are filled in both cases and are available in the calling program after an exception raised using MESSAGE ...RAISING is handled. This is especially true if a function module was called using Remote Function Call ([RFC](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry")).

Notes

-   The statement MESSAGE ... RAISING is primarily a statement for raising exceptions and not for sending messages. An exception of this type should always be handled like an exception raised using RAISE, since the behavior of the message depends strongly on the context and is usually unpredictable when the function module is created.
    
-   Using MESSAGE ... RAISING in cases in which non class-based exceptions must still be used is preferable to using the RAISE statement, because it offers the option of providing additional text information with an exception.
    
-   A return code can be assigned to messages that are sent in function modules without the addition RAISING by using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)).
    
-   Messages sent as messages when a function module is called and not caught (despite RAISING) are processed as with [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)).
    
-   If a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is exited by raising an exception, the content of the formal parameter for which the [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") is defined is not assigned to the respective actual parameters.
    

Example

When the message is called for the first time, an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry") is sent. The second time, an exception is raised instead, which is handled by sy-subrc.

     CLASS c1 DEFINITION.
       PUBLIC SECTION.
         CLASS-METHODS m1 EXCEPTIONS exc1.
     ENDCLASS.
     CLASS c1 IMPLEMENTATION.
       METHOD m1.
         MESSAGE 'Message in a Method' TYPE 'I' RAISING exc1.
       ENDMETHOD.
     ENDCLASS.
     ...
       c1=>m1( ).
       c1=>m1( EXCEPTIONS exc1 = 4 ).
     IF sy-subrc = 4.
       ...
     ENDIF.


### abenexceptions_non_class.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) → 

Non-Class-Based Exceptions

Definition

Non-class-based exceptions can be defined in the interfaces of function modules and methods. These exceptions are defined as follows:

-   In methods of local classes, by assigning a name for the exception after the addition [EXCEPTIONS](javascript:call_link\('abapmethods_general.htm'\)) of the statement [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods.htm'\))[METHODS](javascript:call_link\('abapmethods.htm'\)).

-   In methods of global classes or function modules, by assigning a name for the exception in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). Here, the radio button for exception classes is not selected.

The statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Note

Before class-based exceptions were introduced, all exceptions defined in the interface of methods of global classes or function modules were non-class-based.

Raising

Non-class-based exceptions are raised by the following statements:

-   [RAISE](javascript:call_link\('abapraise_exception.htm'\))

-   [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\))

Handling

The handling of non-class-based exceptions is made possible by the addition EXCEPTIONS in [method calls](javascript:call_link\('abenmethod_calls.htm'\)) and [function module calls](javascript:call_link\('abapcall_function.htm'\)). Number values are assigned to the exceptions and are used to fill the system field sy-subrc when the exception is raised. The actual error handling takes place after the call, when sy-subrc is evaluated.

Programming Guideline

[Using Class-Based Exceptions](javascript:call_link\('abenclass_exception_guidl.htm'\) "Guideline")

Notes

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not modify the control flow and they just end the processing of the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") prematurely and set the return code sy-subrc instead.

-   [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.

Continue
[RAISE](javascript:call_link\('abapraise_exception.htm'\))
[MESSAGE - RAISING](javascript:call_link\('abapmessage_raising.htm'\))
