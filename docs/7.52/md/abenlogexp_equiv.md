---
title: "Syntax"
description: |
  ... log_exp1 EQUIV log_exp2 ... Effect Joining two logical expressions log_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) with EQUIV produces a new logical expression which is true if both expressions are true or both expressions are false. If one of the expressi
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_equiv.htm"
abapFile: "abenlogexp_equiv.htm"
keywords: ["do", "if", "data", "abenlogexp", "equiv"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) → 

log\_exp - EQUIV

Syntax

... log\_exp1 EQUIV log\_exp2 ...

Effect

Joining two logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) with EQUIV produces a new logical expression which is true if both expressions are true or both expressions are false. If one of the expressions is true and the other one is false, the join is false.

Within a [parenthesis level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bracket.htm), only two logical expressions can be joined using EQUIV.

Notes

-   The operator EQUIV has a weaker join effect than NOT, AND, and OR.

-   The operator EQUIV implements an equivalence join. Negating a join like this using [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_not.htm) corresponds to an XOR join (eXclusive OR). It is true if one of the expressions is true and the other one is false.

Example

The condition in the IF statement is true if o1, o2, and o3, o4 are pair-wise either both equal or both unequal.

DATA: o1 TYPE i,
      o2 TYPE i,
      o3 TYPE i,
      o4 TYPE i.
...
IF o1 = o2 EQUIV o3 = o4.
  ...
ENDIF.