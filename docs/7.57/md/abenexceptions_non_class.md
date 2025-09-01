  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Non-Class-Based Exceptions, ABENEXCEPTIONS_NON_CLASS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Non-Class-Based Exceptions

Non-class-based exceptions are the predecessors of class-based exceptions and should not be defined any more in new developments.

-   [Definition](#@@ITOC@@ABENEXCEPTIONS_NON_CLASS_1)
-   [Raising](#@@ITOC@@ABENEXCEPTIONS_NON_CLASS_2)
-   [Handling](#@@ITOC@@ABENEXCEPTIONS_NON_CLASS_3)

Programming Guideline

[Using Class-Based Exceptions](javascript:call_link\('abenclass_exception_guidl.htm'\) "Guideline")

Definition   

Non-class-based exceptions can be defined in the [parameter interfaces](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of function modules and methods. These definitions take place as follows:

-   In methods of local classes, by assigning a name for the exception after the addition [EXCEPTIONS](javascript:call_link\('abapmethods_general.htm'\)) of the statement [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods.htm'\))[METHODS](javascript:call_link\('abapmethods.htm'\)).
-   In methods of global classes, global interfaces or function modules, by assigning a name for the exception in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"), whereby the checkbox for exception classes is not selected.

The statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Hint

Before class-based exceptions were introduced, all exceptions defined in the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of methods or function modules were non-class-based.

Raising   

Non-class-based exceptions are raised by the following statements:

-   [RAISE](javascript:call_link\('abapraise_exception.htm'\))
-   [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\))

Handling   

The handling of non-class-based exceptions is made possible by the addition EXCEPTIONS in [method calls](javascript:call_link\('abenmethod_calls.htm'\)) and [function module calls](javascript:call_link\('abapcall_function.htm'\)) by assigning numeric values to the exceptions, which are used to fill the system field sy-subrc when the exception is raised. The actual error handling takes place after the call, when sy-subrc is evaluated.

Hints

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not change the control flow, but simply end the processing of the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") prematurely and set the return code sy-subrc instead.
-   [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.
-   A predefined exception [error\_message](abapcall_function_parameter.htm#!ABAP_ADDITION_6@6@) can be used when calling function modules to handle [messages](javascript:call_link\('abenabap_messages.htm'\)) of types E and A sent during the processing of the function module as non-class-based exceptions.

Continue
[RAISE](javascript:call_link\('abapraise_exception.htm'\))
[MESSAGE, RAISING](javascript:call_link\('abapmessage_raising.htm'\))