---
title: "Syntax"
description: |
  TYPES BEGIN OF MESH mesh_type. ... TYPES node  TYPE REF TO table_typeref_type    LIKE REF TO itab      dref       association1(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm), association2(
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh.htm"
abapFile: "abaptypes_mesh.htm"
keywords: ["select", "do", "while", "if", "try", "data", "types", "internal-table", "field-symbol", "abaptypes", "mesh"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm) → 

TYPES - BEGIN OF MESH mesh\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_begin_of_mesh_shortref.htm)

Syntax

TYPES BEGIN OF MESH mesh\_type.
  ...
  TYPES node *{* TYPE *{**\[*REF TO*\]* table\_type*}**|*ref\_type *}*
           *|* *{* LIKE *{**\[*REF TO*\]* itab      *}**|*dref     *}*
                *\[* [association1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm)*\]*,
                *\[*[association2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm)*\]*,
                ...
  ...
TYPES END OF MESH mesh\_type.

Effect

Defines a [mesh type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_type_glosry.htm "Glossary Entry") for a [mesh](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm). A mesh type is a special structure type. The components of the structure type are referred to as mesh nodes and are subject to the following restrictions:

-   The type of a mesh node must be a non-generic [table type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_type_glosry.htm "Glossary Entry") with the static type of a non-generic internal table. The node type can be defined as follows:
    

-   Using the addition TYPE while specifying a table type [table\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm) with or without REF TO or while specifying a reference type [ref\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_references.htm) of this kind directly.

-   Using the addition LIKE while specifying an internal table [itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm) with or without REF TO or while specifying a reference variable [dref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_references.htm) of this kind directly.

-   The [row type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrow_type_glosry.htm "Glossary Entry") of a mesh node must be structured and cannot contain any internal tables or reference variables. Elementary data types and [substructures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstructure_glosry.htm "Glossary Entry") are permitted as components. Substructures must meet the same prerequisite.
    

A regular structure type can be enhanced by defining one or more [mesh associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_association_glosry.htm "Glossary Entry") [association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm) for every mesh node. These associations join two mesh nodes using a condition. The relationships between the tabular nodes of a mesh type defined using associations are evaluated in the special [expressions and statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) used to process [meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) in [mesh paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_pathes.htm).

Notes

-   Meshes must be fully [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatibility.htm) for assignments, comparisons, and parameter passing. Meshes are compatible when their structures are compatible, the node names match, and the associations match with respect to name, ON conditions, and the table key used.
    
-   Using the structure component selector (\-), mesh nodes can be addressed and used like the components of the corresponding structure. If field symbols or reference variables point to mesh nodes, they are also handled like regular structure components. In particular, the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding.htm) can also be used between incompatible meshes and between meshes and structures.
    
-   A mesh type is always fully defined. Generic mesh types are not possible.
    
-   It is a particularly good idea to use reference types as components when meshes are injected into existing programs with suitable internal tables.
    
-   The statements for defining a mesh type are usually summarized in a [chained statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_statement_glosry.htm "Glossary Entry").
    

Example

Declares a mesh type with internal tables for the flight data model.

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
    sflight TYPE t\_sflight,
    sairport TYPE t\_sairport,
  END OF MESH t\_flights.

Continue
[TYPES - association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm)