# ABAP - Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Data Types / Structures

Included pages: 6


### abenddic_structures.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

Structures

A structure in ABAP Dictionary defines a [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") that contains other data types as components. These components can be:

-   Elementary data types

-   Reference types

-   Structured types

-   Table types

A structure that contains other structures as components is called a nested structure. Structure components are substructures and substructures can themselves be nested. A structure that contains a reference type or a table type as a direct or nested component is a deep structure. A structure that contains only elementary data types as a direct or nested component is a flat structure. An internal program object declared with reference to a structure is a data object structured correspondingly (or [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") for short).

-   [Technical attributes of structures](javascript:call_link\('abenddic_structures_tech.htm'\))

-   [Semantic attributes of structures](javascript:call_link\('abenddic_structures_sema.htm'\))

A structure in ABAP Dictionary can be included in another structure as an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)), with the components of the included structure being added as the components of the including structure.

Notes

-   The data types of [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [classic views](javascript:call_link\('abenddic_classical_views.htm'\)) are all flat (not nested) structures.

-   A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") ([CDS view](javascript:call_link\('abenddic_cds_views.htm'\)) or [CDS table function](javascript:call_link\('abenddic_cds_table_functions.htm'\))) also represents a structured type and can be used as this sort of type in ABAP programs but not in ABAP Dictionary.

-   [Mesh types](javascript:call_link\('abenmesh_type_glosry.htm'\) "Glossary Entry") cannot currently be defined in ABAP Dictionary.

-   [Customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\)) and [append structures](javascript:call_link\('abenddic_append_structures.htm'\)) are available for making enhancements to structures in ABAP Dictionary delivered by SAP, without making modifications.

-   When a [dynpro field](javascript:call_link\('abenabap_dynpros_fields.htm'\)) references a component of a structure in ABAP Dictionary, it is important that the structure is declared using TABLES to enable a data transport between the dynpro and the ABAP program; only flat structures are suitable here.

-   Structures are edited using a [source code-based editor](javascript:call_link\('abenddic_tools.htm'\)) in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). Here, the structures can be created or edited using a syntax based on the [DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry").

Programming Guideline

[Names of structure components](javascript:call_link\('abenstruc_comp_names_guidl.htm'\) "Guideline")

Example

The structure SOADDRESS for the address of a SAPoffice user is a nested structure with substructures.

Continue
[Technical Attributes of Structures](javascript:call_link\('abenddic_structures_tech.htm'\))
[Semantic Attributes of Structures](javascript:call_link\('abenddic_structures_sema.htm'\))
[Include Structures](javascript:call_link\('abenddic_include_structure.htm'\))


### abenddic_structures_tech.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Technical Attributes of Structures

A structure describes a [structure type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") with the following technical attributes:

-   Component name

The name of a component can have a maximum of 30 characters, can contain only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"). The following restrictions apply:

-   A component name cannot be the name of the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line reserved in ABAP.

-   If a structure is inserted in a [database table](javascript:call_link\('abenddic_database_tables.htm'\)), however, the component names cannot have any of the reserved names that are not permitted in database tables.

-   Component type

-   For elementary components, the technical attributes ( [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and any fractional digits) are defined with reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) for an elementary type in ABAP Dictionary or directly in the structure component. In the case of [currency fields](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") and [quantity fields,](javascript:call_link\('abenquantity_glosry.htm'\) "Glossary Entry") a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) must be specified for the unit.

-   For reference-like components, the technical attributes are defined using a reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any data type in ABAP Dictionary or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,

-   Substructures are defined by reference to [structures](javascript:call_link\('abenddic_structures.htm'\)), [database tables](javascript:call_link\('abenddic_database_tables.htm'\)), or [views](javascript:call_link\('abenddic_views.htm'\)) in ABAP Dictionary. A substructure can be defined as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"). In ABAP data objects declared with reference to the structure in ABAP Dictionary, a static box supports [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

-   Tabular components are defined by reference to a [table type](javascript:call_link\('abenddic_table_types.htm'\)) in ABAP Dictionary.

-   Enhancement category

The [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) of a structure specifies how a structure can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") and dictates how ABAP programs that work with data objects of this structure type are checked.

-   Activation type

An [activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\)) can be defined for a structure, like for database tables, but has no specific use here.

Notes

-   In ABAP, the component names of structures are not strictly speaking a [technical type attribute](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry"). They are listed here however to simplify the picture.

-   The above rules for component names are checked strictly by ABAP Dictionary only for table fields of database tables and not for structures. Component names of structures can contain special characters (such as :) that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.

-   A substructure cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). However it can be defined using a reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Continue
[Enhancement Category of Structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\))


### abenddic_structures_enh_cat.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Technical Attributes of Structures](javascript:call_link\('abenddic_structures_tech.htm'\)) → 

Enhancement Category of Structures

ABAP Dictionary structures and database tables that are delivered by SAP can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry"). These types of changes cause problems if the enhancements change the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry").

For this reason, structures and database tables are given a classification, which make it possible to recognize and handle problems related to structure enhancements. This classification is used in the program check to create a warning at all points where the program works with structures, and where later structure enhancements could cause syntax errors or changes in program behavior. When a structure or a database table is defined in ABAP Dictionary, the enhancement categories displayed in the following table can be used as a classification.

Level

Category

Meaning

1

Unclassified

The structure does not have an enhancement category.

2

Cannot be enhanced

The structure must not be enhanced.

3

Can be enhanced and character-like

All structure components and their enhancements must be character-like and flat.

4

Can be enhanced and character-like or numeric

All structure components and their enhancements must be flat.

5

Can be enhanced in any way

All structure components and their enhancements can have any data type.

The warnings displayed after the program check are classified into three levels from the following table, depending on the consequences of the permitted structure enhancements.

Level

Type of Check

Meaning

A

Syntax check

An enhancement that exhausts in full the enhancement category of the structure in question produces a syntax error.

B

Extended check

Permitted enhancements can produce syntax errors, but not always.

C

Extended check

Permitted enhancements cannot produce syntax errors, although changes to program behavior do cause semantic problems.

Example

If the structure ddic\_struc in ABAP Dictionary is defined only with [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") components but is classified as Can be enhanced in any way, the following program section produces a warning in the syntax check. If the structure were to be enhanced by a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, this is why either the structure ddic\_struc must be classified in ABAP Dictionary as Can be enhanced and character-like or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc,
      str TYPE string,
      off  TYPE i,
      len TYPE i.
...
str = my\_struc+off(len).


### abenddic_structures_tech.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Technical Attributes of Structures

A structure describes a [structure type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") with the following technical attributes:

-   Component name

The name of a component can have a maximum of 30 characters, can contain only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"). The following restrictions apply:

-   A component name cannot be the name of the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line reserved in ABAP.

-   If a structure is inserted in a [database table](javascript:call_link\('abenddic_database_tables.htm'\)), however, the component names cannot have any of the reserved names that are not permitted in database tables.

-   Component type

-   For elementary components, the technical attributes ( [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and any fractional digits) are defined with reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) for an elementary type in ABAP Dictionary or directly in the structure component. In the case of [currency fields](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") and [quantity fields,](javascript:call_link\('abenquantity_glosry.htm'\) "Glossary Entry") a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) must be specified for the unit.

-   For reference-like components, the technical attributes are defined using a reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any data type in ABAP Dictionary or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,

-   Substructures are defined by reference to [structures](javascript:call_link\('abenddic_structures.htm'\)), [database tables](javascript:call_link\('abenddic_database_tables.htm'\)), or [views](javascript:call_link\('abenddic_views.htm'\)) in ABAP Dictionary. A substructure can be defined as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"). In ABAP data objects declared with reference to the structure in ABAP Dictionary, a static box supports [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

-   Tabular components are defined by reference to a [table type](javascript:call_link\('abenddic_table_types.htm'\)) in ABAP Dictionary.

-   Enhancement category

The [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) of a structure specifies how a structure can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") and dictates how ABAP programs that work with data objects of this structure type are checked.

-   Activation type

An [activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\)) can be defined for a structure, like for database tables, but has no specific use here.

Notes

-   In ABAP, the component names of structures are not strictly speaking a [technical type attribute](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry"). They are listed here however to simplify the picture.

-   The above rules for component names are checked strictly by ABAP Dictionary only for table fields of database tables and not for structures. Component names of structures can contain special characters (such as :) that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.

-   A substructure cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). However it can be defined using a reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Continue
[Enhancement Category of Structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\))


### abenddic_structures_sema.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Semantic Attributes of Structures

Structures in ABAP Dictionary can be given the following semantic attributes:

-   Short text of the structure

Each structure has a short description specified when it is created.

-   Documentation

A structure can be given (optional) documentation.

-   Short text of components

Each component is assigned a short text description used in any references to an existing type. A custom text can be specified if the type is defined directly.

-   Output style of components

A component with the directly specified type of a decimal floating point number can be assigned an [output style for dynpros](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

-   Reference field for components of the [predefined data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN

A component of the same or a different structure (or database table or view) must be defined as a reference field (with the predefined data type CUKY or UNIT) for each [currency field](javascript:call_link\('abenddic_currency_field.htm'\)) with the type CURR and [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)) with the type QUAN. This field is the [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") or [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that specifies the currency or the unit. A table in which a reference field is defined is called a reference table.

-   Check table

Like table fields of database tables, structure components can be assigned [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)). This is useful for structures included in database tables and which become part of the their [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

-   Search help

Structure components whose data type is specified by a data element with elementary data type can be assigned a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). This is only useful, however, for components used for input fields on UIs.

-   Key field and flag for initial value

Like table fields of database tables, structure components can be defined as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) and can be assigned a [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)). This is relevant for structures that are bound into database tables. The table fields are then given these attributes. Components of structures used as lock parameters in a [lock object](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry") must continue to be defined as key fields.

Note

Structure components whose type is defined using [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) and not by being defined directly have the additional semantic attributes of the data elements.


### abenddic_include_structure.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Include Structures

Components of a structure can be defined by including the components of other structures in ABAP Dictionary, such as database tables or views. These included structures are known as include structures (or includes for short). From a technical perspective, the structure in which an include structure is included references the included structure and is modified accordingly whenever changes are made to this structure. An include structure can itself contain include structures, with the maximum nesting depth being nine includes.

When an include structure is included, all components of an existing structure are added to the including structure as a replacement for a component. No substructure is created, which means that the components are inserted as if they were specified individually at this position and they are handled like directly defined components. Regular components and include structures can be combined as required.

When a structure is included as an include structure, it can be assigned a name of a group and a three-character suffix.

-   In ABAP programs, the name of a group is an additional addressing option for data objects declared with reference to the structure. All components of the included structure can be addressed together using this name or individual components can be addressed using the structure component selector (\-) after the name.

-   A suffix is appended to the component name to rename each component and avoid naming conflicts between components. The original name of a component of an include structure included in a structure with a suffix cannot have more than 27 characters.

Group names and suffixes are assigned in the same way as with the additions AS name *\[*RENAMING WITH SUFFIX suffix*\]* of the statement [INCLUDE TYPE](javascript:call_link\('abapinclude_type.htm'\)) in ABAP programs. Unlike in the statement INCLUDE TYPE, an include structure in ABAP Dictionary can have a suffix without a specified name.

The fields of an included include structure are still part of the structure. They can only be edited using the structure and any changes made to the structure are applied to all including structures. The fields of an included include structure can, however, also be transformed to direct fields of the including structure. These fields are then no longer associated with the originally included structure.

Notes

-   The potential for naming conflicts between components when including structures makes these actions highly error-prone, particularly in any enhancements made to the included structure. If possible, substructures should be used instead. If this is not an option (for example, in [database tables](javascript:call_link\('abenddic_database_tables.htm'\))), suffixes should be used to avoid naming conflicts.

-   Including structures should not be confused with the adding of components as performed in ABAP Dictionary. Here, the definition of the components is simply copied to a different structure and no binding is persisted. Similarly, an existing include can be resolved to individual component definitions.

-   The name of a group is just an additional addressing option and does not resolve any naming conflicts. In particular, group names in statements like [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) or [SELECT INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)) are ignored. Components renamed with a suffix, on the other hand, really do have this name and are not ignored.

-   A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") (such as a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") or [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")) cannot be included as an include structure. A [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can, however, be included.

Example

The structure DEMO\_WEEK includes the structure DEMO\_DAY five times as an include structure with group names and suffixes. The program DEMO\_INCLUDE\_STRUCTURE shows how its components can be accessed in ABAP.
