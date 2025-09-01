---
title: "Exception Categories"
description: |
  Background Each class-based exception belongs to one of three different exception categories, each of which define whether the exceptions need to be declared in procedure interfaces. The assignment of an exception to an exception class is realized (technically) using inheritance. All exception class
version: "7.57"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_category_guidl.htm"
abapFile: "abenexception_category_guidl.htm"
keywords: ["do", "if", "case", "catch", "method", "class", "abenexception", "category", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exception Categories, ABENEXCEPTION_CATEGORY_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Exception Categories

Background   

Each class-based exception belongs to one of three different exception categories, each of which define whether the exceptions need to be declared in procedure interfaces. The assignment of an exception to an exception class is realized (technically) using inheritance. All exception classes are subclasses of the following abstract global classes, which themselves inherit from CX\_ROOT:

-   CX\_STATIC\_CHECK
    
    Exceptions of this category must be declared explicitly in the interface of a procedure, if they are to be propagated from this interface. The syntax check makes a static check to determine whether all exceptions raised in the procedure with RAISE EXCEPTION or declared in the interfaces of called procedures are either handled with CATCH or explicitly declared in the interface.
    
-   CX\_DYNAMIC\_CHECK
    
    Exceptions of this category must also be declared explicitly in the interface of a procedure to enable them to be propagated. This is not subject to a static syntax check, however, and is checked dynamically at runtime instead.
    
-   CX\_NO\_CHECK
    
    Exceptions of this category do not have to be declared explicitly in the interface of the procedure, since the class CX\_NO\_CHECK and its subclasses are always declared implicitly. Both to support the category change of an existing exception and to document the possible occurrence of exceptions of this category, exceptions of category CX\_NO\_CHECK may also be declared explicitly in procedure interfaces.
    

Rule   

Use a suitable exception category

When creating and raising class-based exceptions, always use an exception category suitable for the current error situation:

-   CX\_STATIC\_CHECK for the static protection of the exception handler
-   CX\_DYNAMIC\_CHECK for error situations that can be prevented by preconditions
-   CX\_NO\_CHECK for situations that cannot be handled immediately

Details   

The exception categories are designed for the following error situations:

-   As a rule, exceptions that are raised in a procedure should be handled there or declared in the interface for the procedure to declare to the caller which exceptions are to be expected. A syntax check to verify this is run on exceptions from the CX\_STATIC\_CHECK category. This category is therefore always warranted if a procedure ([method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) is to be forced to handle an exception or to at least forward it explicitly. However, if an exception can be prevented by prior checks, exceptions of the CX\_DYNAMIC\_CHECK category are preferable.
-   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case if prior to a division, for example, there is an explicit precondition for the denominator not to equal zero. In this case, exceptions from the CX\_DYNAMIC\_CHECK category can and should be used. These exceptions only need to be handled and declared if their occurrence cannot be otherwise prevented. In well modeled applications, exceptions are generally prevented by incorporating appropriate conditions in program code and CX\_DYNAMIC\_CHECK category should then be the most frequently used exception category.
-   For exception situations that can occur at any time and that cannot be handled directly, the CX\_NO\_CHECK category can be used. Otherwise, all exceptions that can be raised due to resource bottlenecks would have to be caught or declared. These exceptions would then have to be specified in practically every interface, which would result in more complex programs lacking in clarity.

Note

The resumability of a class-based exception is not an attribute of the exception class; it is defined instead by the RESUMABLE addition of the RAISE EXCEPTION statement when the exception is raised. This attribute can be lost for exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK during propagation, if the exceptions are not also declared there using RESUMABLE. CX\_NO\_CHECK always preserves its resumability implicitly.