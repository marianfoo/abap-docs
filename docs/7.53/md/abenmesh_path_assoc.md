  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm) →  [Meshes - mesh\_path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm) → 

Meshes - \\\_assoc\[ ... \]

Syntax Forms

... \\\_assoc*\[*+*|*\**\]*\[ ... \]
  *|* \\\_assoc~node*\[*+*|*\**\]*\[ ... \]
  *|* \\^\_assoc~node*\[*+*|*\**\]*\[ ... \] ...

Variants:

[1\. ... \\\_assoc](#!ABAP_VARIANT_1@1@)
[2\. ... \\\_assoc~node](#!ABAP_VARIANT_2@2@)
[3\. ... \\^\_assoc~node](#!ABAP_VARIANT_3@3@)

Extras:

[1\. ... \[ ... \]](#!ABAP_ADDITION_1@1@)
[2\. ... +*|*\*](#!ABAP_ADDITION_2@2@)

Effect

Specifies an association in a [mesh path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm). If specified, an association is introduced using a backslash character, \\, and is always directly to the right of a source node of the mesh path. An association leads from its source node to a follow-on node in the same mesh. An association is either an initial association, [\\\_associ\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm), in which the source node of the explicitly specified [root node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm) is at the start of a mesh path, or it is a path extension, [\\\_assoc1\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm), [\\\_assoc2\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm), ..., in which the source node is the follow-on node of a preceding association.

The syntax variants defined whether the association is a forward association or an inverse association.. The addition in square brackets \[ \] defines the table row of the source node from which the association originates at runtime. The optional additions + or \* can be used to make associations transitive.

Note

In the [definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) of an association, its nodes are known as start and target nodes. In evaluations, however, they are known as source and follow-on nodes. In a forward association, the source node is always a start node and the follow-on node is always a target node. In inverse associations, the reverse applies.

Variant 1

... \\\_assoc

Variant 2

... \\\_assoc~node

Effect

Specifies a forward association In a forward association, the source node is a start node and the follow-on node is a target node of an association [\_assoc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) of the mesh. Both variants have the same semantics. \_assoc is used to specify the name of an association defined for the source node in the [mesh type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm). The follow-on node is the target node of this association and can be specified as node after ~ in alternative 2.

Note

The follow-on node node can be specified explicitly for logging purposes (on the consumer side). If the recommended naming convention with the prefix to\_ in front of the name of the target node is used for [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm), however, it is redundant.

Variant 3

... \\^\_assoc~node

Effect

Specifies an inverse association. In an inverse association, the source node is a target node and the follow-on node is a start node of an association [\_assoc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) of the mesh. \_assoc is used to specify the name of an association that has the source node as a target node in the [mesh type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm). The start node of the association in question must be specified explicitly as the follow-on node using node after ~.

Notes

-   The follow-on node node must be specified since the source node can be the target node of various associations of a mesh type with the same name.

-   An inverse association can also be specified for a reflexive association with the same start node and target node.

Example

Forward associations and an inverse association as initial associations of mesh paths.

TYPES:
  BEGIN OF MESH mesh,
    node1 TYPE REF TO itab1 ASSOCIATION \_node2 TO node2 ON ...
    node2 TYPE REF TO itab2,
  END OF MESH mesh.
DATA(mesh) = VALUE mesh( ... ).
"Forward associations
... mesh-node1\\\_node2\[ ... \] ...
... mesh-node1\\\_node2~node2\[ ... \] ...
"Inverse association
... mesh-node2\\^\_node2~node1\[ ... \] ...

Addition 1

... \[ ... \]

Effect

The square brackets are part of the syntax. The square brackets define the table row of the source node from which the association originates at runtime. This information is determined by whether the association is an initial association or a path extension and where the mesh path is used:

-   \[ source *\[*[cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm)*\]* \]

Specifies a structure source as a source in an initial association [\\\_associ\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm).

-   \[ *\[*[cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm)*\]* \]

Specifies (implicitly) the source in a path extension [\\\_assoc1\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm), [\\\_assoc2\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm). The source is the result of the preceding association.

Depending on where the association is used, further conditions [cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm) can be specified. If no further conditions are specified, the square brackets of an initial association contain only source and the square brackets of a path extension are empty.

Executable Example

[Mesh Path Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_table_expressions_abexa.htm)

Addition 2

... +*|*\*

Effect

An optional + or \* can be specified after the name of the association to make it transitive. To be used transitively, the association [\_assoc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) must be reflexive and have the same start and target node. If the last association in the mesh path is used transitively, it can only be used for single rows with [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_loop.htm) and [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_loop.htm) or [DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_delete.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_delete.htm)

If an association is used transitively, it is evaluated more than once when the mesh path is used. First, the regular [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm) of the association is determined. Starting with this result, the association is evaluated recursively until no new rows are found in the follow-on node. Here, the result of each evaluation is the starting point of the next recursion. The results set of the transitive association is the union set of the individual recursions

The variants + and \* differ as follows:

-   If + is specified, the results set is only determined by the [results](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm) of the associations.

-   If \* is specified, the source of the association is included in the results set. If the association is the initial association, the row is determined from the specified source source using the primary table key and it cannot be empty. If no rows are found, the results set is empty.

Each row of the follow-on node occurs only once in the results set, even if it was found more than once when the mesh path was evaluated.

Notes

-   Transitive associations are useful for evaluating hierarchical structures within a mesh node.

-   For a results set created with +, a row of an initial association described using source does not need to exist in the internal table to ensure that this set is not empty. If \* is used, however, this row must exist.

Executable Example

[Reflexive Associations in Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_for_reflex_sngl_abexa.htm)

Continue
[Meshes - \[ ... cond \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm)