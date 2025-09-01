  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Predefined Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

Generic ABAP Types

The following table shows the built-in generic ABAP types. A generic data type is a type not specified in full that includes multiple fully specified types. With the exception of object, all generic types can be used after [TYPE](javascript:call_link\('abentyping_generic.htm'\)) for the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"). When a data object is assigned to generically typed field symbols using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)), or when a data object is used as an actual parameter for generically typed [formal parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") for [procedure calls](javascript:call_link\('abencall_procedures.htm'\)), the system checks whether the concrete data type is [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the object (in other words, whether the data type is a subset of the generic type).

The only generic types that can be used after [TYPE REF TO](javascript:call_link\('abaptypes_references.htm'\)) are data, for the generic typing of data references, and object, for the generic typing of object references.

Type

Description

any

Any data type

any table

Internal table with any table category

c

Text field with a generic length

clike

Character-like (c, n, and string plus the date/time types d, t and character-like [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"))

csequence

Text-like (c, string)

data

Any data type

decfloat

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") (decfloat16, decfloat34)

hashed table

[Hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry")

index table

[Index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry")

n

[Numeric text](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry") with generic length

numeric

Numeric ((b, s), i, int8, p, decfloat16, decfloat34, f)

object

Any object type (root class of the inheritance hierarchy)

p

Packed number with generic length and generic number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry")

simple

Elementary data type including [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") and structured types with exclusively character-like flat components

sorted table

[Sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry")

standard table

[Standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry")

table

Standard table

x

Byte field with generic length

xsequence

Byte-like (x, xstring)

Besides the built-in generic types shown in the table above, ABAP at present includes exactly one kind of self-defined generic type. A [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") defined with [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) or defined in ABAP Dictionary is generic if the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is not defined or is incompletely defined or if the [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") of the table type is generic.

Notes

-   When generic types are used for the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"), it must be ensured that the correct results are obtained regardless of the actual type being used. For example, if csequence is used, the potential fixed types c and string must display different behavior with respect to trailing blanks or the potential numeric types in calculations for numeric must produce different [calculation types](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry"). More specifically, when existing typings are generalized, it may be necessary to modify the implementation accordingly.

-   The generic type any can, like all generic types listed here except data and object, only be specified directly after TYPE and has exactly the same effect there as the generic type data. After [TYPE REF TO](javascript:call_link\('abaptypes_references.htm'\)), only data (for fully generic data reference variables) and object (for fully generic object reference variables) can be specified. Specifying REF TO any would define a fully generic reference variable covering data references and object references. This is not currently possible.

-   The generic type object can only be specified after REF TO and not directly after TYPE.

-   The object type object plays a special role, because strictly speaking it is the empty root class of all object classes of ABAP Objects and is not a genuine generic type. An object reference variable typed using REF TO object can point to any object because of the general reference variable property stating that reference variables with the static type of a superclass can point to objects in all related subclasses. When compared with a data reference variable typed using the real generic data type data, which can point to any data object, it is perfectly possible to classify object as a generic type.

-   Note with generic type p that when passing functional methods or arithmetic expressions to this type of typed input parameters, the length is always set to 16. With generic types numeric, simple and data or any, this is only the case for arithmetic expressions.

-   Regardless of their [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), [enumerative types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are only enclosed by the generic types any, data and simple.

Example

Uses the built-in generic type numeric to type the input parameters of a method. Parameters with any numeric data types can be passed to the method (but no other data types).

METHODS numeric\_operation IMPORTING num1          TYPE numeric
                                    num2          TYPE numeric
                          RETURNING VALUE(result) TYPE decfloat34.