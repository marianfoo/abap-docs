---
title: "Syntax"
description: |
  ... log_exp1 AND log_exp2 AND log_exp3 ... Effect The joining of multiple logical expressions log_exp(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) using AND creates a new logical expression that is true when all logical expressions log_exp are true. If one of the
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_and.htm"
abapFile: "abenlogexp_and.htm"
keywords: ["do", "if", "try", "abenlogexp", "and"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_boole.htm) → 

log\_exp - AND

Syntax

... log\_exp1 AND log\_exp2 AND log\_exp3 ...

Effect

The joining of multiple logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) using AND creates a new logical expression that is true when all logical expressions log\_exp are true. If one of the logical expressions is false, the join is also false.

Notes

-   The operator AND is a weaker join than NOT and stronger than OR and EQUIV.

-   The operator AND implements an AND join. Using [NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_not.htm) to negate a join like this is the same as using a NAND join (Not AND). It is true if at least one expression is false.

-   The Boolean operator AND should not be confused with the addition AND of the [relational operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_operator_glosry.htm "Glossary Entry") [BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_between.htm).

Example

Checks assignment to an interval, ignoring interval boundaries.

IF operand > limit1 AND operand < limit2 .
  ...
ENDIF.