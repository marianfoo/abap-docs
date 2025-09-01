  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%2C%20Iteration%20Expressions%2C%20ABENFOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR, Iteration Expressions

Syntax

... [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))*|* [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\))*|* [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) type( ... FOR [... UNTIL*|*WHILE ...](javascript:call_link\('abenfor_conditional.htm'\))
                                 *|* [... IN ...](javascript:call_link\('abenfor_itab.htm'\)) ...) ...

Effect

The language element FOR introduces an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") as a subexpression in [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) and in the variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables.

There are two main variants of iteration expressions:

-   Iteration expressions with [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) for conditional iterations. These expressions are used to iteratively create the results of any data types using REDUCE or to create lines of internal tables using NEW or VALUE. The iteration steps can be defined as required.
-   Iteration expressions with [IN](javascript:call_link\('abenfor_itab.htm'\)) for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry"). These expressions are used for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") using REDUCE or [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") using NEW or VALUE. The iteration steps here evaluate an existing internal table.

Hints

-   Any FOR variants can be used in any way in a constructor expression and produce nested iterations.
-   The reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) must contain at least one iteration expression. The variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables can contain iteration expressions.
-   The conditional iterations using [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) provide an expression-oriented alternative to the loop statements [DO](javascript:call_link\('abapdo.htm'\)) and [WHILE](javascript:call_link\('abapwhile.htm'\)). The same applies to the table iterations using [IN](javascript:call_link\('abenfor_itab.htm'\)) and the statement [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)). The direct use of operand positions on the expression-oriented variants helps to avoid helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

Continue
[FOR, Conditional Iteration](javascript:call_link\('abenfor_conditional.htm'\))
[Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\))