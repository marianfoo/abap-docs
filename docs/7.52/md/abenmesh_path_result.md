  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_pathes.htm) → 

Meshes - Mesh Path Result

The mesh path result is a description of a set of rows in the last node path node of the expression. The result is used in statements and expressions for [using mesh paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) (with one exception); either for navigating in the last path node or for manipulating the last path node. The exception is statement [SET ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_set_association.htm), which works with the second last path node.

-   [Result of initial association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_init_assoc.htm)

-   [Result of path extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_chaining.htm)

Notes

-   At runtime, the mesh path result expresses the relationship (defined by associations) between the start node and follow-on node. The result is managed internally by the ABAP runtime environment and in line with [Using Meth Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm).

-   Loops implemented with [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_loop.htm) or [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for.htm) are suitable for gaining read access to all the rows described by the mesh path result.

Continue
[Meshes - Result of Initial Association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_init_assoc.htm)
[Meshes - Result of a Path Extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_chaining.htm)
[Meshes - Example of Results of Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_result_abexas.htm)