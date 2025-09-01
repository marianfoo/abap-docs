  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

INSERT mesh\_path

Syntax

INSERT [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)) INTO TABLE [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) [result](javascript:call_link\('abapinsert_itab_result.htm'\)).

Effect

Inserts rows in the last path node of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)). As in [inserts](javascript:call_link\('abapinsert_itab.htm'\)) into a directly specified table using [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)), the position of the inserted rows is determined using the primary table key. The behavior when duplicate rows are encountered with respect to unique table keys is also the same. When specifying the inserted rows using [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)), the same applies when inserting rows in directly specified tables and they must be compatible with the row type of the last path node.

A set of rows with the row type of the last path node is instantiated from line\_spec and the [result](javascript:call_link\('abenmesh_path_result.htm'\)) of the mesh path. This set is inserted in the last path node in accordance with the rules of [INSERT](javascript:call_link\('abapinsert_itab.htm'\)):

-   For each row in [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)) or for each row in an inserted table, the same number of rows are created as described by the [result](javascript:call_link\('abenmesh_path_result.htm'\)). If the mesh path contains only the initial associations, one row is created; in the case of path extensions, multiple rows can be created.

-   In the new rows, the columns in the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the last association of the mesh path are filled as follows:

-   If the mesh path contains only an initial association, each of these columns is filled with the current comparison value from source.

-   If the mesh path contains path extensions, each of these columns is filled with the value described by the result of the preceding association.

The remaining components have the value of the rows specified in [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)).

The following applies when specifying the associations:

-   If the mesh path contains only an initial association, the square brackets cannot contain an [additional condition](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)).

-   If the mesh path contains path extensions, all associations can contain additional conditions, which can be specified using the additions [USING KEY](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) and [WHERE log\_exp](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)). The square brackets \[ \] for the association of the last path extension must be empty.

The number of rows inserted is the number of rows specified in lin\_spec multiplied by the number or rows described in [result](javascript:call_link\('abenmesh_path_result.htm'\)). If, due to an additional WHERE condition, the results set is empty, no rows are inserted.

[result](javascript:call_link\('abapinsert_itab_result.htm'\)) can be used to specified the output behavior when precisely one row is specified, as in [INSERT](javascript:call_link\('abapinsert_itab.htm'\)). Since more than one row is always inserted when path extensions are used, the addition result can only be specified in the following cases:

-   If the variant LINES OF is not used in [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)).

-   The mesh path contains only the initial association.

The return code sy-subrc is set in the same way as in the corresponding statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)).

Notes

-   When INITIAL LINE is used to specify an initial row in [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)), only those components remain initial that are not specified in the ON condition.

-   The square brackets of the association of the last path extension are empty, since it needs only to indicate the mesh node in which the rows are inserted.

Executable Examples

-   [Insertions in Mesh Paths](javascript:call_link\('abenmesh_insert_abexa.htm'\))

-   [Table Builds Using Mesh Paths](javascript:call_link\('abenmesh_build_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Insertions in Mesh Paths](javascript:call_link\('abenmesh_insert_abexa.htm'\))
![Example](exa.gif "Example") [Table Builds Using Mesh Paths](javascript:call_link\('abenmesh_build_abexa.htm'\))