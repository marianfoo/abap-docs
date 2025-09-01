  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) →  [DELETE mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_delete.htm) → 

Deleting Single Rows in Mesh Paths

This example demonstrates how single rows are deleted in mesh paths.

Source Code

REPORT demo\_mesh\_delete\_table\_numbers.
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
                   WITH NON-UNIQUE KEY col1 col2
                   WITH UNIQUE HASHED KEY mkey
                        COMPONENTS col1 col2 col3,
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
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Initial node1'
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
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      FOR j = 1 UNTIL j > 5
      ( col1 = 10 \* j + 1 col2 = 10 \* j + 2 ) ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col3 = 3 + sy-index \* 10 )
             INTO TABLE mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Starting from the filled mesh nodes mesh-node1 and mesh-node2, single rows from mesh-node2 are deleted:

-   Statement DELETE TABLE for deleting a row using the ON condition.

DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].

The row of node mesh-node2, identified starting with the first row of node mesh-node1 using the initial mesh association \\\_node2, is deleted. The ON condition covers the primary key used here, which means that no additional key fields need to be specified.

-   Statement DELETE TABLE for deleting a row using the ON condition and with an explicitly specified key field.

DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \]
  WITH TABLE KEY mkey COMPONENTS col3 = 23.

The row of node mesh-node2, identified starting with the second row of node mesh-node1 using the initial mesh association \\\_node2, is deleted. The ON condition does not cover the secondary key mkey, which means that the missing key field must be specified using the addition WITH TABLE KEY.

-   Statement DELETE TABLE for deleting a row using the ON condition and with a key field from the work area.

DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]
  FROM VALUE line2( col3 = 33  ) USING KEY mkey.

The row of node mesh-node2, identified starting with the third row of node mesh-node1 using the initial mesh association \\\_node2, is deleted. The ON condition does not cover the secondary key mkey, which means that the missing key field must be specified using the addition FROM wa.