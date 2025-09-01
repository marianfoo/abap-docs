  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Generic%20ABAP%20Types%2C%20ABENBUILT_IN_TYPES_GENERIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Generic ABAP Types

The following table shows the built-in generic ABAP types. A generic data type is an incomplete type specification that covers multiple complete type specifications. Apart from object, all generic types can be used after [TYPE](javascript:call_link\('abentyping_generic.htm'\)) for the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"). When a data object is assigned to generically typed field symbols using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)), or when a data object is used as an [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") for generically typed formal parameters in [procedure calls](javascript:call_link\('abencall_procedures.htm'\)), the system checks whether its concrete data type is [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the object, that is, whether the data type is a subset of the generic type.

The only generic types that can be used after [TYPE REF TO](javascript:call_link\('abaptypes_references.htm'\)) are data, for the generic typing of data references and object, for the generic typing of object references.

Type

Description

any

Any data type

any table

Internal table with any table type

c

Text field with a generic length

clike

Character-like (c, n, and string, as well as the date/time types d, t and character-like [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"))

csequence

Text-like (c, string)

data

Any data type

decfloat

[Decimal floating point number type](javascript:call_link\('abendecfloat_type_glosry.htm'\) "Glossary Entry") (decfloat16, decfloat34)

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

Packed number with generic length and generic number of [decimal places](javascript:call_link\('abenfract_digit_glosry.htm'\) "Glossary Entry")

simple

Elementary data type including [enumerated types](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") and structured types with exclusively character-like flat components

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

A typing with the generic type data acts like a typing with the generic type any, with the following exception: No [numeric functions](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry"), [description functions](javascript:call_link\('abendescription_function_glosry.htm'\) "Glossary Entry"), or [arithmetic functions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") can be passed to a formal parameter typed with the type data. All other expressions, built-in functions, and functional methods are possible.

In addition to the built-in generic types shown in the table above, ABAP currently includes exactly one kind of user-defined generic type. A [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") defined with [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) or defined in the ABAP Dictionary is generic if the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is not specified or specified incompletely or if the [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") of the table type is generic.

Hints

-   When generic types are used for the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"), it must be ensured that the correct results are obtained regardless of the actual type used. For example, if csequence is used, it must be ensured that the possible concrete types c and string behave differently with respect to trailing blanks, or that the concrete numeric types that are possible for numeric in calculations lead to different [calculation types](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry"). Especially during generalization of existing types, it may be necessary to adapt the implementation accordingly.
-   Like all generic types listed here, except data and object, the generic type any can only be specified directly after TYPE. any cannot be specified after [TYPE REF TO](javascript:call_link\('abaptypes_references.htm'\)). The only generic types allowed here are data for fully generic data reference variables and object for fully generic object reference variables. Specifying REF TO any would define a fully generic reference variable that includes data references and object references, which is currently not possible.
-   The generic type object can only be specified after REF TO and not directly after TYPE.
-   The object type object plays a special role, since it is not actually a real generic type but the empty abstract root class of all object classes of ABAP Objects. An object reference variable typed using REF TO object can point to any object because of the general property of reference variables where reference variables with the static type of a superclass can point to objects in all related subclasses. When compared with a data reference variable typed using the real generic data type data, which can point to any data object, it is also possible to classify object as a generic type.
-   In the case of the generic type p, note that when passing functional methods or arithmetic expressions to this type of typed input parameters, the length is always set to 16. With generic types numeric, simple and data or any, this is only the case for arithmetic expressions.
-   The elementary data type utclong is only included in the generic types simple, data, and any.
-   Regardless of their [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), [enumerative types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are only enclosed by the generic types any, data and simple.

Example

Use of the built-in generic type numeric to type the input parameters of a method. Parameters with any numeric data types can be passed to the method (but no other data types).

METHODS numeric\_operation IMPORTING num1          TYPE numeric
                                    num2          TYPE numeric
                          RETURNING VALUE(result) TYPE decfloat34.