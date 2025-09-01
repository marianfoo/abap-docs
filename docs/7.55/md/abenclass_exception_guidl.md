  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarchitecture_guidl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenerror_handling_guidl.htm) → 

Classic and Class-Based Exceptions

Background

For reasons of downward compatibility, there are two options for defining standalone catchable exceptions in ABAP:

-   Classic Exceptions
    These exceptions can only be declared in the interfaces of methods or function modules using EXCEPTIONS and can be raised within such a procedure using the statements [RAISE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_raising.htm). The procedure caller can use the addition EXCEPTIONS of the statements [meth( ... )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_static_short.htm) or [CALL FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function.htm) to assign return codes for the system field sy-subrc to the exceptions the caller wants to handle and evaluate them after the call.

-   Class-Based Exceptions
    These exceptions are defined by exception classes, from which an exception object can be created when an exception is raised (if a handler uses the addition INTO in CATCH). A class-based exception can either cancel the current context or allow for a resume. Exceptions are raised using the statement RAISE EXCEPTION and handled using CATCH in a TRY control structure. Class-based exceptions can be raised in any procedures and can be further propagated by any procedures.

The coexistence of the two exception concepts is regulated as follows:

-   Classic and class-based exceptions cannot be declared together in the interface of a procedure. Within a processing block, either only classic or only class-based exceptions can be raised.

-   For reasons of interoperability, within a processing block class-based exceptions can be handled and evaluate the return values of function modules and methods using classic exceptions.

Rule

Using Class-Based Exceptions

Only raise class-based exceptions in new procedures if it is possible to dispense with classic exceptions from the technical point of view.

Details

Self-defined classic exceptions are little more than return values. If a classic exception is raised in a procedure using the statement RAISE, the sy-subrc system field is set according to the raised exception after the return to the calling program. The calling program itself must always check, by querying sy-subrc, whether an exception was raised and react to it if required, for example, by appropriate handling or explicit forwarding to its own calling program (by raising a separate equivalent exception). This does not improve the clarity of the program.

The raising of class-based exceptions, however, results in a change of the program flow. They can either be handled directly or propagated upwards along the call hierarchy. In this way, not every procedure ([method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) has to consider every possible exception situation itself. This supports the [separation of concerns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenseperation_concerns_guidl.htm "Guideline") within an application. Because the exception can be represented by an object of an exception class, this exception object can gather additional information about the exception situation and transport it to the handler. In contrast to classic exceptions, this can also include specific [exception texts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexception_texts_guidl.htm "Guideline").

By default, raising an exception stops the entire current context even if the exception is handled. However, there may be situations (mass data processing, for instance) in which a single error does not justify canceling an entire service. For these cases, class-based exceptions can be raised and propagated as resumable exceptions (RESUMABLE). A handler can decide whether a service is canceled completely or is resumed using the statement RESUME, for example after a corresponding log entry has been written.

Class-based exceptions completely replace the classic exceptions for new code (of course, there are exceptions to this rule) and add resumability. Although classic exceptions on the raiser side are completely obsolete from a technical point of view, the following must be considered for older code: Even if the raiser side is under control, it is not simply a case of switching older procedures over to class-based exceptions, because then all usage occurrences would have to be modified.

When existing procedures that use classic exceptions are called, they must continue to be handled in the new code. In this case, we recommend mapping the classic exceptions to equivalent class-based exceptions by using RAISE EXCEPTION. In this way, class-based error handling is provided that is uniform to the outside. The exception situation can then be forwarded to higher call layers without each layer having to react to this situation explicitly.

Exception

Since class-based exceptions are currently not supported in remote-enabled function modules (RFM), classic exceptions still need to be implemented and handled for remote function calls (RFCs).

Bad Example

The following source code shows the declaration and the raising of a classic exception in a method as well as their handling by evaluating sy-subrc after a call of the method. This procedure infringes the above rule. .

CLASS application DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
    EXCEPTIONS application\_error.
ENDCLASS.

CLASS application IMPLEMENTATION.
  METHOD do\_something.
    ...
    RAISE application\_error.
    ...
  ENDMETHOD.
ENDCLASS.

...

... oref TYPE REF TO application.
...
oref->do\_something(
  EXCEPTIONS application\_error = 4 ).
IF sy-subrc <> 0.
  ...
ENDIF.

Good Example

The following source code shows the definition of an exception class, its declaration, and the raising in a method as well as its handling using CATCH after the call of the method in a TRY block.

CLASS cx\_application\_error DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS application DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      RAISING cx\_application\_error.
ENDCLASS.

CLASS application IMPLEMENTATION.
  METHOD do\_something.
    ...
    RAISE EXCEPTION TYPE cx\_application\_error.
    ...
  ENDMETHOD.
ENDCLASS.

...

... oref TYPE REF TO application.
...
TRY.
    oref->do\_something( ).
    CATCH cx\_application\_error.
      ...
ENDTRY.

This simple example is perhaps not the most obvious demonstration of the great advantage of class-based exceptions over classic exceptions. However, the advantage is clearly seen in nested procedure calls and the handling of exceptions that were raised in more distant call levels.