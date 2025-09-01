# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Meshes / Meshes - Using Mesh Paths / SET ASSOCIATION mesh_path

Included pages: 2


### abenmesh_set_association.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) → 

SET ASSOCIATION mesh\_path

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_association_shortref.htm)

Syntax

SET ASSOCIATION [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) *{* = wa    *}*
                        *|* *{* LIKE wa *}*
                        *|* *{* INITIAL *}*.

Extras:

[1\. ... = wa](#!ABAP_ADDITION_1@1@)
[2\. ... LIKE wa](#!ABAP_ADDITION_2@2@)
[3\. ... INITIAL](#!ABAP_ADDITION_3@3@)

Effect

Sets mesh associations for a [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm). The statement sets columns in the second last path node of the mesh path. These columns are specified as scomp in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the mesh association starting with the node. The columns are set on values that are specified by the additions on the right side. The content of the last path node is ignored.

-   If the mesh path only contains one [initial mesh association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm), the second last node is the root node of the path and the corresponding content is neither read nor changed. Instead the columns specified by the ON condition are set for the structure, which is specified as the source in the square brackets of the mesh association. The square brackets cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm).

-   If the mesh path contains [path extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm), it is evaluated down to the second last node. The columns specified using the ON condition are changed in the rows of the second last path node, which are described in the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result_chaining.htm). All mesh associations (except the last one) of the mesh path can contain additional conditions, which can be specified using [USING KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm). The square brackets \[ \] for the mesh association of the last path extension must be empty.

The last mesh association of the mesh path is only required to determine the modifying components (using the ON condition). Therefore the last association cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm).

Notes

-   Using the statement SET ASSOCIATION, mesh association-relevant components can be set in structures and mesh nodes, without needing to know the component names. These structures can be used, for example, to build mesh nodes.

-   Using the statement SET ASSOCIATION, change operations can be performed that provide additional options to those offered by the statements [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_insert.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_insert.htm).

-   A mesh path that only contains an initial mesh association can also be used to modify mesh nodes. This can be done by using a field symbol or data reference in source to reference a row in a mesh node.
    

Addition 1

... = wa

Effect

Assigns columns of a work area wa. The work area wa must be a structure with the same row type as the last path node.

The content of the components of wa are specified in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path as tcomp. These contents are assigned to the allocated components scomp in the structure source (or assigned to the allocated columns of the rows found in the second last path node).

Note

In terms of semantics, key values in an instance of a start node of a mesh association are set as they are in an instance of a follow-on node.

Addition 2

... LIKE wa

Effect

Assigns columns of a work area wa. The work area wa must be a structure with the same row type as the second last path node.

The content of the components of wa are specified in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path as scomp. These contents are assigned to the identically named components in the structure source (or assigned to the identically named columns of the rows found in the second last path node).

Note

In terms of semantics, key values in an instance of a start node of a mesh association are set as they are in a different instance of the same node.

Addition 3

... INITIAL

Effect

Assigns initial values

All components of source (or all columns of the rows found in the second last path node) specified in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path as scomp are assigned their type-dependent initial value.

Note

In terms of semantics, key values in an instance of a start node of a mesh association are initialized.

Continue
![Example](exa.gif "Example") [Setting Mesh Associations for Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_set_association_abexa.htm)


### abenmesh_set_association_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) →  [SET ASSOCIATION mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_set_association.htm) → 

Setting Mesh Associations for Mesh Paths

This example demonstrates how mesh associations are set for mesh paths.

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

This example shows how, in a mesh node mesh-node2 (which is the target node of the mesh association \_node2 of a mesh node mesh-node1 and the initial node of a mesh association \_node3 with the mesh node mesh-node3), values can be set that match the existing values in mesh-node3. The statement SET ASSOCIATION is used in two variants here:

-   In the first case, a mesh path with just one initial mesh association is used:

SET ASSOCIATION mesh-node2\\\_node3\[ <line2> \] = mesh-node3\[ 1 \]

The statement SET ASSOCIATION sets the column col3 in the structure specified in the square brackets. Here, a field symbol is used that points to a row inserted previously in mesh-node2. The values to be set are taken from the follow-on node mesh-node3 using a table expression. The subsequent read performed on the same mesh path demonstrates that this path now describes the required data in mesh-node3.

-   In the second case, a mesh path with a path extension is used:

SET ASSOCIATION mesh-node1\\\_node2\[ root \]\\\_node3\[ \] = mesh-node3\[ 2 \].

The result of the mesh path up to the node mesh-node2 describes two existing rows. In these rows, the column col3 is again set to values from the follow-on node mesh-node3. Again, the subsequent read performed on the same mesh path demonstrates that this path describes the appropriate data in mesh-node3, with the duplicate row only being respected once.
