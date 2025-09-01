  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) → 

rel\_exp - IS SUPPLIED

Syntax

... para IS *\[*NOT*\]* SUPPLIED ...

Effect

This predicate expression checks whether a formal parameter para of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is filled or requested. The expression is true if at the call an actual parameter was assigned to the formal parameter.

This relational expression can be used only in function modules and methods. For para, all optional formal parameters can be specified.

If the addition NOT is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

In function modules called using [Remote Function Call](javascript:call_link\('abapcall_function_destination-.htm'\)), the AS ABAP of the calling and called program must have at least Release 4.6.

Notes

-   The predicate expression IS SUPPLIED is always true, especially for the return value of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") [call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry").

-   The predicate expression IS SUPPLIED is not evaluated in function modules that are called as follows:

-   Using [CALL FUNCTION ... IN UPDATE TASK ...](javascript:call_link\('abapcall_function_update.htm'\))

-   Using [CALL FUNCTION ... STARTING NEW TASK ...](javascript:call_link\('abapcall_function_starting.htm'\))

-   from an external RFC interface.

In these cases, IS SUPPLIED always returns the value true.

-   The predicate expression IS SUPPLIED includes the obsolete expression [IS REQUESTED](javascript:call_link\('abenlogexp_requested.htm'\)).

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