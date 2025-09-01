---
title: "CALL FUNCTION EXCEPTIONS - Short Form"
description: |
  Obsolete Syntax CALL FUNCTION func ... EXCEPTIONS exc1 exc2 ... Effect This short form for specifying non-class-based exceptions in the parameter list(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) of the statement CALL FUNCTION(https://help.sap.com/d
version: "7.54"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_exc_short_form.htm"
abapFile: "abapcall_function_exc_short_form.htm"
keywords: ["do", "if", "catch", "class", "abapcall", "function", "exc", "short", "form"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_call_obsolete.htm) → 

CALL FUNCTION EXCEPTIONS - Short Form

Obsolete Syntax

CALL FUNCTION func ...
                   EXCEPTIONS exc1 exc2 ...

Effect

This short form for specifying non-class-based exceptions in the [parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_general.htm) is obsolete. It has the same effect as the following:

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