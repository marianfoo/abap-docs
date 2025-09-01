  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Relational Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) → 

rel\_exp - Ternary Relational Operator BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

A comparison expression with the relational operator BETWEEN checks the content of an interval. The relational expression checks whether the content of an operand operand is within a closed interval delimited by the operands operand1 and operand2. The ternary comparison expression is equivalent to the following join between two binary comparison expressions:

... *\[*[NOT](javascript:call_link\('abenlogexp_boole.htm'\))*\]* ( operand [\>=](javascript:call_link\('abenlogexp_any_operand.htm'\)) operand1 [AND](javascript:call_link\('abenlogexp_boole.htm'\)) operand [<=](javascript:call_link\('abenlogexp_any_operand.htm'\)) operand2 ) ...

All operands are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and the usual [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply.

Example

Checks whether today is a working day and assigns the result to a variable declared inline.

DATA(work\_day\_flag) = xsdbool( sy-fdayw BETWEEN 1 AND 5 ).