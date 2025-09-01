  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_pathes.htm) →  [Meshes - mesh\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path.htm) →  [Meshes - \\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc.htm) → 

Meshes - \[ ... cond \]

Syntax Forms

... *{* col1 = val1 col2 = val2 ... *}*
  *|* *{* *\[*USING KEY key*\]* *\[*WHERE log\_exp*\]* *}* ...

Variants:

[1\. ... col1 = val1 col2 = val2 ...](#!ABAP_VARIANT_1@1@)
[2\. ... *\[*USING KEY key*\]* *\[*WHERE log\_exp*\]*](#!ABAP_VARIANT_2@2@)

Effect

Specifies an additional condition in the square brackets, [\[ ... \]](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_assoc.htm), of a mesh association in a [mesh path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path.htm). In an initial mesh association, a condition of this type can be specified alongside the structure source. In the case of a path extension, the square brackets contain an additional condition or are empty.

Variant 1

... col1 = val1  col2 = val2 ...

Effect

Additional condition when using mesh paths in [mesh path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_expression.htm). col1, col2, ... can be used to specify columns of the follow-on node of the mesh association that do not already occur in their [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm). Each of these columns is assigned a value val1, val2, ... Their content must match this value to meet the condition. val1, val2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The additional condition is joined with the [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) to create a full condition. In the case of an initial mesh association, the comparison values of the ON condition are specified explicitly as a structure source. In the case of a path extension, the comparison values are taken from the result set of the preceding mesh association.

Executable Example

[Mesh Path Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_table_expressions_abexa.htm)

Variant 2

... *\[*USING KEY key*\]* *\[*WHERE log\_exp*\]*

Effect

Additional condition when using mesh paths in the statements and expressions:

-   [LOOP AT mesh\_path ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_loop.htm)

-   [FOR  ... IN mesh\_path ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for.htm)

-   [INSERT ... INTO TABLE mesh\_path ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_insert.htm)

-   [MODIFY mesh\_path.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_modify.htm)

-   [DELETE mesh\_path.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_delete.htm)

-   [SET ASSOCIATION mesh\_path ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_set_association.htm)

Only one WHERE condition, USING KEY with a WHERE condition, or only USING KEY can be specified. USING KEY must be listed in front of a WHERE condition. The syntax and semantics of the WHERE condition are the same as when [WHERE log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm) is specified statically for the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm), but the comparison is made for columns of the follow-on node.

USING KEY can be used to specify a [table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm) key of the follow-on node. The name or alias name of the table key must be specified directly.

-   If only one WHERE condition is specified, any comparisons for columns of the follow-on node are possible in this condition. These columns can also already be specified in the [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) of the mesh association. The WHERE condition works like an additional condition joined with the evaluation of the ON condition using AND.

-   the specification USING KEY defines the table key used to access the follow-on node. It overrides any other USING KEY specifications in [definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) of the mesh association.

-   If USING KEY is specified in front of a WHERE condition, the equality comparisons of the WHERE condition joined using AND are joined also using AND with the [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) to form a condition. Optimized key access must be possible here: There can be no duplicate columns in the joined condition and, in the case of a sorted table key, it must cover a left initial part. In the case of a hash key, it must cover all key fields of the follow-on node. Further parts of the WHERE condition, such as comparisons joined using OR or comparisons for properties other than equality, are not required for optimized key access and work in the same way as only specifying a WHERE condition as an additional condition.

-   If USING KEY is specified without a WHERE condition, the [ON condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_mesh_association.htm) of the mesh association must meet the prerequisites for optimized access for the table key.

Hint

USING KEY can be specified without a WHERE condition, for example, to use a table key with a different order of key fields as in a table key specified in a mesh association.

Examples

See the examples of the [statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_usage.htm) discussed here.