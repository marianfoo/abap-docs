  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Data%20Types%2C%20ABENDDIC_DATA_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Data Types

Global data types can be defined as [DDIC types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_type_glosry.htm "Glossary Entry") in the ABAP Dictionary. These DDIC types are visible for and can be accessed from all repository objects of the current AS ABAP, as long as the package concept allows it.

The following data types are available in the ABAP Dictionary:

-   [Data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm)
    
    Elementary data types or reference types with semantic properties, such as documentation or text labels. The type properties of a data element are defined either directly or using a domain.
    
    A [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) determines the properties of a data element, such as the actual data type or the value range. A domain can be used by any number of data elements. A data element does not need to use a domain. In other repository objects, especially in ABAP programs, it is not possible to make a direct reference to a domain.
    
-   [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm)
    
    Complex types whose components are other DDIC data types.
    
-   [DDIC table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm)
    
    Complex types that describe [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") in ABAP.
    

In ABAP programs, the TYPE addition of declarative statements can be used to reference the DDIC data types. In these scenarios, data elements work like elementary ABAP types, structures work like structured ABAP types, and table types work like the corresponding ABAP types. The elementary components of each DDIC data type are based on a [built-in dictionary type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for which a [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) to the corresponding [built-in ABAP type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) is defined. If a DDIC data type is changed, all consumers are modified automatically.

The name of a data type must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm).

In addition to its technical properties, a DDIC data type can have semantic information, such as documentation texts, texts for use on UIs, or search helps. Data types without semantic properties can also be declared in [type pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_type_groups.htm).

Hints

-   DDIC data types can only be used by AS ABAP. They are not created as types on the database system.
-   In addition to DDIC data types, [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") also represent data types which can be used as such in ABAP programs.
-   [Namespace prefixes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennames_repos_obj_guidl.htm "Guideline") can be used to prevent namespace conflicts.
-   Within a program, locally defined types hide identically named global types from the ABAP Dictionary.
-   Global type declarations are also possible in classes and interfaces. Data types should always be declared appropriately to meet the context requirements and requirements for encapsulation. See also the associated [programming guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_dtypes_const_guidl.htm "Guideline").
-   DDIC data types should always be used in accordance with their semantic properties. Elementary DDIC data types in particular should never be selected solely on the basis of their technical properties. See also the associated [programming guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenusing_types_guidl.htm "Guideline").

Example

A DDIC data type, such as the structure DEMO\_CONN, can be referenced in the parameter interfaces of global procedures (methods or function modules) and in the ABAP programs that use the procedures.

CLASS example DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS demo\_meth
      IMPORTING
        para TYPE demo\_conn.
ENDCLASS.
CLASS example IMPLEMENTATION.
  METHOD demo\_meth.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA structure TYPE demo\_conn.
    example=>demo\_meth( structure ).
  ENDMETHOD.
ENDCLASS.

Example

The elementary components of the structure SYST describe the [ABAP system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). The semantic properties of these components or the data elements used for them are designed for system fields used internally in programs. It is not recommended that these components or their data elements are used for other purposes, such as dynpro fields or Web Dynpro fields, only because their technical properties are suitable. Their semantic properties, in particular their text descriptions and documentation, are not usually suitable for UIs. If there are no types with suitable semantic properties that can be reused, new data types should be created.

Continue
[DDIC - Naming Rules for Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm)
[DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm)
[DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm)
[DDIC - Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm)
[DDIC - Type Pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_type_groups.htm)