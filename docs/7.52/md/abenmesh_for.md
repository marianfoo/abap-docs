---
title: "Syntax"
description: |
  ... FOR wa<fs> IN(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm) mesh_path(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm) let_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) ... Effect Eval
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for.htm"
abapFile: "abenmesh_for.htm"
keywords: ["loop", "do", "if", "try", "data", "internal-table", "abenmesh", "for"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) → 

FOR ... IN mesh\_path

Syntax

... [FOR wa*|*<fs> IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm) [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm) *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* ...

Effect

Evaluates all rows described by a [mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path.htm) using a FOR expression of a constructor expression. The syntax and meaning are the same as for [FOR expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm) for rows of internal tables, however a mesh path is specified after FOR ... IN, instead of a directly specified internal table. Groupings and FOR expressions for groups, the addition INDEX INTO, and conditions outside of the mesh path cannot be specified here. A FOR expression with a mesh path can be used like a FOR expression with an internal table for [table comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry") and [table reductions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry").

When specifying the mesh paths, the same applies as to mesh paths in the statement [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_loop.htm). The FOR expression works in the same way as the corresponding LOOP loop on the last path node of the mesh path. In particular, additional conditions can be specified in the square brackets [\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc.htm) of an association of the mesh path using the additions [USING KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm) and [WHERE log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm).

Note

In the constructor expression NEW, VALUE, or REDUCE, FOR expressions with mesh paths and FOR expressions with directly specified internal tables occur together.

Executable Example

[FOR Expressions for Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for_abexa.htm)

Continue
![Example](exa.gif "Example") [FOR Expressions for Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for_abexa.htm)