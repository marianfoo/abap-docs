# ABAP Keyword Documentation / ABAP - Dictionary / Built-In Data Types in ABAP Dictionary / Attributes of the Built-In Dictionary Types

Included pages: 13


### abenddic_builtin_types_prop.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) → 

Attributes of the Built-In Dictionary Types

-   [General dictionary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_general.htm)

-   [Special dictionary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm)

-   [Obsolete dictionary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_obsolete_types.htm)

Continue
[General Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_general.htm)
[Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm)
[Obsolete Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_obsolete_types.htm)


### abenddic_builtin_types_general.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm)

-   [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm)

-   [Character-like types and byte-like types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm)

Continue
[Integers, Packed Numbers, Binary Floating Point Numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm)
[Decimal Floating Point Numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm)
[Character-Like Types and Byte-Like Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm)


### abenddic_builtin_types_int_pack.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [General Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_general.htm) → 

Integers, Packed Numbers, Binary Floating Point Numbers

The following types are used for general descriptions of the numeric types (except for decimal floating point numbers):

-   [INT1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [integer numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninteger_glosry.htm "Glossary Entry")

These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The ABAP types [b](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) and [s](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), assigned to the types INT1 and INT2, cannot be specified either statically or dynamically in ABAP statements. These types only occur in ABAP programs, by reference to the types INT1 and INT2 from ABAP Dictionary.

-   [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpacked_number_glosry.htm "Glossary Entry")

This type describes general packed numbers in [BCD format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry"). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.

-   [FLTP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_glosry.htm "Glossary Entry")

This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm) of database tables.

Notes

-   An odd number of places should be used in the definition of data types based on the built-in type DEC. These values are stored in [BCD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry") format, for which in ABAP (data type p), only an odd number of digits is possible, since a half byte is used for the sign. If a data type DEC has an even number of characters, however, the length of the associated ABAP type p is rounded up and hence contains the next highest odd number of places. This can cause overflows, for example, and then exceptions when writing to database tables. The same applies to the built-in types CURR, DF34\_DEC, DF16\_DEC, and QUAN, which are handled technically like the type DEC.

-   If the built-in types INT1, INT2, INT4, and INT8 are [used](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_type_usage.htm) to specify types, the number of places must usually be specified as 2, 5, 10, and 19. If the type FLTP is used, 16 places and the same number of decimal places must be specified. The specified number of places is generally ignored by the data types. By default, they describe platform-specific integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.

-   In the case of integer types, the specified places express the possible decimal places without sign.

-   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.

The specified places are saved in the metadata of a self-defined type and are evaluated, if necessary, by special frameworks.

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) can be predefined for the numeric types specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   If a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") has one of the built-in numeric types, the output of a sign must be defined in a [domain](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm) so that negative values can be represented.


### abenddic_decimal_floating_point.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [General Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_general.htm) → 

Decimal Floating Point Numbers

In [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry"), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_1)

-   [Handling in Dynpros - Output Length and Output Style](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_3)

Handling in ABAP Dictionary

In ABAP Dictionary, the following data types are available for decimal floating numbers:

-   [DF16\_DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and [DF16\_RAW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for 16-digit numbers.

-   [DF34\_DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and [DF34\_RAW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for 34-digit numbers.

These data types are a replacement for real decimal floating point types. Real decimal floating point types can be used without restrictions in the database as numeric data types in relevant expressions and functions, but are not yet supported by all database systems.

-   DF16\_DEC and DF34\_DEC
    In database fields of this type, decimal floating point numbers are stored as a packed number (format [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm)). The length and the number of decimal places must be specified when defining a data type in ABAP Dictionary. Calculations (SELECT with appropriate [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) or with the aggregate functions [SUM and AVG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm), UPDATE with [SET + and \-](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm)) can be performed on the database for this type. When there is a write to the database, the system implicitly rounds off to the number of decimal places and decimal overflows can occur. Database fields with these types can be edited in [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry").

-   DF16\_RAW and DF34\_RAW
    In database fields of this type, decimal floating point numbers are stored as binary (in RAW format). The length is set to 16 or 34 places. Values can be sorted, compared, and used in indexes. For this type, no calculations can be performed on the database. This is an SAP-specific format, which means that the corresponding fields also cannot be edited in [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry"). The scaling is lost when writing to the database.

Notes

-   The actual built-in data type from ABAP Dictionary used for decimal point numbers depends on their purpose.

-   The types DF16\_DEC and DF34\_DEC can be used for calculations on the database, but their value ranges are smaller than those of real decimal floating point numbers.

-   The types DF16\_RAW and DF34\_RAW cover the whole value range, but are not recognized as numbers by the databases.

-   As in the [general packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm), the number of places in the types DF16\_DEC and DF34\_DEC should be odd.

-   In the [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) it is not usually possible to execute expressions or functions for decimal floating point numbers.

-   As well as the types above, there are also the [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_obsolete_types.htm) built-in data types DF16\_SCL and DF34\_SCL for decimal floating point numbers with [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry").

-   In database fields of this type, decimal floating point numbers are stored in the same way as DF16\_RAW or DF34\_RAW (length 16 or 34 places, and the same restrictions apply). The scaling must be specified in a direct successor database field with type INT2. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads.

-   It is strongly advised not to use the types DF16\_SCL and DF34\_SCL. Their functions are rarely needed and the additional column for scaling makes them too complicated and error-prone to use correctly.

Handling in Dynpros - Output Length and Output Style

The maximum output length that can be specified in a [domain](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm) for a 16-character decimal floating point number is 24. For a 34-character number, 46 is the maximum output length. These are also the default values.

In a domain, or directly in a structure component created using one of the types for decimal floating numbers (but not in data elements with directly specified technical attributes), one of the following output styles is always defined. The output style defines how a dynpro field defined with reference to this domain (or a corresponding ABAP field in the case of list output) is formatted:

-   Simple

Mathematical or scientific notation (depending on space)

-   Leading sign to the right

Commercial notation (canceled if not enough space, instead of implicit transformation to scientific notation)

-   Scale-preserving

Format with preservation of scaling, including trailing zeroes in the decimal places

-   Scientific

Scientific notation

-   Scientific with leading zero

Scientific notation with a 0 as an integer digit

-   Scale-preserving scientific

Scientific notation including trailing zeroes in the mantissa.

-   Technical

Scientific notation where the exponent is always an integer and a multiple of 3. The value range of the integer digits is between 1 and 999 (except if the source field has the value 0).

For dynpro fields whose data type is not defined in ABAP Dictionary, the output style can also be determined in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). In the case of formatting with the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm), the addition [STYLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_ext_options.htm) is available (as for the [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm)).

Notes

-   If scientific notation is used, a limited number of displayed places in the mantissa is recommended. This can be specified using the built-in function [rescale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendec_floating_point_functions.htm).

-   The "scale-preserving" style ensures that the scaling is restored in conversions from dynpro fields to ABAP, and not just the original value.

-   If vertically aligned decimal separators and exponents are needed on UIs, the scale-preserving scientific notation can be used.

Handling in ABAP Programs

The ABAP types that correspond to the 16 or 34 figure decimal floating numbers in ABAP Dictionary are decfloat16 and decfloat34, which are handled internally according to the IEEE-754-2008 standard, and are supported by all ABAP operations. In [arithmetic SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm), decimal floating point numbers are not supported.

The addition [STYLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) after [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) and the formatting option [STYLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) in [embedded expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) are available for the formatting of decimal floating numbers in programs. These overwrite the output style defined in ABAP Dictionary.


### abenddic_character_byte_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [General Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_general.htm) → 

Character-Like Types and Byte-Like Types

-   [Character Strings](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_1)

-   [Byte Chains](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2)

-   [Notes on Strings](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_3)

-   [Use in ABAP SQL](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_5)

Character Strings

The following built-in data types in ABAP Dictionary are available for general character strings:

-   [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for text fields

The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters (only 1333 characters for table fields).

-   [LCHR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for long text fields

The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LCHR or LRAW. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.

-   [SSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for short text strings

The built-in type SSTRING is mapped to the ABAP type string, but handled like the type CHAR or VARCHAR in ABAP Dictionary and by database tables. The length is restricted to a maximum of 1333, but table fields of this type can also be used as [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm) by database tables and used by ABAP SQL statements in almost all positions where text fields are possible.

-   [STRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for text strings

The built-in type STRING is mapped to the ABAP type string and also handled like a text string ([CLOB](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclob_glosry.htm "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm) or [index fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_index.htm) in database tables or in any positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a database table, which is relevant for ABAP SQL access (see below).

Notes

-   In general [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm), the length of a component of type CHAR is not restricted to 1333.

-   In database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) is used to read an LCHR field, the preceding length field must also be read. In [writes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm) using ABAP SQL, the length field must be given the correct value or data may be lost.

-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm) of database tables or for unrestricted use in ABAP SQL. Where possible, SSTRING can be used here instead.

-   Switching existing dictionary objects from LCHR to STRING or SSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data type. A switch from a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") data type to a [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for byte fields

The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters (only 255 characters for table fields).

-   [LRAW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for long byte fields

The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LRAW or LCHR. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.

-   [RAWSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for byte strings

The built-in type RAWSTRING is mapped to the ABAP type xstring and also handled like a byte string ([BLOB](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenblob_glosry.htm "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm) or [index fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_index.htm) in database tables or in any positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a database table, which is relevant for ABAP SQL access (see below).

Notes

-   In general [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm), the length of a component of type RAW is not restricted to 255.

-   In database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) is used to read an LRAW field, the preceding length field must also be read. In [writes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm) using ABAP SQL, the length field must be given the correct value or data may be lost.

-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead, however it is also not suitable for [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm) of database tables or for unrestricted use in ABAP SQL.

-   Switching existing dictionary objects from LRAW to RAWSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data type. A switch from a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") data type to a [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings

The following points must be remembered when using built-in data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a database table.

-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type CHAR is also possible.

-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. Truncations of strings when read to a target field, however, are ignored.

-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.

-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlength_functions.htm).

-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.

-   [LOBs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") fields. An empty long string can also be saved using the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.

-   If a [work area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_wa.htm) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in ABAP SQL, the work area or the row type of the internal table must be compatible with the database structure.

-   If structures, database tables, or views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_structure_glosry.htm "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm) statement (obsolete for database accesses) or for typing the obsolete [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") of procedures.

-   Access may be slower for long strings (LOBs) in database tables than for other data types. If not all data is needed at once (and to bypass any memory limits on the AS Instance), [streaming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_streaming.htm) and [locators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocators.htm) can be used to access long strings.

Use in ABAP SQL

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in ABAP SQL.

-   Database fields with the data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following operand positions:

-   As arguments of [aggregate functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm)

-   In the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) when the addition [DISTINCT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) is used

-   In the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) when the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm) is used In the [strict mode from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm), this produces a syntax error. Otherwise, the extended program check produces a syntax warning that can be hidden by a pragma.

-   In [SQL conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm)

-   In the [GROUP BY clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm)

-   In the [ORDER BY clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm)

-   The data type SSTRING can be used without restrictions, except in the [coalesce](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_coalesce.htm) function and in [CASE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm) expressions.

Note

The same restrictions apply to the obsolete data type VARC as to STRING and RAWSTRING plus LCHR and LRAW.

Handling in Dynpros

When a field with character-like dictionary type is used from a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_sema.htm) can be preserved for data elements in the semantic attributes of a domain.


### abenddic_builtin_types_general.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm)

-   [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm)

-   [Character-like types and byte-like types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm)

Continue
[Integers, Packed Numbers, Binary Floating Point Numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm)
[Decimal Floating Point Numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm)
[Character-Like Types and Byte-Like Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm)


### abenddic_builtin_types_special.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

Special Dictionary Types

-   [Date types and time types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm)

-   [Special character-like types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm)

-   [Currency fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)

-   [Quantity fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm)

Continue
[Date Types and Time Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm)
[Special Character-Like Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm)
[Currency Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)
[Quantity Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm)


### abenddic_date_time_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or [date fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalendar_date_glosry.htm "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [TIMS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [time fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenday_time_glosry.htm "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [ACCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for posting periods

From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) can be predefined for the types DATS and TIMS specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm)) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [numeric texts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_text_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_character.htm) and the associated rules apply.

-   [CLNT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [client columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_client.htm).

-   [LANG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [text language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_language_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") and in the binary [RFC protocol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_protocol.htm) for passing TABLES parameters between [MDMP systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_table_glosry.htm "Glossary Entry") is still made up of the [foreign key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_1)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_3)

Notes

-   Currencies are handled as specified by the data saved in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be edited in transaction OB08.

-   Currency fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [CURR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type CURR in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm), a number of decimal places other than zero must be defined. The standard value is two fractional digits.

For every structure component of data type CURR, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) with the data type [CUKY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). This field is the [currency key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_key_glosry.htm "Glossary Entry") that defines the actual currency. From a technical perspective, the data type CUKY is handled like a type CHAR with length 5.

Notes

-   The number of decimal places for the currency defined by the currency key of type CUKY only determines the formatting and checking of a currency field on a dynpro. In principal, it is independent of the number given for the currency field of type CURR. The default value of two decimal places for currency fields in ABAP Dictionary is chosen because most of the currencies in the database table TCURC have two decimal places and are not entered in the database table TCURX. It is not advisable to use any other value, since in this case any unforeseen operations with currency keys in ABAP programs are largely ignored.

-   The conversion function [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conversion_functions.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") also assumes two decimal places for currency fields. If the function for currency fields is used with other amounts of decimal places, unexpected behaviour may arise.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type CURR should be odd.

Handling in Dynpros

For the display of an input/output field of type CURR on a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry"). Here, the positioning of the decimal point for a currency field of type CURR on a dynpro is completely independent of the number of decimal places specified by the data element in ABAP Dictionary (greater than or equal to one, the default value is two). The number of decimal places on a dynpro is defined as follows:

-   When displaying a dynpro field of type CURR, the reference field for the currency key is searched for in the global data of the current ABAP program. The content of this field must be a valid [currency ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC. If the reference field is not found or there is no entry in the database table TCURX with the content of the field, the currency field is displayed with two fractional digits by default.
    The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

-   If the currency ID for the reference field is found in the database table TCURX, the currency field is displayed with the decimal places specified there. This also applies to initial reference fields.

Note

A dynpro therefore only uses the string of digits of a currency field from the ABAP program (or a [conversion routine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm "Glossary Entry") in between) or just sends this string. Any information about currency keys and decimal places is not passed automatically. It must be ensured that the reference field for PBO is filled with the appropriate value. For PAI, the correct currency key plays a part in the automatic format check. Especially on dynpros in which currency fields are displayed in differing currencies, it must be ensured that the reference field is transported before the currency by using the statements [CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm) and [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm).

Handling in ABAP Programs

The ABAP type that corresponds to the CURR data type is p. An ABAP data object declared with reference to a dictionary type of type CURR has the number of decimal places defined there (greater than or equal to one and the default is two). These decimal places are respected for all operations and calculations, as for all packed numbers. The only exceptions are the programs for which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") was not set.

To work correctly with a currency field, all digits in the number must be recorded as currency amounts in the smallest possible currency units, regardless of the number of decimal places. This occurs automatically sometimes, for example, if [CURRENCY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) is used after [WRITE \[TO\]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) or the formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) in an [embedded expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) of a [character string template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm). For other operations, the following restrictions apply:

-   Comparison, addition, subtraction, and division of two currency fields with the same number of fractional digits are not critical.

-   Multiplication with and division by a non-currency-dependent number is not critical.

-   All other operations are critical, for example:

-   Multiplication of two currency fields.

-   Operations between two fields with different currencies that include assignments.

-   Assignments of non-currency-dependent numbers to currency fields.

Accurate results should not be expected when performing critical operations if the number of decimal places in the program does not match the number in the currency.

Notes

-   For currencies, one of the data types for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm) is recommended rather than the data type CURR. The currency-compliant formatting is supported on dynpros by output styles and by style-compatible formatting in ABAP programs. See the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwrite_style_abexa.htm).

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_decfloat_doc.htm) convert currency amounts to decimal floating point numbers (and back) as specified by a currency key.


### abenddic_quantity_field.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Quantity Fields

A quantity field is a component of a structure, database table, or view of type [QUAN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) defined in ABAP Dictionary and used to record a quantity in a specific unit. A quantity field must be associated with a unit key of a structure, database table, or view that defines the unit and the number of decimal places. A unit key is a component of a structure, database table, or view of type UNIT defined in ABAP Dictionary and can contain a [unit ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_1)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [QUAN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) with the data type [UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). This field is the [unit key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunit_glosry.htm "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) of the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm).


### abenddic_builtin_types_special.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

Special Dictionary Types

-   [Date types and time types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm)

-   [Special character-like types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm)

-   [Currency fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)

-   [Quantity fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm)

Continue
[Date Types and Time Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm)
[Special Character-Like Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm)
[Currency Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)
[Quantity Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm)


### abenddic_obsolete_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

Obsolete Dictionary Types

The following built-in data types in ABAP Dictionary are obsolete and should no longer be used:

-   The data types [DF16\_SCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and [DF34\_SCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm) with scaling are obsolete and their use is strongly discouraged.

-   The data type [PREC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like INT2, despite the predefined length (2). The length 2 is relevant only for dynpro fields of the type PREC, which can have two-character positive values at most. The property sign cannot be set for a domain of the type PREC

-   The data type [VARC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this built-in type can still be used. When table fields with this type are used in ABAP SQL, the same [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm) apply as to fields with the types STRING and RAWSTRING plus LCHR and LRAW.
