  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  T

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%20BEGIN%20OF%20MESH%2C%20ABAPTYPES_BEGIN_OF_MESH_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES BEGIN OF MESH - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh.htm)

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

-   [ASSOCIATION ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm)
    Declares a [mesh association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_association_glosry.htm "Glossary Entry") \_assoc between a start node snode and a target node tnode. The relationship between the nodes is defined using one or more ON conditions, where USING KEY can be used to specify the table key used.