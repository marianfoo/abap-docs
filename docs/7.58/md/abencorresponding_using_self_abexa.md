  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Component%20Operator%2C%20Reflexive%20Assignment%2C%20ABENCORRESPONDING_USING_SELF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Component Operator, Reflexive Assignment

This example demonstrates the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) with FROM USING for a single table.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_using\_self DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct,
        node   TYPE string,
        parent TYPE string,
        text   TYPE string,
      END OF struct.
    DATA
      itab TYPE HASHED TABLE OF struct
           WITH UNIQUE KEY node.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_using\_self IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`itab\`
      )->write( itab ).
    itab = CORRESPONDING #(
              itab FROM itab
                   USING node = parent ) ##operator.
    out->next\_section(
      \`itab = CORRESPONDING #( itab FROM itab USING node = parent )\`
      )->write( itab ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE #(
      ( node = \`0\` parent = \`-\`  text = \`node0\`  )
      ( node = \`1\` parent = \`0\`  text = \`node1\` )
      ( node = \`2\` parent = \`1\`  text = \`node2\` )
      ( node = \`3\` parent = \`1\`  text = \`node3\` )
      ( node = \`4\` parent = \`3\`  text = \`node4\` )
      ( node = \`5\` parent = \`3\`  text = \`node5\` )
      ( node = \`6\` parent = \`1\`  text = \`node6\` ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Using the component operator CORRESPONDING in the [variant with lookup table](javascript:call_link\('abencorresponding_constr_using.htm'\)), the example relates an internal table itab in a component expression to itself and assigns the result to the same table. This requires a temporary copy of the table to be created, which raises a warning from the syntax check. This warning can be hidden using the pragma ##operator.

The table contains a hierarchical tree structure in which nodes of the column node are assigned to a parent node using the column parent. This relationship is specified after USING, which finds the parent node for every line. The assignment of the identically named component text ensures that every line in this column is given the content of its direct parent node.

For further examples of reflexive assignments, see the executable example [Reflexive Component Assignments](javascript:call_link\('abenreflexive_corresponding_abexa.htm'\)).