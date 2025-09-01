  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

CALL FUNCTION EXCEPTIONS - Short Form

Obsolete Syntax

CALL FUNCTION func ...
                   EXCEPTIONS exc1 exc2 ...

Effect

This short form for specifying non-class-based exceptions in the [parameter list](javascript:call_link\('abapcall_function_parameter.htm'\)) of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function_general.htm'\)) is obsolete. It has the same effect as the following:

CALL FUNCTION func ...
                   EXCEPTIONS exc1 = 1
                              exc2 = 1
                              ...

Each exception specified after EXCEPTIONS that is not assigned to an explicit return code using \= is given the value 1 implicitly.

Notes

-   This short form is extremely error-prone and should never be used.
    
-   Both the short form and the complete form can appear in a CALL FUNCTION statement.
    

Example

The syntax of the following function module call is correct, but can have unpredictable results.

CALL FUNCTION func EXCEPTIONS = 4.

The developer probably expected the following:

CALL FUNCTION func EXCEPTIONS OTHERS = 4.

The complete form of the statement is as follows, however:

CALL FUNCTION func EXCEPTIONS = = 1
                              4 = 1.

Since exceptions called "=" are not possible, and exceptions called "4" are unlikely, this call will almost certainly not catch any exceptions, even though it is designed to catch every exception.