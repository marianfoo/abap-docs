  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: log_exp - EQUIV, ABENLOGEXP_EQUIV, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

log\_exp - EQUIV

Syntax

... log\_exp1 EQUIV log\_exp2 ...

Effect

Combining two logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) with EQUIV creates a new logical expression that is true if both expressions are true or both expressions are false. If one of the expressions is true and the other one is false, the combined expression is false.

Within a [parenthesis level](javascript:call_link\('abenlogexp_bracket.htm'\)), only two logical expressions can be combined using EQUIV.

Hints

-   The operator EQUIV binds weaker than NOT, AND, and OR.
-   The operator EQUIV implements an equivalence operation. Negating such an operation using [NOT](javascript:call_link\('abenlogexp_not.htm'\)) is the same as using an XOR operation (eXclusive OR). It is true if one of the expressions is true and the other one is false.

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