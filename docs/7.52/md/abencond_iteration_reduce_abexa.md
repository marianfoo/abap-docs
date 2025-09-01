---
title: "Creating Values with FOR and REDUCE"
description: |
  The example demonstrates conditional iterations(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) with the operator REDUCE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm). Source Code REPORT demo_reduce_cond_i
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencond_iteration_reduce_abexa.htm"
abapFile: "abencond_iteration_reduce_abexa.htm"
keywords: ["select", "do", "while", "if", "case", "method", "class", "data", "abencond", "iteration", "reduce", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expressions.htm) →  [FOR - Iteration Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expressions_abexas.htm) → 

Creating Values with FOR and REDUCE

The example demonstrates [conditional iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) with the operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm).

Source Code

REPORT demo\_reduce\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'Summation'
      )->write( REDUCE i( INIT sum = 0
                          FOR n = 1 UNTIL n > 10
                          NEXT sum = sum + n )
      )->next\_section( 'Concatenation without THEN'
      )->write( REDUCE string( INIT text = \`Count up:\`
                               FOR n = 1 UNTIL n > 10
                               NEXT text = text && | { n }| )
      )->next\_section( 'Concatenation with THEN'
      )->write( REDUCE string( INIT text = \`Count down:\`
                               FOR n = 10 THEN n - 1 WHILE n > 0
                               NEXT text = text && | { n }| )
      )->next\_section( 'Non arithmetic expression'
      )->write( REDUCE string( INIT text = \`\`
                               FOR t = \`x\` THEN t && \`y\`
                                           UNTIL strlen( t ) > 10
                               NEXT text = text && |{ t } | )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates the following simple iterations, which can be used to construct elementary data objects in a constructor expression using the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm) and display them directly:

-   The first expression constructs a value of the type i for which the total of the iteration variable n is calculated. n is numeric, which means that THEN does not need to be specified. Each iteration step raises the value of n by 1.

-   The second expression uses the same iteration as the first, but constructs a text string to which each iteration step appends the character representation of n.

-   Like the second expression, the third expression constructs a text string, but uses the addition THEN explicitly to decrement the iteration variable instead of incrementing it.

-   Finally, the fourth expression demonstrates that the iteration variable does not have to be numeric. In this case, THEN must be specified explicitly with a suitable expression. Here, a text string is made longer until it has reached a specific size.