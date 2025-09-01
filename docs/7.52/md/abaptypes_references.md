  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES - REF TO

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES ref\_type *{* *{*TYPE REF TO type*}*
               *|* *{*LIKE REF TO dobj*}* *}*.

Effect

The addition REF TO specifies a data type for a [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). The static type of the reference variable is specified after REF TO. The static type restricts the object quantity to which a reference variable can refer. The dynamic type of a reference variable is the data type and the object class to which it refers. The static type is always more general or the same as the dynamic type (see also [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\))).

Apart from data and object, no [generic data types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified after TYPE REF TO.

Types for Data Reference Variables

If the predefined generic data type [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is specified for type, a data type for a data reference variable of the generic static type data is created. Such reference variables can refer to any data objects.

If type is specified as any non-generic data type (meaning a non-generic data type from ABAP Dictionary or from the public visibility section of a global class), as a non-generic local program type already defined using TYPES, or as a non-generic [built-in ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)), a data type is created for a data reference variable with an appropriate static type. Such reference variables can refer to all data objects of the same type.

The same applies to dobj as to [TYPES ... LIKE](javascript:call_link\('abaptypes_referring.htm'\)). A data type is created for a data reference variable and the static type of this variable is inherited from the data type of the specified data object. Such reference variables can refer to all data objects of the same type.

A data reference variable can be deferenced in different ways, depending on its static type:

-   A data reference variable typed generically with TYPE REF TO data can be dereferenced only in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) with the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") \->\*.
    
-   A data reference variable typed in full with TYPE REF TO complete\_type or LIKE REF TO dobj can be dereferenced in all matching operand positions using the dereferencing operator \->\*. If the static data type is structured, the [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") enables access to the components of the structure with dref->comp.
    

Types for Data Reference Variables

If the predefined generic data type [object](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is specified for type, a data type for a class reference variable of the generic static type data is created. Such reference variables can refer to instances of any class.

If a global class or local class is specified for type, a data type for a class reference variable whose static type is the specified class is created. Such reference variables can refer to all instances of the class and its subclasses. A class reference variable can be used to access all components of an object. If the static type is the super class of the dynamic type, then the components that can be statically called are a subset of the components of the dynamic type. All attributes and methods of a dynamic type can be called using a class reference variable and the dynamic object attribute call (see ASSIGN) and the dynamic method call (see [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\))).

If a global or local interface is specified for type, a data type for an interface reference variable whose static type is the specified interface is created. Such reference variables can refer to objects of all classes that implement the interface. When calling components of objects with interface references, the name of the static type is always implicitly placed before the component. An interface reference variable can be used to access only those interface components of an object that are known in the static type. This applies to both dynamic and static access.

Notes

-   The TYPE addition can be used to define data types for data reference variables and object reference variables. Only data types for data reference variables can be defined using the LIKE addition.
    
-   The predefined generic data type any can only be specified after TYPE (as is the case with all other [generic types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) apart from data) and cannot be specified after REF TO.
    
-   Data reference variables can be declared with the static type of an [enumerated type](javascript:call_link\('abaptypes_enum.htm'\)) and can then point to data objects of the corresponding type.
    
-   The global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") and the global [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") are in the same namespaces, which means that type is always unique when specified.
    

Example

This example shows how data types are defined for an interface reference variable and for a class reference variable and how a data reference is defined with the static type of the interface reference variable.

INTERFACE i1.
...
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i1.
ENDCLASS.
TYPES: iref TYPE REF TO i1,
       cref TYPE REF TO c1,
       dref TYPE REF TO iref.