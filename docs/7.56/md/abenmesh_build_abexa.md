  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [INSERT mesh\_path](javascript:call_link\('abenmesh_insert.htm'\)) → 

Meshes - Table Builds Using Mesh Paths

This example demonstrates how a table is built using a mesh path.

Source Code

REPORT demo\_mesh\_insert\_build\_table.
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
                   WITH NON-UNIQUE KEY col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH NON-UNIQUE KEY col1 col2,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1,
        node2 TYPE t\_itab2,
      END OF MESH t\_mesh.
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1 ).
    out->next\_section(
      'Building node2 from node1\\\_node2' ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col2 = 20 + sy-index ) INTO TABLE
        mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
    ENDDO.
    out->write( mesh-node2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      ( col1 = 11  )
      ( col1 = 12  )
      ( col1 = 13  ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The empty mesh node mesh-node2 is built from the filled node mesh-node1 using the statement INSERT. To do this, all lines from mesh-node1 are used as the source of the initial mesh association \\\_node2 of the mesh path in a DO loop and a line is inserted in mesh-node2 for each line from mesh-node1. The value of the column col1 is taken from mesh-node1 and a new value for the column col2 is created.