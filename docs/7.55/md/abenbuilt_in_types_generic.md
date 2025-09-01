  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types.htm) → 

Generic ABAP Types

The following table shows the built-in generic ABAP types. A generic data type is an incomplete type specification that contains multiple complete type specifications. Apart from object, all generic types can be used after [TYPE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_generic.htm) for the [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_glosry.htm "Glossary Entry") of [field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [formal parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformal_parameter_glosry.htm "Glossary Entry"). When a data object is assigned to generically typed field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign.htm), or when a data object is used as an [actual parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenactual_parameter_glosry.htm "Glossary Entry") for generically typed formal parameters in [procedure calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_procedures.htm), the system checks whether its concrete data type is [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry") with the object, that is, whether the data type is a subset of the generic type.

The only generic types that can be used after [TYPE REF TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_references.htm) are data, for the generic typing of data references and object, for the generic typing of object references.

Type

Description

any

Any data type

any table

Internal table with any table type

c

Text field with a generic length

clike

Character-like (c, n, and string, as well as the date/time types d, t and character-like [flat structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_structure_glosry.htm "Glossary Entry"))

csequence

Text-like (c, string)

data

Any data type

decfloat

[Decimal floating point number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry") (decfloat16, decfloat34)

hashed table

[Hashed table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhashed_table_glosry.htm "Glossary Entry")

index table

[Index table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindex_table_glosry.htm "Glossary Entry")

n

[Numeric text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_text_glosry.htm "Glossary Entry") with generic length

numeric

Numeric ((b, s), i, int8, p, decfloat16, decfloat34, f)

object

Any object type (root class of the inheritance hierarchy)

p

Packed number with generic length and generic number of [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfract_digit_glosry.htm "Glossary Entry")

simple

Elementary data type including [enumerated types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") and structured types with exclusively character-like flat components

sorted table

[Sorted table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_table_glosry.htm "Glossary Entry")

standard table

[Standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry")

table

Standard table

x

Byte field with generic length

xsequence

Byte-like (x, xstring)

A typing with the generic type data acts like a typing with the generic type any, with the following exception: No [numeric functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), [description functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescription_function_glosry.htm "Glossary Entry"), or [arithmetic functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can be passed to a formal parameter typed with the type data. All other expressions, built-in functions, and functional methods are possible.

In addition to the built-in generic types shown in the table above, ABAP currently includes exactly one kind of self-defined generic type. A [table type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_type_glosry.htm "Glossary Entry") defined with [TYPES - TABLE OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_itab.htm) or defined in the ABAP Dictionary is generic if the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is not specified or specified incompletely or if the [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of the table type is generic.

Hints

-   When generic types are used for the [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_glosry.htm "Glossary Entry") of [field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [formal parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformal_parameter_glosry.htm "Glossary Entry"), it must be ensured that the correct results are obtained regardless of the actual type used. For example, if csequence is used, it must be ensured that the possible concrete types c and string behave differently with respect to trailing blanks, or that the concrete numeric types that are possible for numeric in calculations lead to different [calculation types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_type_glosry.htm "Glossary Entry"). Especially during generalization of existing types, it may be necessary to adapt the implementation accordingly.

-   Like all generic types listed here, the generic type any can only be specified directly after TYPE, except data and object. any cannot be specified after [TYPE REF TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_references.htm). The only generic types allowed there are data for fully generic data reference variables and object for fully generic object reference variables. Specifying REF TO any would define a fully generic reference variable that includes data references and object references, which is currently not possible.

-   The generic type object can only be specified after REF TO and not directly after TYPE.

-   The object type object plays a special role, since it is not actually a real generic type but the empty abstract root class of all object classes of ABAP Objects. An object reference variable typed using REF TO object can point to any object because of the general property of reference variables where reference variables with the static type of a superclass can point to objects in all related subclasses. When compared with a data reference variable typed using the real generic data type data, which can point to any data object, it is also possible to classify object as a generic type.

-   With generic type p, note that when passing functional methods or arithmetic expressions to this type of typed input parameters, the length is always set to 16. With generic types numeric, simple and data or any, this is only the case for arithmetic expressions.

-   The elementary data type utclong is only included in the generic types simple, data, and any.

-   Regardless of their [base type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbase_type_glosry.htm "Glossary Entry"), [enumerative types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are only enclosed by the generic types any, data and simple.

Example

Use of the built-in generic type numeric to type the input parameters of a method. Parameters with any numeric data types can be passed to the method (but no other data types).

METHODS numeric\_operation IMPORTING num1          TYPE numeric
                                    num2          TYPE numeric
                          RETURNING VALUE(result) TYPE decfloat34.