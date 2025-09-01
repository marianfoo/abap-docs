---
title: "Syntax"
description: |
  ... log_exp1 EQUIV log_exp2 ... Effect Combining two logical expressions log_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) with EQUIV creates a new logical expression that is true if both expressions are true or both expressions are false. If one of the exp
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_equiv.htm"
abapFile: "abenlogexp_equiv.htm"
keywords: ["do", "if", "data", "abenlogexp", "equiv"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20log_exp%20-%20EQUIV%2C%20ABENLOGEXP_EQUIV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

log\_exp - EQUIV

Syntax

... log\_exp1 EQUIV log\_exp2 ...

Effect

Combining two logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) with EQUIV creates a new logical expression that is true if both expressions are true or both expressions are false. If one of the expressions is true and the other one is false, the combined expression is false.

Within a [parenthesis level](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bracket.htm), only two logical expressions can be combined using EQUIV.

Hints

-   The operator EQUIV binds weaker than NOT, AND, and OR.
-   The operator EQUIV implements an equivalence operation. Negating such an operation using [NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_not.htm) is the same as using an XOR operation (eXclusive OR). It is true if one of the expressions is true and the other one is false.

Example

The condition in the IF statement is true if o1, o2, and o3, o4 are either both equal or both unequal.

DATA: o1 TYPE i,
      o2 TYPE i,
      o3 TYPE i,
      o4 TYPE i.
...
IF o1 = o2 EQUIV o3 = o4.
  ...
ENDIF.