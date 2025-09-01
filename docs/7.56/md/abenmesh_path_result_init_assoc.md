  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_pathes.htm) →  [Meshes - Result of Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result.htm) → 

Meshes - Result of the Initial Mesh Association

An initial mesh association with the [syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm)

...rnode[\\\_associ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm)\[ source *\[*[cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm)*\]* \] ...

describes a set of lines in the follow-on node of the used mesh association that meets the following conditions:

-   All lines meet the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the used mesh association with respect to the specified structure source. Every tcomp column specified in the ON condition has the same content as in the scomp column of the root node in the source structure that is assigned to the ON condition.
-   Depending on the mesh path [usage](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_usage.htm), the set of lines can be further restricted by using additional [cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm) conditions.

Hint

The set of lines described by the result can be either one line or multiple lines.

Executable Examples

[Results of Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result_abexas.htm)