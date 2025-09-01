  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) → 

log\_exp - Logical Expressions

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlog_exp_shortref.htm)

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* log\_exp *\[*AND*|*OR*|*EQUIV log\_exp*\]* ...

Effect

A logical expression formulates a condition for operands. The result of a logical expression log\_exp is a [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry") and can therefore be true or false.

A logical expression is either a single [relational expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry") rel\_exp or an expression constructed from the [Boolean operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboolean_operator_glosry.htm "Glossary Entry") [NOT, AND, OR, EQUIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) and one or more logical expressions. [Parentheses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bracket.htm) are possible here. An atomic part of a composite logical expression is always one of the following relational expressions:

-   [Comparisons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_glosry.htm "Glossary Entry")

-   [Comparison expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm)

-   [Predicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_glosry.htm "Glossary Entry")

-   [Predicate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expressions.htm)

-   [Predicate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions.htm)

-   [Predicative method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_calls.htm)

Logical expressions can be used as follows:

-   To formulate conditions in [control statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_statement_glosry.htm "Glossary Entry") and other statements used to control the program flow.

-   in [conditional expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_glosry.htm "Glossary Entry")

-   As an argument of a [Boolean function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_function_glosry.htm "Glossary Entry") for representing a truth value in a character-like or byte-like data object.

-   In WHERE conditions of [processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) for [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_glosry.htm "Glossary Entry").
    

Notes

-   The operand positions operand of most relational expressions are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, depending on the expression, [data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry"), [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") can be specified.

-   If, in a logical expression, [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified as operands of a relational expression, they are executed from left to right and from inside to outside before the relational expression is evaluated. In the case of [joined](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) relational expressions, this is true for each individual relational expression and not for the overall logical expression.

-   Since ABAP does not recognize any Boolean data objects for the truth values true and false, the result of a logical expression cannot currently be directly assigned to a data object as is the case for [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry"). Instead, the return value of a [Boolean function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_function_glosry.htm "Glossary Entry") can be used.

-   Logical expressions cannot be mixed with [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry"). However, a logical expression can be executed as an argument of a [Boolean function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_function_glosry.htm "Glossary Entry") in a suitable calculation expression.

-   The program DEMO\_EXPRESSIONS also shows examples of the use of logical expressions, among other things.

Example

Logical expression created from a predicate expression, a comparison expression, and a predicate function using the Boolean operator AND, in a control statement.

IF p1 IS SUPPLIED    AND
   p1 <= upper\_limit AND
   matches( val = p2 regex = regular\_expression ).
  ...
ENDIF.

Continue
[rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm)
[rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate.htm)
[log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm)