---
title: "Inverse Associations in Mesh Paths"
description: |
  This example demonstrates the results of inverse associations in mesh paths. Source Code REPORT demo_mesh_inverse_assoc. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. TYPES: BEGIN OF line1, col1 TYPE i, END OF line1, t_itab1 TYPE SORTED TABLE OF
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_for_inverse_abexa.htm"
abapFile: "abenmesh_for_inverse_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abenmesh", "for", "inverse", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm) →  [Meshes - Mesh Path Result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm) →  [Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result_abexas.htm) → 

Inverse Associations in Mesh Paths

This example demonstrates the results of inverse associations in mesh paths.

Source Code

REPORT demo\_mesh\_inverse\_assoc.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
      END OF line1,
      t\_itab1 TYPE SORTED TABLE OF line1
                   WITH UNIQUE KEY col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH UNIQUE KEY col1 col2,
      BEGIN OF line3,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line3,
      t\_itab3 TYPE SORTED TABLE OF line3
                   WITH UNIQUE KEY col1 col2 col3,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
             ASSOCIATION \_node2 TO node2 ON col1 = col1,
        node2 TYPE t\_itab2
             ASSOCIATION \_node3 TO node3 ON col1 = col1
                                        AND col2 = col2,
        node3 TYPE t\_itab3,
      END OF MESH t\_mesh.
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(idx) = 1.
    cl\_demo\_input=>request( CHANGING field = idx ).
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    IF line\_exists( mesh-node3\[ idx \] ).
      out->next\_section( 'node3\\^\_node3~node2'
        )->write( VALUE t\_itab2(
           FOR <node2> IN
             mesh-node3\\^\_node3~node2\[ mesh-node3\[ idx \] \]
             ( <node2> ) ) ).
      out->next\_section( 'node3\\^\_node3~node2\\^\_node2~node1'
        )->write( VALUE t\_itab1(
           FOR <node1> IN
             mesh-node3\\^\_node3~node2\[ mesh-node3\[ idx \]
                                       \]\\^\_node2~node1\[ \]
             ( <node1> ) ) ).
    ELSE.
      out->write( \`Enter a valid index for node3 ...\` ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE t\_itab1(
      ( col1 = 1 )
      ( col1 = 2 )
      ( col1 = 3 ) ).
    mesh-node2 = VALUE t\_itab2(
      ( col1 = 1  col2 = 11 )
      ( col1 = 1  col2 = 12 )
      ( col1 = 2  col2 = 21 )
      ( col1 = 2  col2 = 22 )
      ( col1 = 3  col2 = 31 )
      ( col1 = 3  col2 = 32 ) ).
    mesh-node3 = VALUE t\_itab3(
      ( col1 = 1  col2 = 11 col3 = 111 )
      ( col1 = 1  col2 = 11 col3 = 112 )
      ( col1 = 1  col2 = 12 col3 = 121 )
      ( col1 = 1  col2 = 12 col3 = 122 )
      ( col1 = 2  col2 = 21 col3 = 211 )
      ( col1 = 2  col2 = 21 col3 = 212 )
      ( col1 = 2  col2 = 22 col3 = 221 )
      ( col1 = 2  col2 = 22 col3 = 222 )
      ( col1 = 3  col2 = 31 col3 = 311 )
      ( col1 = 3  col2 = 31 col3 = 312 )
      ( col1 = 3  col2 = 32 col3 = 321 )
      ( col1 = 3  col2 = 32 col3 = 322 ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Table comprehensions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_for.htm) are used to construct and return internal tables that are described using inverse associations in the mesh nodes mesh-node2 and mesh-node1.