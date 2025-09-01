  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP05](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20in%20ABAP%20Release%207.40%2C%20SP05%2C%20ABENNEWS-740_SP05-MESH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Meshes in ABAP Release 7.40, SP05

[1\. Data Types for Meshes](#!ABAP_MODIFICATION_1@1@)
[2\. Processing Meshes](#!ABAP_MODIFICATION_2@2@)

The [meshes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_meshes.htm) (introduced in ABAP release 7.40 SP05) are special structures whose components are internal tables, which can be linked to each other using mesh associations. Mesh associations are evaluated by specifying mesh paths in suitable expressions and statements.

Modification 1   

Data Types for Meshes

Mesh types can be created using the following new variant of the TYPES statement:

[TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh.htm)
  ...
  TYPES snode ... [ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh_association.htm) \_assoc
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh.htm)

Meshes are instances of these types and can be used in suitable expressions and statements.

Modification 2   

Processing Meshes

These relationships (defined using mesh associations) between mesh nodes in a mesh can be evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_pathes.htm). These mesh paths can be [used](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_usage.htm) in the following expressions and statements:

-   [... mesh\_path ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_expression.htm)
-   [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_loop.htm)
-   [FOR ... IN mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_for.htm)
-   [INSERT ... INTO ... mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_insert.htm)
-   [MODIFY ... mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_modify.htm)
-   [DELETE ... mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_delete.htm)
-   [SET ASSOCIATION mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_set_association.htm)