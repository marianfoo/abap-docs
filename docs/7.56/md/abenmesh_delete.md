  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_usage.htm) → 

DELETE mesh\_path

Syntax

DELETE *{* TABLE [mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm) [table\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) *}*
     *|* *{* [mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm) *}*.

Variants:

[1\. DELETE TABLE mesh\_path table\_key.](#!ABAP_VARIANT_1@1@)
[2\. DELETE mesh\_path.](#!ABAP_VARIANT_2@2@)

Effect

Deletes one or more lines from the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm).

Hint

It should be noted that the addition TABLE is highly significant for directly specified internal tables, as in [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm), and distinguishes different variants of statements from each other.

Variant 1   

DELETE TABLE mesh\_path table\_key.

Effect

Deletes exactly one line from the follow-on node of an [initial mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm). In this variant, no path extensions can be specified, and the square brackets of the initial mesh association cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm). The line to be modified is determined using the table key:

-   If the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh association used covers all key fields of the table key it uses, the line to be deleted is determined using the [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result_init_assoc.htm) of the mesh path. Here, only those fields of the ON condition are respected that are also key fields.
-   If the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) of the mesh association used does not cover the key fields of the table key it uses, the missing key fields must be specified in the addition [table\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) and these are combined with the [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result_init_assoc.htm) of the mesh path. The same can be specified for [table\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) as in the statement [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm) [TABLE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_line.htm) with a directly specified internal table:
    
    -   [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) must be used to specify all key fields not covered by the ON condition. No key fields can be specified that are already covered by the ON condition. Furthermore, all fields of the follow-on node used in the ON condition must exist in the table key used by the mesh association.
    -   Only those components are taken from a work area specified using [FROM wa](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) that match the non-covered key fields. All other components are ignored. The work area wa must be compatible with the line type of the last path node.
    
    If a table key is specified in [table\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) using keyname COMPONENTS or USING keyname, this key overrides any [USING KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) additions specified in the definition of the mesh association. The line is deleted with respect to this table key and its key fields must be completely covered.
    

The line is deleted in accordance with the rules of [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm). If the follow-on node contains multiple lines that match the specified key, the first line found is deleted. If the line to be deleted is not found, nothing is deleted.

The return code sy-subrc is set in the same way as in the corresponding statement [DELETE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm).

Hints

-   If the ON condition covers all key fields, the addition [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) cannot be specified. The addition [FROM wa](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_key.htm) can be specified, but is ignored.
-   If no explicit table key is specified in the definition of the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) and in the statement DELETE TABLE mesh\_path, the line is deleted with respect to the primary table key.
-   Columns of the follow-on node that are listed in the [ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm) but are not part of the table key used are either forbidden or ignored in this variant. This means that the line to be deleted cannot be determined beyond the bounds of the table key.

Executable Example

[Deleting Single Lines in Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_delete_table_abexa.htm)

Variant 2   

DELETE mesh\_path.

Effect

Deletes multiple lines from the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm). All lines from the last path node described by the [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_result.htm) of the mesh path are deleted. An additional condition can be specified in the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc.htm) of each mesh association of the mesh path using the additions [USING KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm).

Executable Example

[Deleting Multiple Lines in Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_delete_abexa.htm)

Continue
![Example](exa.gif "Example") [Meshes - Deleting Single Lines in Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_delete_table_abexa.htm)
![Example](exa.gif "Example") [Meshes - Deleting Multiple Lines in Mesh Paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_delete_abexa.htm)