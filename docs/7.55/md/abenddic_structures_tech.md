  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) → 

DDIC - Technical Attributes of Structures

A DDIC structure describes a [structure type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm "Glossary Entry") constructed from components and with the following technical attributes:

-   Component name

The name of a component can have a maximum of 30 characters, can contain only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"). The following restrictions apply:

-   A component name cannot be the name of the [pseudo component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line reserved in ABAP.

-   If a structure is inserted in a [database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm), however, the component names cannot have any of the reserved names that are not allowed in DDIC database tables.

-   Component type

-   For elementary components, the technical attributes ( [built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), length, and any fractional digits) are defined with reference to a [data element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) for an elementary type in ABAP Dictionary or directly in the structure component. In the case of [currency fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_field_glosry.htm "Glossary Entry") and [quantity fields,](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquantity_glosry.htm "Glossary Entry") a [reference field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_sema.htm) must be specified for the unit.

-   For reference-like components, the technical attributes are defined using a reference to a [data element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any DDIC data type or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,

-   Substructures are defined by reference to [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm), or [DDIC views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm). A substructure can be defined as a [static box](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_box_glosry.htm "Glossary Entry"). In ABAP data objects declared with reference to the DDIC structure, static box supports [initial value sharing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

-   Tabular components are defined by reference to a [DDIC table type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_types.htm).

-   Enhancement category

The [enhancement category](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm) of a structure specifies how a structure can be enhanced using [customizing includes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or [append structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenappend_structure_glosry.htm "Glossary Entry") and specifies how ABAP programs that work with data objects of this structure type are checked.

-   Activation type

An [activation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_act_type.htm) can be defined for a structure, like for DDIC database tables, but has no specific use here.

Hints

-   In ABAP, the component names of structures are not strictly speaking a [technical type attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry"). They are listed here however to simplify the picture.

-   The above rules for component names are checked strictly by ABAP Dictionary only for table fields of DDIC database tables and not for structures. Component names of structures can contain special characters (such as :) that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.

-   A substructure cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"), but it can be defined using a reference to a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a corresponding [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry").

Continue
[DDIC - Enhancement Category of Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm)