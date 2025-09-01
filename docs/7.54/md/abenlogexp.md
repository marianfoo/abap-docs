  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) → 

log\_exp - Logical Expressions

[Quick Reference](javascript:call_link\('abenlog_exp_shortref.htm'\))

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* log\_exp *\[*AND*|*OR*|*EQUIV log\_exp*\]* ...

Effect

A logical expression formulates a condition for operands. The result of a logical expression log\_exp is a [truth value](javascript:call_link\('abenlogical_value_glosry.htm'\) "Glossary Entry") and can therefore be true or false.

A logical expression is either a single [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") rel\_exp or an expression constructed from the [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry") [NOT, AND, OR, EQUIV](javascript:call_link\('abenlogexp_boole.htm'\)) and one or more logical expressions. [Parentheses](javascript:call_link\('abenlogexp_bracket.htm'\)) are possible here. An atomic part of a composite logical expression is always one of the following relational expressions:

-   [Comparisons](javascript:call_link\('abencomparison_glosry.htm'\) "Glossary Entry")

-   [Comparison expressions](javascript:call_link\('abenlogexp_comp.htm'\))

-   [Predicates](javascript:call_link\('abenpredicate_glosry.htm'\) "Glossary Entry")

-   [Predicate expressions](javascript:call_link\('abenpredicate_expressions.htm'\))

-   [Predicate functions](javascript:call_link\('abenpredicate_functions.htm'\))

-   [Predicative method calls](javascript:call_link\('abenpredicative_method_calls.htm'\))

Logical expressions can be used as follows:

-   To formulate conditions in [control statements](javascript:call_link\('abencontrol_statement_glosry.htm'\) "Glossary Entry") and other statements used to control the program flow.

-   in [conditional expressions](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry")

-   As an argument of a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") for representing a truth value in a character-like or byte-like data object.

-   In WHERE conditions of [processing statements](javascript:call_link\('abentable_processing_statements.htm'\)) for [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry").
    

Notes

-   The operand positions operand of most relational expressions are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"), which means that, depending on the expression, [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"), [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") can be specified.

-   If, in a logical expression, [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") are specified as operands of a relational expression, they are executed from left to right and from inside to outside before the relational expression is evaluated. In the case of [joined](javascript:call_link\('abenlogexp_boole.htm'\)) relational expressions, this is true for each individual relational expression and not for the overall logical expression.

-   Since ABAP does not recognize any Boolean data objects for the truth values true and false, the result of a logical expression cannot currently be directly assigned to a data object as is the case for [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"). Instead, the return value of a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") can be used.

-   Logical expressions cannot be mixed with [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"). However, a logical expression can be executed as an argument of a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") in a suitable calculation expression.

-   The program DEMO\_EXPRESSIONS also shows examples of the use of logical expressions, among other things.

Example

Logical expression created from a predicate expression, a comparison expression, and a predicate function using the Boolean operator AND, in a control statement.

IF p1 IS SUPPLIED    AND
   p1 <= upper\_limit AND
   matches( val = p2 regex = regular\_expression ).
  ...
ENDIF.

Continue
[rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\))
[rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\))
[log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\))