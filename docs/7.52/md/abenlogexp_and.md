  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) → 

log\_exp - AND

Syntax

... log\_exp1 AND log\_exp2 AND log\_exp3 ...

Effect

The joining of multiple logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) using AND creates a new logical expression that is true when all logical expressions log\_exp are true. If one of the logical expressions is false, the join is also false.

Notes

-   The operator AND is a weaker join than NOT and stronger than OR and EQUIV.

-   The operator AND implements an AND join. Using [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_not.htm) to negate a join like this is the same as using a NAND join (Not AND). It is true if at least one expression is false.

-   The Boolean operator AND should not be confused with the addition AND of the [relational operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_operator_glosry.htm "Glossary Entry") [BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_between.htm).

Example

Checks assignment to an interval, ignoring interval boundaries.

IF operand > limit1 AND operand < limit2 .
  ...
ENDIF.