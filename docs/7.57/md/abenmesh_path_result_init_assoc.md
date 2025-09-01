  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Mesh Paths](javascript:call_link\('abenmesh_pathes.htm'\)) →  [Meshes - Result of Mesh Paths](javascript:call_link\('abenmesh_path_result.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes - Result of the Initial Mesh Association, ABENMESH_PATH_RESULT_INIT_ASSOC, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes - Result of the Initial Mesh Association

An initial mesh association with the [syntax](javascript:call_link\('abenmesh_path.htm'\))

...rnode[\\\_associ](javascript:call_link\('abenmesh_path_assoc.htm'\))\[ source *\[*[cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\))*\]* \] ...

describes a set of lines in the follow-on node of the used mesh association that meets the following conditions:

-   All lines meet the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the used mesh association with respect to the specified structure source. Every tcomp column specified in the ON condition has the same content as in the scomp column of the root node in the source structure that is assigned to the ON condition.
-   Depending on the mesh path [usage](javascript:call_link\('abenmesh_path_usage.htm'\)), the set of lines can be further restricted by using additional [cond](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) conditions.

Hint

The set of lines described by the result can be either one line or multiple lines.

Executable Examples

[Results of Mesh Paths](javascript:call_link\('abenmesh_path_result_abexas.htm'\))