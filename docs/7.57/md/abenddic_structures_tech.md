---
title: "DDIC - Technical Properties of Structures"
description: |
  A DDIC structure describes a structure type(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm 'Glossary Entry') constructed from components and with the following technical properties: -   Component name The name of a component can have a maximum of 30 chara
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_tech.htm"
abapFile: "abenddic_structures_tech.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenddic", "structures", "tech"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Technical Properties of Structures, ABENDDIC_STRUCTURES_TECH, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Technical Properties of Structures

A DDIC structure describes a [structure type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm "Glossary Entry") constructed from components and with the following technical properties:

-   Component name
    
    The name of a component can have a maximum of 30 characters, can consist of only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"). The following restrictions apply:
    
    -   A component name cannot be the name of the [pseudo component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line reserved in ABAP.
    -   If a structure is to be included in a [database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm), however, the component names cannot have any of the reserved names that are forbidden in DDIC database tables.
-   Component type
    -   For elementary components, the technical properties ( [built-in data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), length, and any decimal places) are defined with reference to a [data element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_elements.htm) for an elementary type in the ABAP Dictionary or directly in the structure component. In the case of [DDIC currency fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_currency_field_glosry.htm "Glossary Entry") and [DDIC quantity fields,](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_quantity_glosry.htm "Glossary Entry") a [reference field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_sema.htm) must be specified for the unit.
    -   For reference-like components, the technical properties are defined using a reference to a [data element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_elements.htm) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any DDIC data type or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,
    -   Substructures are defined by reference to [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm), or [DDIC views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm). A substructure can be defined as a [static box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_box_glosry.htm "Glossary Entry"). In ABAP data objects declared with reference to the DDIC structure, a static box supports [initial value sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").
    -   Tabular components are defined by reference to a [DDIC table type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_table_types.htm).
-   Enhancement category
    
    The [enhancement category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_enh_cat.htm) of a structure specifies how a structure can be enhanced using [customizing includes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or [append structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenappend_structure_glosry.htm "Glossary Entry") and affects how ABAP programs that work with data objects of this structure type are checked.
    
-   Activation type
    
    An [activation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm) can be defined for a structure, like for DDIC database tables, but has no specific use here.
    

Hints

-   In ABAP, the component names of structures are not strictly speaking a [technical type property](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry"). They are listed here however to simplify the picture.
-   The above rules for component names are checked strictly by the ABAP Dictionary only for table fields of DDIC database tables and not for structures. Component names of structures can contain special characters such as a colon : that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.
-   A substructure cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"), nor using a reference to a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The reason is that access to CDS-managed DDIC views is [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_obsolete.htm).

Continue
[DDIC - Enhancement Category of Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_enh_cat.htm)