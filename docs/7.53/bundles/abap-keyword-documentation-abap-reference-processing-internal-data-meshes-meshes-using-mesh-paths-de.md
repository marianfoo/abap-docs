# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Meshes / Meshes - Using Mesh Paths / DELETE mesh_path

Included pages: 3


### abenmesh_delete.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

DELETE mesh\_path

Syntax

DELETE *{* TABLE [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) *}*
     *|* *{* [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) *}*.

Variants:

[1\. DELETE TABLE mesh\_path table\_key.](#!ABAP_VARIANT_1@1@)
[2\. DELETE mesh\_path.](#!ABAP_VARIANT_2@2@)

Effect

Deletes a single row or multiple rows from the last path node of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)).

Note

Note that the addition TABLE (as in [DELETE](javascript:call_link\('abapdelete_itab.htm'\))) is highly significant for directly specified internal tables and distinguishes different variants of statements from each other.

Variant 1

DELETE TABLE mesh\_path table\_key.

Effect

Deletes precisely one row from the follow-on node of an [initial association](javascript:call_link\('abenmesh_path.htm'\)). In this variant, no path extensions can be specified and the square brackets of the initial association cannot contain any [additional conditions](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)). The row to be modified is determined using the table key:

-   If the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the association covers all key fields of the table key it uses, the deleted row is determined using the [result](javascript:call_link\('abenmesh_path_result_init_assoc.htm'\)) of the mesh path. Here, only those fields of the ON condition are respected that are also key fields.

-   If the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the association does not cover the key fields of the table key it uses, the missing key fields must be specified in the addition [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) and these are combined with the [result](javascript:call_link\('abenmesh_path_result_init_assoc.htm'\)) of the mesh path. The same can be specified for [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) as in the statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) [TABLE itab](javascript:call_link\('abapdelete_itab_line.htm'\)) with a directly specified internal table:

-   If [WITH TABLE KEY](javascript:call_link\('abapdelete_itab_key.htm'\)) is used, all key fields not covered by the ON condition must be specified. No key fields can be specified that are already covered by the ON condition. Furthermore, all fields of the follow-on node used in the ON condition must exist in the table key used by the association.

-   Only those components are taken from a work area specified using [FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\)) that match the non-covered key fields. All other components are ignored. The work area wa must be compatible with the row type of the last path node.

If a table key is specified in [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) using keynmame COMPONENTS or USING keyname, this key overrides any [USING KEY](javascript:call_link\('abaptypes_mesh_association.htm'\))s specified in the definition of the association. The row is deleted with respect to this table key and its key fields must be covered in full.

The row is deleted in accordance with the rules of [DELETE](javascript:call_link\('abapdelete_itab.htm'\)). If the follow-on node contains multiple rows that match the specified key, the first row found is deleted. If the row to be deleted is not found, nothing is deleted.

The return code sy-subrc is set in the same way as in the corresponding statement [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)).

Notes

-   If the ON condition covers all key fields, the addition [WITH TABLE KEY](javascript:call_link\('abapdelete_itab_key.htm'\)) cannot be specified. The addition [FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\)) can be specified, but is ignored.

-   If no explicit table key is specified in the definition of the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) and in the statement DELETE TABLE mesh\_path, the row is deleted with respect to the primary table key.

-   Columns of the follow-on node that are specified in the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) but are not part of the table key used are either forbidden or ignored in this variant. This means that the row to be deleted cannot be determined beyond the bounds of the table key.

Executable Example

[Deleting Single Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_table_abexa.htm'\))

Variant 2

DELETE mesh\_path.

Effect

Deletes multiple rows from the last path node of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)). Deletes all rows from the last path node described by the [result](javascript:call_link\('abenmesh_path_result.htm'\)) of the mesh path. An additional condition can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each association of the mesh path using the additions [USING KEY](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) and [WHERE log\_exp](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)).

Executable Example

[Deleting Multiple Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Deleting Single Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_table_abexa.htm'\))
![Example](exa.gif "Example") [Deleting Multiple Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_abexa.htm'\))


### abenmesh_delete_table_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [DELETE mesh\_path](javascript:call_link\('abenmesh_delete.htm'\)) → 

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

The row of node mesh-node2, identified starting with the first row of node mesh-node1 using the initial association \\\_node2, is deleted. Since the ON condition covers the primary key used here, no additional key fields need to be specified.

-   Statement DELETE TABLE for deleting a row using the ON condition and with an explicitly specified key field.

DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] \]
  WITH TABLE KEY mkey COMPONENTS col3 = 23.

The row of node mesh-node2, identified starting with the second row of node mesh-node1 using the initial association \\\_node2, is deleted. Since the ON condition does not cover the secondary key mkey, the missing key field must be specified using addition WITH TABLE KEY.

-   Statement DELETE TABLE for deleting a row using the ON condition and with a key field from the work area.

DELETE TABLE mesh-node1\\\_node2\[ mesh-node1\[ 3 \] \]
  FROM VALUE line2( col3 = 33  ) USING KEY mkey.

The row of node mesh-node2, identified starting with the third row of node mesh-node1 using the initial association \\\_node2, is deleted. Since the ON condition does not cover the secondary key mkey, the missing key field must be specified using addition FROM wa.


### abenmesh_delete_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [DELETE mesh\_path](javascript:call_link\('abenmesh_delete.htm'\)) → 

Deleting Multiple Rows in Mesh Paths

This example demonstrates how multiple rows are deleted in mesh paths.

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
    DATA(out) = cl\_demo\_output=>new(
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

Starting from the filled mesh nodes mesh-node1 and mesh-node2, multiple rows from mesh-node2 are deleted:

-   Statement DELETE for deleting multiple rows using the ON condition.

DELETE mesh-node1\\\_node2\[ mesh-node1\[ 1 \] \].

All rows of the node mesh-node2 identified using the initial association \\\_node2 starting with the first row of the node mesh-node1 are deleted.

-   Statement DELETE for deleting multiple rows using the ON condition with an additional WHERE condition.

DELETE mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \].

All rows of the node mesh-node2 identified using the initial association \\\_node2 starting with the second row of the node mesh-node1 and which meet the additional WHERE condition are deleted.
