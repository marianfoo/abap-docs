  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

FOR, Iteration Expressions

Syntax

... [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))*|* [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\))*|* [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) type( ... FOR [... UNTIL*|*WHILE ...](javascript:call_link\('abenfor_conditional.htm'\))*|* [... IN ...](javascript:call_link\('abenfor_itab.htm'\)) ... ) ...

Effect

The language element FOR introduces an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") as a subexpression in [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) and in the variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables.

There are two main variants of iteration expressions:

-   Iteration expressions with [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) for conditional iterations. These expressions are used to iteratively create the results of any data types using REDUCE or to create lines of internal tables using NEW or VALUE. The iteration steps can be defined as required.

-   Iteration expressions with [IN](javascript:call_link\('abenfor_itab.htm'\)) for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry"). These expressions are used for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") using REDUCE or [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") using NEW or VALUE. The iteration steps here evaluate an existing internal table.

Hints

-   Any FOR variants can be used in any way in a constructor expression and produce nested iterations.

-   The reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) must contain at least one iteration expression. The variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables can contain iteration expressions.

-   The conditional iterations using [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) provide an expression-oriented alternative to the loop statements [DO](javascript:call_link\('abapdo.htm'\)) and [WHILE](javascript:call_link\('abapwhile.htm'\)). The same applies to the table iterations using [IN](javascript:call_link\('abenfor_itab.htm'\)) and the statement [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)). The direct use of operand positions on the expression-oriented variants helps avoiding helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

Continue
[FOR, Conditional Iteration](javascript:call_link\('abenfor_conditional.htm'\))
[Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\))