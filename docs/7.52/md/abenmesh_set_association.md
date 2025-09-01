---
title: "Syntax"
description: |
  SET ASSOCIATION mesh_path(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm)  = wa       LIKE wa    INITIAL . Extras: 1. ... = wa(#!ABAP_ADDITION_1@1@) 2. ... LIKE wa(#!ABAP_ADDITION_2@2@) 3. ... INITIAL(#!ABAP_ADDITION_3@3@) Effect Sets
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_set_association.htm"
abapFile: "abenmesh_set_association.htm"
keywords: ["insert", "do", "if", "data", "types", "field-symbol", "abenmesh", "set", "association"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) → 

SET ASSOCIATION mesh\_path

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_association_shortref.htm)

Syntax

SET ASSOCIATION [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm) *{* = wa    *}*
                        *|* *{* LIKE wa *}*
                        *|* *{* INITIAL *}*.

Extras:

[1\. ... = wa](#!ABAP_ADDITION_1@1@)
[2\. ... LIKE wa](#!ABAP_ADDITION_2@2@)
[3\. ... INITIAL](#!ABAP_ADDITION_3@3@)

Effect

Sets associations for a [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm). The statement sets columns in the second last path node of the mesh path. These columns are specified as scomp in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the association starting with the node. The columns are set on values that are specified by the additions on the right side. The content of the last path node is ignored.

-   If the mesh path only contains one [initial association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm), the second last node is the root node of the path and the corresponding content is neither read nor changed. Instead the columns specified by the ON condition are set for the structure, which is specified as the source in the square brackets of the association. The square brackets cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm).

-   If the mesh path contains [path extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm), it is evaluated down to the second last node. The columns specified using the ON condition are changed in the rows of the second last path node, which are described in the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_chaining.htm). All associations (except the last one) of the mesh path can contain additional conditions, which can be specified using [USING KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm). The square brackets \[ \] for the association of the last path extension must be empty.

The last association of the mesh path is only required to determine the components to be changed (using the ON condition). Therefore the last association cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm).

Notes

-   Using the statement SET ASSOCIATION, association-relevant components can be set in structures and mesh nodes, without needing to know the component names. These structures can be used, for example, to build mesh nodes.

-   Using statement SET ASSOCIATION, change operations can be performed that provide additional options to those offered by statements [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_insert.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_insert.htm).

-   A mesh path that only contains an initial association can also be used to modify mesh nodes. This can be done by using a field symbol or data reference in source to reference a row in a mesh node.
    

Addition 1

... = wa

Effect

Assigns columns of a work area wa. The work area wa must be a structure with the same row type as the last path node.

The contents of the components of wa are specified in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the last association of the mesh path as tcomp. These contents are assigned to the allocated components scomp in the structure source (or assigned to the allocated columns of the rows found in the second last path node).

Note

In terms of semantics, key values in an instance of a start node of an association are set as they are in an instance of a follow-on node.

Addition 2

... LIKE wa

Effect

Assigns columns of a work area wa. The work area wa must be a structure with the same row type as the second last path node.

The contents of the components of wa are specified in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the last association of the mesh path as scomp. These contents are assigned to the identically named components in the structure source (or assigned to the identically named columns of the rows found in the second last path node).

Note

In terms of semantics, key values in an instance of a start node of an association are set as they are in a different instance of the same node.

Addition 3

... INITIAL

Effect

Assigns initial values

All components of source (or all columns of the rows found in the second last path node) specified in the [ON condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) of the last association of the mesh path as scomp are assigned their type-dependent initial value.

Note

In terms of semantics, key values in an instance of a start node of an association are initialized.

Continue
![Example](exa.gif "Example") [Setting Associations for Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_set_association_abexa.htm)