  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_call_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20FUNCTION%20EXCEPTIONS%2C%20Short%20Form%2C%20ABAPCALL_FUNCTION_EXC_SHORT_FORM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CALL FUNCTION EXCEPTIONS, Short Form

Obsolete Syntax

CALL FUNCTION func ...
                   EXCEPTIONS exc1 exc2 ...

Effect

This short form for specifying non-class-based exceptions in the [parameter list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_parameter.htm) of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_general.htm) is obsolete. It has the same effect as the following:

CALL FUNCTION func ...
                   EXCEPTIONS exc1 = 1
                              exc2 = 1
                              ...

Each exception specified after EXCEPTIONS that is not assigned to an explicit return code using \= is assigned the value 1 implicitly.

Hints

-   This short form is extremely error-prone and should never be used.
-   Both the short form and the complete form can appear in a CALL FUNCTION statement.

Example

The syntax of the following function module call is correct but can have unexpected results.

CALL FUNCTION func EXCEPTIONS = 4.

The developer probably expected the following:

CALL FUNCTION func EXCEPTIONS OTHERS = 4.

The complete form of the statement is as follows, however:

CALL FUNCTION func EXCEPTIONS = = 1
                              4 = 1.

Since exceptions called \= are not possible, and exceptions called 4 are unlikely, this call will almost certainly not catch any exceptions, even though it is designed to catch every exception.