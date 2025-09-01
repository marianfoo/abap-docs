  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm) →  [Meshes - Mesh Path Result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result.htm) → 

Meshes - Result of a Path Extension

A path extension with the [syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm)

...[\\\_assoc1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc.htm)\[ *\[* [cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm)*\]* \] [\\\_assoc2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc.htm)\[ *\[*[cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm)*\]* \] ...

describes a set of rows in the last path node. Each association specified in a mesh path with path extension describes a set of rows in its follow-on node. This set is used as a starting point for their follow-on nodes of the rows and meets the following conditions:

-   All rows meet the [ON condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) of the association used with respect to the set of rows described in the preceding association. Every tcomp column specified in the ON condition has the same content as in the scomp column (of the root node a row of its result) assigned to the ON condition.

-   Depending on the mesh path [usage](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm), the set of rows can be further restricted by using additional [cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm) conditions.

In the set of rows described by a path extension, each row occurs only once, even if it was found more than once in the evaluation of the mesh path.

Note

The set of rows described by the result can be either one single row or multiple rows.

Executable Example

[Results of Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_result_abexas.htm)