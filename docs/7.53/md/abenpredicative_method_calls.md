---
title: "Syntax"
description: |
  ... meth( ... ) ... Effect A predicative method call is a relational expression whose only operand is a functional method call(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm 'Glossary Entry') meth( ... ). The result of the relational expression is
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_calls.htm"
abapFile: "abenpredicative_method_calls.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenpredicative", "calls"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate.htm) → 

rel\_exp - Predicative Method Call

Syntax

... meth( ... ) ...

Effect

A predicative method call is a relational expression whose only operand is a [functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") meth( ... ). The result of the relational expression is true if the result of the functional method call is not initial and false if the result of the functional method call is initial. The result of the functional method call (the return value of the called function method) can have any data type. A check is made on the type-dependent initial value.

A predicative method call, like any relational expression, can be a full [logical expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expression_glosry.htm "Glossary Entry") or part of a logical expression. This means it can be specified as a condition in [control statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_statement_glosry.htm "Glossary Entry") and other statements, as an argument in [Boolean functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboole_function_glosry.htm "Glossary Entry") or [conditional expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_glosry.htm "Glossary Entry"), or in joins with [Boolean operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboolean_operator_glosry.htm "Glossary Entry").

Notes

-   A predicative method call is a short form of the predicate expression:

[... meth( ... ) IS NOT INITIAL ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_initial.htm)

-   [Predicate methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_method_glosry.htm "Glossary Entry") whose return value has the type abap\_bool are particularly well suited as predicative method calls. Calling a predicate method in a predicative method call simulates the call of a method whose return value has the real Boolean data type not present in ABAP.

-   As usual, the functional method call meth( ... ) can be specified as a [individual method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm) or as a [method chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_chain.htm). If the first method called is an instance method, the functional method call can be introduced as usual using the instance operator [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) or the casting operator [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm).

-   Alongside the dedicated [predicate functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_functions.htm) and an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_in_short_form.htm), predicative method calls are the only way of creating a relational expression using a single operand.

-   For other expressions or data objects, the full predicate expression [IS INITIAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_initial.htm) or a comparison must be used to check the initial value and this is not normally recommended for many expressions.

Example

Exits the program if no SAP GUI is available. The called method check from the class CL\_DEMO\_SAP\_GUI is a [predicate method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_method_glosry.htm "Glossary Entry").

IF NOT cl\_demo\_sap\_gui=>check( ).
  LEAVE PROGRAM.
ENDIF.

Executable Example

[Predicative Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_call_abexa.htm)

Continue
![Example](exa.gif "Example") [Predicative Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_call_abexa.htm)