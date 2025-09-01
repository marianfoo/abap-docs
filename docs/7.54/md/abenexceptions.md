  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm) → 

Class-Based Exceptions

Class-based exceptions are implemented as instances of [exception classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_classes.htm). Exception classes are either predefined globally in the system or can be defined by the user (globally or locally). Class-based exceptions are raised either by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") or by a program.

-   Exception situations detected by the system, and whose causes can be handled in the program, raise [predefined class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exception_classes.htm).

-   The exceptions of all exception classes visible in a program can be raised as program-driven exceptions as follows:.

-   Using the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm).

-   Using the addition [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) in [conditional expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm).

-   Class-based exceptions can be declared in the interface of [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_procedures.htm). This is done using the addition RAISING of the statements [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm) and [FORM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform.htm). In [Class Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_builder_glosry.htm "Glossary Entry") and [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry"), this is done by selecting exception classes when defining exceptions in the interface. The declared exceptions can occur at the call position of a procedure if the exception is not handled in the procedure.

When an exception is raised, an exception object can be created, whose attributes contain information about the error situation. A class-based exception can be handled in a [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm) control structure. The TRY block defines a protected area whose exceptions can be handled in subsequent CATCH blocks. The statement [RETRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapretry.htm) enables a full TRY block to be retried after an exception. Because all exception classes are subclasses of common superclasses, the associated exceptions can be handled at the same time by handling the respective superclass. The system [propagates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_system_response.htm) the exception object or the class-based exception until the exception is handled or an interface is violated.

There are two different exception handling cases:

1.  The context in which the exception was raised is deleted completely before or after handling. This removes all procedures from the memory (and also their local data, which was called from the handler context and which caused the exception); handling is resumed depending on how the handler is exited.
    
2.  The context in which the exception was raised is retained and the program is resumed after the statement that raised the exception.

A prerequisite for the second case are [resumable exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). These exceptions must be raised using the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm) and declared using the addition RESUMABLE in the interface of the procedures from which they were propagated. The statement [RESUME](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapresume.htm) is used to resume the program.

Programming Guideline

[Using Class-Based Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_exception_guidl.htm "Guideline")

Continue
[Exception Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_classes.htm)
[System Response after a Class-Based Exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_system_response.htm)
[RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm)
[TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm)
[Examples of Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_abexas.htm)