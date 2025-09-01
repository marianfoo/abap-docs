  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05.htm) → 

Meshes in Release 7.40, SP05

[1\. Data types for meshes](#!ABAP_MODIFICATION_1@1@)

[2\. Processing meshes](#!ABAP_MODIFICATION_2@2@)

The [meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) (introduced in Release 7.40 SP05) are special structures whose components are internal tables, which can be linked to each other using associations. Associations are evaluated by specifying mesh paths in suitable expressions and statements.

Modification 1

Data Types for Meshes

Mesh types can be created using the following new variant of the TYPES statement:

[TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh.htm)
  ...
  TYPES snode ... [ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) \_assoc
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh.htm)

Meshes are instances of these types and can be used in suitable expressions and statements.

Modification 2

Processing Meshes

These relationships (defined using associations) between mesh nodes in a mesh can be evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_pathes.htm). These mesh paths can be [used](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) in the following expressions and statements:

-   [... mesh\_path ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_expression.htm)

-   [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_loop.htm)

-   [FOR ... IN mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for.htm)

-   [INSERT ... INTO ... mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_insert.htm)

-   [MODIFY ... mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify.htm)

-   [DELETE ... mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_delete.htm)

-   [SET ASSOCIATION mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_set_association.htm)