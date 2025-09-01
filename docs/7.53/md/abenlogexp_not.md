  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

log\_exp - NOT

Syntax

... NOT log\_exp ...

Effect

The negation of a logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) using NOT creates a new logical expression that is false if the logical expression log\_exp is true and vice versa.

Notes

-   The operator NOT is a stronger join than AND, OR, and EQUIV.

-   The Boolean operator NOT must not be confused with the addition NOT of the [relational operators](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)), [IN](javascript:call_link\('abenlogexp_select_option.htm'\)), and the [predicate operator](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") [IS](javascript:call_link\('abenpredicate_expressions.htm'\)). The following syntax is one possible example:

... NOT operand NOT IN seltab ...

The first NOT is a Boolean operator that negates a comparison expression. The second NOT is a part of the comparison expression with‎ the relational operator IN. This is made clear using parentheses around the comparison expression:

... NOT ( operand NOT IN seltab ) ...

Example

Exit the current processing block if sy-subrc does not have the value 0.

IF NOT sy-subrc = 0.
  RETURN.
ENDIF.