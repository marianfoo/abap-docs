  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20log_exp%20-%20AND%2C%20ABENLOGEXP_AND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

log\_exp - AND

Syntax

... log\_exp1 AND log\_exp2 AND log\_exp3 ...

Effect

The combination of multiple logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) using AND creates a new logical expression that is true if all logical expressions log\_exp are true. If one of the logical expressions is false, the combined expression is also false.

Hints

-   The operator AND binds weaker than NOT and stronger than OR and EQUIV.
-   The operator AND implements an AND operation. Using [NOT](javascript:call_link\('abenlogexp_not.htm'\)) to negate such a operation is the same as using a NAND operation. It is true if at least one expression is false.
-   The Boolean operator AND should not be confused with the addition AND of the [comparison operator](javascript:call_link\('abencomp_operator_glosry.htm'\) "Glossary Entry") [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)).

Example

Check of an assignment to an interval, ignoring interval boundaries.

IF operand > limit1 AND operand < limit2.
  ...
ENDIF.