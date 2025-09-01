  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Mesh Paths](javascript:call_link\('abenmesh_pathes.htm'\)) →  [Meshes - Mesh Path Result](javascript:call_link\('abenmesh_path_result.htm'\)) →  [Meshes - Example of Results of Mesh Paths](javascript:call_link\('abenmesh_path_result_abexas.htm'\)) → 

Reflexive Associations in Mesh Paths

This example demonstrates the results of reflexive associations in mesh paths.

Source Code

REPORT demo\_mesh\_reflexive\_assoc\_sngl.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
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
    CLASS-DATA
      mesh TYPE t\_mesh.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(id) = 1.
    cl\_demo\_input=>request( CHANGING field = id ).
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node'
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
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
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
START-OF-SELECTION.
  demo=>main( ).

Description

In a reflexive association, the source and target nodes are the same node. A reflexive association implements semantic dependencies between the rows of a mesh node. This example shows the results sets of reflexive associations for an internal table saved in a hierarchical tree structure.

-   Simple reflexive association

mesh-node\\\_node\[ mesh-node\[ id = id \] \]

The results set includes all rows in which (in accordance with the ON condition), the column parent\_id is the same as the column id of the source. In the tree hierarchy, these are the direct subnodes of the row described using source.

-   Transitive association with +

mesh-node\\\_node+\[ mesh-node\[ id = id \] \]

The results set also includes all further rows for which, based on the first results set, the ON condition is met. In the tree hierarchy, these are all subnodes of the row described using source.

-   Transitive association with \*

mesh-node\\\_node\*\[ mesh-node\[ id = id \] \]

The results set also includes the row described by source.