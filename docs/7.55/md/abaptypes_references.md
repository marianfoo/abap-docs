  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES, REF TO

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES ref\_type *{* *{*TYPE REF TO type*}*
               *|* *{*LIKE REF TO dobj*}* *}*.

Effect

The addition REF TO defines a data type for a [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). The static type of the reference variable is specified after REF TO. The static type restricts the object quantity to which a reference variable can point. The dynamic type of a reference variable is the data type and the object class to which it points. The static type is always more general or the same as the dynamic type (see also [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\))).

Apart from data and object, no [generic data types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified after TYPE REF TO.

Types for Data Reference Variables

If the predefined generic data type [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is specified for type, a data type for a data reference variable of the generic static type data is created. Reference variables like these can point to any data objects.

If a non-generic data type is specified for type (meaning a non-generic data type from the ABAP Dictionary, from ABAP CDS, or from the public visibility section of a global class, a non-generic local program type already defined using TYPES, or a non-generic [built-in ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\))), a data type is created for a data reference variable with the corresponding static type. Reference variables like these can point to all data objects of the same type.

The same applies to dobj as to [TYPES ... LIKE](javascript:call_link\('abaptypes_referring.htm'\)). A data type is created for a data reference variable whose static type is inherited from the data type of the specified data object. Reference variables like these can point to all data objects of the same type.

A data reference variable can be dereferenced in different ways, depending on its static type:

-   A data reference variable typed generically with TYPE REF TO data can be dereferenced only in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) with the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") \->\*.
    

-   A data reference variable typed fully with TYPE REF TO complete\_type or LIKE REF TO dobj can be dereferenced in all suitable operand positions using the dereferencing operator \->\*. If the static data type is structured, the [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") enables access to the components of the structure with dref->comp.
    

Types for Data Reference Variables

If the predefined generic data type [object](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is specified for type, a data type for a class reference variable of the generic static type data is created. Reference variables like these can point to instances of any class.

If a global or local class is specified for type, a data type for a class reference variable whose static type is the specified class is created. Reference variables like these can point to all instances of the class and its subclasses. A class reference variable can be used to access all components of an object. If the static type is the superclass of the dynamic type, the components that can be accessed statically are a subset of the components of the dynamic type. All attributes and methods of the dynamic type can be accessed using a class reference variable and the dynamic access to object attributes (see ASSIGN) and the dynamic method call (see [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\))).

If a global or local interface is specified for type, a data type for an interface reference variable whose static type is the specified interface is created. Reference variables like these can point to objects of all classes that implement the interface. When using interface references to access components of objects, the name of the static type is always implicitly placed in front of the component. An interface reference variable can only be used to access those interface components of an object that are known in the static type. This applies to both dynamic and static access.

Hints

-   The TYPE addition can be used to define data types for data reference variables and object reference variables. Only data types for data reference variables can be defined using the LIKE addition.

-   The predefined generic data type any can only be specified after TYPE, like all other [generic types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) apart from data and object, but not after REF TO.

-   Data reference variables can also be declared with the static type of an [enumerated type](javascript:call_link\('abaptypes_enum.htm'\)) and can then point to data objects of the corresponding type.

-   Since the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") of the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") are in the same namespace as all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP, the specification of type is always unique.
    

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