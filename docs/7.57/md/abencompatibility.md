  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_objects_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Technical Type Properties of Compatible Data Types, ABENCOMPATIBILITY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Technical Type Properties of Compatible Data Types

The [compatibility](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompatible_glosry.htm "Glossary Entry") of two data types apart from reference types is based on the [technical type properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of the data types. The technical type properties affect the following:

-   Whether data objects can be assigned directly or a [type conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_conversion_glosry.htm "Glossary Entry") has to take place.
-   The [checking of the typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_check.htm) in assignments to [field symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_symbol_glosry.htm "Glossary Entry") or when assigning [actual parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to [formal parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenformal_parameter_glosry.htm "Glossary Entry").

In addition, the compatibility of [value assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) and [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) between data objects apart from reference variables usually determines whether a [conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) has to be performed or not.

In the case of reference types with data objects (reference variables) that have a [dynamic type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_type_glosry.htm "Glossary Entry") apart from the [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry"), the term compatibility that is based entirely on technical type properties is not sufficient.

-   [Non-Generic Data Types Except Reference Types](#@@ITOC@@ABENCOMPATIBILITY_1)
-   [Generic Data Types](#@@ITOC@@ABENCOMPATIBILITY_2)
-   [Reference Types](#@@ITOC@@ABENCOMPATIBILITY_3)

Non-Generic Data Types Except Reference Types   

Two non-generic data types apart from [reference types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_type_glosry.htm "Glossary Entry") and those that contain reference types as components are compatible if all their technical type properties match.

-   In the case of [elementary data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_type_glosry.htm "Glossary Entry"), the technical type properties are as follows:
    
    -   The [built-in ABAP type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry")
    -   The length (for types c, n, p, and x)
    -   The number of [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") (for type p)
    
    With compatible elementary data types, all these properties match.
    
-   In the case of [structured types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm "Glossary Entry"), the technical type property is as follows:
    
    -   The structure of components
    
    The structure of structured types not only refers to the sequence of elementary components in the memory, but also to the combination of components with substructures and whether a substructure is a [boxed component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_component_glosry.htm "Glossary Entry"). The names of the components and of the semantic properties defined in the ABAP Dictionary, such as [conversion routines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_routine_glosry.htm "Glossary Entry") or documentation, however, are not important. With compatible structures, all components are compatible in pairs. This applies recursively down to the level of elementary data types.
    
    If two structures are constructed identically, but different substructures are declared as boxed components, the structures are not compatible.
    
-   In the case of [table types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_type_glosry.htm "Glossary Entry"), the technical type properties are as follows:
    
    -   The [line type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrow_type_glosry.htm "Glossary Entry")
    -   The [table category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_category_glosry.htm "Glossary Entry")
    -   The [table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_key_glosry.htm "Glossary Entry") including alias names
    
    With compatible internal tables, the line types are compatible and table category and table key match. Other properties, such as the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry"), are not important.
    
-   In the case of [mesh types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_type_glosry.htm "Glossary Entry"), the technical type properties are as follows:
    -   The structure of nodes including the node names
    -   The mesh associations of each component defined by ON conditions, including their names and the table key used
-   In the case of [enumerated types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), the technical type properties are as follows:
    
    -   All properties of the enumerated type
    
    Each enumerated type is unique and only compatible with itself.
    

Hints

-   The types listed here are not compatible with one another, for example, an elementary data type is never compatible with a structure, even if it has only one component.
-   The statement [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_enum.htm) cannot be used to define different enumerated types with the same technical type properties. Even data types that are constructed with [RTTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") methods exactly like an existing enumerated type are not compatible with it. An enumerated type defined by direct or indirect reference (including [RTTI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry")) to an existing enumerated type, on the other hand, is compatible.

Generic Data Types   

A non-generic data type apart from a reference type is compatible with a [generic data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") if its technical properties are included in the generic data type.

Reference Types   

A reference type is the static type of reference variables that determines to which objects they can point. At runtime, reference variables also have a dynamic type determined by the type of the object to which a reference variable points. The dynamic type can be more specific than the static type. For this reason, the rules for typing checks, assignments and comparisons cannot be covered by the idea of a compatibility that is based entirely on the technical properties of the static type. Instead, the following three points show how reference types can be used together:

-   When checking typing
    -   A reference variable can be passed to a formal parameter typed as a reference variable if the type of the formal parameter is more general or equal to the type of the reference variable (known as an [upcast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry")) and the formal parameter cannot be changed within the procedure.
    -   A reference variable can be assigned to a field symbol typed as a reference variable if the reference types are identical.
-   Assignments between reference variables are possible using an [upcast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry") or a [downcast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendown_cast_glosry.htm "Glossary Entry").
-   Data reference variables can be compared with all data reference variables and object reference variables can be compared to all object reference variables.

As a rule, data reference variables can only be used with data reference variables and object reference variables only with object reference variables. No conversions take place between [reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry"). Reference variables are either passed without conversion, assigned to each other, compared to each other, or not at all.

Hints

-   These rules for the usability of reference variables in assignments introduced here are one-way. The type of a target reference variable, to which a source reference variable can be assigned, does not itself have to be assignable to the source reference variable. The usability of reference variables in comparisons on the other hand, is not directed.
-   If a reference variable is a component of a structure, the usability of the structure is determined accordingly. In particular, the usability of such a structure regarding assignments is also directed.