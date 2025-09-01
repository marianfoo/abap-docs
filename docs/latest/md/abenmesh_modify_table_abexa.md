  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm) →  [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_modify.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Changing%20Single%20Lines%20in%20Mesh%20Paths%2C%20ABENMESH_MODIFY_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

Meshes - Changing Single Lines in Mesh Paths

This example demonstrates how single lines are changed in mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_modify\_tble\_nmbrs DEFINITION
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
    DATA
      mesh TYPE t\_mesh.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_modify\_tble\_nmbrs IMPLEMENTATION.
  METHOD main.
    out->begin\_section( 'Initial node1'
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
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    mesh-node1 = VALUE #(
      FOR j = 11 THEN j + 10 WHILE j < 30
          ( col1 = j col2 = j + 1  ) ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col3 = 3 + sy-index \* 10 )
        INTO TABLE mesh-node1\\\_node2\_1\[ mesh-node1\[ sy-index \] \].
    ENDDO.
  ENDMETHOD.
ENDCLASS.

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