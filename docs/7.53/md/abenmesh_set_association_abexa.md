  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm) →  [SET ASSOCIATION mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_set_association.htm) → 

Setting Associations for Mesh Paths

This example demonstrates how associations are set for mesh paths.

Source Code

REPORT demo\_mesh\_set\_assoc\_numbers.
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
      BEGIN OF line3,
        col3 TYPE i,
        col4 TYPE i,
      END OF line3,
      t\_itab3 TYPE SORTED TABLE OF line3
                   WITH NON-UNIQUE KEY col3,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1
                                     AND col2 = col2,
        node2 TYPE t\_itab2
          ASSOCIATION \_node3 TO node3 ON col3 = col3,
        node3 TYPE t\_itab3,
      END OF MESH t\_mesh.
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    out->next\_section( 'Initial Association' ).
    out->begin\_section( 'Insert initial line into node1\\\_node2' ).
    INSERT INITIAL LINE INTO TABLE
      mesh-node1\\\_node2\[ VALUE line1( col1 = 11 col2 = 12 ) \]
      ASSIGNING FIELD-SYMBOL(<line2>).
    out->write( mesh-node2 ).
    out->next\_section( 'Set association node2\\\_node3' ).
    SET ASSOCIATION mesh-node2\\\_node3\[ <line2> \] = mesh-node3\[ 1 \].
    out->write( mesh-node2 ).
    out->next\_section( 'Get association node2\\\_node3' ).
    DATA(line3) = mesh-node2\\\_node3\[ <line2> \].
    out->write( line3 )->end\_section( ).
    out->next\_section( 'Chained Association' ).
    out->begin\_section( 'Set association node1\\\_node2\\\_node3' ).
    DATA(root) = VALUE line1( col1 = 21 col2 = 22 ).
    SET ASSOCIATION
      mesh-node1\\\_node2\[ root \]\\\_node3\[ \] = mesh-node3\[ 2 \].
    out->write( mesh-node2 ).
    out->next\_section( 'Get association node1\\node2\\\_node3' ).
    DATA(node3) = VALUE t\_itab3( FOR wa IN
      mesh-node1\\\_node2\[ root \]\\\_node3\[ \] ( wa ) ).
    out->write( node3 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      ( col1 = 11 col2 = 12 )
      ( col1 = 21 col2 = 22 ) ).
    mesh-node2 = VALUE #(
      ( col1 = 21 col2 = 22 )
      ( col1 = 21 col2 = 22 ) ).
    mesh-node3 = VALUE #(
      ( col3 = 13 col4 = 14 )
      ( col3 = 23 col4 = 24 ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows how, in a mesh node mesh-node2 (which is the target node of the association \_node2 of a mesh node mesh-node1 and the initial node of an association \_node3 with the mesh node mesh-node3), values can be set that match the existing values in mesh-node3. The statement SET ASSOCIATION is used in two variants here:

-   In the first case, a mesh path with just one initial association is used:

SET ASSOCIATION mesh-node2\\\_node3\[ <line2> \] = mesh-node3\[ 1 \]

The statement SET ASSOCIATION sets the column col3 in the structure specified in the square brackets. Here, a field symbol is used that points to a row inserted previously in mesh-node2. The values to be set are taken from the follow-on node mesh-node3 using a table expression. The subsequent read performed on the same mesh path demonstrates that this path now describes the required data in mesh-node3.

-   In the second case, a mesh path with a path extension is used:

SET ASSOCIATION mesh-node1\\\_node2\[ root \]\\\_node3\[ \] = mesh-node3\[ 2 \].

The result of the mesh path up to the node mesh-node2 describes two existing rows. In these rows, the column col3 is again set to values from the follow-on node mesh-node3. Again, the subsequent read performed on the same mesh path demonstrates that this path describes the appropriate data in mesh-node3, with the duplicate row only being respected once.