  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) → 

DDIC - Overview of All Built-In Dictionary Types

The following tables show the built-in types in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") and their fundamental technical attributes. For each built-in data type in ABAP Dictionary, the last column specifies the [built-in ABAP type](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry") to which the built-in type is mapped in type references from an ABAP program to ABAP Dictionary. An initial value is assigned to most built-in data types. These initial values are applied, for example, when initial [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") are displayed, when database fields are [initialized](javascript:call_link\('abenddic_database_tables_init.htm'\)), and in the ABAP SQL condition [IS INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\)). The initial value of ABAP Dictionary types is not used for data objects declared in ABAP programs when referring to these types. Here, the initial value of the mapped [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) is used.

General Types

Built-in data types without special .semantic attributes.

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

[b](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

INT2

5

\-

0

2-byte integer, -32,768 to 32,767

[s](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

INT4

10

\-

0

4-byte integer, -2,147,483,648 to +2,147,483,647

[i](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

INT8

19

\-

0

8-byte integer, -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

[int8](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DEC

1-31

0-m, maximum 14

0

Packed number in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format

[p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), length m [DIV](javascript:call_link\('abenarith_operators.htm'\)) 2 + 1, decimal places n

DECFLOAT16

16

\-

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry")

[decfloat16](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DF16\_DEC

1-15

0-m, maximum 14

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") stored in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format

[decfloat16](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DF16\_RAW

16

\-

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") stored in binary format

[decfloat16](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DECFLOAT34

34

\-

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry")

[decfloat34](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DF34\_DEC

1-31

0-m, maximum 14

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") stored in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format

[decfloat34](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DF34\_RAW

34

\-

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") stored in binary format

[decfloat34](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

FLTP

16

16

0

[Binary floating point number](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry")

[f](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

See [Integers, Packed Numbers, Binary Floating Point Numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and [Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

Character-Like Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

CHAR

1-30000, maximum of 1333 for table fields

m blanks

String

[c](javascript:call_link\('abenbuiltin_types_character.htm'\)), length m

LCHR

256-32000

None

Long character string

[c](javascript:call_link\('abenbuiltin_types_character.htm'\)), length m

SSTRING

1-1333

Empty string

Character string

[string](javascript:call_link\('abenbuiltin_types_character.htm'\))

STRING

256-...

Empty string

Character string ([CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry"))

[string](javascript:call_link\('abenbuiltin_types_character.htm'\))

See [Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\)).

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

[x](javascript:call_link\('abenbuiltin_types_byte.htm'\)), length m

LRAW

256-32000

None

Long byte string

[x](javascript:call_link\('abenbuiltin_types_byte.htm'\)), length m

RAWSTRING

256-...

Empty string

Byte string ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry"))

[xstring](javascript:call_link\('abenbuiltin_types_byte.htm'\))

See [Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\)).

Special Types

Built-in data types with special semantic attributes.

Date Fields, Time Fields, and Time Stamp Fields

Type

Valid Places m

Initial Value

Meaning

ABAP Type

DATN

8

0

Date in internal format of database

[d](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

DATS

8

00000000

Date in the format YYYYMMDD

[d](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

TIMN

6

0

Time in internal format of database

[t](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

TIMS

6

000000

Time in the format HHMMSS

[t](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

ACCP

6

6 blanks

Posting period in the format YYYYMM

[n](javascript:call_link\('abenbuiltin_types_character.htm'\)), length 6

UTCLONG

27

0

Time stamp (exact to 100 ns)

[utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

See [Date Fields, Time Fields, and Time Stamp Fields](javascript:call_link\('abenddic_date_time_types.htm'\)).

Character-Like Types with Special Semantics

Type

Valid Places m

Initial Value

Meaning

ABAP Type

NUMC

1-255

m zeros

[Numeric text](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry")

[n](javascript:call_link\('abenbuiltin_types_character.htm'\)), length m

CLNT

3

000

Client

c, length 3

LANG

1

Blank

Language key

c, length 1

See [Special Character-Like Types](javascript:call_link\('abenddic_special_character_types.htm'\)).

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

[Currency field](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format

[p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), length m [DIV](javascript:call_link\('abenarith_operators.htm'\)) 2 + 1, decimal places n

CUKY

5

\-

5 blanks

[Currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") for [currency fields](javascript:call_link\('abenddic_currency_field_glosry.htm'\) "Glossary Entry")

c, length 5

QUAN

1-31

0-m, maximum 14

0

[Quantity field](javascript:call_link\('abenddic_quantity_glosry.htm'\) "Glossary Entry") in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format

[p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), length m [DIV](javascript:call_link\('abenarith_operators.htm'\)) 2 + 1, decimal places n

UNIT

2-3

\-

2 or 3 blanks

[Unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") of a [quantity field](javascript:call_link\('abenddic_quantity_glosry.htm'\) "Glossary Entry")

[c](javascript:call_link\('abenbuiltin_types_character.htm'\)), length m

See [Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\)) and [Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\)).

Geodata Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

GEOM\_EWKB

\-

Empty string

Geometric data in EWKB representation

[xstring](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

See [Geodata Types](javascript:call_link\('abenddic_geo_data.htm'\)).

Obsolete Types

Type

Valid Places m

Initial Value

Meaning

ABAP Type

DF16\_SCL

16

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") stored in binary format with scaling specified (obsolete)

[decfloat16](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

DF34\_SCL

34

0

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") stored in binary format with scaling specified (obsolete)

[decfloat34](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

PREC

2

0

Obsolete data type

[s](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

VARC

1-...

None

Obsolete data type

[c](javascript:call_link\('abenbuiltin_types_character.htm'\)), length m

See [Obsolete Types](javascript:call_link\('abenddic_obsolete_types.htm'\)).