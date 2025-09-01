---
title: "Syntax"
description: |
  MODIFY  TABLE mesh_path(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) USING KEY keyname(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) FROM wa TRANSPORTING comp1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_modify.htm"
abapFile: "abenmesh_modify.htm"
keywords: ["do", "if", "data", "types", "internal-table", "abenmesh", "modify"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) → 

MODIFY mesh\_path

Syntax

MODIFY *{* TABLE [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm)*\]*
                         FROM wa
                         *\[*TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_components.htm) ...*\]*
                         [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_result.htm) *}*
     *|* *{* [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) FROM wa
                   *\[*TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_components.htm) ...*\]* *}*.

Variants:

[1\. MODIFY TABLE mesh\_path FROM wa ...](#!ABAP_VARIANT_1@1@)
[2\. MODIFY mesh\_path FROM wa ...](#!ABAP_VARIANT_2@2@)

Addition:

[... TRANSPORTING comp1 comp2 ...](#!ABAP_ONE_ADD@1@)

Effect

Modifies a single row or multiple rows in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm). In the row or rows described by the mesh path, the following columns are assigned the corresponding values from the work area wa:

-   If the optional addition TRANSPORTING is not specified, all columns are modified

-   that are not in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the mesh association in question,

-   that are no part of the primary key of the last path node, if the table is a sorted table or a hashed table.

-   If the optional addition TRANSPORTING is specified, the columns after it are modified

wa expects a structure that is compatible with the row type of the last path node. No key fields of primary or secondary table keys in the last path node can be overwritten. The return code sy-subrc is set in the same way as in the corresponding statement [MODIFY itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm).

Note

Note that the addition TABLE (as in [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm)) is highly significant for directly specified internal tables and distinguishes different variants of statements from each other.

Variant 1

MODIFY TABLE mesh\_path FROM wa ...

Effect

Modifies precisely one row in the follow-on node of an [initial mesh association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm). In this variant, no path extensions can be specified and the square brackets of the initial mesh association cannot contain any [additional conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm). The row to be modified is determined using the table key:

-   If the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the mesh association covers all key fields of the table key it uses, the modified row is determined using the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result_init_assoc.htm) of the mesh path. Here, only those fields of the ON condition are respected that are also key fields.

-   If the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the mesh association in question does not cover the key fields of the table key it uses, the missing key fields are taken from the associated components of the work area wa.

The row is modified in accordance with the rules of [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm). If the follow-on node contains multiple rows that match the specified key, the first row found is modified. If the row to be modified is not found, nothing is modified. The key in question can be specified using the addition USING KEY, just as in the statement [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_single.htm) with directly specified internal table. [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_result.htm) can be used to specify the output behavior.

Note

Columns of the follow-on node that are specified in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) but are not part of the table key used are always ignored in this variant. This means that the row to be modified cannot be determined beyond the bounds of the table key.

Executable Example

[Changing Single Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_modify_table_abexa.htm)

Variant 2

MODIFY mesh\_path FROM wa ...

Effect

Modifies multiple rows in the last path node of a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm). Modifies all rows in the last path node described by the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result.htm) of the mesh path. An additional condition can be specified in the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc.htm) of each mesh association of the mesh path using the additions [USING KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm). In the last mesh association, the addition USING KEY cannot be specified if it is specified after FROM wa.

Executable Example

[Changing Multiple Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_modify_abexa.htm)

Addition

... TRANSPORTING comp1 comp2 ...

Effect

The same applies to the addition TRANSPORTING as to the statement [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_single.htm) with directly specified internal table, with the restriction that no columns can be specified that are part of the primary key of the last path node if the table is a sorted table or hashed table.

Note

The TRANSPORTING addition can also be used to modify columns that are specified in the [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_mesh_association.htm) of the mesh association in question.

Continue
![Example](exa.gif "Example") [Changing Single Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_modify_table_abexa.htm)
![Example](exa.gif "Example") [Changing Multiple Rows in Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_modify_abexa.htm)