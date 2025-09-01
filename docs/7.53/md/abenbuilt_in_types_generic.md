---
title: "Generic ABAP Types"
description: |
  The following table shows the predefined generic ABAP types. A generic data type is an incomplete type specification that includes multiple complete type specifications. With the exception of object, all generic types can be used after TYPE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-U
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_generic.htm"
abapFile: "abenbuilt_in_types_generic.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abenbuilt", "generic"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types.htm) → 

Generic ABAP Types

The following table shows the predefined generic ABAP types. A generic data type is an incomplete type specification that includes multiple complete type specifications. With the exception of object, all generic types can be used after [TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_generic.htm) for the [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") of [field symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm "Glossary Entry"). When a data object is assigned to generically typed field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm), or when a data object is used as an [actual parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenactual_parameter_glosry.htm "Glossary Entry") for generically typed formal parameters for [procedure calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures.htm), the system checks whether the concrete data type is [compatible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") with the object (in other words, whether the data type is a subset of the generic type).

The only generic types that can be used after [TYPE REF TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_references.htm) are data, for the generic typing of data references, and object, for the generic typing of object references.

Type

Description

any

Any data type

any table

Internal table with any table type

c

Text field with a generic length

clike

Character-like (c, n, and string plus the date/time types d, t and character-like [flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry"))

csequence

Text-like (c, string)

data

Any data type

decfloat

[Decimal floating point number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry") (decfloat16, decfloat34)

hashed table

[Hashed table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry")

index table

[Index table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_table_glosry.htm "Glossary Entry")

n

[Numeric text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_text_glosry.htm "Glossary Entry") with generic length

numeric

Numeric ((b, s), i, int8, p, decfloat16, decfloat34, f)

object

Any object type (root class of the inheritance hierarchy)

p

Packed number with generic length and generic number of [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecimal_place_glosry.htm "Glossary Entry")

simple

Elementary data type including [enumerated types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") and structured types with exclusively character-like flat components

sorted table

[Sorted table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry")

standard table

[Standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry")

table

Standard table

x

Byte field with generic length

xsequence

Byte-like (x, xstring)

Besides the predefined generic types shown in the table above, ABAP at present includes exactly one kind of self-defined generic type: A [table type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_type_glosry.htm "Glossary Entry") defined with [TYPES - TABLE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm) or defined in ABAP Dictionary is generic if the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is not defined or is incompletely defined or if the [secondary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of the table type is generic.

Notes

-   When generic types are used for the [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") of [field symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm "Glossary Entry"), it must be ensured that the correct results are obtained regardless of the actual type being used. For example, if csequence is used, the potential fixed types c and string must display different behavior with respect to trailing blanks or the potential numeric types in calculations for numeric must produce different [calculation types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry"). More specifically, when existing typings are generalized, it may be necessary to modify the implementation accordingly.

-   The generic type any can, like all generic types listed here except data and object, only be specified directly after TYPE and has exactly the same effect there as the generic type data. After [TYPE REF TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_references.htm), only data (for fully generic data reference variables) and object (for fully generic object reference variables) can be specified. Specifying REF TO any would define a fully generic reference variable covering data references and object references. This is not currently possible.

-   The generic type object can only be specified after REF TO and not directly after TYPE.

-   The object type object plays a special role, because strictly speaking it is the empty root class of all object classes of ABAP Objects and is not a genuine generic type. An object reference variable typed using REF TO object can point to any object because of the general reference variable property stating that reference variables with the static type of a superclass can point to objects in all related subclasses. When compared with a data reference variable typed using the real generic data type data, which can point to any data object, it is perfectly possible to classify object as a generic type.

-   Note with generic type p that when passing functional methods or arithmetic expressions to this type of typed input parameters, the length is always set to 16. With generic types numeric, simple and data or any, this is only the case for arithmetic expressions.

-   Regardless of their [base type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase_type_glosry.htm "Glossary Entry"), [enumerative types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are only enclosed by the generic types any, data and simple.

Example

Uses the built-in generic type numeric to type the input parameters of a method. Parameters with any numeric data types can be passed to the method (but no other data types).

METHODS numeric\_operation IMPORTING num1          TYPE numeric
                                    num2          TYPE numeric
                          RETURNING VALUE(result) TYPE decfloat34.