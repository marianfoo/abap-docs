  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Mesh Paths](javascript:call_link\('abenmesh_pathes.htm'\)) →  [Meshes - Mesh Path Result](javascript:call_link\('abenmesh_path_result.htm'\)) → 

Meshes - Result of a Path Extension

A path extension with the [syntax](javascript:call_link\('abenmesh_path.htm'\))

...[\\\_assoc1](javascript:call_link\('abenmesh_path_assoc.htm'\))\[ *\[* [cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\))*\]* \] [\\\_assoc2](javascript:call_link\('abenmesh_path_assoc.htm'\))\[ *\[*[cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\))*\]* \] ...

describes a set of rows in the last path node. Each association specified in a mesh path with path extension describes a set of rows in its follow-on node. This set is used as a starting point for their follow-on nodes of the rows and meets the following conditions:

-   All rows meet the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the association used with respect to the set of rows described in the preceding association. Every tcomp column specified in the ON condition has the same content as in the scomp column (of the root node a row of its result) assigned to the ON condition.

-   Depending on the mesh path [usage](javascript:call_link\('abenmesh_path_usage.htm'\)), the set of rows can be further restricted by using additional [cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) conditions.

In the set of rows described by a path extension, each row occurs only once, even if it was found more than once in the evaluation of the mesh path.

Note

The set of rows described by the result can be either one single row or multiple rows.

Executable Example

[Results of Mesh Paths](javascript:call_link\('abenmesh_path_result_abexas.htm'\))