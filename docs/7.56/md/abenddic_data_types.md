  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Data Types

Global data types can be defined in the ABAP Dictionary as [DDIC types](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"). These DDIC types are visible for all repository objects of the current AS ABAP and can be used there (as long as the package concept allows it).

The possible data types in the ABAP Dictionary are as follows:

-   [Data elements](javascript:call_link\('abenddic_data_elements.htm'\))
    
    Elementary data types or reference types with semantic attributes (documentation or descriptions). The type attributes of a data element are defined either directly or using a domain.
    
    A [domain](javascript:call_link\('abenddic_domains.htm'\)) describes the attributes of data elements, such as the actual data type or the value range. A domain can be used by any number of data elements. However a data element does not itself need to use a domain. In other repository objects, most specifically ABAP programs, it is not possible to make a direct reference to a domain.
    
-   [DDIC structures](javascript:call_link\('abenddic_structures.htm'\))
    
    Complex types that consist of components of any other DDIC data types.
    
-   [DDIC table types](javascript:call_link\('abenddic_table_types.htm'\))
    
    Complex types that describe [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") in ABAP.
    

In ABAP programs, the TYPE addition of declarative statements can be used to reference the data types in the ABAP Dictionary. Here, data elements work like elementary ABAP types, structures work like structured ABAP types, and table types work like the corresponding ABAP types. The elementary components of each data type in the ABAP Dictionary are based on a set of [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in the ABAP Dictionary for which a [mapping](javascript:call_link\('abenddic_builtin_types.htm'\)) to the [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) is defined. If a data type is changed in the ABAP Dictionary, all consumers are modified automatically.

The name of a data type must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)).

In addition to its technical attributes, a data type in the ABAP Dictionary can have semantic information, such as documentation texts, texts for use on UIs, or associations with search helps. Data types without semantic attributes can also be declared in groups known as [type pools](javascript:call_link\('abenddic_type_groups.htm'\)).

Hints

-   The data types in the ABAP Dictionary can only be used by AS ABAP and instances of these types are not created as types of the database system.
-   In addition to the data types in the ABAP Dictionary, the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") also represent data types, which can be used as such in ABAP programs.
-   As well as in the ABAP Dictionary, global type declarations are also possible in classes and interfaces. Data types should always be created in a context that meets the respective requirements, while also encapsulating as much as possible. See also the associated [programming guidelines](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline").
-   A data type in the ABAP Dictionary should always be used in accordance with its semantic attributes. Elementary data types in the ABAP Dictionary in particular should never be selected solely on the basis of their technical attributes. See also the associated [programming guidelines](javascript:call_link\('abenusing_types_guidl.htm'\) "Guideline").
-   [Namespace prefixes](javascript:call_link\('abennames_repos_obj_guidl.htm'\) "Guideline") can be used to prevent namespace conflicts.
-   Within a program, locally defined types hide identically named global types from the ABAP Dictionary.

Example

A data type defined in the ABAP Dictionary, such as the structure DEMO\_CONN, can be referenced in the parameter interfaces of global procedures (methods or function modules) and in the ABAP programs that use the procedures.

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

The elementary components of the structure SYST describe the [ABAP system fields](javascript:call_link\('abensystem_fields.htm'\)). The semantic attributes of these components or the data elements used for them are designed for system fields used internally in programs. It is not recommended that these components or their data elements are used for other purposes, such as dynpro fields or Web Dynpro fields, only because their technical attributes are suitable. Their semantic attributes, in particular their text descriptions and documentation, are not usually suitable for UIs. If there are no types with suitable semantic attributes that can be reused, new data types should be created.

Continue
[DDIC - Naming Rules for Data Types](javascript:call_link\('abenddic_types_names.htm'\))
[DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\))
[DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\))
[DDIC - Table Types](javascript:call_link\('abenddic_table_types.htm'\))
[DDIC - Type Pools](javascript:call_link\('abenddic_type_groups.htm'\))