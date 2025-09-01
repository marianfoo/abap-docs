---
title: "Syntax"
description: |
  ...   rel_exp  NOT log_exp ANDOREQUIV log_exp ... Effect A logical expression formulates a condition for operands. The result of a logical expression log_exp is a truth value(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentruth_value_glosry.htm 'Glossar
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm"
abapFile: "abenlogexp.htm"
keywords: ["do", "if", "case", "try", "method", "data", "internal-table", "abenlogexp"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) → 

Logical Expressions (log\_exp)

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm)

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* log\_exp *\[*AND*|*OR*|*EQUIV log\_exp*\]* ...

Effect

A logical expression formulates a condition for operands. The result of a logical expression log\_exp is a [truth value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentruth_value_glosry.htm "Glossary Entry") , which means it can be true or false.

A logical expression is either a single [relational expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrelational_expression_glosry.htm "Glossary Entry") rel\_exp, or an expression composed of the [Boolean operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboolean_operator_glosry.htm "Glossary Entry") [NOT, AND, OR, EQUIV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_boole.htm) and one or more logical expressions, in which [parentheses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bracket.htm) are possible. An atomic component of a compound logical expression is always one of the following relational expressions:

-   [Comparisons](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_glosry.htm "Glossary Entry")

-   [Comparison expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_comp.htm)

-   [Predicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_glosry.htm "Glossary Entry")

-   [Predicate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_expressions.htm)

-   [Predicate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_functions.htm)

-   [Predicative method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicative_method_calls.htm)

Logical expressions can be used as follows:

-   To formulate conditions in [control statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontrol_statement_glosry.htm "Glossary Entry") and other statements used to control the program flow.

-   in [conditional expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_glosry.htm "Glossary Entry")

-   As an argument of a [Boolean function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_function_glosry.htm "Glossary Entry") to represent a truth value in a character-like or byte-like data object.

-   In WHERE conditions of [processing statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) for [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry").
    

Hints

-   The operand positions operand of most relational expressions are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, depending on the expression, [data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), [functional methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), [calculation expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry") can be specified.

-   If [functional methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified as operands of a relational expression in a logical expression, they are executed from left to right and from inside to outside before the relational expression is evaluated. In the case of [joined](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_boole.htm) relational expressions, this applies to each individual relational expression and not to the entire logical expression.

-   Since ABAP does not recognize Boolean data objects for the truth values true or false, the result of a logical expression cannot currently be directly assigned to a data object, as is possible for [calculation expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry"). Instead, the return value of a [Boolean function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_function_glosry.htm "Glossary Entry") can be used.

-   Logical expressions cannot be mixed with [calculation expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry"). However, a logical expression can be listed as an argument of a [Boolean function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_function_glosry.htm "Glossary Entry") in a suitable calculation expression.

-   The program DEMO\_EXPRESSIONS also shows examples of how to use logical expressions, among other things.

Example

Logical expression that is composed of a predicate expression, a comparison expression, and a predicate function using the Boolean operator AND, in a control statement.

IF p1 IS SUPPLIED    AND
   p1 <= upper\_limit AND
   matches( val = p2 pcre = regular\_expression ).
  ...
ENDIF.

Continue
[Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_comp.htm)
[rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate.htm)
[log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_boole.htm)