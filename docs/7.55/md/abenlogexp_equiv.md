  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_boole.htm) → 

log\_exp - EQUIV

Syntax

... log\_exp1 EQUIV log\_exp2 ...

Effect

Joining two logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) with EQUIV creates a new logical expression that is true if both expressions are true or both expressions are false. If one of the expressions is true and the other one is false, the join is false.

Within a [parenthesis level](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bracket.htm), only two logical expressions can be joined using EQUIV.

Hints

-   The operator EQUIV is a weaker join than NOT, AND, and OR.

-   The operator EQUIV implements an equivalence join. Negating such a join using [NOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_not.htm) is the same as using an XOR join (eXclusive OR). It is true if one of the expressions is true and the other one is false.

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