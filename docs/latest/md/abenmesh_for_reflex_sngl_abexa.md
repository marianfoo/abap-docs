---
title: "Meshes - Reflexive Associations in Mesh Paths"
description: |
  This example demonstrates the results of reflexive mesh associations in mesh paths. Source Code  Public class definition CLASS cl_demo_mesh_rflxv_assoc_sngl DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIV
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_for_reflex_sngl_abexa.htm"
abapFile: "abenmesh_for_reflex_sngl_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "abenmesh", "for", "reflex", "sngl", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_result.htm) →  [Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_result_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Reflexive%20Associations%20in%20Mesh%20Paths%2C%20ABENMESH_FOR_REFLEX_SNGL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

Meshes - Reflexive Associations in Mesh Paths

This example demonstrates the results of reflexive mesh associations in mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_rflxv\_assoc\_sngl DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        id        TYPE i,
        parent\_id TYPE i,
        name      TYPE string,
      END OF line,
      t\_itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id
             WITH NON-UNIQUE SORTED KEY by\_parent COMPONENTS parent\_id,
      BEGIN OF MESH t\_mesh,
        node TYPE t\_itab
             ASSOCIATION \_node TO node ON parent\_id = id
                         USING KEY by\_parent,
      END OF MESH t\_mesh.
    DATA
      mesh TYPE t\_mesh.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_rflxv\_assoc\_sngl IMPLEMENTATION.
  METHOD main.
    DATA(id) = 1.
    cl\_demo\_input=>new( )->request( CHANGING field = id ).
    out->begin\_section( 'node'
      )->write( mesh-node ).
    IF line\_exists( mesh-node\[ id = id \] ).
      out->next\_section( '\\\_node'
        )->write( VALUE t\_itab(
           FOR <node> IN mesh-node\\\_node\[ mesh-node\[ id = id \] \]
              ( <node> ) ) ).
      out->next\_section( '\\\_node+'
        )->write( VALUE t\_itab(
           FOR <node> IN mesh-node\\\_node+\[ mesh-node\[ id = id \] \]
              ( <node> ) ) ).
      out->next\_section( '\\\_node\*'
        )->write( VALUE t\_itab(
           FOR <node> IN mesh-node\\\_node\*\[ mesh-node\[ id = id \] \]
              ( <node> ) ) ) ##PRIMKEY\[BY\_PARENT\].
    ELSE.
      out->write( \`Enter a valid ID ...\` ).
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    mesh-node = VALUE t\_itab(
        ( id = 1  parent\_id = 0 name = 'AA'          )
        ( id = 2  parent\_id = 1 name = 'AA-AA'       )
        ( id = 3  parent\_id = 2 name = 'AA-AA-AA'    )
        ( id = 4  parent\_id = 2 name = 'AA-AA-BB'    )
        ( id = 5  parent\_id = 1 name = 'AA-BB'       )
        ( id = 6  parent\_id = 5 name = 'AA-BB-AA'    )
        ( id = 7  parent\_id = 6 name = 'AA-BB-AA-AA' )
        ( id = 8  parent\_id = 6 name = 'AA-BB-AA-BB' )
        ( id = 9  parent\_id = 5 name = 'AA-BB-BB'    )
        ( id = 10 parent\_id = 9 name = 'AA-BB-BB-AA' )
        ( id = 11 parent\_id = 1 name = 'AA-CC'       )
        ( id = 12 parent\_id = 0 name = 'BB'          )
        ( id = 13 parent\_id = 0 name = 'CC'          ) ).
  ENDMETHOD.
ENDCLASS.

Description   

In a reflexive mesh association (self-association), the source and target nodes are the same. A reflexive mesh association implements semantic relationships between the lines of a mesh node. This example shows the result sets of reflexive mesh associations for an internal table in which a hierarchical tree structure is stored.

-   Simple reflexive mesh association
    
    mesh-node\\\_node\[ mesh-node\[ id = id \] \]
    
    The result set includes all lines in which, in accordance with the ON condition, the column parent\_id is the same as the column id of the source. In the tree hierarchy, these are the direct subnodes of the line described using source.
    
-   Transitive mesh association with +
    
    mesh-node\\\_node+\[ mesh-node\[ id = id \] \]
    
    The result set also includes all further lines for which, based on the first result set, the ON condition is met. In the tree hierarchy, these are all subnodes of the line described using source.
    
-   Transitive mesh association with \*
    
    mesh-node\\\_node\*\[ mesh-node\[ id = id \] \]
    
    The result set also includes the line described by source.