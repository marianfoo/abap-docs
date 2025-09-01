  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR, Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Values%20with%20FOR%20and%20REDUCE%2C%20ABENCOND_ITERATION_REDUCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Creating Values with FOR and REDUCE

This example demonstrates [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) with the operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_cond\_iteration DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_cond\_iteration IMPLEMENTATION.
  METHOD main.
    out->next\_section( 'Summation'
      )->write( REDUCE i( INIT sum = 0
                          FOR n = 1 UNTIL n > 10
                          NEXT sum = sum + n )
      )->next\_section( 'Concatenation without THEN'
      )->write( REDUCE string( INIT text = \`Count up:\`
                               FOR n = 1 UNTIL n > 10
                               NEXT text &&= | { n }| )
      )->next\_section( 'Concatenation with THEN'
      )->write( REDUCE string( INIT text = \`Count down:\`
                               FOR n = 10 THEN n - 1 WHILE n > 0
                               NEXT text &&= | { n }| )
      )->next\_section( 'Non arithmetic expression'
      )->write( REDUCE string( INIT text = \`\`
                               FOR t = \`x\` THEN t && \`y\`
                                           UNTIL strlen( t ) > 10
                               NEXT text &&= |{ t } | ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the following simple iterations, which can be used to construct elementary data objects and directly display them in a constructor expression using the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)):

-   The first expression constructs a value of the type i for which the total of the iteration variable n is calculated. n is numeric, which means that THEN does not have to be specified. Each iteration step increases the value of n by 1.
-   The second expression uses the same iteration as the first, but constructs a text string to which each iteration step appends the character representation of n.
-   Like the second expression, the third expression constructs a text string, but uses the addition THEN explicitly to decrement the iteration variable instead of incrementing it.
-   Finally, the fourth expression shows that the iteration variable does not have to be numeric. In this case, THEN must be specified explicitly with a suitable expression. Here, a text string is made longer until it has reached a specific size.