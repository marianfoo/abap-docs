  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

Mesh Path Expressions

Syntax

... [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) ...

Effect

Specifies a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) as a standalone mesh path expression at an operand position. The result of a mesh path expression is a row from the last path node of the mesh path. This row is described by the [result](javascript:call_link\('abenmesh_path_result.htm'\)) of the mesh path and has the corresponding row type.

An additional condition can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each association, by using [col1 = ...  col2 = ...](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)). If the last path node contains multiple rows that fit the description, the first row found is read.

A mesh path expression is a special type of [table expression](javascript:call_link\('abentable_expressions.htm'\)) and can be used in the same way as a table expression:

-   Possible operand positions are all reading and writing positions listed for [table expressions](javascript:call_link\('abentable_expressions.htm'\)). In a writing position, key fields of primary or secondary table keys of the last path node must not be overwritten.

-   [VALUE](javascript:call_link\('abentable_exp_result.htm'\)) and [REF](javascript:call_link\('abentable_exp_result.htm'\)) can be used to control how the result is passed (as in regular table expressions).

-   A [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) with the structure component selector (\-) can be used to access a component of the row that was read.

If the follow-on node does not contain any rows that meet the condition in square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)), the response is the same as in regular table expressions. In other words, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised, unless used in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), in the predicate function [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)), or in the table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)).

Note

Since the rows of a mesh node cannot have tabular components, a mesh path expression cannot have any [chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) to other table expressions.

Executable Example

[Mesh Path Expressions](javascript:call_link\('abenmesh_table_expressions_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Mesh Path Expressions](javascript:call_link\('abenmesh_table_expressions_abexa.htm'\))