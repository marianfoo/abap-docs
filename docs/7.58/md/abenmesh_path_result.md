  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_pathes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Result%20of%20Mesh%20Paths%2C%20ABENMESH_PATH_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Meshes - Result of Mesh Paths

The mesh path result is a description of a set of lines in the last node path node of the expression. The result is used in statements and expressions for [using mesh paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_usage.htm) (with one exception); either for navigating in the last path node or for manipulating the last path node. The exception is statement [SET ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_set_association.htm), which works with the second last path node.

-   [Result of the initial mesh association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result_init_assoc.htm)
-   [Result of a path extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result_chaining.htm)

Hints

-   At runtime, the mesh path result expresses the relationship defined by mesh associations between the entry node and follow-on node. The result is managed internally by the ABAP runtime framework and evaluated in line with [Using Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_usage.htm).
-   Loops implemented with [LOOP AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_loop.htm) or [FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_for.htm) are suitable for performing reads on all the lines described by the mesh path result.

Continue
[Meshes - Result of the Initial Mesh Association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result_init_assoc.htm)
[Meshes - Result of a Path Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result_chaining.htm)
[Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result_abexas.htm)