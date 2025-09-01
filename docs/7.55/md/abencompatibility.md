  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) → 

Compatible Data Types

The compatibility of two data types apart from reference types is based on the technical type attributes of the data types. It is the basis for [type checking](javascript:call_link\('abentyping_check.htm'\)) in assignments to [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") or when assigning [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry").

In addition, the compatibility of [value assignments](javascript:call_link\('abenvalue_assignments.htm'\)) and [comparisons](javascript:call_link\('abenlogexp_comp.htm'\)) between data objects apart from reference variables usually determines whether a [conversion](javascript:call_link\('abenconversion_rules.htm'\)) has to be performed or not.

In the case of reference types with data objects (reference variables) that have a [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") apart from the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry"), the term compatibility that is based entirely on technical type attributes is not sufficient.

-   [Non-Generic Data Types Except Reference Types](#abencompatibility-1--------generic-data-types---@ITOC@@ABENCOMPATIBILITY_2)

-   [Reference Types](#@@ITOC@@ABENCOMPATIBILITY_3)

Non-Generic Data Types Except Reference Types

Two non-generic data types apart from [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") and those that contain reference types as components are compatible if all their technical type attributes match.

-   In the case of [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The [built-in ABAP type](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry")

-   The length (for types c, n, p, and x)

-   The number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") (for type p)

With compatible elementary data types, all these attributes match.

-   In the case of [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry"), the technical type attribute is as follows:

-   The structure of components

The structure of structured types not only refers to the sequence of elementary components in the memory, but also to the combination of components to substructures and whether a substructure is a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"). The names of the components and of the semantic attributes defined in the ABAP Dictionary , such as [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") or documentation, however, are not important. With compatible structures, all components are compatible in pairs. This applies recursively down to the level of elementary data types.

If two structures are constructed identically, but different substructures are declared as boxed components, the structures are not compatible.

-   In the case of [table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry")

-   The [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry")

-   The [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry")

With compatible internal tables, the line types are compatible and table category and table key match. Other attributes, such as the initial memory requirement, are not important.

-   In the case of [mesh types](javascript:call_link\('abenmesh_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The structure of nodes including the node names

-   The mesh associations of each component defined by ON conditions, including their names and the table key used

-   In the case of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   All properties of the enumerated type

Each enumerated type is unique and only compatible with itself.

Hints

-   The types listed here are not compatible with one another, for example, an elementary data type is never compatible with a structure, even if it has only one component.

-   The statement [TYPES](javascript:call_link\('abaptypes_enum.htm'\)) cannot be used to define different enumerated types with the same technical type properties. Even data types that are constructed with [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") methods exactly like an existing enumerated type are not compatible with it. An enumerated type defined by direct or indirect reference (including [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry")) to an existing enumerated type, on the other hand, is compatible.

Generic Data Types

A non-generic data type apart from a reference type is compatible with a [generic data type](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") if its technical attributes are included in the generic data type.

Reference Types

A reference type is the static type of reference variables that determines to which objects they can point. At runtime, reference variables also have a dynamic type determined by the type of the object to which a reference variable points. The dynamic type can be more specific than the static type. For this reason, the rules for typing checks, assignments and comparisons cannot be covered by the idea of a compatibility that is based entirely on the technical attributes of the static type. Instead, the following three points show how reference types can be used together:

-   When checking typing

-   A reference variable can be passed to a formal parameter typed as a reference variable if the type of the formal parameter is more general or equal to the type of the reference variable (known as an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")) and the formal parameter cannot be changed within the procedure.

-   A reference variable can be assigned to a field symbol typed as a reference variable if the reference types are identical.

-   Assignments between reference variables are possible using an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") or a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry").

-   Data reference variables can be compared to all data reference variables and object reference variables can be compared to all object reference variables.

As a rule, data reference variables can only be used with data reference variables and object reference variables only with object reference variables. No conversions take place between [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). Reference variables are either passed without conversion, assigned to each other, compared to each other, or not at all.

Hints

-   These rules for the usability of reference variables in assignments introduced here are one-way. The type of a target reference variable, to which a source reference variable can be assigned, does not itself have to be assignable to the source reference variable. The usability of reference variables in comparisons on the other hand, is not directed.

-   If a reference variable is a component of a structure, the usability of the structure is determined accordingly. In particular, the usability of such a structure regarding assignments is also directed.