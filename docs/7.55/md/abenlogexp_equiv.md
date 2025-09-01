  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

log\_exp - EQUIV

Syntax

... log\_exp1 EQUIV log\_exp2 ...

Effect

Joining two logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) with EQUIV creates a new logical expression that is true if both expressions are true or both expressions are false. If one of the expressions is true and the other one is false, the join is false.

Within a [parenthesis level](javascript:call_link\('abenlogexp_bracket.htm'\)), only two logical expressions can be joined using EQUIV.

Hints

-   The operator EQUIV is a weaker join than NOT, AND, and OR.

-   The operator EQUIV implements an equivalence join. Negating such a join using [NOT](javascript:call_link\('abenlogexp_not.htm'\)) is the same as using an XOR join (eXclusive OR). It is true if one of the expressions is true and the other one is false.

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