  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

DDIC - Structures

A [DDIC structure](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry") defines a [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") that contains other data types as components. These components can be:

-   Elementary data types

-   Reference types

-   Structured types

-   Table types

The name of a DDIC structure must follow [naming rules for DDIC types](javascript:call_link\('abenddic_types_names.htm'\)) and additionally some special [naming rules for DDIC structures](javascript:call_link\('abenddic_structures_names.htm'\)).

A DDIC structure that contains other structures as components is called a nested structure. Structure components are substructures and substructures can themselves be nested. A structure that contains a string type, reference type, or table type as a direct or nested component is a deep structure. A structure that contains only elementary data types (except string types) as direct or nested components is a flat structure. An internal program object declared with reference to a structure is a data object structured correspondingly (or [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") for short).

-   [Technical attributes of structures](javascript:call_link\('abenddic_structures_tech.htm'\))

-   [Semantic attributes of structures](javascript:call_link\('abenddic_structures_sema.htm'\))

A DDIC structure can be included in another structure as an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)), with the components of the included structure being added as the components of the including structure.

Structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\))

Hints

-   The data types of [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [dictionary views](javascript:call_link\('abenddic_views.htm'\)) are all flat (not nested) structures.

-   A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") ([CDS view](javascript:call_link\('abencds_v1_views.htm'\)), [CDS table function](javascript:call_link\('abencds_table_functions.htm'\)), [CDS hierarchy](javascript:call_link\('abencds_hierarchies.htm'\)), or [CDS abstract entity](javascript:call_link\('abencds_abstract_entities.htm'\))) also represents a structured type and can be used as this sort of type in ABAP programs but not in ABAP Dictionary.

-   [Mesh types](javascript:call_link\('abenmesh_type_glosry.htm'\) "Glossary Entry") cannot currently be defined in ABAP Dictionary.

-   [Customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\)) and [append structures](javascript:call_link\('abenddic_append_structures.htm'\)) are available for making enhancements to structures in ABAP Dictionary delivered by SAP, without making modifications.

-   When a [dynpro field](javascript:call_link\('abenabap_dynpros_fields.htm'\)) references a component of a structure in ABAP Dictionary, it is important that the structure is declared using TABLES to enable a data transport between the dynpro and the ABAP program; only flat structures are suitable here.

Programming Guideline

[Names of structure components](javascript:call_link\('abenstruc_comp_names_guidl.htm'\) "Guideline")

Example

The structure SOADDRESS for the address of a SAPoffice user is a nested structure with substructures.

Continue
[DDIC - Naming Rules for Structures](javascript:call_link\('abenddic_structures_names.htm'\))
[DDIC - Technical Attributes of Structures](javascript:call_link\('abenddic_structures_tech.htm'\))
[DDIC - Semantic Attributes of Structures](javascript:call_link\('abenddic_structures_sema.htm'\))
[DDIC - Include Structures](javascript:call_link\('abenddic_include_structure.htm'\))
[DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\))