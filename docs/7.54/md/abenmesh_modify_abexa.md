  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) →  [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_modify.htm) → 

Changing Multiple Rows in Mesh Paths

This example demonstrates how multiple rows are changed in mesh paths.

Source Code

REPORT demo\_mesh\_modify\_numbers.
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
                   WITH NON-UNIQUE KEY col1 col2,
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
    out->next\_section( 'Modify Multiple Lines Using ON' ).
    MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \]
      FROM VALUE line2( col3 = 111 ) TRANSPORTING col3.
    out->write( mesh-node2 ).
    out->next\_section( 'Modify Multiple Lines Using ON and WHERE' ).
    MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \]
      FROM VALUE line2( col3 = 222 ) TRANSPORTING col3.
    out->write( mesh-node2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      FOR j = 11 THEN j + 10 WHILE j < 30
          ( col1 = j col2 = j + 1  ) ).
    DO 3 TIMES.
      DATA(idx) = sy-index.
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

Starting from the filled mesh nodes mesh-node1 and mesh-node2, multiple rows from mesh-node2 are changed:

-   Statement MODIFY for deleting multiple rows using the ON condition.

MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \]
  FROM VALUE line2( col3 = 111 ) TRANSPORTING col3.

All rows of the node mesh-node2 identified starting with the first row of the node mesh-node1 using the initial mesh association \\\_node2 are changed in the third column.

-   Statement DELETE for deleting multiple rows using the ON condition with an additional WHERE condition.

MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \]
  FROM VALUE line2( col3 = 222 ) TRANSPORTING col3.

All rows of the node mesh-node2 identified starting with the second row of the node mesh-node1 using the initial mesh association \\\_node2 and which meet the additional WHERE condition are changed in the third column.