  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

DDIC - Decimal Floating Point Numbers

In [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

-   [Handling in ABAP Dictionary](#abenddic-decimal-floating-point-1--------decimal-floating-point-types---@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_2)

-   [Replacement Types](#abenddic-decimal-floating-point-3--------handling-in-dynpros---output-length-and-output-style---@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_4)

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

-   If it is still necessary to work with the replacement types, it depends on the intended use which type is to be used:

-   The types DF16\_DEC and DF34\_DEC can be used for calculations on the database, but their value ranges are smaller than those of real decimal floating point numbers.

-   The types DF16\_RAW and DF34\_RAW cover the whole value range, but are not recognized as numbers by the databases.

-   As in the [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in the replacement types DF16\_DEC and DF34\_DEC should be odd.

-   In [ABAP CDS](javascript:call_link\('abencds.htm'\)) it is not usually possible to execute expressions or functions for the replacement types.

-   As well as the types above, there are also the [obsolete](javascript:call_link\('abenddic_obsolete_types.htm'\)) replacement types DF16\_SCL and DF34\_SCL for decimal floating point numbers with [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry").

-   In database fields of this type, decimal floating point numbers are stored in the same way as DF16\_RAW or DF34\_RAW (length 16 or 34 places, and the same restrictions apply). The scaling must be specified in a direct successor database field with type INT2. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads.

-   It is strongly advised not to use the types DF16\_SCL and DF34\_SCL. Their functions are rarely needed and the additional column for scaling makes them too complicated and error-prone to use correctly.

Handling in Dynpros - Output Length and Output Style

The maximum output length that can be specified in a [domain](javascript:call_link\('abenddic_domains.htm'\)) for a 16-character decimal floating point number is 24. For a 34-character number, 46 is the maximum output length. These are also the default values.

In a domain, or directly in a structure component created using one of the types for decimal floating numbers (but not in data elements with directly specified technical attributes), one of the following output styles is always defined. The output style defines how a dynpro field defined with reference to this domain (or a corresponding ABAP field in the case of list output) is formatted:

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