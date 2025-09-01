---
title: "Technical Attributes of Structures"
description: |
  A structure describes a structure type(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructured_type_glosry.htm 'Glossary Entry') constructed from components and with the following technical attributes: -   Component name The name of a component can have a maximum of 30 characters
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_tech.htm"
abapFile: "abenddic_structures_tech.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "types", "abenddic", "structures", "tech"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) →  [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm) → 

Technical Attributes of Structures

A structure describes a [structure type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructured_type_glosry.htm "Glossary Entry") constructed from components and with the following technical attributes:

-   Component name

The name of a component can have a maximum of 30 characters, can contain only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"). The following restrictions apply:

-   A component name cannot be the name of the [pseudo component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line reserved in ABAP.

-   If a structure is inserted in a [database table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm), however, the component names cannot have any of the reserved names that are not permitted in database tables.

-   Component type

-   For elementary components, the technical attributes ( [built-in data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), length, and any fractional digits) are defined with reference to a [data element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm) for an elementary type in ABAP Dictionary or directly in the structure component. In the case of [currency fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_field_glosry.htm "Glossary Entry") and [quantity fields,](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquantity_glosry.htm "Glossary Entry") a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) must be specified for the unit.

-   For reference-like components, the technical attributes are defined using a reference to a [data element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any data type in ABAP Dictionary or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,

-   Substructures are defined by reference to [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm), [database tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm), or [views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_views.htm) in ABAP Dictionary. A substructure can be defined as a [static box](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_box_glosry.htm "Glossary Entry"). In ABAP data objects declared with reference to the structure in ABAP Dictionary, a static box supports [initial value sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

-   Tabular components are defined by reference to a [table type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types.htm) in ABAP Dictionary.

-   Enhancement category

The [enhancement category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_enh_cat.htm) of a structure specifies how a structure can be enhanced using [customizing includes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or [append structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenappend_structure_glosry.htm "Glossary Entry") and dictates how ABAP programs that work with data objects of this structure type are checked.

-   Activation type

An [activation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_act_type.htm) can be defined for a structure, like for database tables, but has no specific use here.

Notes

-   In ABAP, the component names of structures are not strictly speaking a [technical type attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry"). They are listed here however to simplify the picture.

-   The above rules for component names are checked strictly by ABAP Dictionary only for table fields of database tables and not for structures. Component names of structures can contain special characters (such as :) that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.

-   A substructure cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"), but it can be defined using a reference to a [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry").

Continue
[Enhancement Category of Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_enh_cat.htm)