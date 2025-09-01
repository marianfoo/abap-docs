  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [DELETE mesh\_path](javascript:call_link\('abenmesh_delete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes - Deleting Multiple Lines in Mesh Paths, ABENMESH_DELETE_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes - Deleting Multiple Lines in Mesh Paths

This example demonstrates how multiple lines are deleted in mesh paths.

Source Code   

REPORT demo\_mesh\_delete\_numbers.
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
                   WITH NON-UNIQUE KEY col1 col2 col3,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1
                                     AND col2 = col2,
        node2 TYPE t\_itab2,
      END OF MESH t\_mesh.
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Initial node1'
      )->write( mesh-node1
      )->next\_section( 'Initial node2'
      )->write( mesh-node2 ).
    out->next\_section( 'Delete Multiple Lines Using ON' ).
    DELETE mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    out->write( mesh-node2 ).
    out->next\_section( 'Delete Multiple Lines Using ON and WHERE' ).
    DELETE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \].
    out->write( mesh-node2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      FOR j = 1 UNTIL j > 2
      ( col1 = 10 \* j + 1 col2 = 10 \* j + 2 ) ).
    DO 3 TIMES.
      FINAL(idx) = sy-index.
      DO lines( mesh-node1 ) TIMES.
        INSERT VALUE line2( col3 = 2 + idx + sy-index \* 10 )
          INTO TABLE mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
      ENDDO.
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Starting from the prefilled mesh nodes mesh-node1 and mesh-node2, multiple lines from mesh-node2 are deleted:

-   Statement DELETE for deleting multiple lines using the ON condition.
    
    DELETE mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    
    All lines of the node mesh-node2 identified using the initial mesh association \\\_node2 starting with the first line of the node mesh-node1 are deleted.
    
-   Statement DELETE for deleting multiple lines using the ON condition with an additional WHERE condition.
    
    DELETE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \].
    
    All lines of the node mesh-node2 identified using the initial mesh association \\\_node2 starting with the second line of the node mesh-node1 and which meet the additional WHERE condition are deleted.