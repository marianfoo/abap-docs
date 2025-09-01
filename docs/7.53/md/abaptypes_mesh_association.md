  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) →  [TYPES - BEGIN OF MESH mesh\_type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm) → 

TYPES - association

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_begin_of_mesh_shortref.htm)

Syntax

... ASSOCIATION \_assoc TO node ON tcomp1 = scomp1
                             *\[*AND tcomp2 = scomp2
                             *\[*AND ... *\]**\]*
                             *\[*USING KEY key\_name*\]* ...

Extras:

[1\. ... ON tcomp1 = scomp1 *\[*AND tcomp2 = scomp2 *\[*AND ... *\]**\]*](#!ABAP_ADDITION_1@1@)
[2\. ... USING KEY key\_name](#!ABAP_ADDITION_2@2@)

Effect

Defines an association named \_assoc for a mesh node of a mesh type. The addition ASSOCIATION to TYPES can only be used in the definition of a mesh type between [TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm) and [TYPES END OF MESH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_mesh.htm). The mesh node for which an association is defined is its start node. The mesh node node specified after TO is the target node. Any node in the current mesh (including the start node) can be specified as the target node node. An association where the start node and target node are the same is referred to as a reflexive association.

The name of an association cannot be longer than 30 characters. It can only contain the letters A-Z, the digits 0-9, and the underscore "\_" character, and cannot begin with a digit.

Notes

-   The associations defined for a mesh node are evaluated in [expressions and statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_usage.htm) for [meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) in [mesh paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm).
    
-   It is not mandatory to define a target node before the start node to make the target node visible. However, the Code Completion function of the editor only works properly if the target node is defined before the start node.
    
-   The prefix \_ is recommended as the naming convention for associations. The name that follows this prefix should contain the target node name (in non-reflexive associations). This convention makes it easier to read the [mesh path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm).
    

Addition 1

... ON tcomp1 = scomp1 *\[*AND tcomp2 = scomp2 *\[*AND ... *\]**\]*

Effect

For every association, a condition must be specified after ON that consists of at least one [comparison](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_glosry.htm "Glossary Entry") for equality. Additional comparisons for equality can be added using AND. The left operand tcomp of every comparison must be a directly specified column of the target node. The right operand scomp must be a directly specified column of the start node and this column must be compatible with the column of the target node.

An association represents the relationship between the start node and target node. It assigns all the rows of the target node that meet the condition to a row of the start node.

The associations are type-only attributes and therefore affect the compatibility of mesh types. Associations are evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_pathes.htm) in expressions and in statements for meshes.

Notes

-   In the ON condition, the target node components are on the left and the start node components are on the right. This is the same as in other statements and expressions for internal tables, where the columns of the table to be searched are always specified on the left.
    
-   As a general rule, the target node components specified on the left of an ON condition should be key fields of the table key used for the condition. This ensures the best possible system performance when accessing data.
    

Addition 2

... USING KEY key\_name

Effect

Using the addition USING KEY, a table key of the target node can be specified for the ON condition of an association. The target node is the one used in expressions and statements to evaluate [meshes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_meshes.htm) for accessing the mesh node:

-   A [secondary key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_key_glosry.htm "Glossary Entry") using its name
    
-   The primary key using its predefined name primary\_key or using an alias. If the primary key is specified, the target node must be a sorted table or a hashed table.
    

The name of the table key must be specified directly. In other words, it cannot be specified dynamically in a data object. If the table key is specified explicitly, the ON condition must be defined to allow optimal key access.

-   If a sorted key or the primary key is specified, the conditions specified after ON must cover an initial left part of the key fields in the target table.
    
-   If a secondary hash key or a primary key of a hashed table is specified, the conditions specified after ON must cover all key fields in the target table.
    

If the addition USING KEY is not specified, the primary key is used to access the mesh node, which means that access is not always optimal.

Note

When the association is used in a [mesh path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path.htm), the table key specified in the definition of the ON condition can be overridden by specifying USING KEY in an [additional condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_assoc_cond.htm). In this case, the ON condition and the additional condition are combined to make one single condition, which must meet the above prerequisites.

Example

Declares a mesh type. Some of the internal tables used have secondary keys used with USING in the definitions of the associations.

TYPES:
  t\_scarr    TYPE HASHED TABLE OF scarr
             WITH UNIQUE KEY carrid,
  t\_spfli    TYPE HASHED TABLE OF spfli
             WITH UNIQUE KEY carrid connid
             WITH NON-UNIQUE SORTED KEY carrid
                             COMPONENTS carrid,
  t\_sflight  TYPE HASHED TABLE OF sflight
             WITH UNIQUE KEY carrid connid fldate
             WITH NON-UNIQUE SORTED KEY carrid\_connid
                             COMPONENTS carrid connid,
  t\_sairport TYPE HASHED TABLE OF sairport
             WITH UNIQUE KEY id,
  BEGIN OF MESH t\_flights,
    scarr TYPE t\_scarr
      ASSOCIATION \_spfli TO spfli
               ON carrid = carrid USING KEY carrid,
    spfli TYPE t\_spfli
      ASSOCIATION \_sflight TO sflight
               ON carrid = carrid AND
                  connid = connid USING KEY carrid\_connid
      ASSOCIATION \_sairport TO sairport
               ON id = airpfrom,
    sflight TYPE t\_sflight,
    sairport TYPE t\_sairport,
  END OF MESH t\_flights.