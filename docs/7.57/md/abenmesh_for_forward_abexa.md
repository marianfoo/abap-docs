  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_result.htm) →  [Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_result_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes - Forward Associations in Mesh Paths, ABENMESH_FOR_FORWARD_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes - Forward Associations in Mesh Paths

This example demonstrates the results of forward associations in mesh paths.

Source Code   

REPORT demo\_mesh\_forward\_assoc.
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
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    IF line\_exists( mesh-node1\[ idx \] ).
      out->next\_section( 'node1\\\_node2'
        )->write( VALUE t\_itab2(
           FOR <node2> IN
             mesh-node1\\\_node2\[ mesh-node1\[ idx \] \]
             ( <node2> ) ) ).
      out->next\_section( 'node1\\\_node2\\\_node3'
        )->write( VALUE t\_itab3(
           FOR <node3> IN
             mesh-node1\\\_node2\[ mesh-node1\[ idx \] \]\\\_node3\[ \]
             ( <node3> ) ) ).
    ELSE.
      out->write( \`Enter a valid index for node1 ...\` ).
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

[Table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_for.htm) are used to construct and return internal tables that are described using forward associations in the mesh nodes mesh-node2 and mesh-node3.