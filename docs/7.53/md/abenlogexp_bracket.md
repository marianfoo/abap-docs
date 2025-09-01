  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

log\_exp - ( )

Syntax

... ( log\_exp ) ...

Effect

A full logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be placed in parentheses. In the case of log\_exp, this can be a join between multiple expressions using [AND](javascript:call_link\('abenlogexp_and.htm'\)), [OR](javascript:call_link\('abenlogexp_or.htm'\)), or [EQUIV](javascript:call_link\('abenlogexp_equiv.htm'\)) or a logical expression negated using [NOT](javascript:call_link\('abenlogexp_not.htm'\)). A logical expression in parentheses is itself a logical expression.

Note

The smallest unit of a logical expression that can be placed in parentheses is a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry").

Example

A join of the following logical expressions

NOT log\_exp1 OR log\_exp2 AND NOT log\_exp3 AND log\_exp4 EQUIV log\_exp5

can be parenthesized explicitly as follows to stress the [implicit parentheses](javascript:call_link\('abenlogexp_boole.htm'\)):

1.  Parentheses around the expressions with NOT
    ( NOT log\_exp1 ) OR
    log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 EQUIV log\_exp5
    
2.  Parentheses around the expressions with AND
    ( NOT log\_exp1 ) OR
    ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) EQUIV log\_exp5
    
3.  Parentheses around the expressions with OR
    ( ( NOT log\_exp1 ) OR
    ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) ) EQUIV log\_exp5
    
4.  Parentheses around the expressions with EQUIV
    ( ( ( NOT log\_exp1 ) OR
    ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) ) EQUIV log\_exp5 )

Changing the parentheses explicitly changes the meaning of the expression. For example, if explicit parentheses are set as follows in the expression above

( NOT log\_exp1 OR log\_exp2 ) AND
NOT ( log\_exp3 AND log\_exp4 EQUIV log\_exp5 )

the following result is produced after implicit parentheses are set:

( ( ( NOT log\_exp1 ) OR log\_exp2 ) AND
( NOT ( ( log\_exp3 AND log\_exp4 ) EQUIV log\_exp5 ) ) )