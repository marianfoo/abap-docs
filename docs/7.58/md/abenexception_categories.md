---
title: "Exception Categories"
description: |
  Exception classes are subclasses of the following abstract classes: -   CX_ROOT -   CX_STATIC_CHECK -   CX_DYNAMIC_CHECK -   CX_NO_CHECK The assignment to one of the three abstract subclasses of CX_ROOT determines the exception category, that is, whether an exception must be declared explici
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_categories.htm"
abapFile: "abenexception_categories.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "exception-handling", "abenexception", "categories"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Categories%2C%20ABENEXCEPTION_CATEGORIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exception Categories

Exception classes are subclasses of the following abstract classes:

-   CX\_ROOT
    -   CX\_STATIC\_CHECK
    -   CX\_DYNAMIC\_CHECK
    -   CX\_NO\_CHECK

The assignment to one of the three abstract subclasses of CX\_ROOT determines the exception category, that is, whether an exception must be declared explicitly in the procedure interface when [propagating from a procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_procedures.htm), and how the declaration is checked:

-   CX\_STATIC\_CHECK
    
    If exceptions defined using subclasses of CX\_STATIC\_CHECK are propagated from a procedure, they must be explicitly declared in the interface of the procedure. The syntax check statically checks whether all exceptions raised in the procedure using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm), or declared in the interfaces of called procedures are either handled using [CATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) or declared explicitly in the interface, and produces a warning if this is not the case.
    
-   CX\_DYNAMIC\_CHECK
    
    If exceptions defined using subclasses of CX\_DYNAMIC\_CHECK are propagated from a procedure, they must be declared explicitly in the interface of the procedure. However, this is not checked statically by the syntax check, but dynamically at that moment when such an exception is propagated from a procedure.
    
-   CX\_NO\_CHECK
    
    Exceptions that are defined using subclasses of CX\_NO\_CHECK can always be propagated, whereby a possible [resumability](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresumable_exception_glosry.htm "Glossary Entry") is preserved. It is not necessary to declare exceptions defined using subclasses of CX\_NO\_CHECK in the interface of a procedure. They are declared implicitly, but it is also possible to declare subclasses of CX\_NO\_CHECK explicitly in the interface of a procedure. On the one hand, this can be used to document the possible occurrence of exceptions of this category. On the other hand, this makes it possible to change the category of existing exceptions to CX\_NO\_CHECK without causing errors in interface definitions.
    

If an exception of category CX\_STATIC\_CHECK or CX\_DYNAMIC\_CHECK is [propagated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_procedures.htm) from the procedure but not declared in the interface of the procedure, the interface is violated and an exception of the predefined class CX\_SY\_NO\_HANDLER is raised at the call point of the procedure. The exception object of the exception contains a reference to the original exception in the attribute PREVIOUS. An exception of category CX\_NO\_CHECK can be propagated independently of its explicit declaration in the procedure interface.

Programming Guideline

[Use a suitable exception category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_guidl.htm "Guideline")

Hints

-   Using Exception Categories
    -   Exceptions of the CX\_STATIC\_CHECK category are always justified if the direct caller of a procedure is to be forced to handle the exception or to at least explicitly forward it. However, if an exception can be prevented by prior checks, exceptions of the CX\_DYNAMIC\_CHECK category are preferable. Otherwise untestable dead code can be created because corresponding exception handling is necessary, but it is never processed when the interface is used correctly.
    -   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case, for example, if, prior to a division, there is an explicit requirement for the denominator not to equal zero (precondition). In this case, exceptions of the CX\_DYNAMIC\_CHECK category can be used. These exceptions only need to be handled and declared if their occurrence cannot be otherwise prevented.
    -   For exception situations that can occur practically at any time or that cannot be handled directly, the CX\_NO\_CHECK category can be used. Otherwise, these exceptions would have to be declared in almost every interface, which would result in more complex programs lacking in clarity.
-   Most predefined [CX\_SY\_...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm) exceptions for error situations in the runtime framework are subclasses of CX\_DYNAMIC\_CHECK. As a result, not every potential exception of every ABAP statement has to be handled or declared, only those whose occurrence cannot be prevented.
-   The caller of a procedure must anticipate that the procedure propagates exceptions from category CX\_NO\_CHECK in addition to explicitly declared exceptions. Some of the predefined [CX\_SY\_...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm) exceptions for error situations in the runtime framework are subclasses of CX\_NO\_CHECK.
-   Interface violations normally only occur for exceptions of the category CX\_DYNAMIC\_CHECK, since exceptions of the category CX\_STATIC\_CHECK are checked first by the syntax check and exceptions of the category CX\_NO\_CHECK can pass each interface.
-   The [resumability](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresumable_exception_glosry.htm "Glossary Entry") of an exception is not specified as a property of the exception class and is instead defined by the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or the addition THROW in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) when the exception is raised. This property can be lost for exceptions of type CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK during propagation of parameter interfaces of procedures, if they are not also declared there with RESUMABLE.