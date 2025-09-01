  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm) →  [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_modify.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Changing%20Multiple%20Lines%20in%20Mesh%20Paths%2C%20ABENMESH_MODIFY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

Meshes - Changing Multiple Lines in Mesh Paths

This example demonstrates how multiple lines are changed in mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_modify\_nmbrs DEFINITION
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
                   WITH NON-UNIQUE KEY col1 col2,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1
                                     AND col2 = col2,
        node2 TYPE t\_itab2,
      END OF MESH t\_mesh.
    DATA
      mesh TYPE t\_mesh.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_modify\_nmbrs IMPLEMENTATION.
  METHOD main.
    out->begin\_section( 'Initial node1'
      )->write( mesh-node1
      )->next\_section( 'Initial node2'
      )->write( mesh-node2 ).
    out->next\_section( 'Modify Multiple Lines Using ON' ).
    MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \]
      FROM VALUE line2( col3 = 111 ) TRANSPORTING col3.
    out->write( mesh-node2 ).
    out->next\_section( 'Modify Multiple Lines Using ON and WHERE' ).
    MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \]
      FROM VALUE line2( col3 = 222 ) TRANSPORTING col3.
    out->write( mesh-node2 ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    mesh-node1 = VALUE #(
      FOR j = 11 THEN j + 10 WHILE j < 30
          ( col1 = j col2 = j + 1  ) ).
    DO 3 TIMES.
      FINAL(idx) = sy-index.
      DO lines( mesh-node1 ) TIMES.
        INSERT VALUE line2( col3 = 2 + idx + sy-index \* 10 )
          INTO TABLE mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
      ENDDO.
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

Starting from the filled mesh nodes mesh-node1 and mesh-node2, multiple lines from mesh-node2 are changed:

-   Statement MODIFY for deleting multiple lines using the ON condition.
    
    MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \]
      FROM VALUE line2( col3 = 111 ) TRANSPORTING col3.
    
    All lines of the node mesh-node2 identified starting with the first line of the node mesh-node1 using the initial mesh association \\\_node2 are changed in the third column.
    
-   Statement DELETE for deleting multiple lines using the ON condition with an additional WHERE condition.
    
    MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \]
      FROM VALUE line2( col3 = 222 ) TRANSPORTING col3.
    
    All lines of the node mesh-node2 identified starting with the second line of the node mesh-node1 using the initial mesh association \\\_node2 and that meet the additional WHERE condition are changed in the third column.