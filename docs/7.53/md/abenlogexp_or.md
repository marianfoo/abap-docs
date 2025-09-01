---
title: "Syntax"
description: |
  ... log_exp1 OR log_exp2 OR log_exp3 ... Effect If multiple logical expressions log_exp(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) are joined using OR, a new logical expression is created which is true if at least one of the logical expressions log_exp is true.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_or.htm"
abapFile: "abenlogexp_or.htm"
keywords: ["do", "if", "case", "abenlogexp"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_boole.htm) → 

log\_exp - OR

Syntax

... log\_exp1 OR log\_exp2 OR log\_exp3 ...

Effect

If multiple logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) are joined using OR, a new logical expression is created which is true if at least one of the logical expressions log\_exp is true. The join is false only if all logical expressions are also false.

Notes

-   The operator OR is a weaker join than NOT and AND is a stronger join than EQUIV.

-   The operator OR implements a logical OR join. Negating a join of this type using [NOT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_not.htm) is the same as using a NOR join (Not OR). It is true if all expressions are false.

Example

Check whether the local time is within one of two intervals. The language elements AND are not Boolean operators in this case, but belong to the relational operator [BETWEEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_between.htm).

IF sy-timlo BETWEEN '080000' AND '120000' OR
   sy-timlo BETWEEN '130000' AND '170000'.
  ...
ENDIF.