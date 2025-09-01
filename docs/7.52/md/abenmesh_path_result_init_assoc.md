  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Mesh Paths](javascript:call_link\('abenmesh_pathes.htm'\)) →  [Meshes - Mesh Path Result](javascript:call_link\('abenmesh_path_result.htm'\)) → 

Meshes - Result of Initial Association

An initial association with the [syntax](javascript:call_link\('abenmesh_path.htm'\))

...rnode[\\\_associ](javascript:call_link\('abenmesh_path_assoc.htm'\))\[ source *\[*[cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\))*\]* \] ...

describes a set of rows in the follow-on node of the used association that meets the following conditions:

-   All rows meet the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the used association with respect to the specified structure source. Every tcomp column specified in the ON condition has the same content as in the scomp column (of the root node in the source structure) assigned to the ON condition.

-   Depending on the mesh path [usage](javascript:call_link\('abenmesh_path_usage.htm'\)), the set of rows can be further restricted by using additional [cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) conditions.

Note

The set of rows described by the result can be either one single row or multiple rows.

Executable Examples

[Results of Mesh Paths](javascript:call_link\('abenmesh_path_result_abexas.htm'\))