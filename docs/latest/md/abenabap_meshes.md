---
title: "Meshes"
description: |
  Meshes are instances of mesh types defined as follows: TYPES BEGIN OF MESH(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh.htm) ... TYPES snode ... ASSOCIATION _assoc(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm) T
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm"
abapFile: "abenabap_meshes.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "field-symbol", "abenabap", "meshes"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%2C%20ABENABAP_MESHES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Meshes

Meshes are instances of mesh types defined as follows:

[TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh.htm)
  ...
  TYPES snode ... [ASSOCIATION \_assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm)
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh.htm)

These are special [structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_glosry.htm "Glossary Entry") whose components, which are referred to as nodes, are either structured internal tables or reference variables that refer to such internal tables.

The addition [ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm) can be used to declare [mesh associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_association_glosry.htm "Glossary Entry") defined using ON conditions between start nodes and target nodes of the mesh. These semantic relationships between the mesh nodes can be evaluated in mesh paths. The mesh paths can be used in expressions and processing statements for meshes.

-   [Mesh paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_pathes.htm)
-   [Results of mesh paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm)

Hints

-   A mesh node is addressed in the same way as a regular structure component; by using the structure component selector (\-) or the object component selector (\->). Mesh associations are evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path.htm). If no path is specified, a mesh node is handled in the same way as a regular structure component. The same applies to field symbols or reference variables that point to mesh nodes. The statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove-corresponding.htm) also handles a mesh like a regular structure.
-   In the simplest case, the relationships implemented between mesh nodes using mesh associations can be compared to [foreign key dependencies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry"). Here, the start node of a mesh association is the check table and the target node is the foreign key table. The use of mesh paths makes it easier to evaluate these relationships, without the need to program the relevant selections.

Example

The program DEMO\_MESH\_PACK demonstrates an application based on meshes, which analyses the repository objects in packages. All the possible uses of meshes are demonstrated and can be specifically analyzed in the debugger.

Continue
[Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_pathes.htm)
[Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm)