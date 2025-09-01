  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%20mesh_path%2C%20ABENMESH_INSERT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT mesh\_path

Syntax

INSERT [line\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm) INTO TABLE [mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path.htm) [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_result.htm).

Effect

Inserts lines in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path.htm). As in [inserts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm) into a directly specified table using [INTO TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_position.htm), the position of the lines to be inserted is determined using the primary table key. The behavior for duplicate lines encountered with respect to unique table keys is also the same. When specifying the inserted lines using [line\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm), the same applies when inserting lines into directly specified internal tables and they must be compatible with the line type of the last path node.

A set of lines with the line type of the last path node is instantiated internally from the specification in line\_spec and the [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result.htm) of the mesh path. This set is inserted into the last path node in accordance with the rules of [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm):

-   For each line in [line\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm) or for each line in a table to be inserted, the same number of lines is created as described by the [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result.htm). If the mesh path contains only the initial mesh associations, one line is created. In the case of path extensions, multiple lines can be created.
-   In the new lines, the columns in the [ON condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_mesh_association.htm) of the last mesh association of the mesh path are filled as follows:
    
    -   If the mesh path contains only an initial mesh association, each of these columns is filled with the current comparison value from source.
    -   If the mesh path contains path extensions, each of these columns is filled with the value described by the result of the preceding mesh association.
    
    The remaining components have the value of the lines specified in [line\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm).
    

The following applies when specifying the mesh associations:

-   If the mesh path contains only an initial mesh association, the square brackets cannot contain an [additional condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_assoc_cond.htm).
-   If the mesh path contains path extensions, all mesh associations can contain additional conditions using the additions [USING KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_assoc_cond.htm). The square brackets \[ \] for the mesh association of the last path extension must be empty.

The number of lines to be inserted is the number of lines specified in lin\_spec multiplied by the number of lines described in [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_result.htm). If, due to an additional WHERE condition, the result set is empty, no lines are inserted.

[result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_result.htm) can be used to specify the output behavior when exactly one line is inserted, as in [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm). Since more than one line can be inserted when path extensions are used, the addition result can only be specified in the following cases:

-   If the variant LINES OF is not used in [line\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm).
-   The mesh path contains only the initial mesh association.

The return code sy-subrc is set in the same way as in the corresponding statement [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm).

Hints

-   When INITIAL LINE is used to specify an initial line in [line\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm), only those components remain initial that are not specified in the ON condition.
-   The square brackets of the mesh association of the last path extension are empty, since it needs only to indicate the mesh node in which the lines are inserted.

Executable Examples

-   [Insertions in Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_insert_abexa.htm)
-   [Table Builds Using Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_build_abexa.htm)

Continue
![Example](exa.gif "Example") [Meshes - Insertions in Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_insert_abexa.htm)
![Example](exa.gif "Example") [Meshes - Table Builds Using Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_build_abexa.htm)