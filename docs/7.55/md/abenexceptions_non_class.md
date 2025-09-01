  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_exceptions.htm) →  [Exceptions Before Class-Based Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_pre_610.htm) → 

Non-Class-Based Exceptions

Definition

Non-class-based exceptions can be defined in the interfaces of function modules and methods. These definition takes place as follows:

-   In methods of local classes, by assigning a name for the exception after the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_general.htm) of the statement [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm)[METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm).

-   In methods of global classes or function modules, by assigning a name for the exception in [Class Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_builder_glosry.htm "Glossary Entry") , whereby the checkbox for exception classes is not selected.

The statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Note

Before class-based exceptions were introduced, all exceptions defined in the interface of methods of global classes or function modules were non-class-based.

Raising

Non-class-based exceptions are raised by the following statements:

-   [RAISE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception.htm)

-   [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_raising.htm)

Handling

The handling of non-class-based exceptions is made possible by the addition EXCEPTIONS in [method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls.htm) and [function module calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function.htm) by assigning numeric values to the exceptions, which are used to fill the system field sy-subrc when the exception is raised. The actual error handling takes place after the call, when sy-subrc is evaluated.

Programming Guideline

[Using Class-Based Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_exception_guidl.htm "Guideline")

Hints

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not change the control flow, but simply end the processing of the [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") prematurely and set the return code sy-subrc instead.

-   [RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_glosry.htm "Glossary Entry") currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.

Continue
[RAISE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception.htm)
[MESSAGE, RAISING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_raising.htm)