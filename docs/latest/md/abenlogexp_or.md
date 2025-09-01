  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20log_exp%20-%20OR%2C%20ABENLOGEXP_OR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

log\_exp - OR

Syntax

... log\_exp1 OR log\_exp2 OR log\_exp3 ...

Effect

If multiple logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) are combined using OR, a new logical expression is created that is true if at least one of the logical expressions log\_exp is true. The combination is false only if all logical expressions of the combination are false.

Hints

-   The operator OR binds weaker than NOT or AND and binds stronger than EQUIV.
-   The operator OR implements an OR operation. Negating such an operation using [NOT](javascript:call_link\('abenlogexp_not.htm'\)) is the same as using a NOR operation. It is true if all expressions are false.

Example

Check whether the local time is within one of two intervals. The language elements AND are not Boolean operators in this case but belong to the comparison operator [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)).

FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
IF time BETWEEN '080000' AND '120000' OR
   time BETWEEN '130000' AND '170000'.
  ...
ENDIF.