  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [MODIFY mesh\_path](javascript:call_link\('abenmesh_modify.htm'\)) → 

Meshes - Changing Single Lines in Mesh Paths

This example demonstrates how single lines are changed in mesh paths.

Source Code

REPORT demo\_mesh\_modify\_table\_numbers.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
      END OF line1,
      t\_itab1 TYPE SORTED TABLE OF line1
                   WITH NON-UNIQUE KEY col1 col2,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH NON-UNIQUE KEY col1
                   WITH UNIQUE HASHED KEY mkey
                        COMPONENTS col1 col2,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
        ASSOCIATION \_node2\_1 TO node2 ON col1 = col1
                                     AND col2 = col2
        ASSOCIATION \_node2\_2 TO node2 ON col1 = col1,
        node2 TYPE t\_itab2,
      END OF MESH t\_mesh.
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Initial node1'
      )->write( mesh-node1
      )->next\_section( 'Initial node2'
      )->write( mesh-node2 ).
    out->next\_section( 'Modify One Line Using ON' ).
    MODIFY TABLE mesh-node1\\\_node2\_1\[ mesh-node1\[ 1 \] \]
      FROM VALUE line2( col2 = 111 col3 = 222 )
                 TRANSPORTING col2 col3.
    out->write( mesh-node2 ).
    out->next\_section( 'Modify One Line Using ON and FROM wa' ).
    MODIFY TABLE mesh-node1\\\_node2\_2\[ mesh-node1\[ 2 \] \]
      FROM VALUE line2( col2 = 22 col3 = 333 )
                 USING KEY mkey TRANSPORTING col3.
    out->write( mesh-node2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      FOR j = 11 THEN j + 10 WHILE j < 30
          ( col1 = j col2 = j + 1  ) ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col3 = 3 + sy-index \* 10 )
        INTO TABLE mesh-node1\\\_node2\_1\[ mesh-node1\[ sy-index \] \].
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Starting from the filled mesh nodes mesh-node1 and mesh-node2, single lines from mesh-node2 are changed:

-   Statement MODIFY TABLE for changing a line using the ON condition.
    
    MODIFY TABLE mesh-node1\\\_node2\_1\[ mesh-node1\[ 1 \] \]
      FROM VALUE line2( col2 = 111 col3 = 222 )
           TRANSPORTING col2 col3.
    
    The ON condition of the mesh association \_node2\_1 covers the primary table key of the node node2 and is used to identify the line that needs to be modified.
    
-   Statement MODIFY TABLE for changing a line using the ON condition and with a key field from the work area.
    
    MODIFY TABLE mesh-node1\\\_node2\_2\[ mesh-node1\[ 2 \] \]
      FROM VALUE line2( col2 = 22 col3 = 333 )
           USING KEY mkey TRANSPORTING col3.
    
    The ON condition of the mesh association \_node2\_2 does not cover the table key mkey and the missing information is taken from column col2 of the work area after FROM.