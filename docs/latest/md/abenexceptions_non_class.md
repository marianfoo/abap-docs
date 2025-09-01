  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) →  [Exceptions Before Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_pre_610.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Non-Class-Based%20Exceptions%2C%20ABENEXCEPTIONS_NON_CLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Non-Class-Based Exceptions

Non-class-based exceptions are the predecessors of class-based exceptions and should not be defined any more in new developments.

-   [Definition](#@@ITOC@@ABENEXCEPTIONS_NON_CLASS_1)
-   [Raising](#@@ITOC@@ABENEXCEPTIONS_NON_CLASS_2)
-   [Handling](#@@ITOC@@ABENEXCEPTIONS_NON_CLASS_3)

Programming Guideline

[Using Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_exception_guidl.htm "Guideline")

Definition   

Non-class-based exceptions can be defined in the [parameter interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of function modules and methods. These definitions take place as follows:

-   In methods of local classes, by assigning a name for the exception after the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) of the statement [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods.htm)[METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm).
-   In methods of global classes, global interfaces or function modules, by assigning a name for the exception in [Class Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_builder_glosry.htm "Glossary Entry"), whereby the checkbox for exception classes is not selected.

The statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Hint

Before class-based exceptions were introduced, all exceptions defined in the [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of methods or function modules were non-class-based.

Raising   

Non-class-based exceptions are raised by the following statements:

-   [RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm)
-   [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm)

Handling   

The handling of non-class-based exceptions is made possible by the addition EXCEPTIONS in [method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm) and [function module calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) by assigning numeric values to the exceptions, which are used to fill the system field sy-subrc when the exception is raised. The actual error handling takes place after the call, when sy-subrc is evaluated.

Hints

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not change the control flow, but simply end the processing of the [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") prematurely and set the return code sy-subrc instead.
-   A predefined exception [error\_message](abapcall_function_parameter.htm#!ABAP_ADDITION_6@6@) can be used when calling function modules to handle [messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) of types E and A sent during the processing of the function module as non-class-based exceptions.
-   [RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_glosry.htm "Glossary Entry") currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.

Continue
[RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm)
[MESSAGE, RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm)