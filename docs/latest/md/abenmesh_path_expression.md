  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Mesh%20Path%20Expressions%2C%20ABENMESH_PATH_EXPRESSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Meshes - Mesh Path Expressions

Syntax

... [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) ...

Effect

Specifies a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) as a standalone mesh path expression at an operand position. The result of a mesh path expression is a line from the last path node of the mesh path described by the [result](javascript:call_link\('abenmesh_path_result.htm'\)) of the mesh path and has the corresponding line type.

In the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each mesh association, an additional condition can be specified using [col1 = ...  col2 = ...](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)). If a path node contains multiple lines that fit the description, the first line found is read.

A mesh path expression is a special type of [table expression](javascript:call_link\('abentable_expressions.htm'\)) and can be used in the same way as a table expression:

-   Possible operand positions are all read and write positions listed for [table expressions](javascript:call_link\('abentable_expressions.htm'\)). In a write position, key fields of primary or secondary table keys of the last path node must not be overwritten.
-   [VALUE](javascript:call_link\('abentable_exp_result.htm'\)) and [REF](javascript:call_link\('abentable_exp_result.htm'\)) can be used to control how the result is passed as in regular table expressions.
-   A [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) with the structure component selector (\-) can be used to access a component of the read line.

If the follow-on node does not contain any lines that meet the condition in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)), the response is the same as in regular table expressions. In other words, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised, except when used in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), in the predicate function [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)), or in the table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)).

Hint

Since the lines of a mesh node cannot have tabular components, a mesh path expression cannot have any [chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) to other table expressions.

Executable Example

[Mesh Path Expressions](javascript:call_link\('abenmesh_table_expressions_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Meshes - Mesh Path Expressions](javascript:call_link\('abenmesh_table_expressions_abexa.htm'\))