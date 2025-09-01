# ABAP Keyword Documentation / ABAP - Dictionary / Built-In Data Types in ABAP Dictionary / Attributes of the Built-In Dictionary Types

Included pages: 13


### abenddic_builtin_types_prop.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) → 

Attributes of the Built-In Dictionary Types

-   [General dictionary types](javascript:call_link\('abenddic_builtin_types_general.htm'\))

-   [Special dictionary types](javascript:call_link\('abenddic_builtin_types_special.htm'\))

-   [Obsolete dictionary types](javascript:call_link\('abenddic_obsolete_types.htm'\))

Continue
[General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\))
[Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\))
[Obsolete Dictionary Types](javascript:call_link\('abenddic_obsolete_types.htm'\))


### abenddic_builtin_types_general.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))

-   [Decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))

-   [Character-like types and byte-like types](javascript:call_link\('abenddic_character_byte_types.htm'\))

Continue
[Integers, Packed Numbers, Binary Floating Point Numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))
[Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
[Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\))


### abenddic_builtin_types_int_pack.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Integers, Packed Numbers, Binary Floating Point Numbers

The following types are used for general descriptions of the numeric types (except for decimal floating point numbers):

-   [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) for [integer numbers](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The ABAP types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), assigned to the types INT1 and INT2, cannot be specified either statically or dynamically in ABAP statements. These types only occur in ABAP programs, by reference to the types INT1 and INT2 from ABAP Dictionary.

-   [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")

This type describes general packed numbers in [BCD format](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry"). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.

-   [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)) for [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry")

This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables.

Notes

-   An odd number of places should be used in the definition of data types based on the built-in type DEC. These values are stored in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format, for which in ABAP (data type p), only an odd number of digits is possible, since a half byte is used for the sign. If a data type DEC has an even number of characters, however, the length of the associated ABAP type p is rounded up and hence contains the next highest odd number of places. This can cause overflows, for example, and then exceptions when writing to database tables. The same applies to the built-in types CURR, DF34\_DEC, DF16\_DEC, and QUAN, which are handled technically like the type DEC.

-   If the built-in types INT1, INT2, INT4, and INT8 are [used](javascript:call_link\('abenddic_builtin_type_usage.htm'\)) to specify types, the number of places must usually be specified as 2, 5, 10, and 19. If the type FLTP is used, 16 places and the same number of decimal places must be specified. The specified number of places is generally ignored by the data types. By default, they describe platform-specific integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.

-   In the case of integer types, the specified places express the possible decimal places without sign.

-   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.

The specified places are saved in the metadata of a self-defined type and are evaluated, if necessary, by special frameworks.

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the numeric types specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") has one of the built-in numeric types, the output of a sign must be defined in a [domain](javascript:call_link\('abenddic_domains.htm'\)) so that negative values can be represented.


### abenddic_decimal_floating_point.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Decimal Floating Point Numbers

In [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_1)

-   [Handling in Dynpros - Output Length and Output Style](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_3)

Handling in ABAP Dictionary

In ABAP Dictionary, the following data types are available for decimal floating numbers:

-   [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF16\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for 16-digit numbers.

-   [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for 34-digit numbers.

These data types are a replacement for real decimal floating point types. Real decimal floating point types can be used without restrictions in the database as numeric data types in relevant expressions and functions, but are not yet supported by all database systems.

-   DF16\_DEC and DF34\_DEC
    In database fields of this type, decimal floating point numbers are stored as a packed number (format [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))). The length and the number of decimal places must be specified when defining a data type in ABAP Dictionary. Calculations (SELECT with appropriate [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) or with the aggregate functions [SUM and AVG](javascript:call_link\('abapselect_aggregate.htm'\)), UPDATE with [SET + and \-](javascript:call_link\('abapupdate_set_expression.htm'\))) can be performed on the database for this type. When there is a write to the database, the system implicitly rounds off to the number of decimal places and decimal overflows can occur. Database fields with these types can be edited in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

-   DF16\_RAW and DF34\_RAW
    In database fields of this type, decimal floating point numbers are stored as binary (in RAW format). The length is set to 16 or 34 places. Values can be sorted, compared, and used in indexes. For this type, no calculations can be performed on the database. This is an SAP-specific format, which means that the corresponding fields also cannot be edited in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"). The scaling is lost when writing to the database.

Notes

-   The actual built-in data type from ABAP Dictionary used for decimal point numbers depends on their purpose.

-   The types DF16\_DEC and DF34\_DEC can be used for calculations on the database, but their value ranges are smaller than those of real decimal floating point numbers.

-   The types DF16\_RAW and DF34\_RAW cover the whole value range, but are not recognized as numbers by the databases.

-   As in the [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in the types DF16\_DEC and DF34\_DEC should be odd.

-   In the [ABAP CDS](javascript:call_link\('abencds.htm'\)) it is not usually possible to execute expressions or functions for decimal floating point numbers.

-   As well as the types above, there are also the [obsolete](javascript:call_link\('abenddic_obsolete_types.htm'\)) built-in data types DF16\_SCL and DF34\_SCL for decimal floating point numbers with [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry").

-   In database fields of this type, decimal floating point numbers are stored in the same way as DF16\_RAW or DF34\_RAW (length 16 or 34 places, and the same restrictions apply). The scaling must be specified in a direct successor database field with type INT2. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads.

-   It is strongly advised not to use the types DF16\_SCL and DF34\_SCL. Their functions are rarely needed and the additional column for scaling makes them too complicated and error-prone to use correctly.

Handling in Dynpros - Output Length and Output Style

The maximum output length that can be specified in a [domain](javascript:call_link\('abenddic_domains.htm'\)) for a 16-character decimal floating point number is 24. For a 34-character number, 46 is the maximum output length. These are also the default values.

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

For dynpro fields whose data type is not defined in ABAP Dictionary, the output style can also be determined in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). In the case of formatting with the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)), the addition [STYLE](javascript:call_link\('abapwrite_ext_options.htm'\)) is available (as for the [string templates](javascript:call_link\('abapcompute_string_format_options.htm'\))).

Notes

-   If scientific notation is used, a limited number of displayed places in the mantissa is recommended. This can be specified using the built-in function [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)).

-   The "scale-preserving" style ensures that the scaling is restored in conversions from dynpro fields to ABAP, and not just the original value.

-   If vertically aligned decimal separators and exponents are needed on UIs, the scale-preserving scientific notation can be used.

Handling in ABAP Programs

The ABAP types that correspond to the 16 or 34 figure decimal floating numbers in ABAP Dictionary are decfloat16 and decfloat34, which are handled internally according to the IEEE-754-2008 standard, and are supported by all ABAP operations. In [arithmetic SQL expressions](javascript:call_link\('abensql_arith.htm'\)), decimal floating point numbers are not supported.

The addition [STYLE](javascript:call_link\('abapwrite_to_options.htm'\)) after [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)) and the formatting option [STYLE](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) are available for the formatting of decimal floating numbers in programs. These overwrite the output style defined in ABAP Dictionary.


### abenddic_character_byte_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Character-Like Types and Byte-Like Types

-   [Character Strings](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_1)

-   [Byte Chains](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2)

-   [Notes on Strings](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_3)

-   [Use in ABAP SQL](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_5)

Character Strings

The following built-in data types in ABAP Dictionary are available for general character strings:

-   [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) for text fields

The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters (only 1333 characters for table fields).

-   [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) for long text fields

The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LCHR or LRAW. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.

-   [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for short text strings

The built-in type SSTRING is mapped to the ABAP type string, but handled like the type CHAR or VARCHAR in ABAP Dictionary and by database tables. The length is restricted to a maximum of 1333, but table fields of this type can also be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) by database tables and used by ABAP SQL statements in almost all positions where text fields are possible.

-   [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for text strings

The built-in type STRING is mapped to the ABAP type string and also handled like a text string ([CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in database tables or in any positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a database table, which is relevant for ABAP SQL access (see below).

Notes

-   In general [structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type CHAR is not restricted to 1333.

-   In database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LCHR field, the preceding length field must also be read. In [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.

-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or for unrestricted use in ABAP SQL. Where possible, SSTRING can be used here instead.

-   Switching existing dictionary objects from LCHR to STRING or SSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte fields

The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters (only 255 characters for table fields).

-   [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for long byte fields

The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LRAW or LCHR. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.

-   [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte strings

The built-in type RAWSTRING is mapped to the ABAP type xstring and also handled like a byte string ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in database tables or in any positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a database table, which is relevant for ABAP SQL access (see below).

Notes

-   In general [structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type RAW is not restricted to 255.

-   In database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LRAW field, the preceding length field must also be read. In [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.

-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or for unrestricted use in ABAP SQL.

-   Switching existing dictionary objects from LRAW to RAWSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings

The following points must be remembered when using built-in data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a database table.

-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type CHAR is also possible.

-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. Truncations of strings when read to a target field, however, are ignored.

-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.

-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)).

-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.

-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") fields. An empty long string can also be saved using the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.

-   If a [work area](javascript:call_link\('abenopen_sql_wa.htm'\)) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in ABAP SQL, the work area or the row type of the internal table must be compatible with the database structure.

-   If structures, database tables, or views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](javascript:call_link\('abaptables.htm'\)) statement (obsolete for database accesses) or for typing the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") of procedures.

-   Access may be slower for long strings (LOBs) in database tables than for other data types. If not all data is needed at once (and to bypass any memory limits on the AS Instance), [streaming](javascript:call_link\('abenopen_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)) can be used to access long strings.

Use in ABAP SQL

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in ABAP SQL.

-   Database fields with the data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following operand positions:

-   As arguments of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

-   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is used

-   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)) is used In the [strict mode from Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), this produces a syntax error. Otherwise, the extended program check produces a syntax warning that can be hidden by a pragma.

-   In [SQL conditions](javascript:call_link\('abenwhere_logexp.htm'\))

-   In the [GROUP BY clause](javascript:call_link\('abapgroupby_clause.htm'\))

-   In the [ORDER BY clause](javascript:call_link\('abaporderby_clause.htm'\))

-   The data type SSTRING can be used without restrictions, except in the [coalesce](javascript:call_link\('abensql_coalesce.htm'\)) function and in [CASE](javascript:call_link\('abensql_case.htm'\)) expressions.

Note

The same restrictions apply to the obsolete data type VARC as to STRING and RAWSTRING plus LCHR and LRAW.

Handling in Dynpros

When a field with character-like dictionary type is used from a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](javascript:call_link\('abenddic_domains_sema.htm'\)) can be preserved for data elements in the semantic attributes of a domain.


### abenddic_builtin_types_general.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))

-   [Decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))

-   [Character-like types and byte-like types](javascript:call_link\('abenddic_character_byte_types.htm'\))

Continue
[Integers, Packed Numbers, Binary Floating Point Numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))
[Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
[Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\))


### abenddic_builtin_types_special.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Special Dictionary Types

-   [Date types and time types](javascript:call_link\('abenddic_date_time_types.htm'\))

-   [Special character-like types](javascript:call_link\('abenddic_special_character_types.htm'\))

-   [Currency fields](javascript:call_link\('abenddic_currency_field.htm'\))

-   [Quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\))

Continue
[Date Types and Time Types](javascript:call_link\('abenddic_date_time_types.htm'\))
[Special Character-Like Types](javascript:call_link\('abenddic_special_character_types.htm'\))
[Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\))
[Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\))


### abenddic_date_time_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) or [date fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](javascript:call_link\('abencalendar_date_glosry.htm'\) "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) for [time fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](javascript:call_link\('abenday_time_glosry.htm'\) "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)) for posting periods

From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the types DATS and TIMS specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [numeric texts](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) and the associated rules apply.

-   [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) for [client columns](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](javascript:call_link\('abenddic_database_tables_client.htm'\)).

-   [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)) for [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") and in the binary [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) for passing TABLES parameters between [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") and [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). The [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") is still made up of the [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) are used to represent a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_1)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_3)

Notes

-   Currencies are handled as specified by the data saved in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be edited in transaction OB08.

-   Currency fields are defined as elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using [semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Handling in ABAP Dictionary

A data element of data type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) is handled as a field of data type [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and is stored in database tables in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format. When creating a data element or a structure component of the data type CURR in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)), a number of decimal places other than zero must be defined. The standard value is two fractional digits.

For every structure component of data type CURR, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) with the data type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)). This field is the [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") that defines the actual currency. From a technical perspective, the data type CUKY is handled like a type CHAR with length 5.

Notes

-   The number of decimal places for the currency defined by the currency key of type CUKY only determines the formatting and checking of a currency field on a dynpro. In principal, it is independent of the number given for the currency field of type CURR. The default value of two decimal places for currency fields in ABAP Dictionary is chosen because most of the currencies in the database table TCURC have two decimal places and are not entered in the database table TCURX. It is not advisable to use any other value, since in this case any unforeseen operations with currency keys in ABAP programs are largely ignored.

-   The conversion function [CURRENCY\_CONVERSION](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") also assumes two decimal places for currency fields. If the function for currency fields is used with other amounts of decimal places, unexpected behaviour may arise.

-   As in [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in type CURR should be odd.

Handling in Dynpros

For the display of an input/output field of type CURR on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). Here, the positioning of the decimal point for a currency field of type CURR on a dynpro is completely independent of the number of decimal places specified by the data element in ABAP Dictionary (greater than or equal to one, the default value is two). The number of decimal places on a dynpro is defined as follows:

-   When displaying a dynpro field of type CURR, the reference field for the currency key is searched for in the global data of the current ABAP program. The content of this field must be a valid [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC. If the reference field is not found or there is no entry in the database table TCURX with the content of the field, the currency field is displayed with two fractional digits by default.
    The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

-   If the currency ID for the reference field is found in the database table TCURX, the currency field is displayed with the decimal places specified there. This also applies to initial reference fields.

Note

A dynpro therefore only uses the string of digits of a currency field from the ABAP program (or a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") in between) or just sends this string. Any information about currency keys and decimal places is not passed automatically. It must be ensured that the reference field for PBO is filled with the appropriate value. For PAI, the correct currency key plays a part in the automatic format check. Especially on dynpros in which currency fields are displayed in differing currencies, it must be ensured that the reference field is transported before the currency by using the statements [CHAIN](javascript:call_link\('dynpchain.htm'\)) and [FIELD](javascript:call_link\('dynpfield.htm'\)).

Handling in ABAP Programs

The ABAP type that corresponds to the CURR data type is p. An ABAP data object declared with reference to a dictionary type of type CURR has the number of decimal places defined there (greater than or equal to one and the default is two). These decimal places are respected for all operations and calculations, as for all packed numbers. The only exceptions are the programs for which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") was not set.

To work correctly with a currency field, all digits in the number must be recorded as currency amounts in the smallest possible currency units, regardless of the number of decimal places. This occurs automatically sometimes, for example, if [CURRENCY](javascript:call_link\('abapwrite_to_options.htm'\)) is used after [WRITE \[TO\]](javascript:call_link\('abapwrite_to.htm'\)) or the formatting option [CURRENCY](javascript:call_link\('abapcompute_string_format_options.htm'\)) in an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)) of a [character string template](javascript:call_link\('abenstring_templates.htm'\)). For other operations, the following restrictions apply:

-   Comparison, addition, subtraction, and division of two currency fields with the same number of fractional digits are not critical.

-   Multiplication with and division by a non-currency-dependent number is not critical.

-   All other operations are critical, for example:

-   Multiplication of two currency fields.

-   Operations between two fields with different currencies that include assignments.

-   Assignments of non-currency-dependent numbers to currency fields.

Accurate results should not be expected when performing critical operations if the number of decimal places in the program does not match the number in the currency.

Notes

-   For currencies, one of the data types for [decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) is recommended rather than the data type CURR. The currency-compliant formatting is supported on dynpros by output styles and by style-compatible formatting in ABAP programs. See the [executable example](javascript:call_link\('abenwrite_style_abexa.htm'\)).

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](javascript:call_link\('abencl_abap_decfloat_doc.htm'\)) convert currency amounts to decimal floating point numbers (and back) as specified by a currency key.


### abenddic_quantity_field.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Quantity Fields

A quantity field is a component of a structure, database table, or view of type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) defined in ABAP Dictionary and used to record a quantity in a specific unit. A quantity field must be associated with a unit key of a structure, database table, or view that defines the unit and the number of decimal places. A unit key is a component of a structure, database table, or view of type UNIT defined in ABAP Dictionary and can contain a [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the database table T006.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_1)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using [semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Handling in ABAP Dictionary

A data element of data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is handled as a field of data type [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and is stored in database tables in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) with the data type [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)). This field is the [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](javascript:call_link\('abapwrite_to_options.htm'\)) of the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)).


### abenddic_builtin_types_special.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Special Dictionary Types

-   [Date types and time types](javascript:call_link\('abenddic_date_time_types.htm'\))

-   [Special character-like types](javascript:call_link\('abenddic_special_character_types.htm'\))

-   [Currency fields](javascript:call_link\('abenddic_currency_field.htm'\))

-   [Quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\))

Continue
[Date Types and Time Types](javascript:call_link\('abenddic_date_time_types.htm'\))
[Special Character-Like Types](javascript:call_link\('abenddic_special_character_types.htm'\))
[Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\))
[Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\))


### abenddic_obsolete_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Obsolete Dictionary Types

The following built-in data types in ABAP Dictionary are obsolete and should no longer be used:

-   The data types [DF16\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) for [decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) with scaling are obsolete and their use is strongly discouraged.

-   The data type [PREC](javascript:call_link\('abenddic_builtin_types.htm'\)) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like INT2, despite the predefined length (2). The length 2 is relevant only for dynpro fields of the type PREC, which can have two-character positive values at most. The property sign cannot be set for a domain of the type PREC

-   The data type [VARC](javascript:call_link\('abenddic_builtin_types.htm'\)) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this built-in type can still be used. When table fields with this type are used in ABAP SQL, the same [restrictions](javascript:call_link\('abenddic_character_byte_types.htm'\)) apply as to fields with the types STRING and RAWSTRING plus LCHR and LRAW.
