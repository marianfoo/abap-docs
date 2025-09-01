  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

log\_exp - NOT

Syntax

... NOT log\_exp ...

Effect

The negation of a logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) using NOT creates a new logical expression that is false if the logical expression log\_exp is true and vice versa.

Hints

-   The operator NOT binds stronger than AND, OR, and EQUIV.
-   The Boolean operator NOT must not be confused with the addition NOT of the [comparison operators](javascript:call_link\('abencomp_operator_glosry.htm'\) "Glossary Entry") [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)), [IN](javascript:call_link\('abenlogexp_select_option.htm'\)), and the [predicate operator](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") [IS](javascript:call_link\('abenpredicate_expressions.htm'\)). The following syntax is possible:
    
    ... NOT operand NOT IN range\_tab ...
    
    The first NOT is a Boolean operator that negates a comparison expression. The second NOT is a part of the comparison expression with‎ the comparison operator IN. This is illustrated by parentheses around the comparison expression:
    
    ... NOT ( operand NOT IN range\_tab ) ...
    

Example

Exit the current processing block if sy-subrc does not have the value 0.

IF NOT sy-subrc = 0.
  RETURN.
ENDIF.