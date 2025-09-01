  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Comparison Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Ternary%20Comparison%20Operator%20BETWEEN%2C%20ABENLOGEXP_BETWEEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

rel\_exp - Ternary Comparison Operator BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

A comparison expression with the comparison operator BETWEEN checks the assignment of an interval. The comparison expression checks whether the content of an operand operand is within a closed interval that is restricted by the operands operand1 and operand2. The ternary comparison expression is equivalent to the following combination of two binary comparison expressions:

... *\[*[NOT](javascript:call_link\('abenlogexp_boole.htm'\))*\]* ( operand [\>=](javascript:call_link\('abenlogexp_any_operand.htm'\)) operand1 [AND](javascript:call_link\('abenlogexp_boole.htm'\)) operand [<=](javascript:call_link\('abenlogexp_any_operand.htm'\)) operand2 ) ...

All operands are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and the usual [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply.

Example

Check whether today is a working day and assigning the result to a variable declared inline.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
FINAL(day\_of\_week) = ( 5 + date  MOD 7 ) MOD 7 + 1.
DATA(work\_day\_flag) = xsdbool( day\_of\_week BETWEEN 1 AND 5 ).