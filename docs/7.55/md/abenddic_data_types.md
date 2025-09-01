---
title: "DDIC - Data Types"
description: |
  Global data types can be defined in the ABAP Dictionary as DDIC types(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_type_glosry.htm 'Glossary Entry'). These DDIC types are visible for all repository objects of the current AS ABAP and can be used there (as long as the package
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm"
abapFile: "abenddic_data_types.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "types", "internal-table", "abenddic"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) → 

DDIC - Data Types

Global data types can be defined in the ABAP Dictionary as [DDIC types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_type_glosry.htm "Glossary Entry"). These DDIC types are visible for all repository objects of the current AS ABAP and can be used there (as long as the package concept allows it).

The possible data types in ABAP Dictionary are as follows:

-   [Data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm)

Elementary data types or reference types with semantic attributes (such as documentation or descriptions). The type attributes of a data element are defined either directly or using a domain.

A [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm) describes the attributes of data elements, such as the actual data type or the value range. A domain can be used by any number of data elements, but a data element does not itself need to use a domain. In other repository objects, most specifically ABAP programs, it is not possible to make a direct reference to a domain.

-   [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm)

Complex types that consist of components of any other DDIC data types.

-   [DDIC table types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_types.htm)

Complex types that describe [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry") in ABAP.

In ABAP programs, the TYPE addition of declarative statements can be used to reference the data types in ABAP Dictionary. Here, data elements work like elementary ABAP types, structures work like structured ABAP types, and table types work like the corresponding ABAP types. The elementary components of each data type in ABAP Dictionary are based on a set of [built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in ABAP Dictionary for which a [mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) to the [built-in ABAP types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) is defined. If a data type is changed in ABAP Dictionary, all consumers are modified automatically.

The name of a data type must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm).

Alongside its technical attributes, a data type in ABAP Dictionary can have semantic information, such as documentation texts, texts for use on UIs, or associations with search helps. Data types without semantic attributes can also be declared in groups known as [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_type_groups.htm).

Hints

-   The data types in ABAP Dictionary can only be used by AS ABAP and instances of these types are not created as types of the database system.

-   In addition to the data types in ABAP Dictionary, the [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") also represent data types, which can be used as such in ABAP programs.

-   As well as in ABAP Dictionary, global type declarations are also possible in classes and interfaces. Data types should always be created in a context that meets the requirements in question, while also encapsulating as much as possible. See also the associated [programming guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_dtypes_const_guidl.htm "Guideline").

-   A data type in ABAP Dictionary should always be used in accordance with its semantic attributes. Elementary data types in ABAP Dictionary in particular should never be selected only on the basis of their technical attributes. See also the associated [programming guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenusing_types_guidl.htm "Guideline").

-   [Namespace prefixes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennames_repos_obj_guidl.htm "Guideline") can be used to prevent namespace conflicts.

-   Within a program, locally defined types hide global types from ABAP Dictionary with the same name.

Example

A data type defined in ABAP Dictionary, such as the structure DEMO\_CONN, can be referenced in the parameter interfaces of global procedures (methods or function modules) and in the ABAP programs that use the procedures.

CLASS cl\_demo\_class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS demo\_meth
      IMPORTING
        para TYPE demo\_conn .
ENDCLASS.
DATA structure TYPE demo\_conn.
START-OF-SELECTION.
  cl\_demo\_class=>demo\_meth( structure ).
CLASS cl\_demo\_class IMPLEMENTATION.
  METHOD demo\_meth.
    ...
  ENDMETHOD.
ENDCLASS.

Example

The elementary components of the structure SYST describe the [ABAP system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields.htm). The semantic attributes of these components or the data elements used for them are designed for system fields used internally in programs. It is not recommended that these components or their data elements are used for other purposes, such as dynpro fields or Web Dynpro fields, just because their technical attributes are right. Their semantic attributes, in particular their text descriptions and documentation, are not usually suitable for UIs. If there are no types with suitable semantic attributes that can be reused, new data types must be created.

Continue
[DDIC - Naming Rules for Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm)
[DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm)
[DDIC - Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm)
[DDIC - Table Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_types.htm)
[DDIC - Type Pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_type_groups.htm)