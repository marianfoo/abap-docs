  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_classes.htm) → 

Exception Categories

Exception classes are subclasses of the following global classes:

-   CX\_STATIC\_CHECK

-   CX\_DYNAMIC\_CHECK

-   CX\_NO\_CHECK

The common superclass for these classes is CX\_ROOT. The assignment to one of these three superclasses determines the exception category, which itself specifies whether an exception must be declared explicitly in the procedure interface when [propagating from a procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm), and how the declaration is checked:

-   If exceptions defined using subclasses of CX\_STATIC\_CHECK are propagated from a procedure, they must be declared explicitly in the interface of the procedure. The syntax check makes a static check to determine whether all exceptions raised in the procedure using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm) or declared in the interfaces of called procedures are either handled using [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) or declared explicitly in the interface, and produces a warning if this is not the case.

-   If exceptions defined using subclasses of CX\_DYNAMIC\_CHECK are propagated from a procedure, they must be declared explicitly in the interface of the procedure. This is not, however, checked statically by the syntax check and is instead checked dynamically at the point in time when an exception of this type is propagated from a procedure.

-   Exceptions defined using subclasses of CX\_NO\_CHECK may not be declared explicitly in the interface of the procedure. The class CX\_NO\_CHECK and its subclasses are always declared implicitly and are always propagated. Any [resumability](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry") is preserved here.

If an exception not declared in the interface of a procedure is [propagated](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm) from the procedure, the interface is violated and an exception of the predefined class CX\_SY\_NO\_HANDLER is raised in the call point of the procedure. The exception object of the exception contains a reference to the original exception in the attribute PREVIOUS.

Programming Guideline

[Use a suitable exception category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_category_guidl.htm "Guideline")

Notes

-   Using exception categories

-   As a rule, exceptions that are raised in a procedure should be handled there or declared in the interface for the procedure. This declares to the caller which exceptions are to be expected. A syntax check to verify this is made on exceptions from the category CX\_STATIC\_CHECK. This category is always warranted if a procedure is forced to handle an exception or least forward it explicitly. If an exception can be prevented by prior checks, however, exceptions of the category CX\_DYNAMIC\_CHECK are preferable.

-   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case, for example, if there is an explicit requirement for the denominator not to equal zero prior to a division (a precondition). In this case, exceptions from the category CX\_DYNAMIC\_CHECK can and should be used. These exceptions only need to be handled and declared if their occurrence cannot otherwise be prevented. In well modeled applications, exceptions are generally prevented by incorporating appropriate conditions in program code and the category CX\_DYNAMIC\_CHECK should then be the most frequently used exception category.

-   In exception situations that can occur at any time and that cannot be handled directly, the CX\_NO\_CHECK category can be used. Otherwise, all exceptions that can be raised due to resource bottlenecks would have to be caught or declared. These exceptions would then have to be specified in practically every interface, which would result in more complex programs lacking in clarity.

-   Most predefined [CX\_SY\_...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exception_classes.htm) exceptions for error situations in the runtime environment are subclasses of CX\_DYNAMIC\_CHECK. As a result, not every potential exception of every ABAP statement needs to be handled or declared. Only those that cannot be prevented need to be handled or declared.

-   The caller of a procedure must anticipate that, in addition to explicitly declared exceptions, the procedure also propagates exceptions from the category CX\_NO\_CHECK . Some of the predefined [CX\_SY\_...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exception_classes.htm) exceptions for error situations in the runtime environment are subclasses of CX\_NO\_CHECK.

-   Interface violations normally only occur for exceptions from the category CX\_DYNAMIC\_CHECK, since exceptions from the category CX\_STATIC\_CHECK are checked first by the syntax check and exceptions from the category CX\_NO\_CHECK can be raised for any interface.

-   The [resumability](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry") of an exception is not specified as an attribute of the exception class and is instead defined by the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) or the addition THROW in a [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm) when the exception is raised. This attribute can be lost for exceptions of type CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK during propagation of parameter interfaces of procedures, if the exceptions are not also declared there with RESUMABLE.