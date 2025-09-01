---
title: "Syntax"
description: |
  TYPES BEGIN OF MESH mesh_type. ... TYPES node  TYPE REF TO table_typeref_type    LIKE REF TO itab      dref       association1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm), associati
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh.htm"
abapFile: "abaptypes_mesh.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abaptypes", "mesh"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20BEGIN%20OF%20MESH%20mesh_type%2C%20ABAPTYPES_MESH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, BEGIN OF MESH mesh\_type

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_begin_of_mesh_shortref.htm)

Syntax

TYPES BEGIN OF MESH mesh\_type.
  ...
  TYPES node *{* TYPE *{**\[*REF TO*\]* table\_type*}**|*ref\_type *}*
           *|* *{* LIKE *{**\[*REF TO*\]* itab      *}**|*dref     *}*
                *\[* [association1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm)*\]*,
                *\[*[association2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm)*\]*,
                ...
  ...
TYPES END OF MESH mesh\_type.

Effect

Definition of a [mesh type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_type_glosry.htm "Glossary Entry") for a [mesh](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm). A mesh type is a special structure type. The components of the structure type are referred to as mesh nodes and are subject to the following restrictions:

-   The type of a mesh node must be a non-generic [table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_type_glosry.htm "Glossary Entry") with the static type of a non-generic internal table. The node type can be defined as follows:
    -   Using the addition TYPE, specifying a table type [table\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm) with or without REF TO, or by specifying such a reference type [ref\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_references.htm) directly.
    -   Using the addition LIKE, specifying an internal table [itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_itab.htm) with or without REF TO, or by specifying such a reference variable [dref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_references.htm) directly.
-   The [line type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrow_type_glosry.htm "Glossary Entry") of a mesh node must be structured and cannot contain internal tables or reference variables as components. Elementary data types and [substructures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubstructure_glosry.htm "Glossary Entry") are allowed as components. Substructures must meet the same prerequisite.

A regular structure type can be enhanced by defining one or more [mesh associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_association_glosry.htm "Glossary Entry") [association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm) for each mesh node. Each association connects two mesh nodes using a condition. The relationships between the tabular nodes of a mesh type defined using mesh associations are evaluated in the special [expressions and statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm) used to process [meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) in [mesh paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_pathes.htm).

Hints

-   Meshes must be fully [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatibility.htm) for assignments, comparisons, and parameter passing. Meshes are compatible if their structures are compatible, the node names match, and the mesh associations match in names, ON conditions, and the table key used.
-   Using the structure component selector (\-), mesh nodes can be addressed and used as the components of the corresponding structure. If field symbols or reference variables point to mesh nodes, they are also handled like regular structure components. In particular, the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove-corresponding.htm) can also be used between incompatible meshes and between meshes and structures.
-   A mesh type is always fully defined. Generic mesh types are not possible.
-   Reference types as components can be particularly useful when meshes are injected into existing programs in which suitable internal tables already exist.
-   The statements for defining a mesh type are usually summarized in a [chained statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchained_statement_glosry.htm "Glossary Entry").

Example

Declaration of a mesh type with internal tables for the flight data model.

TYPES:
  t\_scarr    TYPE HASHED TABLE OF scarr
             WITH UNIQUE KEY carrid,
  t\_spfli    TYPE HASHED TABLE OF spfli
             WITH UNIQUE KEY carrid connid,
  t\_sflight  TYPE HASHED TABLE OF sflight
             WITH UNIQUE KEY carrid connid fldate,
  t\_sairport TYPE HASHED TABLE OF sairport
             WITH UNIQUE KEY id,
  BEGIN OF MESH t\_flights,
    scarr TYPE t\_scarr
      ASSOCIATION \_spfli TO spfli
               ON carrid = carrid,
    spfli TYPE t\_spfli
      ASSOCIATION \_sflight TO sflight
               ON carrid = carrid AND
                  connid = connid
      ASSOCIATION \_sairport TO sairport
               ON id = airpfrom,
    sflight  TYPE t\_sflight,
    sairport TYPE t\_sairport,
  END OF MESH t\_flights.

Continue
[TYPES, association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh_association.htm)