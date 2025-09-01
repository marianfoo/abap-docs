---
title: "Overview of All Built-In Dictionary Types"
description: |
  The following tables show the built-in types in ABAP Dictionary(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm 'Glossary Entry') and their fundamental technical attributes. For each built-in data type in ABAP Dictionary, the last column specifies the bui
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm"
abapFile: "abenddic_builtin_types.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "builtin"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) → 

Overview of All Built-In Dictionary Types

The following tables show the built-in types in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and their fundamental technical attributes. For each built-in data type in ABAP Dictionary, the last column specifies the [built-in ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry") to which the built-in type is mapped in type references from an ABAP program to ABAP Dictionary. An initial value is assigned to most built-in data types. These initial values are applied, for example, when initial [dynpro fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") are displayed and when database fields are [initialized](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_init.htm).

General Types

Built-in data types without special semantic attributes.

Numeric Types

Type

Valid Places m

Decimal Places n

Initial Value

Meaning

ABAP Type

INT1

3

\-

0

1-byte integer, 0 to 255

[b](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

INT2

5

\-

0

2-byte integer, -32,768 to 32,767

[s](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

INT4

10

\-

0

4-byte integer, -2,147,483,648 to +2,147,483,647

[i](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

INT8

19

\-

0

8-byte integer, -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

[int8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

DEC

1-31

0-m, maximum 14

0

Packed number in [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format

[p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), length m [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) 2 + 1, decimal places n

DF16\_DEC

1-15

0-m, maximum 14

0

[Decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") stored in [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format

[decfloat16](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

DF16\_RAW

16

\-

0

[Decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") stored in binary format

[decfloat16](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

DF34\_DEC

1-31

0-m, maximum 14

0

[Decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") stored in [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format

[decfloat34](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

DF34\_RAW

34

\-

0

[Decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") stored in binary format

[decfloat34](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

FLTP

16

16

0

[Binary floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinfloat_glosry.htm "Glossary Entry")

[f](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

See [Integers, Packed Numbers, Binary Floating Point Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_int_pack.htm) and [Decimal Floating Point Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm).

Character-Like Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

CHAR

1-30000, maximum of 1333 for table fields

m blanks

Character string

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length m

LCHR

256-32000

None

long character string

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length m

SSTRING

1-1333

Empty string

Character string

[string](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm)

STRING

256-...

Empty string

Character string ([CLOB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclob_glosry.htm "Glossary Entry"))

[string](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm)

See [Character-Like Types and Byte-Like Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_character_byte_types.htm).

Byte-Like Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

RAW

1-32000 maximum of 255 for table fields

None

Byte string

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_byte.htm), length m

LRAW

256-32000

None

Long byte string

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_byte.htm), length m

RAWSTRING

256-...

Empty string

Byte string ([BLOB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenblob_glosry.htm "Glossary Entry"))

[xstring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_byte.htm)

See [Character-Like Types and Byte-Like Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_character_byte_types.htm).

Special Types

Built-in data types with special semantic attributes.

Date Types/Time Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

DATS

8

00000000

Date in the format YYYYMMDD

[d](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm)

TIMS

6

000000

Time in the format HHMMSS

[t](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm)

ACCP

6

6 blanks

Posting period in the format YYYYMM

[n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length 6

See [Date Types and Time Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm).

Character-Like Types with Special Semantics

Type

Valid Places m

Initial Value

Meaning

ABAP Type

NUMC

1-255

m zeroes

[Numeric text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_text_glosry.htm "Glossary Entry")

[n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length m

CLNT

3

000

Client

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length 3

LANG

1

Blank

Language key

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length 1

See [Special Character-Like Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm).

Currency Fields and Quantity Fields

Type

Valid Places m

Decimal Places n

Initial Value

Meaning

ABAP Type

CURR

1-31

1-m, maximum 14

0

[Currency field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_field_glosry.htm "Glossary Entry") in [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format

[p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), length m [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) 2 + 1, decimal places n

CUKY

5

\-

5 blanks

[Currency key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_key_glosry.htm "Glossary Entry") for [currency fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_field_glosry.htm "Glossary Entry")

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length 5

QUAN

1-31

0-m, maximum 14

0

[Quantity field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquantity_glosry.htm "Glossary Entry") in [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format

[p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), length m [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) 2 + 1, decimal places n

UNIT

2-3

\-

2 or 3 blanks

[Unit key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_glosry.htm "Glossary Entry") of a [quantity field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquantity_glosry.htm "Glossary Entry")

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length m

‎See [Currency Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm) and [Quantity Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm).

Obsolete Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

DF16\_SCL

16

0

[Decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") stored in binary format with scaling specified (obsolete)

[decfloat16](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

DF34\_SCL

34

0

[Decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") stored in binary format with scaling specified (obsolete)

[decfloat34](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

PREC

2

0

Obsolete data type

[s](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

VARC

1-...

None

Obsolete data type

[c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm), length m

See [Obsolete Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_obsolete_types.htm).