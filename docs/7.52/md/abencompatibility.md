  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) → 

Compatible Data Types

The compatibility of two data types (except reference types) is based on their technical type attributes. It is the basis for [type checking](javascript:call_link\('abentyping_check.htm'\)) in assignments to [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") or when assigning [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry").

In the case of [value assignments](javascript:call_link\('abenvalue_assignments.htm'\)) and [comparisons](javascript:call_link\('abenlogexp_comp.htm'\)) between data objects (except reference variables), compatibility also determines whether a [conversion](javascript:call_link\('abenconversion_rules.htm'\)) has to be performed or not.

In the case of reference types with data objects (reference variables) that have a [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") as well as the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry"), then compatibility, which is based entirely on technical type attributes, is not sufficient.

Non-Generic Data Types (Except Reference Types)

Two non-generic data types (not [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry")) and data types that contain reference types as components are compatible if all their technical type attributes match.

-   In the case of [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The [predefined ABAP type](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry")

-   The length (in the case of the types c, n, p, and x)

-   The number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") (in the case of the type p)

In the case of compatible elementary data types, all these attributes match.

-   In the case of [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry"), the technical type attribute is as follows:

-   The layout of components

The layout of structured types does not only refer to the sequence of elementary components in memory, but also to the combination of components with substructures and whether a substructure is a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"). The names of the components and of the semantic attributes defined in ABAP Dictionary, such as [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") or documentation, however, are not important. In the case of compatible structures, all components are compatible in pairs. This applies recursively down to the level of elementary data types.

If two structures are both constructed identically but different substructures are declared as boxed components, the structures are not compatible.

-   In the case of [table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry")

-   [Table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry")

-   [Table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry")

In the case of compatible internal tables, the row types are compatible and the table category and table key match. Other attributes, such as the initial memory requirement, are not important.

-   In the case of [mesh types](javascript:call_link\('abenmesh_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The layout of nodes (including the node names)

-   The associations (defined by ON conditions) of every component, including names and the table key used

-   In the case of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   All properties of the enumerated type

Every enumerated type is unique and only compatible with itself.

Notes

-   The types specified here are not compatible with one another. For example, an elementary data type is never compatible with a structure, even if the structure has only one component.

-   Statement [TYPES](javascript:call_link\('abaptypes_enum.htm'\)) cannot be used to define different enumerated types with the same technical type properties. Even data types constructed with [RTTC](javascript:call_link\('abenrttc_glosry.htm'\) "Glossary Entry") methods exactly like an existing enumerated type are not compatible with it. An enumerated type defined by direct or indirect reference (including [RTTI](javascript:call_link\('abenrtti_glosry.htm'\) "Glossary Entry")) to an existing enumerated type, is compatible with it however.

Generic Data Types

A non-generic data type (not a reference type) is compatible with a [generic data type](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") if its technical attributes are covered by the generic data type.

Reference Types

A reference type is the static type of reference variables and determines to which objects they can point. At runtime, reference variables also have a dynamic type determined by the type of the object pointed to by a reference variable. The dynamic type may be more specialized than the static type. For this reason, the rules for typing checks, assignments, and comparisons cannot be covered by a compatibility concept based entirely on the technical attributes of the static type. Instead, the following three points show how reference types can be used together:

-   When typings are checked, the following is possible:

-   A reference variable can be passed to a formal parameter typed as a reference variable, provided that the type of the formal parameter is more general or equal to the type of the reference variable (known as an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")) and the formal parameter cannot be changed within the procedure.

-   A reference variable can be assigned to a field symbol typed as a reference variable, provided that the reference types are identical.

-   Assignments between reference variables can be carried out by using an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") or a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry").

-   Data reference variables can be compared with all data reference variables and object reference variables can be compared with all object reference variables.

As a rule, data reference variables can only be used with data reference variables and object reference variables can be used only with object reference variables. No conversions take place between [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). They are either passed as unconverted reference variables, assigned to each other, compared with each other, or no action at all takes place.

Notes

-   These rules for the usability of reference variables for assignments are one-way rules. The type of a target reference variable to which a source reference variable can be assigned does not itself have to be assignable to the source reference variable. In contrast, the usability of reference variables in the case of comparisons is not a one-way relationship.

-   If a reference variable is a component of a structure, the usability of the structure is determined accordingly. In particular, the usability of this structure type with respect to assignments is also a one-way relationship.