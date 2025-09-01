  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) → 

INSERT mesh\_path

Syntax

INSERT [line\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm) INTO TABLE [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm).

Effect

Inserts rows in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm). As in [inserts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm) into a directly specified table using [INTO TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_position.htm), the position of the inserted rows is determined using the primary table key. The behavior when duplicate rows are encountered with respect to unique table keys is also the same. When specifying the inserted rows using [line\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm), the same applies when inserting rows in directly specified tables and they must be compatible with the row type of the last path node.

A set of rows with the row type of the last path node is instantiated from line\_spec and the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result.htm) of the mesh path. This set is inserted in the last path node in accordance with the rules of [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm):

-   For each row in [line\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm) or for each row in an inserted table, the same number of rows are created as described by the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result.htm). If the mesh path contains only the initial mesh associations, one row is created; in the case of path extensions, multiple rows can be created.

-   In the new rows, the columns in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path are filled as follows:

-   If the mesh path contains only an initial mesh association, each of these columns is filled with the current comparison value from source.

-   If the mesh path contains path extensions, each of these columns is filled with the value described by the result of the preceding mesh association.

The remaining components have the value of the rows specified in [line\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm).

The following applies when specifying the mesh associations:

-   If the mesh path contains only an initial mesh association, the square brackets cannot contain an [additional condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm).

-   If the mesh path contains path extensions, all mesh associations can contain additional conditions, which can be specified using the additions [USING KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm). The square brackets \[ \] for the mesh association of the last path extension must be empty.

The number of rows inserted is the number of rows specified in lin\_spec multiplied by the number or rows described in [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result.htm). If, due to an additional WHERE condition, the results set is empty, no rows are inserted.

[result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm) can be used to specified the output behavior when precisely one row is specified, as in [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm). Since more than one row is always inserted when path extensions are used, the addition result can only be specified in the following cases:

-   If the variant LINES OF is not used in [line\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm).

-   The mesh path contains only the initial mesh association.

The return code sy-subrc is set in the same way as in the corresponding statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm).

Notes

-   When INITIAL LINE is used to specify an initial row in [line\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm), only those components remain initial that are not specified in the ON condition.

-   The square brackets of the mesh association of the last path extension are empty, since it needs only to indicate the mesh node in which the rows are inserted.

Executable Examples

-   [Insertions in Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_insert_abexa.htm)

-   [Table Builds Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_build_abexa.htm)

Continue
![Example](exa.gif "Example") [Insertions in Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_insert_abexa.htm)
![Example](exa.gif "Example") [Table Builds Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_build_abexa.htm)