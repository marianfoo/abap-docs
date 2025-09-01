  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

Component Operator, Reflexive Assignment

This example demonstrates the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) with FROM USING for a single table.

Source Code

REPORT demo\_corresponding\_using\_self.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct,
        node   TYPE string,
        parent TYPE string,
        text   TYPE string,
      END OF struct.
    CLASS-DATA
      itab TYPE HASHED TABLE OF struct
           WITH UNIQUE KEY node.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`itab\`
      )->write( itab ).
    itab = CORRESPONDING #(
              itab FROM itab
                   USING node = parent ) ##operator.
    out->next\_section(
      \`itab = CORRESPONDING #( itab FROM itab USING node = parent )\`
      )->write( itab ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
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
START-OF-SELECTION.
  demo=>main( ).

Description

The example relates an internal table itab in a component expression using the component operator CORRESPONDING in the [variant with lookup table](javascript:call_link\('abencorresponding_constr_using.htm'\)) to itself and assigns the result to the same table. This requires a temporary copy of the table to be created, which raises a warning from the syntax check. This warning can be hidden using the pragma ##operator.

The table contains a hierarchical tree structure in which nodes of the column node are assigned to a parent node using the column parent. This relationship is specified after USING, which finds the parent node for every line. The assignment of the identically named component text ensures that every line in this column is given the content of its direct parent node.

For further examples of reflexive assignments, see the executable example [Reflexive Component Assignments](javascript:call_link\('abenreflexive_corresponding_abexa.htm'\)).