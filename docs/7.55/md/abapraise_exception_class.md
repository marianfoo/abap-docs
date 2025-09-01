  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions.htm) → 

RAISE EXCEPTION

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_shortref.htm)

Syntax

RAISE *\[*RESUMABLE*\]* EXCEPTION
  *{* *{*TYPE cx\_class *\[* [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm)*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Additions:

[1\. ... RESUMABLE](#!ABAP_ADDITION_1@1@)
[2\. ... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_2@2@)

Effect

This statement interrupts execution of the current statement block and raises a [class-based exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_based_exception_glosry.htm "Glossary Entry"). It can be used at any point in a [processing block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). The statement interrupts the program flow and searches for a [handler](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_try.htm) as described in [System Response After a Class-Based Exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_system_response.htm). Depending on the definition of the handler, the context of the exception is closed before or after the handler is executed, where some [cleanup tasks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcleanup.htm) may be performed. During handling, processing can only be resumed again after the statement RAISE EXCEPTION, without closing the context, if the addition RESUMABLE is specified.

-   If the addition TYPE is specified, an exception of exception class cx\_class is raised and, if necessary, an exception object is created. Every exception class cx\_class visible at this point can be specified after TYPE.

-   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor.

-   The addition [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm) can be used to link the exception object to a [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry").

-   If oref is specified, no new exception object is created when the exception is raised. For oref, an object reference variable must be specified that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In the existing exception object, the internal attributes that describe the position of the exception and that can be read using the method GET\_SOURCE\_POSITION are converted to the position of the statement RAISE.

The statement RAISE EXCEPTION must not be used in a method or function module in whose interface [non-class-based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_non_class.htm) exceptions are declared. Furthermore, it does not allow simultaneous use of the statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_sys.htm) for the obsolete handling of [catchable runtime errors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") or [RAISE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_raising.htm) for raising non-class-based exceptions in function modules and methods in the current processing block.

Hints

-   If the addition TYPE is used exception objects are only created if they are required for performance reasons, that is:

-   If a suitable CATCH block or CLEANUP block is specified in a wrapper [TRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptry.htm) control structure with the addition INTO.

-   If the exception is not caught and a [runtime error](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs.

In principle, however, an exception can be regarded as an instance of an exception object being generated. A difference in behavior can occur only if a non-handled exception of the instance constructor replaces the original exception when the object is generated. However, this situation should never occur.

-   If oref is specified, either an exception object instantiated using [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) or [CREATE OBJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object.htm) can be used, or an exception that was previously caught during exception handling can be raised again.
    

-   If a caught exception is raised again, note that the exception object does not remain unchanged and that the information about the position of the exception is changed. If the original information is to be propagated to an external handler, a new exception of the same class can be raised to whose constructor parameter PREVIOUS the original exception object is passed. It may also be enough to propagate the original exception implicitly, and not raise it again using RAISE. The associated original exception object can then be evaluated in the [CLEANUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcleanup.htm) block, if required
    

-   The exception class after TYPE can be specified only statically. To raise an exception dynamically, the dynamic variant of [CREATE OBJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_explicit.htm) can be used to create an exception object and specify it using oref.
    

-   If a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") is exited by raising an exception, the content of the formal parameter for which the [pass by value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is defined is not assigned to the respective actual parameters.
    

-   The addition [THROW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expressions.htm) makes it possible to raise a class-based exception in an operand position.
    

Example

Raising of an exception cx\_demo in a method.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth RAISING cx\_demo.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
    RAISE EXCEPTION TYPE cx\_demo.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      cls=>meth( ).
    CATCH cx\_demo.
      cl\_demo\_output=>display( 'Catching exception' ).
  ENDTRY.

Example

Raising of a caught exception of the class cx\_demo again using the exception object.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      TRY.
          RAISE EXCEPTION TYPE cx\_demo.
        CATCH cx\_demo INTO DATA(exc).
          cl\_demo\_output=>write( 'Inner CATCH' ).
          RAISE EXCEPTION exc.
      ENDTRY.
    CATCH cx\_demo.
      cl\_demo\_output=>write( 'Outer CATCH' ).
  ENDTRY.
  cl\_demo\_output=>display( ).

Example

Raising of an exception using a dynamically created exception object.

DATA exception TYPE seoclass-clsname VALUE 'CX\_SY\_ZERODIVIDE'.
cl\_demo\_input=>request( CHANGING field = exception ).
DATA oref TYPE REF TO cx\_root.
exception = to\_upper( exception ).
TRY.
    CREATE OBJECT oref TYPE (exception).
  CATCH cx\_root INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
TRY.
    RAISE EXCEPTION oref.
  CATCH cx\_root INTO exc.
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Executable Example

[Exceptions, RAISE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenraise_abexa.htm)

Addition 1

... RESUMABLE

Effect

The addition RESUMABLE raises an exception as a [resumable exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). When an exception of this type is handled in a [CATCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_try.htm) block, the statement [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm) can be used to return to the point directly after the raising statement, as long as the context of the exception was not deleted before the exception was handled.

Hints

-   If the statement RESUMABLE is used to raise an exception as a [resumable exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), the handler has to determine whether processing is resumed after RAISE EXCEPTION, or whether processing of the current context is terminated completely. Both alternatives can occur when an exception is raised. It is important to ensure that [CLEANUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcleanup.htm) blocks are only executed when the context is deleted.
    

-   When exceptions of the types CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK are propagated, which are raised as resumable, they can become non-resumable if the addition RESUMABLE is not specified in each interface involved for the addition RAISING to declare the exception.
    

-   When exceptions of type CX\_NO\_CHECK are propagated, the resumability is always retained. However, exceptions of type CX\_NO\_CHECK should only be raised as resumable with caution, and it must be ensured that a procedure always has the required behavior.
    

Example

Raising of a resumable exception cx\_demo using the addition RESUMABLE in a method.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth RAISING RESUMABLE(cx\_demo).
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
    RAISE RESUMABLE EXCEPTION TYPE cx\_demo.
    cl\_demo\_output=>display( 'Resumed ...' ).
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      cls=>meth( ).
    CATCH BEFORE UNWIND cx\_demo.
      RESUME.
  ENDTRY.

Addition 2

... EXPORTING p1 = a1 p2 = a2 ...

Effect

The addition EXPORTING can be used to assign suitable actual parameters to the input parameters of the instance constructor of the exception class. The syntax is the same as for the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object.htm).

As in regular method calls, a1, a2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In other words, functions and expressions can be passed as actual parameters, in addition to data objects. [Special rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_arith_expr.htm) apply in this case.

Hint

An important input parameter of the instance constructor of an exception class is TEXTID, which determines the [exception text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexception_texts.htm) for the current exception.

-   Only the constants of the exception class that specify a static [exception text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexception_text_glosry.htm "Glossary Entry") of this exception class should be passed to this parameter.

-   Passing the specification of a text as an actual parameter to the parameter TEXTID is not contained in the where-used list of that text. For example, the where-used list of a [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") does not contain this dynamic use of the message.

The addition [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm) is used to link any messages with an exception. This addition cannot be specified with the parameter TEXTID.

Example

A predefined exception is raised explicitly for which an exception text other than the standard exception text is selected and whose placeholder &TOKEN& is filled by passing a value to the attribute with the same name.

TRY.
    ...
    RAISE EXCEPTION TYPE cx\_sy\_dynamic\_osql\_semantics
      EXPORTING textid =
cx\_sy\_dynamic\_osql\_semantics=>unknown\_table\_name
                token = 'Test'.
    ...
  CATCH cx\_sy\_dynamic\_osql\_semantics INTO DATA(exc).
    MESSAGE exc->get\_text( ) TYPE 'I'.
ENDTRY.

Continue
[RAISE EXCEPTION, message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm)