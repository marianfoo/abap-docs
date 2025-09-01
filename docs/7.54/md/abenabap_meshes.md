  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Meshes

Meshes are instances of the following defined mesh types:

[TYPES BEGIN OF MESH](javascript:call_link\('abaptypes_mesh.htm'\))
  ...
  TYPES snode ... [ASSOCIATION \_assoc](javascript:call_link\('abaptypes_mesh_association.htm'\))
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](javascript:call_link\('abaptypes_mesh.htm'\))

These are special [structures](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") whose components (referred to as nodes) are either structured internal tables or reference variables that point to structured internal tables.

The addition [ASSOCIATION](javascript:call_link\('abaptypes_mesh_association.htm'\)) makes it possible to define [mesh associations](javascript:call_link\('abenmesh_association_glosry.htm'\) "Glossary Entry") (using ON conditions) between start nodes and target nodes of the mesh. These semantic relationships between the mesh nodes can be evaluated in mesh paths. The mesh paths can be used in expressions and processing statements for meshes.

-   [Mesh paths](javascript:call_link\('abenmesh_pathes.htm'\))

-   [Results of mesh paths](javascript:call_link\('abenmesh_path_usage.htm'\))

Notes

-   A mesh node is addressed in the same way as a normal structure component; by using the structure component selector (\-) or the object component selector (\->). The mesh associations are evaluated in [mesh paths](javascript:call_link\('abenmesh_path.htm'\)). If no path is specified, the mesh node is handled in the same way as a normal structure component. The same applies to field symbols or reference variables that point to mesh nodes. The statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) also handles a mesh like a normal structure.

-   In a simple case, the relationships (implemented using mesh associations) between mesh nodes can be compared to [foreign key dependencies](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry"). Here the start node of a mesh association is the check table and the target node is the foreign key table. The use of mesh paths makes it easier to evaluate these relationships, without the need to program the relevant selections.

Example

The program DEMO\_MESH\_PACK demonstrates an application based on meshes, which analyses the repository objects in packages. All the possible uses of meshes are demonstrated and can be precisely analyzed in the debugger.

Continue
[Meshes - Mesh Paths](javascript:call_link\('abenmesh_pathes.htm'\))
[Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\))