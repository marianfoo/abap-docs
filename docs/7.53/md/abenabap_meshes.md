  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) → 

Meshes

Meshes are instances of the following defined mesh types:

[TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm)
  ...
  TYPES snode ... [ASSOCIATION \_assoc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm)
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm)

These are special [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_glosry.htm "Glossary Entry") whose components (referred to as nodes) are either structured internal tables or reference variables that point to structured internal tables.

The addition [ASSOCIATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh_association.htm) makes it possible to define [mesh associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_association_glosry.htm "Glossary Entry") (using ON conditions) between start nodes and target nodes of the mesh. These semantic relationships between the mesh nodes can be evaluated in mesh paths. The mesh paths can be used in expressions and processing statements for meshes.

-   [Mesh paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm)

-   [Results of mesh paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm)

Notes

-   A mesh node is addressed in the same way as a normal structure component; by using the structure component selector (\-) or the object component selector (\->). The associations are evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm). If no path is specified, the mesh node is handled in the same way as a normal structure component. The same applies to field symbols or reference variables that point to mesh nodes. The statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm) also handles a mesh like a normal structure.

-   In a simple case, the relationships (implemented using associations) between mesh nodes can be compared to [foreign key dependencies](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry"). Here the start node of an association is the check table and the target node is the foreign key table. The use of mesh paths makes it easier to evaluate these relationships, without the need to program the relevant selections.

Example

The program DEMO\_MESH\_PACK demonstrates an application based on meshes, which analyses the repository objects in packages. All the possible uses of meshes are demonstrated and can be precisely analyzed in the debugger.

Continue
[Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm)
[Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm)