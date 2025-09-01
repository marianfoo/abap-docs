---
title: "TYPES BEGIN OF MESH - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh.htm) Syntax TYPES BEGIN OF MESH mesh_type. ... TYPES  snode  TYPE REF TO table_typeref_type    LIKE REF TO itab      dref      ASSOCIATION _assoc TO tnode ON
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_begin_of_mesh_shortref.htm"
abapFile: "abaptypes_begin_of_mesh_shortref.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "abaptypes", "begin", "mesh", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  T

TYPES BEGIN OF MESH - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh.htm)

Syntax

TYPES BEGIN OF MESH mesh\_type.
  ...
  TYPES  snode *{* TYPE *{**\[*REF TO*\]* table\_type*}**|*ref\_type *}*
             *|* *{* LIKE *{**\[*REF TO*\]* itab      *}**|*dref     *}*
               *\[*ASSOCIATION \_assoc TO tnode ON tcomp1 = scomp1
                                          *\[*AND tcomp2 = scomp2
                                          *\[*AND ... *\]**\]*
                                          *\[*USING KEY key\_name*\]**\]*
               *\[*...*\]*.
  ...
DATA END OF MESH mesh\_type.

Effect

Defines a mesh type mesh\_type whose nodes are tabular data types or reference types for internal tables.

Addition

-   [ASSOCIATION ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm)
    Declares a [mesh association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_association_glosry.htm "Glossary Entry") \_assoc between a start node snode and a target node tnode. The relationship between the nodes is defined using one or more ON conditions, where USING KEY can be used to specify the table key used.