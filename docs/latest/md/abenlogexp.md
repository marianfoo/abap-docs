---
title: "Syntax"
description: |
  ...   rel_exp  NOT log_exp ANDOREQUIV log_exp ... Effect A logical expression formulates a condition for operands. The result of a logical expression log_exp is a truth value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm 'Gl
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm"
abapFile: "abenlogexp.htm"
keywords: ["do", "if", "case", "try", "method", "data", "internal-table", "abenlogexp"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Logical%20Expressions%20%28log_exp%29%2C%20ABENLOGEXP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Logical Expressions (log\_exp)

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm)

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* log\_exp *\[*AND*|*OR*|*EQUIV log\_exp*\]* ...

Effect

A logical expression formulates a condition for operands. The result of a logical expression log\_exp is a [truth value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm "Glossary Entry"), which means it can be true or false.

A logical expression is either a single [relational expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry") rel\_exp, or an expression combined from one or more logical expressions with the [Boolean operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboolean_operator_glosry.htm "Glossary Entry") [NOT, AND, OR, EQUIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm) where [parentheses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bracket.htm) are possible. An atomic component of a compound logical expression is always one of the following relational expressions:

-   [Comparisons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_glosry.htm "Glossary Entry")
    -   [Comparison expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm)
-   [Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_glosry.htm "Glossary Entry")
    -   [Predicate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expressions.htm)
    -   [Predicate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions.htm)
    -   [Predicative method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_calls.htm)

Logical expressions can be used as follows:

-   To formulate conditions in [control statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_statement_glosry.htm "Glossary Entry") and other statements used to control the program flow.
-   in [conditional expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_glosry.htm "Glossary Entry")
-   As an argument of a [Boolean function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_function_glosry.htm "Glossary Entry") to represent a truth value in a character-like or byte-like data object.
-   In WHERE conditions of [processing statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) for [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry").

Hints

-   The operand positions operand of most relational expressions are [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, depending on the expression, [data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_object_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), [functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), [calculation expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry") can be specified.
-   If [functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified as operands of a relational expression in a logical expression, they are executed from left to right and from inside to outside before the relational expression is evaluated. In the case of [combination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm) of relational expressions, this applies to each individual relational expression and not to the entire logical expression.
-   Since ABAP does not recognize Boolean data objects for the truth values true or false, the result of a logical expression cannot currently be directly assigned to a data object, as is possible for [calculation expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry"). Instead, the return value of a [Boolean function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_function_glosry.htm "Glossary Entry") can be used.
-   Logical expressions cannot be mixed with [calculation expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry"). However, a logical expression can be listed as an argument of a [Boolean function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_function_glosry.htm "Glossary Entry") in a suitable calculation expression.
-   The program DEMO\_EXPRESSIONS also shows examples of how to use logical expressions.

Example

Logical expression that is composed of a predicate expression, a comparison expression, and a predicate function using the Boolean operator AND, in a control statement.

IF p1 IS SUPPLIED    AND
   p1 <= upper\_limit AND
   matches( val = p2 pcre = regular\_expression ).
  ...
ENDIF.

Continue
[Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm)
[rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm)
[log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm)