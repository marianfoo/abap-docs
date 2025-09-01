# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Meshes / Meshes - Using Mesh Paths / INSERT mesh_path

Included pages: 3


### abenmesh_insert.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm) → 

INSERT mesh\_path

Syntax

INSERT [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm) INTO TABLE [mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm) [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_result.htm).

Effect

Inserts rows in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm). As in [inserts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm) into a directly specified table using [INTO TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_position.htm), the position of the inserted rows is determined using the primary table key. The behavior when duplicate rows are encountered with respect to unique table keys is also the same. When specifying the inserted rows using [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm), the same applies when inserting rows in directly specified tables and they must be compatible with the row type of the last path node.

A set of rows with the row type of the last path node is instantiated from line\_spec and the [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm) of the mesh path. This set is inserted in the last path node in accordance with the rules of [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm):

-   For each row in [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm) or for each row in an inserted table, the same number of rows are created as described by the [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm). If the mesh path contains only the initial associations, one row is created; in the case of path extensions, multiple rows can be created.

-   In the new rows, the columns in the [ON condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) of the last association of the mesh path are filled as follows:

-   If the mesh path contains only an initial association, each of these columns is filled with the current comparison value from source.

-   If the mesh path contains path extensions, each of these columns is filled with the value described by the result of the preceding association.

The remaining components have the value of the rows specified in [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm).

The following applies when specifying the associations:

-   If the mesh path contains only an initial association, the square brackets cannot contain an [additional condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm).

-   If the mesh path contains path extensions, all associations can contain additional conditions, which can be specified using the additions [USING KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm). The square brackets \[ \] for the association of the last path extension must be empty.

The number of rows inserted is the number of rows specified in lin\_spec multiplied by the number or rows described in [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm). If, due to an additional WHERE condition, the results set is empty, no rows are inserted.

[result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_result.htm) can be used to specified the output behavior when precisely one row is specified, as in [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm). Since more than one row is always inserted when path extensions are used, the addition result can only be specified in the following cases:

-   If the variant LINES OF is not used in [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm).

-   The mesh path contains only the initial association.

The return code sy-subrc is set in the same way as in the corresponding statement [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm).

Notes

-   When INITIAL LINE is used to specify an initial row in [line\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm), only those components remain initial that are not specified in the ON condition.

-   The square brackets of the association of the last path extension are empty, since it needs only to indicate the mesh node in which the rows are inserted.

Executable Examples

-   [Insertions in Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_insert_abexa.htm)

-   [Table Builds Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_build_abexa.htm)

Continue
![Example](exa.gif "Example") [Insertions in Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_insert_abexa.htm)
![Example](exa.gif "Example") [Table Builds Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_build_abexa.htm)


### abenmesh_insert_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm) →  [INSERT mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_insert.htm) → 

Insertions in Mesh Paths

This example demonstrates how rows are inserted in mesh paths.

Source Code

REPORT demo\_mesh\_insert\_numbers.
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
                   WITH NON-UNIQUE KEY col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH NON-UNIQUE KEY col1 col2,
      BEGIN OF line3,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line3,
      t\_itab3 TYPE SORTED TABLE OF line3
                   WITH NON-UNIQUE KEY col1 col2 col3,
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
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    out->next\_section(
      'Inserting One Line Into node1\\\_node2' ).
    INSERT VALUE line2( col2 = 3333 ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].
    out->write( mesh-node2 ).
    out->next\_section(
      'Inserting Multiple Lines Into node1\\\_node2' ).
    INSERT LINES OF VALUE t\_itab2( ( col2 = 1 )
                                   ( col2 = 2 )
                                   ( col2 = 3 ) ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \].
    out->write( mesh-node2 ).
    out->next\_section(
      'Inserting Initial Lines Into node1\\\_node2\\\_node3' ).
    INSERT INITIAL LINE INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].
    out->write( mesh-node3 ).
    out->next\_section(
      'Inserting  Multiple Lines Into node1\\\_node2\\\_node3' ).
    INSERT LINES OF VALUE t\_itab3( ( col3 = 10 )
                                   ( col3 = 20 )
                                   ( col3 = 30 ) ) INTO TABLE
      mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].
    out->write( mesh-node3 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      ( col1 = 11  )
      ( col1 = 12  )
      ( col1 = 13  ) ).
    mesh-node2 = VALUE #(
      ( col1 = 11 col2 = 211 )
      ( col1 = 11 col2 = 212 )
      ( col1 = 12 col2 = 221 )
      ( col1 = 12 col2 = 222 )
      ( col1 = 13 col2 = 231 )
      ( col1 = 13 col2 = 232 ) ).
    mesh-node3 = VALUE #(
      ( col1 = 11 col2 = 211 col3 = 311 )
      ( col1 = 11 col2 = 212 col3 = 312 )
      ( col1 = 12 col2 = 221 col3 = 321 )
      ( col1 = 12 col2 = 222 col3 = 322 )
      ( col1 = 13 col2 = 231 col3 = 331 )
      ( col1 = 13 col2 = 232 col3 = 332 ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Row insertions are demonstrated using previously filled mesh nodes mesh-node1, mesh-node2, and mesh-node3.

-   The statement INSERT for inserting a work area into a mesh path with an initial association.

INSERT VALUE line2( col2 = 3333 ) INTO TABLE
  mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].

The work area is created by a constructor expression in which only the component col2 needs to be filled. This is because the other component is filled implicitly when the association is evaluated. If specified in the square brackets of the association, source is a table expression that reads the first row of the root node. In the follow-on node mesh-node2, a row is inserted whose first column matches the initial node and whose third column has a new value.

-   The statement INSERT for inserting the rows of an internal table into a mesh path with an initial association.

INSERT LINES OF VALUE t\_itab2( ( col2 = 1 )
                               ( col2 = 2 )
                               ( col2 = 3 ) ) INTO TABLE
  mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \].

The internal table is created by a constructor expression in which only the column col2 needs to be filled. This is because the other component is filled implicitly when the association is evaluated. If specified in the square brackets of the initial association, source is a table expression that reads the second row of the root node. In the follow-on node mesh-node2, rows are inserted whose first column matches the initial node and whose third column has new values.

-   The statement INSERT for inserting initial rows into a mesh path with a path extension.

INSERT INITIAL LINE INTO TABLE
  mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].

If specified in the square brackets of the initial association, source is a table expression that reads the third row of the root node. Two rows in the follow-on node mesh-node2 match the result of the initial association. Accordingly, two rows are inserted in mesh-node3, where the first two columns are determined by the association and the third column col3 is initial.

-   The statement INSERT for inserting multiple rows into a mesh path with a path extension.

INSERT LINES OF VALUE t\_itab3( ( col3 = 10 )
                               ( col3 = 20 )
                               ( col3 = 30 ) ) INTO TABLE
  mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]\\\_node3\[ \].

As in the previous step, but here three rows of an internal table are inserted for each described row. Only the value of the third column col3 is taken from the table.


### abenmesh_build_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm) →  [INSERT mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_insert.htm) → 

Table Builds Using Mesh Paths

This example demonstrates how a table is built using a mesh path.

Source Code

REPORT demo\_mesh\_insert\_build\_table.
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
                   WITH NON-UNIQUE KEY col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH NON-UNIQUE KEY col1 col2,
      BEGIN OF MESH t\_mesh,
        node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1,
        node2 TYPE t\_itab2,
      END OF MESH t\_mesh.
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1 ).
    out->next\_section(
      'Building node2 from node1\\\_node2' ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col2 = 20 + sy-index ) INTO TABLE
        mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
    ENDDO.
    out->write( mesh-node2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      ( col1 = 11  )
      ( col1 = 12  )
      ( col1 = 13  ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The empty mesh node mesh-node2 is built from the filled node mesh-node1 using the statement INSERT. To do this, all rows from mesh-node1 are used as the source of the initial association \\\_node2 of the mesh path in a DO loop and a row is inserted in mesh-node2 for each row from mesh-node1. The value of the column col1 is taken from mesh-node1 and a new value for the column col2 is created.
