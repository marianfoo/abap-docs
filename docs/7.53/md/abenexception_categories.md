  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_classes.htm) → 

Exception Categories

Exception classes are subclasses of the following global classes:

The common superclass for these classes is CX\_ROOT. The assignment to one of these three superclasses determines the exception category, which itself specifies whether an exception must be declared explicitly in the procedure interface when [propagating from a procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_procedures.htm), and how the declaration is checked:

-   If exceptions defined using subclasses of CX\_STATIC\_CHECK are propagated from a procedure, they must be explicitly declared in the interface of the procedure. The syntax check makes a static check to determine whether all exceptions raised in the procedure using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm) or declared in the interfaces of called procedures are either handled using [CATCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) or declared explicitly in the interface, and produces a warning if this is not the case.

-   If exceptions defined using subclasses of CX\_DYNAMIC\_CHECK are propagated from a procedure, they must be declared explicitly in the interface of the procedure. However, this is not checked statically by the syntax check; instead, it is checked dynamically at the point in time when such an exception is propagated from a procedure.

-   Exceptions that are defined using subclasses of CX\_NO\_CHECK may not be explicitly declared in the interface of the procedure. The class CX\_NO\_CHECK and its subclasses are always declared implicitly and are always propagated. Any [resumability](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenresumable_exception_glosry.htm "Glossary Entry") is preserved here.

If an exception not declared in the interface of a procedure is [propagated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_procedures.htm) from the procedure, the interface is violated and an exception of the predefined class CX\_SY\_NO\_HANDLER is raised in the call point of the procedure. The exception object of the exception contains a reference to the original exception in the attribute PREVIOUS.

Programming Guideline

[Use a suitable exception category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_category_guidl.htm "Guideline")

Notes

-   Using Exception Categories

-   As a rule, exceptions that are raised in a procedure should be handled there or declared in the interface for the procedure in order to declare to the caller which exceptions are to be expected. A syntax check to verify this is run on exceptions from the CX\_STATIC\_CHECK category. This category is always warranted if a procedure is to be forced to handle an exception or to at least explicitly forward it. However, if an exception can be prevented by prior checks, exceptions of the CX\_DYNAMIC\_CHECK category are preferable.

-   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case, for example, if, prior to a division, there is an explicit requirement for the denominator not to equal zero (precondition). In this case, exceptions from the CX\_DYNAMIC\_CHECK category can and should be used. These exceptions only need to be handled and declared if their occurrence cannot be otherwise prevented. In well modeled applications, exceptions are generally prevented by incorporating appropriate conditions in program code and CX\_DYNAMIC\_CHECK category should then be the most frequently used exception category.

-   For exception situations that can occur at any time and that cannot be handled directly, the CX\_NO\_CHECK category can be used. Otherwise, all exceptions that can be raised due to resource bottlenecks would have to be caught or declared. These exceptions would then have to be specified in practically every interface, which would result in more complex programs lacking in clarity.

-   Most predefined [CX\_SY\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exception_classes.htm) exceptions for error situations in the runtime environment are subclasses of CX\_DYNAMIC\_CHECK. As a result, not every potential exception of every ABAP statement needs to be handled or declared. Only those whose occurrence cannot be prevented need to be handled or declared.

-   The caller of a procedure must anticipate that the procedure propagates exceptions from category CX\_NO\_CHECK in addition to explicitly declared exceptions. Some of the predefined [CX\_SY\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exception_classes.htm) exceptions for error situations in the runtime environment are subclasses of CX\_NO\_CHECK.

-   Interface violations normally only occur for exceptions from category CX\_DYNAMIC\_CHECK, since exceptions from category CX\_STATIC\_CHECK are checked first by the syntax check and exceptions from category CX\_NO\_CHECK can be raised for any interface.

-   The [resumability](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenresumable_exception_glosry.htm "Glossary Entry") of an exception is not specified as an attribute of the exception class and is instead defined by the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm) or the addition THROW in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm) when the exception is raised. This attribute can be lost for exceptions of type CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK during propagation of parameter interfaces of procedures, if the exceptions are not also declared there with RESUMABLE.