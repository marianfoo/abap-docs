  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_op.htm) →  [rel\_exp - Comparison Operators for All Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_compare_all.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Ternary Comparison Operator BETWEEN, ABENLOGEXP_BETWEEN, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Ternary Comparison Operator BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

A comparison expression with the comparison operator BETWEEN checks the assignment of an interval. The comparison expression checks whether the content of an operand operand is within a closed interval that is restricted by the operands operand1 and operand2. The ternary comparison expression is equivalent to the following combination of two binary comparison expressions:

... *\[*[NOT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_boole.htm)*\]* ( operand [\>=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_any_operand.htm) operand1 [AND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_boole.htm) operand [<=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_any_operand.htm) operand2 ) ...

All operands are [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and the usual [comparison rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules.htm) apply.

Example

Check whether today is a working day and assigning the result to a variable declared inline.

DATA(work\_day\_flag) = xsdbool( sy-fdayw BETWEEN 1 AND 5 ).