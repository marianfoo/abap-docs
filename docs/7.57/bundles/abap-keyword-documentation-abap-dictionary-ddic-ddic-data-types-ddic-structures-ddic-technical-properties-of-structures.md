# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Technical Properties of Structures

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenddic_structures_tech.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_tech.htm)
- [abenddic_structures_enh_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_enh_cat.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.208Z

---

### abenddic_structures_tech.htm

> **📖 Official SAP Documentation**: [abenddic_structures_tech.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Technical Properties of Structures, ABENDDIC_STRUCTURES_TECH, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Technical Properties of Structures

A DDIC structure describes a [structure type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") constructed from components and with the following technical properties:

-   Component name
    
    The name of a component can have a maximum of 30 characters, can consist of only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"). The following restrictions apply:
    
    -   A component name cannot be the name of the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line reserved in ABAP.
    -   If a structure is to be included in a [database table](javascript:call_link\('abenddic_database_tables.htm'\)), however, the component names cannot have any of the reserved names that are forbidden in DDIC database tables.
-   Component type
    -   For elementary components, the technical properties ( [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and any decimal places) are defined with reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) for an elementary type in the ABAP Dictionary or directly in the structure component. In the case of [DDIC currency fields](javascript:call_link\('abenddic_currency_field_glosry.htm'\) "Glossary Entry") and [DDIC quantity fields,](javascript:call_link\('abenddic_quantity_glosry.htm'\) "Glossary Entry") a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) must be specified for the unit.
    -   For reference-like components, the technical properties are defined using a reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any DDIC data type or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,
    -   Substructures are defined by reference to [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)), or [DDIC views](javascript:call_link\('abenddic_views.htm'\)). A substructure can be defined as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"). In ABAP data objects declared with reference to the DDIC structure, a static box supports [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").
    -   Tabular components are defined by reference to a [DDIC table type](javascript:call_link\('abenddic_table_types.htm'\)).
-   Enhancement category
    
    The [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) of a structure specifies how a structure can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") and affects how ABAP programs that work with data objects of this structure type are checked.
    
-   Activation type
    
    An [activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\)) can be defined for a structure, like for DDIC database tables, but has no specific use here.
    

Hints

-   In ABAP, the component names of structures are not strictly speaking a [technical type property](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry"). They are listed here however to simplify the picture.
-   The above rules for component names are checked strictly by the ABAP Dictionary only for table fields of DDIC database tables and not for structures. Component names of structures can contain special characters such as a colon : that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.
-   A substructure cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), nor using a reference to a [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The reason is that access to CDS-managed DDIC views is [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)).

Continue
[DDIC - Enhancement Category of Structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\))



**📖 Source**: [abenddic_structures_tech.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_tech.htm)

### abenddic_structures_enh_cat.htm

> **📖 Official SAP Documentation**: [abenddic_structures_enh_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_enh_cat.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenddic_structures_enh_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_enh_cat.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Technical Properties of Structures](javascript:call_link\('abenddic_structures_tech.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Enhancement Category of Structures, ABENDDIC_STRUCTURES_ENH_CAT, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Enhancement Category of Structures

ABAP Dictionary structures and DDIC database tables that are delivered by SAP can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry"). These types of changes cause problems if the enhancements change the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry").

For this reason, structures and DDIC database tables are classified in order to be able to recognize and handle problems related to structure enhancements. This classification is used in the program check to create a warning at all positions where the program works with structures, and where later structure enhancements could cause syntax errors or changed program behavior. When a structure or a DDIC database table is defined in the ABAP Dictionary, the enhancement categories shown in the following table can be used as a classification.

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

The warnings from the program check are classified into three levels from the following table, depending on the effects of the allowed structure enhancements.

Level

Type of Check

Meaning

A

Syntax check

An enhancement that completely exhausts the enhancement category of the affected structure produces a syntax error.

B

Extended check

Permitted enhancements can produce syntax errors, but not always.

C

Extended check

Permitted enhancements cannot produce syntax errors, although changes to program behavior do cause semantic problems.

Example

If the structure ddic\_struc in the ABAP Dictionary is defined only with [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") components but is classified as Can be enhanced in any way, the following program section produces a warning in the syntax check. If the structure were to be enhanced by a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, therefore either the structure ddic\_struc must be classified in the ABAP Dictionary as Can be enhanced and character-like or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc,
      str TYPE string,
      off  TYPE i,
      len TYPE i.
...
str = my\_struc+off(len).
