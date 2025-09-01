  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_result.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes - Result of a Path Extension, ABENMESH_PATH_RESULT_CHAINING, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes - Result of a Path Extension

A path extension with the [syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm)

...[\\\_assoc1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc.htm)\[ *\[* [cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm)*\]* \] [\\\_assoc2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc.htm)\[ *\[*[cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm)*\]* \] ...

describes a set of lines in the last path node.

Result when Used in a Loop

Each mesh association specified in a mesh path with path extension describes a set of lines in its follow-on node that is used as a starting point for its follow-on nodes of the lines and meets the following conditions:

-   All lines meet the [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh_association.htm) of the mesh association used in relation to the set of lines described in the preceding mesh association. Every tcomp column listed in the ON condition has the same content as in the scomp column of the entry node assigned in the ON condition in a line of its result.
-   Depending on the mesh path [usage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_usage.htm), the set of lines can be further restricted by using additional [cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm) conditions.

In the set of lines described by a path extension, each line occurs only once, even if it was found more than once in the evaluation of the mesh path.

Result when Used in a Table Expression

Each mesh association specified in a mesh path with path extension selects a single line in its follow-on node (or fails with one exception). This line is used as the starting point for the follow-on node in accordance with the conditions described above.

Hint

The set of lines described by the result can be either one line or multiple lines.

Executable Example

[Results of Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_result_abexas.htm)