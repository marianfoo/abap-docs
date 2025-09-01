  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [log\_exp - Boolean Operators and Parentheses](javascript:call_link\('abenlogexp_boole.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20log_exp%20-%20%28%20%29%2C%20ABENLOGEXP_BRACKET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

log\_exp - ( )

Syntax

... ( log\_exp ) ...

Effect

A complete logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be placed in parentheses in order to define the priority of processing. log\_exp can be a combination of multiple expressions using [AND](javascript:call_link\('abenlogexp_and.htm'\)), [OR](javascript:call_link\('abenlogexp_or.htm'\)), or [EQUIV](javascript:call_link\('abenlogexp_equiv.htm'\)) or a logical expression negated using [NOT](javascript:call_link\('abenlogexp_not.htm'\)). A logical expression in parentheses is itself a logical expression.

Hint

The smallest unit of a logical expression that can be placed in parentheses is a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry").

Example

A combination of the following logical expressions

NOT log\_exp1 OR log\_exp2 AND NOT log\_exp3 AND log\_exp4 EQUIV log\_exp5

can be parenthesized explicitly as follows to stress the [implicit parentheses](javascript:call_link\('abenlogexp_boole.htm'\)):

1.  Parentheses around the expressions with NOT
    
    ( NOT log\_exp1 ) OR
    log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 EQUIV log\_exp5
    

1.  Parentheses around the expressions with AND
    
    ( NOT log\_exp1 ) OR
    ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) EQUIV log\_exp5
    

1.  Parentheses around the expressions with OR
    
    ( ( NOT log\_exp1 ) OR
      ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) ) EQUIV log\_exp5
    

1.  Parentheses around the expressions with EQUIV
    
    ( ( ( NOT log\_exp1 ) OR
      ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) ) EQUIV log\_exp5 )
    

Changing the parentheses explicitly changes the meaning of the expression. For example, if explicit parentheses are set as follows in the expression above

( NOT log\_exp1 OR log\_exp2 ) AND
NOT ( log\_exp3 AND log\_exp4 EQUIV log\_exp5 )

the expression looks as follows after implicit parentheses are set:

( ( ( NOT log\_exp1 ) OR log\_exp2 ) AND
( NOT ( ( log\_exp3 AND log\_exp4 ) EQUIV log\_exp5 ) ) )