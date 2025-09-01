  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

DELETE mesh\_path

Syntax

DELETE *{* TABLE [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) *}*
     *|* *{* [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) *}*.

Variants:

[1\. DELETE TABLE mesh\_path table\_key.](#!ABAP_VARIANT_1@1@)
[2\. DELETE mesh\_path.](#!ABAP_VARIANT_2@2@)

Effect

Deletes a single row or multiple rows from the last path node of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)).

Note

Note that the addition TABLE (as in [DELETE](javascript:call_link\('abapdelete_itab.htm'\))) is highly significant for directly specified internal tables and distinguishes different variants of statements from each other.

Variant 1

DELETE TABLE mesh\_path table\_key.

Effect

Deletes precisely one row from the follow-on node of an [initial association](javascript:call_link\('abenmesh_path.htm'\)). In this variant, no path extensions can be specified and the square brackets of the initial association cannot contain any [additional conditions](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)). The row to be modified is determined using the table key:

-   If the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the association covers all key fields of the table key it uses, the deleted row is determined using the [result](javascript:call_link\('abenmesh_path_result_init_assoc.htm'\)) of the mesh path. Here, only those fields of the ON condition are respected that are also key fields.

-   If the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) of the association does not cover the key fields of the table key it uses, the missing key fields must be specified in the addition [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) and these are combined with the [result](javascript:call_link\('abenmesh_path_result_init_assoc.htm'\)) of the mesh path. The same can be specified for [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) as in the statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) [TABLE itab](javascript:call_link\('abapdelete_itab_line.htm'\)) with a directly specified internal table:

-   If [WITH TABLE KEY](javascript:call_link\('abapdelete_itab_key.htm'\)) is used, all key fields not covered by the ON condition must be specified. No key fields can be specified that are already covered by the ON condition. Furthermore, all fields of the follow-on node used in the ON condition must exist in the table key used by the association.

-   Only those components are taken from a work area specified using [FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\)) that match the non-covered key fields. All other components are ignored. The work area wa must be compatible with the row type of the last path node.

If a table key is specified in [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) using keynmame COMPONENTS or USING keyname, this key overrides any [USING KEY](javascript:call_link\('abaptypes_mesh_association.htm'\))s specified in the definition of the association. The row is deleted with respect to this table key and its key fields must be covered in full.

The row is deleted in accordance with the rules of [DELETE](javascript:call_link\('abapdelete_itab.htm'\)). If the follow-on node contains multiple rows that match the specified key, the first row found is deleted. If the row to be deleted is not found, nothing is deleted.

The return code sy-subrc is set in the same way as in the corresponding statement [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)).

Notes

-   If the ON condition covers all key fields, the addition [WITH TABLE KEY](javascript:call_link\('abapdelete_itab_key.htm'\)) cannot be specified. The addition [FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\)) can be specified, but is ignored.

-   If no explicit table key is specified in the definition of the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) and in the statement DELETE TABLE mesh\_path, the row is deleted with respect to the primary table key.

-   Columns of the follow-on node that are specified in the [ON condition](javascript:call_link\('abaptypes_mesh_association.htm'\)) but are not part of the table key used are either forbidden or ignored in this variant. This means that the row to be deleted cannot be determined beyond the bounds of the table key.

Executable Example

[Deleting Single Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_table_abexa.htm'\))

Variant 2

DELETE mesh\_path.

Effect

Deletes multiple rows from the last path node of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)). Deletes all rows from the last path node described by the [result](javascript:call_link\('abenmesh_path_result.htm'\)) of the mesh path. An additional condition can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each association of the mesh path using the additions [USING KEY](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) and [WHERE log\_exp](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)).

Executable Example

[Deleting Multiple Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Deleting Single Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_table_abexa.htm'\))
![Example](exa.gif "Example") [Deleting Multiple Rows in Mesh Paths](javascript:call_link\('abenmesh_delete_abexa.htm'\))