  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_data_types.htm) → 

Structures

A structure in ABAP Dictionary defines a [structured type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructured_type_glosry.htm "Glossary Entry") that contains other data types as components. These components can be:

-   Elementary data types

-   Reference types

-   Structured types

-   Table types

A structure that contains other structures as components is called a nested structure. Structure components are substructures and substructures can themselves be nested. A structure that contains a reference type or a table type as a direct or nested component is a deep structure. A structure that contains only elementary data types as a direct or nested component is a flat structure. An internal program object declared with reference to a structure is a data object structured correspondingly (or [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_glosry.htm "Glossary Entry") for short).

-   [Technical attributes of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_tech.htm)

-   [Semantic attributes of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_sema.htm)

A structure in ABAP Dictionary can be included in another structure as an [include structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_include_structure.htm), with the components of the included structure being added as the components of the including structure.

Notes

-   The data types of [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) and [classic views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_views.htm) are all flat (not nested) structures.

-   A [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") ([CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_views.htm) or [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_table_functions.htm)) also represents a structured type and can be used as this sort of type in ABAP programs but not in ABAP Dictionary.

-   [Mesh types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_type_glosry.htm "Glossary Entry") cannot currently be defined in ABAP Dictionary.

-   [Customizing includes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_customizing_includes.htm) and [append structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_append_structures.htm) are available for making enhancements to structures in ABAP Dictionary delivered by SAP, without making modifications.

-   When a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_fields.htm) references a component of a structure in ABAP Dictionary, it is important that the structure is declared using TABLES to enable a data transport between the dynpro and the ABAP program; only flat structures are suitable here.

-   Structures are edited using a [source code-based editor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm) in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry"). Here, the structures can be created or edited using a syntax based on the [DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry").

Programming Guideline

[Names of structure components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstruc_comp_names_guidl.htm "Guideline")

Example

The structure SOADDRESS for the address of a SAPoffice user is a nested structure with substructures.

Continue
[Technical Attributes of Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_tech.htm)
[Semantic Attributes of Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_sema.htm)
[Include Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_include_structure.htm)