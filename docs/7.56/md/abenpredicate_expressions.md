  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) → 

rel\_exp - Predicate Expressions

Syntax

...   *{*operand  [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))*}*
    *|* *{*ref      [IS *\[*NOT*\]* BOUND](javascript:call_link\('abenlogexp_bound.htm'\))*}*
    *|* *{*oref     [IS *\[*NOT*\]* INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\))*}*
    *|* *{*<fs>     [IS *\[*NOT*\]* ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\))*}*
    *|* *{*para     [IS *\[*NOT*\]* SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\))*}* ...

Effect

A predicate expression uses the [predicate operator](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") IS to determine a [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry") from the state of an operand.

Hints

-   Apart from INSTANCE OF, no operands of the possible predicate expressions are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). No predicate expression can be applied to a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry").
-   The predicate expression [IS *\[*NOT*\]* REQUESTED](javascript:call_link\('abenlogexp_requested.htm'\)) is obsolete and was replaced by [IS *\[*NOT*\]* SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\)).

Continue
[rel\_exp - IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))
[rel\_exp - IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\))
[rel\_exp - IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\))
[rel\_exp - IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\))
[rel\_exp - IS SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\))