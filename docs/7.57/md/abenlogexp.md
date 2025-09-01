  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Logical Expressions \(log_exp\), ABENLOGEXP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Logical Expressions (log\_exp)

[Short Reference](javascript:call_link\('abenlog_exp_shortref.htm'\))

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* log\_exp *\[*AND*|*OR*|*EQUIV log\_exp*\]* ...

Effect

A logical expression formulates a condition for operands. The result of a logical expression log\_exp is a [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry"), which means it can be true or false.

A logical expression is either a single [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") rel\_exp, or an expression combined from one or more logical expressions with the [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry") [NOT, AND, OR, EQUIV](javascript:call_link\('abenlogexp_boole.htm'\)) where [parentheses](javascript:call_link\('abenlogexp_bracket.htm'\)) are possible. An atomic component of a compound logical expression is always one of the following relational expressions:

-   [Comparisons](javascript:call_link\('abencomparison_glosry.htm'\) "Glossary Entry")
    -   [Comparison expressions](javascript:call_link\('abenlogexp_comp.htm'\))
-   [Predicates](javascript:call_link\('abenpredicate_glosry.htm'\) "Glossary Entry")
    -   [Predicate expressions](javascript:call_link\('abenpredicate_expressions.htm'\))
    -   [Predicate functions](javascript:call_link\('abenpredicate_functions.htm'\))
    -   [Predicative method calls](javascript:call_link\('abenpredicative_method_calls.htm'\))

Logical expressions can be used as follows:

-   To formulate conditions in [control statements](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") and other statements used to control the program flow.
-   in [conditional expressions](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry")
-   As an argument of a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") to represent a truth value in a character-like or byte-like data object.
-   In WHERE conditions of [processing statements](javascript:call_link\('abentable_processing_statements.htm'\)) for [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry").

Hints

-   The operand positions operand of most relational expressions are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"), which means that, depending on the expression, [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"), [built-in functions](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry"), [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") can be specified.
-   If [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") are specified as operands of a relational expression in a logical expression, they are executed from left to right and from inside to outside before the relational expression is evaluated. In the case of [combination](javascript:call_link\('abenlogexp_boole.htm'\)) of relational expressions, this applies to each individual relational expression and not to the entire logical expression.
-   Since ABAP does not recognize Boolean data objects for the truth values true or false, the result of a logical expression cannot currently be directly assigned to a data object, as is possible for [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"). Instead, the return value of a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") can be used.
-   Logical expressions cannot be mixed with [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"). However, a logical expression can be listed as an argument of a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") in a suitable calculation expression.
-   The program DEMO\_EXPRESSIONS also shows examples of how to use logical expressions, among other things.

Example

Logical expression that is composed of a predicate expression, a comparison expression, and a predicate function using the Boolean operator AND, in a control statement.

IF p1 IS SUPPLIED    AND
   p1 <= upper\_limit AND
   matches( val = p2 pcre = regular\_expression ).
  ...
ENDIF.

Continue
[Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\))
[rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\))
[log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\))