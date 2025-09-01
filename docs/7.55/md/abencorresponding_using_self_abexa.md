---
title: "Component Operator, Reflexive Assignment"
description: |
  This example demonstrates the component operator(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) with FROM USING for a single table. Source Code REPORT demo_corresponding_using_self. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, c
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_using_self_abexa.htm"
abapFile: "abencorresponding_using_self_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abencorresponding", "using", "self", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_abexas.htm) → 

Component Operator, Reflexive Assignment

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) with FROM USING for a single table.

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

The example links an internal table itab in a component expression using the component operator CORRESPONDING in the [variant with lookup table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_using.htm) to itself and assigns the result to the same table. This requires a temporary copy of the table to be created, which raises a warning from the syntax check. This warning can be hidden using the pragma ##operator.

The table contains a hierarchical tree structure in which nodes of the column node are assigned to a parent node using the column parent. This relationship is specified after USING, which finds the parent node for every line. The assignment of the identically named component text ensures that every line in this column receives the content of its direct parent node.

For further examples of reflexive assignments, see the executable example [Reflexive Component Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreflexive_corresponding_abexa.htm).