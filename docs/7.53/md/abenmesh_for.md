  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

FOR ... IN mesh\_path

Syntax

... [FOR wa*|*<fs> IN](javascript:call_link\('abenfor_in_itab.htm'\)) [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...

Effect

Evaluates all rows described by a [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) using a FOR expression of a constructor expression. The syntax and meaning are the same as for [FOR expressions](javascript:call_link\('abenfor_in_itab.htm'\)) for rows of internal tables, however a mesh path is specified after FOR ... IN, instead of a directly specified internal table. Groupings and FOR expressions for groups, the addition INDEX INTO, and conditions outside of the mesh path cannot be specified here. A FOR expression with a mesh path can be used like a FOR expression with an internal table for [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") and [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry").

When specifying the mesh paths, the same applies as to mesh paths in the statement [LOOP AT](javascript:call_link\('abenmesh_loop.htm'\)). The FOR expression works in the same way as the corresponding LOOP loop on the last path node of the mesh path. In particular, additional conditions can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of an association of the mesh path using the additions [USING KEY](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) and [WHERE log\_exp](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)).

Note

In the constructor expression NEW, VALUE, or REDUCE, FOR expressions with mesh paths and FOR expressions with directly specified internal tables occur together.

Executable Example

[FOR Expressions for Mesh Paths](javascript:call_link\('abenmesh_for_abexa.htm'\))

Continue
![Example](exa.gif "Example") [FOR Expressions for Mesh Paths](javascript:call_link\('abenmesh_for_abexa.htm'\))