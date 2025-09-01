---
title: "DDIC - Structures"
description: |
  A DDIC structure(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structure_glosry.htm 'Glossary Entry') defines a structured type(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm 'Glossary Entry') that contains other data types as comp
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm"
abapFile: "abenddic_structures.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "structures"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) → 

DDIC - Structures

A [DDIC structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structure_glosry.htm "Glossary Entry") defines a [structured type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm "Glossary Entry") that contains other data types as components. These components can be:

-   Elementary data types

-   Reference types

-   Structured types

-   Table types

The name of a DDIC structure must follow [naming rules for DDIC types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm) and additionally some special [naming rules for DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_names.htm).

A DDIC structure that contains other structures as components is called a nested structure. Structure components are substructures and substructures can themselves be nested. A structure that contains a string type, reference type, or table type as a direct or nested component is a deep structure. A structure that contains only elementary data types (except string types) as direct or nested components is a flat structure. An internal program object declared with reference to a structure is a data object structured correspondingly (or [structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_glosry.htm "Glossary Entry") for short).

-   [Technical attributes of structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_tech.htm)

-   [Semantic attributes of structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_sema.htm)

A DDIC structure can be included in another structure as an [include structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_include_structure.htm), with the components of the included structure being added as the components of the including structure.

Structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_structure.htm)

Hints

-   The data types of [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) and [dictionary views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm) are all flat (not nested) structures.

-   A [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") ([CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm), [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_functions.htm), [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchies.htm), or [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entities.htm)) also represents a structured type and can be used as this sort of type in ABAP programs but not in ABAP Dictionary.

-   [Mesh types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_type_glosry.htm "Glossary Entry") cannot currently be defined in ABAP Dictionary.

-   [Customizing includes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_customizing_includes.htm) and [append structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm) are available for making enhancements to structures in ABAP Dictionary delivered by SAP, without making modifications.

-   When a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_fields.htm) references a component of a structure in ABAP Dictionary, it is important that the structure is declared using TABLES to enable a data transport between the dynpro and the ABAP program; only flat structures are suitable here.

Programming Guideline

[Names of structure components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstruc_comp_names_guidl.htm "Guideline")

Example

The structure SOADDRESS for the address of a SAPoffice user is a nested structure with substructures.

Continue
[DDIC - Naming Rules for Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_names.htm)
[DDIC - Technical Attributes of Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_tech.htm)
[DDIC - Semantic Attributes of Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_sema.htm)
[DDIC - Include Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_include_structure.htm)
[DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_structure.htm)