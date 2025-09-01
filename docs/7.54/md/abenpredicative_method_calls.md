  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) → 

rel\_exp - Predicative Method Call

Syntax

... meth( ... ) ...

Effect

A predicative method call is a relational expression whose only operand is a [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") meth( ...). The result of the relational expression is true if the result of the functional method call is not initial and false if the result of the functional method call is initial. The result of the functional method call (the return value of the called function method) can have any data type. A check is made on the type-dependent initial value.

A predicative method call, like any relational expression, can be a full [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") or part of a logical expression. This means it can be specified as a condition in [control statements](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") and other statements, as an argument in [Boolean functions](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") or [conditional expressions](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry"), or in joins with [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry").

Notes

-   A predicative method call is a short form of the predicate expression:

[... meth( ... ) IS NOT INITIAL ...](javascript:call_link\('abenlogexp_initial.htm'\))

-   [Predicate methods](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry") whose return value has the type abap\_bool are particularly well suited as predicative method calls. Calling a predicate method in a predicative method call simulates the call of a method whose return value has the real Boolean data type not present in ABAP.

-   As usual, the functional method call meth( ... ) can be specified as a [individual method](javascript:call_link\('abapcall_method_functional.htm'\)) or as a [method chaining](javascript:call_link\('abapcall_method_static_chain.htm'\)). If the first method called is an instance method, the functional method call can be introduced as usual using the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the casting operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)).

-   Alongside the dedicated [predicate functions](javascript:call_link\('abenpredicate_functions.htm'\)) and an [obsolete short form](javascript:call_link\('abenlogexp_in_short_form.htm'\)), predicative method calls are the only way of creating a relational expression using a single operand.

-   For other expressions or data objects, the full predicate expression [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)) or a comparison must be used to check the initial value and this is not normally recommended for many expressions.

Example

Exits the program if no SAP GUI is available. The called method check from the class CL\_DEMO\_SAP\_GUI is a [predicate method](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry").

IF NOT cl\_demo\_sap\_gui=>check( ).
  LEAVE PROGRAM.
ENDIF.

Executable Example

[Predicative Method Calls](javascript:call_link\('abenpredicative_method_call_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Predicative Method Calls](javascript:call_link\('abenpredicative_method_call_abexa.htm'\))