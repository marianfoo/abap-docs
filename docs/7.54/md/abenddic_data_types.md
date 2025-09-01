  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) → 

Data Types

Global data types can be defined in the ABAP Dictionary. These data types are visible for all repository objects of the current AS ABAP and can be used there (as long as the package concept allows it).

The possible data types in ABAP Dictionary are:

-   [Data elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_elements.htm) for elementary data types and reference types

-   [Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) that can comprise any other number of data types.

-   [Table types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_table_types.htm) with any row type

In ABAP programs, the TYPE addition of declarative statements can be used to reference the data types in ABAP Dictionary. Here, data elements work like elementary ABAP types, structures work like structured ABAP types, and table types work like the corresponding ABAP types. The elementary components of each data type in ABAP Dictionary are based on a set of [built-in types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary for which a [mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) to the [built-in ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) is defined. If a data type is changed in ABAP Dictionary, all consumers are modified automatically.

The name of a data type

-   can have a maximum of 30 characters,

-   can consist of letters, numbers, and underscores,

-   must start with a letter,

-   can be introduced using a [namespace prefix](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) of a [prefix namespace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprefix_name_space_glosry.htm "Glossary Entry")

-   is in the same namespace as the global classes and interfaces of the [class library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_library_glosry.htm "Glossary Entry").

-   must not be the name of a [built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm) in ABAP.

All types created in ABAP Dictionary, including [database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and [views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm), are in a namespace of the global [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_type_glosry.htm "Glossary Entry") and [object types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_type_glosry.htm "Glossary Entry") that covers the entire current AS ABAP. [Domains](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendomain_glosry.htm "Glossary Entry"), on the other hand, are in a separate namespace, which enables them to have the same name as, for example, a data element.

Alongside its technical attributes, a data type in ABAP Dictionary can have semantic information, such as documentation texts, texts for use on UIs, or associations with search helps. Data types without semantic attributes can also be declared in groups known as [type groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_type_groups.htm).

Notes

-   In addition to the classic data types of the ABAP Dictionary, the [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") of ABAP Dictionary also display data types, which can be used as such in ABAP programs.

-   As well as in ABAP Dictionary, global type declarations are also possible in classes and interfaces. Data types should always be created in a context that meets the requirements in question, while also encapsulating as much as possible. See also the associated [programming guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_dtypes_const_guidl.htm "Guideline").

-   A data type in ABAP Dictionary should always be used in accordance with its semantic attributes. Elementary data types in ABAP Dictionary in particular should never be selected only on the basis of their technical attributes. See also the associated [programming guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenusing_types_guidl.htm "Guideline").

-   [Namespace prefixes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennames_repos_obj_guidl.htm "Guideline") can be used to prevent namespace conflicts.

-   Within a program, locally defined types obscure global types from ABAP Dictionary with the same name.

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

The elementary components of the structure SYST describe the [ABAP system fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm). The semantic attributes of these components or the data elements used for them are designed for system fields used internally in programs. It is not recommended that these components or their data elements are used for other purposes, such as dynpro fields or Web Dynpro fields, just because their technical attributes are right. Their semantic attributes, in particular their text descriptions and documentation, are not usually suitable for UIs. If there are no types with suitable semantic attributes that can be reused, new data types must be created.

Continue
[Data Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_elements.htm)
[Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm)
[Table Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_table_types.htm)
[Type Groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_type_groups.htm)