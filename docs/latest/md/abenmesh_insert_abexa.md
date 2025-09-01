  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm) →  [INSERT mesh\_path](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_insert.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Insertions%20in%20Mesh%20Paths%2C%20ABENMESH_INSERT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Meshes - Insertions in Mesh Paths

This example demonstrates how lines are inserted in mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_insert\_numbers DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
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
      BEGIN OF line3,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line3,
      t\_itab3 TYPE SORTED TABLE OF line3
                   WITH NON-UNIQUE KEY col1 col2 col3,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1,
        node2 TYPE t\_itab2
          ASSOCIATION \_node3 TO node3 ON col1 = col1
                                     AND col2 = col2,
        node3 TYPE t\_itab3,
      END OF MESH t\_mesh.
    DATA
      mesh TYPE t\_mesh.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_insert\_numbers IMPLEMENTATION.
  METHOD main.
    out->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    out->next\_section(
      'Inserting One Line Into node1\\\_node2' ).
    INSERT VALUE line2( col2 = 3333 ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    out->write( mesh-node2 ).
    out->next\_section(
      'Inserting Multiple Lines Into node1\\\_node2' ).
    INSERT LINES OF VALUE t\_itab2( ( col2 = 1 )
                                   ( col2 = 2 )
                                   ( col2 = 3 ) ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \].
    out->write( mesh-node2 ).
    out->next\_section(
      'Inserting Initial Lines Into node1\\\_node2\\\_node3' ).
    INSERT INITIAL LINE INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].
    out->write( mesh-node3 ).
    out->next\_section(
      'Inserting  Multiple Lines Into node1\\\_node2\\\_node3' ).
    INSERT LINES OF VALUE t\_itab3( ( col3 = 10 )
                                   ( col3 = 20 )
                                   ( col3 = 30 ) ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].
    out->write( mesh-node3 ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    mesh-node1 = VALUE #(
      ( col1 = 11  )
      ( col1 = 12  )
      ( col1 = 13  ) ).
    mesh-node2 = VALUE #(
      ( col1 = 11 col2 = 211 )
      ( col1 = 11 col2 = 212 )
      ( col1 = 12 col2 = 221 )
      ( col1 = 12 col2 = 222 )
      ( col1 = 13 col2 = 231 )
      ( col1 = 13 col2 = 232 ) ).
    mesh-node3 = VALUE #(
      ( col1 = 11 col2 = 211 col3 = 311 )
      ( col1 = 11 col2 = 212 col3 = 312 )
      ( col1 = 12 col2 = 221 col3 = 321 )
      ( col1 = 12 col2 = 222 col3 = 322 )
      ( col1 = 13 col2 = 231 col3 = 331 )
      ( col1 = 13 col2 = 232 col3 = 332 ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Line insertions are demonstrated using previously filled mesh nodes mesh-node1, mesh-node2, and mesh-node3.

-   The statement INSERT for inserting a work area into a mesh path with an initial mesh association.
    
    INSERT VALUE line2( col2 = 3333 ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    
    The work area is created by a constructor expression in which only the component col2 needs to be filled since the other component is filled implicitly when the mesh association is evaluated. If specified in the square brackets of the mesh association, source is a table expression that reads the first line of the root node. In the follow-on node mesh-node2, a line is inserted whose first column matches the root node and whose third column has a new value.
    
-   The statement INSERT for inserting the lines of an internal table into a mesh path with an initial mesh association.
    
    INSERT LINES OF VALUE t\_itab2( ( col2 = 1 )
                                   ( col2 = 2 )
                                   ( col2 = 3 ) ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \].
    
    The internal table is created by a constructor expression in which only the column col2 needs to be filled since the other component is filled implicitly when the mesh association is evaluated. If specified in the square brackets of the initial mesh association, source is a table expression that reads the second line of the root node. In the follow-on node mesh-node2, lines are inserted whose first column matches that of the entry node and whose third column has new values.
    
-   The statement INSERT for inserting initial lines into a mesh path with a path extension.
    
    INSERT INITIAL LINE INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].
    
    If specified in the square brackets of the initial mesh association, source is a table expression that reads the third line of the root node. Two lines in the follow-on node mesh-node2 match the result of the initial mesh association. Accordingly, two lines are inserted in mesh-node3, where the first two columns are determined by the mesh association and the third column col3 is initial.
    
-   The statement INSERT for inserting multiple lines into a mesh path with a path extension.
    
    INSERT LINES OF VALUE t\_itab3( ( col3 = 10 )
                                   ( col3 = 20 )
                                   ( col3 = 30 ) ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].
    
    As in the previous step, but here three lines of an internal table are inserted for each described line. Only the value of the third column col3 is taken from the table.