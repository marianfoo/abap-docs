  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TYPES BEGIN OF MESH - Quick reference

[Reference](javascript:call_link\('abaptypes_mesh.htm'\))

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

-   [ASSOCIATION ...](javascript:call_link\('abaptypes_mesh_association.htm'\))
    Declares a [mesh association](javascript:call_link\('abenmesh_association_glosry.htm'\) "Glossary Entry") \_assoc between a start node snode and a target node tnode. The relationship between the nodes is defined using one or more ON conditions, where USING KEY can be used to specify the table key used.