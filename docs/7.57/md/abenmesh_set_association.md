---
title: "Syntax"
description: |
  SET ASSOCIATION mesh_path(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm)  = wa       LIKE wa    INITIAL . Additions: 1. ... = wa(#!ABAP_ADDITION_1@1@) 2. ... LIKE wa(#!ABAP_ADDITION_2@2@) 3. ... INITIAL(#!ABAP_ADDITION_3@3@) Effect S
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_set_association.htm"
abapFile: "abenmesh_set_association.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "field-symbol", "abenmesh", "set", "association"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_usage.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET ASSOCIATION mesh_path, ABENMESH_SET_ASSOCIATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

SET ASSOCIATION mesh\_path

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_association_shortref.htm)

Syntax

SET ASSOCIATION [mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm) *{* = wa    *}*
                        *|* *{* LIKE wa *}*
                        *|* *{* INITIAL *}*.

Additions:

[1\. ... = wa](#!ABAP_ADDITION_1@1@)
[2\. ... LIKE wa](#!ABAP_ADDITION_2@2@)
[3\. ... INITIAL](#!ABAP_ADDITION_3@3@)

Effect

Sets mesh associations for a [mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm). The statement takes columns in the second last path node of the mesh path that are specified as scomp in the [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh_association.htm) of the mesh association starting with this node and sets these columns to values that are determined by the additions on the right side. The content of the last path node is ignored.

-   If the mesh path only contains one [initial mesh association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm), the second last node is the root node of the path whose content is neither read nor changed. Instead, the columns of the structure specified by the ON condition are set. The structure is specified as the source in the square brackets of the mesh association. The square brackets must not contain any [additional conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm).
-   If the mesh path contains [path extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm), it is evaluated down to the second last node. The columns specified using the ON condition are changed in the lines of the second last path node, which are described in the [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_result_chaining.htm). All mesh associations but the last one of the mesh path can contain additional conditions, which can be specified using [USING KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm). The square brackets \[ \] for the mesh association of the last path extension must be empty.

The last mesh association of the mesh path is used only to determine the modifying components using their ON condition, therefore the last association cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm).

Hints

-   Using the statement SET ASSOCIATION, mesh association-relevant components can be set in structures and mesh nodes, without needing to know the component names. These structures can be used, for example, to build mesh nodes.
-   Using the statement SET ASSOCIATION, change operations can be performed that provide additional options to those offered by the statements [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_insert.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_insert.htm).
-   A mesh path that only contains an initial mesh association can also be used to modify mesh nodes by using a field symbol or data reference in source to reference a line in a mesh node.

Addition 1   

... = wa

Effect

Assigns columns of a work area wa. The work area wa must be a structure with the same line type as the last path node.

The content of the components of wa that are listed in the [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path as tcomp is assigned to the assigned components scomp of the structure source or to the assigned columns of the lines found in the second last path node.

Hint

In terms of semantics, key values in an instance of an entry node of a mesh association are set as they are in an instance of a follow-on node.

Addition 2   

... LIKE wa

Effect

Assigns columns of a work area wa. The work area wa must be a structure with the same line type as the second last path node.

The content of the components of wa is specified in the [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path as scomp. This content is assigned to the identically named components in the structure source or to the identically named columns of the lines found in the second last path node.

Hint

In terms of semantics, key values in an instance of an entry node of a mesh association are set as they are in a different instance of the same node.

Addition 3   

... INITIAL

Effect

Assigns initial values

All components of source or all columns of the lines found in the second last path node that are specified in the [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path as scomp are assigned their type-dependent initial value.

Hint

In terms of semantics, key values in an instance of an entry node of a mesh association are initialized.

Continue
![Example](exa.gif "Example") [Meshes - Setting Mesh Associations for Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_set_association_abexa.htm)