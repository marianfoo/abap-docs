  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_op.htm) →  [rel\_exp - Relational Operators for All Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_compare_all.htm) → 

rel\_exp - Ternary Relational Operator BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

A comparison expression with the relational operator BETWEEN checks the content of an interval. The relational expression checks whether the content of an operand operand is within a closed interval delimited by the operands operand1 and operand2. The ternary comparison expression is equivalent to the following join between two binary comparison expressions:

... *\[*[NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm)*\]* ( operand [\>=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm) operand1 [AND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) operand [<=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm) operand2 ) ...

All operands are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and the usual [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) apply.

Example

Checks whether today is a working day and assigns the result to a variable declared inline.

DATA(work\_day\_flag) = xsdbool( sy-fdayw BETWEEN 1 AND 5 ).