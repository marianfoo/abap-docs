---
title: "Syntax"
description: |
  ... log_exp1 OR log_exp2 OR log_exp3 ... Effect If multiple logical expressions log_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) are combined using OR, a new logical expression is created that is true if at least one of the logical expressions log_exp is true
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_or.htm"
abapFile: "abenlogexp_or.htm"
keywords: ["do", "if", "case", "abenlogexp"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_boole.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: log_exp - OR, ABENLOGEXP_OR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

log\_exp - OR

Syntax

... log\_exp1 OR log\_exp2 OR log\_exp3 ...

Effect

If multiple logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) are combined using OR, a new logical expression is created that is true if at least one of the logical expressions log\_exp is true. The combination is false only if all logical expressions of the combination are false.

Hints

-   The operator OR binds weaker than NOT or AND and binds stronger than EQUIV.
-   The operator OR implements an OR operation. Negating such an operation using [NOT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_not.htm) is the same as using a NOR operation. It is true if all expressions are false.

Example

Check whether the local time is within one of two intervals. The language elements AND are not Boolean operators in this case but belong to the comparison operator [BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_between.htm).

IF sy-timlo BETWEEN '080000' AND '120000' OR
   sy-timlo BETWEEN '130000' AND '170000'.
  ...
ENDIF.