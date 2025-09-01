---
title: "TYPES, association"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_begin_of_mesh_shortref.htm) Syntax ... ASSOCIATION _assoc TO node ON tcomp1 = scomp1 AND tcomp2 = scomp2 AND ...  USING KEY key_name ... Additions: 1. ... ON tcomp1 = scomp1 AND tco
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh_association.htm"
abapFile: "abaptypes_mesh_association.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abaptypes", "mesh", "association"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm) →  [TYPES, BEGIN OF MESH mesh\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh.htm) → 

TYPES, association

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_begin_of_mesh_shortref.htm)

Syntax

... ASSOCIATION \_assoc TO node ON tcomp1 = scomp1
                             *\[*AND tcomp2 = scomp2
                             *\[*AND ... *\]**\]*
                             *\[*USING KEY key\_name*\]* ...

Additions:

[1\. ... ON tcomp1 = scomp1 *\[*AND tcomp2 = scomp2 *\[*AND ... *\]**\]*](#!ABAP_ADDITION_1@1@)
[2\. ... USING KEY key\_name](#!ABAP_ADDITION_2@2@)

Effect

Definition of a mesh association named \_assoc for a mesh node of a mesh type. The addition ASSOCIATION to TYPES can only be used in the definition of a node of a mesh type between [TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh.htm) and [TYPES END OF MESH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_mesh.htm). The mesh node for which a mesh association is defined is its start node and the mesh node node specified after TO is the target node. Any node in the current mesh can be specified as the target node node, including the start node itself. A mesh association with the same start and target node is a [self-association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenself_association_glosry.htm "Glossary Entry") or reflexive association.

The name of a mesh association can be up to 30 characters long and can only consist of the letters A-Z, the digits 0-9, and the underscore "\_" character, and cannot start with a digit.

Hints

-   The mesh associations defined for a mesh node are evaluated in [expressions and statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_usage.htm) for [meshes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_meshes.htm) in [mesh paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_pathes.htm).
-   A target node does not have to be defined before the start node to be visible to it. However, the Code Completion function of the editor only works properly if this is the case.
-   The prefix \_ is recommended as the naming convention for mesh associations. The name that follows this prefix should contain the target node name in non-reflexive mesh associations. This convention makes it easier to read the [mesh path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm).

Addition 1   

... ON tcomp1 = scomp1 *\[*AND tcomp2 = scomp2 *\[*AND ... *\]**\]*

Effect

For each mesh association, a condition must be specified after ON that consists of at least one [comparison](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomparison_glosry.htm "Glossary Entry") for equality. Further comparisons for equality can be added using AND. The left operand tcomp of each comparison must be a directly specified column of the target node and the right operand scomp must be a directly specified column of the start node that must be compatible with the column of the target node.

A mesh association creates a relationship between the start node and target node where all the rows of the target node that meet the condition are assigned to a line of the start node.

The mesh associations are type-only attributes and also affect the compatibility of mesh types. Mesh associations are evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_pathes.htm) in expressions and in statements for meshes.

Hints

-   In the ON condition, the target node components are on the left and the start node components are on the right, like in other statements and expressions for internal tables, where the columns of the table to be searched are always listed on the left.
-   As a rule of thumb, the target node components that are listed on the left in an ON condition should be key fields of the table key used for the condition, in order to achieve the most efficient access.

Addition 2   

... USING KEY key\_name

Effect

The addition USING KEY can be used for the ON condition of a mesh association to specify a table key of the target node that is used in expressions and statements to evaluate [meshes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_meshes.htm) for accessing the mesh node:

-   A [secondary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_key_glosry.htm "Glossary Entry") using its name
-   The primary key using its predefined name primary\_key or an alias. If the primary key is specified, the target node must be a sorted table or a hashed table.

The name of the table key must be specified directly, that is, it cannot be specified dynamically in a data object. If the table key is specified explicitly, the ON condition must be defined to allow optimal key access.

-   If a sorted key or the primary key of a sorted table is specified, the conditions specified after ON must cover a left initial part of the key fields in the target table.
-   If a secondary hash key or a primary key of a hashed table is specified, the conditions specified after ON must cover all key fields in the target table.

Without the addition USING KEY, the primary key is used to access the mesh node and that access is not always optimized.

Hint

The table key specified in the definition of the ON condition can be overridden when the mesh association is used in a [mesh path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path.htm) by specifying USING KEY in an [additional condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_assoc_cond.htm). In this case, the ON condition and the additional condition are combined into a condition that must meet the above prerequisites.

Example

Declaration of a mesh type. Some of the keys of the internal tables used are secondary keys that are used with USING in the definitions of the mesh associations.

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