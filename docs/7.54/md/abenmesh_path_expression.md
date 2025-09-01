---
title: "Mesh Path Expressions"
description: |
  Syntax ... mesh_path(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) ... Effect Specifies a mesh path mesh_path(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) as a standalone mesh path expression at an operand position. The result of
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_expression.htm"
abapFile: "abenmesh_path_expression.htm"
keywords: ["select", "do", "if", "data", "abenmesh", "path", "expression"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_usage.htm) → 

Mesh Path Expressions

Syntax

... [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) ...

Effect

Specifies a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path.htm) as a standalone mesh path expression at an operand position. The result of a mesh path expression is a row from the last path node of the mesh path. This row is described by the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_result.htm) of the mesh path and has the corresponding row type.

In the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc.htm) of each mesh association, an additional condition can be specified via [col1 = ...  col2 = ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc_cond.htm). If a path node contains multiple rows that fit the description, the first row found is read.

A mesh path expression is a special type of [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) and can be used in the same way as a table expression:

-   Possible operand positions are all reading and writing positions listed for [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm). In a writing position, key fields of primary or secondary table keys of the last path node must not be overwritten.

-   [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_result.htm) and [REF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_result.htm) can be used to control how the result is passed (as in regular table expressions).

-   A [chaining](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm) with the structure component selector (\-) can be used to access a component of the row that was read.

If the follow-on node does not contain any rows that meet the condition in the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_assoc.htm), the response is the same as in regular table expressions. In other words, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised, unless used in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm), in the predicate function [line\_exists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_exists_function.htm), or in the table function [line\_index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_index_function.htm).

Note

Since the rows of a mesh node cannot have tabular components, a mesh path expression cannot have any [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm) to other table expressions.

Executable Example

[Mesh Path Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_table_expressions_abexa.htm)

Continue
![Example](exa.gif "Example") [Mesh Path Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_table_expressions_abexa.htm)