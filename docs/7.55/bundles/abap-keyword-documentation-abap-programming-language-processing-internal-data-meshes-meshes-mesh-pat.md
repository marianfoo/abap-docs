# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Meshes / Meshes - Mesh Paths / Meshes - Result of Mesh Paths

Included pages: 8


### abenmesh_path_result.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) → 

Meshes - Result of Mesh Paths

The mesh path result is a description of a set of lines in the last node path node of the expression. The result is used in statements and expressions for [using mesh paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_usage.htm) (with one exception); either for navigating in the last path node or for manipulating the last path node. The exception is statement [SET ASSOCIATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_set_association.htm), which works with the second last path node.

-   [Result of the initial mesh association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_init_assoc.htm)

-   [Result of a path extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_chaining.htm)

Hints

-   At runtime, the mesh path result expresses the relationship defined by mesh associations between the source node and follow-on node. The result is managed internally by the ABAP runtime environment and evaluated in line with [Using Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_usage.htm).

-   Loops implemented with [LOOP AT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_loop.htm) or [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for.htm) are suitable for performing reads on all the lines described by the mesh path result.

Continue
[Meshes - Result of the Initial Mesh Association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_init_assoc.htm)
[Meshes - Result of a Path Extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_chaining.htm)
[Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_abexas.htm)


### abenmesh_path_result_init_assoc.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) → 

Meshes - Result of the Initial Mesh Association

An initial mesh association with the [syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path.htm)

...rnode[\\\_associ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc.htm)\[ source *\[*[cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc_cond.htm)*\]* \] ...

describes a set of lines in the follow-on node of the used mesh association that meets the following conditions:

-   All lines meet the [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) of the used mesh association with respect to the specified structure source. Every tcomp column specified in the ON condition has the same content as in the scomp column of the root node in the source structure that is assigned to the ON condition.

-   Depending on the mesh path [usage](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_usage.htm), the set of lines can be further restricted by using additional [cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc_cond.htm) conditions.

Hint

The set of lines described by the result can be either one line or multiple lines.

Executable Examples

[Results of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_abexas.htm)


### abenmesh_path_result_chaining.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) → 

Meshes - Result of a Path Extension

A path extension with the [syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path.htm)

...[\\\_assoc1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc.htm)\[ *\[* [cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc_cond.htm)*\]* \] [\\\_assoc2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc.htm)\[ *\[*[cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc_cond.htm)*\]* \] ...

describes a set of lines in the last path node.

Result when used in a loop

Each mesh association specified in a mesh path with path extension describes a set of lines in its follow-on node that is used as a starting point for its follow-on nodes of the lines and meets the following conditions:

-   All lines meet the [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) of the mesh association used in relation to the set of lines described in the preceding mesh association. Every tcomp column listed in the ON condition has the same content as in the scomp column of the source node assigned in the ON condition in a line of its result.

-   Depending on the mesh path [usage](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_usage.htm), the set of lines can be further restricted by using additional [cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc_cond.htm) conditions.

In the set of lines described by a path extension, each line occurs only once, even if it was found more than once in the evaluation of the mesh path.

Result when used in a table expression

Each mesh association specified in a mesh path with path extension selects a single line in its follow-on node (or fails with one exception). This line is used as the starting point for the follow-on node in accordance with the conditions described above.

Hint

The set of lines described by the result can be either one line or multiple lines.

Executable Example

[Results of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_abexas.htm)


### abenmesh_path_result_abexas.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) → 

Meshes - Example of Results of Mesh Paths

Continue
![Example](exa.gif "Example") [Meshes - Forward Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for_forward_abexa.htm)
![Example](exa.gif "Example") [Meshes - Inverse Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for_inverse_abexa.htm)
![Example](exa.gif "Example") [Meshes - Reflexive Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for_reflex_sngl_abexa.htm)


### abenmesh_for_forward_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) →  [Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_abexas.htm) → 

Meshes - Forward Associations in Mesh Paths

This example demonstrates the results of forward associations in mesh paths.

Source Code

REPORT demo\_mesh\_forward\_assoc.
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
                   WITH UNIQUE KEY col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH UNIQUE KEY col1 col2,
      BEGIN OF line3,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line3,
      t\_itab3 TYPE SORTED TABLE OF line3
                   WITH UNIQUE KEY col1 col2 col3,
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
    DATA(idx) = 1.
    cl\_demo\_input=>request( CHANGING field = idx ).
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    IF line\_exists( mesh-node1\[ idx \] ).
      out->next\_section( 'node1\\\_node2'
        )->write( VALUE t\_itab2(
           FOR <node2> IN
             mesh-node1\\\_node2\[ mesh-node1\[ idx \] \]
             ( <node2> ) ) ).
      out->next\_section( 'node1\\\_node2\\\_node3'
        )->write( VALUE t\_itab3(
           FOR <node3> IN
             mesh-node1\\\_node2\[ mesh-node1\[ idx \] \]\\\_node3\[ \]
             ( <node3> ) ) ).
    ELSE.
      out->write( \`Enter a valid index for node1 ...\` ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE t\_itab1(
      ( col1 = 1 )
      ( col1 = 2 )
      ( col1 = 3 ) ).
    mesh-node2 = VALUE t\_itab2(
      ( col1 = 1  col2 = 11 )
      ( col1 = 1  col2 = 12 )
      ( col1 = 2  col2 = 21 )
      ( col1 = 2  col2 = 22 )
      ( col1 = 3  col2 = 31 )
      ( col1 = 3  col2 = 32 ) ).
    mesh-node3 = VALUE t\_itab3(
      ( col1 = 1  col2 = 11 col3 = 111 )
      ( col1 = 1  col2 = 11 col3 = 112 )
      ( col1 = 1  col2 = 12 col3 = 121 )
      ( col1 = 1  col2 = 12 col3 = 122 )
      ( col1 = 2  col2 = 21 col3 = 211 )
      ( col1 = 2  col2 = 21 col3 = 212 )
      ( col1 = 2  col2 = 22 col3 = 221 )
      ( col1 = 2  col2 = 22 col3 = 222 )
      ( col1 = 3  col2 = 31 col3 = 311 )
      ( col1 = 3  col2 = 31 col3 = 312 )
      ( col1 = 3  col2 = 32 col3 = 321 )
      ( col1 = 3  col2 = 32 col3 = 322 ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Table comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for.htm) are used to construct and return internal tables that are described using forward associations in the mesh nodes mesh-node2 and mesh-node3.


### abenmesh_for_inverse_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) →  [Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_abexas.htm) → 

Meshes - Inverse Associations in Mesh Paths

This example demonstrates the results of inverse mesh associations in mesh paths.

Source Code

REPORT demo\_mesh\_inverse\_assoc.
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
                   WITH UNIQUE KEY col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      t\_itab2 TYPE SORTED TABLE OF line2
                   WITH UNIQUE KEY col1 col2,
      BEGIN OF line3,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line3,
      t\_itab3 TYPE SORTED TABLE OF line3
                   WITH UNIQUE KEY col1 col2 col3,
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
    DATA(idx) = 1.
    cl\_demo\_input=>request( CHANGING field = idx ).
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'node1'
      )->write( mesh-node1
      )->next\_section( 'node2'
      )->write( mesh-node2
      )->next\_section( 'node3'
      )->write( mesh-node3 ).
    IF line\_exists( mesh-node3\[ idx \] ).
      out->next\_section( 'node3\\^\_node3~node2'
        )->write( VALUE t\_itab2(
           FOR <node2> IN
             mesh-node3\\^\_node3~node2\[ mesh-node3\[ idx \] \]
             ( <node2> ) ) ).
      out->next\_section( 'node3\\^\_node3~node2\\^\_node2~node1'
        )->write( VALUE t\_itab1(
           FOR <node1> IN
             mesh-node3\\^\_node3~node2\[ mesh-node3\[ idx \]
                                       \]\\^\_node2~node1\[ \]
             ( <node1> ) ) ).
    ELSE.
      out->write( \`Enter a valid index for node3 ...\` ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    mesh-node1 = VALUE t\_itab1(
      ( col1 = 1 )
      ( col1 = 2 )
      ( col1 = 3 ) ).
    mesh-node2 = VALUE t\_itab2(
      ( col1 = 1  col2 = 11 )
      ( col1 = 1  col2 = 12 )
      ( col1 = 2  col2 = 21 )
      ( col1 = 2  col2 = 22 )
      ( col1 = 3  col2 = 31 )
      ( col1 = 3  col2 = 32 ) ).
    mesh-node3 = VALUE t\_itab3(
      ( col1 = 1  col2 = 11 col3 = 111 )
      ( col1 = 1  col2 = 11 col3 = 112 )
      ( col1 = 1  col2 = 12 col3 = 121 )
      ( col1 = 1  col2 = 12 col3 = 122 )
      ( col1 = 2  col2 = 21 col3 = 211 )
      ( col1 = 2  col2 = 21 col3 = 212 )
      ( col1 = 2  col2 = 22 col3 = 221 )
      ( col1 = 2  col2 = 22 col3 = 222 )
      ( col1 = 3  col2 = 31 col3 = 311 )
      ( col1 = 3  col2 = 31 col3 = 312 )
      ( col1 = 3  col2 = 32 col3 = 321 )
      ( col1 = 3  col2 = 32 col3 = 322 ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Table comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for.htm) are used to construct and return internal tables that are described using inverse mesh associations in the mesh nodes mesh-node2 and mesh-node1.


### abenmesh_for_reflex_sngl_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) →  [Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result_abexas.htm) → 

Meshes - Reflexive Associations in Mesh Paths

This example demonstrates the results of reflexive mesh associations in mesh paths.

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


### abenmesh_path_result_abexas.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_result.htm) → 

Meshes - Example of Results of Mesh Paths

Continue
![Example](exa.gif "Example") [Meshes - Forward Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for_forward_abexa.htm)
![Example](exa.gif "Example") [Meshes - Inverse Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for_inverse_abexa.htm)
![Example](exa.gif "Example") [Meshes - Reflexive Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for_reflex_sngl_abexa.htm)
