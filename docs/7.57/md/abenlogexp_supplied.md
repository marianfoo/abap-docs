---
title: "Syntax"
description: |
  ... para IS NOT SUPPLIED ... Effect This predicate expression checks whether a formal parameter para of a procedure(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm 'Glossary Entry') is filled or requested. The expression is true if at the call an actual
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm"
abapFile: "abenlogexp_supplied.htm"
keywords: ["update", "do", "if", "case", "try", "method", "class", "abenlogexp", "supplied"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - IS SUPPLIED, ABENLOGEXP_SUPPLIED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

rel\_exp - IS SUPPLIED

Syntax

... para IS *\[*NOT*\]* SUPPLIED ...

Effect

This predicate expression checks whether a formal parameter para of a [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") is filled or requested. The expression is true if at the call an actual parameter was assigned to the formal parameter.

This relational expression is only possible in function modules and methods. For para, all optional formal parameters can be specified.

With the addition NOT, the expression is true if no actual parameter was assigned to the formal parameter in the call.

Some specific rules must be observed in the following procedures:

-   [Remote-enabled function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry")
    -   In a [remote function call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination-.htm) between two AS ABAP, both must have at least Release 4.6 so that IS SUPPLIED can be used in the called function module.
    -   In a function module called using [CALL FUNCTION ... STARTING NEW TASK ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm), IS SUPPLIED is not evaluated.
    -   In calls from an external RFC interface, IS SUPPLIED is evaluated for all currently supported [RFC Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface.htm). IS SUPPLIED is not evaluated only when an older RFC Library such as librfc32.dll is used instead of RFC Software Development Kit for C and C++.
-   [Update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry")
    
    In an update function module called using [CALL FUNCTION ... IN UPDATE TASK ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_update.htm), IS SUPPLIED is not evaluated.
    

In cases where IS SUPPLIED is not evaluated, the predicate expression returns the value true.

Hints

-   In a [functionally called](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), the predicate expression IS SUPPLIED is true for its return value. In this case, a temporary actual parameter is always bound to the return value, which is used as the operand of the current operand position.
-   The predicate expression IS SUPPLIED includes the obsolete expression [IS REQUESTED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_requested.htm).

Example

The logical expression of the first IF statement in method m1 is true if an actual parameter is assigned to formal parameter p1 at the call. The check for the initial value would not be sufficient here, because this is the value of the replacement parameter specified with DEFAULT. The logical expression of the second IF statement is true if at the call no actual parameter is assigned to formal parameter p2.

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