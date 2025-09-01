  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

LOOP AT mesh\_path

Syntax

LOOP AT [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) [result](javascript:call_link\('abaploop_at_itab_result.htm'\)).
  ...
ENDLOOP.

Effect

Reads all rows described by the [results](javascript:call_link\('abenmesh_path_result.htm'\)) of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) in a loop. Essentially, the loop works like the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) across a directly specified table, but reads the rows of the last path node described by the mesh path instead. The output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) is specified in exactly the same way as in LOOP AT itab and must match the row type of the last path node. The system fields are set in the same way as in the statement LOOP AT itab, where sy-tabix depends on the table key used.

An additional condition can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each association using the additions [USING KEY](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) and [WHERE log\_exp](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)).

The order in which the rows of the last path node are read is determined by the order in which the rows were found when the mesh path was evaluated. Here, an iteration is performed across every follow-on node in the mesh path, in accordance with the table key used.

If only the initial association is specified, the same rules apply when changing the last path node in the loop as when using LOOP AT itab. If a path extension is specified, the following additional restrictions apply:

-   No row can be deleted from the last path node.

-   No row can be inserted in the last path node (unless a hash key is used).

-   No component of the table key being used can be changed.

The full internal table cannot be replaced or deleted in the loop. Mesh nodes evaluated when path extensions are used before the last path node, however, can be modified as required.

Notes

-   A loop across a mesh path can be understood as a nesting of loops [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) across the matching follow-on nodes, whose [WHERE conditions](javascript:call_link\('abaploop_at_itab_cond.htm'\)) are constructed from ON conditions and the explicitly specified additional conditions. The evaluation itself, however, does not take place in nested LOOPs and multiple iterations across a single table row never take place.

-   If [path extensions](javascript:call_link\('abenmesh_path_result_chaining.htm'\)) are used, any rows found more than once in mesh path evaluations are iterated only once each.

-   Tables located before the last path node in path extensions can be modified in any way in the loop, since they are evaluated only once before the loop is executed across the last path node.

Executable Example

[Loops Across Mesh Paths](javascript:call_link\('abenmesh_loops_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Loops Across Mesh Paths](javascript:call_link\('abenmesh_loops_abexa.htm'\))