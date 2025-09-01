---
title: "Meshes - Table Builds Using Mesh Paths"
description: |
  This example demonstrates how a table is built using a mesh path. Source Code  Public class definition CLASS cl_demo_mesh_insrt_bld_table DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. TYPES:
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_build_abexa.htm"
abapFile: "abenmesh_build_abexa.htm"
keywords: ["insert", "loop", "do", "if", "method", "class", "data", "types", "abenmesh", "build", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_usage.htm) →  [INSERT mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_insert.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Table%20Builds%20Using%20Mesh%20Paths%2C%20ABENMESH_BUILD_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Meshes - Table Builds Using Mesh Paths

This example demonstrates how a table is built using a mesh path.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_insrt\_bld\_table DEFINITION
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
    DATA
      mesh TYPE t\_mesh.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_insrt\_bld\_table IMPLEMENTATION.
  METHOD main.
    out->begin\_section( 'node1'
      )->write( mesh-node1 ).
    out->next\_section(
      'Building node2 from node1\\\_node2' ).
    DO lines( mesh-node1 ) TIMES.
      INSERT VALUE line2( col2 = 20 + sy-index ) INTO TABLE
        mesh-node1\\\_node2\[ mesh-node1\[ sy-index \] \].
    ENDDO.
    out->write( mesh-node2 ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    mesh-node1 = VALUE #(
      ( col1 = 11  )
      ( col1 = 12  )
      ( col1 = 13  ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The empty mesh node mesh-node2 is built from the filled node mesh-node1 using the statement INSERT. To do this, all lines from mesh-node1 are used as the source of the initial mesh association \\\_node2 of the mesh path in a DO loop and a line is inserted in mesh-node2 for each line from mesh-node1. The value of the column col1 is taken from mesh-node1 and a new value for the column col2 is created.