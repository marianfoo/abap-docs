  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes in Release 7.40, SP05, ABENNEWS-740_SP05-MESH, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes in Release 7.40, SP05

[1\. Data Types for Meshes](#!ABAP_MODIFICATION_1@1@)
[2\. Processing Meshes](#!ABAP_MODIFICATION_2@2@)

The [meshes](javascript:call_link\('abenabap_meshes.htm'\)) (introduced in Release 7.40 SP05) are special structures whose components are internal tables, which can be linked to each other using mesh associations. Mesh associations are evaluated by specifying mesh paths in suitable expressions and statements.

Modification 1   

Data Types for Meshes

Mesh types can be created using the following new variant of the TYPES statement:

[TYPES BEGIN OF MESH](javascript:call_link\('abaptypes_mesh.htm'\))
  ...
  TYPES snode ... [ASSOCIATION](javascript:call_link\('abaptypes_mesh_association.htm'\)) \_assoc
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](javascript:call_link\('abaptypes_mesh.htm'\))

Meshes are instances of these types and can be used in suitable expressions and statements.

Modification 2   

Processing Meshes

These relationships (defined using mesh associations) between mesh nodes in a mesh can be evaluated in [mesh paths](javascript:call_link\('abenmesh_pathes.htm'\)). These mesh paths can be [used](javascript:call_link\('abenmesh_path_usage.htm'\)) in the following expressions and statements:

-   [... mesh\_path ...](javascript:call_link\('abenmesh_path_expression.htm'\))
-   [LOOP AT mesh\_path](javascript:call_link\('abenmesh_loop.htm'\))
-   [FOR ... IN mesh\_path](javascript:call_link\('abenmesh_for.htm'\))
-   [INSERT ... INTO ... mesh\_path](javascript:call_link\('abenmesh_insert.htm'\))
-   [MODIFY ... mesh\_path](javascript:call_link\('abenmesh_modify.htm'\))
-   [DELETE ... mesh\_path](javascript:call_link\('abenmesh_delete.htm'\))
-   [SET ASSOCIATION mesh\_path](javascript:call_link\('abenmesh_set_association.htm'\))