---
title: "Meshes - Result of a Path Extension"
description: |
  A path extension with the syntax(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path.htm) ..._assoc1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_assoc.htm)  cond(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_result_chaining.htm"
abapFile: "abenmesh_path_result_chaining.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "types", "abenmesh", "path", "result", "chaining"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_result.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Result%20of%20a%20Path%20Extension%2C%20ABENMESH_PATH_RESULT_CHAINING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Meshes - Result of a Path Extension

A path extension with the [syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path.htm)

...[\\\_assoc1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_assoc.htm)\[ *\[* [cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_assoc_cond.htm)*\]* \] [\\\_assoc2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_assoc.htm)\[ *\[*[cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_assoc_cond.htm)*\]* \] ...

describes a set of lines in the last path node.

Result when Used in a Loop

Each mesh association specified in a mesh path with path extension describes a set of lines in its follow-on node that is used as a starting point for its follow-on nodes of the lines and meets the following conditions:

-   All lines meet the [ON condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm) of the mesh association used in relation to the set of lines described in the preceding mesh association. Every tcomp column listed in the ON condition has the same content as in the scomp column of the entry node assigned in the ON condition in a line of its result.
-   Depending on the mesh path [usage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm), the set of lines can be further restricted by using additional [cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_assoc_cond.htm) conditions.

In the set of lines described by a path extension, each line occurs only once, even if it was found more than once in the evaluation of the mesh path.

Result when Used in a Table Expression

Each mesh association specified in a mesh path with path extension selects a single line in its follow-on node (or fails with one exception). This line is used as the starting point for the follow-on node in accordance with the conditions described above.

Hint

The set of lines described by the result can be either one line or multiple lines.

Executable Example

[Results of Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_result_abexas.htm)