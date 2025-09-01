  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) → 

Compatible Data Types

The compatibility of two data types (except reference types) is based on the technical type attributes of the data types. It is the basis for [type checking](javascript:call_link\('abentyping_check.htm'\)) in assignments to [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") or when assigning [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry").

In the case of [value assignments](javascript:call_link\('abenvalue_assignments.htm'\)) and [comparisons](javascript:call_link\('abenlogexp_comp.htm'\)) between data objects (except reference variables), compatibility also determines whether a [conversion](javascript:call_link\('abenconversion_rules.htm'\)) has to be performed or not.

In the case of reference types with data objects (reference variables) that have a [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") alongside the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry"), a compatibility concept based entirely on technical type attributes is not sufficient.

-   [Non-Generic Data Types Except Reference Types](#@@ITOC@@ABENCOMPATIBILITY_1)

-   [Generic Data Types](#@@ITOC@@ABENCOMPATIBILITY_2)

-   [Reference Types](#@@ITOC@@ABENCOMPATIBILITY_3)

Non-Generic Data Types Except Reference Types

Two non-generic data types (not [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry")) and data types that contain reference types as components are compatible if all their technical type attributes match.

-   In the case of [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The [built-in ABAP type](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry")

-   The length (in the case of the types c, n, p, and x)

-   The number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") (in the case of the type p)

With compatible elementary data types, all these attributes match.

-   In the case of [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry"), the technical type attribute is as follows:

-   the component structure

The layout of structured types does not only refer to the sequence of elementary components in memory, but also to the combination of components with substructures and whether a substructure is a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"). The names of the components and of the semantic attributes defined in ABAP Dictionary , such as [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") or documentation, however, are not important. With compatible structures, all components are compatible in pairs. This applies recursively down to the level of elementary data types.

If two structures are both constructed identically but different substructures are declared as boxed components, then the structures are not compatible.

-   In the case of [table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry")

-   The [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry")

-   The [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry")

With compatible internal tables, the row types are compatible and table category and table key match. Other attributes, such as the initial memory requirement, are not important.

-   In the case of [mesh types](javascript:call_link\('abenmesh_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   The layout of nodes (including the node names)

-   The mesh associations (defined by ON conditions) of every component, including names and the table key used

-   In the case of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), the technical type attributes are as follows:

-   All properties of the enumerated type

Every enumerated type is unique and only compatible with itself.

Notes

-   The types listed here are not compatible with one another - for example, an elementary data type is never compatible with a structure, even if the structure has only one component.

-   The statement [TYPES](javascript:call_link\('abaptypes_enum.htm'\)) cannot be used to define different enumerated types with the same technical type properties. Even data types constructed with [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") methods exactly like an existing enumerated type are not compatible with it. An enumerated type defined by direct or indirect reference (including [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry")) to an existing enumerated type, is compatible with it however.

Generic Data Types

A non-generic data type (not a reference type) is compatible with a [generic data type](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") if its technical attributes are covered by the generic data type.

Reference Types

A reference type is the static type of reference variables and determines to which objects they can point. At runtime, reference variables also have a dynamic type determined by the type of the object, which a reference variable points to. The dynamic type may be more specialized than the static type. For this reason, the rules for typing checks, assignments and comparisons cannot be covered by the idea of a compatibility that is based entirely on the technical attributes of the static type. Instead, the following three issues show how reference types can be used together:

-   When checking typings, a reference variable can

-   A reference variable can be passed to a formal parameter typed as a reference variable, provided that the type of the formal parameter is more general or equal to the type of the reference variable (known as an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")) and the formal parameter cannot be changed within the procedure.

-   be assigned to a field symbol typed as a reference variable, provided that the reference types are identical.

-   Assignments between reference variables can be made by using an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") or a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry").

-   Data reference variables can be compared to all data reference variables and object reference variables can be compared to all object reference variables.

As a rule, you can only use data reference variables with data reference variables and object reference variables only with object reference variables. No conversions take place between [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). They are either passed without conversion or assigned to each other or compared to each other or not.

Notes

-   These rules for the usability of reference variables for assignments is one-way. The type of a target reference variable, to which a source reference variable can be assigned, does not itself have to be assignable to the source reference variable. In contrast, the usability of reference variables in the case of comparisons is not a one-way relationship.

-   If a reference variable is a component of a structure, the usability of the structure is determined accordingly. In particular, the usability of this structure type with regard to assignments is also a one-way relationship.