# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Data Types / DDIC - Properties of the Built-In Dictionary Types / DDIC - General Dictionary Types

Included pages: 4


### abenddic_builtin_types_general.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - General Dictionary Types, ABENDDIC_BUILTIN_TYPES_GENERAL, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))
-   [Decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
-   [Character-like types and byte-like types](javascript:call_link\('abenddic_character_byte_types.htm'\))

Continue
[DDIC - Integers, Packed Numbers, Binary Floating Point Numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))
[DDIC - Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
[DDIC - Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\))


### abenddic_builtin_types_int_pack.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Integers, Packed Numbers, Binary Floating Point Numbers, ABENDDIC_BUILTIN_TYPE
S_INT_PACK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Integers, Packed Numbers, Binary Floating Point Numbers

The following types are used for general descriptions of the numeric types (except for decimal floating point numbers):

-   [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) for [integer numbers](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")
    
    These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The ABAP types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), assigned to the types INT1 and INT2, cannot be specified either statically or dynamically in ABAP statements. These types only occur in ABAP programs, by reference to the types INT1 and INT2 from ABAP Dictionary.
    
-   [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")
    
    This type describes general packed numbers in [BCD format](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry"). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.
    
-   [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)) for [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry")
    
    This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of DDIC database tables.
    

Hints

-   An odd number of places should be used in the definition of data types based on the built-in type DEC. These values are stored in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format, for which in ABAP (data type p), only an odd number of digits is possible, since a half byte is used for the sign. If a data type DEC has an even number of characters, however, the length of the associated ABAP type p is rounded up and hence contains the next highest odd number of places. This can cause overflows and exceptions when writing to DDIC database tables. The same applies to the built-in types CURR, DF34\_DEC, DF16\_DEC, and QUAN, which are handled technically like the type DEC.
-   If the built-in types INT1, INT2, INT4, and INT8 are [used](javascript:call_link\('abenddic_builtin_type_usage.htm'\)) to specify types, the number of places must usually be specified as 2, 5, 10, and 19. If the type FLTP is used, 16 places and the same number of decimal places must be specified. The specified number of places is generally ignored by the data types. By default, they describe platform-dependent integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.
    
    -   In the case of integer types, the specified places express the possible decimal places without sign.
    -   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.
    
    The specified places are saved in the metadata of a self-defined type and are evaluated, if necessary, by special frameworks.
    
-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the numeric types specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.
-   If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") has one of the built-in numeric types, the output of a sign must be defined in a [domain](javascript:call_link\('abenddic_domains.htm'\)) so that negative values can be represented.


### abenddic_decimal_floating_point.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Decimal Floating Point Numbers, ABENDDIC_DECIMAL_FLOATING_POINT, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Decimal Floating Point Numbers

In [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_1)
    -   [Decimal Floating Point Types](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_2)
    -   [Replacement Types](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_3)
-   [Handling in Dynpros - Output Length and Output Style](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_4)
-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_5)

Handling in ABAP Dictionary   

In ABAP Dictionary, the following data types are available for decimal floating numbers.

Decimal Floating Point Types   

The following built-in ABAP Dictionary data types represent real floating point types of a database:

-   [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)) for 16-digit numbers.
-   [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)) for 34-digit numbers.

They can be used, without restrictions, as numeric data types in appropriate expressions and functions. They are currently only supported by [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Replacement Types   

The following built-in data types in ABAP Dictionary are used as replacements for real decimal floating point types:

-   [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF16\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for 16-digit numbers.
-   [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for 34-digit numbers.

These types can be used as replacements on database systems that do not support decimal floating point types. They are mainly used to save decimal floating point numbers from ABAP programs and have only restricted use as numeric data types in appropriate expressions and functions:

-   DF16\_DEC and DF34\_DEC
    
    In database fields of this type, decimal floating point numbers are stored as a packed number (format [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))). The length and the number of decimal places must be specified when defining a data type in ABAP Dictionary. For this type, restricted operations can be performed on the database:
    
    -   No operands of these types can be used in [arithmetic SQL expressions](javascript:call_link\('abensql_arith.htm'\)) or [numeric SQL functions](javascript:call_link\('abensql_arith_func.htm'\)).
    -   Columns, but no SQL expressions of these types, can be used as operands in the [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)) except for STRING\_AGG.
    -   In the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)), operations with these types are possible with [SET + and \-](javascript:call_link\('abapupdate_set_expression.htm'\)).
    -   Database fields with these types can be processed in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").
    -   When there is a write to the database, the system implicitly rounds off to the number of decimal places and decimal overflows can occur.
-   DF16\_RAW and DF34\_RAW
    
    In database fields of this type, decimal floating point numbers are stored as binary (in RAW format). The length is set to 16 or 34 places. Values can be sorted, compared, and used in indexes. For this type, no calculations can be performed on the database. This is an SAP-specific format, which means that the corresponding fields also cannot be processed in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"). The scaling is lost when writing to the database.
    

Hints

-   If possible, the types DECFLOAT16 and DECFLOAT34 should be used.
-   If it is still necessary to work with the replacement types, its intended use case determines which type is to be used:
    -   The types DF16\_DEC and DF34\_DEC can be used for calculations on the database, but their value ranges are smaller than those of real decimal floating point numbers.
    -   The types DF16\_RAW and DF34\_RAW cover the whole value range, but are not recognized as numbers by the databases.
-   As in the [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in the replacement types DF16\_DEC and DF34\_DEC should be odd.
-   In [ABAP CDS](javascript:call_link\('abencds.htm'\)) it is not usually possible to execute expressions or functions for the replacement types.
-   As well as the types above, there are also the [obsolete](javascript:call_link\('abenddic_obsolete_types.htm'\)) replacement types DF16\_SCL and DF34\_SCL for decimal floating point numbers with [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry").
    -   In database fields of this type, decimal floating point numbers are stored in the same way as DF16\_RAW or DF34\_RAW (length 16 or 34 places, and the same restrictions apply). The scaling must be specified in a direct successor database field with type INT2. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads.
    -   It is strongly advised not to use the types DF16\_SCL and DF34\_SCL. Their functions are rarely needed and the additional column for scaling makes them too complicated and error-prone to use correctly.

Handling in Dynpros - Output Length and Output Style   

The maximum output length that can be specified in a [domain](javascript:call_link\('abenddic_domains.htm'\)) for a 16-character decimal floating point number is 24. For a 34-character number, 46 is the maximum output length. These are also the default values.

In a domain, or directly in a structure component created using one of the types for decimal floating numbers (but not in data elements with directly specified technical properties), one of the following output styles is always defined. The output style defines how a dynpro field defined with reference to this domain (or a corresponding ABAP field in the case of list output) is formatted:

-   Normal
    
    Mathematical or scientific notation (depending on space)
    
-   Sign right
    
    Commercial notation (canceled if not enough space, instead of implicit transformation to scientific notation)
    
-   Scale-preserving
    
    Format with preservation of scaling, including trailing zeros in the decimal places
    
-   Scientific
    
    Scientific notation
    
-   Scientific with leading zero
    
    Scientific notation with a 0 as an integer digit
    
-   Scale-preserving scientific
    
    Scientific notation including trailing zeros in the mantissa.
    
-   Engineering
    
    Scientific notation where the exponent is always an integer and a multiple of 3. The value range of the integer digits is between 1 and 999 (except if the source field has the value 0).
    

For dynpro fields whose data type is not defined in ABAP Dictionary, the output style can also be determined in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). In the case of formatting with [string templates](javascript:call_link\('abapcompute_string_format_options.htm'\)) or with the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)), the addition [STYLE](javascript:call_link\('abapwrite_ext_options.htm'\)) is available.

Hints

-   If scientific notation is used, a limited number of displayed positions of the mantissa can be useful. This can be achieved using the built-in function [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)).
-   The "scale-preserving" style ensures that the scaling is restored in conversions from dynpro fields to ABAP, and not just the original value.
-   If vertically aligned decimal separators and exponents are needed on UIs, the scale-preserving scientific notation can be used.

Handling in ABAP Programs   

The ABAP types that correspond to the 16 or 34 figure decimal floating numbers in ABAP Dictionary are decfloat16 and decfloat34, which are handled internally according to the IEEE-754-2008 standard, and are supported by all ABAP operations. There is restricted support for floating point numbers with replacement types in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)). In [arithmetic SQL expressions](javascript:call_link\('abensql_arith.htm'\)), only those decimal floating point numbers are supported that are based on the decimal floating point types.

The addition [STYLE](javascript:call_link\('abapwrite_to_options.htm'\)) after [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)) and the formatting option [STYLE](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) are available for the formatting of decimal floating numbers in programs. These overwrite the output style defined in ABAP Dictionary. When the addition [CURRENCY](javascript:call_link\('abapwrite_to_options.htm'\)) is used after [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)) for a decimal floating number defined in the ABAP Dictionary, it must be defined with the output style Sign right, otherwise an exception occurs.


### abenddic_character_byte_types.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Character-Like Types and Byte-Like Types, ABENDDIC_CHARACTER_BYTE_TYPES, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Character-Like Types and Byte-Like Types

-   [Character Strings](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_1)
-   [Byte Chains](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2)
-   [Notes on Strings](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_3)
-   [Use in ABAP CDS](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4)
-   [Use in ABAP SQL](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_5)
-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_6)

Character Strings   

The following built-in data types in ABAP Dictionary are available for general character strings:

-   [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) for text fields
    
    The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters (only 1333 characters for table fields, view fields, and fields of CDS entities).
    
-   [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) for long text fields
    
    The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LCHR or LRAW. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
    
-   [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for short text strings
    
    The built-in type SSTRING is mapped to the ABAP type string, but handled like the type CHAR or VARCHAR in ABAP Dictionary and by DDIC database tables. The length is restricted to a maximum of 1333, but table fields of this type can also be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) by DDIC database tables and used by ABAP SQL statements in almost all positions where text fields are possible.
    
-   [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for text strings
    
    The built-in type STRING is mapped to the ABAP type string and also handled like a text string ([CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in DDIC database tables or in any positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of at least 256 can be specified to restrict its length when used for a table field of a DDIC database table, which is relevant for ABAP SQL access (see below).
    

Hints

-   In general [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type CHAR is not restricted to 1333.
-   In DDIC database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LCHR field, the preceding length field must also be read. In [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of DDIC database tables or for unrestricted use in ABAP SQL. Where possible, SSTRING can be used here instead.
-   Switching existing dictionary objects from LCHR to STRING or SSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains   

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte fields
    
    The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters (only 255 characters for table fields).
    
-   [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for long byte fields
    
    The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LRAW or LCHR. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
    
-   [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte strings
    
    The built-in type RAWSTRING is mapped to the ABAP type xstring and also handled like a byte string ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in DDIC database tables or in any positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a DDIC database table, which is relevant for ABAP SQL access (see below).
    

Hints

-   In general [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type RAW is not restricted to 255.
-   In DDIC database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LRAW field, the preceding length field must also be read. In [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of DDIC database tables or for unrestricted use in ABAP SQL.
-   Switching existing dictionary objects from LRAW to RAWSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings   

The following points must be remembered when using built-in data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a DDIC database table.
-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type CHAR is also possible.
-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. Truncations of strings when read to a target field, however, are ignored.
-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.
-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)).
-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.
-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") fields. An empty long string can also be saved using the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.
-   If a [work area](javascript:call_link\('abenabap_sql_wa.htm'\)) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in ABAP SQL, the work area or the line type of the internal table must be compatible with the database structure.
-   If DDIC structures, DDIC database tables, or DDIC views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](javascript:call_link\('abaptables.htm'\)) statement (obsolete for database accesses) or for typing the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") of procedures.
-   Access may be slower for long strings (LOBs) in DDIC database tables than for other data types. If not all data is needed at once (and to bypass any memory limits on the AS instance), [streaming](javascript:call_link\('abenabap_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)) can be used to access long strings.

Use in ABAP CDS   

The following restrictions apply in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") with respect to character-like types and byte-like types:

-   The data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following cases:
    -   In the SELECT list if the addition DISTINCT is specified ([CDS view entity](javascript:call_link\('abencds_select_statement_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_select_statement_v1.htm'\)))
    -   In CAST expressions ([CDS view entity](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_cast_expression_v1.htm'\)))
    -   In comparison expressions cds\_cond ( [CDS view entity](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_conditional_expression_v1.htm'\)))
    -   In string functions ([CDS view entity](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)))
    -   In CASE expressions ([CDS view entity](javascript:call_link\('abencds_case_expression_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_case_expression_v1.htm'\)))
    -   In aggregate expressions ([CDS view entity](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)))
    -   For columns merged using UNION (currently only available in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_union_v1.htm'\)))
    -   After GROUP BY ([CDS view entity](javascript:call_link\('abencds_group_by_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_group_by_v1.htm'\)))
    -   After SIBLINGS ORDER BY in the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))
-   The data types LCHR and LRAW cannot be used in the following case:
    -   For [typings](javascript:call_link\('abencds_typing.htm'\))
-   The data type RAW can only be used in a small number of operand positions.

Hint

The obsolete data type VARC cannot be used in ABAP CDS.

Use in ABAP SQL   

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in ABAP SQL.
-   Database fields with the data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following operand positions:
    -   As arguments of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))
    -   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is used
    -   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used In the [strict mode from Release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), this produces a syntax error. Otherwise, the extended program check produces a syntax warning that can be hidden by a pragma.
    -   In [SQL conditions](javascript:call_link\('abenasql_cond.htm'\)) except [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).
    -   In the [GROUP BY clause](javascript:call_link\('abapgroupby_clause.htm'\))
    -   In the [ORDER BY clause](javascript:call_link\('abaporderby_clause.htm'\))
    -   After [SIBLINGS ORDER BY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) in the [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry")
-   The data type SSTRING can be used without restrictions, except in the [coalesce](javascript:call_link\('abensql_coalesce.htm'\)) function and in [CASE](javascript:call_link\('abensql_case.htm'\)) expressions.

Hint

The same restrictions apply to the obsolete data type VARC as to STRING and RAWSTRING plus LCHR and LRAW.

Handling in Dynpros   

When a field with character-like dictionary type is used from a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](javascript:call_link\('abenddic_domains_sema.htm'\)) can be preserved for data elements in the semantic properties of a domain.
