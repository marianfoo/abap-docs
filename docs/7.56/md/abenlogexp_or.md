  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

log\_exp - OR

Syntax

... log\_exp1 OR log\_exp2 OR log\_exp3 ...

Effect

If multiple logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) are combined using OR, a new logical expression is created that is true if at least one of the logical expressions log\_exp is true. The combination is false only if all logical expressions of the combination are false.

Hints

-   The operator OR binds weaker than NOT orAND and binds stronger than EQUIV.
-   The operator OR implements an OR operation. Negating such an operation using [NOT](javascript:call_link\('abenlogexp_not.htm'\)) is the same as using a NOR operation. It is true if all expressions are false.

Example

Check whether the local time is within one of two intervals. The language elements AND are not Boolean operators in this case but belong to the comparison operator [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)).

IF sy-timlo BETWEEN '080000' AND '120000' OR
   sy-timlo BETWEEN '130000' AND '170000'.
  ...
ENDIF.