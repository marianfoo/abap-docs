  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_usage.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes - Mesh Path Expressions, ABENMESH_PATH_EXPRESSION, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes - Mesh Path Expressions

Syntax

... [mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm) ...

Effect

Specifies a mesh path [mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path.htm) as a standalone mesh path expression at an operand position. The result of a mesh path expression is a line from the last path node of the mesh path described by the [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_result.htm) of the mesh path and has the corresponding line type.

In the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc.htm) of each mesh association, an additional condition can be specified using [col1 = ...  col2 = ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc_cond.htm). If a path node contains multiple lines that fit the description, the first line found is read.

A mesh path expression is a special type of [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) and can be used in the same way as a table expression:

-   Possible operand positions are all read and write positions listed for [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm). In a write position, key fields of primary or secondary table keys of the last path node must not be overwritten.
-   [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) and [REF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) can be used to control how the result is passed as in regular table expressions.
-   A [chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_chaining.htm) with the structure component selector (\-) can be used to access a component of the read line.

If the follow-on node does not contain any lines that meet the condition in the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_assoc.htm), the response is the same as in regular table expressions. In other words, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised, except when used in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_writable_exp.htm), in the predicate function [line\_exists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_exists_function.htm), or in the table function [line\_index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_index_function.htm).

Hint

Since the lines of a mesh node cannot have tabular components, a mesh path expression cannot have any [chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_chaining.htm) to other table expressions.

Executable Example

[Mesh Path Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_table_expressions_abexa.htm)

Continue
![Example](exa.gif "Example") [Meshes - Mesh Path Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_table_expressions_abexa.htm)