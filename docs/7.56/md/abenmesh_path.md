---
title: "Syntax"
description: |
  ... mesh-<mesh>-mesh_ref->rnode _associ ...(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) (https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) _assoc1 ... (https://help.sap.com/doc/abapdocu_756_ind
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm"
abapFile: "abenmesh_path.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abenmesh", "path"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_pathes.htm) → 

Meshes - mesh\_path

Syntax

... *{*mesh-*|*<mesh>-*|*mesh\_ref->*}*rnode [\\\_associ\[ ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) [\]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) [\\\_assoc1\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm)[\\\_assoc2\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) ...

Additions:

[1\. ... *{*mesh-*|*<mesh>-*|*mesh\_ref->*}*rnode](#!ABAP_ADDITION_1@1@)
[2\. ... \\\_associ\[ source *\[*cond*\]* \]](#!ABAP_ADDITION_2@2@)
[3\. ... \\\_assoc1\[ *\[*cond*\]* \]\\\_assoc2\[ *\[*cond*\]* \] ...](#!ABAP_ADDITION_3@3@)

Effect

Specifies a mesh path in [statements and expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_usage.htm) used to process meshes. A mesh path is always constructed as follows:

-   A root node rnode specification
-   An initial mesh association \\\_associ specification between a root node and a follow-on node
-   Optional further mesh associations \\\_assoc1, \\\_assoc2, ... specifications whose start nodes can be the follow-on nodes of preceding mesh associations.

When specifying a mesh path, it is not significant whether the address nodes of the mesh are internal tables or references to internal tables. When a mesh path is evaluated, references to internal tables are dereferenced automatically. A mesh path describes a set of lines in its final path node as its [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result.htm).

Hint

A mesh path cannot exit a mesh. Each follow-on node is part of the same mesh as the root node. Meshes can, however, be nested by specified a [mesh path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_expression.htm) as the source of the initial mesh association.

Addition 1   

... *{*mesh-*|*<mesh>-*|*mesh\_ref->*}*rnode

Effect

Root node rnode of a mesh path. rnode is a node of a [mesh type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_type_glosry.htm "Glossary Entry") that must be the start node or target node of a [mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh type. The same options are available when specifying the mesh as when addressing regular structure components:

-   mesh-rnode
    
    mesh is a mesh, that is, a data object of the respective [mesh type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_type_glosry.htm "Glossary Entry"). The root node is addressed using the structure component selector (\-).
    
-   <mesh>-rnode
    
    <mesh> is a field symbol typed with the mesh type and to which a mesh is assigned. The root node is addressed using the structure component selector (\-).
    
-   mesh\_ref->rnode
    
    mesh\_ref is a reference variable whose static type is the mesh type and that points to a mesh. The root node is addressed using the object component selector (\->).
    

Example

Definition of a mesh type mesh with internal tables and a mesh type refmesh with references to internal tables as components. A data object mesh has the type mesh and a data object meshref points to a data object of type refmesh. The root node of the first mesh path is mesh-node1. The structure component selector is used here. The root node of the second mesh path is node1 in the anonymous data object of type refmesh, for which the object component selector is used. The references within the mesh are dereferenced implicitly.

TYPES:
  BEGIN OF MESH mesh,
    node1 TYPE itab1 ASSOCIATION \_assoc2 TO node2 ON ...
    node2 TYPE itab2,
  END OF MESH mesh,
  BEGIN OF MESH refmesh,
    node1 TYPE REF TO itab1 ASSOCIATION \_assoc2 TO node2 ON ...
    node2 TYPE REF TO itab2,
  END OF MESH refmesh.
DATA(mesh) =    VALUE mesh( ).
DATA(meshref) = NEW refmesh( VALUE refmesh( ) ).
... mesh-node1\\\_assoc2\[ ... \] ...
... meshref->node1\\\_assoc2\[ ... \] ...

Addition 2   

... \\\_associ\[ source *\[*cond*\]* \]

Effect

Initial mesh association of a mesh path. Each mesh path has an initial mesh association specified after its root node. For \\\_associ\[ ... \], all mesh associations [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) suitable for the root node can be specified, namely:

-   [Forward associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) with a [mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh type that has the root node as the start node.
-   [Inverse mesh associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) with a [mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh type that has the root node as the target node.

The syntax used to specify the line of the entry node in the square brackets of the mesh association [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) is

\[ source *\[*[cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm)*\]* \]

A structure source of the line type of the root node must be specified as the source of the mesh association. This is a [general expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). When the mesh path is evaluated, the content of source is used as the starting point of the mesh association. Here, the evaluation of the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh association used and any additional conditions [cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm) produces a description of a set of lines of the follow-on node as a [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result_init_assoc.htm).

Hint

A structure specified as source does not need to occur as a line in the root node. It is a good idea to use a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry") that read a line from the root node. A [mesh path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_expression.htm) can, however, also be specified to nest meshes.

Example

Forward associations and an inverse mesh association as initial mesh associations of mesh paths. Table expressions that read a line from the root node are used as sources of the mesh associations.

TYPES:
  BEGIN OF MESH mesh,
    node1 TYPE itab1 ASSOCIATION \_assoc2 TO node2 ON ...
    node2 TYPE itab2,
  END OF MESH mesh.
DATA(mesh) = VALUE mesh( ... ).
... mesh-node1\\\_assoc2\[ mesh-node1\[ ... \] \] .
... mesh-node1\\\_assoc2~node2\[ mesh-node1\[ ... \] \] .
... mesh-node2\\^\_assoc2~node1\[ mesh-node2\[ ... \] \].

Addition 3   

... \\\_assoc1\[ *\[*cond*\]* \]\\\_assoc2\[ *\[*cond*\]* \] ...

Effect

Path extension of a mesh path. Any number of further mesh associations can be chained after the initial mesh association. All mesh associations [\\\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) can be specified for \\\_assoc1, \\\_assoc2, ... that match the entry node in question, namely:

-   [Forward associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) with a [mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh type that has the entry node as the start node.
-   [Inverse mesh associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) with a [mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh type that has the entry node as the target node.

The syntax used to specify the line of the start node in the square brackets of the mesh association [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) is

\[ *\[*[cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm)*\]* \]

When the mesh path is evaluated, the result of the preceding mesh association, that is, the description of a set of lines in the entry node, is used as the starting point of the mesh association. Here, the evaluation of the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh association used and any additional conditions [cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm) produces a description of a set of lines of the follow-on node as a [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result_chaining.htm). If no further conditions are specified, the square brackets are empty.

Example

Path extension of the initial mesh association. The follow-on node of the initial mesh association is node2 and this node is the entry node of the path extension. The result of the entire mesh path is a description of lines in node3. The result of the initial mesh association, whose starting point is defined by a table expression, is the implicit source of the path extension.

TYPES:
  BEGIN OF MESH mesh,
    node1 TYPE itab1 ASSOCIATION \_assoc2 TO node2 ON ...
    node2 TYPE itab2 ASSOCIATION \_assoc3 TO node3 ON ...
    node3 TYPE itab3,
  END OF MESH mesh.
DATA(mesh) = VALUE mesh( ).
... mesh-node1\\\_assoc2\[ mesh-node1\[ ... \] \]\\\_assoc3\[  \] ...

Continue
[Meshes - \\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm)