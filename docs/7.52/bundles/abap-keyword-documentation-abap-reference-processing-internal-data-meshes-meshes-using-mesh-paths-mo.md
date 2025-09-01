# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Meshes / Meshes - Using Mesh Paths / MODIFY mesh_path

Included pages: 3


### abenmesh_modify.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) → 

MODIFY mesh\_path

Syntax

MODIFY *{* TABLE [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm) *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm)*\]*
                         FROM wa
                         *\[*TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) ...*\]*
                         [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_result.htm) *}*
     *|* *{* [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm) FROM wa
                   *\[*TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) ...*\]* *}*.

Variants:

[1\. MODIFY TABLE mesh\_path FROM wa ...](#!ABAP_VARIANT_1@1@)
[2\. MODIFY mesh\_path FROM wa ...](#!ABAP_VARIANT_2@2@)

Addition:

[... TRANSPORTING comp1 comp2 ...](#!ABAP_ONE_ADD@1@)

Effect

Modifies a single row or multiple rows in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm). In the row or rows described by the mesh path, the following columns are assigned the corresponding values from the work area wa:

-   If the optional addition TRANSPORTING is not specified, all columns are modified

-   that are not in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the association in question,

-   that are no part of the primary key of the last path node, if the table is a sorted table or a hashed table.

-   If the optional addition TRANSPORTING is specified, the columns after it are modified

wa expects a structure that is compatible with the row type of the last path node. No key fields of primary or secondary table keys in the last path node can be overwritten. The return code sy-subrc is set in the same way as in the corresponding statement [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm).

Note

Note that the addition TABLE (as in [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)) is highly significant for directly specified internal tables and distinguishes different variants of statements from each other.

Variant 1

MODIFY TABLE mesh\_path FROM wa ...

Effect

Modifies precisely one row in the follow-on node of an [initial association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm). In this variant, no path extensions can be specified and the square brackets of the initial association cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm). The row to be modified is determined using the table key:

-   If the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the association covers all key fields of the table key it uses, the modified row is determined using the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_init_assoc.htm) of the mesh path. Here, only those fields of the ON condition are respected that are also key fields.

-   If the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the association in question does not cover the key fields of the table key it uses, the missing key fields are taken from the associated components of the work area wa.

The row is modified in accordance with the rules of [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm). If the follow-on node contains multiple rows that match the specified key, the first row found is modified. If the row to be modified is not found, nothing is modified. The key in question can be specified using the addition USING KEY, just as in the statement [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm) with directly specified internal table. [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_result.htm) can be used to specify the output behavior.

Note

Columns of the follow-on node that are specified in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) but are not part of the table key used are always ignored in this variant. This means that the row to be modified cannot be determined beyond the bounds of the table key.

Executable Example

[Changing Single Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify_table_abexa.htm)

Variant 2

MODIFY mesh\_path FROM wa ...

Effect

Modifies multiple rows in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm). Modifies all rows in the last path node described by the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result.htm) of the mesh path. An additional condition can be specified in the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc.htm) of each association of the mesh path using the additions [USING KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm). In the last association, the addition USING KEY cannot be specified if it is specified after FROM wa.

Executable Example

[Changing Multiple Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify_abexa.htm)

Addition

... TRANSPORTING comp1 comp2 ...

Effect

The same applies to the addition TRANSPORTING as to the statement [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm) with directly specified internal table, with the restriction that no columns can be specified that are part of the primary key of the last path node if the table is a sorted table or hashed table.

Note

The TRANSPORTING addition can also be used to modify columns that are specified in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the association in question.

Continue
![Example](exa.gif "Example") [Changing Single Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify_table_abexa.htm)
![Example](exa.gif "Example") [Changing Multiple Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify_abexa.htm)


### abenmesh_modify_table_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) →  [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify.htm) → 

Changing Single Rows in Mesh Paths

This example demonstrates how single rows are changed in mesh paths.

Source Code

REPORT demo\_mesh\_modify\_table\_numbers.
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
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE #(
      FOR j = 11 THEN j + 10 WHILE j < 30
          ( col1 = j col2 = j + 1  ) ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col3 = 3 + sy-index \* 10 )
        INTO TABLE mesh-node1\\\_node2\_1\[ mesh-node1\[ sy-index \] \].
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Starting from the filled mesh nodes mesh-node1 and mesh-node2, single rows from mesh-node2 are changed:

-   Statement MODIFY TABLE for changing a row using the ON condition.

MODIFY TABLE mesh-node1\\\_node2\_1\[ mesh-node1\[ 1 \] \]
  FROM VALUE line2( col2 = 111 col3 = 222 )
       TRANSPORTING col2 col3.

The ON condition of the association \_node2\_1 covers the primary table key of the node node2 and is used to identify the row that needs to be modified.

-   Statement MODIFY TABLE for changing a row using the ON condition and with a key field from the work area.

MODIFY TABLE mesh-node1\\\_node2\_2\[ mesh-node1\[ 2 \] \]
  FROM VALUE line2( col2 = 22 col3 = 333 )
       USING KEY mkey TRANSPORTING col3.

The ON condition of the association \_node2\_2 does not cover the table key mkey and the missing information is taken from column col2 of the work area after FROM.


### abenmesh_modify_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) →  [MODIFY mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify.htm) → 

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

All rows of the node mesh-node2 identified starting with the first row of the node mesh-node1 using the initial association \\\_node2 are changed in the third column.

-   Statement DELETE for deleting multiple rows using the ON condition with an additional WHERE condition.

MODIFY mesh-node1\\\_node2\[ mesh-node1\[ 2 \] WHERE col3 > 23 \]
  FROM VALUE line2( col3 = 222 ) TRANSPORTING col3.

All rows of the node mesh-node2 identified starting with the second row of the node mesh-node1 using the initial association \\\_node2 and which meet the additional WHERE condition are changed in the third column.
