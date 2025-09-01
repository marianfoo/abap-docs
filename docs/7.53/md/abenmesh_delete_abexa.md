---
title: "Deleting Multiple Rows in Mesh Paths"
description: |
  This example demonstrates how multiple rows are deleted in mesh paths. Source Code REPORT demo_mesh_delete_numbers. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. TYPES: BEGIN OF line1, col1 TYPE i, col2 TYPE i, END OF line1, t_itab1 TYPE SORTED
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_delete_abexa.htm"
abapFile: "abenmesh_delete_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "types", "abenmesh", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm) →  [DELETE mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_delete.htm) → 

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