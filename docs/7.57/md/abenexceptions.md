  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Class-Based Exceptions, ABENEXCEPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Class-Based Exceptions

Class-based exceptions are implemented as instances of [exception classes](javascript:call_link\('abenexceptions_classes.htm'\)). Exception classes are either predefined globally in the system or can be defined by the user both globally and locally. Class-based exceptions are raised either by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") or by a program.

-   Exception situations detected by the system and whose causes can be handled properly in the program, raise [predefined class-based exceptions](javascript:call_link\('abenabap_exception_classes.htm'\)).
-   The exceptions of all exception classes visible in a program can be raised by the program as follows:.
    -   Using the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).
    -   Using the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in [conditional expressions](javascript:call_link\('abenconditional_expressions.htm'\)).
-   Class-based exceptions can be declared in the interface of [procedures](javascript:call_link\('abenexceptions_procedures.htm'\)). This is done using the addition RAISING of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [FORM](javascript:call_link\('abapform.htm'\)). In the form-based [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") and [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"), this is done by selecting exception classes when defining exceptions in the interface. The declared exceptions can occur at the call position of a procedure if the exception is not handled in the procedure.

When an exception is raised, an exception object can be created, whose attributes contain information about the error situation. A class-based exception can be handled in a [TRY](javascript:call_link\('abaptry.htm'\)) control structure. The TRY block defines a protected area whose exceptions can be handled in subsequent CATCH blocks. The statement [RETRY](javascript:call_link\('abapretry.htm'\)) enables a full TRY block to be repeated after an exception. Because all exception classes are subclasses of common superclasses, the associated exceptions can be handled at the same time by handling the respective superclasses. The system [propagates](javascript:call_link\('abenexceptions_system_response.htm'\)) the exception object or the class-based exception until the exception is handled or an interface is violated.

There are two different exception handling cases:

1.  The context in which the exception was raised is deleted completely before or after handling. This removes all procedures from the memory, including their local data, which was called from the handler context and caused the exception, and handling is resumed depending on how the handler is exited.
2.  The context in which the exception was raised is retained and the program is resumed after the statement that raised the exception.

A prerequisite for the second case are [resumable exceptions](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry"). These must be raised using the addition RESUMABLE of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and declared using the addition RESUMABLE in the interface of the procedures from which they were propagated. The statement [RESUME](javascript:call_link\('abapresume.htm'\)) is used to resume the program.

Programming Guideline

[Using Class-Based Exceptions](javascript:call_link\('abenclass_exception_guidl.htm'\) "Guideline")

Continue
[Exception Classes](javascript:call_link\('abenexceptions_classes.htm'\))
[System Response After a Class-Based Exception](javascript:call_link\('abenexceptions_system_response.htm'\))
[RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\))
[TRY](javascript:call_link\('abaptry.htm'\))
[Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\))