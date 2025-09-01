# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Data Types / Structures / Technical Attributes of Structures

Included pages: 2


### abenddic_structures_tech.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Technical Attributes of Structures

A structure describes a [structure type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") constructed from components and with the following technical attributes:

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

-   A substructure cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), but it can be defined using a reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Continue
[Enhancement Category of Structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\))


### abenddic_structures_enh_cat.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Technical Attributes of Structures](javascript:call_link\('abenddic_structures_tech.htm'\)) → 

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
