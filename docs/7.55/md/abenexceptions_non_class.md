  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) → 

Non-Class-Based Exceptions

Definition

Non-class-based exceptions can be defined in the interfaces of function modules and methods. These definition takes place as follows:

-   In methods of local classes, by assigning a name for the exception after the addition [EXCEPTIONS](javascript:call_link\('abapmethods_general.htm'\)) of the statement [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods.htm'\))[METHODS](javascript:call_link\('abapmethods.htm'\)).

-   In methods of global classes or function modules, by assigning a name for the exception in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry") , whereby the checkbox for exception classes is not selected.

The statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Note

Before class-based exceptions were introduced, all exceptions defined in the interface of methods of global classes or function modules were non-class-based.

Raising

Non-class-based exceptions are raised by the following statements:

-   [RAISE](javascript:call_link\('abapraise_exception.htm'\))

-   [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\))

Handling

The handling of non-class-based exceptions is made possible by the addition EXCEPTIONS in [method calls](javascript:call_link\('abenmethod_calls.htm'\)) and [function module calls](javascript:call_link\('abapcall_function.htm'\)) by assigning numeric values to the exceptions, which are used to fill the system field sy-subrc when the exception is raised. The actual error handling takes place after the call, when sy-subrc is evaluated.

Programming Guideline

[Using Class-Based Exceptions](javascript:call_link\('abenclass_exception_guidl.htm'\) "Guideline")

Hints

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not change the control flow, but simply end the processing of the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") prematurely and set the return code sy-subrc instead.

-   [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.

Continue
[RAISE](javascript:call_link\('abapraise_exception.htm'\))
[MESSAGE, RAISING](javascript:call_link\('abapmessage_raising.htm'\))