---
title: "Syntax"
description: |
  ... para IS NOT SUPPLIED ... Effect This predicate expression checks whether a formal parameter para of a procedure(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm 'Glossary Entry') is filled or requested. The expression is true if at the call an actual
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_supplied.htm"
abapFile: "abenlogexp_supplied.htm"
keywords: ["update", "do", "if", "case", "try", "method", "class", "abenlogexp", "supplied"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_expressions.htm) → 

rel\_exp - IS SUPPLIED

Syntax

... para IS *\[*NOT*\]* SUPPLIED ...

Effect

This predicate expression checks whether a formal parameter para of a [procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") is filled or requested. The expression is true if at the call an actual parameter was assigned to the formal parameter.

This relational expression can be used only in function modules and methods. For para, all optional formal parameters can be specified.

If the addition NOT is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

In function modules called using [Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination-.htm), the AS ABAP of the calling and called program must have at least Release 4.6.

Notes

-   The predicate expression IS SUPPLIED is always true, especially for the return value of a [functional method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry") [call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry").

-   The predicate expression IS SUPPLIED is not evaluated in function modules that are called as follows:

-   Using [CALL FUNCTION ... IN UPDATE TASK ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm)

-   Using [CALL FUNCTION ... STARTING NEW TASK ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_starting.htm)

-   from an external RFC interface.

In these cases, IS SUPPLIED always returns the value true.

-   The predicate expression IS SUPPLIED includes the obsolete expression [IS REQUESTED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_requested.htm).

Example

The logical expression of the first IF statement in method m1 is true if at the call, an actual parameter is assigned to formal parameter p1. A check for the initial value would not be sufficient in this context, because this is the value of the replacement parameter specified with DEFAULT. The logical expression of the second IF statement is true if at the call no actual parameter is assigned to formal parameter p2.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1 TYPE i DEFAULT 0
                     EXPORTING p2 TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    IF p1 IS SUPPLIED.
      ...
    ELSE.
      ...
    ENDIF.
    IF p2 IS NOT SUPPLIED.
      RETURN.
    ELSE.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.