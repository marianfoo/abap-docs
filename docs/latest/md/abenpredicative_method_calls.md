  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicative%20Method%20Call%2C%20ABENPREDICATIVE_METHOD_CALLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

rel\_exp - Predicative Method Call

Syntax

... meth( ... ) ...

Effect

A predicative method call is a relational expression whose only operand is a [functional method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") meth( ... ). The result of the relational expression is true if the result of the functional method call is not initial and false if the result of the functional method call is initial. The data type of the result of the functional method call, that is, the return value of the called function method, is arbitrary. A check is made for the type-dependent initial value.

A predicative method call, like any relational expression, can be a full [logical expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expression_glosry.htm "Glossary Entry") or part of one. This means it can be specified as a condition in [control statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_statement_glosry.htm "Glossary Entry") and other statements, as an argument in [Boolean functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_function_glosry.htm "Glossary Entry") or [conditional expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_glosry.htm "Glossary Entry"), or in combinations with [Boolean operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboolean_operator_glosry.htm "Glossary Entry").

Hints

-   A predicative method call is a short form of the predicate expression:
    
    [... meth( ... ) IS NOT INITIAL ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)
    
-   [Predicate methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_method_glosry.htm "Glossary Entry") whose return value has the type abap\_bool are particularly suitable for predicative method calls. Calling a predicate method in a predicative method call simulates the call of a method whose return value has the real Boolean data type that does not exist in ABAP.
-   As usual, the functional method call meth( ... ) can be specified as an [individual method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm) or as a [method chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_chain.htm). If the first method called is an instance method, the functional method call can be introduced as usual using the instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) or the casting operator [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm).
-   In addition to the dedicated [predicate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions.htm), predicative method calls are the only way of creating a relational expression using a single operand.
-   For other expressions or data objects, the full predicate expression [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm) or a comparison must be used to check the initial value but this is not recommended for many expressions anyway.

Example

Exit of the program if no SAP GUI is available. The called method check from the class CL\_DEMO\_SAP\_GUI is a [predicate method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_method_glosry.htm "Glossary Entry").

IF NOT cl\_demo\_sap\_gui=>check( ).
  LEAVE PROGRAM.
ENDIF.

Executable Example

[Predicative Method Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_abexa.htm)

Continue
![Example](exa.gif "Example") [rel\_exp - Predicative Method Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_abexa.htm)