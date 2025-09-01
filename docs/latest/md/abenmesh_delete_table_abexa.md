  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [DELETE mesh\_path](javascript:call_link\('abenmesh_delete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Deleting%20Single%20Lines%20in%20Mesh%20Paths%2C%20ABENMESH_DELETE_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

Meshes - Deleting Single Lines in Mesh Paths

This example demonstrates how single lines are deleted in mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_dlt\_table\_nmbrs DEFINITION
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
                   WITH NON-UNIQUE KEY col1 col2
                   WITH UNIQUE HASHED KEY mkey
                        COMPONENTS col1 col2 col3,
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
CLASS cl\_demo\_mesh\_dlt\_table\_nmbrs IMPLEMENTATION.
  METHOD main.
    out->begin\_section( 'Initial node1'
      )->write( mesh-node1
      )->next\_section( 'Initial node2'
      )->write( mesh-node2 ).
    out->next\_section( 'Delete One Line Using ON' ).
    DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    out->write( mesh-node2 ).
    out->next\_section( 'Delete One Line Using ON and WITH KEY' ).
    DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \]
      WITH TABLE KEY mkey COMPONENTS col3 = 23.
    out->write( mesh-node2 ).
    out->next\_section( 'Delete One Line Using ON and FROM wa' ).
    DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]
      FROM VALUE line2( col3 = 33  ) USING KEY mkey.
    out->write( mesh-node2 ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    mesh-node1 = VALUE #(
      FOR j = 1 UNTIL j > 5
      ( col1 = 10 \* j + 1 col2 = 10 \* j + 2 ) ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col3 = 3 + sy-index \* 10 )
             INTO TABLE mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

Starting from the prefilled mesh nodes mesh-node1 and mesh-node2, single lines from mesh-node2 are deleted:

-   Statement DELETE TABLE for deleting a line using the ON condition.
    
    DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    
    The line of node mesh-node2, identified starting with the first line of node mesh-node1 using the initial mesh association \\\_node2, is deleted. The ON condition covers the primary key used here, which means that no additional key fields need to be specified.
    
-   Statement DELETE TABLE for deleting a line using the ON condition and with an explicitly specified key field.
    
    DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \]
      WITH TABLE KEY mkey COMPONENTS col3 = 23.
    
    The line of node mesh-node2, identified starting with the second line of node mesh-node1 using the initial mesh association \\\_node2, is deleted. The ON condition does not cover the secondary key mkey, which means that the missing key field must be specified using the addition WITH TABLE KEY.
    
-   Statement DELETE TABLE for deleting a line using the ON condition and with a key field from the work area.
    
    DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]
      FROM VALUE line2( col3 = 33  ) USING KEY mkey.
    
    The line of node mesh-node2, identified starting with the third line of node mesh-node1 using the initial mesh association \\\_node2, is deleted. The ON condition does not cover the secondary key mkey, which means that the missing key field must be specified using the addition FROM wa.