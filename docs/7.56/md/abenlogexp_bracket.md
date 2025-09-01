---
title: "Syntax"
description: |
  ... ( log_exp ) ... Effect A complete logical expression log_exp(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) can be placed in parentheses in order to define the priority of processing. log_exp can be a combination of multiple expressions using AND(https://help.s
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bracket.htm"
abapFile: "abenlogexp_bracket.htm"
keywords: ["do", "if", "try", "abenlogexp", "bracket"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_boole.htm) → 

log\_exp - ( )

Syntax

... ( log\_exp ) ...

Effect

A complete logical expression [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) can be placed in parentheses in order to define the priority of processing. log\_exp can be a combination of multiple expressions using [AND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_and.htm), [OR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_or.htm), or [EQUIV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_equiv.htm) or a logical expression negated using [NOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_not.htm). A logical expression in parentheses is itself a logical expression.

Hint

The smallest unit of a logical expression that can be placed in parentheses is a [relational expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelational_expression_glosry.htm "Glossary Entry").

Example

A combination of the following logical expressions

NOT log\_exp1 OR log\_exp2 AND NOT log\_exp3 AND log\_exp4 EQUIV log\_exp5

can be parenthesized explicitly as follows to stress the [implicit parentheses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_boole.htm):

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