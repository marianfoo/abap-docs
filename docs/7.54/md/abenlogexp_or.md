  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

log\_exp - OR

Syntax

... log\_exp1 OR log\_exp2 OR log\_exp3 ...

Effect

If multiple logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) are joined using OR, a new logical expression is created which is true if at least one of the logical expressions log\_exp is true. The join is false only if all logical expressions are also false.

Notes

-   The operator OR is a weaker join than NOT and AND is a stronger join than EQUIV.

-   The operator OR implements a logical OR join. Negating a join of this type using [NOT](javascript:call_link\('abenlogexp_not.htm'\)) is the same as using a NOR join (Not OR). It is true if all expressions are false.

Example

Check whether the local time is within one of two intervals. The language elements AND are not Boolean operators in this case, but belong to the relational operator [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)).

IF sy-timlo BETWEEN '080000' AND '120000' OR
   sy-timlo BETWEEN '130000' AND '170000'.
  ...
ENDIF.