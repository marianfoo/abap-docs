  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) → 

rel\_exp - Comparison Expressions

Syntax

... *{* operand1   [*{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}*](javascript:call_link\('abenlogexp_any_operand.htm'\))
               *|* [*{*CO*|*CN*|*CA*|*NA*|*CS*|*NS*|*CP*|*NP*}*](javascript:call_link\('abenlogexp_strings.htm'\))
               *|* [*{*BYTE-CO*|*BYTE-CN*|*BYTE-CA*|*BYTE-NA*|*BYTE-CS*|*BYTE-NS*}*](javascript:call_link\('abenlogexp_bytes.htm'\))
               *|* [*{*O*|*Z*|*M*}*](javascript:call_link\('abenlogexp_bitmasks.htm'\)) operand2 *}*
  *|* *{* [operand *\[*NOT*\]* BETWEEN operand1 AND operand2](javascript:call_link\('abenlogexp_between.htm'\)) *}*
  *|* *{* [operand *\[*NOT*\]* IN range\_tab](javascript:call_link\('abenlogexp_select_option.htm'\)) *}*  ...

Effect

[Comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") join two or more operands using a [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") to make a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") and produce a [truth value](javascript:call_link\('abenlogical_value_glosry.htm'\) "Glossary Entry") as the result of the comparison.

-   The operands are compared using one of the [relational operators](javascript:call_link\('abenlogexp_op.htm'\)) shown here.

-   The comparisons follow [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)).

operand1, operand2, and operand are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"), which means that the following can be specified:

-   [Data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry")

-   [Built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry")

-   [Functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry")

-   [Calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry")

-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry")

-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

When a built-in function, a functional method, or a constructor expression is specified, its return value or result is used as an operand. When a calculation expression is specified, its result is used. A single operand can be compared with all single operands listed in the [comparison rules for single operands](javascript:call_link\('abenlogexp_rules_operands.htm'\)). A calculation expression can be compared with all single operands or comparisons listed in the [comparison rules for calculation expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\)).

Example

Typical use of a logical expression, in this case a comparison of a built-in function with a literal, in a IF statement.

DATA flag TYPE c LENGTH 1.
...
IF to\_upper( flag ) = 'X'.
  ...
ENDIF.

Continue
[rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\))
[rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\))